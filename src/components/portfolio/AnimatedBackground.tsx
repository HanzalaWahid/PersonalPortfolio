import { motion, useReducedMotion } from "framer-motion";
import { NeuralBackground } from "./NeuralBackground";
import { FloatingCubesGroup } from "./SkillsCube";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070a13]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.12),_transparent_32%)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <NeuralBackground />
      <FloatingCubesGroup />

      {!reduceMotion && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.18, 0.24, 0.18], scale: [1, 1.06, 1] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
            className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.12, 0.18, 0.12], scale: [1, 1.08, 1] }}
            transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
            className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]"
          />
        </>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_48%,_rgba(7,10,19,0.78)_100%)]" />
    </div>
  );
}
