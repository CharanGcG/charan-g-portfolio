import { profile } from "../data/profile.js";
import {
  trackEmailClick,
  trackResumeDownload,
  trackSocialClick,
} from "../utils/analytics.js";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { icons } from "../components/icons.js";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something amazing together."
          description="Open to full-stack engineering, AI tooling, backend systems, and DevOps-focused opportunities."
          align="center"
        />

        <Reveal className="glass-panel mx-auto max-w-4xl overflow-hidden rounded-xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-2xl font-semibold tracking-normal text-white">
                Have a role, project, or engineering problem worth solving?
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                I enjoy building reliable systems, useful automation, and interfaces that feel sharp in production.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`mailto:${profile.email}`}
                  icon="Mail"
                  onClick={() => trackEmailClick("contact_cta")}
                >
                  Email Charan
                </Button>
                <Button
                  href={profile.resumeHref}
                  icon="Download"
                  variant="secondary"
                  download
                  onClick={() => trackResumeDownload("contact")}
                >
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                Connect
              </h3>
              <div className="mt-6 grid gap-3">
                {profile.socials.map((social) => {
                  const Icon = icons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      onClick={() => trackSocialClick(social.label, "contact_card")}
                      className="group flex items-center gap-4 rounded-lg border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-slate-100">
                        {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white">
                          {social.label}
                        </span>
                        <span className="block truncate text-sm text-slate-400">
                          {social.handle}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
