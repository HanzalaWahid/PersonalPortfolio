import { motion } from "framer-motion";
import { NeuralBackground } from "./NeuralBackground";
import { FloatingCubesGroup } from "./SkillsCube";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
            {/* Stable Neural Particles Background */}
            <NeuralBackground />

            {/* Global Floating 3D Cubes */}
            <FloatingCubesGroup />

            {/* Cinematic Liquid Mesh Layer / Fallback Gradient */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{
                    scale: [1.1, 1.2, 1.1],
                    x: [0, -20, 0],
                    y: [0, 10, 0],
                    opacity: 0.3
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
                style={{
                    // Using a dark gray radial gradient instead of blue
                    background: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)',
                    filter: 'contrast(1.1) brightness(0.8) saturate(0)'
                }}
            />

            {/* Dynamic Glow Overlays - Switched to subtle silver/gray */}
            <div className="absolute inset-0 opacity-20 dark:opacity-30 z-10">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-white/5 blur-[130px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-white/5 blur-[130px] rounded-full"
                />
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />

            {/* Scanning Laser Line */}
            <motion.div
                animate={{
                    y: ["-10%", "110%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent top-0 opacity-30 shadow-[0_0_15px_hsl(var(--primary))] z-30"
            />
        </div>
    );
}
