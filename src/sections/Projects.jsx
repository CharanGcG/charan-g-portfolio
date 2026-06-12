import { projects } from "../data/projects.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { icons } from "../components/icons.js";

export default function Projects() {
  const CheckIcon = icons.Check;

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production-minded builds with real workflows, metrics, and architecture."
          description="A focused set of projects around learning platforms, AI-assisted DevOps, and robust engineering systems."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="glass-panel gradient-ring flex h-full flex-col rounded-xl p-6 transition duration-300 hover:-translate-y-1 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-normal text-white">
                      {project.title}
                    </h3>
                  </div>
                  <Badge tone={project.accent}>{project.tech[0]}</Badge>
                </div>

                <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex gap-3 rounded-lg bg-white/[0.04] p-3 text-sm text-slate-300">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime-200" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-white/10 bg-black/25 p-4">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  {project.links.length > 0 ? (
                    project.links.map((link, linkIndex) => (
                      <Button
                        key={link.label}
                        href={link.href}
                        icon={link.icon}
                        variant={linkIndex === 0 ? "primary" : "secondary"}
                        className="sm:min-w-36"
                      >
                        {link.label}
                      </Button>
                    ))
                  ) : (
                    <Button href="#contact" icon="Mail" variant="secondary">
                      Discuss Project
                    </Button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
