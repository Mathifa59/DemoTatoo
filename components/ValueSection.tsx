"use client";

import {
  Palette,
  Shield,
  MessageSquare,
  Brush,
  HeartHandshake,
  Circle,
  LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import DecorativeLine from "@/components/ui/DecorativeLine";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { values } from "@/data/values";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Shield,
  MessageSquare,
  Brush,
  HeartHandshake,
};

export default function ValueSection() {
  return (
    <SectionWrapper id="beneficios">
      {/* Ambient color glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(201,169,110,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(139,34,82,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
      <div className="mb-6">
        <SectionLabel number="01" label="BENEFICIOS" />
      </div>

      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
        ¿Por qué elegirnos?
      </h2>

      <div className="mb-12 md:mb-16">
        <DecorativeLine />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {values.map((item, index) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <AnimatedCard
              key={item.title}
              delay={index * 0.1}
              className="group border-t border-gold/20 pt-8 transition-colors duration-200 hover:border-gold/60"
            >
              <Icon className="text-gold w-8 h-8 mb-4" />
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
      </div>
    </SectionWrapper>
  );
}
