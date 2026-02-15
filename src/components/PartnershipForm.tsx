'use client';

import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useState } from 'react';

type FormData = {
    organization: string;
    email: string;
    partnershipArea: string;
    goals: string;
};

export default function PartnershipForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorDetails, setErrorDetails] = useState('');

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorDetails('');
        try {
            // Mock submission if no firebase config
            if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Mock submission:', data);
                setSuccess(true);
                reset();
                return;
            }

            await addDoc(collection(db, 'partnerships'), {
                ...data,
                createdAt: serverTimestamp(),
            });
            setSuccess(true);
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorDetails('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl shadow-purple-100/50">
            {success && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg mb-4">
                    Request sent successfully! We will contact you soon.
                </div>
            )}
            {errorDetails && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg mb-4">
                    {errorDetails}
                </div>
            )}

            <div>
                <label className="block text-slate-700 font-medium mb-2">Organization Name</label>
                <input
                    {...register('organization', { required: 'Organization name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. St. Mary's International School"
                />
                {errors.organization && <span className="text-red-500 text-sm mt-1">{errors.organization.message}</span>}
            </div>

            <div>
                <label className="block text-slate-700 font-medium mb-2">Email Address</label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
                    placeholder="contact@school.edu"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
            </div>

            <div>
                <label className="block text-slate-700 font-medium mb-2">Partnership Area</label>
                <select
                    {...register('partnershipArea')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all bg-white"
                >
                    <option value="curriculum">Curriculum Development</option>
                    <option value="training">Teacher Training</option>
                    <option value="technology">EdTech Integration</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label className="block text-slate-700 font-medium mb-2">Goals & Objectives</label>
                <textarea
                    {...register('goals')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all h-32 resize-none"
                    placeholder="Tell us what you hope to achieve..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'SUBMIT PARTNERSHIP REQUEST'}
            </button>
        </form>
    );
}
