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
    <section id="contact" className="relative py-20 pb-36 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something amazing together."
          description="Open to full-stack engineering, AI tooling, backend systems, and DevOps-focused opportunities."
          align="center"
        />

        <Reveal className="glass-panel mx-auto w-full max-w-4xl overflow-hidden rounded-xl">
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0 p-5 sm:p-8 lg:p-10">
              <p className="text-xl font-semibold leading-tight tracking-normal text-white sm:text-2xl">
                Have a role, project, or engineering problem worth solving?
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                I enjoy building reliable systems, useful automation, and interfaces that feel sharp in production.
              </p>
              <div className="mt-7 flex min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button
                  href={`mailto:${profile.email}`}
                  icon="Mail"
                  onClick={() => trackEmailClick("contact_cta")}
                  className="w-full sm:w-auto"
                >
                  Email Charan
                </Button>
                <Button
                  href={profile.resumeHref}
                  icon="Download"
                  variant="secondary"
                  download
                  onClick={() => trackResumeDownload("contact")}
                  className="w-full sm:w-auto"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="min-w-0 border-t border-white/10 bg-white/[0.035] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                Connect
              </h3>
              <div className="mt-6 grid min-w-0 gap-3">
                {profile.socials.map((social) => {
                  const Icon = icons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      onClick={() => trackSocialClick(social.label, "contact_card")}
                      className="group flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3.5 transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora sm:gap-4 sm:p-4"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-slate-100 sm:h-11 sm:w-11">
                        {Icon ? <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /> : null}
                      </span>
                      <span className="min-w-0 flex-1 overflow-hidden">
                        <span className="block truncate text-sm font-semibold text-white">
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
