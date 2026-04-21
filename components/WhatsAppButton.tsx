"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      <span className="absolute -top-10 right-0 bg-black/90 text-text-primary text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Hablamos?
      </span>

      <motion.a
        href={siteInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-14 h-14 rounded-full bg-whatsapp-green shadow-lg shadow-whatsapp-green/20 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
