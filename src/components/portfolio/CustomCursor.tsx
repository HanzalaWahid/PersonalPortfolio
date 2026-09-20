import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 180 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches || reduceMotion) return;

    const moveCursor = (event: MouseEvent) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverables = document.querySelectorAll("a, button, [role='button'], .interactive");
    hoverables.forEach((element) => {
      element.addEventListener("mouseenter", handleHoverStart);
      element.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((element) => {
        element.removeEventListener("mouseenter", handleHoverStart);
        element.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block">
      <motion.div
        className="absolute rounded-full border border-violet-400/60 bg-violet-500/5 backdrop-blur-[1px]"
        style={{
          width: 28,
          height: 28,
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovered ? 1.4 : 1,
        }}
      />
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.9)]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: 14,
          top: 14,
          scale: isHovered ? 0.8 : 1,
        }}
      />
    </div>
  );
}
