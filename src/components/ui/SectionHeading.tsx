import type { ReactNode } from "react";
import Reveal from "./Reveal";

export type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  index?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  index,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-accent-cyan/60 sm:block" />
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-4 py-1.5 font-mono text-[11px] tracking-[0.22em] uppercase text-accent-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--color-accent-cyan)]" />
            {eyebrow}
          </span>
          {index && (
            <span className="hidden font-mono text-[11px] tracking-[0.2em] text-text-muted sm:block">
              {index}
            </span>
          )}
          <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-accent-purple/60 sm:block" />
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="text-balance mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={140}>
          <p
            className={`text-pretty mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
