import Head from 'next/head';
import { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AllCommands from '../components/AllCommands';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4,0,0.2,1] } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: [0.4,0,0.2,1] } }
};

export default function Home() {
  const [locale, setLocale] = useState("ru");

  return (
    <>
      <Head>
        <title>NeuroTune — Музыкальный AI-бот для Discord</title>
        <meta name="description" content="NeuroTune — музыкальный AI-бот для Discord. Поддержка Spotify, YouTube, SoundCloud, Apple Music. Эффекты, авто-DJ, удобные команды, неоновый дизайн." />
        <meta name="keywords" content="NeuroTune, Discord, музыкальный бот, AI, музыка, Spotify, YouTube, SoundCloud, Apple Music, эффекты, авто-DJ, команды, неон" />
        <meta property="og:title" content="NeuroTune — Музыкальный AI-бот для Discord" />
        <meta property="og:description" content="NeuroTune — музыкальный AI-бот для Discord. Поддержка Spotify, YouTube, SoundCloud, Apple Music. Эффекты, авто-DJ, удобные команды, неоновый дизайн." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neurotune.app/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NeuroTune — Музыкальный AI-бот для Discord" />
        <meta name="twitter:description" content="NeuroTune — музыкальный AI-бот для Discord. Поддержка Spotify, YouTube, SoundCloud, Apple Music. Эффекты, авто-DJ, удобные команды, неоновый дизайн." />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#0a0a13] min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div key="hero" variants={sectionVariants} initial="hidden" animate="visible" exit="exit">
            <Hero locale={locale} />
          </motion.div>
          <motion.div key="features" variants={sectionVariants} initial="hidden" animate="visible" exit="exit">
            <Features locale={locale} />
          </motion.div>
          <motion.div key="allcommands" variants={sectionVariants} initial="hidden" animate="visible" exit="exit">
            <AllCommands locale={locale} />
          </motion.div>
          <motion.div key="faq" variants={sectionVariants} initial="hidden" animate="visible" exit="exit">
            <FAQ locale={locale} />
          </motion.div>
          <motion.div key="footer" variants={sectionVariants} initial="hidden" animate="visible" exit="exit">
            <Footer locale={locale} />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}