import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import SeigaihaWaves from "@/components/ui/SeigaihaWaves";
import { siteInfo } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-void border-t border-vermilion/10 relative overflow-hidden">
      {/* Seigaiha top decoration */}
      <SeigaihaWaves
        className="absolute top-0 left-0 w-full h-16 pointer-events-none"
        color="#b8860b"
        opacity={0.12}
      />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blood/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jp text-3xl text-vermilion leading-none">夢</span>
              <div>
                <span className="font-heading text-base tracking-[0.2em] uppercase text-washi block">
                  YumeTattoo
                </span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-kin/70">
                  Estudio de Tatuaje · Lima
                </span>
              </div>
            </div>
            <p className="text-washi/50 text-sm leading-relaxed max-w-xs">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Address & Hours */}
          <div className="text-washi/55 text-sm leading-relaxed space-y-3">
            <p className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-kin/70" />
              {siteInfo.address}
            </p>
            <p className="flex items-center gap-3">
              <Clock className="w-4 h-4 flex-shrink-0 text-kin/70" />
              {siteInfo.hours}
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-kin mb-5">
              社交 · Síguenos
            </p>
            <div className="flex gap-5">
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-kin/25 flex items-center justify-center text-washi/60 hover:border-vermilion hover:text-vermilion transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border border-kin/25 flex items-center justify-center text-washi/60 hover:border-whatsapp-green hover:text-whatsapp-green transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* JP decorative row */}
        <div className="border-t border-kin/10 pt-8 mb-6 flex items-center justify-center gap-8">
          {["龍", "波", "虎", "鶴", "桜", "鯉"].map((k) => (
            <span
              key={k}
              className="font-jp text-xl text-washi/15 select-none"
              aria-hidden="true"
            >
              {k}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-kin/10 pt-6 text-center">
          <p className="text-[10px] tracking-[0.25em] uppercase text-washi/35">
            © {year} YumeTattoo — Miraflores, Lima · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
