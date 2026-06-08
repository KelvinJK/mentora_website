import { NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
import { SubscriptionTier } from '@/types';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const headers = req.headers;

    const timestamp = headers.get('X-Webhook-Timestamp') || headers.get('x-webhook-timestamp');
    const signature = headers.get('X-Webhook-Signature') || headers.get('x-webhook-signature');
    const signingKey = process.env.SNIPPE_WEBHOOK_SECRET;

    if (!timestamp || !signature || !signingKey) {
      return NextResponse.json({ error: 'Missing signature components' }, { status: 400 });
    }

    let payload;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    // Prevent replay attacks (5 min max)
    const eventTime = parseInt(timestamp, 10);
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - eventTime > 300) {
      return NextResponse.json({ error: 'Webhook timestamp too old' }, { status: 400 });
    }

    // Verify signature
    const message = `${timestamp}.${rawBody}`;
    const expectedSignature = crypto
      .createHmac('sha256', signingKey)
      .update(message)
      .digest('hex');

    const signatureBuffer = Buffer.from(signature);
    const expectedSignatureBuffer = Buffer.from(expectedSignature);

    if (signatureBuffer.length !== expectedSignatureBuffer.length) {
      return NextResponse.json({ error: 'Invalid webhook signature length' }, { status: 401 });
    }

    if (!crypto.timingSafeEqual(signatureBuffer, expectedSignatureBuffer)) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
    }

    if (payload.type === 'payment.completed') {
      const uid = payload.data?.metadata?.uid || payload.data?.metadata?.user_id;

      if (!uid) {
        return NextResponse.json({ error: 'Missing user metadata in webhook' }, { status: 400 });
      }

      const planCode = payload.data?.metadata?.plan || 'basic';

      let tier: SubscriptionTier = 'basic';
      if (planCode === 'pro') tier = 'pro';
      if (planCode === 'premium') tier = 'premium';

      const expirationDate = new Date();
      if (tier === 'basic') expirationDate.setDate(expirationDate.getDate() + 30);
      if (tier === 'pro') expirationDate.setDate(expirationDate.getDate() + 90);
      if (tier === 'premium') expirationDate.setFullYear(expirationDate.getFullYear() + 1);

      const adminDb = getAdminDb();
      if (!adminDb) {
        return NextResponse.json({ error: 'Firebase Admin not initialized — check FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY in Vercel env vars' }, { status: 500 });
      }

      const userRef = adminDb.collection('users').doc(uid);
      await userRef.update({
        tier: tier,
        subscriptionExpiresAt: expirationDate,
      });

      return NextResponse.json({ success: true, message: 'Subscription successfully upgraded' }, { status: 200 });
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error: any) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed', details: error.message },
      { status: 500 }
    );
  }
}
