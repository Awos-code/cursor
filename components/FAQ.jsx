import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DecryptedText from "./ui/DecryptedText";
import { AnimatePresence, motion } from "framer-motion";

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
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-[0_0_16px_rgba(168,85,247,0.7)] font-tinos-business">
          {t('faq.title')}
        </h2>
        <div className="space-y-6">
          {questions.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-2xl bg-[#181826]/80 border border-fuchsia-500 shadow-[0_0_24px_6px_rgba(168,85,247,0.3)] transition-all duration-500 ease-in-out hover:shadow-[0_0_32px_12px_rgba(168,85,247,0.4)] ${open === i ? 'scale-[1.02] shadow-[0_0_32px_12px_rgba(168,85,247,0.5)]' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all duration-300"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white hover:text-fuchsia-300 transition-colors duration-300 flex-1">{item.q}</span>
                <span className={`ml-4 transition-all duration-500 ease-in-out transform ${open === i ? "rotate-45 text-fuchsia-400 scale-110" : "rotate-0 text-fuchsia-300 scale-100"}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key={"faq-answer-" + i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden px-6"
                  >
                    <DecryptedText
                      key={open === i ? `open-${i}` : `closed-${i}`}
                      text={item.a}
                      speed={30}
                      maxIterations={15}
                      sequential={true}
                      revealDirection="start"
                      className="text-gray-300 text-base"
                      encryptedClassName="text-fuchsia-400 text-base"
                      animateOn="view"
                      parentClassName="block py-4"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 