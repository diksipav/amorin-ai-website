"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`scroll-text ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealText;
