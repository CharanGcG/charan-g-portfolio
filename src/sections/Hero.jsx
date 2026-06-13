import { motion, useReducedMotion } from "framer-motion";
import heroVisual from "../assets/hero-abstract.png";
import { profile } from "../data/profile.js";
import {
  trackContactButtonClick,
  trackResumeDownload,
} from "../utils/analytics.js";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SocialLinks from "../components/SocialLinks.jsx";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0)_0%,#050505_94%)]" />

      <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-white/[0.05] px-3 py-2 text-xs font-semibold tracking-[0.08em] text-cyan-50 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <span>{profile.hero.eyebrow}</span>
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.hero.greeting}
          </h1>
          <p className="mt-6 text-balance text-xl font-medium leading-[1.15] text-slate-200 sm:text-2xl lg:text-3xl">
            {profile.hero.headline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            {profile.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" icon="ArrowRight">
              View Projects
            </Button>
            <Button
              href={profile.resumeHref}
              icon="Download"
              variant="secondary"
              download
              onClick={() => trackResumeDownload("hero")}
            >
              Download Resume
            </Button>
            <Button
              href="#contact"
              icon="Mail"
              variant="ghost"
              onClick={() => trackContactButtonClick("hero")}
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-8">
            <SocialLinks source="hero" />
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <div className="gradient-ring relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-glass">
            <img
              src={heroVisual}
              alt="Abstract visualization of code systems, AI networks, and deployment pipelines"
              className="aspect-[4/3] w-full rounded-xl object-cover opacity-90"
              width="1200"
              height="900"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-black/70 via-transparent to-cyan-200/10" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
              {profile.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-black/45 p-3 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
