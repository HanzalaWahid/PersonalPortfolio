import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Bachelor of Science in Artificial Intelligence | Dawood University of Engineering & Technology"
  },
  {
    icon: Code,
    title: "Development",
    description: "Python · Django · FastAPI · AI/ML · APIs · Automation"
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "AI Engineer · Python Developer · AI Automation"
  },
  {
    icon: Users,
    title: "Teaching",
    description: "Mathematics · Computer Science · Python Programming"
  }
];

import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24">
      <div className="section-container" ref={ref}>
        <Reveal width="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Turning Ideas Into{" "}
              <span className="text-gradient-accent">Production-Ready Systems</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI engineering, Python development, automation, and practical software systems.
            </p>
          </motion.div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Reveal delay={0.3} width="100%">
            <TiltCard>
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m <span className="text-primary font-medium interactive">Muhammad Hanzala Wahid</span>, an AI Engineer and Python Developer with a Bachelor&apos;s degree in Artificial Intelligence and 1+ year of hands-on professional experience across AI/ML applications, Python development, backend systems, automation, API development, and software engineering.
                  </p>
                  <p>
                    My work focuses on building practical AI-powered products and business systems. I work across the product lifecycle — from understanding requirements and designing system flows to development, API integration, automation, testing, debugging, and deployment.
                  </p>
                  <p>
                    I currently work on AI-powered systems, automation workflows, backend applications, and business-focused software products. My interests include LLM applications, RAG systems, AI agents, computer vision, Python backend development, API integrations, and intelligent automation.
                  </p>
                  <p>
                    I also have professional exposure to QA automation, API testing, information security, and software validation, which helps me build more reliable and production-oriented systems.
                  </p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={0.4 + index * 0.1}>
                <TiltCard>
                  <div className="glass-card p-6 h-full group hover:border-primary/30 transition-all duration-300 interactive">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
