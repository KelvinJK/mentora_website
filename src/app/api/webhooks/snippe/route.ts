import { NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
import { SubscriptionTier } from '@/types';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    // Read raw body required for signature verification
    const rawBody = await req.text();
    const headers = req.headers;
    
    const timestamp = headers.get('X-Webhook-Timestamp') || headers.get('x-webhook-timestamp');
    const signature = headers.get('X-Webhook-Signature') || headers.get('x-webhook-signature');
    const signingKey = process.env.SNIPPE_WEBHOOK_SECRET;

    if (!timestamp || !signature || !signingKey) {
      return NextResponse.json({ error: 'Missing signature components' }, { status: 400 });
    }

    // Attempt to parse payload after securing raw body
    let payload;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    // 1. Verify Timestamp Freshness (prevent replay attacks, 5 mins max)
    const eventTime = parseInt(timestamp, 10);
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - eventTime > 300) {
      return NextResponse.json({ error: 'Webhook timestamp too old' }, { status: 400 });
    }

    // 2. Compute Expected Signature
    const message = `${timestamp}.${rawBody}`;
    const expectedSignature = crypto
      .createHmac('sha256', signingKey)
      .update(message)
      .digest('hex');

    // 3. Constant-Time Comparison
    const signatureBuffer = Buffer.from(signature);
    const expectedSignatureBuffer = Buffer.from(expectedSignature);

    if (signatureBuffer.length !== expectedSignatureBuffer.length) {
      return NextResponse.json({ error: 'Invalid webhook signature length' }, { status: 401 });
    }

    if (!crypto.timingSafeEqual(signatureBuffer, expectedSignatureBuffer)) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
    }

    // 4. Handle Specific Events
    const eventType = payload.type;
    
    if (eventType === 'payment.completed') {
      // Expecting UID to be passed in metadata from Snippe checkout
      const uid = payload.data?.metadata?.uid || payload.data?.metadata?.user_id;
      
      if (!uid) {
        return NextResponse.json({ error: 'Missing user metadata in webhook' }, { status: 400 });
      }

      // Check plan from metadata or default to specific based on payload structure we set up
      // In production, map Snippe Plan / Amount to explicitly determine tier
      const planCode = payload.data?.metadata?.plan || 'basic';
      
      let tier: SubscriptionTier = 'basic';
      if (planCode === 'pro') tier = 'pro';
      if (planCode === 'premium') tier = 'premium';

      // Set expiration to 30 days from now
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);

      const adminDb = getAdminDb();
      if (!adminDb) {
        return NextResponse.json({ error: 'Firebase Admin not initialized properly' }, { status: 500 });
      }

      const userRef = adminDb.collection('users').doc(uid);
      await userRef.update({
        tier: tier,
        subscriptionExpiresAt: expirationDate,
      });

      return NextResponse.json({ success: true, message: 'Subscription successfully upgraded' }, { status: 200 });
    }

    // Acknowledge other event types with 200 immediately
    return NextResponse.json({ received: true }, { status: 200 });
    
  } catch (error: any) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed', details: error.message },
      { status: 500 }
    );
  }
}
