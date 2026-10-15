import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: number;
};

export default function Marquee({
  children,
  reverse = false,
  className = "",
  speed,
}: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden mask-fade-x ${className}`}>
      <div
        className={`flex shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
        style={speed ? { animationDuration: `${speed}s` } : undefined}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
