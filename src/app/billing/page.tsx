'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { Check, ArrowLeft, Clock, Lock, ShieldCheck } from 'lucide-react';
import { checkAccess } from '@/lib/userUtils';

export default function BillingPage() {
  const { user, mentoraUser } = useAuth();
  
  // Replace these with actual Snippe Payment Links from your Snippe dashboard
  // Use Snippe parameters (e.g., ?client_reference_id=) to pass the user ID so the webhook knows who paid.
  const WEBHOOK_URL = encodeURIComponent('https://mentoratanzania.com/api/webhooks/snippe');
  
  const SNIPPE_LINKS = {
    basic: `https://snippe.me/pay/mentora-basic-plan?metadata[uid]=${user?.uid}&metadata[plan]=basic&webhook_url=${WEBHOOK_URL}`,
    pro: `https://snippe.me/pay/mentora-pro-plan?metadata[uid]=${user?.uid}&metadata[plan]=pro&webhook_url=${WEBHOOK_URL}`,
    premium: `https://snippe.me/pay/premium-plan?metadata[uid]=${user?.uid}&metadata[plan]=premium&webhook_url=${WEBHOOK_URL}`,
  };

  const getCheckoutLink = (tier: keyof typeof SNIPPE_LINKS) => {
    if (!user) return '/login';
    return SNIPPE_LINKS[tier];
  };

  const hasAccess = checkAccess(mentoraUser);

  // Calculate Trial Remaining
  let trialDaysLeft: number | null = null;
  if (mentoraUser?.tier === 'trial' && mentoraUser.trialStartDate) {
    const trialEnd = new Date(mentoraUser.trialStartDate);
    trialEnd.setDate(trialEnd.getDate() + 14);
    const msLeft = trialEnd.getTime() - new Date().getTime();
    trialDaysLeft = Math.ceil(msLeft / (1000 * 60 * 60 * 24));
  }

  // Calculate Subscription Days Remaining
  let subDaysLeft: number | null = null;
  if (mentoraUser?.tier !== 'trial' && mentoraUser?.subscriptionExpiresAt) {
    const end = new Date(mentoraUser.subscriptionExpiresAt);
    const ms = end.getTime() - new Date().getTime();
    subDaysLeft = Math.ceil(ms / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-4 relative pt-12 md:pt-0">
          {hasAccess ? (
            <a href="https://app.mentoratanzania.co.tz/" className="absolute left-0 top-0 md:flex flex items-center justify-center w-full md:w-auto gap-2 text-fuchsia-600 hover:text-fuchsia-700 transition-colors bg-white px-4 py-2 border border-fuchsia-200 rounded-xl font-medium shadow-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Mentora
            </a>
          ) : (
            <div className="absolute left-0 top-0 md:flex flex items-center justify-center w-full md:w-auto gap-2 text-slate-400 bg-slate-100 px-4 py-2 border border-slate-200 rounded-xl font-medium cursor-not-allowed">
              <Lock className="w-4 h-4" /> App Access Locked (Upgrade Required)
            </div>
          )}
          
          <h1 className="text-4xl font-bold text-slate-900 font-display mt-10 md:mt-0">Account & Billing</h1>
          
          {/* Dynamic Status Banner */}
          <div className="max-w-xl mx-auto flex flex-col items-center gap-2 mt-4 p-4 rounded-xl shadow-sm border bg-white">
            <h2 className="text-sm font-bold tracking-wider text-slate-500 uppercase">Current Package Status</h2>
            
            {!mentoraUser ? (
              <div className="text-slate-600">Loading your profile...</div>
            ) : mentoraUser.tier === 'trial' ? (
              trialDaysLeft !== null && trialDaysLeft > 0 ? (
                <div className="flex items-center gap-2 text-fuchsia-600 font-semibold bg-fuchsia-50 px-4 py-2 rounded-full border border-fuchsia-100">
                  <Clock className="w-5 h-5" /> 14-Day Free Trial Active ({trialDaysLeft} days remaining)
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-semibold bg-red-50 px-4 py-2 rounded-full border border-red-100">
                  <Lock className="w-5 h-5" /> Free Trial Expired. Please upgrade to continue.
                </div>
              )
            ) : (
               <div className="flex flex-col items-center">
                 <div className="flex items-center gap-2 text-emerald-600 font-semibold bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                   <ShieldCheck className="w-5 h-5" /> Mentora {mentoraUser.tier.toUpperCase()} Tier Active
                 </div>
                 {subDaysLeft !== null && subDaysLeft > 0 && (
                   <div className="text-slate-500 text-sm mt-2 font-medium">Your subscription has {subDaysLeft} days remaining.</div>
                 )}
                 {subDaysLeft !== null && subDaysLeft <= 0 && (
                   <div className="text-red-500 text-sm mt-2 font-bold">Your subscription has expired! Please renew below.</div>
                 )}
               </div>
            )}
            
            <p className="text-slate-500 text-sm mt-2 text-center">
              Choose an upgraded tier below to unlock full access to all curriculum tools, unlimited lesson planning, and student analytics.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative">
            <h3 className="text-xl font-bold text-slate-800">Mentora Basic</h3>
            <div className="bg-fuchsia-50 text-fuchsia-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 mt-2">Start Simple</div>
            <div className="mb-4 flex flex-col justify-center gap-1">
              <span className="text-3xl tracking-tight font-extrabold text-slate-900">TZS 5,000</span>
              <span className="text-slate-500 font-medium">/ Month</span>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-2 pb-4">Everything you need to start teaching smarter.</p>
            <p className="text-slate-500 text-xs mb-4 pb-4 border-b border-slate-100">Best for new or occasional teachers who want structured support.</p>
            <ul className="space-y-4 mb-8">
              {['Lesson plan generation', 'Assignment & activity creation', 'Save and edit documents', 'Access to core templates', 'Personal dashboard', 'Controlled AI usage limits', 'Standard speed generation'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href={getCheckoutLink('basic')}
              className="block w-full py-3 px-4 text-center border-2 border-slate-200 text-slate-700 hover:border-slate-800 hover:bg-slate-800 hover:text-white rounded-xl font-medium transition-all"
            >
              Select Basic
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-fuchsia-500 shadow-xl relative scale-105 transform">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md">
              ⭐ MOST POPULAR
            </div>
            <h3 className="text-xl font-bold text-slate-800 mt-2">Mentora Pro</h3>
            <div className="bg-fuchsia-50 text-fuchsia-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 mt-2">Teach Better, Faster</div>
            <div className="mb-4 flex flex-col justify-center gap-1">
              <span className="text-3xl tracking-tight font-extrabold text-slate-900">TZS 12,000</span>
              <span className="text-slate-500 font-medium">/ 3 Months</span>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-2 pb-4">More power, more structure, better results.</p>
            <p className="text-slate-500 text-xs mb-4 pb-4 border-b border-slate-100">Best for active teachers using Mentora regularly.</p>
            <ul className="space-y-4 mb-8">
              {['Everything in Basic', 'More lesson structure options', 'Expanded template library', 'Better AI-generated outputs', 'Faster content creation', 'High usage AI capacity'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-fuchsia-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href={getCheckoutLink('pro')}
              className="block w-full py-3 px-4 text-center bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 text-white rounded-xl font-medium shadow-md shadow-fuchsia-500/20 transition-all"
            >
              Select Pro
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative">
            <h3 className="text-xl font-bold text-slate-800">Mentora Premium</h3>
            <div className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 mt-2">Enterprise Scale</div>
            <div className="mb-4 flex flex-col justify-center gap-1">
              <span className="text-3xl tracking-tight font-extrabold text-slate-900">TZS 40,000</span>
              <span className="text-slate-500 font-medium">/ 12 Months</span>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-2 pb-4">Full administrative oversight.</p>
            <p className="text-slate-500 text-xs mb-4 pb-4 border-b border-slate-100">For departments and entire school administrators.</p>
            <ul className="space-y-4 mb-8">
              {['Everything in Pro', 'Custom School Integrations', 'Team/Department Management', '1-on-1 Personalized Onboarding', 'Enterprise Grade Data Security', 'Full School Directory Sync', 'Dedicated Success Manager'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href={getCheckoutLink('premium')}
              className="block w-full py-3 px-4 text-center border-2 border-slate-200 text-slate-700 hover:border-slate-800 hover:bg-slate-800 hover:text-white rounded-xl font-medium transition-all"
            >
              Select Premium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
