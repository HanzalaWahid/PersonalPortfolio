import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        const hoverables = document.querySelectorAll('a, button, [role="button"], .interactive');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000] hidden md:block">
            {/* Outer Ring */}
            <motion.div
                className="rounded-full border border-primary/50 mix-blend-difference"
                style={{
                    width: 32,
                    height: 32,
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovered ? 1.5 : 1,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 150, damping: 15 },
                }}
            />
            {/* Inner Dot */}
            <motion.div
                className="w-1 h-1 bg-primary rounded-full absolute mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    left: 16,
                    top: 16,
                    scale: isHovered ? 0.5 : 1,
                }}
            />
        </div>
    );
}
