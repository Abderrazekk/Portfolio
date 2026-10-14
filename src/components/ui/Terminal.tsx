"use client";

import { useEffect, useRef, useState } from "react";

type Entry = { cmd: string; out: string; outClass?: string };

export default function Terminal({ entries }: { entries: Entry[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [entryIndex, setEntryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduce) {
          requestAnimationFrame(() => {
            setEntryIndex(entries.length);
            setShowOutput(true);
          });
        } else {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [entries.length]);

  useEffect(() => {
    if (!started) return;
    if (entryIndex >= entries.length) return;

    const current = entries[entryIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!showOutput && charIndex < current.cmd.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 34);
    } else if (!showOutput) {
      timeout = setTimeout(() => setShowOutput(true), 260);
    } else {
      timeout = setTimeout(() => {
        setShowOutput(false);
        setCharIndex(0);
        setEntryIndex((i) => i + 1);
      }, 420);
    }
    return () => clearTimeout(timeout);
  }, [started, entryIndex, charIndex, showOutput, entries]);

  const done = entryIndex >= entries.length;

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border/80 bg-background/80 p-6 font-mono text-[13px] leading-relaxed shadow-2xl backdrop-blur-sm sm:text-sm"
    >
      {/* window chrome */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-text-muted">
          abderazek@tek-up: ~/portfolio
        </span>
      </div>

      <div className="space-y-3">
        {entries.map((entry, i) => {
          const isDone = i < entryIndex;
          const isCurrent = i === entryIndex && !done;
          if (i > entryIndex) return null;
          return (
            <div key={entry.cmd} className="space-y-1">
              <p className="text-text-secondary">
                <span className="mr-2 text-accent-cyan">$</span>
                {isDone ? entry.cmd : entry.cmd.slice(0, charIndex)}
                {isCurrent && !showOutput && (
                  <span className="ml-0.5 inline-block h-4 w-2 -translate-y-0.5 animate-blink bg-accent-cyan align-middle" />
                )}
              </p>
              {(isDone || (isCurrent && showOutput)) && (
                <p className={`whitespace-pre-line ${entry.outClass ?? "text-accent-emerald"} animate-fade-down`}>
                  {entry.out}
                </p>
              )}
            </div>
          );
        })}

        {done && (
          <p className="text-text-secondary">
            <span className="mr-2 text-accent-cyan">$</span>
            <span className="inline-block h-4 w-2 animate-blink bg-accent-cyan align-middle" />
          </p>
        )}
      </div>

      {/* scanline glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent-cyan/[0.06] to-transparent" />
    </div>
  );
}
