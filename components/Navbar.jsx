import React from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Особенности", href: "#features" },
  { name: "Команды", href: "#commands" },
  { name: "Контакты", href: "#footer" },
];

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a13]/90 border-b-2 border-fuchsia-500 shadow-[0_2px_24px_0_rgba(168,85,247,0.2)] backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] select-none">NeuroTune</span>
        <div className="flex gap-2 md:gap-4">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-lg font-medium text-white transition border border-transparent hover:border-fuchsia-400 hover:shadow-[0_0_12px_2px_rgba(232,121,249,0.4)] hover:text-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 