"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolioItems } from "@/data/portfolio";

const categories = ["Todos", "Realismo", "Blackwork", "Lettering", "Minimalista"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
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
      <div className="mb-6">
        <SectionLabel number="02" label="PORTAFOLIO" />
      </div>

      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2">
        Portafolio
      </h2>
      <p className="text-text-secondary text-lg mb-8">
        Cada pieza cuenta una historia
      </p>

      {/* Category filter buttons */}
      <div className="flex gap-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs tracking-[0.2em] uppercase transition-all duration-200 pb-1 border-b ${
              activeCategory === cat
                ? "text-gold border-gold"
                : "text-text-muted hover:text-text-secondary border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Horizontal scroll carousel */}
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
                dragElastic={0.1}
              >
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    className="min-w-[280px] md:min-w-[380px] lg:min-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-grab active:cursor-grabbing flex-shrink-0 group-hover:ring-1 group-hover:ring-gold/30"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    {/* Gradient background */}
                    <div
                      className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                      style={{ background: item.gradient }}
                    />

                    {/* Bottom gradient overlay — always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Hover gold ring */}
                    <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-gold/30 transition-all duration-300 pointer-events-none" />

                    {/* Title and category at bottom-left */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-xs tracking-[0.2em] uppercase text-gold/80 block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-lg text-white">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient fade on right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </SectionWrapper>
  );
}
