import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="py-8 bg-[#1a1a2e] text-center text-gray-400 text-sm border-t-2 border-fuchsia-500 shadow-[0_-2px_24px_0_rgba(168,85,247,0.2)] animate-fade-in-up">
      <a href="https://discord.gg/GeyhxkME7e" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline hover:text-fuchsia-400 transition">Discord-сервер поддержки</a>
      <span className="mx-2">|</span>
      <span className="text-white">© 2025 NeuroTune</span>
    </footer>
  );
}
