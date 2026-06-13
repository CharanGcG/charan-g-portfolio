export default function Badge({ children, tone = "default" }) {
  const tones = {
    default: "border-white/10 bg-white/[0.06] text-slate-300",
    aurora: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
    signal: "border-lime-300/20 bg-lime-300/10 text-lime-100",
    solar: "border-amber-300/20 bg-amber-300/10 text-amber-100",
    oracle: "border-red-300/20 bg-red-300/10 text-red-100",
    netradyne: "border-blue-300/20 bg-blue-300/10 text-blue-100",
    teal: "border-teal-300/20 bg-teal-300/10 text-teal-100",
    purple: "border-violet-300/20 bg-violet-300/10 text-violet-100",
    gold: "border-amber-300/20 bg-amber-300/10 text-amber-100",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
