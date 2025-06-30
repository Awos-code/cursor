import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Проверяем сохранённую тему
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className={`ml-2 p-2 rounded-full border-2 border-fuchsia-500 bg-black/40 shadow-[0_0_8px_2px_rgba(168,85,247,0.3)] transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Переключить тему"
    >
      {theme === "dark" ? (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-300"><path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 7.464" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="5" fill="currentColor" className="text-yellow-300"/></svg>
      ) : (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-blue-400"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )}
    </button>
  );
} 