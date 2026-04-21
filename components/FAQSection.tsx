"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper id="faq">
      {/* Ambient color glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(201,169,110,0.04)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(139,34,82,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
      <SectionLabel number="07" label="FAQ" />
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-12 mt-6">
        Preguntas frecuentes
      </h2>
      <div className="max-w-3xl">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="text-text-primary text-base md:text-lg py-6 flex justify-between items-center w-full cursor-pointer hover:text-gold transition-colors duration-200 text-left"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`text-gold/60 w-5 h-5 flex-shrink-0 transition-transform duration-300 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary text-sm leading-relaxed pb-6">
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
    </SectionWrapper>
  );
}
