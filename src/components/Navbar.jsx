import { useState } from "react";
import { motion } from "framer-motion";
import { navItems, profile } from "../data/profile.js";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import { icons } from "./icons.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = isOpen ? icons.X : icons.Menu;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-ink/70 backdrop-blur-2xl">
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary navigation">
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            aria-label="Charan G home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/[0.06] text-sm font-black tracking-normal text-white shadow-glow transition group-hover:border-cyan-200/30">
              {profile.logo}
            </span>
            <span className="hidden text-sm font-semibold text-slate-200 sm:inline">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={profile.resumeHref} icon="Download" variant="secondary" download>
              Resume
            </Button>
            <Button href="#contact" icon="ArrowRight">
              Contact
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-slate-100 transition hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </Container>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-white/8 bg-ink/95 backdrop-blur-2xl lg:hidden"
        >
          <Container className="py-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Button
                  href={profile.resumeHref}
                  icon="Download"
                  variant="secondary"
                  download
                  className="w-full"
                >
                  Resume
                </Button>
                <Button href="#contact" icon="ArrowRight" className="w-full" onClick={closeMenu}>
                  Contact
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      ) : null}
    </header>
  );
}
