export default function TechPill({ name, src }) {
  return (
    <div
      className="
        inline-flex items-center gap-1 rounded-full
        border border-[var(--color-border)] bg-[var(--color-surface)]/80
        px-2.5 py-1 text-[11px] text-[var(--color-text-muted)]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        hover:shadow-[0_0_16px_rgba(59,130,246,0.22)]
        transition-shadow
      "
      title={name}
    >
      {src && <img className="h-3.5 w-3.5" src={src} alt={name} loading="lazy" />}

      <span>{name}</span>
    </div>
  );
}
