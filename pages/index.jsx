import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Commands from '../components/Commands';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Neuro•Tune — Музыкальный Discord-бот</title>
        <meta name="description" content="Neuro•Tune — музыка с эффектами, автодиджей и mood-настройки." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-sans bg-black text-white">
        <Hero />
        <Features />
        <Demo />
        <Commands />
        <Footer />
      </main>
    </>
  );
}