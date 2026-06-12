/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#0b0d10",
        graphite: "#14171d",
        mist: "#cbd5e1",
        steel: "#94a3b8",
        plasma: "#8b5cf6",
        aurora: "#22d3ee",
        signal: "#a3e635",
        solar: "#f59e0b",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 60px rgba(34, 211, 238, 0.18)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 0)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.06)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 16s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
