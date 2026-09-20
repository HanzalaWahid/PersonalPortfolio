import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  description?: string;
  image?: string;
  verificationUrl?: string;
  year?: string;
};

const certificates: Certificate[] = [
  {
    id: "ibm-python-project-data-science",
    title: "IBM — Python Project for Data Science",
    issuer: "IBM / Coursera",
    description: "Python, data analysis, and practical data science workflows.",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/R4PWUHMVML4G",
  },
  {
    id: "coursera-data-visualization-in-excel",
    title: "Coursera — Data Visualization in Excel",
    issuer: "Coursera",
    description: "Data visualization and dashboard development using Excel.",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/U5Q7RFMF8ZTW",
  },
  {
    id: "ibm-soft-skills-assessment",
    title: "IBM — Soft Skills Assessment",
    issuer: "IBM / Coursera",
    description: "Professional communication and workplace competency assessment.",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/RJLSH7TS84EP",
  },
];

function CertificateCard({
  certificate,
  isPaused,
}: {
  certificate: Certificate;
  isPaused: boolean;
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group h-full"
      style={{ willChange: "transform" }}
    >
      <div className="glass-card relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[22px] border border-border/60 bg-card/80 p-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_55%)] opacity-60" />

        <div className="relative z-10 flex h-full flex-col">
          {certificate.image ? (
            <div className="mb-4 overflow-hidden rounded-xl border border-border/60 bg-white/80 p-2 shadow-sm">
              <img
                src={certificate.image}
                alt={`Certificate title ${certificate.title} issued by ${certificate.issuer}`}
                className="h-40 w-full object-contain"
              />
            </div>
          ) : (
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-border/70 bg-secondary/30 text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-foreground/75" />
                <span className="text-xs font-medium uppercase tracking-[0.18em]">Certificate</span>
              </div>
            </div>
          )}

          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">
              {certificate.issuer}
            </span>
            {certificate.year ? (
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {certificate.year}
              </span>
            ) : null}
          </div>

          <h3 className="text-lg font-semibold leading-snug text-foreground">{certificate.title}</h3>

          {certificate.description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{certificate.description}</p>
          ) : null}

          <div className="mt-auto pt-4">
            {certificate.verificationUrl ? (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify certificate: ${certificate.title}`}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 ${isPaused ? "cursor-default" : ""}`}
              >
                Verify Certificate
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CertificateColumn({
  certificates: columnCertificates,
  direction,
  duration,
  isPaused,
  reduceMotion,
  onPauseChange,
}: {
  certificates: Certificate[];
  direction: "up" | "down";
  duration: number;
  isPaused: boolean;
  reduceMotion: boolean;
  onPauseChange: (paused: boolean) => void;
}) {
  const duplicatedCertificates = useMemo(
    () => [...columnCertificates, ...columnCertificates],
    [columnCertificates],
  );

  return (
    <div
      className="relative h-[420px] overflow-hidden rounded-[26px] border border-border/60 bg-background/30 p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] md:h-[500px]"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onFocus={() => onPauseChange(true)}
      onBlur={() => onPauseChange(false)}
      tabIndex={0}
      aria-label="Scrolling certificate gallery"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <motion.div
        className="flex flex-col gap-4"
        animate={
          reduceMotion || isPaused
            ? { y: 0 }
            : { y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }
        }
        transition={
          reduceMotion || isPaused
            ? { duration: 0.2 }
            : { duration, ease: "linear", repeat: Infinity }
        }
        style={{ willChange: "transform" }}
      >
        {duplicatedCertificates.map((certificate, index) => (
          <CertificateCard key={`${certificate.id}-${index}`} certificate={certificate} isPaused={isPaused} />
        ))}
      </motion.div>
    </div>
  );
}

export function CertificationsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [pausedColumns, setPausedColumns] = useState<Record<string, boolean>>({});

  const columns = useMemo(
    () => [
      { id: "column-1", direction: "up" as const, duration: 26, items: certificates.filter((_, index) => index % 3 === 0) },
      { id: "column-2", direction: "down" as const, duration: 30, items: certificates.filter((_, index) => index % 3 === 1) },
      { id: "column-3", direction: "up" as const, duration: 22, items: certificates.filter((_, index) => index % 3 === 2) },
    ],
    [],
  );

  return (
    <section id="certifications" className="relative overflow-hidden py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Certifications</span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Professional <span className="text-gradient-primary">Credentials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Selected certifications and professional learning achievements supporting my work across Python, data science, and professional development.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {columns.map((column) => (
            <CertificateColumn
              key={column.id}
              certificates={column.items.length ? column.items : certificates}
              direction={column.direction}
              duration={column.duration}
              isPaused={Boolean(pausedColumns[column.id])}
              reduceMotion={Boolean(prefersReducedMotion)}
              onPauseChange={(paused) =>
                setPausedColumns((current) => ({
                  ...current,
                  [column.id]: paused,
                }))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
