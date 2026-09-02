"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Plate } from "@/components/ui/Plate";
import { SectionTag } from "@/components/ui/SectionTag";

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const aOpacity = useTransform(scrollYProgress, [0.02, 0.16, 0.36, 0.46], [0, 1, 1, 0]);
  const aY = useTransform(scrollYProgress, [0.02, 0.46], [40, -70]);

  const bOpacity = useTransform(scrollYProgress, [0.44, 0.56, 0.84, 0.95], [0, 1, 1, 0.15]);
  const bY = useTransform(scrollYProgress, [0.44, 0.95], [70, -50]);

  const copyOpacity = useTransform(scrollYProgress, [0.6, 0.72], [0, 1]);
  const plateScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const plateOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 0.3, 0.3, 0.08]);

  const s = (v: unknown) => (reduced ? undefined : (v as never));

  return (
    <section ref={ref} id="philosophy" className="relative h-[190vh] md:h-[260vh]">
      <div
        className="sticky top-0 flex h-[100svh] items-center overflow-hidden"
        style={{
          ["--fw" as string]: "clamp(10px, 1.5vw, 24px)",
          /* start below the fixed header so all four bars read as one frame */
          ["--fh" as string]: "var(--header-h)",
        }}
      >
        {/* Clay frame: while the section is pinned it reads as a plate —
            a picture held inside the page rather than another dark band. */}
        <div className="plate-frame pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="plate-frame-bar inset-x-0 top-[var(--fh)] h-[var(--fw)]" />
          <span className="plate-frame-bar inset-x-0 bottom-0 h-[var(--fw)]" />
          <span className="plate-frame-bar bottom-0 left-0 top-[var(--fh)] w-[var(--fw)]" />
          <span className="plate-frame-bar bottom-0 right-0 top-[var(--fh)] w-[var(--fw)]" />
        </div>

        {/* cinematic backdrop */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ scale: s(plateScale), opacity: s(plateOpacity) }}
        >
          <Plate
            src="/sculpte/cover-fullbody.webp"
            alt=""
            ratio="auto"
            className="h-full w-full border-0"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(75% 60% at 50% 50%, rgba(11,11,12,0.55), rgba(11,11,12,0.94))",
          }}
        />

        <div className="shell relative w-full">
          <SectionTag index="04" label="Philosophy" className="mb-10 md:mb-14" />

          <div className="relative h-[42vh] sm:h-[38vh] lg:h-[34vh]">
            <motion.p
              className="t-display t-display-tight t-optical absolute inset-x-0 top-0 text-[13vw] leading-[0.84] sm:text-[10.5vw] lg:text-[clamp(3rem,6.6vw,7.2rem)]"
              style={{ opacity: s(aOpacity), y: s(aY) }}
            >
              Creators built
              <br />
              the new media.
            </motion.p>

            <motion.p
              className="t-display t-display-tight t-optical absolute inset-x-0 top-0 text-[13vw] leading-[0.84] sm:text-[10.5vw] lg:text-[clamp(3rem,6.6vw,7.2rem)]"
              style={{ opacity: s(bOpacity), y: s(bY) }}
            >
              Now they should
              <br />
              <span className="text-volt">own the business.</span>
            </motion.p>
          </div>

          <motion.div
            className="mt-4 max-w-[52ch] space-y-4"
            style={{ opacity: s(copyOpacity) }}
          >
            <p className="t-body">
              The internet handed creators the ability to build an audience
              faster than any institution ever could. But building an audience
              and building a business are two entirely different crafts.
            </p>
            <p className="t-body text-bone">
              We exist to close that gap &mdash; turning trust into products,
              products into businesses, and businesses into something you
              actually own.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
