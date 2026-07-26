"use client";

import { motion } from "framer-motion";
import { Mic, Cpu, CloudSun, Eye, Radio, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function ProjectsSection() {
  const projectHighlights = [
    {
      icon: Mic,
      title: "Multi-Voice & Wake-Word Detection",
      desc: "Built an AI-driven assistant brain with customizable multi-voice support and instant wake-word recognition.",
    },
    {
      icon: CloudSun,
      title: "Real-Time Live Data Feeds",
      desc: "Integrated live weather/temperature display and automated real-time news updates via API hooks.",
    },
    {
      icon: Eye,
      title: "Object Detection & Device Control",
      desc: "Added visual object detection algorithms and smart browser-based device control capabilities.",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            04 / PROJECTS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-gradient">Engineering Project</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Turning academic coursework into practical, user-facing applications.
        </p>
      </div>

      {/* Featured Project Flagship Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden group hover:scale-[1.01] hover:border-purple-500/40 transition-all shadow-2xl"
      >
        {/* Ambient Top Corner Gradient Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column: Title & Overview */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLAGSHIP PROJECT</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                Full Stack &amp; AI
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              Smart Web-Based Voice Assistant
            </h3>

            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              &quot;A mobile-friendly, AI-powered voice assistant that responds, informs, and controls — all from the browser.&quot;
            </p>

            {/* Feature Highlights Grid */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projectHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
                    >
                      <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                      <h5 className="font-semibold text-white text-xs sm:text-sm mb-1">{item.title}</h5>
                      <p className="text-slate-400 text-[11px] leading-tight">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-slate-400 mr-2">TECH STACK:</span>
              {["Python", "AI / Voice Processing", "HTML5/CSS3/JS", "Web APIs"].map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-white/5 text-xs font-mono text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links & Placeholders */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 font-mono">LIVE DEMO:</span>
                <PlaceholderBadge
                  label="Live Demo URL"
                  detailText="The live web application demo URL is currently being deployed to production."
                  badgeText="Pending URL"
                />
              </div>

              <div className="flex items-center space-x-2">
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 font-mono">REPOSITORIES:</span>
                <PlaceholderBadge
                  label="GitHub Repository"
                  detailText="The GitHub repository code will be published following final project documentation."
                  badgeText="Coming Soon"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup / Graphic Wireframe */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full aspect-video sm:aspect-square rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 border border-white/15 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner">
              
              {/* Audio Spectrum Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs text-cyan-300">VOICE_ENGINE: ACTIVE</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">SAMPLING: 44.1kHz</span>
              </div>

              {/* Central Waveform Graphic */}
              <div className="my-auto flex items-center justify-center space-x-1.5 py-8">
                {[40, 75, 25, 90, 60, 100, 45, 80, 30, 95, 50, 70, 35].map((h, wIdx) => (
                  <motion.div
                    key={wIdx}
                    animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: wIdx * 0.08 }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 via-purple-500 to-cyan-400"
                    style={{ minHeight: "12px" }}
                  />
                ))}
              </div>

              {/* Status footer bar */}
              <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">&gt; Listening for wake-word...</span>
                <span className="text-emerald-400">READY</span>
              </div>

            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
