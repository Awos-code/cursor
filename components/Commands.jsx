import React, { useState, useEffect } from "react";

const commands = [
  { cmd: "/play", desc: "Воспроизвести трек или плейлист" },
  { cmd: "/stop", desc: "Остановить музыку и очистить очередь" },
  { cmd: "skip", desc: "Пропустить текущий трек" },
  { cmd: "/autodj", desc: "Включить автоматический подбор музыки" },
  { cmd: "/mood", desc: "Выбрать настроение и получить плейлист" },
];

function Typewriter({ text, speed = 40 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

export default function Commands() {
  return (
    <section id="commands" className="py-20 bg-[#181826] text-white">
      <div className="max-w-2xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">Популярные команды</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {commands.map((c, i) => (
            <div key={i} className="flex flex-col p-6 rounded-2xl bg-[#0a0a13]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)]">
              <span className="font-mono text-lg text-fuchsia-300 mb-2">
                <Typewriter text={c.cmd} speed={60 + i * 10} />
              </span>
              <span className="text-base text-gray-200">{c.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}