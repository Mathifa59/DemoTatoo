"use client";

import { motion } from "framer-motion";
import EnsoCircle from "@/components/ui/EnsoCircle";
import SeigaihaWaves from "@/components/ui/SeigaihaWaves";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen relative overflow-hidden bg-ink-void"
    >
      {/* Background image — moody Japanese tattoo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=1800&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-void via-ink-void/85 to-ink-void/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-void/70 via-transparent to-ink-void" />
      </div>

      {/* Blood-red ambient mist */}
      <div className="absolute top-[20%] left-[10%] w-[700px] h-[700px] bg-blood/15 rounded-full blur-[180px] pointer-events-none animate-ink-drift" />
      <div className="absolute bottom-[10%] right-0 w-[600px] h-[600px] bg-vermilion/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Huge faded kanji — 夢 (yume / dream) */}
      <span
        aria-hidden="true"
        className="absolute right-[-4%] top-[8%] font-jp font-black text-vermilion/[0.07] leading-none select-none pointer-events-none hidden md:block"
        style={{ fontSize: "38rem" }}
      >
        夢
      </span>

      {/* Enso circle — upper-right */}
      <div className="absolute top-[16%] right-[8%] opacity-70 pointer-events-none hidden lg:block">
        <EnsoCircle size={360} color="#a61b29" />
      </div>

      {/* Seigaiha waves at the bottom */}
      <SeigaihaWaves
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        color="#b8860b"
        opacity={0.18}
      />

      {/* Main content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Vertical JP ribbon — left */}
        <div className="hidden lg:flex col-span-1 items-center justify-center">
          <span className="tategaki font-jp text-xs text-kin/50 tracking-[0.5em]">
            伝統 · 精神 · 肌
          </span>
        </div>

        {/* Left content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start text-left px-6 sm:px-8 lg:pr-12 pt-40 pb-32 lg:pt-0 lg:pb-0">
          {/* Top eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="font-jp text-vermilion text-lg">刺青</span>
            <span className="w-16 h-px bg-vermilion/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-kin">
              Estudio · Ciudad de México
            </span>
          </motion.div>

          {/* Title */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-washi leading-[1.05]"
            >
              Tinta que
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
            >
              <span className="relative inline-block">
                <span className="relative z-10 italic text-vermilion-light">
                  cuenta
                </span>
                {/* Brush underline */}
                <svg
                  viewBox="0 0 300 20"
                  className="absolute left-0 -bottom-1 w-full h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12 Q 80 2 160 10 T 295 8"
                    stroke="#a61b29"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-washi leading-[1.05]"
            >
              tu historia.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg text-washi/70 max-w-xl mb-12 leading-relaxed"
          >
            Irezumi contemporáneo, blackwork y sumi-e. Cada pieza se diseña
            a mano, desde la conversación al trazo final — honrando la
            tradición y tu propia mitología.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection("#booking")}
              className="group relative bg-vermilion hover:bg-vermilion-light text-washi px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="font-jp text-base">予約</span>
                Reservar cita
              </span>
              <span className="absolute inset-0 bg-blood-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="group flex items-center gap-3 border border-kin/40 text-washi hover:border-kin hover:bg-kin/5 px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-300"
            >
              <span className="font-jp text-kin text-base">作品</span>
              Ver portafolio
            </button>
          </motion.div>

          {/* Small signature row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-6 mt-16 text-[10px] tracking-[0.3em] uppercase text-washi/40"
          >
            <span>12 años</span>
            <span className="w-6 h-px bg-kin/30" />
            <span>+800 piezas</span>
            <span className="w-6 h-px bg-kin/30" />
            <span>Tokio · CDMX</span>
          </motion.div>
        </div>

        {/* Right decorative column */}
        <div className="hidden lg:flex col-span-4 relative items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            <div className="w-[340px] h-[460px] relative overflow-hidden border border-kin/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=900&q=80&auto=format&fit=crop"
                alt="Pieza japonesa"
                className="w-full h-full object-cover grayscale-[20%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-void via-transparent to-transparent" />
              {/* Corner brackets */}
              <span className="absolute top-2 left-2 w-5 h-5 border-t border-l border-vermilion" />
              <span className="absolute top-2 right-2 w-5 h-5 border-t border-r border-vermilion" />
              <span className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-vermilion" />
              <span className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-vermilion" />
            </div>
            {/* Caption */}
            <div className="absolute -bottom-4 right-0 bg-vermilion text-washi px-4 py-1.5 text-[9px] tracking-[0.3em] uppercase">
              夢 · Obra reciente
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
