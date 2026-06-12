import { profile } from "../data/profile.js";
import { icons } from "./icons.js";

export default function SocialLinks({ compact = false }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {profile.socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={social.label}
            className={`group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora ${
              compact ? "h-11 w-11 justify-center" : "px-4 py-3 text-sm font-medium"
            }`}
          >
            {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
            {compact ? <span className="sr-only">{social.label}</span> : <span>{social.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
