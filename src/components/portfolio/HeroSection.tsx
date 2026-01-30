import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { Reveal } from "./Reveal";
import { HoverCardPortal } from "@radix-ui/react-hover-card";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 section-container text-center">
        <Reveal width="100%">
          <motion.div>
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8 relative"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow relative z-10">
                  <img
                    src={profileImage}
                    alt="Muhammad Hanzala Wahid"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Muhammad{" "}
              <span className="text-gradient-primary">Hanzala</span>{" "}
              Wahid
            </motion.h1>

            {/* Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"

            >
              {["Python Developer", "AI Engineer", "QA Engineer"].map((title, i) => (
                <span
                  key={title}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${i % 2 === 0
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "bg-accent/10 text-accent border border-accent/30"
                    }`}
                >
                  {title}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Passionate about building intelligent systems and delivering quality software.
              Currently pursuing AI at DUET while leading teams and crafting exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button variant="hero" size="lg" className="interactive animate-attention-pulse" asChild>
                <a href="#contact">
                  Connect With Me
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="interactive" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={18} />
                  View Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/HanzalaWahid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                <Github size={24} />
              </a>
              <a
                href="https://bit.ly/3L0s2Z0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:wahidhanzala123@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
