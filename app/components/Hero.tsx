'use client';

import Image from 'next/image';

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">


            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in">
                        <p className="text-green-600 dark:text-slate-400 text-lg font-medium animate-slide-in">
                            👋 Hello, I&apos;m
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white drop-shadow-lg animate-slide-in" style={{ animationDelay: '0.1s' }}>
                            Truptimayee Panigrahy
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                            A{' '}
                            <span className="text-green-700 dark:text-cyan-400">
                                Full Stack Web Developer
                            </span>{' '}
                            From India
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed animate-slide-in" style={{ animationDelay: '0.3s' }}>
                            I build responsive and performant web applications using{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold hover:text-teal-500 dark:hover:text-cyan-300 transition-colors">Next.js</span>,{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold hover:text-teal-500 dark:hover:text-cyan-300 transition-colors">Express</span>, and{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold hover:text-teal-500 dark:hover:text-cyan-300 transition-colors">MongoDB</span>.
                            Passionate about clean code, scalability, and modern web development.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="px-8 py-4 bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 cursor-pointer"
                            >
                                About Me
                            </button>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/TruptimayeePanigrahy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/50 cursor-pointer group"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/truptimayee-panigrahy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/50 cursor-pointer group"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Profile Picture Area */}
                    <div className="relative flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Enhanced Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-500/10 dark:bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 dark:bg-indigo-900/30 rounded-full blur-2xl animate-pulse delay-500"></div>
                            <div className="absolute top-1/2 -right-10 w-16 h-16 bg-teal-500/10 dark:bg-blue-900/20 rounded-full blur-xl animate-pulse delay-300"></div>

                            {/* Enhanced Circular Frame with Image */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500/30 dark:border-cyan-500/50 shadow-2xl shadow-green-500/20 dark:shadow-cyan-500/30">
                                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                                    <Image
                                        src="/Truptimayee.png"
                                        alt="Truptimayee Panigrahy"
                                        width={320}
                                        height={320}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Enhanced Floating Elements - Light mode: green, Dark mode: cyan */}
                            <div className="absolute top-0 right-0 w-10 h-10 bg-green-500/30 dark:bg-cyan-500/40 rounded-lg rotate-45 animate-float shadow-lg shadow-green-500/30 dark:shadow-cyan-500/50"></div>
                            <div className="absolute bottom-10 left-0 w-8 h-8 bg-teal-500/30 dark:bg-cyan-500/30 rounded-full animate-float delay-300 shadow-lg shadow-teal-500/30 dark:shadow-cyan-500/50"></div>
                            <div className="absolute top-1/4 -left-6 w-6 h-6 bg-green-500/40 dark:bg-cyan-500/40 rounded-full animate-float delay-700 shadow-lg shadow-green-500/30 dark:shadow-cyan-500/50"></div>
                            <div className="absolute bottom-1/4 -right-4 w-5 h-5 bg-blue-500/30 dark:bg-cyan-500/30 rounded-lg rotate-12 animate-float delay-1000 shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
