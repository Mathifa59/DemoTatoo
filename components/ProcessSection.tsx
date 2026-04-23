"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Ruler,
  Calendar,
  Sparkles,
  Circle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import { processSteps } from "@/data/process";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Ruler,
  Calendar,
  Sparkles,
};

const stepKanji = ["話", "形", "案", "刻"];

export default function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="proceso">
      <KanjiBackdrop
        char="道"
        className="absolute -left-20 bottom-0 text-[28rem]"
        opacity={0.035}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kin/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-blood/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8">
          <SectionLabel number="04" label="Proceso" kanji="道" />
        </div>

        <div className="max-w-2xl mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-washi mb-4 leading-tight">
            Del <span className="italic text-vermilion-light">boceto</span>
            <br />
            al ritual.
          </h2>
          <p className="text-washi/60 text-base md:text-lg leading-relaxed">
            Cuatro etapas. Una conversación que se convierte en piel.
          </p>
        </div>

        {/* Horizontal editorial timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[74px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-kin/30 to-transparent" />

          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] ?? Circle;
            const kanji = stepKanji[index] ?? "刻";

            const stepAnimation = prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: index * 0.15,
                  },
                };

            return (
              <motion.div
                key={step.number}
                className="relative"
                {...stepAnimation}
              >
                {/* Kanji circle */}
                <div className="relative w-[100px] h-[100px] mb-8 flex items-center justify-center">
                  <span
                    className="absolute inset-0 rounded-full border border-vermilion/50"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-[6px] rounded-full border border-kin/20"
                    aria-hidden="true"
                  />
                  <span className="font-jp font-black text-4xl text-vermilion-light relative z-10 select-none">
                    {kanji}
                  </span>
                  {/* Small number badge */}
                  <span className="absolute -top-1 -right-1 bg-ink-void text-kin text-[9px] tracking-[0.2em] px-2 py-0.5 border border-kin/40">
                    0{step.number}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Icon className="text-kin w-4 h-4" strokeWidth={1.4} />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-kin/80">
                    Etapa {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-washi mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-washi/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
