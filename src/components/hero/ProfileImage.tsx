"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function ProfileImage({
  src = "/images/profile.jpg",
  alt = "Kumara Vadivel, engineering student and developer",
  size = 110,
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative group shrink-0">
      {/* Outer Sky-Blue Glow Ring */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 opacity-65 blur-md group-hover:opacity-100 transition duration-500" />

      {/* Glass Frame Container */}
      <div
        className="relative rounded-full p-1 glass-card border-2 border-white/80 shadow-lg flex items-center justify-center overflow-hidden bg-white/70 backdrop-blur-md"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            onError={() => setImageError(true)}
            className="rounded-full object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            priority
          />
        ) : (
          /* Graceful Fallback: Initials Glass Badge */
          <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-sky-800 font-extrabold font-mono text-xl sm:text-2xl shadow-inner">
            KV
          </div>
        )}
      </div>
    </div>
  );
}
