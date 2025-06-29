import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
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
      <main className="bg-[#0a0a13] min-h-screen">
        <Hero />
        <Features />
        <Commands />
        <Footer />
      </main>
    </>
  );
}