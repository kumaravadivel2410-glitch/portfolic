"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, RotateCcw } from "lucide-react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  allowUpload?: boolean;
}

export default function ProfileImage({
  src = "/images/profile.jpg",
  alt = "Kumara Vadivel, engineering student and developer",
  size = 110,
  allowUpload = false,
}: ProfileImageProps) {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    if (typeof window === "undefined") return src;
    try {
      return localStorage.getItem("portfolio_profile_photo") || src;
    } catch {
      return src;
    }
  });
  const [imageError, setImageError] = useState(false);
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return !!localStorage.getItem("portfolio_profile_photo");
    } catch {
      return false;
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setPhotoSrc(base64);
        setImageError(false);
        setHasCustomPhoto(true);
        try {
          localStorage.setItem("portfolio_profile_photo", base64);
        } catch (err) {
          console.warn("Failed to save profile photo to localStorage:", err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setPhotoSrc(src);
    setImageError(false);
    setHasCustomPhoto(false);
    try {
      localStorage.removeItem("portfolio_profile_photo");
    } catch (err) {
      console.warn("Failed to remove custom photo from localStorage:", err);
    }
  };

  return (
    <div className="relative group shrink-0 inline-block">
      {/* Outer Sky-Blue Glow Ring */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 opacity-65 blur-md group-hover:opacity-100 transition duration-500" />

      {/* Glass Frame Container */}
      <div
        className="relative rounded-full p-1 glass-card border-2 border-white/80 shadow-lg flex items-center justify-center overflow-hidden bg-white/70 backdrop-blur-md"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageError ? (
          <Image
            src={photoSrc}
            alt={alt}
            width={size}
            height={size}
            onError={() => setImageError(true)}
            style={{ objectFit: "cover", objectPosition: "top center" }}
            className="rounded-full object-cover object-[top_center] w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            priority
            unoptimized={photoSrc.startsWith("data:")}
          />
        ) : (
          /* Graceful Fallback: Initials Glass Badge */
          <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-sky-800 font-extrabold font-mono text-xl sm:text-2xl shadow-inner">
            KV
          </div>
        )}
      </div>

      {/* Upload Trigger Overlay (if allowUpload is true) */}
      {allowUpload && (
        <div className="absolute -bottom-1 -right-1 flex items-center space-x-1 z-10">
          <label
            htmlFor="profile-photo-upload"
            className="p-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md hover:scale-110 transition-transform cursor-pointer border border-white/80"
            title="Change photo (saves to browser)"
          >
            <Camera className="w-4 h-4" />
            <input
              id="profile-photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {hasCustomPhoto && (
            <button
              onClick={handleResetPhoto}
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 shadow-md hover:scale-110 transition-transform cursor-pointer border border-white/80"
              title="Reset to default photo"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
