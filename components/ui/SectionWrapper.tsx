"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  animate = true,
  fullWidth = false,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerClasses = fullWidth
    ? `relative overflow-hidden px-6 sm:px-8 lg:px-12 py-32 md:py-40 ${className}`
    : `relative overflow-hidden max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40 ${className}`;

  if (!animate || prefersReducedMotion) {
    return (
      <section id={id} className={containerClasses}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={containerClasses}
    >
      {children}
    </motion.section>
  );
}
