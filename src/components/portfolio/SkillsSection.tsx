import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Programming",
    color: "primary",
    skills: ["Python", "R", "JavaScript (basic)", "HTML", "CSS"]
  },
  {
    name: "Frameworks",
    color: "accent",
    skills: ["Django", "FastAPI", "Streamlit"]
  },
  {
    name: "AI & ML Tools",
    color: "primary",
    skills: ["LLaMA", "Groq", "Gemini", "LangChain", "Vector Embeddings", "RAG Pipelines", "NLP", "Computer Vision", "Machine Learning", "Deep Learning",]
  },
  {
    name: "Data Science",
    color: "accent",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Feature Engineering", "Model Evaluation", "Feature Selection", "Feature Extraction", "Data Cleaning", "Data Visualization"]
  },
  {
    name: "Databases",
    color: "primary",
    skills: ["SQLite / PySQLite", "MongoDB", "Redis"]
  },
  {
    name: "QA & Testing",
    color: "accent",
    skills: ["Test Case Design", "Test Case Documentation", "Manual Testing", "Automation Scripting", "API Fox", "Bug Reporting", "UI/UX Testing Mindset", "Regression Testing", "Smoke Testing"]
  },
  {
    name: "Soft Skills",
    color: "primary",
    skills: ["Communication", "Teamwork", "Time Management", "Leadership", "Learning mindset", "Problem Solving"]
  }
];

import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        <Reveal width="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
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
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 items-stretch auto-rows-fr">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.name} delay={categoryIndex * 0.1} width="100%">
              <TiltCard>
                <div className="glass-card p-5 h-full hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <h3 className={`text-lg font-semibold mb-3 ${category.color === "primary" ? "text-primary" : "text-accent"
                    }`}>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className={`skill-badge cursor-default interactive text-xs py-1.5 px-3 ${category.color === "primary"
                          ? "hover:border-primary/50 hover:bg-primary/10"
                          : "hover:border-accent/50 hover:bg-accent/10"
                          }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
