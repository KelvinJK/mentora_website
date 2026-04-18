'use client';

import { useState, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { db, storage } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Camera, ShieldCheck, Clock, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, mentoraUser } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states initialized to current user data
  const [schoolName, setSchoolName] = useState(mentoraUser?.schoolName || '');
  const [gradeTaught, setGradeTaught] = useState(mentoraUser?.gradeTaught || '');
  const [schoolType, setSchoolType] = useState(mentoraUser?.schoolType || 'Public');
  const [region, setRegion] = useState(mentoraUser?.region || '');

  if (!user || !mentoraUser) return null;

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be less than 5MB');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const storageRef = ref(storage, `avatars/${user.uid}_${Date.now()}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { photoURL: url });
      
      setSuccess('Profile picture updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to upload image. Ensure Storage rules are public on Firebase.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        schoolName,
        gradeTaught,
        schoolType,
        region,
      });

      setSuccess('Profile details saved successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to save details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/billing" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors bg-white px-4 py-2 border border-slate-200 rounded-xl">
          <ArrowLeft className="w-4 h-4" /> Back to Billing
        </Link>
        
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-slate-100 pb-8">
            
            {/* Avatar Section */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100 flex items-center justify-center relative">
                {mentoraUser.photoURL ? (
                  <img src={mentoraUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl text-slate-400 font-bold">{mentoraUser.displayName?.charAt(0).toUpperCase()}</span>
                )}
                
                {/* Upload Overlay */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Camera className="text-white w-8 h-8 mb-1" />
                  <span className="text-white text-xs font-semibold">Change Photo</span>
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleAvatarUpload} 
                className="hidden" 
                accept="image/*" 
              />
            </div>

            {/* Profile Info Section */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <h1 className="text-3xl font-bold text-slate-900 font-display">{mentoraUser.displayName}</h1>
              <p className="text-slate-500">{user.email}</p>
              
              {/* Mentora Badge */}
              <div className="inline-block mt-2">
                {mentoraUser.tier === 'trial' ? (
                  <div className="flex items-center gap-2 text-fuchsia-700 bg-fuchsia-50 px-4 py-1.5 rounded-full border border-fuchsia-200 text-sm font-bold">
                    <Clock className="w-4 h-4" /> Mentora FREE TRIAL
                  </div>
                ) : mentoraUser.tier === 'expired' ? (
                  <div className="flex items-center gap-2 text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 text-sm font-bold">
                    <Lock className="w-4 h-4" /> Mentora EXPIRED
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 text-sm font-bold">
                    <ShieldCheck className="w-4 h-4" /> Mentora {mentoraUser.tier.toUpperCase()} Member
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6 font-display">Teaching Profile</h2>
            
            {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm">{error}</div>}
            {success && <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl mb-6 text-sm">{success}</div>}
            
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">School Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none transition-all"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Region / Location</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none transition-all"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Grade Taught</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none transition-all"
                    value={gradeTaught}
                    onChange={(e) => setGradeTaught(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">School Type</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none transition-all bg-white"
                    value={schoolType}
                    onChange={(e) => setSchoolType(e.target.value)}
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="International">International</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-900 shadow-md transition-all disabled:opacity-70"
              >
                {loading ? 'Saving Updates...' : 'Save Profile Changes'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
