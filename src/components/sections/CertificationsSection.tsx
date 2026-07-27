"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  ShieldCheck,
  Eye,
  FileImage,
  Pencil,
  Check,
  X,
  Plus,
  Download,
  RotateCcw,
  Upload,
} from "lucide-react";
import { portfolioContent, CertificationItem } from "@/data/content";
import { useEditableSection } from "@/hooks/useEditableSection";
import CertificateLightbox from "../certifications/CertificateLightbox";

export default function CertificationsSection() {
  const {
    data: certificateList,
    draftData,
    setDraftData,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    resetToDefault,
    exportJson,
  } = useEditableSection<CertificationItem>(
    "portfolio_certificates_data",
    portfolioContent.certifications
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [showAddModal, setShowAddModal] = useState(false);

  // New certificate form state
  const [newCert, setNewCert] = useState({
    title: "",
    issuer: "",
    date: "",
    category: "Professional Certification",
    imagePath: "",
  });

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleFieldChange = (id: string, field: keyof CertificationItem, value: string) => {
    setDraftData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleRemoveCert = (id: string) => {
    setDraftData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFileChangeForNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setNewCert((prev) => ({ ...prev, imagePath: base64 }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCert.title || !newCert.issuer) return;

    const created: CertificationItem = {
      id: `cert-${Date.now()}`,
      title: newCert.title,
      issuer: newCert.issuer,
      date: newCert.date || "2026",
      category: newCert.category || "Certification",
      imagePath: newCert.imagePath || "/certificates/placeholder.jpg",
    };

    setDraftData((prev) => [...prev, created]);
    setNewCert({
      title: "",
      issuer: "",
      date: "",
      category: "Professional Certification",
      imagePath: "",
    });
    setShowAddModal(false);
  };

  const displayedCertificates = isEditing ? draftData : certificateList;

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Edit Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
              06 / CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Verified <span className="text-gradient">Certifications Gallery</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Click any card to launch full-screen certificate preview. Toggle Edit mode to add or modify certificates directly.
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
                <span>Edit Certifications</span>
              </button>

              <button
                onClick={resetToDefault}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm transition-all cursor-pointer"
                title="Reset certifications to default content.ts"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Cert</span>
              </button>

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
                title="Export edits as JSON payload"
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

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCertificates.map((cert, idx) => (
          <motion.div
            key={cert.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => {
              if (!isEditing) setSelectedIndex(idx);
            }}
            className={`glass-card rounded-2xl p-5 border border-slate-200/80 hover:border-sky-300 transition-all flex flex-col justify-between group hover:shadow-lg bg-white/80 ${
              !isEditing ? "cursor-pointer" : "relative"
            }`}
          >
            {/* In Edit mode: Remove Button on top-right */}
            {isEditing && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveCert(cert.id);
                }}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 border border-rose-200 z-10 transition-colors cursor-pointer"
                title="Remove Certificate"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Thumbnail Frame */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 mb-4 flex items-center justify-center">
              {!failedImages[idx] && cert.imagePath ? (
                <Image
                  src={cert.imagePath}
                  alt={`${cert.title} Thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  onError={() => handleImageError(idx)}
                  className="group-hover:scale-105 transition-transform duration-500"
                  unoptimized={cert.imagePath.startsWith("data:")}
                />
              ) : (
                /* Fallback Graphic Badge */
                <div className="flex flex-col items-center justify-center text-center p-4 text-slate-400 space-y-1.5">
                  <FileImage className="w-8 h-8 text-sky-500/60" />
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    Certificate Image Coming Soon
                  </span>
                </div>
              )}

              {/* Hover Zoom Icon Overlay (Read-only mode) */}
              {!isEditing && (
                <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-sky-700 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              )}
            </div>

            {!isEditing ? (
              /* READ-ONLY DETAILS */
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200 font-semibold shadow-sm">
                    {cert.category}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-sky-500" />
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors">
                  {cert.title}
                </h3>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">{cert.issuer}</span>
                  <span className="font-mono text-sky-700 font-medium flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>{cert.date}</span>
                  </span>
                </div>
              </div>
            ) : (
              /* EDITABLE FORM INPUTS */
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase mb-0.5">
                    Course Title
                  </label>
                  <input
                    type="text"
                    value={cert.title}
                    onChange={(e) => handleFieldChange(cert.id, "title", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase mb-0.5">
                      Issuer
                    </label>
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => handleFieldChange(cert.id, "issuer", e.target.value)}
                      className="w-full px-2 py-1 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase mb-0.5">
                      Date
                    </label>
                    <input
                      type="text"
                      value={cert.date}
                      onChange={(e) => handleFieldChange(cert.id, "date", e.target.value)}
                      className="w-full px-2 py-1 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Add Certificate Modal Form */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full bg-white shadow-2xl border border-slate-200 relative space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-extrabold text-slate-900">Add New Certificate</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-1">
                  Course / Certificate Name *
                </label>
                <input
                  type="text"
                  required
                  value={newCert.title}
                  onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                  placeholder="e.g. Machine Learning Fundamentals"
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-1">
                    Issuer *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCert.issuer}
                    onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                    placeholder="e.g. Coursera / IBM"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={newCert.date}
                    onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                    placeholder="e.g. Jun 2026"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-1">
                  Certificate Image (Upload File)
                </label>
                <label className="flex items-center space-x-2 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono text-slate-700 cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-sky-600" />
                  <span>
                    {newCert.imagePath ? "Image attached (base64 encoded)" : "Choose image file..."}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChangeForNew}
                  />
                </label>
              </div>

              <div className="pt-3 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-md"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Full Preview */}
      <CertificateLightbox
        certificates={displayedCertificates}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={(index) => setSelectedIndex(index)}
      />
    </section>
  );
}
