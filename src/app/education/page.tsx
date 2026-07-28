"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { portfolioContent, EducationItem } from "@/data/content";
import { useEditableSection } from "@/hooks/useEditableSection";
import { GraduationCap, Pencil, Check, X, Plus, Download, RotateCcw, MapPin, Calendar } from "lucide-react";

export default function EducationPage() {
  const {
    data: educationList,
    draftData,
    setDraftData,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    resetToDefault,
    exportJson,
  } = useEditableSection<EducationItem>("portfolio_education_v2", portfolioContent.education);

  const handleFieldChange = (id: string, field: keyof EducationItem, value: any) => {
    setDraftData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddEducation = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: "New Degree / Certificate",
      institution: "Institution Name",
      location: "Location",
      period: "2026",
      status: "Status / Score",
      isCurrent: false,
    };
    setDraftData((prev) => [...prev, newItem]);
  };

  const handleRemoveEducation = (id: string) => {
    setDraftData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden pt-28">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Page Title & Edit Toggle Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card rounded-3xl p-6 border border-slate-200/80 bg-white/80 shadow-md">
          <div>
            <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
              EDUCATION &amp; QUALIFICATIONS
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Academic Background
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Fully viewable and inline-editable directly inside your browser.
            </p>
          </div>

          {/* Edit Controls Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {!isEditing ? (
              <>
                <button
                  onClick={startEdit}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Pencil className="w-4 h-4" />
                  <span>Edit Entries</span>
                </button>

                <button
                  onClick={resetToDefault}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm transition-all"
                  title="Reset to default education data"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={saveEdit}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>

                <button
                  onClick={exportJson}
                  className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  title="Export edits as JSON payload to paste in content.ts"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export JSON</span>
                </button>

                <button
                  onClick={cancelEdit}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Education Cards List */}
        <div className="space-y-6">
          {(isEditing ? draftData : educationList).map((edu) => (
            <div
              key={edu.id}
              className={`glass-card rounded-3xl p-6 sm:p-8 border ${
                edu.isCurrent ? "border-sky-300 bg-sky-50/50 shadow-md" : "border-slate-200/80 bg-white/80"
              } relative overflow-hidden transition-all`}
            >
              {!isEditing ? (
                /* READ-ONLY CARD VIEW */
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
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
                        {edu.cgpaBranch && (
                          <span className="text-sky-800 text-xs font-mono bg-sky-100 px-3 py-1 rounded-full border border-sky-200 font-semibold">
                            {edu.cgpaBranch}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-sky-800 bg-sky-100/90 px-4 py-2 rounded-full border border-sky-200 shrink-0 self-start md:self-center font-semibold">
                    <Calendar className="w-4 h-4 text-sky-600" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ) : (
                /* EDITABLE FORM VIEW */
                <div className="space-y-4 relative pr-10">
                  <button
                    onClick={() => handleRemoveEducation(edu.id)}
                    className="absolute top-0 right-0 p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 border border-rose-200 transition-colors"
                    title="Remove entry"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Degree / Qualification
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleFieldChange(edu.id, "degree", e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Institution Name
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleFieldChange(edu.id, "institution", e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Years / Period
                      </label>
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) => handleFieldChange(edu.id, "period", e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                        Score / Percentage / Status
                      </label>
                      <input
                        type="text"
                        value={edu.status}
                        onChange={(e) => handleFieldChange(edu.id, "status", e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Entry Button (in Edit mode) */}
        {isEditing && (
          <button
            onClick={handleAddEducation}
            className="w-full py-4 rounded-3xl border-2 border-dashed border-sky-300 hover:border-sky-500 bg-sky-50/50 hover:bg-sky-50 text-sky-700 font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-sm"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Education Entry</span>
          </button>
        )}

      </div>

      <Footer />
    </main>
  );
}
