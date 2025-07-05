import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const commandGroups = [
  {
    key: "all",
    commands: ["/play", "/skip", "/stop", "/pause", "/queue", "/shuffle", "/repeat", "/clear", "/autoplay", "/profile", "/help", "/ping"]
  },
  {
    key: "music",
    commands: ["/play", "/skip", "/stop", "/pause", "/queue", "/shuffle", "/repeat", "/clear", "/autoplay"]
  },
  {
    key: "info",
    commands: ["/profile", "/help", "/ping"]
  }
];

export default function Commands() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const commands = commandGroups[active].commands;
  const [flipped, setFlipped] = useState(Array(commands.length).fill(false));
  const groupNames = [t('allCommands.all'), t('allCommands.music'), t('allCommands.info')];

  // Сброс flip при смене группы
  React.useEffect(() => {
    setFlipped(Array(commands.length).fill(false));
  }, [active]);

  const handleFlip = idx => {
    setFlipped(f => f.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <section id="commands" className="py-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">
          {t('allCommands.title')}
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          {groupNames.map((name, i) => (
            <button
              key={name}
              onClick={() => setActive(i)}
              className={`px-6 py-2 rounded-full font-semibold transition border-2 border-fuchsia-500 bg-black/60 text-white shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] hover:bg-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ${active === i ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_4px_rgba(168,85,247,0.6)]" : ""}`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {commands.map((cmd, idx) => {
            const cmdKey = cmd.replace("/", "");
            return (
              <div key={cmd} className="[perspective:1000px]">
                <div
                  className={`relative w-full h-32 transition-transform duration-500 [transform-style:preserve-3d] ${flipped[idx] ? '[transform:rotateY(180deg)]' : ''}`}
                  onClick={() => handleFlip(idx)}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)] hover:shadow-[0_0_32px_12px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer [backface-visibility:hidden]">
                    <span className="font-mono text-lg text-fuchsia-300 mb-2">{cmd}</span>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1e1e2e]/90 border border-fuchsia-500 shadow-[0_0_32px_12px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <span className="text-base text-white text-center break-words max-h-16 md:max-h-20 overflow-y-auto leading-snug px-1 select-text" style={{wordBreak: 'break-word'}}>
                      {t(`commands.${cmdKey}`) || 'Описание команды...'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 