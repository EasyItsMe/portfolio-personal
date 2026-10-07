"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // in pixels
  cascade?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  direction = "up",
  distance = 24,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element is already in viewport on mount (e.g. Hero / top of page)
    const element = domRef.current;
    if (!element) return;

    // Use IntersectionObserver for scroll-triggered reveal
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(0.985)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(0.985)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "none":
        return "translate3d(0, 0, 0) scale(0.98)";
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
      }}
      className={`will-change-[transform,opacity] transition-[transform,opacity] ${className}`}
    >
      {children}
    </div>
  );
}
