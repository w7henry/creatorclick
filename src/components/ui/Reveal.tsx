"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Masked line reveal — the workhorse for display typography.
 * The outer element clips, the inner element slides up from below the mask.
 */
export function Mask({
  children,
  delay = 0,
  duration = 1.05,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  // The trigger lives on the *clipping* element. Observing the inner span
  // instead would never fire: it starts translated fully outside the mask,
  // so IntersectionObserver reports zero intersection forever.
  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      /* The window is taller than the line box so a serif ascender or
         descender is never sliced; negative margins keep the rhythm. */
      style={{
        paddingTop: "0.36em",
        paddingBottom: "0.32em",
        marginTop: "-0.36em",
        marginBottom: "-0.32em",
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.span
        className="block will-change-transform"
        variants={
          reduced
            ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
            : { hidden: { y: "200%" }, show: { y: "0%" } }
        }
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** Generic fade + rise. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.9,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function Stagger({
  children,
  className = "",
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself horizontally when scrolled into view. */
export function DrawRule({
  className = "",
  delay = 0,
  origin = "left",
}: {
  className?: string;
  delay?: number;
  origin?: "left" | "right";
}) {
  return (
    <motion.div
      className={`h-px w-full bg-[var(--color-rule)] ${className}`}
      style={{ transformOrigin: origin }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    />
  );
}
