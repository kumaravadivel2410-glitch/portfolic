"use client";

import { Code2, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-lg py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            KV
          </div>
          <div>
            <p className="text-white font-bold text-sm">
              Kumara Vadivel <span className="text-purple-400 font-normal">| Portfolio</span>
            </p>
            <p className="text-slate-400 text-xs font-mono">
              &copy; {new Date().getFullYear()} All rights reserved. Designed for 2026.
            </p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-slate-400 text-xs font-mono flex items-center space-x-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
          <span>using Next.js, R3F, &amp; Tailwind CSS</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 group"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
