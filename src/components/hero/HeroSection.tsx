"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import HeroProfileVisual from "./HeroProfileVisual";
import { portfolioContent } from "@/data/content";

export default function HeroSection() {
  const { name, headline, altHeadline, supportingLine } = portfolioContent.personal;

  // Split headline for kinetic word-by-word reveal
  const headlineWords = headline.split(" ");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Aurora Mesh Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Asymmetric 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* Left Column: Oversized Display Type & Kinetic Headline */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full glass-card border border-sky-200/80 shadow-sm bg-white/80 backdrop-blur-md"
          >
            <span className="font-mono text-xs text-sky-700 font-semibold tracking-wider uppercase">
              01 / HERO
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white font-semibold flex items-center space-x-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>Available for Internship</span>
            </span>
          </motion.div>

          {/* Kinetic Headline Reveal */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] flex flex-wrap gap-x-3 gap-y-1">
              {headlineWords.map((word, idx) => {
                const isGradientWord =
                  word.toLowerCase().includes("engineering") ||
                  word.toLowerCase().includes("student") ||
                  word.toLowerCase().includes("developer") ||
                  word.toLowerCase().includes("aspiring");
                return (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={isGradientWord ? "text-gradient font-black" : "text-slate-900"}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <p className="text-base sm:text-xl font-medium font-mono text-sky-800 pt-1 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
              <span>{altHeadline}</span>
            </p>
          </div>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
          >
            {supportingLine}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Primary Gradient Magnetic Button */}
            <MagneticButton strength={0.4}>
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_6px_25px_rgba(14,165,233,0.35)] hover:shadow-[0_10px_35px_rgba(14,165,233,0.5)] transition-all transform active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            {/* Secondary Glass Outline Pill CTA */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full glass-card border border-slate-300/80 hover:border-sky-400 text-slate-800 font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all hover:bg-sky-50/50 active:scale-95"
            >
              <Mail className="w-4 h-4 text-sky-600" />
              <span>Contact Me</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Floating Parallax Profile Photo Visual */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <HeroProfileVisual />
        </div>

      </div>
    </section>
  );
}
