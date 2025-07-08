import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import { useTranslation } from "react-i18next";
import { setupRevealAnimation } from "../lib/utils";

function useIsMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android/i.test(navigator.userAgent);
}

export default function Features() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!isMobile) setupRevealAnimation('.features-reveal');
  }, [isMobile]);
  const features = [
    {
      icon: "🎵",
      title: t('features.sources.title'),
      description: t('features.sources.desc'),
      color: "#a78bfa"
    },
    {
      icon: "🤖",
      title: t('features.ai.title'),
      description: t('features.ai.desc'),
      color: "#a78bfa"
    },
    {
      icon: "🎧",
      title: t('features.audio.title'),
      description: t('features.audio.desc'),
      color: "#f472b6"
    },
    {
      icon: "🎛️",
      title: t('features.control.title'),
      description: t('features.control.desc'),
      color: "#a78bfa"
    },
    {
      icon: "⚡",
      title: t('features.speed.title'),
      description: t('features.speed.desc'),
      color: "#a78bfa"
    },
    {
      icon: "⚙️",
      title: t('features.mood.title'),
      description: t('features.mood.desc'),
      color: "#a78bfa"
    },
  ];

  return (
    <section id="features" className={`pt-10 md:pt-24 py-8 md:py-20 text-white${isMobile ? '' : ' fade-in-up features-reveal'}`}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 drop-shadow-[0_0_24px_rgba(168,85,247,0.7)] text-center mb-6 md:mb-12 font-tinos-business">
          {t('featuresTitle', 'Особенности NeuroTune')}
      </h2>
        <div className="max-w-6xl mx-auto grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-4">
        {features.map((feature, i) => (
            <div
              key={i}
              onMouseEnter={() => !isMobile && window.matchMedia('(pointer: fine)').matches && setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`feature-card${isMobile ? ' mobile-fade-in' : ''}`}
              style={{ '--card-index': i }}
            >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
                enableTilt={!isMobile && hovered === i && window.matchMedia('(pointer: fine)').matches}
                className={isMobile ? 'mobile-fade-in' : `fade-in-up`}
                style={isMobile ? {} : {animationDelay: `${i * 80}ms`}}
          />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}