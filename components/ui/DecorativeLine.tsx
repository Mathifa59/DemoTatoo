interface DecorativeLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  variant?: "line" | "brush";
}

export default function DecorativeLine({
  orientation = "horizontal",
  className = "",
  variant = "brush",
}: DecorativeLineProps) {
  if (variant === "brush" && orientation === "horizontal") {
    return (
      <svg
        viewBox="0 0 120 8"
        className={`w-24 h-2 ${className}`}
        aria-hidden="true"
      >
        <path
          d="M2 5 Q 30 1 60 4 T 118 4"
          stroke="#a61b29"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    );
  }

  const baseClasses =
    orientation === "horizontal"
      ? "w-16 h-px bg-kin/30"
      : "w-px h-16 bg-kin/30";
  return <div className={`${baseClasses} ${className}`} />;
}
