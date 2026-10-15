import Aurora from "@/components/ui/Aurora";
import Counter from "@/components/ui/Counter";
import NeuralCanvas from "@/components/ui/NeuralCanvas";
import Sparkline from "@/components/ui/Sparkline";
import Typewriter from "@/components/ui/Typewriter";

const stats: {
  label: string;
  hint: string;
  value?: number;
  suffix?: string;
  text?: string;
  spark: number[];
}[] = [
  {
    label: "shipped_projects",
    hint: "Web · Mobile · Applied AI",
    value: 7,
    suffix: "+",
    spark: [1, 2, 3, 3, 4, 6, 7],
  },
  {
    label: "industry_roles",
    hint: "Client work & internships",
    value: 3,
    suffix: "+",
    spark: [1, 1, 1, 2, 2, 2, 3],
  },
  {
    label: "certifications",
    hint: "DataCamp · NVIDIA · Cisco",
    value: 9,
    suffix: "+",
    spark: [2, 3, 4, 5, 7, 8, 9],
  },
  {
    label: "current_program",
    hint: "Eng. Data Science & AI",
    text: "TEK-UP",
    spark: [3, 4, 4, 6, 7, 8, 9],
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <Aurora />

      {/* Live neural field */}
      <NeuralCanvas className="absolute inset-0 -z-10 opacity-70" />

      {/* Vignette so copy always stays legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_35%,var(--color-background)_88%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        {/* Status pill */}
        <div
          className="inline-flex animate-rise items-center gap-3 rounded-full border border-border/80 bg-surface/60 px-4 py-2 backdrop-blur-md"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-emerald" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
          </span>
          <span className="text-xs text-text-secondary sm:text-sm">
            Open to Full Stack &amp; AI Engineering roles
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span className="hidden font-mono text-[11px] text-text-muted sm:block">
            Tunisia · Remote
          </span>
        </div>

        {/* Eyebrow */}
        <p
          className="mt-9 animate-rise font-mono text-xs tracking-[0.22em] text-text-muted uppercase md:text-sm"
          style={{ animationDelay: "0.12s" }}
        >
          <span className="text-accent-cyan">&lt;/&gt;</span> Hello, I&apos;m{" "}
          <span className="text-text-primary md:text-base">
            Abderazek Benhadjmbarek
          </span>
        </p>

        {/* Heading */}
        <h1
          className="mt-5 animate-rise text-balance text-[2.75rem] font-bold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-text-primary">Full Stack &amp; AI</span>
          <span className="gradient-text gradient-text-animated text-glow block">
            Developer
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className="mt-7 flex animate-rise items-center justify-center gap-2 font-mono text-base text-text-secondary md:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-accent-purple">~$</span>
          <Typewriter
            words={[
              "MERN Stack Engineer",
              "Applied AI & RAG Developer",
              "Flutter Mobile Developer",
              "Data Science & AI Student",
            ]}
          />
        </div>

        {/* Subtitle */}
        <p
          className="mx-auto mt-8 max-w-3xl animate-rise text-pretty text-base leading-relaxed text-text-secondary md:text-lg"
          style={{ animationDelay: "0.4s" }}
        >
          Data Science &amp; AI Engineering student at{" "}
          <span className="font-medium text-text-primary">TEK-UP</span> shipping
          production-ready web (MERN) and mobile (Flutter) platforms, sovereign
          RAG systems, and intelligent products end to end.
        </p>

        {/* CTAs */}
        <div
          className="mt-11 flex animate-rise flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="shine group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple px-8 py-4 font-semibold text-background shadow-glow-cyan transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-purple sm:w-auto"
          >
            Explore My Work
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-accent-cyan/50 px-8 py-4 font-medium text-accent-cyan transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-cyan hover:bg-accent-cyan/10 sm:w-auto"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 font-medium text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/60 hover:text-accent-purple sm:w-auto"
          >
            Get in Touch
          </a>
        </div>

        {/* Telemetry strip */}
        <div
          className="mt-16 grid animate-rise grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="spotlight card group p-4 text-left md:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] tracking-wider text-text-muted md:text-[11px]">
                  {stat.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/70 shadow-[0_0_10px_var(--color-accent-cyan)] transition-transform duration-500 group-hover:scale-150" />
              </div>

              <Sparkline
                points={stat.spark}
                className="mt-3 h-7 w-full opacity-80"
                stroke="var(--color-accent-cyan)"
              />

              <div className="mt-3 text-2xl font-bold leading-none md:text-[2rem]">
                <span className="gradient-text metric-glow">
                  {stat.value !== undefined ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </span>
              </div>
              <div className="mt-1.5 text-[11px] leading-snug text-text-secondary md:text-xs">
                {stat.hint}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="group absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase transition-colors group-hover:text-accent-cyan">
          scroll
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border p-1.5 transition-colors group-hover:border-accent-cyan">
          <span className="h-3 w-1.5 animate-bounce rounded-full bg-accent-cyan" />
        </span>
      </a>
    </section>
  );
}
