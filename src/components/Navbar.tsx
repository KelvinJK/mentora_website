'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold font-display tracking-tight text-slate-800">
                            <span className="text-fuchsia-600">Mentora</span> Tanzania
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#about" className="text-slate-600 hover:text-fuchsia-600 transition-colors font-medium">About</Link>
                        <Link href="#team" className="text-slate-600 hover:text-fuchsia-600 transition-colors font-medium">Team</Link>
                        <Link href="#resources" className="text-slate-600 hover:text-fuchsia-600 transition-colors font-medium">Resources</Link>
                        <Link href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-medium hover:shadow-glow transition-all transform hover:-translate-y-0.5">
                            Partner With Us
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-fuchsia-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col space-y-4">
                    <Link href="#about" className="text-slate-600 font-medium p-2 block" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#team" className="text-slate-600 font-medium p-2 block" onClick={() => setIsOpen(false)}>Team</Link>
                    <Link href="#resources" className="text-slate-600 font-medium p-2 block" onClick={() => setIsOpen(false)}>Resources</Link>
                    <Link href="#contact" className="text-fuchsia-600 font-bold p-2 block" onClick={() => setIsOpen(false)}>Partner With Us</Link>
                </div>
            )}
        </nav>
    );
}
