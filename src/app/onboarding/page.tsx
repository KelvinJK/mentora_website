'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const TANZANIA_REGIONS = [
  'Arusha', 'Dar es Salaam', 'Dodoma', 'Geita', 'Iringa', 'Kagera',
  'Katavi', 'Kigoma', 'Kilimanjaro', 'Lindi', 'Manyara', 'Mara',
  'Mbeya', 'Morogoro', 'Mtwara', 'Mwanza', 'Njombe', 'Pemba North',
  'Pemba South', 'Pwani', 'Rukwa', 'Ruvuma', 'Shinyanga', 'Simiyu',
  'Singida', 'Songwe', 'Tabora', 'Tanga', 'Unguja North', 'Unguja South',
  'Zanzibar West',
];

const GRADE_LEVELS = [
  'Pre-Primary',
  'Standard I', 'Standard II', 'Standard III', 'Standard IV',
  'Standard V', 'Standard VI', 'Standard VII',
  'Form I', 'Form II', 'Form III', 'Form IV', 'Form V', 'Form VI',
  'Multiple Levels',
];

export default function OnboardingPage() {
  const { user, mentoraUser } = useAuth();
  const router = useRouter();

  const [schoolName, setSchoolName] = useState('');
  const [gradeTaught, setGradeTaught] = useState('');
  const [schoolType, setSchoolType] = useState('Public');
  const [region, setRegion] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
    if (mentoraUser && mentoraUser.schoolName) {
      router.push('/billing');
    }
  }, [user, mentoraUser, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError('');

    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        schoolName,
        gradeTaught,
        schoolType,
        region,
      }, { merge: true });

      const idToken = await user.getIdToken();
      window.location.href = `https://app.mentoratanzania.co.tz?token=${idToken}`;
    } catch (err: any) {
      setError(err.message || 'Failed to save details. Please try again.');
      setLoading(false);
    }
  };

  if (!user) return null;

  const selectClass = "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none transition-all bg-white text-slate-700 appearance-none cursor-pointer";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
          <div className="h-full bg-fuchsia-500 w-1/2"></div>
        </div>

        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl font-bold text-slate-800 font-display">Tell Us About You</h1>
          <p className="text-slate-500 mt-2">Help us personalize your Mentora experience.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">School Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none transition-all"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="e.g. Azania Secondary School"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Region / Location</label>
            <div className="relative">
              <select
                required
                className={selectClass}
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="" disabled>Select your region</option>
                {TANZANIA_REGIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Grade Taught</label>
              <div className="relative">
                <select
                  required
                  className={selectClass}
                  value={gradeTaught}
                  onChange={(e) => setGradeTaught(e.target.value)}
                >
                  <option value="" disabled>Select grade</option>
                  {GRADE_LEVELS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">School Type</label>
              <div className="relative">
                <select
                  className={selectClass}
                  value={schoolType}
                  onChange={(e) => setSchoolType(e.target.value)}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                  <option value="International">International</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 mt-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white rounded-xl font-medium hover:from-fuchsia-700 hover:to-violet-700 shadow-lg shadow-fuchsia-500/30 transition-all disabled:opacity-70"
          >
            {loading ? 'Saving...' : 'Complete Profile & Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
