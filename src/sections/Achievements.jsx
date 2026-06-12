import { achievements } from "../data/achievements.js";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Signals of consistency, craft, and self-driven reach."
          description="Academic excellence and creative portfolio growth, both grounded in sustained execution."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.08}>
              <article className="glass-panel gradient-ring relative h-full overflow-hidden rounded-xl p-7 sm:p-8">
                <div className="absolute right-6 top-5 text-6xl opacity-20" aria-hidden="true">
                  {achievement.icon}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  {achievement.metric}
                </p>
                <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-normal text-white">
                  {achievement.icon} {achievement.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  {achievement.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
