"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import { portfolioItems } from "@/data/portfolio";

const categories = [
  "Todos",
  "Oriental",
  "Blackwork",
  "Tinta oriental",
  "Neo-tradicional",
  "Minimalista",
] as const;

const AUTOPLAY_DELAY = 3500;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Reset to first card when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  // Auto-advance
  useEffect(() => {
    if (paused || filtered.length <= 1) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next, filtered.length]);

  // Visible indices: prev, current, next (wrapping)
  const getVisibleIndices = () => {
    const len = filtered.length;
    if (len === 0) return [];
    if (len === 1) return [0];
    if (len === 2) return [0, 1];
    return [
      (currentIndex - 1 + len) % len,
      currentIndex,
      (currentIndex + 1) % len,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <SectionWrapper id="portfolio">
      <KanjiBackdrop
        char="作"
        className="absolute -left-16 top-10 text-[26rem]"
        opacity={0.04}
      />
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blood/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <SectionLabel number="02" label="Portafolio" kanji="作" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-washi mb-3 leading-tight">
              Obras <span className="italic text-vermilion-light">recientes</span>
            </h2>
            <p className="text-washi/60 text-base md:text-lg">
              Cada trazo nace de una conversación. Cada pieza, única.
            </p>
          </div>
          <span className="font-jp text-washi/35 text-sm tracking-[0.3em] hidden md:block">
            最近の作品 · 2024 — 2026
          </span>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10 border-t border-b border-kin/15 py-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative text-[11px] tracking-[0.25em] uppercase transition-all duration-300 py-1 ${
                activeCategory === cat
                  ? "text-vermilion-light"
                  : "text-washi/40 hover:text-washi"
              }`}
            >
              {activeCategory === cat && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-vermilion" />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards track — 3 cards visible on desktop, 1 on mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleIndices.map((itemIdx, position) => {
                const item = filtered[itemIdx];
                const isCenter = position === 1 || visibleIndices.length <= 2;

                return (
                  <AnimatePresence key={`${activeCategory}-${itemIdx}`} mode="popLayout">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{
                        opacity: 1,
                        scale: isCenter && visibleIndices.length === 3 ? 1 : 0.97,
                        y: 0,
                      }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`group relative aspect-[3/4] overflow-hidden border cursor-pointer ${
                        isCenter && visibleIndices.length === 3
                          ? "border-vermilion/40"
                          : "border-kin/20"
                      }`}
                      style={{ background: item.gradient }}
                      onClick={() => setCurrentIndex(itemIdx)}
                    >
                      {item.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:scale-105 transition-transform duration-700"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-ink-void via-ink-void/25 to-transparent" />
                      <div className="absolute inset-0 bg-ink-void/15 group-hover:bg-transparent transition-colors duration-500" />

                      {/* Number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-vermilion text-washi text-[10px] tracking-[0.2em] rotate-[-4deg]">
                        {String(itemIdx + 1).padStart(2, "0")}
                      </div>

                      {/* Kanji */}
                      {item.kanji && (
                        <span className="absolute top-3 right-4 font-jp font-black text-5xl text-washi/70 leading-none select-none">
                          {item.kanji}
                        </span>
                      )}

                      {/* Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-kin block mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-heading text-lg text-washi leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* Active indicator top bar */}
                      {isCenter && visibleIndices.length === 3 && (
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-vermilion" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {filtered.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-10 h-10 border border-kin/30 bg-ink-void/80 backdrop-blur-sm text-washi hover:border-vermilion hover:text-vermilion transition-all duration-300 hidden md:flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-10 h-10 border border-kin/30 bg-ink-void/80 backdrop-blur-sm text-washi hover:border-vermilion hover:text-vermilion transition-all duration-300 hidden md:flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Dots + counter */}
        {filtered.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev/Next for mobile */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="md:hidden w-8 h-8 border border-kin/30 text-washi/60 hover:border-vermilion hover:text-vermilion transition-all duration-200 flex items-center justify-center"
            >
              <ChevronLeft size={14} />
            </button>

            <div className="flex items-center gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir a obra ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 h-1.5 bg-vermilion"
                      : "w-1.5 h-1.5 bg-washi/25 hover:bg-washi/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente"
              className="md:hidden w-8 h-8 border border-kin/30 text-washi/60 hover:border-vermilion hover:text-vermilion transition-all duration-200 flex items-center justify-center"
            >
              <ChevronRight size={14} />
            </button>

            <span className="text-[10px] tracking-[0.3em] uppercase text-washi/35 ml-4">
              {String(currentIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
