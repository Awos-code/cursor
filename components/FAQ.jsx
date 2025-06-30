import React, { useState } from "react";

const translations = {
  ru: {
    title: "FAQ",
    faqData: [
      {
        question: "Как добавить бота на сервер?",
        answer: "Нажмите кнопку 'Пригласить бота' вверху сайта и выберите нужный сервер Discord."
      },
      {
        question: "Какие музыкальные сервисы поддерживаются?",
        answer: "NeuroTune поддерживает YouTube, Spotify, SoundCloud, Apple Music и другие популярные платформы."
      },
      {
        question: "Как использовать команды?",
        answer: "Все команды доступны через слэш-команды Discord. Просто введите / и выберите нужную команду из списка."
      },
      {
        question: "Бот бесплатный?",
        answer: "Да, NeuroTune бесплатен для всех пользователей. Мы постоянно добавляем новые функции!"
      }
    ]
  },
  en: {
    title: "FAQ",
    faqData: [
      {
        question: "How to add the bot to a server?",
        answer: "Click the 'Invite Bot' button at the top of the site and select the desired Discord server."
      },
      {
        question: "What music services are supported?",
        answer: "NeuroTune supports YouTube, Spotify, SoundCloud, Apple Music and other popular platforms."
      },
      {
        question: "How to use commands?",
        answer: "All commands are available through Discord slash commands. Just type / and select the desired command from the list."
      },
      {
        question: "Is the bot free?",
        answer: "Yes, NeuroTune is free for all users. We constantly add new features!"
      }
    ]
  }
};

export default function FAQ({ locale = "ru" }) {
  const [open, setOpen] = useState(null);
  const t = translations[locale];
  
  return (
    <section id="faq" className="py-20 bg-[#0a0a13] text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">{t.title}</h2>
        <div className="space-y-6 animate-fade-in-up">
          {t.faqData.map((item, i) => (
            <div key={i} className="rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)]">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.question}</span>
                <span className={`ml-4 transition-transform ${open === i ? "rotate-45 text-fuchsia-400" : "rotate-0 text-fuchsia-300"}`}>+</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-40 opacity-100 py-2 px-6" : "max-h-0 opacity-0 py-0 px-6"}`}
              >
                <p className="text-gray-300 text-base">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 