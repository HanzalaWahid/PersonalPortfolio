import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Programming",
    color: "primary",
    skills: ["Python", "SQL", "HTML", "CSS", "JavaScript (Basic)"]
  },
  {
    name: "Backend & APIs",
    color: "accent",
    skills: ["Django", "Django REST Framework", "FastAPI", "Flask", "REST APIs", "API Integration", "ORM"]
  },
  {
    name: "AI & Machine Learning",
    color: "primary",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLM Applications", "Generative AI", "RAG", "Vector Embeddings", "AI Automation", "Computer Vision", "Model Evaluation"]
  },
  {
    name: "AI / LLM Technologies",
    color: "accent",
    skills: ["OpenAI", "Groq", "LangChain", "LLM APIs", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "AI Agents / Tool Calling"]
  },
  {
    name: "Data Science",
    color: "primary",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Data Cleaning", "Feature Engineering", "Data Visualization", "Statistical Analysis", "Model Evaluation"]
  },
  {
    name: "Databases",
    color: "accent",
    skills: ["Oracle SQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "SQLAlchemy", "Relational Databases", "NoSQL"]
  },
  {
    name: "Automation & Development",
    color: "primary",
    skills: ["Git", "GitHub", "Python Automation", "Playwright", "API Automation", "Docker", "CI/CD Concepts", "Linux", "Azure Blob Storage"]
  },
  {
    name: "QA / Testing",
    color: "accent",
    skills: ["Manual Testing", "API Testing", "Test Case Design", "Regression Testing", "Smoke Testing", "Bug Reporting", "UI/UX Testing", "Test Automation"]
  },
  {
    name: "Professional Skills",
    color: "primary",
    skills: ["Problem Solving", "Communication", "Teamwork", "Requirement Analysis", "Technical Documentation", "Client Coordination", "Leadership", "Continuous Learning"]
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
              AI engineering, backend systems, automation, and practical software development.
            </p>
          </motion.div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 items-stretch auto-rows-fr">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.name} delay={categoryIndex * 0.1} width="100%">
              <TiltCard>
                <div className="glass-card p-5 h-full hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <h3 className={`text-lg font-semibold mb-3 ${category.color === "primary" ? "text-primary" : "text-accent"}`}>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className={`skill-badge cursor-default interactive text-xs py-1.5 px-3 ${category.color === "primary"
                          ? "hover:border-primary/50 hover:bg-primary/10"
                          : "hover:border-accent/50 hover:bg-accent/10"}`}
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
