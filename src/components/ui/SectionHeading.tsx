import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/50 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--color-accent-cyan)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={`mt-4 max-w-2xl text-text-secondary ${
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
