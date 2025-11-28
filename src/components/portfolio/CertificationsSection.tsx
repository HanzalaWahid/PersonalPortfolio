import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Python Project for Data Science",
    issuer: "IBM",
    description: "Comprehensive certification covering Python fundamentals and data science project implementation.",
    link: "https://www.coursera.org/account/accomplishments/verify/R4PWUHMVML4G",
    color: "primary"
  },
  {
    title: "Data Visualization in Excel",
    issuer: "Coursera",
    description: "Professional certification in creating impactful data visualizations using Excel.",
    link: "#",
    color: "accent"
  },
  {
    title: "Soft Skills Assessment",
    issuer: "IBM",
    description: "Assessment certification validating professional soft skills and workplace competencies.",
    link: "#",
    color: "primary"
  }
];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-card/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Professional{" "}
            <span className="text-gradient-accent">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validated skills and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  cert.color === "primary" ? "bg-primary" : "bg-accent"
                }`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                    <Award className={`w-7 h-7 ${
                      cert.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                  </div>

                  <span className={`text-xs font-medium ${
                    cert.color === "primary" ? "text-primary" : "text-accent"
                  }`}>
                    {cert.issuer}
                  </span>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-3">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground flex-grow mb-4">
                    {cert.description}
                  </p>

                  {cert.link !== "#" && (
                    <Button variant="glass" size="sm" asChild className="w-full">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
