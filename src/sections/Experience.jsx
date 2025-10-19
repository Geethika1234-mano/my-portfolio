import { experience } from "../data/experience";
import TechPill from "../components/ui/TechPill";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Experience</h2>
      <p className="mt-2 text-[var(--color-text-muted)] max-w-xl">
        Roles where I shipped AI features, web platforms, and automation at production scale.
      </p>

      <div className="mt-10 grid gap-6">
        {experience.map((role) => (
          <article
            key={`${role.company}-${role.title}`}
            className="
              rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6
              shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
            "
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold leading-tight text-[var(--color-text)]">
                  {role.title} · {role.company}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">{role.period} • {role.location}</p>
              </div>
            </div>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[var(--color-text-muted)]">
              {role.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">{b}</li>
              ))}
            </ul>

            {role.stack?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((s) => (
                  <TechPill key={s} name={s} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
