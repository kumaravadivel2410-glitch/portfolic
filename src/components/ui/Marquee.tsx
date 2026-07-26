"use client";

import { motion } from "framer-motion";

const keywords = [
  "Python",
  "Artificial Intelligence",
  "Web Development",
  "Data Science & Analytics",
  "MySQL & SQL",
  "Smart Voice Assistants",
  "Data Structures",
  "Java & C Programming",
  "Machine Learning Fundamentals",
];

export default function Marquee() {
  const repeatedItems = [...keywords, ...keywords, ...keywords, ...keywords];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/10 bg-black/40 backdrop-blur-md my-12">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08090C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08090C] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex space-x-12 whitespace-nowrap"
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
            className="flex items-center space-x-4 text-sm md:text-base font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
