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
  title: "Kumara Vadivel | Engineering Student & Developer Portfolio",
  description:
    "Kumara Vadivel is a B.Tech engineering student at JP College of Engineering, Tenkasi, building Python, AI, and web applications. Open for internship opportunities.",
  keywords: [
    "Kumara Vadivel",
    "Developer Portfolio",
    "Engineering Student",
    "Tenkasi",
    "JP College of Engineering",
    "Python Developer",
    "AI Voice Assistant",
    "Web Developer",
    "Data Science",
  ],
  authors: [{ name: "Kumara Vadivel" }],
  openGraph: {
    title: "Kumara Vadivel | Engineering Student & Developer Portfolio",
    description:
      "A motivated engineering student building smart AI voice assistants, web apps, and data-driven solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Kumara Vadivel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumara Vadivel | Engineering Student & Developer Portfolio",
    description:
      "Engineering student turning coursework into practical software & AI voice projects.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090C",
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
      <body className="min-h-full flex flex-col font-sans bg-[#08090C] text-[#F5F5F5] bg-noise relative">
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
