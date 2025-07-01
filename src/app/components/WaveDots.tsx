"use client";

import { useEffect, useState } from "react";

const rows = 50;
const spacingX = 20;
const spacingY = 20;
const dotRadius = 1.1; // smaller dots
const verticalCenter = 180;
const amplitude = 60;
const frequency = 0.045;
const phaseShift = Math.PI / 4;
const color = "#8f1e9a"; // light purple

const WaveDots = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cols = Math.ceil(width / spacingX) + 2;
  const circles = [];

  if (!mounted) return null;

  for (let i = 0; i < cols; i++) {
    // Multiple overlapping sine waves for complexity
    const baseY =
      Math.sin(i * frequency) * amplitude +
      Math.sin(i * frequency * 1.7 + phaseShift) * (amplitude * 0.5) +
      Math.sin(i * frequency * 2.3 - phaseShift) * (amplitude * 0.3);
    for (let j = 0; j < rows; j++) {
      // Spread dots vertically around the wave
      const cx = i * spacingX;
      const cy = verticalCenter + baseY + (j - rows / 2) * spacingY * 0.7;
      // Fade out dots further from the center
      const opacity = 0.9 - Math.abs(j - rows / 2) * 0.05;
      circles.push(
        <circle
          key={`${i}-${j}`}
          cx={cx}
          cy={cy}
          r={dotRadius}
          fill={color}
          opacity={opacity}
        />
      );
    }
  }

  return (
    <svg
      width="100%"
      height="400"
      viewBox={`0 0 ${width} 400`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 bottom-0 w-full max-h-[400px] pointer-events-none select-none"
      aria-hidden="true"
    >
      {circles}
    </svg>
  );
};

export default WaveDots;
