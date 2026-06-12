import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
