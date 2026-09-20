import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, ShieldCheck, Code, SearchCheck, Bot } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    title: "Junior AI Developer",
    company: "Technaptix",
    period: "April 2026 – Present",
    color: "primary",
    highlights: [
      "Working on AI-powered products, Python systems, automation workflows, APIs, and business-focused software solutions.",
      "Develop and integrate AI-powered features and workflows using Python and modern AI/LLM technologies.",
      "Build and maintain Python-based backend services and APIs.",
      "Work on AI automation workflows for real-world business and content use cases.",
      "Develop and integrate APIs and third-party services into application workflows.",
      "Contribute to product architecture, system-flow discussions, debugging, and feature development.",
      "Work with data processing, AI pipelines, and application logic.",
      "Participate in testing and validation to improve product reliability."
    ]
  },
  {
    icon: Users,
    title: "AI & Technology / Project Management",
    company: "RasInnovatech",
    period: "September 2025 – Present",
    color: "accent",
    highlights: [
      "Coordinate software and AI-focused product development.",
      "Work with teams on requirements, planning, development workflows, and delivery.",
      "Contribute to AI-powered applications and automation systems.",
      "Participate in technical discussions, product planning, and system-flow design.",
      "Help translate business requirements into technical tasks and deliverables."
    ]
  },
  {
    icon: SearchCheck,
    title: "QA Automation Engineer Intern",
    company: "Coventech",
    period: "July 2025 – September 2025",
    color: "accent",
    highlights: [
      "Gained professional exposure to software quality engineering and automation.",
      "Worked on automation workflows and maintained existing automation scripts.",
      "Built automation for product-related workflows.",
      "Performed API testing and validation.",
      "Participated in UI/UX and product-flow discussions.",
      "Collaborated with developers, PMs, and technical team members."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Information Security Intern",
    company: "Virtual Security",
    period: "February 2025 – May 2025",
    color: "primary",
    highlights: [
      "Gained practical exposure to application and information security workflows.",
      "Worked with security testing and monitoring tools.",
      "Performed web and application security testing activities.",
      "Prepared technical findings and security reports.",
      "Worked with Wireshark, Nmap/Zenmap, Kali Linux, and security monitoring platforms."
    ]
  },
  {
    icon: Code,
    title: "Python Developer",
    company: "Freelance / Independent Projects",
    period: "Ongoing",
    color: "primary",
    highlights: [
      "Build Python applications, APIs, automation workflows, and AI-powered tools.",
      "Develop backend systems using Django and FastAPI.",
      "Integrate AI/LLM capabilities into applications.",
      "Work with databases, APIs, data processing, and automation.",
      "Develop practical projects focused on solving real-world problems."
    ]
  }
];

import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="section-container" ref={ref}>
        <Reveal width="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Professional{" "}
              <span className="text-gradient-accent">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI engineering, Python development, automation, backend systems, and real-world product delivery.
            </p>
          </motion.div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[2.25rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Reveal key={exp.title + exp.company} delay={index * 0.1} width="100%">
                <div className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 hidden md:block" />

                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <TiltCard>
                      <div className="glass-card p-6 min-h-[240px] flex flex-col hover:border-primary/30 transition-all duration-300 interactive group">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${exp.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}>
                            <exp.icon className={`w-6 h-6 ${exp.color === "primary" ? "text-primary" : "text-accent"}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-foreground leading-tight">{exp.title}</h3>
                                <p className={`text-sm font-semibold ${exp.color === "primary" ? "text-primary" : "text-accent"}`}>
                                  {exp.company}
                                </p>
                              </div>
                              <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/50">
                                {exp.period}
                              </span>
                            </div>

                            <ul className="space-y-3 mt-4">
                              {exp.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed">
                                  <span className={`w-1 h-4 rounded-full mt-0.5 shrink-0 ${exp.color === "primary" ? "bg-primary/50" : "bg-accent/50"}`} />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  <div className="hidden md:block w-full md:w-[calc(50%-2rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
