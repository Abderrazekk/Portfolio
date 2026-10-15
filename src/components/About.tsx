import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import Terminal from "@/components/ui/Terminal";
import {
  Globe,
  GraduationCap,
  Landmark,
  MapPin,
  ScrollText,
  Zap,
} from "@/components/ui/Icon";

const terminalEntries = [
  {
    cmd: "whoami",
    out: "abderazek_benhadjmbarek",
    outClass: "text-accent-emerald font-semibold",
  },
  {
    cmd: "current_education",
    out: "TEK-UP · Eng. Data Science & AI (2026 – 2028)",
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
  { icon: GraduationCap, tint: "text-accent-cyan", label: "TEK-UP · Eng. Data Science & AI" },
  { icon: Landmark, tint: "text-accent-purple", label: "FSB · Master's Computer Science" },
  { icon: MapPin, tint: "text-accent-emerald", label: "Ariana, Tunisia · Open to Remote" },
  { icon: Globe, tint: "text-accent-blue", label: "English & French (Fluent), Arabic" },
  { icon: ScrollText, tint: "text-accent-pink", label: "DataCamp & NVIDIA AI Certified" },
  { icon: Zap, tint: "text-accent-cyan", label: "Full Stack (MERN) + Flutter" },
];

const languages = [
  { name: "English", level: "Fluent", value: 95, gradient: "from-accent-cyan to-accent-blue" },
  { name: "French", level: "Fluent", value: 92, gradient: "from-accent-blue to-accent-purple" },
  { name: "Arabic", level: "Native", value: 100, gradient: "from-accent-purple to-accent-pink" },
];

const openTo = [
  "Full Stack Engineer (MERN)",
  "AI / GenAI Engineer",
  "Mobile Developer (Flutter)",
  "Remote · Hybrid · Onsite",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          index="01 / 05"
          title={
            <>
              Engineering{" "}
              <span className="gradient-text gradient-text-animated">
                intelligence
              </span>{" "}
              into products
            </>
          }
          description="A quick look at who I am, what I build, and where I'm heading."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5 lg:gap-5">
          {/* LEFT — narrative + facts */}
          <div className="space-y-4 lg:col-span-3 lg:space-y-5">
            <Reveal dir="left">
              <div className="ring-gradient card p-7 md:p-9">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase">
                    profile.md
                  </span>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-accent-cyan/60" />
                    <span className="h-2 w-2 rounded-full bg-accent-purple/60" />
                    <span className="h-2 w-2 rounded-full bg-accent-emerald/60" />
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-text-secondary">
                  I&apos;m a{" "}
                  <span className="font-semibold text-text-primary">
                    Data Science &amp; AI Engineering student at TEK-UP
                    University
                  </span>{" "}
                  with proven experience in full-stack web and mobile
                  development — bridging robust software engineering with
                  applied artificial intelligence.
                </p>

                <p className="mt-5 leading-relaxed text-text-secondary">
                  My academic journey is anchored by an{" "}
                  <span className="text-text-primary">
                    Engineering Degree in Data Science &amp; AI
                  </span>{" "}
                  at TEK-UP and a{" "}
                  <span className="text-text-primary">
                    Master&apos;s &amp; Licence in Computer Science
                  </span>{" "}
                  from the Faculty of Sciences of Bizerte. Concurrently, I ship
                  production-ready systems with the{" "}
                  <span className="text-accent-cyan">MERN stack</span>, mobile
                  apps with <span className="text-accent-cyan">Flutter</span>,
                  and deploy applied AI workflows with{" "}
                  <span className="text-accent-purple">
                    LLaMA 3, Groq API, and RAG
                  </span>
                  .
                </p>

                <p className="mt-5 leading-relaxed text-text-secondary">
                  From sovereign RAG knowledge simulators for public
                  administration to laboratory ERP platforms and client
                  e-commerce builds, I focus on clean architecture, measurable
                  impact, and intelligent system design.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border/60 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-purple font-bold text-background">
                    AB
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-text-primary">
                      Abderazek Benhadjmbarek
                    </p>
                    <p className="font-mono text-[11px] text-text-muted">
                      Full Stack &amp; AI Developer · Tunisia
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
              {quickInfo.map((item, i) => (
                <Reveal key={item.label} delay={i * 60} dir="scale">
                  <div className="card group flex h-full items-center gap-3 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background/70 ring-1 ring-border transition-transform duration-300 group-hover:scale-110">
                      <item.icon className={`h-[18px] w-[18px] ${item.tint}`} />
                    </span>
                    <span className="text-xs leading-snug text-text-secondary sm:text-[13px]">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT — terminal + languages + availability */}
          <div className="space-y-4 lg:col-span-2 lg:space-y-5">
            <Reveal dir="right">
              <div className="group relative">
                <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-purple/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <Terminal entries={terminalEntries} />
              </div>
            </Reveal>

            <Reveal delay={100} dir="right">
              <div className="card p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-text-primary">
                    Languages
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">
                    i18n
                  </span>
                </div>
                <div className="space-y-4">
                  {languages.map((lang, i) => (
                    <div key={lang.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-text-secondary">{lang.name}</span>
                        <span className="font-mono text-[11px] text-text-muted">
                          {lang.level}
                        </span>
                      </div>
                      <SkillBar
                        name={lang.name}
                        level={lang.value}
                        gradient={lang.gradient}
                        delay={i * 120}
                        showMeta={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160} dir="right">
              <div className="card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-emerald" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary">
                    Open to
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {openTo.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] text-text-secondary"
                    >
                      <span className="text-accent-emerald">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
