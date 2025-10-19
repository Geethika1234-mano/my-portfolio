export default function TechIcon({ name, src, initials }) {
  return (
    <div
      className="
        group w-24 rounded-2xl p-[1px]
        bg-gradient-to-br from-[var(--color-accent)]/35 via-transparent to-transparent
        transition-transform hover:-translate-y-0.5
      "
      title={name}
    >
      <div
        className="
          rounded-2xl border border-[var(--color-border)]
          bg-[var(--color-surface)]/90 px-3 py-3
          shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
          group-hover:shadow-[0_0_26px_rgba(59,130,246,0.28)]
          transition-shadow
          flex flex-col items-center gap-2
        "
      >
        {src ? (
          <img
            src={src}
            alt={name}
            className="h-8 w-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        ) : (
          <div className="h-8 w-8 grid place-items-center rounded-md bg-white/5 text-xs font-semibold">
            {initials || name.slice(0,2).toUpperCase()}
          </div>
        )}
        <span className="text-[11px] text-[var(--color-text-muted)] leading-none">{name}</span>
      </div>
    </div>
  );
}
