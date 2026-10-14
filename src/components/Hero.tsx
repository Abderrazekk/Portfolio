import Aurora from "@/components/ui/Aurora";
import Counter from "@/components/ui/Counter";
import Typewriter from "@/components/ui/Typewriter";

const stats: {
  value?: number;
  text?: string;
  suffix?: string;
  label: string;
}[] = [
  { value: 7, suffix: "+", label: "Real-World Projects" },
  { value: 3, suffix: "+", label: "Client & Internship Roles" },
  { value: 9, suffix: "+", label: "Certifications Earned" },
  { text: "TEK-UP", label: "Data Science & AI" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <Aurora />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-4 py-2 backdrop-blur-md"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-emerald" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
          </span>
          <span className="text-xs text-text-secondary sm:text-sm">
            Available for Opportunities · Tunisia &amp; Remote
          </span>
        </div>

        {/* Eyebrow */}
        <p
          className="mt-8 animate-rise font-mono text-sm tracking-wide text-accent-cyan md:text-base"
          style={{ animationDelay: "0.12s" }}
        >
          <span className="text-text-muted">&lt;/&gt;</span> Hello, I&apos;m
          Abderazek Benhadjmbarek
        </p>

        {/* Heading */}
        <h1
          className="mt-4 animate-rise text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-text-primary">Full Stack &amp; AI</span>
          <span className="gradient-text gradient-text-animated block text-glow">
            Developer
          </span>
        </h1>

        {/* Typewriter roles */}
        <div
          className="mt-6 flex animate-rise items-center justify-center gap-2 font-mono text-lg text-text-secondary md:text-2xl"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-accent-purple">&gt;</span>
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
          className="mx-auto mt-8 max-w-3xl animate-rise text-base leading-relaxed text-text-secondary md:text-lg"
          style={{ animationDelay: "0.4s" }}
        >
          Data Science &amp; AI Engineering student at{" "}
          <span className="font-medium text-text-primary">TEK-UP</span> with proven
          experience in production-ready web (MERN) and mobile (Flutter)
          development, integrating applied AI, sovereign RAG platforms, and
          intelligent system solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex animate-rise flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="shine group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple px-8 py-4 font-semibold text-background shadow-glow-cyan transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-purple sm:w-auto"
          >
            Explore My Projects
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            Download CV
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 font-medium text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/60 hover:text-accent-purple sm:w-auto"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid animate-rise grid-cols-2 gap-4 md:grid-cols-4"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="spotlight group rounded-2xl border border-border/60 bg-surface/40 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40"
            >
              <div className="text-2xl font-bold md:text-4xl">
                <span className="gradient-text">
                  {stat.value !== undefined ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </span>
              </div>
              <div className="mt-1 text-xs text-text-secondary md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border p-1.5 transition-colors hover:border-accent-cyan">
          <div className="h-3 w-1.5 animate-bounce rounded-full bg-accent-cyan" />
        </div>
      </a>
    </section>
  );
}
