"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mic,
  CloudSun,
  Eye,
  ExternalLink,
  Sparkles,
  Pencil,
  Check,
  X,
  Plus,
  Download,
  RotateCcw,
  Upload,
} from "lucide-react";
import { portfolioContent, ProjectItem } from "@/data/content";
import { useEditableSection } from "@/hooks/useEditableSection";
import { GithubIcon } from "../ui/SocialIcons";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function ProjectsSection() {
  const {
    data: projectList,
    draftData,
    setDraftData,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    resetToDefault,
    exportJson,
  } = useEditableSection<ProjectItem>("portfolio_projects_v2", portfolioContent.projects);

  const highlightIcons = [Mic, CloudSun, Eye];

  const handleFieldChange = (id: string, field: keyof ProjectItem, value: any) => {
    setDraftData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleHighlightChange = (id: string, index: number, value: string) => {
    setDraftData((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newHighlights = [...(item.highlights || ["", "", ""])];
        newHighlights[index] = value;
        return { ...item, highlights: newHighlights };
      })
    );
  };

  const handleTechStackChange = (id: string, valueStr: string) => {
    const tags = valueStr.split(",").map((t) => t.trim()).filter(Boolean);
    setDraftData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, techStack: tags } : item))
    );
  };

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setDraftData((prev) =>
          prev.map((item) => (item.id === id ? { ...item, customImage: base64 } : item))
        );
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddProject = () => {
    const newProj: ProjectItem & { customImage?: string } = {
      id: `proj-${Date.now()}`,
      title: "New Practical Project",
      valueProposition: "A brief one-line value proposition describing what this project accomplishes.",
      highlights: [
        "Core functional feature or architecture highlight",
        "Data integration or user interaction feature",
        "Key performance or technical capability",
      ],
      techStack: ["Python", "Web Technologies"],
      liveUrl: "",
      repoUrl: "",
    };
    setDraftData((prev) => [...prev, newProj]);
  };

  const handleRemoveProject = (id: string) => {
    setDraftData((prev) => prev.filter((item) => item.id !== id));
  };

  const displayedProjects = isEditing ? draftData : projectList;

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Edit Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
              04 / PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-gradient">Engineering Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Turning academic coursework into practical, user-facing applications. Click Edit to manage projects directly in browser.
          </p>
        </div>

        {/* Edit Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-center">
          {!isEditing ? (
            <>
              <button
                onClick={startEdit}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
                <span>Edit Projects</span>
              </button>

              <button
                onClick={resetToDefault}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm transition-all cursor-pointer"
                title="Reset projects to default content.ts"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={saveEdit}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>

              <button
                onClick={exportJson}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                title="Export edits as JSON payload to paste into content.ts"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>

              <button
                onClick={cancelEdit}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Projects List Container */}
      <div className="space-y-8">
        {displayedProjects.map((project, pIdx) => {
          const customImg = (project as any).customImage;
          return (
            <motion.div
              key={project.id || pIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 relative overflow-hidden group hover:scale-[1.01] hover:border-sky-300 transition-all shadow-xl bg-white/90"
            >
              {/* Top Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

              {!isEditing ? (
                /* READ-ONLY VIEW */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.isFlagship && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-100 text-sky-800 border border-sky-200 font-semibold flex items-center space-x-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                          <span>FLAGSHIP PROJECT</span>
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-100 text-blue-800 border border-blue-200 font-semibold">
                        {project.isFlagship ? "Full Stack & AI" : "Web & Applied Engineering"}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                      &quot;{project.valueProposition}&quot;
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-4 pt-2">
                        <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                          Key Technical Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {project.highlights.map((highlightText, hIdx) => {
                            const Icon = highlightIcons[hIdx % highlightIcons.length];
                            return (
                              <div
                                key={hIdx}
                                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between"
                              >
                                <Icon className="w-5 h-5 text-sky-600 mb-2 shrink-0" />
                                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                                  {highlightText}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-mono text-slate-500 font-semibold mr-2">TECH STACK:</span>
                      {project.techStack?.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Badges */}
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

                  {/* Right Column: Audio Waveform or Image Thumbnail */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    {customImg ? (
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-300 shadow-md">
                        <Image
                          src={customImg}
                          alt={`${project.title} Screenshot`}
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized
                        />
                      </div>
                    ) : (
                      /* Standard AI Voice Engine Interactive Graphic */
                      <div className="w-full aspect-video sm:aspect-square rounded-2xl bg-slate-900 border border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden shadow-md">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                            <span className="font-mono text-xs text-sky-300 font-semibold">AI Voice Engine</span>
                          </div>
                          <span className="font-mono text-xs text-slate-400">Browser Audio API</span>
                        </div>

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

                        <div className="p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-300">Listening for wake-word...</span>
                          <span className="text-emerald-400 font-semibold">READY</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* INLINE EDITABLE FORM VIEW */
                <div className="space-y-6 relative pr-8">
                  <button
                    onClick={() => handleRemoveProject(project.id)}
                    className="absolute top-0 right-0 p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 border border-rose-200 transition-colors shadow-sm cursor-pointer"
                    title="Remove Project Card"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Project Title
                      </label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleFieldChange(project.id, "title", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        One-Line Value Proposition
                      </label>
                      <input
                        type="text"
                        value={project.valueProposition}
                        onChange={(e) => handleFieldChange(project.id, "valueProposition", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase">
                        3 Key Highlights (One per field)
                      </label>
                      {[0, 1, 2].map((hIdx) => (
                        <input
                          key={hIdx}
                          type="text"
                          value={project.highlights?.[hIdx] || ""}
                          onChange={(e) => handleHighlightChange(project.id, hIdx, e.target.value)}
                          placeholder={`Highlight #${hIdx + 1}`}
                          className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 mb-1"
                        />
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Tech Stack (Comma-separated)
                      </label>
                      <input
                        type="text"
                        value={project.techStack?.join(", ") || ""}
                        onChange={(e) => handleTechStackChange(project.id, e.target.value)}
                        placeholder="Python, React, MySQL"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Upload Project Thumbnail (Optional)
                      </label>
                      <label className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono text-slate-700 cursor-pointer transition-colors">
                        <Upload className="w-4 h-4 text-sky-600" />
                        <span>Choose Screenshot Image...</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(project.id, e)}
                        />
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Live Demo URL (Leave empty for placeholder)
                      </label>
                      <input
                        type="text"
                        value={project.liveUrl || ""}
                        onChange={(e) => handleFieldChange(project.id, "liveUrl", e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        GitHub Repo URL (Leave empty for placeholder)
                      </label>
                      <input
                        type="text"
                        value={project.repoUrl || ""}
                        onChange={(e) => handleFieldChange(project.id, "repoUrl", e.target.value)}
                        placeholder="https://github.com/..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Add New Project Button (In Edit mode) */}
      {isEditing && (
        <button
          onClick={handleAddProject}
          className="w-full mt-6 py-4 rounded-3xl border-2 border-dashed border-sky-300 hover:border-sky-500 bg-sky-50/50 hover:bg-sky-50 text-sky-700 font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Project Card</span>
        </button>
      )}
    </section>
  );
}
