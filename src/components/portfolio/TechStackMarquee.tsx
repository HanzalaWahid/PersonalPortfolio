import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAiohttp,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: IconType;
};

const rowOneItems: TechItem[] = [
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Docker", icon: SiDocker },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "FastAPI", icon: SiFastapi },
  { name: "APIs", icon: SiAiohttp },
];

const rowTwoItems: TechItem[] = [
  { name: "Django", icon: SiDjango },
  { name: "Figma", icon: SiFigma },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Vite", icon: SiVite },
  { name: "GitHub", icon: SiGithub },
  { name: "Automation", icon: SiGit },
  { name: "AI Workflows", icon: SiAiohttp },
  { name: "LLM Apps", icon: SiPython },
];

const rowConfigs = [
  { id: "row-1", items: rowOneItems, duration: 26, direction: "right-to-left" as const },
  { id: "row-2", items: rowTwoItems, duration: 32, direction: "left-to-right" as const },
];

function TechBadge({ item }: { item: TechItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2.5 shadow-[0_0_25px_rgba(109,40,217,0.12)] backdrop-blur-md"
      aria-label={item.name}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
        <Icon className="h-4 w-4 text-primary transition-colors duration-200 group-hover:text-accent" />
      </div>
      <span className="text-sm font-medium text-slate-100">{item.name}</span>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
  paused,
  reduceMotion,
}: {
  items: TechItem[];
  direction: "right-to-left" | "left-to-right";
  duration: number;
  paused: boolean;
  reduceMotion: boolean;
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-2xl py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex w-max items-center gap-4"
        animate={
          reduceMotion
            ? { x: 0 }
            : paused
              ? { x: 0 }
              : { x: direction === "right-to-left" ? ["0%", "-50%"] : ["-50%", "0%"] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : paused
              ? { duration: 0.2 }
              : { duration, ease: "linear", repeat: Infinity }
        }
        style={{ willChange: "transform" }}
      >
        {duplicatedItems.map((item, index) => (
          <TechBadge key={`${item.name}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export function TechStackMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="mb-8 text-center">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Core <span className="text-gradient-primary">Tech Stack</span>
          </h2>
        </div>

        <div
          className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(124,58,237,0.12)] backdrop-blur-xl md:p-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_35%)]" />

          <div className="relative space-y-4">
            {rowConfigs.map((row) => (
              <div
                key={row.id}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="relative"
              >
                <MarqueeRow
                  items={row.items}
                  direction={row.direction}
                  duration={row.duration}
                  paused={paused}
                  reduceMotion={prefersReducedMotion}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
