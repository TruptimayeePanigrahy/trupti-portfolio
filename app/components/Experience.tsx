'use client';

export default function Experience() {
  const experience = {
    title: "Web Developer",
    company: "PiAcademy Tutor",
    period: "Oct 2023 – present",
    location: "London, UK",
    responsibilities: [
      "Led the development of a full-stack project using Next.js for the frontend, Supabase for backend setup, and MongoDB for data management, ensuring high scalability and performance.",
      "Integrated Next.js with a WordPress API to fetch dynamic content, leveraging server-side rendering (SSR) for optimized SEO and real-time updates.",
      "Configured Supabase to manage secure authentication workflows, role-based access control (RBAC), and authorization, ensuring data security and user privacy.",
      "Integrated Payload CMS with Next.js to enable flexible content management and seamless server-side rendering, enhancing the overall user experience and SEO performance.",
      "Collaborated with cross-functional teams to ensure smooth data flow and efficient integration between frontend, backend, and third-party services, optimizing project delivery."
    ]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-lg">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-green-600 dark:bg-cyan-500 mx-auto rounded"></div>
          </div>

          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-2xl border border-green-200 dark:border-cyan-500/30 p-8 md:p-12 hover:shadow-green-200 dark:hover:shadow-cyan-500/20 hover:border-green-300 dark:hover:border-cyan-400/50 transition-all duration-300">
            <div className="relative pl-8 border-l-4 border-green-600 dark:border-cyan-500">
              <div className="absolute -left-[10px] top-0 w-6 h-6 bg-green-600 dark:bg-cyan-500 rounded-full border-4 border-white dark:border-slate-800"></div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                    {experience.period} | {experience.location}
                  </span>
                </div>
                <p className="text-xl font-medium text-green-700 dark:text-cyan-400 mb-6">
                  {experience.company}
                </p>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start group hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <span className="text-teal-600 dark:text-cyan-400 mr-3 mt-1 group-hover:scale-125 group-hover:text-teal-500 dark:group-hover:text-cyan-300 transition-all">▹</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
