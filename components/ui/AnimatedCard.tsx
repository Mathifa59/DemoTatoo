"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      whileHover={
        hoverEffect
          ? {
              y: -6,
              boxShadow: "0 0 30px rgba(201,169,110,0.08)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
