import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

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
                            <a href="https://www.facebook.com/photo.php?fbid=122099498511277196&set=pb.61588315900770.-2207520000&type=3" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.threads.com/@mentora_tz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                {/* Threads Icon */}
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.34-.779-.93-1.318-1.455-1.632a6.12 6.12 0 0 1-.488 2.35c-.535 1.274-1.397 2.15-2.493 2.533-.94.328-2.07.36-3.176.089-1.226-.3-2.24-1.013-2.856-2.008-.542-.875-.78-1.947-.688-3.1.17-2.14 1.64-3.628 3.86-3.906 1.264-.158 2.405.06 3.398.651.153-.8.196-1.726.094-2.767l2.054-.215c.16 1.527.05 2.852-.322 3.952 1.082.783 1.907 1.783 2.379 2.86.768 1.756.86 4.558-1.252 6.627-1.794 1.76-4.03 2.544-7.24 2.569l-.003-.002zm-1.078-7.29c-.2.02-.39.05-.574.095 1.04-.021 1.83-.357 2.312-1.018.37-.505.52-1.142.461-1.878-.076-.943-.58-1.576-1.37-1.683-.5-.068-1.028.01-1.53.228-.72.315-1.213.883-1.375 1.585-.14.614-.05 1.22.25 1.72.36.593.92.889 1.592 1.014.066.014.249-.022.234-.063z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/112026048/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-colors cursor-pointer">
                                <Linkedin size={18} />
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
                            <li><Link href="/legal" className="hover:text-fuchsia-500 transition-colors">Legal & Policies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Mentora Tanzania. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                        <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
