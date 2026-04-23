"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import EnsoCircle from "@/components/ui/EnsoCircle";
import SeigaihaWaves from "@/components/ui/SeigaihaWaves";
import { siteInfo } from "@/data/site";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function FinalCTASection() {
  return (
    <SectionWrapper id="cta-final" fullWidth>
      <div className="relative overflow-hidden py-8">
        {/* Background image — tattoo atmosphere */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1542727313-4f7ea37f2f33?w=1800&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover grayscale opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-void via-ink-void/70 to-ink-void" />
        </div>

        {/* Ambient blood glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blood/20 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-kin/8 rounded-full blur-[150px] pointer-events-none" />

        {/* Enso decorative circles */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none hidden lg:block">
          <EnsoCircle size={420} color="#7a0a12" strokeWidth={4} />
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none hidden lg:block">
          <EnsoCircle size={320} color="#b8860b" strokeWidth={3} />
        </div>

        {/* Seigaiha bottom accent */}
        <SeigaihaWaves
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
          color="#a61b29"
          opacity={0.2}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          {/* JP accent */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="w-20 h-px bg-vermilion/60" />
            <span className="font-jp text-vermilion text-2xl">始まり</span>
            <span className="w-20 h-px bg-vermilion/60" />
          </div>

          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-washi mb-6 leading-[1.05]">
            Tu historia
            <br />
            <span className="italic text-vermilion-light">merece tinta.</span>
          </h2>

          <p className="text-washi/65 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
            No dejes tu idea en el pensamiento. Escríbenos y hagamos realidad la
            pieza que llevas imaginando.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => scrollToSection("#booking")}
              className="group relative bg-vermilion hover:bg-vermilion-light text-washi px-12 py-5 text-[11px] tracking-[0.35em] uppercase transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="font-jp text-base">予約</span>
                Reservar cita
              </span>
              <span className="absolute inset-0 bg-blood-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <a
              href={siteInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-whatsapp-green/50 text-whatsapp-green px-12 py-5 text-[11px] tracking-[0.35em] uppercase hover:bg-whatsapp-green/10 hover:border-whatsapp-green transition-all duration-300"
            >
              <span className="font-jp text-base">話</span>
              WhatsApp
            </a>
          </div>

          {/* Bottom strip */}
          <div className="flex items-center justify-center gap-8 mt-16 text-[10px] tracking-[0.3em] uppercase text-washi/35">
            <span>12 años</span>
            <span className="w-6 h-px bg-kin/30" />
            <span className="font-jp text-kin/60">一期一会</span>
            <span className="w-6 h-px bg-kin/30" />
            <span>Miraflores · Lima, Perú</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
