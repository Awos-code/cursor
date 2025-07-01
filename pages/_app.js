import '../styles/globals.css';
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import MusicNotesBackground from "../components/MusicNotesBackground";
import Preloader from "../components/Preloader";
import '../components/i18n';
import Lenis from '@studio-freight/lenis';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Автоматический выбор языка по браузеру при первой загрузке
    const saved = localStorage.getItem("i18nextLng");
    if (!saved) {
      const browser = navigator.language.startsWith("en") ? "en" : "ru";
      localStorage.setItem("i18nextLng", browser);
    }
    // Lenis smooth scroll
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothTouch: false,
      touchMultiplier: 1.5,
    });
    window.lenis = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <MusicNotesBackground />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}