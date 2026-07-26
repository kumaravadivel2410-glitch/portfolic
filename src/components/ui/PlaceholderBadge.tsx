"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PlaceholderBadgeProps {
  label: string;
  detailText?: string;
  badgeText?: string;
}

export default function PlaceholderBadge({
  label,
  detailText = "This link or metric will be updated once official repository details are finalized.",
  badgeText = "Coming Soon",
}: PlaceholderBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all cursor-pointer shadow-[0_0_12px_rgba(139,92,246,0.15)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>{label}</span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-900/60 text-purple-200">
          {badgeText}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative w-full max-w-md p-6 glass-card rounded-2xl border border-purple-500/30 shadow-2xl text-left"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 text-cyan-400 mb-3">
                <Info className="w-6 h-6" />
                <h3 className="font-semibold text-lg text-white">{label}</h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {detailText}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:brightness-110 transition-all shadow-md"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
