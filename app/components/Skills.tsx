'use client';

import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = [
    "Html", "CSS", "JavaScript", "NextJs", "ReactJs", "MongoDB", "MySql", "MVC",
    "Tailwind css", "NodeJs", "ExpressJs", "Github", "Socket.Io", "BunnyCdn",
    "Supabase", "Shadcn", "Clerk", "Zustand", "TypeScript", "payloadCms", "Medusajs"
  ];

  const softSkills = [
    "Problem-Solving Mindset", "Communication Skill", "Time Management", "Flexibility", "Team Work"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-lg">
              Skills
            </h2>
            <div className="w-24 h-1 bg-green-600 dark:bg-cyan-500 mx-auto rounded"></div>
          </div>

          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-2xl border border-green-200 dark:border-cyan-500/30 p-8 md:p-12 space-y-8 hover:shadow-green-200 dark:hover:shadow-cyan-500/20 hover:border-green-300 dark:hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-5 py-2.5 bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${hoveredSkill === skill
                      ? 'scale-110 shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-400'
                      : 'hover:scale-105 hover:shadow-md hover:shadow-cyan-500/30'
                      }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-5 py-2.5 bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${hoveredSkill === skill
                      ? 'scale-110 shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-400'
                      : 'hover:scale-105 hover:shadow-md hover:shadow-cyan-500/30'
                      }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
