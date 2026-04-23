"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import { portfolioItems } from "@/data/portfolio";

const categories = [
  "Todos",
  "Irezumi",
  "Blackwork",
  "Sumi-e",
  "Neo-tradicional",
  "Minimalista",
] as const;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraintRight, setDragConstraintRight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        setDragConstraintRight(-(scrollWidth - clientWidth));
      }
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [filtered]);

  return (
    <SectionWrapper id="portfolio">
      <KanjiBackdrop
        char="作"
        className="absolute -left-16 top-10 text-[26rem]"
        opacity={0.04}
      />

      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blood/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8">
          <SectionLabel number="02" label="Portafolio" kanji="作" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-washi mb-3 leading-tight">
              Obras <span className="italic text-vermilion-light">recientes</span>
            </h2>
            <p className="text-washi/60 text-base md:text-lg">
              Cada trazo nace de una conversación. Cada pieza, única.
            </p>
          </div>
          <span className="font-jp text-washi/40 text-sm tracking-[0.3em] hidden md:block">
            最近の作品 · 2024 — 2026
          </span>
        </div>

        {/* Category filter — vertical pipes + kanji-ish feel */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12 border-t border-b border-kin/15 py-5">
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
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                ref={carouselRef}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                style={{ scrollSnapType: "x mandatory" }}
              >
                <motion.div
                  className="flex gap-6 md:gap-8 pb-4"
                  drag={prefersReducedMotion ? false : "x"}
                  dragConstraints={{ left: dragConstraintRight, right: 0 }}
                  dragElastic={0.08}
                >
                  {filtered.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="group min-w-[280px] md:min-w-[360px] lg:min-w-[400px] aspect-[3/4] overflow-hidden relative cursor-grab active:cursor-grabbing flex-shrink-0 border border-kin/20"
                      style={{
                        scrollSnapAlign: "start",
                        background: item.gradient,
                      }}
                    >
                      {item.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      )}

                      {/* Dark overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-void via-ink-void/30 to-transparent" />
                      <div className="absolute inset-0 bg-ink-void/20 group-hover:bg-ink-void/5 transition-colors duration-500" />

                      {/* Hanko-style number */}
                      <div className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center bg-vermilion text-washi text-[10px] tracking-[0.2em] font-body rotate-[-4deg]">
                        0{idx + 1}
                      </div>

                      {/* Kanji accent */}
                      {item.kanji && (
                        <span className="absolute top-3 right-4 font-jp font-black text-6xl text-vermilion-light/80 leading-none select-none">
                          {item.kanji}
                        </span>
                      )}

                      {/* Corner brackets (kin) */}
                      <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-kin/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-kin/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Footer info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-kin block mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-heading text-lg text-washi leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink-void to-transparent pointer-events-none z-10" />
        </div>

        <p className="text-[10px] tracking-[0.3em] uppercase text-washi/40 mt-8 text-center">
          ← Arrastra para explorar · {filtered.length} piezas →
        </p>
      </div>
    </SectionWrapper>
  );
}
