"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Award, ExternalLink, Info, X } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function DocumentsSection() {
  const [modalInfo, setModalInfo] = useState<{ title: string; text: string } | null>(null);

  const handleDocumentClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    filePath: string,
    docName: string
  ) => {
    // Check if user is clicking a placeholder link
    // We attempt a HEAD request or let default browser action open the PDF
    // If the file is not found or is a placeholder path, show informative modal
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 relative overflow-hidden bg-white/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left Info */}
        <div className="flex items-center space-x-4">
          <div className="p-3.5 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 shrink-0">
            <div className="w-6 h-6 flex items-center justify-center font-black text-sky-700 font-mono text-xl leading-none">
              K
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100 px-2.5 py-0.5 rounded-full font-semibold">
                DOCUMENTS
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Resume &amp; Official Credentials
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Download current resume PDF or review verified course certificates.
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {/* Download Resume Button */}
          <a
            href={portfolioContent.personal.resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* View Certificates Button */}
          <a
            href={portfolioContent.personal.certificatesPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            <Award className="w-4 h-4 text-sky-600" />
            <span>View Certificates</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
