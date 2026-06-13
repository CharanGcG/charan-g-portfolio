import { icons } from "./icons.js";

const variants = {
  primary:
    "bg-slate-100 text-black shadow-glow hover:bg-white focus-visible:ring-aurora",
  secondary:
    "border border-white/12 bg-white/[0.06] text-slate-100 hover:border-white/24 hover:bg-white/[0.1] focus-visible:ring-signal",
  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white focus-visible:ring-solar",
};

export default function Button({
  href,
  children,
  icon = "ArrowRight",
  variant = "primary",
  className = "",
  download,
  onClick,
  type = "button",
  ariaLabel,
}) {
  const Icon = icons[icon];
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} download={download} aria-label={ariaLabel} onClick={onClick}>
        <span>{children}</span>
        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} aria-label={ariaLabel}>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  );
}
