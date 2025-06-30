import React from "react";
import DiscordStatus from "./DiscordStatus";

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
      <DiscordStatus />
    </section>
  );
}