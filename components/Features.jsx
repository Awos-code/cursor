import React from "react";
import { useTranslation } from "react-i18next";
import StarBorder from "./ui/StarBorder";

export default function Features() {
  const { t } = useTranslation();
  const features = [
    { icon: <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" fill="#a78bfa"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">🎵</text></svg>, text: t('features.f1'), color: "#a78bfa" },
    { icon: <svg width="32" height="32" fill="none"><rect x="4" y="8" width="24" height="16" rx="8" fill="#38bdf8"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">🎚️</text></svg>, text: t('features.f2'), color: "#38bdf8" },
    { icon: <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" fill="#a78bfa"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">🤖</text></svg>, text: t('features.f3'), color: "#a78bfa" },
    { icon: <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" fill="#e879f9"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">😎</text></svg>, text: t('features.f4'), color: "#e879f9" },
  ];
  return (
    <section id="features" className="pt-16 md:pt-24 py-20 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 drop-shadow-[0_0_24px_rgba(168,85,247,0.7)] text-center mb-12 font-tinos-business">
        Feel the Beat of NeuroTune
      </h2>
      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
        {features.map((f, i) => (
          <StarBorder
            key={i}
            as="div"
            className="w-full"
            color={f.color}
            speed={`${6 + i}s`}
            thickness={2}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0'
            }}
          >
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_32px_8px_rgba(232,121,249,0.4)] hover:shadow-[0_0_48px_16px_rgba(168,85,247,0.6)] transition-all duration-300">
              <span className="w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">{f.icon}</span>
              <span className="text-lg md:text-xl font-semibold">{f.text}</span>
            </div>
          </StarBorder>
        ))}
      </div>
    </section>
  );
}