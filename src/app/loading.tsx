export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-sky-200 border-t-sky-600 animate-spin" />
        <span className="font-mono text-xs font-semibold text-sky-700 uppercase tracking-widest animate-pulse">
          Loading Portfolio...
        </span>
      </div>
    </div>
  );
}
