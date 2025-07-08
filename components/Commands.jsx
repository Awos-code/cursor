import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { setupRevealAnimation } from "../lib/utils";

function useIsMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android/i.test(navigator.userAgent);
}

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
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!isMobile) setupRevealAnimation('.commands-reveal');
  }, [isMobile]);
  // Сброс flip при смене группы
  React.useEffect(() => {
    setFlipped(Array(commands.length).fill(false));
  }, [active]);
  const handleFlip = idx => {
    setFlipped(f => f.map((val, i) => (i === idx ? !val : val)));
  };
  return (
    <section id="commands" className={`py-6 md:py-12 text-white${isMobile ? '' : ' fade-in-up commands-reveal'}`} style={{scrollMarginTop: '80px'}}>
      <div className="container">
      <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 md:mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">
          {t('allCommands.title')}
        </h2>
          <div className="flex justify-center gap-2 md:gap-4 mb-4 md:mb-8">
          {groupNames.map((name, i) => (
            <button
              key={name}
              onClick={() => setActive(i)}
                className={`px-6 py-2 rounded-full font-semibold transition border-2 border-fuchsia-500 bg-black/60 text-white shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] hover:bg-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 interactive-btn ${active === i ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_4px_rgba(168,85,247,0.6)]" : ""}`}
            >
              {name}
            </button>
          ))}
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {commands.map((cmd, idx) => {
            const cmdKey = cmd.replace("/", "");
            if (isMobile) {
              return (
                <div key={cmd} className="w-full h-auto min-h-[90px] mobile-fade-in static">
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)] cursor-pointer w-full h-full">
                    <span className="text-command text-base mb-1 select-text" style={{fontFamily: 'JetBrains Mono, monospace'}}>{cmd}</span>
                    <span className="text-body text-center break-words leading-snug px-1 select-text" style={{wordBreak: 'break-word', fontSize: '15px'}}>
                      {t(`commands.${cmdKey}`) || 'Описание команды...'}
                    </span>
                  </div>
                </div>
              );
            }
            return (
                <div key={cmd} className="[perspective:1000px] interactive-element fade-in-up" style={{animationDelay: `${idx * 80}ms`}}>
                <div
                  className={`commands-flip-card relative w-full h-32 transition-transform duration-500 [transform-style:preserve-3d] ${flipped[idx] ? '[transform:rotateY(180deg)]' : ''}`}
                  onClick={() => handleFlip(idx)}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)] hover:shadow-[0_0_32px_12px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer [backface-visibility:hidden]">
                      <span className="text-command text-xl md:text-2xl mb-2 select-text" style={{fontFamily: 'JetBrains Mono, monospace'}}>{cmd}</span>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1e1e2e]/90 border border-fuchsia-500 shadow-[0_0_32px_12px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <span className="text-body text-center break-words max-h-16 md:max-h-20 overflow-y-auto leading-snug px-1 select-text" style={{wordBreak: 'break-word'}}>
                      {t(`commands.${cmdKey}`) || 'Описание команды...'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
} 