"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
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

const AUTOPLAY_MS = 3500;
const GAP = 24;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardPx, setCardPx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const maxIndex = Math.max(0, filtered.length - visibleCount);

  // Measure container → compute card width + visible count
  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.offsetWidth ?? 0;
      const vc = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
      setVisibleCount(vc);
      setCardPx((w - GAP * (vc - 1)) / vc);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Reset on category change or when maxIndex shrinks
  useEffect(() => { setCurrentIndex(0); }, [activeCategory]);
  useEffect(() => { setCurrentIndex((i) => Math.min(i, maxIndex)); }, [maxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (paused || filtered.length <= visibleCount) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next, filtered.length, visibleCount]);

  const slideX = -(currentIndex * (cardPx + GAP));

  return (
    <SectionWrapper id="portfolio">
      <KanjiBackdrop char="作" className="absolute -left-16 top-10 text-[26rem]" opacity={0.04} />
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blood/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10">
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
                activeCategory === cat ? "text-vermilion-light" : "text-washi/40 hover:text-washi"
              }`}
            >
              {activeCategory === cat && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-vermilion" />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Sliding carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: slideX }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ gap: GAP }}
            >
              {filtered.map((item, idx) => (
                <div
                  key={item.id}
                  className="group relative flex-shrink-0 overflow-hidden border border-kin/20 hover:border-vermilion/50 transition-colors duration-500"
                  style={{ width: cardPx, aspectRatio: "3 / 4", background: item.gradient }}
                >
                  {item.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-void via-ink-void/20 to-transparent" />

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-vermilion text-washi text-[10px] tracking-[0.2em] -rotate-3 select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {item.kanji && (
                    <span className="absolute top-3 right-4 font-jp font-black text-5xl text-washi/70 leading-none select-none pointer-events-none">
                      {item.kanji}
                    </span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-kin block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-lg text-washi leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop arrows */}
          {filtered.length > visibleCount && (
            <>
              <button onClick={prev} aria-label="Anterior"
                className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-kin/30 bg-ink-void/90 backdrop-blur-sm text-washi hover:border-vermilion hover:text-vermilion transition-all duration-300 hidden sm:flex items-center justify-center">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} aria-label="Siguiente"
                className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-kin/30 bg-ink-void/90 backdrop-blur-sm text-washi hover:border-vermilion hover:text-vermilion transition-all duration-300 hidden sm:flex items-center justify-center">
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Dots + counter */}
        {filtered.length > visibleCount && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} aria-label="Anterior" className="sm:hidden w-8 h-8 border border-kin/30 text-washi/60 flex items-center justify-center">
              <ChevronLeft size={14} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} aria-label={`Ir a ${i + 1}`}
                  className={`transition-all duration-300 ${i === currentIndex ? "w-6 h-1.5 bg-vermilion" : "w-1.5 h-1.5 bg-washi/25 hover:bg-washi/50"}`}
                />
              ))}
            </div>

            <button onClick={next} aria-label="Siguiente" className="sm:hidden w-8 h-8 border border-kin/30 text-washi/60 flex items-center justify-center">
              <ChevronRight size={14} />
            </button>

            <span className="text-[10px] tracking-[0.3em] uppercase text-washi/35 ml-2 tabular-nums">
              {String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
