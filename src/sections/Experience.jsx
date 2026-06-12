import { experiences } from "../data/experience.js";
import Badge from "../components/Badge.jsx";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { icons } from "../components/icons.js";

const accentDots = {
  aurora: "bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.45)]",
  signal: "bg-lime-300 shadow-[0_0_24px_rgba(163,230,53,0.36)]",
  solar: "bg-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.36)]",
};

export default function Experience() {
  const BriefcaseIcon = icons.BriefcaseBusiness;
  const CheckIcon = icons.Check;

  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Internships across product engineering, DevOps automation, and testing."
          description="Hands-on work in CI/CD, API validation, enterprise troubleshooting, and engineering productivity."
        />

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-lime-300/40 sm:block" />
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={index * 0.08} className="relative sm:pl-14">
                <div
                  className={`absolute left-0 top-8 hidden h-8 w-8 rounded-full border-4 border-ink sm:block ${accentDots[experience.accent]}`}
                  aria-hidden="true"
                />
                <article className="glass-panel gradient-ring rounded-xl p-6 sm:p-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] text-cyan-100">
                        <BriefcaseIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-normal text-white">
                        {experience.company}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-300">
                        {experience.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      <Badge tone={experience.accent}>{experience.period}</Badge>
                      <Badge>{experience.location}</Badge>
                    </div>
                  </div>

                  <ul className="mt-7 grid gap-3">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
