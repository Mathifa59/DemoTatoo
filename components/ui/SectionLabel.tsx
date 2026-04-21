interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs tracking-[0.3em] uppercase text-gold font-body">
        {number} — {label}
      </span>
      <span className="w-12 h-px bg-gold/40 inline-block ml-4" />
    </div>
  );
}
