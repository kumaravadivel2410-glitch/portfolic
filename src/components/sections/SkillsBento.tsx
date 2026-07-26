"use client";

import { motion } from "framer-motion";
import { Terminal, Globe, Database, Wrench, Brain, Sparkles } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function SkillsBento() {
  const categoryIcons = [Terminal, Globe, Database, Wrench, Brain];

  const skillCategories = portfolioContent.skillsGrouped.map((cat, idx) => ({
    ...cat,
    icon: categoryIcons[idx % categoryIcons.length],
    colSpan:
      idx === 0
        ? "lg:col-span-7"
        : idx === 1
        ? "lg:col-span-5"
        : "lg:col-span-4",
    bgGradient:
      idx % 3 === 0
        ? "from-sky-100/60 via-blue-50/40 to-transparent"
        : idx % 3 === 1
        ? "from-blue-100/60 via-sky-50/40 to-transparent"
        : "from-indigo-100/60 via-sky-50/40 to-transparent",
  }));

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            03 / SKILLS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Technical <span className="text-gradient">Toolkit &amp; Expertise</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          An asymmetric bento layout organizing coursework, self-taught tools, and core computer science fundamentals.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${cat.colSpan} glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 relative overflow-hidden flex flex-col justify-between group shadow-md hover:border-sky-300 transition-all bg-white/80`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{cat.title}</h3>
                  </div>
                  <Sparkles className="w-4 h-4 text-sky-400 group-hover:text-sky-600 transition-colors" />
                </div>

                {/* Skill Badges (Universal Glass Pills) */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-4 py-2.5 rounded-2xl glass-card bg-white/90 hover:bg-white border border-slate-200 hover:border-sky-300 transition-all flex items-center justify-between space-x-3 text-sm font-semibold text-slate-800 shadow-sm"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200 font-medium">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
