interface SeigaihaWavesProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/** Hokusai-style wave band — decorative SVG. */
export default function SeigaihaWaves({
  className = "",
  color = "#b8860b",
  opacity = 0.25,
}: SeigaihaWavesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeOpacity={opacity} strokeWidth="1.2">
        <path d="M0 90 Q 40 70 80 90 T 160 90 T 240 90 T 320 90 T 400 90" />
        <path d="M0 70 Q 40 50 80 70 T 160 70 T 240 70 T 320 70 T 400 70" />
        <path d="M0 50 Q 40 30 80 50 T 160 50 T 240 50 T 320 50 T 400 50" />
        <path d="M0 30 Q 40 10 80 30 T 160 30 T 240 30 T 320 30 T 400 30" />
      </g>
      <g fill="none" stroke={color} strokeOpacity={opacity * 0.6} strokeWidth="0.8">
        <path d="M0 100 Q 40 80 80 100 T 160 100 T 240 100 T 320 100 T 400 100" />
        <path d="M0 110 Q 40 95 80 110 T 160 110 T 240 110 T 320 110 T 400 110" />
      </g>
    </svg>
  );
}
