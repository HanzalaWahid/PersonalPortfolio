import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Programming",
    color: "primary",
    skills: ["Python", "R", "JavaScript", "HTML", "CSS"]
  },
  {
    name: "Frameworks",
    color: "accent",
    skills: ["Django", "Flask"]
  },
  {
    name: "AI Tools",
    color: "primary",
    skills: ["LLaMA", "Groq", "Gemini", "LangChain"]
  },
  {
    name: "Data Science",
    color: "accent",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    name: "Databases",
    color: "primary",
    skills: ["MongoDB", "Redis"]
  },
  {
    name: "QA & Testing",
    color: "accent",
    skills: ["API Fox", "Test Automation", "Manual Testing", "Bug Reporting"]
  },
  {
    name: "Soft Skills",
    color: "primary",
    skills: ["Communication", "Teamwork", "Time Management", "Leadership"]
  }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Technical{" "}
            <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                category.color === "primary" ? "text-primary" : "text-accent"
              }`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className={`skill-badge ${
                      category.color === "primary" 
                        ? "hover:border-primary/50 hover:bg-primary/10" 
                        : "hover:border-accent/50 hover:bg-accent/10"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
