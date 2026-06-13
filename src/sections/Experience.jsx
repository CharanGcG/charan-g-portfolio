import { experiences } from "../data/experience.js";
import Badge from "../components/Badge.jsx";
import CompanyLogo from "../components/CompanyLogo.jsx";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { icons } from "../components/icons.js";

const accentStyles = {
  oracle: {
    dot: "bg-red-300 shadow-[0_0_24px_rgba(248,113,113,0.38)]",
    card: "hover:border-red-300/20 hover:shadow-[0_24px_90px_rgba(248,113,113,0.08)]",
    icon: "bg-red-300/10 text-red-100",
    check: "text-red-200",
  },
  netradyne: {
    dot: "bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.36)]",
    card: "hover:border-blue-300/20 hover:shadow-[0_24px_90px_rgba(96,165,250,0.08)]",
    icon: "bg-blue-300/10 text-blue-100",
    check: "text-blue-200",
  },
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
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-red-300/35 via-white/10 to-blue-300/35 sm:block" />
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={index * 0.08} className="relative sm:pl-14">
                <div
                  className={`absolute left-0 top-8 hidden h-8 w-8 rounded-full border-4 border-ink sm:block ${accentStyles[experience.accent]?.dot}`}
                  aria-hidden="true"
                />
                <article
                  className={`glass-panel gradient-ring group rounded-xl p-6 transition duration-300 sm:p-8 ${
                    accentStyles[experience.accent]?.card ?? ""
                  }`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                      <CompanyLogo company={experience.company} accent={experience.accent} />
                      <div className="min-w-0">
                        <h3 className="text-2xl font-semibold tracking-normal text-white">
                          {experience.company}
                        </h3>
                        <p className="mt-2 inline-flex items-center gap-2 text-base font-medium text-slate-300">
                          <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${accentStyles[experience.accent]?.icon}`}>
                            <BriefcaseIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          {experience.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      <Badge tone={experience.accent}>{experience.period}</Badge>
                      <Badge>{experience.location}</Badge>
                    </div>
                  </div>

                  <ul className="mt-7 grid gap-3">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <CheckIcon
                          className={`mt-1 h-4 w-4 shrink-0 ${accentStyles[experience.accent]?.check}`}
                          aria-hidden="true"
                        />
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
