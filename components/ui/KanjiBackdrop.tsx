interface KanjiBackdropProps {
  char: string;
  className?: string;
  /** 0-1 */
  opacity?: number;
}

/** Very large faded kanji used as background typography. */
export default function KanjiBackdrop({
  char,
  className = "",
  opacity = 0.04,
}: KanjiBackdropProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-jp font-black leading-none ${className}`}
      style={{
        color: "#e8dcc4",
        opacity,
      }}
    >
      {char}
    </span>
  );
}
