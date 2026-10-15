"use client";

import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name: string;
  level: number;
  gradient: string;
  delay?: number;
  /** Hide the built-in "name — level%" row (useful when a parent renders its own label). */
  showMeta?: boolean;
};

export default function SkillBar({
  name,
  level,
  gradient,
  delay = 0,
  showMeta = true,
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {showMeta && (
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-text-secondary">{name}</span>
          <span className="font-mono text-xs text-text-muted">{level}%</span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-background ring-1 ring-border/50">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} shadow-[0_0_12px_-2px_currentColor]`}
          style={{
            width: visible ? `${level}%` : "0%",
            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
