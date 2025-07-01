import React from "react";
import DiscordStatus from "./DiscordStatus";
import { useTranslation } from "react-i18next";
import InviteBotButton from './InviteBotButton';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 mb-4 drop-shadow-[0_0_32px_rgba(168,85,247,0.7)]">
        {t('hero.title')}
      </h1>
      <div className="relative z-10 flex gap-4 mb-8">
        <InviteBotButton />
        <a href="https://discord.gg/GeyhxkME7e" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold bg-black/60 text-white border border-fuchsia-500 shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] transition hover:scale-105">{t('hero.support')}</a>
      </div>
      <DiscordStatus />
    </section>
  );
}