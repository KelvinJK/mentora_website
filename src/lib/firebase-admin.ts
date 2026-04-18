import * as admin from 'firebase-admin';

export function getAdminDb() {
  if (!admin.apps.length) {
    try {
      if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        console.warn('Firebase env variables missing. Skipping Admin init.');
        // Return a dummy object so builds don't crash when evaluating
        return null as unknown as admin.firestore.Firestore;
      }
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Handle newline characters in private key
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    } catch (error: any) {
      console.error('Firebase Admin Initialization Error:', error.stack);
    }
  }
  return admin.firestore();
}
