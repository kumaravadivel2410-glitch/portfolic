"use client";

import { motion } from "framer-motion";
import { Calendar, ShieldCheck } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function CertificationsSection() {
  const certifications = portfolioContent.certifications;

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            06 / CERTIFICATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Verified <span className="text-gradient">Certifications &amp; Credentials</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
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
            className="glass-card rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 transition-all flex flex-col justify-between group hover:shadow-md bg-white/80"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 font-semibold shadow-sm">
                  {cert.category}
                </span>
                <ShieldCheck className="w-5 h-5 text-sky-400 group-hover:text-sky-600 transition-colors" />
              </div>

              <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors">
                {cert.title}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">{cert.issuer}</span>
              <span className="font-mono text-sky-700 font-medium flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>{cert.date}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
