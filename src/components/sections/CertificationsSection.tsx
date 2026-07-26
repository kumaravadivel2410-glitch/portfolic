"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar, ShieldCheck } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "3D Printing",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Emerging Tech",
    },
    {
      title: "AI for Beginners",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Artificial Intelligence",
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Data Science",
    },
    {
      title: "C – Programming Course (Hands-On)",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Programming",
    },
    {
      title: "SQL – Basics (Standard)",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Databases",
    },
    {
      title: "Python 3.x – Programming Course (Hands-On)",
      issuer: "SkillRack",
      date: "Jul 2025",
      category: "Programming",
    },
    {
      title: "Java Basics – Programming Course (Hands-On)",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Programming",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "IBM / Cognitive Class (cognitiveclass.ai)",
      date: "Oct 2025",
      category: "Data Science",
    },
    {
      title: "Data Science Workshop (3 hrs)",
      issuer: "Uptor / LMES",
      date: "Oct 2025",
      category: "Workshop",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            06 / CERTIFICATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Verified <span className="text-gradient">Certifications &amp; Credentials</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Industry recognized courses completed across HP LIFE, SkillRack, IBM, and LMES.
        </p>
      </div>

      {/* Bento / Grid Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-400/40 transition-all flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {cert.category}
                </span>
                <ShieldCheck className="w-5 h-5 text-purple-400/60 group-hover:text-purple-400 transition-colors" />
              </div>

              <h3 className="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-300">{cert.issuer}</span>
              <span className="font-mono text-purple-300 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{cert.date}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
