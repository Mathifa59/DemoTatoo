"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import HankoStamp from "@/components/ui/HankoStamp";
import { artistBio } from "@/data/site";

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const leftAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
      };

  const rightAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
      };

  return (
    <SectionWrapper id="nosotros">
      <KanjiBackdrop
        char="師"
        className="absolute right-0 top-0 text-[30rem]"
        opacity={0.035}
      />

      <div className="absolute top-[10%] left-0 w-[500px] h-[500px] bg-blood/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[450px] h-[450px] bg-kin/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-10">
          <SectionLabel number="03" label="El maestro" kanji="師" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.div className="lg:col-span-2 relative" {...leftAnimation}>
            <div className="aspect-[3/4] w-full overflow-hidden relative border border-kin/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?w=900&q=80&auto=format&fit=crop"
                alt={artistBio.name}
                className="w-full h-full object-cover grayscale contrast-110"
              />
              {/* Ink wash overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-void via-ink-void/20 to-transparent" />
              <div className="absolute inset-0 bg-blood/10 mix-blend-multiply" />

              {/* Hanko in corner */}
              <div className="absolute bottom-4 right-4">
                <HankoStamp char="夢" size={60} rotate={-8} />
              </div>

              {/* Frame brackets */}
              <span className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-vermilion" />
              <span className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-vermilion" />
              <span className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-vermilion" />
            </div>

            {/* Vertical tag */}
            <div className="hidden md:flex items-center gap-3 mt-6 text-[10px] tracking-[0.3em] uppercase text-kin/70">
              <span className="w-10 h-px bg-kin/40" />
              <span className="font-jp text-base text-vermilion">墨</span>
              <span>Sumi · Tinta · 2014 —</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div className="lg:col-span-3" {...rightAnimation}>
            <span className="font-jp text-2xl text-vermilion block mb-3">
              明石 — アキラ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-washi mb-3 leading-tight">
              {artistBio.name}
            </h2>
            <p className="text-kin text-[11px] tracking-[0.3em] uppercase mb-10">
              {artistBio.title}
            </p>

            {artistBio.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-washi/70 leading-[1.85] text-base mb-5"
              >
                {paragraph}
              </p>
            ))}

            {/* Philosophy pull-quote with JP brush */}
            <blockquote className="relative my-12 pl-8 border-l-2 border-vermilion">
              <span className="absolute -left-3 -top-4 font-jp text-5xl text-vermilion/70 leading-none">
                「
              </span>
              <p className="font-heading text-xl md:text-2xl text-washi italic leading-relaxed">
                {artistBio.philosophy}
              </p>
              <span className="absolute right-0 -bottom-6 font-jp text-5xl text-vermilion/70 leading-none">
                」
              </span>
            </blockquote>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-kin/15 pt-8">
              <div>
                <span className="font-heading text-5xl font-bold text-vermilion-light leading-none">
                  {artistBio.yearsExperience}
                </span>
                <span className="block text-washi/50 text-[10px] tracking-[0.25em] uppercase mt-2">
                  Años · 年
                </span>
              </div>
              <div>
                <span className="font-heading text-5xl font-bold text-kin leading-none">
                  800+
                </span>
                <span className="block text-washi/50 text-[10px] tracking-[0.25em] uppercase mt-2">
                  Piezas · 作品
                </span>
              </div>
              <div>
                <span className="font-heading text-5xl font-bold text-washi leading-none">
                  2
                </span>
                <span className="block text-washi/50 text-[10px] tracking-[0.25em] uppercase mt-2">
                  Ciudades · 都市
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
