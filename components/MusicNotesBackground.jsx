import React, { useEffect, useRef } from "react";

const notes = [
  "\u266B", // ♫
  "\u266A", // ♪
  "\u266C", // ♬
  "\u2669", // ♩
];

const colors = [
  "#a78bfa", // фиолетовый
  "#38bdf8", // синий
  "#e879f9", // розовый
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export default function MusicNotesBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const noteEls = [];
    for (let i = 0; i < 24; i++) {
      const el = document.createElement("span");
      el.innerText = notes[Math.floor(Math.random() * notes.length)];
      el.style.position = "absolute";
      el.style.left = `${getRandom(-5, 100)}vw`;
      el.style.top = `${getRandom(-10, 110)}vh`;
      el.style.fontSize = `${getRandom(18, 38)}px`;
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
      el.style.opacity = getRandom(0.15, 0.35);
      el.style.filter = "drop-shadow(0 0 12px #a78bfa)";
      el.style.pointerEvents = "none";
      el.style.transition = "opacity 0.5s";
      el.style.zIndex = 1;
      container.appendChild(el);
      noteEls.push(el);
      const duration = getRandom(10, 22);
      const deltaX = getRandom(-60, 60);
      const deltaY = getRandom(-40, 80);
      el.animate([
        { transform: `translate(0, 0)` },
        { transform: `translate(${deltaX}vw, ${deltaY}vh)` }
      ], {
        duration: duration * 1000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out"
      });
    }
    return () => {
      noteEls.forEach(el => container.removeChild(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />
  );
} 