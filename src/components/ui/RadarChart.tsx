"use client";

import { useEffect, useRef, useState } from "react";

export type RadarDatum = { label: string; value: number };

type RadarChartProps = {
  data: RadarDatum[];
  className?: string;
  color?: string;
};

export default function RadarChart({
  data,
  className = "",
  color = "var(--color-accent-cyan)",
}: RadarChartProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 112;
  const rings = [0.25, 0.5, 0.75, 1];
  const count = data.length;

  const point = (index: number, ratio: number) => {
    const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
    return [cx + Math.cos(angle) * radius * ratio, cy + Math.sin(angle) * radius * ratio] as const;
  };

  const ringPath = (ratio: number) =>
    data
      .map((_, i) => {
        const [x, y] = point(i, ratio);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  const valuePath = data
    .map((d, i) => {
      const [x, y] = point(i, Math.max(0.06, Math.min(1, d.value / 100)));
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div ref={ref} className={className}>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full" role="img" aria-label="Skill proficiency radar">
        <defs>
          <linearGradient id="radar-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-accent-cyan)" stopOpacity="0.42" />
            <stop offset="100%" stopColor="var(--color-accent-purple)" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        {/* grid rings */}
        {rings.map((ratio) => (
          <polygon
            key={ratio}
            points={ringPath(ratio)}
            fill="none"
            stroke="var(--color-border)"
            strokeOpacity={ratio === 1 ? 0.9 : 0.5}
            strokeWidth="1"
          />
        ))}

        {/* axes */}
        {data.map((d, i) => {
          const [x, y] = point(i, 1);
          return (
            <line
              key={d.label}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="var(--color-border)"
              strokeOpacity="0.55"
              strokeWidth="1"
            />
          );
        })}

        {/* value area */}
        <polygon
          points={valuePath}
          fill="url(#radar-fill)"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 0.35s" }}
        />
        <polygon
          points={valuePath}
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)",
            filter: "drop-shadow(0 0 10px rgba(34,211,238,0.35))",
          }}
        />

        {/* vertices + labels */}
        {data.map((d, i) => {
          const ratio = Math.max(0.06, Math.min(1, d.value / 100));
          const [x, y] = point(i, ratio);
          const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
          const lx = cx + Math.cos(angle) * (radius + 30);
          const ly = cy + Math.sin(angle) * (radius + 24);
          const anchor = Math.cos(angle) > 0.35 ? "start" : Math.cos(angle) < -0.35 ? "end" : "middle";
          const dy = Math.sin(angle) > 0.55 ? 12 : Math.sin(angle) < -0.55 ? -4 : 4;
          return (
            <g key={`node-${d.label}`}>
              <circle
                cx={x}
                cy={y}
                r="3"
                fill="var(--color-background)"
                stroke={color}
                strokeWidth="1.6"
                style={{ opacity: visible ? 1 : 0, transition: `opacity 0.4s ease ${0.9 + i * 0.06}s` }}
              />
              <text
                x={lx}
                y={ly}
                dy={dy}
                textAnchor={anchor}
                fill="var(--color-text-secondary)"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.02em" }}
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
