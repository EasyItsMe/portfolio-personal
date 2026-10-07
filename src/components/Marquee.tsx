"use client";

import React, { useRef, useEffect } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // pixels per second
  pauseOnHover?: boolean;
  className?: string;
  gap?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className = "",
  gap = "gap-4",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const speedRef = useRef(speed);
  const directionRef = useRef(direction);
  const pauseOnHoverRef = useRef(pauseOnHover);

  speedRef.current = speed;
  directionRef.current = direction;
  pauseOnHoverRef.current = pauseOnHover;

  useEffect(() => {
    const track = trackRef.current;
    const firstBlock = firstBlockRef.current;
    if (!track || !firstBlock) return;

    if (offsetRef.current === null) {
      offsetRef.current = directionRef.current === "left" ? 0 : -firstBlock.offsetWidth;
    }

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const singleWidth = firstBlock.offsetWidth;

      if (singleWidth > 0 && (!isHoveredRef.current || !pauseOnHoverRef.current)) {
        const currentSpeed = speedRef.current;
        const currentDir = directionRef.current;

        if (currentDir === "left") {
          offsetRef.current! -= currentSpeed * delta;
          if (offsetRef.current! <= -singleWidth) {
            offsetRef.current! += singleWidth;
          }
        } else {
          offsetRef.current! += currentSpeed * delta;
          if (offsetRef.current! >= 0) {
            offsetRef.current! -= singleWidth;
          }
        }
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] ${className}`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onTouchStart={() => {
        isHoveredRef.current = true;
      }}
      onTouchEnd={() => {
        isHoveredRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform select-none items-stretch"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div ref={firstBlockRef} className={`flex shrink-0 items-stretch ${gap} pr-4`}>
          {children}
        </div>
        <div className={`flex shrink-0 items-stretch ${gap} pr-4`}>
          {children}
        </div>
        <div className={`flex shrink-0 items-stretch ${gap} pr-4`}>
          {children}
        </div>
      </div>
    </div>
  );
}
