"use client";

import { motion } from "framer-motion";
import { Trophy, BookCheck } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function AchievementsSection() {
  const achievements = portfolioContent.achievements;
  const icons = [Trophy, BookCheck];

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            07 / ACHIEVEMENTS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Milestones &amp; <span className="text-gradient">Recognitions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-8 border border-slate-200/80 relative overflow-hidden flex flex-col justify-between hover:border-sky-300 transition-all group shadow-md bg-white/80"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 font-semibold shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
