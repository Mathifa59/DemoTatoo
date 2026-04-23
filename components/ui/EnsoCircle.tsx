"use client";

import { motion, useReducedMotion } from "framer-motion";

interface EnsoCircleProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
}

export default function EnsoCircle({
  size = 320,
  color = "#a61b29",
  strokeWidth = 6,
  className = "",
  animate = true,
}: EnsoCircleProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="ink-texture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feDisplacementMap in="SourceGraphic" scale="2.5" />
        </filter>
      </defs>
      <motion.path
        d="M 100 20
           C 145 20, 180 55, 180 100
           C 180 145, 145 180, 100 180
           C 55 180, 20 145, 20 100
           C 20 55, 55 20, 95 20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        filter="url(#ink-texture)"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={shouldAnimate ? { pathLength: 1, opacity: 0.85 } : undefined}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </svg>
  );
}
