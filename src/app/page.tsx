import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import DocumentsSection from "@/components/sections/DocumentsSection";
import Marquee from "@/components/ui/Marquee";
import AboutSection from "@/components/sections/AboutSection";
import SkillsBento from "@/components/sections/SkillsBento";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      {/* Floating Glass Navigation Pill & Scroll Progress Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Documents & Resume Glass Download Card */}
      <DocumentsSection />

      {/* Horizontal Auto-Scrolling Ticker Strip */}
      <Marquee />

      {/* About Me Section */}
      <AboutSection />

      {/* Skills Bento Grid Section */}
      <SkillsBento />

      {/* Projects Showcase Section */}
      <ProjectsSection />

      {/* Academic Education Timeline Section */}
      <EducationSection />

      {/* Certifications Bento Grid Section */}
      <CertificationsSection />

      {/* Achievements & Milestones Section */}
      <AchievementsSection />

      {/* Working Contact & Email CTA Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
