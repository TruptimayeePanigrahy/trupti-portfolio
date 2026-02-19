'use client';

export default function Education() {
  const education = [
    {
      institution: "Masai School (Full Time)",
      degree: "Full Stack web Developer",
      period: "Oct 2022 – Aug 2023",
      location: "Bengaluru, India"
    },
    {
      institution: "Berhampur University",
      degree: "B.Sc (Zoology Honours)",
      period: "Jul 2018 – Aug 2021",
      location: "Berhampur, India"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-lg">
              Education
            </h2>
            <div className="w-24 h-1 bg-green-600 dark:bg-cyan-500 mx-auto rounded"></div>
          </div>

          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-2xl border border-green-200 dark:border-cyan-500/30 p-8 md:p-12 space-y-8 hover:shadow-green-200 dark:hover:shadow-cyan-500/20 hover:border-green-300 dark:hover:border-cyan-400/50 transition-all duration-300">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-4 border-green-600 dark:border-cyan-500 hover:border-green-500 dark:hover:border-cyan-400 transition-colors group"
              >
                <div className="absolute -left-[10px] top-0 w-6 h-6 bg-green-600 dark:bg-cyan-500 rounded-full border-4 border-white dark:border-slate-800 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-green-700 dark:group-hover:text-cyan-400 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-xl text-green-700 dark:text-cyan-400 mb-2 font-medium">
                  {edu.degree}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {edu.period} | {edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
