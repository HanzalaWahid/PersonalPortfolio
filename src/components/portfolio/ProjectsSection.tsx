import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Lock, Brain, Mic, ShieldCheck, Database, Mail, BarChart3, Bot, FileText, Search, HardDrive, CircleDashed, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/portfolio/Reveal";
import { TiltCard } from "@/components/portfolio/TiltCard";

const professionalProjects = [
  {
    title: "Outbound AI Voice Agent",
    category: "Professional",
    type: "Professional Project · Technaptix",
    description: "Built outbound AI calling workflows for lead qualification and sales conversations, including transcript generation, email workflows, and Cal.com booking.",
    tech: ["Python", "LiveKit SIP", "Retell AI", "Telnyx", "Deepgram", "Groq", "OpenAI", "n8n"],
    color: "primary",
    bullets: [
      "Integrated telephony, speech, LLM, and automation services.",
      "Built workflows for lead qualification and sales conversations.",
      "Integrated calendar booking and post-call workflows.",
      "Optimized VAD and model usage.",
      "Reduced estimated call cost to approximately PKR 15 per call."
    ],
    github: null,
    icon: Mic
  },
  {
    title: "AI Voice Receptionist",
    category: "Professional",
    type: "Professional Project · Technaptix",
    description: "Developed an inbound AI voice receptionist capable of retrieving business information and executing business actions through tools.",
    tech: ["Python", "LiveKit Agents", "Deepgram", "Groq", "ChromaDB", "OpenAI"],
    color: "accent",
    bullets: [
      "Implemented knowledge-base retrieval using ChromaDB.",
      "Integrated speech recognition and LLM-based conversation.",
      "Developed tool-based business actions.",
      "Designed booking confirmation to occur only after successful tool execution.",
      "Achieved approximately 1.1–1.2 second response latency in the implemented workflow."
    ],
    github: null,
    icon: Bot
  },
  {
    title: "Pharmaceutical Advertising Compliance",
    category: "Professional",
    type: "Professional Project · Technaptix",
    description: "Built automated compliance checking for PDF, PPT, and DOCX materials using OCR and vision-driven AI analysis.",
    tech: ["Python", "FastAPI", "OCR", "OpenAI Vision", "React", "TypeScript"],
    color: "primary",
    bullets: [
      "Built automated compliance checking for PDF, PPT, and DOCX materials.",
      "Implemented approximately 160 validation endpoints/checks.",
      "Used OCR and vision-based AI analysis.",
      "Added parallel processing.",
      "Generated pass/fail JSON and HTML reports."
    ],
    github: null,
    icon: ShieldCheck
  },
  {
    title: "Sales Data Automation",
    category: "Automation",
    type: "Professional Project · Technaptix",
    description: "Automated daily month-to-date sales processing, Excel transformation, and Azure-based data uploads.",
    tech: ["Python", "Playwright", "openpyxl", "Azure Blob Storage"],
    color: "accent",
    bullets: [
      "Automated daily month-to-date sales processing.",
      "Automated data transformation and cleanup.",
      "Automated Excel processing.",
      "Generated structured datasets.",
      "Uploaded processed data to Azure Blob Storage."
    ],
    github: null,
    icon: BarChart3
  },
  {
    title: "Industrial Safety Vision",
    category: "AI / ML",
    type: "Professional Project · Technaptix",
    description: "Developed person detection and PPE monitoring pipelines for safety compliance in industrial environments.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "FastAPI"],
    color: "primary",
    bullets: [
      "Developed person detection pipelines.",
      "Implemented PPE detection.",
      "Implemented restricted-zone monitoring.",
      "Implemented worker-idle detection.",
      "Converted camera observations into structured safety events."
    ],
    github: null,
    icon: Brain
  },
  {
    title: "Lead Generation & Contact Intelligence",
    category: "AI / ML",
    type: "Professional Project · Technaptix",
    description: "Built a lead-generation and contact-intelligence proof of concept using LLM-assisted enrichment workflows.",
    tech: ["Python", "FastAPI", "Groq"],
    color: "accent",
    bullets: [
      "Built a lead-generation and contact-intelligence proof of concept.",
      "Identified C-level and VP-level contacts.",
      "Extracted and structured contact information.",
      "Generated scored outreach lists.",
      "Integrated LLM-based processing into enrichment workflows."
    ],
    github: null,
    icon: Search
  },
  {
    title: "ERP / SAP Data Scraper",
    category: "Python / Backend",
    type: "Professional Project · Technaptix",
    description: "Developed a resumable SAP table-catalog scraper with local searchable storage and interruption recovery.",
    tech: ["Python", "HTTPX", "BeautifulSoup", "SQLite"],
    color: "primary",
    bullets: [
      "Developed a SAP table-catalog scraper.",
      "Implemented resumable scraping.",
      "Added local searchable SQLite storage.",
      "Added recovery from interrupted jobs.",
      "Structured extracted data for search and analysis."
    ],
    github: null,
    icon: Database
  },
  {
    title: "Email Automation Platform",
    category: "Automation",
    type: "Professional Project · Technaptix",
    description: "Built a personalized email automation platform with campaign management and backend APIs.",
    tech: ["Python", "FastAPI", "SMTP", "React"],
    color: "accent",
    bullets: [
      "Built personalized email automation.",
      "Added contact and template management.",
      "Implemented bulk sending.",
      "Added campaign-level send logging.",
      "Built backend APIs with FastAPI."
    ],
    github: null,
    icon: Mail
  }
];

const personalProjects = [
  {
    title: "AI-Powered Explainable Recruitment System",
    category: "Personal",
    type: "Final Year Project",
    description: "Built an AI-powered recruitment platform focused on CV parsing, job matching, candidate ranking, anonymization, and explainable decision-making.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "spaCy", "Sentence Transformers", "PyMuPDF", "pdfplumber", "Docker", "Nginx", "JWT"],
    bullets: [
      "Developed CV parsing and structured information extraction.",
      "Implemented job matching and candidate ranking.",
      "Implemented Top-5 candidate ranking.",
      "Added Normal and Fair evaluation modes.",
      "Implemented demographic parity difference and equal opportunity difference."
    ],
    github: "https://github.com/HanzalaWahid/AI-EXPLAINABLE-RECRUITMENT-SYSTEM",
    icon: FileText,
    color: "primary"
  },
  {
    title: "AI-Powered Code Review Assistant",
    category: "Personal",
    type: "AI / ML",
    description: "Built an asynchronous AI code-review platform that analyzes GitHub Pull Requests and generates structured development feedback.",
    tech: ["FastAPI", "Django", "Celery", "Redis", "Groq", "GitHub API"],
    bullets: [
      "Integrated GitHub Pull Request workflows.",
      "Analyzed code for bugs, performance, maintainability, security, and best-practice violations.",
      "Designed asynchronous processing using Celery and Redis.",
      "Generated structured findings and actionable recommendations.",
      "Built non-blocking AI review pipelines."
    ],
    github: "https://github.com/HanzalaWahid/Microservices",
    icon: Github,
    color: "accent"
  },
  {
    title: "AI Resume Intelligence Platform",
    category: "Personal",
    type: "AI / ML",
    description: "Implemented resume parsing and document processing with structured candidate profiling and configurable LLM provider workflows.",
    tech: ["FastAPI", "PostgreSQL", "NLP", "LLMs", "Streamlit"],
    bullets: [
      "Implemented resume parsing and document processing.",
      "Extracted and structured candidate skills.",
      "Built candidate profiling workflows.",
      "Added configurable LLM provider support.",
      "Implemented rule-based fallbacks and modular backend services."
    ],
    github: "https://github.com/HanzalaWahid/AI_RESUME_ANALYZER",
    icon: Brain,
    color: "primary"
  },
  {
    title: "H-School ERP",
    category: "Personal",
    type: "Python / Backend",
    description: "A multi-tenant school management and operations platform being developed toward production deployment.",
    tech: ["Django", "Django REST Framework", "React", "Vite", "Supabase", "JWT"],
    bullets: [
      "Multi-tenant school architecture.",
      "Student and parent management.",
      "Teacher and administrative workflows.",
      "Role-based permissions and authentication.",
      "REST API architecture and database integration."
    ],
    github: null,
    icon: HardDrive,
    color: "accent"
  }
];

const earlierProjects = [
  "RAG AI Chatbot",
  "Django Tweet Application",
  "Stock Data Analysis",
  "Netflix EDA",
  "Machine Learning Classification Projects",
  "Healthcare Analytics"
];

const filters = ["All", "Professional", "AI / ML", "Python / Backend", "Automation", "Personal"] as const;

type FilterType = (typeof filters)[number];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const visibleProjects =
    activeFilter === "All"
      ? [...professionalProjects, ...personalProjects]
      : [...professionalProjects, ...personalProjects].filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        <Reveal width="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Selected{" "}
              <span className="text-gradient-primary">Professional Work</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Practical AI, backend, automation, and product work built for real business use cases.
            </p>
          </motion.div>
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${activeFilter === filter ? "bg-primary text-primary-foreground border-primary" : "bg-card/40 border-border text-muted-foreground hover:text-foreground"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={`${project.title}-${index}`} delay={index * 0.06}>
                <TiltCard>
                  <div className="glass-card p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300 interactive">
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${project.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}>
                        <Icon className={`w-6 h-6 ${project.color === "primary" ? "text-primary" : "text-accent"}`} />
                      </div>

                      <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/50">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[11px] px-2 py-1 rounded-full bg-secondary/60 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-5 text-sm text-muted-foreground flex-grow">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {project.github ? (
                      <Button variant="glass" size="sm" asChild className="w-full mt-auto">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          View on GitHub
                          <ArrowUpRight size={14} className="ml-2" />
                        </a>
                      </Button>
                    ) : (
                      <div className="mt-auto flex items-center justify-center gap-2 text-sm rounded-md border border-dashed border-border bg-secondary/30 text-muted-foreground py-2.5">
                        <Lock size={14} />
                        Private / Company Project
                      </div>
                    )}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border/50 pt-10">
          <h3 className="text-2xl font-semibold mb-6">Earlier Projects</h3>
          <div className="flex flex-wrap gap-3">
            {earlierProjects.map((project) => (
              <span key={project} className="px-3 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm border border-border/50">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
