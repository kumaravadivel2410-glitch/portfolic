"use client";

import { motion } from "framer-motion";

export default function HeroMobileFallback() {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
      {/* Outer Sky-Blue Glowing Gradient Mesh Blob */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-sky-300/40 via-sky-200/50 to-blue-300/30 blur-3xl animate-pulse" />

      {/* SVG Geometric Sphere & Orbital Rings */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[340px] max-h-[340px] drop-shadow-[0_4px_25px_rgba(14,165,233,0.25)]"
      >
        <defs>
          <linearGradient id="svgGradLight1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="svgGradLight2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Outer Orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="url(#svgGradLight1)"
          strokeWidth="1.5"
          strokeDasharray="12 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Middle Counter-Orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="110"
          fill="none"
          stroke="url(#svgGradLight2)"
          strokeWidth="2"
          strokeDasharray="6 6"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Core Polyhedron Wireframe */}
        <motion.g
          animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <polygon
            points="200,90 280,150 280,250 200,310 120,250 120,150"
            fill="rgba(14, 165, 233, 0.08)"
            stroke="url(#svgGradLight1)"
            strokeWidth="2.5"
          />
          <line x1="200" y1="90" x2="200" y2="310" stroke="url(#svgGradLight2)" strokeWidth="1.5" opacity="0.7" />
          <line x1="120" y1="150" x2="280" y2="250" stroke="url(#svgGradLight2)" strokeWidth="1.5" opacity="0.7" />
          <line x1="120" y1="250" x2="280" y2="150" stroke="url(#svgGradLight2)" strokeWidth="1.5" opacity="0.7" />
        </motion.g>

        {/* Floating Glowing Nodes */}
        <circle cx="200" cy="90" r="5" fill="#38BDF8" />
        <circle cx="280" cy="150" r="5" fill="#0EA5E9" />
        <circle cx="280" cy="250" r="5" fill="#2563EB" />
        <circle cx="200" cy="310" r="5" fill="#38BDF8" />
        <circle cx="120" cy="250" r="5" fill="#0EA5E9" />
        <circle cx="120" cy="150" r="5" fill="#2563EB" />
      </svg>
    </div>
  );
}
