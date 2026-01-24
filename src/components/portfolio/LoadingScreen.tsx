import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Logo placeholder / Name display */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                                HANZALA<span className="text-primary">.</span>
                            </h1>
                        </motion.div>

                        {/* Progress line */}
                        <div className="w-48 h-[2px] bg-secondary overflow-hidden rounded-full">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: 0
                                }}
                                className="w-full h-full bg-primary"
                            />
                        </div>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="mt-4 text-xs tracking-[0.3em] font-medium text-muted-foreground uppercase"
                        >
                            Loading Experience
                        </motion.p>
                    </div>

                    {/* Background decoration */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.05 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
