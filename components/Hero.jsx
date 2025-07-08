import React, { useEffect } from "react";
import DiscordStatus from "./DiscordStatus";
import { useTranslation } from "react-i18next";
import InviteBotButton from './InviteBotButton';
import { GradientButton } from "./ui/gradient-button";
import GradientText from "./ui/GradientText";
import { setupRevealAnimation } from "../lib/utils";

function useIsMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android/i.test(navigator.userAgent);
}

export default function Hero() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!isMobile) setupRevealAnimation('.hero-reveal');
  }, [isMobile]);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      <div className="container">
        <div className={`relative z-10 mb-4${isMobile ? '' : ' hero-reveal'}`}>
          <div className={
            `text-h1 select-none drop-shadow-[0_0_32px_rgba(168,85,247,0.7)] hero-title ` +
            (isMobile ? 'break-words text-2xl leading-tight whitespace-pre-line' : '')
          } style={{wordBreak: isMobile ? 'break-word' : undefined}}>
            <span style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', color: 'transparent', display: isMobile ? 'block' : 'inline'}}>{t('hero.title1')}</span>
            <span style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', WebkitBackgroundClip: 'text', color: 'transparent', display: isMobile ? 'block' : 'inline'}}>{t('hero.title2')}</span>
            <span style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', color: 'transparent', display: isMobile ? 'block' : 'inline'}}>{t('hero.title3')}</span>
          </div>
          <div className="text-body mt-4 text-gray-200 max-w-xl mx-auto hero-subtitle">
            {t('hero.subtitle')}
          </div>
        </div>
        <div className={`relative z-10 flex gap-4 mb-8 justify-center${isMobile ? '' : ' hero-reveal'}`}>
        <InviteBotButton />
        <GradientButton asChild>
          <a href="https://discord.gg/GeyhxkME7e" target="_blank" rel="noopener noreferrer">
            {t('hero.support')}
          </a>
        </GradientButton>
      </div>
      <DiscordStatus />
      </div>
    </section>
  );
}