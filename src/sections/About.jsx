import { profile } from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { icons } from "../components/icons.js";

export default function About() {
  const GraduationIcon = icons.GraduationCap;
  const RocketIcon = icons.Rocket;
  const CheckIcon = icons.Check;

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineer with product taste, systems thinking, and a bias for shipping."
          description="I like working where reliability, usability, and automation meet."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="glass-panel rounded-xl p-6 sm:p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-100">
              <GraduationIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="text-xl leading-9 text-slate-200">{profile.about}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge tone="aurora">B.E. Computer Science and Engineering</Badge>
              <Badge tone="signal">B.M.S. College of Engineering</Badge>
              <Badge tone="solar">CGPA: 9.57/10</Badge>
            </div>
          </Reveal>

          <Reveal className="grid gap-5" delay={0.08}>
            <div className="glass-panel rounded-xl p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-lime-300/10 text-lime-100">
                <RocketIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">Core Focus</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {[
                  "Backend systems and APIs that stay reliable under real usage.",
                  "Full-stack interfaces that feel clear, fast, and premium.",
                  "AI applications that improve engineering workflows.",
                  "DevOps automation that removes manual friction.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-lime-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="glass-panel rounded-xl p-5">
              <p className="text-3xl font-semibold tracking-normal text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
