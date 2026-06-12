import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../data/skills.js";
import Badge from "../components/Badge.jsx";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { icons } from "../components/icons.js";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for building, shipping, testing, and automating."
          description="Animated skill cards grouped by the engineering surfaces I work across."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <Reveal key={category.title} delay={index * 0.04}>
                <motion.article
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, index % 2 === 0 ? -8 : 8, 0],
                        }
                  }
                  transition={{
                    duration: 5 + index * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="glass-panel h-full rounded-xl p-5"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-white/[0.06] text-cyan-100">
                      {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
