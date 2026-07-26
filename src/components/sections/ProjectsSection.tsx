"use client";

import { motion } from "framer-motion";
import { Mic, CloudSun, Eye, ExternalLink, Sparkles } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { GithubIcon } from "../ui/SocialIcons";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function ProjectsSection() {
  const project = portfolioContent.projects[0];

  const highlightIcons = [Mic, CloudSun, Eye];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            04 / PROJECTS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Featured <span className="text-gradient">Engineering Project</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          Turning academic coursework into practical, user-facing applications.
        </p>
      </div>

      {/* Featured Project Flagship Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 relative overflow-hidden group hover:scale-[1.01] hover:border-sky-300 transition-all shadow-xl bg-white/90"
      >
        {/* Ambient Top Corner Gradient Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column: Title & Overview */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-100 text-sky-800 border border-sky-200 font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>FLAGSHIP PROJECT</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-100 text-blue-800 border border-blue-200 font-semibold">
                Full Stack &amp; AI
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              &quot;{project.valueProposition}&quot;
            </p>

            {/* Feature Highlights Grid */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.highlights.map((highlightText, idx) => {
                  const Icon = highlightIcons[idx % highlightIcons.length];
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between"
                    >
                      <Icon className="w-5 h-5 text-sky-600 mb-2" />
                      <p className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{highlightText}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-slate-500 font-semibold mr-2">TECH STACK:</span>
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links & Placeholders */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-500 font-mono font-semibold">LIVE DEMO:</span>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors"
                  >
                    Launch Demo
                  </a>
                ) : (
                  <PlaceholderBadge
                    label="Live Demo URL"
                    detailText="The live web application demo URL is currently being prepared for deployment."
                    badgeText="Pending URL"
                  />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <GithubIcon className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-500 font-mono font-semibold">REPOSITORIES:</span>
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-white font-semibold hover:bg-slate-900 transition-colors"
                  >
                    View Code
                  </a>
                ) : (
                  <PlaceholderBadge
                    label="GitHub Repository"
                    detailText="The GitHub repository code will be published following final project documentation."
                    badgeText="Coming Soon"
                  />
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Waveform & Interactive Display */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full aspect-video sm:aspect-square rounded-2xl bg-slate-900 border border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden shadow-md">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs text-sky-300 font-semibold">AI Voice Engine</span>
                </div>
                <span className="font-mono text-xs text-slate-400">Browser Audio API</span>
              </div>

              {/* Central Waveform Graphic */}
              <div className="my-auto flex items-center justify-center space-x-1.5 py-8">
                {[40, 75, 25, 90, 60, 100, 45, 80, 30, 95, 50, 70, 35].map((h, wIdx) => (
                  <motion.div
                    key={wIdx}
                    animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: wIdx * 0.08 }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-sky-400 via-sky-500 to-blue-600"
                    style={{ minHeight: "12px" }}
                  />
                ))}
              </div>

              {/* Status footer bar */}
              <div className="p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Listening for wake-word...</span>
                <span className="text-emerald-400 font-semibold">READY</span>
              </div>

            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
