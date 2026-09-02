"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A trailing ring that sits behind the native cursor (the OS cursor stays
 * visible — hiding it costs more usability than the effect is worth).
 * Desktop pointers only, and disabled under reduced-motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 34, mass: 0.28 });
  const sy = useSpring(y, { stiffness: 380, damping: 34, mass: 0.28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;
    setEnabled(true);

    function move(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const el = (event.target as HTMLElement | null)?.closest(
        "a, button, [data-cursor]"
      );
      setActive(Boolean(el));
    }
    function leave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[95] hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.span
        className="block rounded-full border border-volt"
        animate={{
          width: active ? 46 : 26,
          height: active ? 46 : 26,
          opacity: visible ? (active ? 0.95 : 0.42) : 0,
          x: active ? -23 : -13,
          y: active ? -23 : -13,
          backgroundColor: active
            ? "rgba(217,255,67,0.10)"
            : "rgba(217,255,67,0)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      />
    </motion.div>
  );
}
