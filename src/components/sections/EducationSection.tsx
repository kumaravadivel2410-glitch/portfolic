"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioContent } from "@/data/content";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function EducationSection() {
  const educationTimeline = portfolioContent.education;

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            05 / EDUCATION
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Academic <span className="text-gradient">Journey &amp; Qualifications</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
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
              edu.isCurrent ? "border-sky-300 bg-sky-50/50 shadow-md" : "border-slate-200/80 bg-white/80"
            } relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-sky-400 transition-all`}
          >
            <div className="flex items-start space-x-5">
              <div
                className={`p-3.5 rounded-2xl shrink-0 ${
                  edu.isCurrent
                    ? "bg-gradient-to-tr from-sky-400 to-blue-600 text-white shadow-md"
                    : "bg-slate-100 border border-slate-200 text-sky-600"
                }`}
              >
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {edu.degree}
                  </h3>
                  {edu.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-100 text-sky-800 border border-sky-300 font-semibold uppercase">
                      In Progress
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="text-sky-700">{edu.institution}</span>
                  <span className="flex items-center space-x-1 text-slate-500 font-normal">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-slate-700 text-xs sm:text-sm bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-mono font-medium">
                    {edu.status}
                  </span>

                  {edu.cgpaBranch ? (
                    <span className="text-sky-800 text-xs font-mono bg-sky-100 px-3 py-1 rounded-full border border-sky-200 font-semibold">
                      {edu.cgpaBranch}
                    </span>
                  ) : edu.isCurrent ? (
                    <PlaceholderBadge
                      label="Branch & CGPA Details"
                      detailText="Official specialization branch and current CGPA metrics will be updated upon semester score release."
                      badgeText="Needs Input"
                    />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-sky-800 bg-sky-100/90 px-4 py-2 rounded-full border border-sky-200 shrink-0 self-start md:self-center font-semibold">
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
