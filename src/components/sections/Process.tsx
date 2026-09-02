"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";

const STEPS = [
  {
    n: "01",
    title: "Apply",
    body: "Tell us about your audience, your brand and what you actually want to build. We read every application ourselves.",
    meta: "You · 10 minutes",
  },
  {
    n: "02",
    title: "Strategy",
    body: "Together we find the strongest product opportunity hiding inside your content — and the shortest honest route to revenue.",
    meta: "Together · 1–2 weeks",
  },
  {
    n: "03",
    title: "Build",
    body: "Brand, product design, engineering, payments and infrastructure. We build the whole thing, end to end.",
    meta: "Us · 8–14 weeks",
  },
  {
    n: "04",
    title: "Launch",
    body: "You introduce it to the audience you already spent years earning. We handle everything behind the curtain.",
    meta: "Together · Launch window",
  },
  {
    n: "05",
    title: "Grow",
    body: "Retention, pricing, new products, new cohorts. The partnership starts at launch — it does not end there.",
    meta: "Ongoing · Revenue share",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 75%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.3,
  });

  return (
    <section id="process" className="relative py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <SectionTag index="02" label="How it works" />
            <h2 className="t-display t-display-tight t-optical mt-8 text-[14.5vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.2vw,7.9rem)]">
              <Mask>From content</Mask>
              <Mask delay={0.08}>
                <span>
                  To <span className="t-serif">company.</span>
                </span>
              </Mask>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end lg:pb-3">
            <Reveal delay={0.18}>
              <p className="t-body max-w-[32ch]">
                Five stages. One partner across all of them. No handover to a
                junior team after the pitch.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------- timeline ---------- */}
        <div className="mt-20 grid grid-cols-12 gap-y-12 md:mt-28 lg:gap-x-12">
          {/* sticky stage indicator */}
          <div className="col-span-12 hidden lg:col-span-4 lg:block">
            <div className="sticky top-[26vh]">
              <div className="relative h-[8.5rem] overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={STEPS[active].n}
                    className="t-display t-condensed absolute inset-0 block text-[9rem] leading-none text-volt"
                    initial={{ y: "60%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-60%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {STEPS[active].n}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="relative mt-2 h-[3rem] overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={STEPS[active].title}
                    className="t-display absolute inset-0 block text-[2.2rem] leading-none"
                    initial={{ y: "70%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-70%", opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {STEPS[active].title}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="mt-9 flex gap-1.5">
                {STEPS.map((s, i) => (
                  <span
                    key={s.n}
                    className="h-[2px] flex-1 origin-left transition-colors duration-500"
                    style={{
                      background:
                        i <= active ? "#D9FF43" : "rgba(242,240,234,0.12)",
                    }}
                  />
                ))}
              </div>
              <p className="t-index mt-4 text-[0.6rem] uppercase tracking-[0.2em] text-bone-34">
                Stage {active + 1} of {STEPS.length}
              </p>
            </div>
          </div>

          {/* steps */}
          <div ref={trackRef} className="relative col-span-12 lg:col-span-7 lg:col-start-6">
            {/* spine */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-rule)]"
            />
            <motion.div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-px origin-top bg-volt"
              style={{ scaleY: fill }}
            />

            <ol>
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.n}
                  onViewportEnter={() => setActive(i)}
                  viewport={{ margin: "-48% 0px -48% 0px", amount: 0 }}
                  className="group relative pl-8 md:pl-14"
                >
                  <div className="border-b border-[var(--color-rule)] py-9 md:py-12">
                    <span
                      className="absolute left-0 top-[3.05rem] h-2 w-2 -translate-x-[3.5px] rounded-full transition-all duration-500 md:top-[4.05rem]"
                      style={{
                        background: i <= active ? "#D9FF43" : "#2A2A2E",
                        boxShadow:
                          i === active ? "0 0 0 5px rgba(217,255,67,0.14)" : "none",
                      }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <span
                        className="t-index text-[0.62rem] transition-colors duration-500"
                        style={{ color: i <= active ? "#D9FF43" : "rgba(242,240,234,0.34)" }}
                      >
                        {step.n}
                      </span>
                      <h3
                        className="t-display text-[2.3rem] leading-none transition-colors duration-500 sm:text-[3rem] lg:hidden"
                        style={{ color: i === active ? "#F2F0EA" : "rgba(242,240,234,0.5)" }}
                      >
                        {step.title}
                      </h3>
                      <h3 className="t-display hidden text-[2.6rem] leading-none lg:block">
                        {step.title}
                      </h3>
                      <span className="t-index ml-auto text-[0.56rem] uppercase tracking-[0.18em] text-bone-34">
                        {step.meta}
                      </span>
                    </div>
                    <p className="t-body mt-4 max-w-[46ch]">{step.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
