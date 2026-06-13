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
              <article className="glass-panel gradient-ring relative h-full overflow-hidden rounded-xl border-amber-300/10 p-7 transition duration-300 hover:border-amber-300/20 hover:shadow-[0_24px_90px_rgba(245,158,11,0.07)] sm:p-8">
                <div className="absolute right-6 top-5 text-6xl opacity-15" aria-hidden="true">
                  {achievement.icon}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-100">
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
