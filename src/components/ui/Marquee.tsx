"use client";

import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";

export default function Marquee() {
  const keywords = portfolioContent.tickerKeywords;
  const repeatedItems = [...keywords, ...keywords, ...keywords, ...keywords];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-slate-200/80 bg-slate-50/70 backdrop-blur-md my-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex space-x-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-5 py-2.5 rounded-full glass-card border border-slate-200/80 text-xs md:text-sm font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 transition-colors font-semibold shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 animate-pulse" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
