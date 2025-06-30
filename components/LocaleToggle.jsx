import React, { useEffect, useState } from "react";

const locales = [
  { code: "ru", label: "🇷🇺 RU" },
  { code: "en", label: "🇬🇧 EN" },
];

export default function LocaleToggle({ locale, setLocale }) {
  const [current, setCurrent] = useState(locale || "ru");

  useEffect(() => {
    // Проверяем сохранённый язык
    const saved = localStorage.getItem("locale");
    if (saved) setCurrent(saved);
    else {
      const browser = navigator.language.startsWith("en") ? "en" : "ru";
      setCurrent(browser);
      setLocale(browser);
    }
  }, [setLocale]);

  useEffect(() => {
    setLocale(current);
    localStorage.setItem("locale", current);
  }, [current, setLocale]);

  return (
    <div className="ml-2 flex gap-1">
      {locales.map(l => (
        <button
          key={l.code}
          className={`px-2 py-1 rounded-full border-2 border-fuchsia-500 bg-black/40 shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] text-white font-bold text-xs transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ${current === l.code ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white" : ""}`}
          onClick={() => setCurrent(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
} 