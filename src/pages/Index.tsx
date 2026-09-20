import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { TechStackMarquee } from "@/components/portfolio/TechStackMarquee";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, Bot, Database, Rocket, Camera } from "lucide-react";

const whatImBuilding = [
  {
    title: "AI Engineering",
    description: "Building practical AI-powered applications, LLM workflows, RAG systems, and intelligent automation.",
    icon: BrainCircuit
  },
  {
    title: "Python & Backend",
    description: "Developing APIs, backend services, automation systems, and business applications using Python.",
    icon: Database
  },
  {
    title: "AI Automation",
    description: "Building workflows that combine Python, APIs, LLMs, and automation.",
    icon: Bot
  },
  {
    title: "Product Development",
    description: "Turning ideas into usable software products through architecture, development, testing, and deployment.",
    icon: Rocket
  },
  {
    title: "Computer Vision",
    description: "Working with vision models and real-world detection pipelines for practical monitoring and automation use cases.",
    icon: Camera
  }
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <LoadingScreen />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <motion.div style={{ y: y2 }}>
          <AboutSection />
        </motion.div>
        <motion.div style={{ y: y1 }}>
          <SkillsSection />
        </motion.div>
        <TechStackMarquee />

        <section className="py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Focus</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What I&apos;m Building</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                I&apos;m currently focused on turning my AI and software engineering experience into production-oriented products and reliable business systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
              {whatImBuilding.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="glass-card p-6 h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ExperienceSection />
        <motion.div style={{ y: y2 }}>
          <ProjectsSection />
        </motion.div>
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
