import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold font-display text-white mb-4">
                            <span className="text-fuchsia-500">Mentora</span> Tanzania
                        </h3>
                        <p className="mb-6 leading-relaxed text-slate-400">
                            Empowering educators with AI-driven tools to transform classrooms across Tanzania.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/mentora_tz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61585366216744" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@mentora.tanzania" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                {/* Custom TikTok Icon using a generic video icon for now as Lucide might not have it, or reusing an existing one. Using a path for TikTok logo approximation if needed, or just a video icon */}
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Head Office</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start">
                                <span className="min-w-[24px]">📍</span>
                                <span>Chumbageni Road,<br />Old Tanga School Street</span>
                            </li>
                            <li className="flex items-start">
                                <span className="min-w-[24px]">📧</span>
                                <a href="mailto:mentoratanzania@gmail.com" className="hover:text-fuchsia-500 transition-colors">mentoratanzania@gmail.com</a>
                            </li>
                            <li className="flex items-start">
                                <span className="min-w-[24px]">📞</span>
                                <a href="tel:+255697279355" className="hover:text-fuchsia-500 transition-colors">+255 697 279 355</a>
                            </li>
                        </ul>
                    </div>

                    {/* Branches */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Our Branches</h4>
                        <ul className="space-y-6 text-slate-400">
                            <li>
                                <strong className="text-white block mb-1">Arusha Office</strong>
                                <span>Mianzini Opposite ATC</span>
                            </li>
                            <li>
                                <strong className="text-white block mb-1">Dar Es Salaam Office</strong>
                                <span>Ali Hassan Mwinyi Road</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><Link href="/#about" className="hover:text-fuchsia-500 transition-colors">About Us</Link></li>
                            <li><Link href="/#team" className="hover:text-fuchsia-500 transition-colors">Our Team</Link></li>
                            <li><Link href="/privacy" className="hover:text-fuchsia-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-fuchsia-500 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/support" className="hover:text-fuchsia-500 transition-colors">Support Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Mentora Tanzania. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
