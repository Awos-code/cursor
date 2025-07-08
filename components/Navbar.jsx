import React, { useState } from "react";
import LocaleToggle from "./LocaleToggle";
import { useTranslation } from "react-i18next";
import InviteBotButton from './InviteBotButton';
import Link from 'next/link';

export default function Navbar({ minimal = false, active = 0, setActive }) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
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
    if (setActive) setActive(i);
    if (window.lenis) {
      window.lenis.scrollTo(href, { offset: 0, duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (minimal) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-6 bg-[#0a0a13]/90 backdrop-blur-md header">
        <span className="text-2xl font-extrabold text-[#f5f5dc] font-roboto-slab">NeuroTune</span>
        <Link href="/" legacyBehavior>
          <a className="px-5 py-2 rounded-lg font-semibold bg-indigo-500 text-white hover:bg-indigo-600 transition shadow">HOME</a>
        </Link>
      </nav>
    );
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a13]/80 border-b-2 border-fuchsia-500 shadow-[0_2px_24px_0_rgba(168,85,247,0.2)] backdrop-blur-lg header">
      <div className="flex items-center justify-between w-full px-0 h-16">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] select-none ml-4 flex-shrink-0 font-roboto-slab">
          NeuroTune
        </span>
        <div className="hidden md:flex items-center gap-1 md:gap-4 flex-grow min-w-0 justify-center relative">
          {navLinks.slice(0, 4).map((link, i) => (
            link.href !== "#footer" && (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleClick(e, i, link.href)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 nav-link
                  ${active === i
                    ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_2px_rgba(168,85,247,0.4)] border-fuchsia-400 active"
                    : "text-white hover:border-fuchsia-400 hover:shadow-[0_0_12px_2px_rgba(232,121,249,0.4)] hover:text-fuchsia-300"}
                `}
              >
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          ))}
          <LocaleToggle />
        </div>
        <div className="md:hidden flex items-center mr-2">
          <button onClick={() => setMobileOpen(v => !v)} className="p-2 focus:outline-none interactive-btn">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect y="5" width="24" height="2" rx="1" fill="#a78bfa"/><rect y="11" width="24" height="2" rx="1" fill="#a78bfa"/><rect y="17" width="24" height="2" rx="1" fill="#a78bfa"/></svg>
          </button>
        </div>
        <InviteBotButton className="hidden md:inline-block mr-4" />
      </div>
      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0a0a13]/95 border-b-2 border-fuchsia-500 shadow-lg flex flex-col items-center py-4 gap-2 z-50 animate-fade-in">
          {navLinks.slice(0, 4).map((link, i) => (
            link.href !== "#footer" && (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { handleClick(e, i, link.href); setMobileOpen(false); }}
                className={`w-11/12 text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-lg nav-link
                  ${active === i
                    ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-[0_0_16px_2px_rgba(168,85,247,0.4)] border-fuchsia-400 active"
                    : "text-white hover:border-fuchsia-400 hover:shadow-[0_0_12px_2px_rgba(232,121,249,0.4)] hover:text-fuchsia-300"}
                `}
              >
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          ))}
          <LocaleToggle />
          <InviteBotButton className="w-11/12 mt-2" />
        </div>
      )}
    </nav>
  );
} 