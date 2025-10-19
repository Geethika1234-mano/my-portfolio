import TechIcon from '../components/ui/TechIcon';
import { coreTech } from '../data/stack';
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
        {/* Left: Heading & Summary */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>

          <p className="mt-4 leading-relaxed text-[var(--color-text)]/90">
            I’m a <strong>Software &amp; AI Engineer</strong> building intelligent systems, scalable web apps,
            and automation tools. I combine <strong>modern front-end engineering</strong> with practical
            <strong> AI/LLM integration</strong> to ship production-ready products that solve real problems.
            I’ve contributed to work across Australia, Sri Lanka, United Kingdom and the UAE, focusing on
            <span className="whitespace-nowrap"> clean architecture</span>, performance, and great UX.
          </p>

          {/* Highlights */}
          <ul className="mt-6 space-y-2 text-[var(--color-text-muted)]">
            <li className="leading-relaxed">
              • <span className="text-[var(--color-text)]/90">Focus areas:</span> AI assistants, computer vision workflows,
              real-time dashboards, payment integrations, and cloud deployments.
            </li>
            <li className="leading-relaxed">
              • <span className="text-[var(--color-text)]/90">Primary stack:</span> React, Angular, Flutter, Node.js, Python.
              AI with OpenAI &amp; LangChain; cloud on Azure &amp; AWS.
            </li>
            <li className="leading-relaxed">
              • <span className="text-[var(--color-text)]/90">Working model:</span> Globally, remote-first — collaborative,
              documentation-driven, and delivery-oriented.
            </li>
          </ul>
        </div>

        {/* Right: Quick Facts Card */}
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-3xl bg-[radial-gradient(200px_200px_at_70%_0%,rgba(59,130,246,0.3),transparent)] blur" />
          <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <dl className="grid gap-4 text-sm">
              <div className="grid gap-1">
                <dt className="text-[var(--color-text-muted)]">Role</dt>
                <dd className="text-[var(--color-text)]">Software &amp; AI Engineer</dd>
              </div>
              <div className="grid gap-1">
                <dt className="text-[var(--color-text-muted)]">Location</dt>
                <dd className="text-[var(--color-text)]">Working globally (Remote)</dd>
              </div>
             <div className="grid gap-1">
  <dt className="text-[var(--color-text-muted)]">Tech &amp; AI</dt>
  <dd className="text-[var(--color-text)]">
    <div className="mt-2 grid grid-cols-4 sm:grid-cols-5 gap-3">
      {coreTech.map((t) => (
        <TechIcon key={t.name} {...t} />
      ))}
    </div>
  </dd>
</div>
              <div className="grid gap-1">
                <dt className="text-[var(--color-text-muted)]">Links</dt>
                <dd className="text-[var(--color-text)]">
                  <a
                    className="underline decoration-[var(--color-accent)]/40 underline-offset-4 hover:text-[var(--color-accent)] transition-colors"
                    href="https://github.com/Geethika1234-mano"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <span className="mx-2 text-[var(--color-text-muted)]">•</span>
                  <a
                    className="underline decoration-[var(--color-accent)]/40 underline-offset-4 hover:text-[var(--color-accent)] transition-colors"
                    href="https://www.linkedin.com/in/geethika-sewwandi-36b2b41a8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </dd>
              </div>

              <div className="grid gap-1">
                <dt className="text-[var(--color-text-muted)]">Availability</dt>
                <dd className="text-[var(--color-text)]">
                    Open to new opportunities — feel free to <a
                      className="underline decoration-[var(--color-accent)]/40 underline-offset-4 hover:text-[var(--color-accent)] transition-colors"
                      href="mailto:geethikasew97@gmail.com"
                    >
                      get in touch
                    </a>.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
