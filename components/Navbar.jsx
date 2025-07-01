import React, { useState } from "react";
import LocaleToggle from "./LocaleToggle";
import { useTranslation } from "react-i18next";
import InviteBotButton from './InviteBotButton';

export default function Navbar() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.features'), href: "#features" },
    { name: t('nav.allCommands'), href: "#commands" },
    { name: t('nav.faq'), href: "#faq" },
    { name: t('nav.contacts'), href: "#footer" },
  ];

  // Плавная прокрутка
  const handleClick = (e, i, href) => {
    e.preventDefault();
    setActive(i);
    setOpen(false);
    // Плавный скролл через lenis, если доступен
    if (window.lenis) {
      window.lenis.scrollTo(href, { offset: 0, duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a13]/80 border-b-2 border-fuchsia-500 shadow-[0_2px_24px_0_rgba(168,85,247,0.2)] backdrop-blur-lg">
      <div className="flex items-center justify-between w-full px-0 h-16">
        {/* Логотип строго в левом углу */}
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] select-none ml-4 flex-shrink-0">
          NeuroTune
        </span>
        {/* Навигация по центру */}
        <div className="hidden md:flex items-center gap-1 md:gap-4 flex-grow min-w-0 justify-center">
          {navLinks.slice(0, 4).map((link, i) => (
            link.href !== "#footer" && (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleClick(e, i, link.href)}
                className={`relative px-4 py-2 rounded-lg font-medium text-white transition border border-transparent hover:border-fuchsia-400 hover:shadow-[0_0_12px_2px_rgba(232,121,249,0.4)] hover:text-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ${active === i ? "z-10" : ""}`}
              >
                {active === i && (
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 opacity-60 blur-sm animate-fade-in-up -z-10" />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          ))}
          <LocaleToggle />
        </div>
        {/* Кнопка Пригласить бота строго в правом углу */}
        <InviteBotButton className="hidden md:inline-block mr-4" />
      </div>
    </nav>
  );
} 