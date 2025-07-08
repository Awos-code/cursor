import React from "react";
import { useTranslation } from "react-i18next";

const locales = [
  { code: "en", label: <span className="inline-block align-middle mr-1"><svg width="18" height="12" viewBox="0 0 18 12"><rect width="18" height="12" fill="#fff"/><path d="M0 0l18 12M18 0L0 12" stroke="#00247d" strokeWidth="2"/><rect width="18" height="4" y="4" fill="#cf142b"/><rect width="4" height="12" x="7" fill="#cf142b"/></svg></span> },
  { code: "ru", label: <span className="inline-block align-middle mr-1"><svg width="18" height="12" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#fff"/><rect width="18" height="4" y="4" fill="#0039a6"/><rect width="18" height="4" y="8" fill="#d52b1e"/></svg></span> },
];

export default function LocaleToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith('en') ? 'en' : 'ru';

  return (
    <div className="ml-2 flex gap-1">
      {locales.map(l => (
        <button
          key={l.code}
          className={`px-2 py-1 rounded-full border-2 border-fuchsia-500 bg-black/40 shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] text-white font-bold text-xs transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ${current === l.code ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white" : ""}`}
          onClick={() => i18n.changeLanguage(l.code)}
        >
          {l.label}{l.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
} 