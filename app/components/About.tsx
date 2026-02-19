'use client';

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-lg">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-green-600 dark:bg-cyan-500 mx-auto rounded"></div>
                    </div>

                    <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-2xl border border-green-200 dark:border-cyan-500/30 p-8 md:p-12 space-y-6 hover:shadow-green-200 dark:hover:shadow-cyan-500/20 hover:border-green-300 dark:hover:border-cyan-400/50 transition-all duration-300">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I am a Full Stack Developer with strong expertise in both front-end and back-end development, building scalable, high-performance web applications that deliver seamless user experiences. I specialize in modern technologies such as{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold">Next.js</span>,{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold">React</span>,{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold">Node.js</span>, and{' '}
                            <span className="text-teal-600 dark:text-cyan-400 font-semibold">MongoDB</span>, focusing on writing clean, maintainable, and efficient code.
                        </p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Alongside web development, I have hands-on knowledge of Artificial Intelligence and its real-world applications. I integrate AI-driven solutions into web platforms to enhance automation, personalization, and intelligent decision-making. My approach combines solid engineering principles with innovative AI capabilities to create future-ready digital products.
                        </p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I am passionate about solving complex problems, optimizing performance, and continuously exploring emerging technologies to build impactful and scalable solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

