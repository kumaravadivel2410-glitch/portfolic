"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none">
      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-white/5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glass Pill Container */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pointer-events-auto">
        <nav
          className={`mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
            scrolled ? "glass-nav shadow-2xl py-2.5 max-w-4xl" : "bg-transparent max-w-6xl"
          }`}
        >
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full px-2 py-1"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm md:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              KV<span className="text-purple-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Quick Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pointer-events-auto w-[90%] max-w-sm mt-3 p-6 glass-card rounded-3xl border border-white/15 shadow-2xl flex flex-col space-y-4 text-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
