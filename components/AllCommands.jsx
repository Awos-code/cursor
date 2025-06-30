import React, { useState } from "react";

const translations = {
  ru: {
    title: "Все команды",
    groups: [
      { name: "All", commands: ["/play", "/skip", "/stop", "/pause", "/resume", "/queue", "/shuffle", "/repeat", "/clear", "/autoplay", "/profile", "/help", "/ping"] },
      { name: "Music", commands: ["/play", "/skip", "/stop", "/pause", "/resume", "/queue", "/shuffle", "/repeat", "/clear", "/autoplay"] },
      { name: "Info", commands: ["/profile", "/help", "/ping"] }
    ]
  },
  en: {
    title: "All Commands",
    groups: [
      { name: "All", commands: ["/play", "/skip", "/stop", "/pause", "/resume", "/queue", "/shuffle", "/repeat", "/clear", "/autoplay", "/profile", "/help", "/ping"] },
      { name: "Music", commands: ["/play", "/skip", "/stop", "/pause", "/resume", "/queue", "/shuffle", "/repeat", "/clear", "/autoplay"] },
      { name: "Info", commands: ["/profile", "/help", "/ping"] }
    ]
  }
};

export default function AllCommands({ locale = "ru" }) {
  const [active, setActive] = useState(0);
  const t = translations[locale];
  
  return (
    <section id="all-commands" className="py-20 bg-[#0a0a13] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">{t.title}</h2>
        <div className="flex justify-center gap-4 mb-8">
          {t.groups.map((group, i) => (
            <button
              key={group.name}
              onClick={() => setActive(i)}
              className={`px-6 py-2 rounded-full font-semibold transition border-2 border-fuchsia-500 bg-black/60 text-white shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] hover:bg-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ${active === i ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_4px_rgba(168,85,247,0.6)]" : ""}`}
            >
              {group.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-up">
          {t.groups[active].commands.map((cmd) => (
            <div key={cmd} className="flex flex-col items-center p-6 rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)] hover:shadow-[0_0_32px_12px_rgba(168,85,247,0.5)] transition-all duration-300">
              <span className="font-mono text-lg text-fuchsia-300 mb-2">{cmd}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 