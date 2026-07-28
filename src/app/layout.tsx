import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumara Vadivel | Software Engineering Student & Full-Stack Developer",
  description:
    "Kumara Vadivel is a 3rd-year B.Tech Software Engineering student at JP College of Engineering, Tenkasi (2024), specializing in Python, Java, Data Structures, Web Systems, and AI.",
  keywords: [
    "Kumara Vadivel",
    "Software Engineering Student",
    "Full-Stack Developer",
    "Tenkasi",
    "JP College of Engineering",
    "Python Developer",
    "Data Structures & Algorithms",
    "AI Voice Assistant",
    "Next.js Developer",
    "MySQL Databases",
  ],
  authors: [{ name: "Kumara Vadivel" }],
  openGraph: {
    title: "Kumara Vadivel | Software Engineering Student Portfolio",
    description:
      "A 3rd-year Software Engineering student building scalable web systems, clean algorithms, and AI voice engines.",
    type: "website",
    locale: "en_US",
    siteName: "Kumara Vadivel Software Engineering Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumara Vadivel | Software Engineering Student Portfolio",
    description:
      "3rd-year Software Engineering student specializing in Full-Stack Web Development, Algorithms, and AI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 bg-noise relative">
        <SmoothScroll>
          {/* Custom Desktop Glowing Cursor */}
          <CustomCursor />

          {/* Ambient Particle & Grid Canvas Layer */}
          <ParticleBackground />

          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
