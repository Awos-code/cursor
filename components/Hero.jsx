import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[80vh] text-center py-24 bg-[#0a0a13] overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[80vh] bg-gradient-radial from-fuchsia-500/20 via-blue-500/10 to-transparent blur-3xl opacity-80 animate-pulse" />
      </div>
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 mb-4 drop-shadow-[0_0_32px_rgba(168,85,247,0.7)] animate-fade-in-up">Музыка. Эффекты. Эмоции.</h1>
      <div className="relative z-10 flex gap-4 mb-8 animate-fade-in-up delay-200">
        <a href="https://discord.com/oauth2/authorize?client_id=1374414380137185312&permissions=2150985024&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_4px_rgba(168,85,247,0.6)] border-none outline-none transition hover:scale-105 focus:ring-2 focus:ring-fuchsia-400 relative before:content-[''] before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_32px_8px_rgba(168,85,247,0.5)] before:opacity-60 before:pointer-events-none">Пригласить бота</a>
        <a href="#features" className="px-6 py-3 rounded-lg font-semibold bg-black/60 text-white border border-fuchsia-500 shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] transition hover:scale-105">Особенности</a>
      </div>
      {/* SVG волны */}
      <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none select-none z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-28">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a78bfa" />
              <stop offset="0.5" stopColor="#e879f9" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" fillOpacity="0.8">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,40 C360,120 1080,0 1440,40 L1440,120 L0,120 Z;M0,80 C480,0 960,160 1440,80 L1440,120 L0,120 Z;M0,40 C360,120 1080,0 1440,40 L1440,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
    </section>
  );
}