import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 32, -18, 0],
                y: [0, -24, 16, 0],
                scale: [1, 1.05, 0.98, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-18rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/16 blur-3xl"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -22, 28, 0],
                y: [0, 18, -20, 0],
                scale: [1, 1.07, 1, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-18rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-lime-300/10 blur-3xl"
      />
      <div className="absolute left-1/2 top-24 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
    </div>
  );
}
