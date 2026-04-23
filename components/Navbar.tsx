"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-void/85 backdrop-blur-xl border-b border-vermilion/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[80px]">
        {/* Logo — kanji + wordmark */}
        <button
          onClick={() => scrollToSection("#inicio")}
          className="flex items-center gap-3 group"
        >
          <span className="font-jp text-2xl text-vermilion group-hover:text-vermilion-light transition-colors duration-300 leading-none">
            夢
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="font-heading text-[15px] tracking-[0.2em] uppercase text-washi group-hover:text-kin-light transition-colors duration-300">
              Yume
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-kin/70 mt-0.5">
              Tattoo · 刺青
            </span>
          </span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className="relative text-[10px] tracking-[0.3em] uppercase text-washi/60 hover:text-washi transition-colors duration-300 group py-1"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-vermilion group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("#booking")}
          className="hidden md:inline-flex items-center gap-2 border border-vermilion/60 text-washi hover:bg-vermilion/15 hover:border-vermilion text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300"
        >
          <span className="font-jp text-vermilion">予約</span>
          Reservar
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-washi"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-void/97 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
          >
            <span className="font-jp text-[220px] text-vermilion/[0.06] absolute select-none pointer-events-none">
              夢
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-washi"
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="font-heading text-2xl text-washi hover:text-vermilion transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <button
                  onClick={() => handleLinkClick("#booking")}
                  className="border border-vermilion text-washi hover:bg-vermilion/15 text-xs tracking-[0.25em] uppercase px-8 py-3 transition-all duration-200 mt-4"
                >
                  予約 · Reservar
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
