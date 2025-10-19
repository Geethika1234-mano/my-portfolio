import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* soft radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-10%,rgba(59,130,246,0.25),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        {/* Eyebrow / tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3 py-1 text-xs text-[var(--color-text-muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Open to impactful software & AI roles
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-[var(--color-text)]"
        >
          Hi, I’m <span className="text-[var(--color-accent)]">Geethika Sewwandi</span> —
          <br className="hidden md:block" />
          <span className="text-[var(--color-text)]/90">Software & AI Engineer</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl leading-relaxed text-[var(--color-text-muted)]"
        >
          I design and build intelligent, production-ready apps — from AI assistants and computer vision
          workflows to real-time dashboards — with clean architecture, performance, and great UX.
          Working globally (Remote).
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-accent)] px-4 py-2 font-medium text-black hover:opacity-95 transition"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/Geethika-Sewwandi.pdf"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 hover:shadow-[0_0_18px_rgba(59,130,246,0.25)] transition"
          >
            Download CV
          </a>

          <a
            href="mailto:geethikasew97@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 hover:bg-white/5 transition"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>

          <a
            href="https://github.com/Geethika1234-mano"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 hover:bg-white/5 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/geethika-sewwandi-36b2b41a8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 hover:bg-white/5 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        {/* Quick badges */}
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 flex flex-wrap gap-2 text-[11px] text-[var(--color-text-muted)]"
        >
          <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3 py-1">
            AI assistants • OpenAI • LangChain
          </li>
          <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3 py-1">
            React dashboards • performance
          </li>
          <li className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3 py-1">
            Azure • AWS • CI/CD
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
