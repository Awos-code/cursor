import React from "react";

const translations = {
  ru: {
    copyright: "© 2025 NeuroTune. Все права защищены."
  },
  en: {
    copyright: "© 2025 NeuroTune. All rights reserved."
  }
};

export default function Footer({ locale = "ru" }) {
  const t = translations[locale];
  
  return (
    <footer id="footer" className="pt-12 pb-6 bg-[#181826] text-center text-gray-400 text-sm border-t-0 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 rounded-full blur-sm opacity-80" />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-4 gap-4 relative z-10">
        <span className="text-white font-bold text-lg tracking-wide">NeuroTune</span>
        <div className="flex gap-4 justify-center">
          <a href="https://discord.gg/GeyhxkME7e" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-fuchsia-400 transition text-2xl hover:scale-125 hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]" title="Discord">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.074.074 0 0 0-.079.037c-.34.607-.719 1.396-.984 2.013a18.524 18.524 0 0 0-5.456 0 12.683 12.683 0 0 0-.995-2.013.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c2.104 1.548 4.13 2.489 6.123 3.13a.077.077 0 0 0 .084-.027c.472-.65.893-1.34 1.248-2.063a.076.076 0 0 0-.041-.104c-.671-.253-1.31-.558-1.922-.892a.077.077 0 0 1-.008-.128c.13-.098.26-.2.382-.304a.074.074 0 0 1 .077-.01c4.016 1.833 8.366 1.833 12.342 0a.075.075 0 0 1 .078.009c.123.104.252.206.383.304a.077.077 0 0 1-.006.128 12.298 12.298 0 0 1-1.923.892.076.076 0 0 0-.04.105c.36.722.782 1.412 1.247 2.063a.076.076 0 0 0 .084.028c1.993-.641 4.02-1.582 6.123-3.13a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.637-3.449-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/></svg>
          </a>
          <a href="https://github.com/Awos-code/cursor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fuchsia-400 transition text-2xl hover:scale-125 hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]" title="GitHub">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
        <span className="text-gray-500 mt-2 block">{t.copyright}</span>
      </div>
    </footer>
  );
}
