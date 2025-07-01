import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const questions = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];
  return (
    <section id="faq" className="py-20 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">
          {t('faq.title')}
        </h2>
        <div className="space-y-6">
          {questions.map((item, i) => (
            <div key={i} className="rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)]">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className={`ml-4 transition-transform ${open === i ? "rotate-45 text-fuchsia-400" : "rotate-0 text-fuchsia-300"}`}>+</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-40 opacity-100 py-2 px-6" : "max-h-0 opacity-0 py-0 px-6"}`}
              >
                <p className="text-gray-300 text-base">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 