"use client";

import { motion } from "framer-motion";
import { Terminal, Globe, Database, Wrench, Brain, Sparkles } from "lucide-react";

export default function SkillsBento() {
  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: Terminal,
      colSpan: "lg:col-span-7",
      bgGradient: "from-blue-600/10 via-purple-600/10 to-transparent",
      skills: [
        { name: "Python", level: "Advanced Focus", tag: "Primary" },
        { name: "C Language", level: "Hands-on Certified", tag: "Core" },
        { name: "Java", level: "Basics & OOP", tag: "Foundational" },
      ],
    },
    {
      id: "web",
      title: "Web Technologies",
      icon: Globe,
      colSpan: "lg:col-span-5",
      bgGradient: "from-cyan-600/10 via-blue-600/10 to-transparent",
      skills: [
        { name: "HTML5", tag: "Markup" },
        { name: "CSS3", tag: "Styling" },
        { name: "JavaScript (ES6+)", tag: "Interactivity" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Querying",
      icon: Database,
      colSpan: "lg:col-span-4",
      bgGradient: "from-purple-600/10 via-pink-600/10 to-transparent",
      skills: [
        { name: "MySQL", tag: "RDBMS" },
        { name: "SQL Standard", tag: "Queries" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Ecosystem",
      icon: Wrench,
      colSpan: "lg:col-span-4",
      bgGradient: "from-indigo-600/10 via-blue-600/10 to-transparent",
      skills: [
        { name: "VS Code", tag: "IDE" },
        { name: "GitHub", tag: "Version Control" },
      ],
    },
    {
      id: "concepts",
      title: "Core Concepts & Domains",
      icon: Brain,
      colSpan: "lg:col-span-4",
      bgGradient: "from-emerald-600/10 via-cyan-600/10 to-transparent",
      skills: [
        { name: "Data Structures", tag: "CS Core" },
        { name: "DBMS Principles", tag: "Data" },
        { name: "AI Fundamentals", tag: "Applied AI" },
        { name: "Data Science & Analytics", tag: "Analytics" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            03 / SKILLS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical <span className="text-gradient">Toolkit &amp; Expertise</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          An asymmetric bento layout organizing coursework, self-taught tools, and core computer science fundamentals.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${cat.colSpan} glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                  </div>
                  <Sparkles className="w-4 h-4 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all flex items-center justify-between space-x-3 text-sm font-medium text-slate-200 shadow-sm"
                    >
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 relative z-10">
                <span>CAT_ID // 0{idx + 1}</span>
                <span className="text-cyan-400/80">VERIFIED</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
