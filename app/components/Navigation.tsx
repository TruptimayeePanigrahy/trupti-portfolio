'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false); // Close mobile menu after navigation
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-green-200 dark:border-cyan-500/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                Truptimayee Panigrahy
                            </h1>
                            <div className="hidden sm:flex gap-1">
                                <span className="text-pink-400 animate-pulse">✨</span>
                                <span className="text-purple-400 animate-pulse delay-75">✨</span>
                                <span className="text-cyan-400 animate-pulse delay-150">✨</span>
                            </div>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-cyan-400 cursor-pointer ${activeSection === link.id
                                        ? 'text-green-600 dark:text-cyan-400 font-semibold'
                                        : 'text-slate-700 dark:text-slate-300'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="/Truptimayee-Panigrahy-Resume.pdf"
                                target="_blank"
                                className="hidden sm:flex px-4 py-2 bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg text-sm font-medium transition-all duration-300 items-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Resume
                            </a>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-green-200 dark:border-cyan-500/30 hover:border-green-300 dark:hover:border-cyan-400/50 hover:shadow-xl hover:shadow-green-200 dark:hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? (
                                    <svg
                                        className="w-5 h-5 text-slate-900 dark:text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-5 h-5 text-slate-900 dark:text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                )}
                            </button>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="mx-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-green-200 dark:border-cyan-500/30 overflow-hidden">
                    <div className="py-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${activeSection === link.id
                                    ? 'text-green-600 dark:text-cyan-400 bg-green-50 dark:bg-cyan-900/20 font-semibold'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-green-600 dark:hover:text-cyan-400'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href="/Truptimayee-Panigrahy-Resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-green-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
