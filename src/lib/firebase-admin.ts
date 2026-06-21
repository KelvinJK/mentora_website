import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { Firestore, getFirestore } from 'firebase-admin/firestore';

let initialized = false;
let initFailed = false;

export function getAdminDb(): Firestore | null {
  if (initFailed) return null;

  if (!initialized) {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      console.warn('Firebase Admin: missing env vars (FIREBASE_CLIENT_EMAIL or FIREBASE_PRIVATE_KEY). Webhook will not work.');
      initFailed = true;
      return null;
    }

    try {
      if (getApps().length === 0) {
        initializeApp({
          credential: cert({ projectId, clientEmail, privateKey }),
        });
      }
      initialized = true;
    } catch (error: any) {
      console.error('Firebase Admin init failed:', error.message);
      initFailed = true;
      return null;
    }
  }

  return getFirestore();
}
