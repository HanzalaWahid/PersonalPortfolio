import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "7th Semester AI Student at Dawood University of Engineering & Technology"
  },
  {
    icon: Code,
    title: "Development",
    description: "Python, Django, Flask, AI/ML tools including LLaMA, Groq & LangChain"
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "QA Analyst at TechForge & Project Manager at Rasinnovatech"
  },
  {
    icon: Users,
    title: "Teaching",
    description: "Instructor for Mathematics, Computer Science & Python Programming"
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-card/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Turning Ideas Into{" "}
            <span className="text-gradient-accent">Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a 7th-semester Artificial Intelligence student at <span className="text-primary font-medium">DUET</span>, passionate about building intelligent systems, automation workflows, and high-quality digital products.
                </p>
                <p>
                  My experience spans Python development, AI engineering, and QA automation, allowing me to work across backend systems, machine learning pipelines, and software quality assurance with strong technical depth.
                </p>
                <p>
                  Alongside development, I collaborate with PMs and engineering teams, contribute to system flow discussions, and help deliver scalable, reliable technology solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
