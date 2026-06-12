import Container from "./Container.jsx";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Tailwind CSS.</p>
        <a
          href="#hero"
          className="rounded-lg px-3 py-2 text-slate-400 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora"
        >
          Back to top
        </a>
      </Container>
    </footer>
  );
}
