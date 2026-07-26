"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Eye, EyeOff, Send, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import MagneticButton from "../ui/MagneticButton";
import PlaceholderBadge from "../ui/PlaceholderBadge";

export default function ContactSection() {
  const [showPhone, setShowPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "kumarlaksh2424@gmail.com";
  const phone = "+91 6383153692";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start space-y-3 mb-12">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
            08 / CONTACT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build <span className="text-gradient">Something Great Together</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
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
          className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/15 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-600/20 via-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DIRECT INBOX ACCESS</span>
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to start a conversation?
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Send me an email directly or connect with me via LinkedIn. I typically respond within 24 hours.
            </p>

            {/* Email Direct Action Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-slate-200 font-mono text-sm sm:text-base overflow-hidden">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="truncate">{email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-200 border border-white/10 transition-colors flex items-center space-x-1.5 shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Magnetic CTA Email Link */}
          <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex flex-wrap items-center gap-4">
            <MagneticButton strength={0.4}>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold text-base shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-all transform active:scale-95"
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
            className="glass-card rounded-2xl p-6 border border-white/10 flex items-center space-x-4"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">LOCATION</h4>
              <p className="text-white font-semibold text-base sm:text-lg">Tenkasi, Tamil Nadu, India</p>
            </div>
          </motion.div>

          {/* Phone Card with Reveal Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border border-white/10 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">PHONE NUMBER</h4>
                <p className="text-white font-mono font-semibold text-base">
                  {showPhone ? phone : "+91 6383••••••"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPhone(!showPhone)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label={showPhone ? "Hide Phone Number" : "Reveal Phone Number"}
            >
              {showPhone ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5 text-cyan-400" />}
            </button>
          </motion.div>

          {/* Social Links Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border border-white/10 space-y-4"
          >
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              SOCIAL CONNECTIVITY
            </h4>

            <div className="space-y-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kumara-vadivel-926a19389"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">LinkedIn Profile</span>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                  Connect &gt;
                </span>
              </a>

              {/* GitHub Placeholder */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                <div className="flex items-center space-x-3">
                  <GithubIcon className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold text-sm">GitHub Profile</span>
                </div>
                <PlaceholderBadge
                  label="GitHub Profile URL"
                  detailText="GitHub profile link will be attached once public repositories are launched."
                  badgeText="Coming Soon"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
