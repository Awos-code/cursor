import React, { useEffect, useRef } from "react";

const notes = [
  "\u266B", // ♫
  "\u266A", // ♪
  "\u266C", // ♬
  "\u2669", // ♩
  "\u266F", // ♯
  "\u266D", // ♭
  "\uD834\uDD1E", // 𝄞 скрипичный ключ
  "\uD834\uDD22", // 𝄢 басовый ключ
];

const colors = [
  "#a78bfa", // фиолетовый
  "#38bdf8", // синий
  "#e879f9", // розовый
  "#facc15", // жёлтый
  "#34d399", // зелёный
  "#f472b6", // розово-коралловый
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function MusicNotesBackground() {
  const containerRef = useRef(null);
  const notesRef = useRef([]);
  const animRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 480;
    const noteCount = isSmallMobile ? 8 : isMobile ? 12 : 40;
    const noteEls = [];
    const noteObjs = [];
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Создаём ноты
    for (let i = 0; i < noteCount; i++) {
      const el = document.createElement("span");
      el.innerText = notes[Math.floor(Math.random() * notes.length)];
      el.style.position = "absolute";
      el.style.left = `0px`;
      el.style.top = `0px`;
      el.style.fontSize = `${getRandom(18, 38)}px`;
      el.style.color = getRandomColor();
      el.style.opacity = getRandom(0.22, 0.36);
      el.style.filter = "drop-shadow(0 0 12px #a78bfa)";
      el.style.pointerEvents = "none";
      el.style.transition = "opacity 0.5s, color 0.3s";
      el.style.zIndex = 1;
      container.appendChild(el);
      noteEls.push(el);
      // Параметры движения
      noteObjs.push({
        el,
        x: getRandom(0, vw),
        y: getRandom(0, vh),
        vx: getRandom(-0.12, 0.12),
        vy: getRandom(-0.12, 0.12),
        r: parseFloat(el.style.fontSize) / 2 + 6,
        color: el.style.color,
      });
    }
    notesRef.current = noteObjs;

    // Анимация с отталкиванием
    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let i = 0; i < noteObjs.length; i++) {
        let n1 = noteObjs[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        // Стенки
        if (n1.x < 0 || n1.x > w) n1.vx *= -1;
        if (n1.y < 0 || n1.y > h) n1.vy *= -1;
        n1.x = Math.max(0, Math.min(w, n1.x));
        n1.y = Math.max(0, Math.min(h, n1.y));
        // Отталкивание
        for (let j = i + 1; j < noteObjs.length; j++) {
          let n2 = noteObjs[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < n1.r + n2.r && !isMobile) {
            // Простое отталкивание только на десктопе
            const angle = Math.atan2(dy, dx);
            const force = 0.07;
            n1.vx -= Math.cos(angle) * force;
            n1.vy -= Math.sin(angle) * force;
            n2.vx += Math.cos(angle) * force;
            n2.vy += Math.sin(angle) * force;
            // Меняем цвет
            n1.color = n2.color = getRandomColor();
            n1.el.style.color = n1.color;
            n2.el.style.color = n2.color;
          }
        }
        n1.el.style.left = `${n1.x}px`;
        n1.el.style.top = `${n1.y}px`;
      }
      animRef.current = requestAnimationFrame(animate);
    }
    animRef.current = requestAnimationFrame(animate);

    return () => {
      noteEls.forEach(el => container.removeChild(el));
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />
  );
}

export default MusicNotesBackground; 