import '../styles/globals.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const MusicNotesBackground = dynamic(() => import('../components/MusicNotesBackground'), { ssr: false });
const Preloader = dynamic(() => import('../components/Preloader'), { ssr: false });
// import SplashCursor from "../components/SplashCursor";
import '../components/i18n';
import Lenis from '@studio-freight/lenis';
import '../styles/privacy-custom.css';

export default function App({ Component, pageProps }) {
  const [showBg, setShowBg] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      setShowBg(!isMobile);
    }
  }, []);

  useEffect(() => {
    // Автоматический выбор языка по браузеру при первой загрузке
    const saved = localStorage.getItem("i18nextLng");
    if (!saved) {
      localStorage.setItem("i18nextLng", "en");
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
      {showBg && <MusicNotesBackground />}
      {/* <SplashCursor /> */}
      <Component {...pageProps} />
    </>
  );
}