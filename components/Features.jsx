import React from "react";

const features = [
  { icon: "🎚️", text: "Поддержка всех популярных платформ: YouTube, Spotify, SoundCloud, Apple Music и др." },
  { icon: "🎛️", text: "Аудиофильтры: bassboost, nightcore, 8D и другие" },
  { icon: "🤖", text: "Auto-DJ и автоплей: бот сам выбирает следующий трек" },
  { icon: "🎭", text: "Настроение: выбери chill, party, focus и получи плейлист" },
  { icon: "💬", text: "Удобные slash-команды: всё в одном меню" },
];

export default function Features() {
  return (
    <section className="py-12 bg-[#16213e] text-white">
      <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a2e]/70 shadow-md">
            <span className="text-3xl md:text-4xl select-none">{f.icon}</span>
            <span className="text-base md:text-lg">{f.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}