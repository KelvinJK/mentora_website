import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold font-display text-white mb-4">
                            <span className="text-fuchsia-500">Mentora</span> Tanzania
                        </h3>
                        <p className="max-w-md text-slate-400 leading-relaxed mb-6">
                            Empowering educators with intelligent tools and resources to transform learning outcomes across Tanzania and beyond.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="hover:text-fuchsia-400 transition-colors">About Us</Link></li>
                            <li><Link href="#team" className="hover:text-fuchsia-400 transition-colors">Our Team</Link></li>
                            <li><Link href="#programs" className="hover:text-fuchsia-400 transition-colors">Programs</Link></li>
                            <li><Link href="#contact" className="hover:text-fuchsia-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-3 text-fuchsia-500 flex-shrink-0" size={20} />
                                <span>Dar es Salaam, Tanzania</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 text-fuchsia-500 flex-shrink-0" size={20} />
                                <span>+255 123 456 789</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-fuchsia-500 flex-shrink-0" size={20} />
                                <span>hello@mentora.tz</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Mentora Tanzania. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
