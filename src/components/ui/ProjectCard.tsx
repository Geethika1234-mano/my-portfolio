import { ExternalLink, Github } from "lucide-react";
import TechPill from "./TechPill";
import { iconFor } from "../../data/stackIcons";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  links: {
    live?: string;
    repo?: string;
  };
  stack?: string[];
}

export default function ProjectCard({ 
  title, 
  period, 
  description, 
  links, 
  stack = [] 
}: ProjectCardProps) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-3xl
        border border-[var(--color-border)]
        bg-[var(--color-surface)] p-6
        transition-transform hover:-translate-y-0.5
      "
    >
      {/* soft blue highlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -top-12 right-0 h-40 w-40 rounded-full blur-2xl"
             style={{ background: "radial-gradient(closest-side, rgba(59,130,246,.22), transparent)" }} />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{period}</p>
        </div>

        <div className="shrink-0 flex gap-2">
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full
                         border border-[var(--color-border)] hover:bg-white/5"
              aria-label="Live"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full
                         border border-[var(--color-border)] hover:bg-white/5"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-[var(--color-text-muted)]">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <TechPill key={s} name={s} src={iconFor[s as keyof typeof iconFor] || ""} />
        ))}
      </div>
    </article>
  );
}