"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Scroll-linked translate/rotate/scale. Springs are deliberately soft —
 * parallax should read as depth, never as an effect.
 */
export function Parallax({
  children,
  distance = 90,
  rotate = 0,
  scaleFrom,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  rotate?: number;
  scaleFrom?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Tight enough to track the scroll closely — a soft spring reads as lag
  // rather than as depth.
  const spring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.28,
  });

  const y = useTransform(spring, [0, 1], [distance, -distance]);
  const r = useTransform(spring, [0, 1], [rotate, -rotate]);
  const s = useTransform(spring, [0, 0.5, 1], [scaleFrom ?? 1, 1, scaleFrom ?? 1]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        rotate: rotate ? r : undefined,
        scale: scaleFrom ? s : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}

/** Horizontal drift, used for oversized type that bleeds past the viewport. */
export function ParallaxX({
  children,
  from = 0,
  to = -160,
  className = "",
}: {
  children: ReactNode;
  from?: number;
  to?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });
  const x = useTransform(spring, [0, 1], [from, to]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ x }}>
      {children}
    </motion.div>
  );
}
