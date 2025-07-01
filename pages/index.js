import Head from 'next/head';
import { useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Commands from '../components/Commands';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Section from '../components/Section';

export default function Home() {
  const scrollRef = useRef();

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
      <main className="bg-[#0a0a13]">
        <div ref={scrollRef}>
          <Section id="home">
            <Hero />
          </Section>
          <Section id="features">
            <Features />
          </Section>
          <Section id="commands" centerContent={false}>
            <Commands />
          </Section>
          <Section id="faq" centerContent={false}>
            <FAQ />
          </Section>
        </div>
        <Footer />
      </main>
    </>
  );
}