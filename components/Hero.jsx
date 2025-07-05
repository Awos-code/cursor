import React from "react";
import DiscordStatus from "./DiscordStatus";
import { useTranslation } from "react-i18next";
import InviteBotButton from './InviteBotButton';
import { GradientButton } from "./ui/gradient-button";
import GradientText from "./ui/GradientText";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      <GradientText className="relative z-10 text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_0_32px_rgba(168,85,247,0.7)] font-tinos-business select-none">
        {t('hero.title')}
      </GradientText>
      <div className="relative z-10 flex gap-4 mb-8">
        <InviteBotButton />
        <GradientButton asChild>
          <a href="https://discord.gg/GeyhxkME7e" target="_blank" rel="noopener noreferrer">
            {t('hero.support')}
          </a>
        </GradientButton>
      </div>
      <DiscordStatus />
    </section>
  );
}