'use client';

import Image from 'next/image';

export default function MissionVision() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Mission */}
                    <div className="bg-fuchsia-50 rounded-3xl p-10 border border-fuchsia-100 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-20 h-20 mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                            <Image src="/images/icons/target.png" alt="Mission" width={80} height={80} className="object-contain drop-shadow-lg" />
                        </div>
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            To empower educators with intelligent tools that automate administrative burdens, enabling them to focus on what truly matters: inspiring and mentoring every student.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-violet-50 rounded-3xl p-10 border border-violet-100 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-20 h-20 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                            <Image src="/images/icons/sun.png" alt="Vision" width={80} height={80} className="object-contain drop-shadow-lg" />
                        </div>
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A Tanzania where every student has access to personalized, high-quality education, driven by empowered teachers and data-driven insights.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Our Core Values</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-violet-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                            <Image src="/images/icons/star.png.png" alt="Innovation" width={64} height={64} className="object-contain drop-shadow-lg" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Innovation</h4>
                        <p className="text-sm text-slate-500">Forward-thinking solutions</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                            <Image src="/images/icons/shield.png" alt="Integrity" width={64} height={64} className="object-contain drop-shadow-lg" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Integrity</h4>
                        <p className="text-sm text-slate-500">Trust and transparency</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                            <Image src="/images/icons/gift.png" alt="Impact" width={64} height={64} className="object-contain drop-shadow-lg" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Impact</h4>
                        <p className="text-sm text-slate-500">Measurable results</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                            <Image src="/images/icons/megaphone.png" alt="Community" width={64} height={64} className="object-contain drop-shadow-lg" />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Community</h4>
                        <p className="text-sm text-slate-500">Growing together</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
