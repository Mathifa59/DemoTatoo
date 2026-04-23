interface HankoStampProps {
  char?: string;
  size?: number;
  className?: string;
  rotate?: number;
}

export default function HankoStamp({
  char = "夢",
  size = 72,
  className = "",
  rotate = -6,
}: HankoStampProps) {
  return (
    <div
      className={`inline-flex items-center justify-center relative ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id={`hanko-rough-${char}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
        </defs>
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          rx="4"
          fill="#a61b29"
          filter={`url(#hanko-rough-${char})`}
          opacity="0.92"
        />
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          rx="2"
          fill="none"
          stroke="#f1ead8"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          filter={`url(#hanko-rough-${char})`}
        />
      </svg>
      <span
        className="relative font-jp font-black select-none"
        style={{
          fontSize: size * 0.48,
          color: "#f1ead8",
          textShadow: "0 1px 0 rgba(0,0,0,0.2)",
        }}
      >
        {char}
      </span>
    </div>
  );
}
