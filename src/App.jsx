import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Chatbot from "./components/Chatbot.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import { Analytics } from "@vercel/analytics/react";

const About = lazy(() => import("./sections/About.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Achievements = lazy(() => import("./sections/Achievements.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

function SectionFallback() {
  return (
    <div
      className="mx-auto h-24 max-w-7xl animate-pulse rounded-lg border border-white/8 bg-white/[0.03]"
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
