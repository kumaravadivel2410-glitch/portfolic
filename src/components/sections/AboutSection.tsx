"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, Code, Rocket, MapPin } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Track",
      desc: "3rd Year B.Tech Student (AI & DS) at JP College of Engineering, Tenkasi",
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
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            02 / ABOUT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
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
          className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between relative overflow-hidden shadow-lg bg-white/80"
        >
          <div className="space-y-6 relative z-10">
            <div className="flex items-center space-x-3 text-sky-700 font-mono text-sm font-semibold">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>{portfolioContent.personal.location}, India</span>
            </div>

            {portfolioContent.personal.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
              Available for Internship
            </span>
            <span className="text-sky-700 font-semibold bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
              B.Tech AI &amp; DS — 3rd Year
            </span>
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
                className="glass-card rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 transition-all flex items-start space-x-4 shadow-sm bg-white/80"
              >
                <div className="p-3 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-base mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
