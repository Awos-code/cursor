import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LocaleToggle from "./LocaleToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Особенности", href: "#features" },
  { name: "Команды", href: "#commands" },
  { name: "Все команды", href: "#all-commands" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакты", href: "#footer" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState("ru");

  // Плавная прокрутка
  const handleClick = (e, i, href) => {
    e.preventDefault();
    setActive(i);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a13]/80 border-b-2 border-fuchsia-500 shadow-[0_2px_24px_0_rgba(168,85,247,0.2)] backdrop-blur-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] select-none flex items-center">
          NeuroTune
          <ThemeToggle />
          <LocaleToggle locale={locale} setLocale={setLocale} />
        </span>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-1 md:gap-2 relative">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleClick(e, i, link.href)}
              className={`relative px-4 py-2 rounded-lg font-medium text-white transition border border-transparent hover:border-fuchsia-400 hover:shadow-[0_0_12px_2px_rgba(232,121,249,0.4)] hover:text-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ${active === i ? "z-10" : ""}`}
            >
              {active === i && (
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 opacity-60 blur-sm animate-fade-in-up -z-10" />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-fuchsia-500 bg-black/40 shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          <span className={`block w-6 h-0.5 bg-fuchsia-400 mb-1 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-fuchsia-400 mb-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-fuchsia-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        {/* Mobile nav panel */}
        {open && (
          <div className="fixed inset-0 bg-[#0a0a13]/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center animate-fade-in-up">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleClick(e, i, link.href)}
                className={`my-2 text-2xl font-bold px-8 py-3 rounded-xl text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)] border border-fuchsia-500 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-400`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <ThemeToggle />
              <LocaleToggle locale={locale} setLocale={setLocale} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 