import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-heading text-xl tracking-[0.15em] uppercase text-text-primary">
              YumeTattoo
            </h3>
            <p className="text-text-muted text-sm mt-2">{siteInfo.tagline}</p>
          </div>

          {/* Column 2: Address & Hours */}
          <div className="text-text-muted text-sm leading-relaxed">
            <p className="flex items-start gap-2 mb-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {siteInfo.address}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" />
              {siteInfo.hours}
            </p>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-text-muted text-sm tracking-[0.1em] uppercase mb-3">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-muted hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-text-muted hover:text-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-6">
          <p className="text-xs tracking-[0.1em] uppercase text-text-muted text-center">
            © {year} YumeTattoo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
