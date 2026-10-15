"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const value = max > 0 ? doc.scrollTop / max : 0;
      setProgress(value);
      setVisible(doc.scrollTop > 700);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const circumference = 2 * Math.PI * 20;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-text-secondary backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-accent-cyan/50 hover:text-accent-cyan ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-border)" strokeWidth="1.5" />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="var(--color-accent-cyan)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          style={{ transition: "stroke-dashoffset 0.15s linear" }}
        />
      </svg>
      <svg
        className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
      </svg>
    </button>
  );
}
