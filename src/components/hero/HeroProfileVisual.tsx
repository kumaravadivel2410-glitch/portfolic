"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ProfileImage from "./ProfileImage";

export default function HeroProfileVisual() {
  const [isMobile, setIsMobile] = useState(false);

  // Mouse parallax motion values (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for gentle tilt
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Map mouse pixel offset (-250 to 250) to small rotation degrees (-10deg to 10deg)
  const rotateX = useTransform(springY, [-200, 200], [10, -10]);
  const rotateY = useTransform(springX, [-200, 200], [-10, 10]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex items-center justify-center py-6 perspective-1000 select-none"
    >
      {/* Outer Drifting Container (Slow up-and-down floating loop) */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex items-center justify-center"
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-sky-400/40 via-sky-300/30 to-blue-500/30 blur-3xl opacity-80 animate-pulse pointer-events-none" />

        {/* Decorative Floating Glass Orbit Ring */}
        <div className="absolute -inset-4 rounded-full border border-sky-300/40 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />

        {/* Main Large Profile Photo Frame */}
        <div className="relative z-10 transform sm:scale-110 md:scale-125 lg:scale-135 transition-transform duration-300">
          <ProfileImage
            src="/images/profile.jpg"
            alt="Kumara Vadivel, engineering student and developer"
            size={240}
            allowUpload={false}
          />
        </div>

        {/* Subtle Decorative Glass Chip Badges */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -top-4 -right-4 sm:-right-8 z-20 px-3.5 py-1.5 rounded-full glass-card border border-sky-200 shadow-md text-[11px] font-mono text-sky-800 bg-white/90 backdrop-blur-md font-semibold"
        >
          Tenkasi, TN 📍
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 sm:-left-8 z-20 px-3.5 py-1.5 rounded-full glass-card border border-sky-200 shadow-md text-[11px] font-mono text-slate-800 bg-white/90 backdrop-blur-md font-semibold flex items-center space-x-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>B.Tech 3rd Year — AI &amp; DS</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
