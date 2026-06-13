import oracleLogo from "../assets/logos/oracle-logo.svg";
import netradyneLogo from "../assets/logos/netradyne-logo.svg";

const logoStyles = {
  oracle: "border-red-300/15 bg-red-300/[0.06] group-hover:border-red-300/25 group-hover:bg-red-300/[0.09]",
  netradyne:
    "border-blue-300/15 bg-blue-300/[0.06] group-hover:border-blue-300/25 group-hover:bg-blue-300/[0.09]",
};

const logoAssets = {
  Oracle: {
    src: oracleLogo,
    alt: "Oracle logo",
    className: "h-5 w-auto max-w-[5.75rem]",
  },
  Netradyne: {
    src: netradyneLogo,
    alt: "Netradyne logo",
    className: "h-6 w-auto max-w-[6.6rem]",
  },
};

export default function CompanyLogo({ company, accent }) {
  const logo = logoAssets[company];

  return (
    <div
      className={`grid h-12 w-32 place-items-center rounded-lg border px-4 transition duration-300 ${logoStyles[accent] ?? "border-white/10 bg-white/[0.06]"}`}
    >
      {logo ? (
        <img
          src={logo.src}
          alt={logo.alt}
          className={`${logo.className} object-contain opacity-90 transition duration-300 group-hover:opacity-100`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
          {company}
        </span>
      )}
    </div>
  );
}
