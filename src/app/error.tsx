"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-slate-200 text-center space-y-4 bg-white/90 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto font-mono text-xl font-bold">
          !
        </div>
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Something went wrong
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          An unexpected error occurred while loading this section.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
