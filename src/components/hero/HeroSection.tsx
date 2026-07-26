"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { portfolioContent } from "@/data/content";
import MagneticButton from "../ui/MagneticButton";
import ProfileImage from "./ProfileImage";
import HeroMobileFallback from "./HeroMobileFallback";

// Dynamic import for R3F 3D Canvas with SSR fallback
const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <HeroMobileFallback />,
});

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(window.innerWidth < 768 || touchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const titleWords = portfolioContent.personal.name.split(" ");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background Sky-Blue Aurora Radial Blobs */}
      <div className="aurora-blob w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] bg-gradient-to-tr from-sky-300/40 via-sky-200/50 to-blue-200/30 top-1/4 left-[-100px]" />
      <div className="aurora-blob w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-blue-300/40 to-sky-200/30 bottom-10 right-[-100px]" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Content & Kinetic Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Header Row: Profile Photo + Status Badge */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Profile Photo Component */}
            <ProfileImage src={portfolioContent.personal.profilePhotoPath} size={72} />

            <div className="flex flex-col space-y-2">
              <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold self-start shadow-sm">
                01 / HERO
              </span>

              {/* Status Badge with Animated Gradient Border */}
              <div className="gradient-border-badge px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md flex items-center space-x-2 shadow-sm border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-slate-800">
                  Available for Internship
                </span>
              </div>
            </div>
          </div>

          {/* Kinetic Headline Reveal */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              <span className="block">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="block text-gradient mt-1"
              >
                {portfolioContent.personal.headline}
              </motion.span>
            </h1>

            {/* Secondary Headline Accent */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg font-mono text-sky-700 font-medium pt-1"
            >
              {portfolioContent.personal.altHeadline}
            </motion.p>
          </div>

          {/* Supporting Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            {portfolioContent.personal.supportingLine}
          </motion.p>

          {/* CTAs Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary Magnetic CTA */}
            <MagneticButton strength={0.4}>
              <a
                href="#projects"
                className="group relative inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_6px_25px_rgba(14,165,233,0.35)] hover:shadow-[0_10px_35px_rgba(14,165,233,0.5)] transition-all transform active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            {/* Secondary Outline Glass CTA */}
            <MagneticButton strength={0.25}>
              <a
                href="#contact"
                className="relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-100 hover:border-sky-400 transition-all active:scale-95 shadow-sm"
              >
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Contact Me</span>
              </a>
            </MagneticButton>
          </motion.div>

        </div>

        {/* Right Column - Interactive 3D Canvas / Mobile SVG Fallback */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="w-full max-w-lg glass-card rounded-3xl p-4 sm:p-6 border border-slate-200/80 relative overflow-hidden shadow-lg bg-white/80">
            {mounted && (isMobile ? <HeroMobileFallback /> : <Hero3DScene />)}
          </div>
        </div>

      </div>
    </section>
  );
}
