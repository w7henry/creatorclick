"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { OwnershipCard } from "@/components/mockups/Cards";

const NODES = [
  { i: "01", title: "Content", body: "What you already make every day." },
  { i: "02", title: "Audience", body: "The trust that content earned you." },
  { i: "03", title: "Digital product", body: "A thing they can actually buy." },
  { i: "04", title: "Customers", body: "Followers with a receipt and a login." },
  { i: "05", title: "Recurring revenue", body: "Income that does not need the algorithm." },
];

/* Horizontal indent per step (percent of the column) — the chain descends
   diagonally rather than stacking in a dull vertical list. */
const OFFSET = [0, 7, 14, 21, 28];

/* Static classes so Tailwind can see them at build time. */
const INDENT = [
  "md:ml-0",
  "md:ml-[7%]",
  "md:ml-[14%]",
  "md:ml-[21%]",
  "md:ml-[28%]",
];

function Connector({ from, to }: { from: number; to: number }) {
  const reduced = useReducedMotion();
  const x1 = from + 5;
  const x2 = to + 5;
  return (
    <svg
      viewBox="0 0 100 76"
      preserveAspectRatio="none"
      className="h-[3.4rem] w-full md:h-[4.4rem]"
      aria-hidden="true"
    >
      <motion.path
        d={`M ${x1} 0 C ${x1} 42, ${x2} 30, ${x2} 76`}
        fill="none"
        stroke="rgba(217,255,67,0.5)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

function Node({
  node,
  last,
}: {
  node: (typeof NODES)[number];
  last: boolean;
}) {
  return (
    <div
      data-cursor
      className={`group relative flex w-full items-start gap-5 rounded-[18px] border px-5 py-5 transition-colors duration-500 md:w-[68%] md:px-7 md:py-6 ${
        last
          ? "border-volt/45 bg-volt/[0.07]"
          : "border-[var(--color-rule)] bg-[rgba(242,240,234,0.018)] hover:border-bone-18"
      }`}
    >
      <span
        className={`t-index pt-1 text-[0.62rem] ${last ? "text-volt" : "text-bone-34"}`}
      >
        {node.i}
      </span>
      <div className="min-w-0">
        <p
          className={`t-display text-[1.5rem] leading-none md:text-[1.85rem] ${
            last ? "text-volt" : ""
          }`}
        >
          {node.title}
        </p>
        <p className="t-body mt-2.5 text-[0.9rem]">{node.body}</p>
      </div>
      {last && (
        <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-volt">
          <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-ink" aria-hidden="true">
            <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="3" />
          </svg>
        </span>
      )}
    </div>
  );
}

export function Opportunity({ as: H = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section
      id="opportunity"
      className="relative bg-ink-2 py-24 md:py-36"
    >
      <div className="gridlines" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-14%] top-[24%] h-[46vh] w-[46vw] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(217,255,67,0.10), transparent 65%)",
        }}
      />

      <div className="shell relative grid grid-cols-12 gap-y-16 lg:gap-x-12">
        {/* sticky statement */}
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-[22vh]">
            <SectionTag index="01" label="The opportunity" />
            <H className="t-display t-display-tight t-optical mt-8 text-[15vw] leading-[0.82] sm:text-[12vw] lg:text-[clamp(3rem,5.6vw,6.2rem)]">
              <Mask>Turn</Mask>
              <Mask delay={0.07}>Attention</Mask>
              <Mask delay={0.14}>Into</Mask>
              <Mask delay={0.21}>
                <span className="text-volt">Ownership.</span>
              </Mask>
            </H>
            <Reveal delay={0.3}>
              <p className="t-body mt-9 max-w-[38ch]">
                We build the infrastructure behind a personal brand &mdash; the
                unglamorous machinery that turns an audience into a company.
              </p>
            </Reveal>
            <Reveal delay={0.38} className="mt-10 hidden lg:block">
              <OwnershipCard className="w-[15.5rem] -rotate-[3deg]" />
            </Reveal>
          </div>
        </div>

        {/* the chain */}
        <div className="relative col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="relative">
            {NODES.map((node, i) => (
              <div key={node.i}>
                <div className={INDENT[i]}>
                  <Reveal delay={0.04 * i} y={22}>
                    <Node node={node} last={i === NODES.length - 1} />
                  </Reveal>
                </div>
                {i < NODES.length - 1 && (
                  <div className="hidden md:block">
                    <Connector from={OFFSET[i]} to={OFFSET[i + 1]} />
                  </div>
                )}
                {i < NODES.length - 1 && (
                  <div className="md:hidden">
                    <Connector from={4} to={4} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
