"use client";

import { motion } from "framer-motion";

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
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,34,82,0.05)_0%,_transparent_70%)]" />

      {/* Main grid layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 min-h-screen">
        {/* Left content — 60% */}
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center items-start text-left px-6 sm:px-8 lg:px-12 xl:px-20 py-32 lg:py-0">
          {/* Title lines */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-text-primary leading-[1.05]">
                Tatuajes con
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold leading-[1.05]">
                <span className="text-gold">identidad,</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-text-primary leading-[1.05]">
                precisión y carácter.
              </h1>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-text-secondary max-w-lg mb-10"
          >
            Transformamos ideas en piezas que llevas para siempre. Diseño
            personalizado, atención profesional y una experiencia pensada desde
            el primer contacto.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex gap-4"
          >
            <button
              onClick={() => scrollToSection("#booking")}
              className="bg-wine-red hover:bg-wine-red-light text-white px-8 py-3.5 text-sm tracking-wide transition-all duration-300"
            >
              Reservar cita
            </button>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="border border-white/20 text-text-primary hover:border-gold/50 hover:text-gold px-8 py-3.5 text-sm tracking-wide transition-all duration-300"
            >
              Ver portafolio
            </button>
          </motion.div>
        </div>

        {/* Right decorative — 40% (hidden on mobile) */}
        <div className="hidden lg:block col-span-2 relative">
          {/* Large radial gradient glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wine-red/[0.08] rounded-full blur-[150px]"
          />

          {/* Large outlined circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gold/15 rounded-full"
          />

          {/* Thin gold line — rotated 12deg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[20%] left-[30%] w-px h-40 bg-gold/20 rotate-12"
          />

          {/* Thin gold line — rotated 45deg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-[25%] right-[20%] w-px h-32 bg-gold/20 rotate-45"
          />

          {/* Animated floating gold line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            }}
            className="absolute top-[40%] right-[35%] w-px h-24 bg-gold/25"
          />

          {/* Additional decorative line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-[60%] left-[15%] w-20 h-px bg-gold/15 -rotate-12"
          />
        </div>
      </div>
    </section>
  );
}
