import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Terminal from "@/components/ui/Terminal";

const terminalEntries = [
  {
    cmd: "whoami",
    out: "abderazek_benhadjmbarek",
    outClass: "text-accent-emerald font-semibold",
  },
  {
    cmd: "current_education",
    out: "TEK-UP · Eng. Data Science & AI (2026-2028)",
    outClass: "text-accent-cyan",
  },
  {
    cmd: "core_focus",
    out: "Full Stack (MERN) · Flutter · Applied AI\nRAG · LLaMA 3 · Computer Vision · Docker",
    outClass: "text-accent-purple",
  },
  {
    cmd: "location",
    out: "Ariana, Tunisia (Available for Remote)",
    outClass: "text-text-primary",
  },
  {
    cmd: "status",
    out: "● open to new opportunities",
    outClass: "text-accent-emerald",
  },
];

const quickInfo = [
  { icon: "🎓", label: "TEK-UP · Eng. Data Science & AI" },
  { icon: "🏛️", label: "FSB · Master's Computer Science" },
  { icon: "📍", label: "Ariana, Tunisia · Open to Remote" },
  { icon: "🌐", label: "English & French (Fluent), Arabic" },
  { icon: "📜", label: "DataCamp & NVIDIA AI Certified" },
  { icon: "⚡", label: "Full Stack (MERN) + Flutter" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Passionate About{" "}
              <span className="gradient-text gradient-text-animated">
                Data &amp; AI
              </span>
            </>
          }
        />

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          {/* Terminal visual */}
          <Reveal dir="left">
            <div className="group relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-purple/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <Terminal entries={terminalEntries} />
            </div>
          </Reveal>

          {/* Text content */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-text-secondary">
                I&apos;m a{" "}
                <span className="font-semibold text-text-primary">
                  Data Science &amp; AI Engineering student at TEK-UP University
                </span>{" "}
                with proven experience in full-stack web and mobile development.
                I bridge the gap between robust software engineering and applied
                artificial intelligence.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="leading-relaxed text-text-secondary">
                My academic journey is anchored by an{" "}
                <span className="text-text-primary">
                  Engineering Degree in Data Science &amp; AI
                </span>{" "}
                at TEK-UP and a{" "}
                <span className="text-text-primary">
                  Master&apos;s &amp; Licence in Computer Science
                </span>{" "}
                from the Faculty of Sciences of Bizerte. Concurrently, I build
                production-ready systems using the{" "}
                <span className="text-accent-cyan">MERN stack</span> (React,
                Node.js, Express, MongoDB), mobile apps with{" "}
                <span className="text-accent-cyan">Flutter</span>, and deploy
                applied AI workflows with{" "}
                <span className="text-accent-purple">
                  LLaMA 3, Groq API, and RAG
                </span>
                .
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="leading-relaxed text-text-secondary">
                Whether building sovereign RAG knowledge simulators for public
                administration, developing laboratory ERP solutions, or
                delivering client e-commerce platforms, I am dedicated to
                writing clean, scalable code — seeking to deliver{" "}
                <span className="text-text-primary">
                  high-impact software engineering and intelligent system
                  solutions
                </span>
                .
              </p>
            </Reveal>

            {/* Quick info */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              {quickInfo.map((item, i) => (
                <Reveal key={item.label} delay={i * 60} dir="scale">
                  <div className="group flex h-full items-center gap-3 rounded-xl border border-border/60 bg-surface/50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:bg-surface">
                    <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="text-xs text-text-secondary sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
