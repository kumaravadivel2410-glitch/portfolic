"use client";

import { motion } from "framer-motion";

export default function HeroMobileFallback() {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
      {/* Outer Glowing Gradient Mesh Blob */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-cyan-400/20 blur-3xl animate-pulse" />

      {/* SVG Geometric Sphere & Orbital Rings */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[340px] max-h-[340px] drop-shadow-[0_0_35px_rgba(139,92,246,0.3)]"
      >
        <defs>
          <linearGradient id="svgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="svgGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Outer Orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="url(#svgGrad1)"
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
          stroke="url(#svgGrad2)"
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
            fill="rgba(139, 92, 246, 0.08)"
            stroke="url(#svgGrad1)"
            strokeWidth="2.5"
          />
          <line x1="200" y1="90" x2="200" y2="310" stroke="url(#svgGrad2)" strokeWidth="1.5" opacity="0.6" />
          <line x1="120" y1="150" x2="280" y2="250" stroke="url(#svgGrad2)" strokeWidth="1.5" opacity="0.6" />
          <line x1="120" y1="250" x2="280" y2="150" stroke="url(#svgGrad2)" strokeWidth="1.5" opacity="0.6" />
        </motion.g>

        {/* Floating Glowing Nodes */}
        <circle cx="200" cy="90" r="5" fill="#22D3EE" />
        <circle cx="280" cy="150" r="5" fill="#8B5CF6" />
        <circle cx="280" cy="250" r="5" fill="#3B82F6" />
        <circle cx="200" cy="310" r="5" fill="#22D3EE" />
        <circle cx="120" cy="250" r="5" fill="#8B5CF6" />
        <circle cx="120" cy="150" r="5" fill="#3B82F6" />
      </svg>
    </div>
  );
}
