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
