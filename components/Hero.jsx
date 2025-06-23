import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-center p-8">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Neuro•Tune
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Музыка. Эффекты. Эмоции.
      </motion.p>
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="https://discord.com/oauth2/authorize?client_id=YOUR_ID&scope=bot" className="px-6 py-3 bg-purple-600 rounded-xl shadow-lg hover:bg-purple-500 transition">
          ➕ Добавить на сервер
        </a>
        <a href="#features" className="px-6 py-3 border border-purple-600 rounded-xl hover:bg-purple-600 transition">
          Узнать больше
        </a>
      </motion.div>
    </section>
  );
}