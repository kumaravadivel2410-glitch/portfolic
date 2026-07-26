"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Eye, FileImage } from "lucide-react";
import { portfolioContent } from "@/data/content";
import CertificateLightbox from "../certifications/CertificateLightbox";

export default function CertificationsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const certificates = portfolioContent.certifications;

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            06 / CERTIFICATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Verified <span className="text-gradient">Certifications Gallery</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          Click any card to launch full-screen certificate preview with keyboard navigation.
        </p>
      </div>

      {/* Certificate Thumbnail Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => setSelectedIndex(idx)}
            className="glass-card rounded-2xl p-5 border border-slate-200/80 hover:border-sky-300 transition-all flex flex-col justify-between group hover:shadow-lg bg-white/80 cursor-pointer"
          >
            {/* Image Thumbnail Frame */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 mb-4 flex items-center justify-center">
              {!failedImages[idx] ? (
                <Image
                  src={cert.imagePath}
                  alt={`${cert.title} Thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  onError={() => handleImageError(idx)}
                  className="group-hover:scale-105 transition-transform duration-500"
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

              {/* Hover Zoom Icon Overlay */}
              <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-sky-700 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Content Details */}
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
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">{cert.issuer}</span>
              <span className="font-mono text-sky-700 font-medium flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>{cert.date}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal Component */}
      <CertificateLightbox
        certificates={certificates}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={(index) => setSelectedIndex(index)}
      />
    </section>
  );
}
