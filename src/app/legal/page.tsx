import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Shield, FileText, Database, AlertTriangle, Clock, Lock, Building2 } from 'lucide-react';

const policies = [
    {
        title: 'Legal Terms & Conditions',
        description: 'General terms governing use of the Mentora Platform, including definitions, acceptable use, intellectual property, and limitation of liability.',
        href: '/terms',
        icon: FileText,
        part: 'Part I',
        color: 'text-fuchsia-600',
        bg: 'bg-fuchsia-50',
    },
    {
        title: 'Privacy & Data Protection Policy',
        description: 'Our data processing principles, categories of data collected, children\'s safeguards, security measures, and retention policies.',
        href: '/privacy',
        icon: Shield,
        part: 'Part II',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
    },
    {
        title: 'Data Processing Agreement (DPA)',
        description: 'Formal agreement between Mentora (Data Processor) and Institutions (Data Controllers) covering all aspects of data processing.',
        href: '/legal/dpa',
        icon: Database,
        part: 'Part III',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        title: 'DPIA & Risk Management Framework',
        description: 'Data Protection Impact Assessment methodology, risk matrices, privacy risk categories, and mitigation strategies.',
        href: '/legal/dpia',
        icon: AlertTriangle,
        part: 'Part IV',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
    },
    {
        title: 'Service Level Agreement (SLA)',
        description: 'Service availability targets, response times, maintenance windows, escalation procedures, and performance metrics.',
        href: '/legal/sla',
        icon: Clock,
        part: 'Part V',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
    },
    {
        title: 'Information Security Framework',
        description: 'ISO 27001 alignment, ISMS scope, security control domains, risk treatment methodology, and continuous improvement.',
        href: '/legal/security',
        icon: Lock,
        part: 'Part VI',
        color: 'text-rose-600',
        bg: 'bg-rose-50',
    },
    {
        title: 'Institutional & Donor Compliance Framework',
        description: 'Board-level compliance language for donors (GIZ, Mastercard Foundation, Botnar Foundation), governance, ethics, and safeguarding.',
        href: '/legal/compliance',
        icon: Building2,
        part: 'Part VII',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
    },
];

export default function LegalHub() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">Legal &amp; Policy Framework</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">
                        Comprehensive legal terms, privacy protections, and compliance documentation for the Mentora Tanzania platform.
                    </p>
                    <p className="text-sm text-slate-400">© 2026 Mentora Tanzania — A solution by Evolucion Technologies Company Limited</p>
                </div>

                {/* Aligned Laws Banner */}
                <div className="bg-slate-50 rounded-2xl p-6 mb-12 border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-3">Aligned With</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Personal Data Protection Act, 2022 (Tanzania)',
                            'Cybercrimes Act, 2015',
                            'Electronic and Postal Communications Act (EPOCA)',
                            'Children\'s Act (Tanzania)',
                            'GDPR Principles',
                            'OECD Privacy Standards',
                            'ISO 27001',
                        ].map((law) => (
                            <span key={law} className="inline-flex px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">
                                {law}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Policy Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {policies.map((policy) => {
                        const Icon = policy.icon;
                        return (
                            <Link
                                key={policy.href}
                                href={policy.href}
                                className="group block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${policy.bg} flex items-center justify-center flex-shrink-0`}>
                                        <Icon size={24} className={policy.color} />
                                    </div>
                                    <div>
                                        <span className={`text-xs font-bold ${policy.color} uppercase tracking-wider`}>{policy.part}</span>
                                        <h3 className="text-lg font-bold text-slate-800 mt-1 group-hover:text-fuchsia-600 transition-colors">
                                            {policy.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{policy.description}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Contact Info */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500">
                        For legal inquiries, contact us at{' '}
                        <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline font-medium">
                            mentoratanzania@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
