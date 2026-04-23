interface SectionLabelProps {
  number: string;
  label: string;
  kanji?: string;
}

export default function SectionLabel({ number, label, kanji }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      {kanji && (
        <span className="font-jp text-vermilion text-lg leading-none">
          {kanji}
        </span>
      )}
      <span className="w-8 h-px bg-vermilion/70 inline-block" />
      <span className="text-[10px] tracking-[0.35em] uppercase text-kin font-body">
        {number} — {label}
      </span>
      <span className="w-12 h-px bg-kin/30 inline-block" />
    </div>
  );
}
