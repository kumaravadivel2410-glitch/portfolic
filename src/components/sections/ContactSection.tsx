"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Eye, EyeOff, Send, Copy, Check } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import MagneticButton from "../ui/MagneticButton";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function ContactSection() {
  const [showPhone, setShowPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = portfolioContent.personal.email;
  const phone = portfolioContent.personal.phone;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
            08 / CONTACT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let&apos;s Build <span className="text-gradient">Something Great Together</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          Open for internship opportunities, technical collaborations, and project discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-between shadow-xl bg-white/90"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>DIRECT INBOX ACCESS</span>
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to start a conversation?
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Send me an email directly or connect with me via LinkedIn. I typically respond within 24 hours.
            </p>

            {/* Email Direct Action Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-slate-800 font-mono text-sm sm:text-base font-semibold overflow-hidden">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="truncate">{email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-mono text-slate-700 border border-slate-200 shadow-sm transition-colors flex items-center space-x-1.5 shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Magnetic CTA Email Link */}
          <div className="mt-8 pt-6 border-t border-slate-200 relative z-10 flex flex-wrap items-center gap-4">
            <MagneticButton strength={0.4}>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white font-semibold text-base shadow-[0_6px_25px_rgba(14,165,233,0.35)] hover:shadow-[0_10px_35px_rgba(14,165,233,0.5)] transition-all transform active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Email Me Directly</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Sidebar Info & Social Links */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 border border-slate-200/80 flex items-center space-x-4 shadow-sm bg-white/80"
          >
            <div className="p-3 rounded-xl bg-sky-100 text-sky-700 border border-sky-200">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-widest">LOCATION</h4>
              <p className="text-slate-900 font-semibold text-base sm:text-lg">{portfolioContent.personal.location}, India</p>
            </div>
          </motion.div>

          {/* Phone Card with Reveal Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border border-slate-200/80 flex items-center justify-between shadow-sm bg-white/80"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-700 border border-blue-200">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-widest">PHONE NUMBER</h4>
                <p className="text-slate-900 font-mono font-bold text-base">
                  {showPhone ? phone : "+91 6383••••••"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPhone(!showPhone)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors shadow-sm"
              aria-label={showPhone ? "Hide Phone Number" : "Reveal Phone Number"}
            >
              {showPhone ? <EyeOff className="w-5 h-5 text-slate-600" /> : <Eye className="w-5 h-5 text-sky-600" />}
            </button>
          </motion.div>

          {/* Social Links Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border border-slate-200/80 space-y-4 shadow-sm bg-white/80"
          >
            <h4 className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-widest">
              SOCIAL CONNECTIVITY
            </h4>

            <div className="space-y-3">
              {/* LinkedIn */}
              <a
                href={portfolioContent.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-800 hover:text-sky-700 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <LinkedinIcon className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">LinkedIn Profile</span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-sky-700 font-semibold">
                  Connect &gt;
                </span>
              </a>

              {/* GitHub */}
              {portfolioContent.personal.gitHub ? (
                <a
                  href={portfolioContent.personal.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <GithubIcon className="w-5 h-5 text-slate-800" />
                    <span className="font-semibold text-sm">GitHub Profile</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-slate-900 font-semibold">
                    View Profile &gt;
                  </span>
                </a>
              ) : (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                  <div className="flex items-center space-x-3">
                    <GithubIcon className="w-5 h-5 text-slate-700" />
                    <span className="font-semibold text-sm">GitHub Profile</span>
                  </div>
                  <PlaceholderBadge
                    label="GitHub Profile URL"
                    detailText="GitHub profile link will be attached once public repositories are launched."
                    badgeText="Coming Soon"
                  />
                </div>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
