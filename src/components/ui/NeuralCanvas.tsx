"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Signal = { a: number; b: number; t: number; speed: number };

type NeuralCanvasProps = {
  className?: string;
  /** Roughly how many nodes per 100k px² of canvas area. */
  density?: number;
  maxNodes?: number;
  linkDistance?: number;
  interactive?: boolean;
};

/**
 * Lightweight canvas neural-network field: drifting nodes, proximity links and
 * travelling "signals" along the edges. Pauses when offscreen and renders a
 * single static frame when the user prefers reduced motion.
 */
export default function NeuralCanvas({
  className = "",
  density = 24,
  maxNodes = 88,
  linkDistance = 158,
  interactive = true,
}: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const canInteract = interactive && fine && !reduce;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    let raf = 0;
    let running = false;
    let last = 0;
    let spawnAcc = 0;
    const pointer = { x: -9999, y: -9999 };

    const seed = () => {
      const count = Math.min(
        maxNodes,
        Math.max(22, Math.round(((width * height) / 100000) * density))
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() * 1.5 + 0.8,
      }));
      signals = [];
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // --- links -------------------------------------------------------
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDistance) continue;
          const strength = 1 - dist / linkDistance;
          ctx.strokeStyle = `rgba(34, 211, 238, ${strength * 0.17})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // --- pointer halo ------------------------------------------------
      if (canInteract && pointer.x > -1000) {
        for (const n of nodes) {
          const dist = Math.hypot(n.x - pointer.x, n.y - pointer.y);
          if (dist > 200) continue;
          const strength = 1 - dist / 200;
          ctx.strokeStyle = `rgba(168, 85, 247, ${strength * 0.32})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      // --- signals travelling along nearby edges -----------------------
      if (!reduce) {
        spawnAcc += dt;
        if (spawnAcc > 900 && nodes.length > 2) {
          spawnAcc = 0;
          const a = Math.floor(Math.random() * nodes.length);
          let best = -1;
          let bestDist = linkDistance;
          for (let k = 0; k < nodes.length; k++) {
            if (k === a) continue;
            const d = Math.hypot(nodes[a].x - nodes[k].x, nodes[a].y - nodes[k].y);
            if (d < bestDist) {
              bestDist = d;
              best = k;
            }
          }
          if (best >= 0) {
            signals.push({ a, b: best, t: 0, speed: 0.0006 + Math.random() * 0.0009 });
          }
        }

        signals = signals.filter((s) => s.t < 1);
        for (const s of signals) {
          s.t += dt * s.speed;
          const from = nodes[s.a];
          const to = nodes[s.b];
          if (!from || !to) continue;
          const x = from.x + (to.x - from.x) * s.t;
          const y = from.y + (to.y - from.y) * s.t;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 7);
          glow.addColorStop(0, "rgba(232, 237, 247, 0.9)");
          glow.addColorStop(0.4, "rgba(34, 211, 238, 0.5)");
          glow.addColorStop(1, "rgba(34, 211, 238, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // --- nodes -------------------------------------------------------
      for (const n of nodes) {
        if (!reduce && dt) {
          n.x += n.vx * dt * 0.06;
          n.y += n.vy * dt * 0.06;

          if (canInteract) {
            const dist = Math.hypot(n.x - pointer.x, n.y - pointer.y);
            if (dist < 130 && dist > 0.01) {
              const force = (1 - dist / 130) * 0.9;
              n.x += ((n.x - pointer.x) / dist) * force;
              n.y += ((n.y - pointer.y) / dist) * force;
            }
          }

          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;
        }

        ctx.fillStyle = "rgba(147, 197, 253, 0.75)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw(0);
    };

    const loop = (now: number) => {
      const dt = Math.min(now - last, 48);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(wrap);

    if (canInteract) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [density, maxNodes, linkDistance, interactive]);

  return (
    <div ref={wrapRef} aria-hidden className={`pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
