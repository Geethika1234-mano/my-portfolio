import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      {/* Section Header */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">
          Projects
        </h2>
        <p className="mt-2 text-[var(--color-text-muted)] max-w-xl">
          A selection of real projects I’ve built, engineered or contributed to.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
