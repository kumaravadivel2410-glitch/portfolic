"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, FileImage } from "lucide-react";
import { CertificationItem } from "@/data/content";

interface CertificateLightboxProps {
  certificates: CertificationItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function CertificateLightbox({
  certificates,
  selectedIndex,
  onClose,
  onSelectIndex,
}: CertificateLightboxProps) {
  const [imageError, setImageError] = useState(false);
  const [prevIndex, setPrevIndex] = useState(selectedIndex);

  if (prevIndex !== selectedIndex) {
    setPrevIndex(selectedIndex);
    setImageError(false);
  }

  const activeCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  // Keyboard Navigation: Left/Right arrow keys & Escape key
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onSelectIndex((selectedIndex - 1 + certificates.length) % certificates.length);
      } else if (e.key === "ArrowRight") {
        onSelectIndex((selectedIndex + 1) % certificates.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, certificates.length, onClose, onSelectIndex]);

  if (selectedIndex === null || !activeCert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
        
        {/* Backdrop click dismiss */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-4xl max-h-[85vh] flex flex-col items-center glass-card rounded-3xl p-4 sm:p-6 border border-slate-200/80 bg-white/95 shadow-2xl overflow-hidden"
        >
          {/* Top Controls Bar */}
          <div className="w-full flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold border border-sky-200">
                {activeCert.category}
              </span>
              <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-tight mt-1">
                {activeCert.title}
              </h3>
              <p className="text-xs font-mono text-slate-500">
                {activeCert.issuer} — {activeCert.date}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors shadow-sm"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Display Viewport */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
            {!imageError ? (
              <Image
                src={activeCert.imagePath}
                alt={`${activeCert.title} Certificate`}
                fill
                style={{ objectFit: "contain" }}
                onError={() => setImageError(true)}
                className="p-2"
                priority
              />
            ) : (
              /* Graceful Image Missing Fallback Badge */
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-3">
                <div className="p-4 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200">
                  <FileImage className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Certificate Image Coming Soon</h4>
                <p className="text-xs text-slate-500 max-w-md font-mono">
                  Drop image file into &apos;public{activeCert.imagePath}&apos; to view full certificate scan.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Navigation Arrow Bar */}
          <div className="w-full flex items-center justify-between pt-4">
            <button
              onClick={() =>
                onSelectIndex((selectedIndex - 1 + certificates.length) % certificates.length)
              }
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm shadow-sm transition-all"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-4 h-4 text-sky-600" />
              <span>Previous</span>
            </button>

            <span className="text-xs font-mono text-slate-500 font-semibold">
              {selectedIndex + 1} / {certificates.length}
            </span>

            <button
              onClick={() => onSelectIndex((selectedIndex + 1) % certificates.length)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm shadow-sm transition-all"
              aria-label="Next Certificate"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-sky-600" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
