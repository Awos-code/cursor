import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a13] transition-opacity duration-700 animate-fade-in-up">
      <div className="flex flex-col items-center">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animate-spin-slow drop-shadow-[0_0_32px_rgba(168,85,247,0.7)]">
          <circle cx="40" cy="40" r="32" stroke="#a78bfa" strokeWidth="8" strokeDasharray="60 40" />
        </svg>
        <span className="mt-6 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 animate-pulse">NeuroTune</span>
      </div>
    </div>
  );
}

// В tailwind.config.js добавить кастомный spin-slow:
// animation: {
//   'spin-slow': 'spin 2s linear infinite',
// }, 