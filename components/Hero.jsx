import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center py-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-gradient-x">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">NeuroTune</h1>
      <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">Музыкальный AI-бот для Discord. Ваша музыка — ваш стиль, ваш ритм, ваш Discord.</p>
      <a href="https://discord.com/oauth2/authorize?client_id=1374414380137185312&permissions=2150985024&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Добавить в Discord</a>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500/20 via-blue-500/10 to-transparent animate-pulse" />
    </section>
  );
}