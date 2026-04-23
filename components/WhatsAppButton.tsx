"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      <span className="absolute -top-10 right-0 bg-ink-elevated text-washi text-[10px] tracking-[0.2em] uppercase px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-kin/20">
        話 · Hablemos
      </span>

      <motion.a
        href={siteInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
        className="w-14 h-14 rounded-full bg-whatsapp-green shadow-lg shadow-whatsapp-green/25 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
