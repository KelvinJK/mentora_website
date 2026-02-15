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
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
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
