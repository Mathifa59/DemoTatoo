"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { artistBio } from "@/data/site";

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const leftAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
      };

  const rightAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
      };

  return (
    <SectionWrapper id="nosotros">
      {/* Ambient color glows */}
      <div className="absolute top-[10%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(139,34,82,0.06)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(201,169,110,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
      <div className="mb-6">
        <SectionLabel number="03" label="EL ARTISTA" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Left column — Avatar placeholder */}
        <motion.div className="lg:col-span-2" {...leftAnimation}>
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-wine-red/30 via-bg-card to-gold/10 border border-gold/20">
            <span className="font-heading text-6xl text-gold/20 absolute inset-0 flex items-center justify-center select-none">
              AM
            </span>
          </div>
          <DecorativeLine className="mt-6" />
        </motion.div>

        {/* Right column — Biography */}
        <motion.div className="lg:col-span-3" {...rightAnimation}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {artistBio.name}
          </h2>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-8">
            {artistBio.title}
          </p>

          {artistBio.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-text-secondary leading-relaxed text-base mb-6"
            >
              {paragraph}
            </p>
          ))}

          {/* Pull quote — philosophy */}
          <blockquote className="border-l-2 border-gold/40 pl-6 my-10">
            <p className="font-heading text-xl md:text-2xl text-text-primary italic leading-relaxed">
              {artistBio.philosophy}
            </p>
          </blockquote>

          {/* Dramatic stat callout */}
          <div className="flex items-baseline gap-3 mt-8">
            <span className="text-gold text-5xl font-heading font-bold">
              {artistBio.yearsExperience}
            </span>
            <span className="text-text-secondary text-sm">
              años de experiencia
            </span>
          </div>
        </motion.div>
      </div>
      </div>
    </SectionWrapper>
  );
}
