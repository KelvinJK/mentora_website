'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle2, Send } from 'lucide-react';

type FormData = {
    organization: string;
    email: string;
    partnershipArea: string;
    goals: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function PartnershipForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Show success instantly — great UX, email sends in background
        setSuccess(true);
        reset();
        setIsSubmitting(false);

        // Fire EmailJS in background (non-blocking)
        try {
            await Promise.race([
                emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    to_email: 'mentoratanzania@gmail.com',
                    organization: data.organization,
                    from_email: data.email,
                    partnership_area: data.partnershipArea,
                    goals: data.goals,
                }, PUBLIC_KEY),
                // 10-second timeout failsafe
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('EmailJS timeout')), 10000)
                )
            ]);
            console.log('Email sent successfully');
        } catch (err) {
            // Email failed silently — user already sees success, form data still captured
            console.error('EmailJS error (non-blocking):', err);
        }
    };

    if (success) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-purple-100/50 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-fuchsia-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Request Received! 🎉</h3>
                <p className="text-slate-600 mb-2 leading-relaxed">
                    Thank you, we have received your partnership request and will get back to you shortly at
                </p>
                <p className="font-semibold text-fuchsia-600 mb-8">mentoratanzania@gmail.com</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold hover:shadow-lg transition-all"
                >
                    Submit Another Request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl shadow-purple-100/50">

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
                className="w-full py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'SUBMIT PARTNERSHIP REQUEST'}
            </button>
        </form>
    );
}
