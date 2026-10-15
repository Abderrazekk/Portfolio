"use client";

import { useEffect, useId, useRef, useState } from "react";

type SparklineProps = {
  points: number[];
  className?: string;
  stroke?: string;
  height?: number;
  width?: number;
};

export default function Sparkline({
  points,
  className = "",
  stroke = "var(--color-accent-cyan)",
  height = 34,
  width = 120,
}: SparklineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const id = useId().replace(/[:]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const pad = 3;
  const stepX = (width - pad * 2) / Math.max(points.length - 1, 1);

  const coords = points.map((p, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - (p - min) / range) * (height - pad * 2);
    return [x, y] as const;
  });

  const line = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`;

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <linearGradient id={`spark-fill-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={area}
          fill={`url(#spark-fill-${id})`}
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.3s" }}
        />
        <polyline
          points={line}
          fill="none"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        {coords.length > 0 && (
          <circle
            cx={coords[coords.length - 1][0]}
            cy={coords[coords.length - 1][1]}
            r="2.4"
            fill={stroke}
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 1.2s" }}
          />
        )}
      </svg>
    </div>
  );
}
