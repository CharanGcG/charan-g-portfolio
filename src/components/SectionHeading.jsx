import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-aurora">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
