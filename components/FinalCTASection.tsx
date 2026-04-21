"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
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
    <SectionWrapper id="cta-final" fullWidth={true}>
      <div className="relative overflow-hidden">
        {/* Dramatic gradient mesh background */}
        <div className="absolute w-[600px] h-[600px] bg-wine-red/[0.08] rounded-full blur-[150px] top-1/2 left-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] top-1/3 right-1/4 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
            Tu próximo tatuaje empieza aquí
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10">
            No dejes tu idea solo en la imaginación. Escríbenos y hagamos
            realidad esa pieza que llevas pensando.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("#booking")}
              className="bg-gold text-black px-10 py-4 text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 cursor-pointer"
            >
              Reservar cita
            </button>
            <a
              href={siteInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-whatsapp-green/50 text-whatsapp-green px-10 py-4 text-sm tracking-[0.15em] uppercase hover:bg-whatsapp-green/10 transition-all duration-300 inline-block"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
