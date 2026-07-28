"use client";

import { Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { portfolioContent } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/90 backdrop-blur-lg py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            <span className="font-extrabold text-white text-sm font-mono leading-none">K</span>
          </div>
          <div>
            <p className="text-slate-900 font-bold text-sm">
              Kumara Vadivel <span className="text-sky-600 font-semibold">| Portfolio</span>
            </p>
            <p className="text-slate-500 text-xs font-mono">
              &copy; {new Date().getFullYear()} All rights reserved. Designed for 2026.
            </p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-slate-600 text-xs font-mono flex items-center space-x-1 font-medium">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-500 inline" />
          <span>using Next.js, R3F, &amp; Tailwind CSS</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center space-x-3">
          {portfolioContent.personal.gitHub && (
            <a
              href={portfolioContent.personal.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {portfolioContent.personal.linkedIn && (
            <a
              href={portfolioContent.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-sky-600 hover:text-sky-700 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
