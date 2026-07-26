"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download, Mail } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import HeroMobileFallback from "./HeroMobileFallback";
import PlaceholderBadge from "../ui/PlaceholderBadge";

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

  const titleWords = ["Kumara", "Vadivel"];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Aurora Radial Blobs */}
      <div className="aurora-blob w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-600/40 via-purple-600/30 to-cyan-500/20 top-1/4 left-[-100px]" />
      <div className="aurora-blob w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-purple-600/40 to-blue-500/20 bottom-10 right-[-100px]" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Content & Kinetic Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Accent Monospace Badge & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
              01 / HERO
            </span>

            {/* Status Badge with Animated Gradient Border */}
            <div className="gradient-border-badge px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-medium text-slate-200">
                Available for Internship
              </span>
            </div>
          </div>

          {/* Kinetic Headline Reveal */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
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
                Engineering Student &amp; Aspiring Developer
              </motion.span>
            </h1>

            {/* Secondary Headline Accent */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg font-mono text-cyan-400/90 pt-1"
            >
              Building with Python, AI, and the Web
            </motion.p>
          </div>

          {/* Supporting Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            A motivated engineering student who turns coursework into working projects — from AI-powered voice assistants to data-driven applications — and is looking for hands-on opportunities to grow as a developer.
          </motion.p>

          {/* CTAs Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Primary Magnetic CTA */}
            <MagneticButton strength={0.4}>
              <a
                href="#projects"
                className="group relative inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all transform active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            {/* Secondary Outline Glass CTA */}
            <MagneticButton strength={0.25}>
              <a
                href="#contact"
                className="relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm sm:text-base hover:bg-white/15 hover:border-purple-400/50 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </MagneticButton>
          </motion.div>

        </div>

        {/* Right Column - Interactive 3D Canvas / Mobile SVG Fallback */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="w-full max-w-lg glass-card rounded-3xl p-4 sm:p-6 border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Corner Tech Decorators */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-slate-500 tracking-wider">
              MODE: 3D_INTERACTIVE
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-cyan-400/80">
              FPS: 60 // WEBGL
            </div>

            {mounted && (isMobile ? <HeroMobileFallback /> : <Hero3DScene />)}
          </div>
        </div>

      </div>
    </section>
  );
}
