import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Включает reveal-анимации для элементов с заданным селектором (по умолчанию .reveal-element).
 * Добавляет класс .revealed при появлении в зоне видимости.
 * Отключает анимации, если включён prefers-reduced-motion.
 */
export function setupRevealAnimation(selector = '.reveal-element') {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('revealed');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
} 