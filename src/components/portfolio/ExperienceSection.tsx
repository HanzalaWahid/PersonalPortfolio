import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Bug, GraduationCap, Code } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    title: "Project Manager ",
    company: "Rasinnovatech",
    period: "Present",
    color: "primary",
    highlights: [
      "Leading cross-functional teams and sprint planning",
      "Client coordination and requirement gathering",
      "Managing product development end-to-end",
      "Ensuring timely delivery of quality products"
    ]
  },
  {
    icon: Bug,
    title: "QA Analyst",
    company: "TechForge",
    period: "Oct 2025 - Dec 2025",
    color: "accent",
    highlights: [
      "Validate software releases for production",
      "Perform detailed bug reporting, tracking, and resolution follow-up",
      "Conduct comprehensive product quality checks",
      "Collaborate with developers and PM on system architecture and web-flow improvements"
    ]
  },
  {
    icon: Users,
    title: "QA Automation Engineering Intern",
    company: "Coventech",
    period: "Completed",
    color: "primary",
    highlights: [
      "Contributed to the DeftGPT product under team lead supervision",
      "Participated in weekly standups with PM, CTO, and developers",
      "Built the blog automation framework from scratch and maintained previous scripts",
      "Performed API testing using API Fox",
      "Participated in UI/UX review meetings, providing detailed feedback and validations"
    ]
  },
  {
    icon: GraduationCap,
    title: "Instructor",
    company: "Private",
    period: "Oct 2022 - Nov 2025",
    color: "accent",
    highlights: [
      "Teaching Python programming fundamentals",
      "Mathematics instruction (Primary to O Levels)",
      "Computer Science curriculum delivery",
      "Mentoring students for academic excellence"
    ]
  },
  {
    icon: Code,
    title: "Python Developer",
    company: "Freelance",
    period: "Ongoing",
    color: "primary",
    highlights: [
      "Build AI-powered tools and applications",
      "Backend development using Django & FastAPI",
      "API development and integrations",
      "Understanding full-stack flow and modern backend systems"
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
              A track record of delivering excellence across diverse roles
            </p>
          </motion.div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-[2.25rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Reveal key={exp.title + exp.company} delay={index * 0.1} width="100%">
                <div className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 hidden md:block" />

                  {/* Content Card container */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <TiltCard>
                      <div className="glass-card p-6 min-h-[240px] flex flex-col hover:border-primary/30 transition-all duration-300 interactive group">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${exp.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                            }`}>
                            <exp.icon className={`w-6 h-6 ${exp.color === "primary" ? "text-primary" : "text-accent"
                              }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-foreground leading-tight">{exp.title}</h3>
                                <p className={`text-sm font-semibold ${exp.color === "primary" ? "text-primary" : "text-accent"
                                  }`}>
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
                                  <span className={`w-1 h-4 rounded-full mt-0.5 shrink-0 ${exp.color === "primary" ? "bg-primary/50" : "bg-accent/50"
                                    }`} />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Spacer for alternating layout */}
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
