import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-12 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-aurora sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-balance text-2xl font-semibold leading-[1.12] tracking-normal text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
