import React from "react";
import { useTranslation } from "react-i18next";

export default function InviteBotButton({ className = "" }) {
  const { t } = useTranslation();
  return (
    <a
      href="https://discord.com/oauth2/authorize?client_id=1374414380137185312&permissions=2150985024&integration_type=0&scope=bot"
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_4px_rgba(168,85,247,0.6)] border-none outline-none transition hover:scale-105 focus:ring-2 focus:ring-fuchsia-400 relative before:content-[''] before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_32px_8px_rgba(168,85,247,0.5)] before:opacity-60 before:pointer-events-none ${className}`}
    >
      {t('hero.invite')}
    </a>
  );
} 