"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, BookCheck, Zap } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Coding Contests & Technical Events",
      desc: "Actively participated in competitive programming contests and college technical symposiums to sharpen problem-solving under pressure.",
      badge: "Competitive Coding",
    },
    {
      icon: BookCheck,
      title: "Self-Driven Learning Milestone",
      desc: "Completed over 9 specialized online courses & certifications spanning Python, Artificial Intelligence, SQL, and Web Development ahead of curriculum schedules.",
      badge: "Continuous Skill-Building",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            07 / ACHIEVEMENTS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Milestones &amp; <span className="text-gradient">Recognitions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-purple-400/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>ACHIEVEMENT_LOG // 0{idx + 1}</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
