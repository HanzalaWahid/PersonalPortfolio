import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { motion, useScroll, useTransform } from "framer-motion";

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
