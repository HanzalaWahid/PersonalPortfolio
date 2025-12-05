import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Brain, MessageSquare, BarChart3, Film, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Brain,
    title: "AI Resume Analyzer",
    description: "AI-powered resume parsing and scoring system that analyzes resumes using natural language processing to provide insights and recommendations for job seekers.",
    tech: ["Python", "NLP", "AI"],
    color: "primary",
    github: "https://github.com/HanzalaWahid/AI_RESUME_ANALYZER"
  },
  {
    icon: GitPullRequest,
    title: "PR Review AI System",
    description: "Microservices-based PR suggestion and review system built with Django, FastAPI, Redis, LLaMA, and Groq for intelligent code review automation.",
    tech: ["Django", "FastAPI", "Redis", "LLaMA", "Groq"],
    color: "accent",
    github: "https://github.com/HanzalaWahid/Microservices"
  },
  {
    icon: MessageSquare,
    title: "Tweet App",
    description: "Full-featured social posting and interactions backend built with Django, enabling users to create, share, and interact with tweets.",
    tech: ["Django", "Python", "REST API"],
    color: "primary",
    github: "https://github.com/HanzalaWahid/Tweet-App"
  },
  {
    icon: BarChart3,
    title: "Stock Visualization Project",
    description: "Data science project featuring stock data scraping for Tesla and GameStop, with comprehensive visualization using BeautifulSoup and pandas.",
    tech: ["Python", "Pandas", "BeautifulSoup", "Visualization"],
    color: "accent",
    github: "https://github.com/HanzalaWahid/DataScienceProject"
  },
  {
    icon: Film,
    title: "Netflix EDA Project",
    description: "Exploratory Data Analysis of Netflix dataset including data cleaning, visualization, and insights extraction for content analysis.",
    tech: ["Python", "Pandas", "Matplotlib", "EDA"],
    color: "primary",
    github: "https://github.com/HanzalaWahid/DataScienceProject"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured{" "}
            <span className="text-gradient-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for building intelligent and impactful solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="glass-card p-6 h-full min-h-[320px] flex flex-col hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                    <project.icon className={`w-6 h-6 ${
                      project.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-lg"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <Button variant="glass" size="sm" asChild className="w-full mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
