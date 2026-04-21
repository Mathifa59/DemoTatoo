"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Ruler,
  Calendar,
  Sparkles,
  Circle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/process";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Ruler,
  Calendar,
  Sparkles,
};

export default function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="proceso">
      <div className="mb-6">
        <SectionLabel number="04" label="PROCESO" />
      </div>

      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-16">
        Nuestro proceso
      </h2>

      {/* Vertical editorial timeline */}
      <div className="relative">
        {/* Thin vertical gold line */}
        <div className="absolute left-7 top-0 bottom-0 w-px bg-gold/20" />

        {processSteps.map((step, index) => {
          const Icon = iconMap[step.icon] ?? Circle;

          const stepAnimation = prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.2,
                },
              };

          return (
            <motion.div
              key={step.number}
              className={`relative flex gap-8 md:gap-12 ${
                index < processSteps.length - 1 ? "mb-16" : "mb-0"
              }`}
              {...stepAnimation}
            >
              {/* Step number */}
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center relative z-10">
                <span className="text-gold font-heading text-4xl md:text-5xl font-bold opacity-30">
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-gold/60 w-6 h-6" />
                  <h3 className="font-heading text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
