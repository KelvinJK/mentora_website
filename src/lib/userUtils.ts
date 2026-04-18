import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { MentoraUser, SubscriptionTier } from '@/types';
import { User } from 'firebase/auth';

/**
 * Initializes a new user document in Firestore with a 14-day trial.
 */
export async function initializeUserRecord(user: User): Promise<MentoraUser> {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    // User already exists, return current data
    const data = userSnap.data() as MentoraUser;
    return {
      ...data,
      trialStartDate: data.trialStartDate?.toDate ? data.trialStartDate.toDate() : data.trialStartDate,
      subscriptionExpiresAt: data.subscriptionExpiresAt?.toDate ? data.subscriptionExpiresAt.toDate() : data.subscriptionExpiresAt,
    };
  }

  // Create new user with trial
  const now = new Date();
  
  const tempUser: MentoraUser = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    tier: 'trial',
    trialStartDate: now,
    subscriptionExpiresAt: null,
    createdAt: now,
    photoURL: user.photoURL || null,
  };

  await setDoc(userRef, tempUser);
  return tempUser;
}

/**
 * Helper to check if a user is actively subscribed or within their trial period.
 */
export function checkAccess(user: MentoraUser | null): boolean {
  if (!user) return false;

  // If tier is premium, basic, pro
  if (['basic', 'pro', 'premium'].includes(user.tier)) {
    // Check if subscription has expired
    if (user.subscriptionExpiresAt) {
      return new Date() < new Date(user.subscriptionExpiresAt);
    }
    return true; // Lifetime or active subscription without explicit end
  }

  // If tier is trial
  if (user.tier === 'trial' && user.trialStartDate) {
    const trialEnd = new Date(user.trialStartDate);
    trialEnd.setDate(trialEnd.getDate() + 14); // 14-day trial
    return new Date() < trialEnd;
  }

  return false;
}
