import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import ProfileImage from "@/components/hero/ProfileImage";
import { portfolioContent } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Profile | Kumara Vadivel",
  description: "Developer profile, background, and contact details for Kumara Vadivel.",
};

export default function ProfilePage() {
  const { name, headline, altHeadline, bio, location, email, linkedIn, gitHub, profilePhotoPath } =
    portfolioContent.personal;

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden pt-28">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Card Container */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl bg-white/90 space-y-8">
          
          {/* Header Row: Profile Photo + Badges */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            {/* Profile Photo Component with Live Browser Upload Enabled */}
            <ProfileImage src={profilePhotoPath} size={140} allowUpload={true} />

            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-mono text-xs text-sky-700 tracking-widest uppercase bg-sky-100 px-3 py-1 rounded-full border border-sky-200 font-semibold shadow-sm">
                  PROFILE DETAILED
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold inline-flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Available for Internship</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {name}
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-gradient">
                {headline}
              </p>

              <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm font-mono text-slate-600 font-medium">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>{location}, India</span>
              </div>
            </div>
          </div>

          {/* Sub-headline */}
          <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 text-sky-900 font-mono text-sm sm:text-base font-semibold">
            &quot;{altHeadline}&quot;
          </div>

          {/* Detailed Bio Paragraphs */}
          <div className="space-y-4 pt-2">
            <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">
              ABOUT KUMARA VADIVEL
            </h2>
            {bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Social Links & Direct Contact */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">
              CONNECT &amp; DIRECT LINKS
            </h2>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me ({email})</span>
              </a>

              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-800 border border-slate-200 font-semibold text-sm shadow-sm transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-600" />
                <span>LinkedIn Profile</span>
              </a>

              {gitHub && (
                <a
                  href={gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold text-sm shadow-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-800" />
                  <span>GitHub Profile</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
