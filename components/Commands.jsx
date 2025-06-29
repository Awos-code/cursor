import React from "react";

const commands = [
  { cmd: "/play", desc: "Воспроизвести трек или плейлист" },
  { cmd: "/stop", desc: "Остановить музыку и очистить очередь" },
  { cmd: "skip", desc: "Пропустить текущий трек" },
  { cmd: "/autodj", desc: "Включить автоматический подбор музыки" },
  { cmd: "/mood", desc: "Выбрать настроение и получить плейлист" },
];

export default function Commands() {
  return (
    <section className="py-12 bg-[#0f3460] text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Популярные команды</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {commands.map((c, i) => (
            <div key={i} className="flex flex-col p-4 rounded-lg bg-[#1a1a2e]/70 shadow">
              <span className="font-mono text-lg text-pink-400 mb-1">{c.cmd}</span>
              <span className="text-base">{c.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}