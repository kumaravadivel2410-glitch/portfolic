"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, Code, Rocket, MapPin } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Track",
      desc: "2nd Year B.Tech Student at JP College of Engineering, Tenkasi",
    },
    {
      icon: Cpu,
      title: "Applied AI & Voice Tech",
      desc: "Building intelligent voice assistants combining live APIs & AI models",
    },
    {
      icon: Code,
      title: "Full-Spectrum Foundations",
      desc: "Strong focus on Python, Web Stack, MySQL databases, and Data Structures",
    },
    {
      icon: Rocket,
      title: "Internship Ready",
      desc: "Seeking hands-on engineering opportunities to deliver real-world value",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            02 / ABOUT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Passionate about <span className="text-gradient">software, AI, &amp; real-world impact</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="space-y-6 relative z-10">
            <div className="flex items-center space-x-3 text-cyan-400 font-mono text-sm">
              <MapPin className="w-4 h-4" />
              <span>Tenkasi, Tamil Nadu, India</span>
            </div>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              <strong className="text-white font-semibold">Kumara Vadivel</strong> is a B.Tech engineering student at JP College of Engineering, Tenkasi, with a growing foundation in programming, data structures, databases, and applied AI.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              He enjoys building things that combine software with real-world usefulness — most recently a smart voice assistant that blends AI, live data, and device control.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Currently sharpening skills across Python, web development, and data science through hands-on coursework and self-driven certifications, he&apos;s looking for an internship where he can apply what he&apos;s learned and keep learning by doing.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>STATUS: ACTIVE_LEARNER</span>
            <span className="text-cyan-400">B.TECH ENGR // 2ND YEAR</span>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all flex items-start space-x-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
