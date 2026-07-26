"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function EducationSection() {
  const educationTimeline = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      status: "2nd Year — Currently Enrolled",
      institution: "JP College of Engineering",
      location: "Tenkasi, Tamil Nadu",
      period: "2023 – Present",
      isCurrent: true,
      placeholder: {
        label: "Branch & CGPA Details",
        detailText: "Official specialization branch and current CGPA metrics will be updated upon semester score release.",
        badgeText: "Needs Input",
      },
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      status: "Percentage: 65%",
      institution: "RPHSS",
      location: "Tenkasi, Tamil Nadu",
      period: "2022",
      isCurrent: false,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      status: "Percentage: 80%",
      institution: "Pulari Matriculation School",
      location: "Tenkasi, Tamil Nadu",
      period: "2020",
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            05 / EDUCATION
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Academic <span className="text-gradient">Journey &amp; Qualifications</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Formal engineering degree coursework and secondary education history.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {educationTimeline.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`glass-card rounded-3xl p-6 sm:p-8 border ${
              edu.isCurrent ? "border-purple-500/40 bg-purple-950/10" : "border-white/10"
            } relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-cyan-400/40 transition-all`}
          >
            <div className="flex items-start space-x-5">
              <div
                className={`p-3.5 rounded-2xl shrink-0 ${
                  edu.isCurrent
                    ? "bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    : "bg-white/5 border border-white/10 text-cyan-400"
                }`}
              >
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  {edu.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 uppercase">
                      In Progress
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="text-cyan-400 font-semibold">{edu.institution}</span>
                  <span className="flex items-center space-x-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-slate-300 text-xs sm:text-sm bg-white/5 px-3 py-1 rounded-lg border border-white/5 font-mono">
                    {edu.status}
                  </span>

                  {edu.placeholder && (
                    <PlaceholderBadge
                      label={edu.placeholder.label}
                      detailText={edu.placeholder.detailText}
                      badgeText={edu.placeholder.badgeText}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-300 bg-purple-500/10 px-4 py-2 rounded-xl border border-purple-500/20 shrink-0 self-start md:self-center">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
