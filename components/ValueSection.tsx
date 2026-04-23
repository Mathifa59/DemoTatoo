"use client";

import {
  Palette,
  Shield,
  MessageSquare,
  Brush,
  HeartHandshake,
  Circle,
  LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCard from "@/components/ui/AnimatedCard";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import { values } from "@/data/values";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Shield,
  MessageSquare,
  Brush,
  HeartHandshake,
};

// Kanji accent per value (decorative)
const kanjiForIndex = ["筆", "清", "語", "魂", "心"];

export default function ValueSection() {
  return (
    <SectionWrapper id="beneficios">
      {/* Enormous kanji in background */}
      <KanjiBackdrop
        char="道"
        className="absolute -right-12 -top-20 text-[28rem]"
        opacity={0.035}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blood/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-kin/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8">
          <SectionLabel number="01" label="Principios" kanji="道" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-washi mb-5 leading-tight">
            El camino de la aguja,
            <br />
            <span className="italic text-vermilion-light">nuestra disciplina.</span>
          </h2>
          <p className="text-washi/60 text-base md:text-lg leading-relaxed">
            Cinco pilares que rigen cada sesión. No atajos, no plantillas — solo
            el oficio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((item, index) => {
            const Icon = iconMap[item.icon] || Circle;
            return (
              <AnimatedCard
                key={item.title}
                delay={index * 0.08}
                className="group relative texture-washi p-8 border border-kin/15 hover:border-vermilion/50 transition-all duration-500"
              >
                {/* Faded kanji watermark in card */}
                <span className="absolute top-3 right-4 font-jp font-black text-[5.5rem] leading-none text-vermilion/[0.07] group-hover:text-vermilion/[0.15] transition-colors duration-500 select-none">
                  {kanjiForIndex[index] ?? "心"}
                </span>

                {/* Number */}
                <span className="text-[10px] tracking-[0.35em] uppercase text-kin/60 block mb-6">
                  0{index + 1}
                </span>

                <Icon className="text-vermilion w-7 h-7 mb-5" strokeWidth={1.2} />

                <h3 className="font-heading text-xl font-semibold text-washi mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-washi/60 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Brush bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-vermilion group-hover:w-full transition-all duration-700" />
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
