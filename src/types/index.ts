export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface PartnershipRequest {
  id?: string;
  organization: string;
  email: string;
  partnershipArea?: string;
  goals?: string;
  createdAt: any; // Using any to accommodate Firestore Timestamp or Date
}

export interface Resource {
  id: string;
  title: string;
  type: 'Case Study' | 'Tutorial' | 'Webinar';
  description: string;
  link: string;
}

export type SubscriptionTier = 'trial' | 'basic' | 'pro' | 'premium' | 'expired';

export interface MentoraUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  tier: SubscriptionTier;
  trialStartDate: Date | any; // Firestore Timestamp
  subscriptionExpiresAt: Date | any | null; // null if on trial or lifelong
  createdAt: Date | any;
  schoolName?: string;
  gradeTaught?: string;
  schoolType?: 'Public' | 'Private' | 'International';
  region?: string;
  photoURL?: string | null;
}
