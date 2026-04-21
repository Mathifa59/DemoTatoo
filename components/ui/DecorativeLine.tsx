interface DecorativeLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function DecorativeLine({
  orientation = "horizontal",
  className = "",
}: DecorativeLineProps) {
  const baseClasses =
    orientation === "horizontal" ? "w-16 h-px bg-gold/30" : "w-px h-16 bg-gold/30";

  return <div className={`${baseClasses} ${className}`} />;
}
