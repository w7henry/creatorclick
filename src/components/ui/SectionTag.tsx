export function SectionTag({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <span className="t-index text-[0.62rem] tracking-[0.1em] text-volt">{index}</span>
      <span className="h-px w-7 bg-[var(--color-rule)]" />
      <span className="t-eyebrow">{label}</span>
    </div>
  );
}
