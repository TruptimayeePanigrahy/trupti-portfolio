'use client';

import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "PiAcademy",
      period: "May 2024 – present",
      url: "https://piacademy.co.uk/",
      description: [
        "Led the development of an educational platform providing students with materials, assignments, practice tests, and exams for various competitive examinations.",
        "Managed the entire project lifecycle, including setup, admin panel management, and creating key UI designs to enhance user experience.",
        "Improved SEO and optimized page load times, resulting in a 40% increase in company profits compared to the previous year.",
        "Integrated Next.js, Payload CMS, MongoDB, BunnyCDN for cloud storage, SendGrid for email services, and Clerk for secure authentication, ensuring a seamless and scalable platform."
      ]
    },
    {
      title: "School Finder Tool",
      period: "Dec 2025 – Feb 2026",
      url: "https://piacademy.co.uk/schools/",
      description: [
        "Built a School Finder platform using Next.js, Payload CMS, and MongoDB that allows parents to explore schools, view detailed profiles, and filter by related subjects.",
        "Implemented dynamic school information pages with integrated map functionality to display precise school locations using stored geo-coordinates.",
        "Developed an author and article system where each author has a dedicated profile page showcasing their published articles, with structured CMS relationships for scalable content management."
      ]
    },
    {
      title: "SchoolUniGuide",
      period: "Oct 2023 – May 2024",
      url: "https://www.schooluniguide.com/",
      description: [
        "Built responsive front-end interfaces and scalable back-end APIs using the MERN stack and Tailwind CSS for a comprehensive listing website featuring universities, colleges, and schools in London.",
        "Managed MongoDB database and optimized queries to efficiently store and retrieve details such as courses, fees, and locations for each institution.",
        "Integrated third-party APIs to enrich data, such as location services and course details, providing users with real-time information and enhancing the overall user experience."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-lg">
              Projects
            </h2>
            <div className="w-24 h-1 bg-green-600 dark:bg-cyan-500 mx-auto rounded"></div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`block bg-white/90 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-2xl border border-green-200 dark:border-cyan-500/30 p-8 md:p-12 transition-all duration-300 cursor-pointer ${hoveredProject === index
                  ? 'scale-105 shadow-green-200 dark:shadow-cyan-500/30 border-green-300 dark:border-cyan-400/50'
                  : 'hover:shadow-green-200 dark:hover:shadow-cyan-500/20 hover:border-green-300 dark:hover:border-cyan-400/40 hover:scale-102'
                  }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-full border border-green-200 dark:border-cyan-500/30">
                    {project.period}
                  </span>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  {project.description.map((item, itemIndex) => {
                    const hasHighlight = item.includes('40% increase');
                    const parts = hasHighlight ? item.split('40% increase in company profits') : [item];
                    return (
                      <li key={itemIndex} className="flex items-start group">
                        <span className="text-teal-600 dark:text-cyan-400 mr-3 mt-1 group-hover:scale-125 group-hover:text-teal-500 dark:group-hover:text-cyan-300 transition-all">▹</span>
                        <span>
                          {hasHighlight ? (
                            <>
                              {parts[0]}
                              <strong className="text-teal-600 dark:text-cyan-400 font-semibold">40% increase in company profits</strong>
                              {parts[1]}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
