"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper id="faq">
      <KanjiBackdrop
        char="問"
        className="absolute -left-16 top-10 text-[28rem]"
        opacity={0.035}
      />

      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-kin/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blood/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8">
          <SectionLabel number="07" label="FAQ" kanji="問" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — title */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-washi leading-tight sticky top-32">
              Preguntas<br />
              <span className="italic text-vermilion-light">frecuentes</span>
            </h2>
            <div className="mt-8 hidden lg:block">
              <span className="tategaki font-jp text-sm text-kin/50 tracking-[0.5em]">
                疑問 · 答え · 信頼
              </span>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b transition-colors duration-300 ${
                    isOpen ? "border-vermilion/50" : "border-kin/15"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex justify-between items-center py-7 text-left gap-6 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-jp text-vermilion text-sm flex-shrink-0 opacity-60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-washi text-base md:text-lg group-hover:text-vermilion-light transition-colors duration-200">
                        {item.question}
                      </span>
                    </div>
                    <span className="flex-shrink-0 w-7 h-7 border border-kin/30 flex items-center justify-center text-kin group-hover:border-vermilion group-hover:text-vermilion transition-colors duration-300">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-washi/65 text-sm leading-[1.9] pb-7 pl-10">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
