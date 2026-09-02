"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { Parallax, ParallaxX } from "@/components/ui/Parallax";
import { ApplyButton } from "@/components/ui/Cta";
import { ArrowDown } from "@/components/ui/Icons";
import { AppHome, AppWorkout, PhoneShell } from "@/components/mockups/Phone";
import { MemberCard, RevenueCard } from "@/components/mockups/Cards";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Desktop headline: long / short / long / short rag, so the device cluster
   lands in the negative space instead of covering the sentence. */
function HeadlineDesktop() {
  return (
    <span aria-hidden="true" className="hidden md:block">
      <Mask delay={0.06}>
        <span>
          Don&rsquo;t <em className="t-serif">just</em> build
        </span>
      </Mask>
      <Mask delay={0.14}>An audience.</Mask>
      <Mask delay={0.22}>Build something</Mask>
      <Mask delay={0.3}>
        <span>
          You <span className="text-volt">own.</span>
        </span>
      </Mask>
    </span>
  );
}

/* Mobile is re-composed, not shrunk: shorter measure, six lines. */
function HeadlineMobile() {
  return (
    <span aria-hidden="true" className="block md:hidden">
      <Mask delay={0.05}>Don&rsquo;t</Mask>
      <Mask delay={0.11}>
        <span>
          <em className="t-serif">just</em> build
        </span>
      </Mask>
      <Mask delay={0.17}>An audience.</Mask>
      <Mask delay={0.23}>Build</Mask>
      <Mask delay={0.29}>Something</Mask>
      <Mask delay={0.35}>
        <span>
          You <span className="text-volt">own.</span>
        </span>
      </Mask>
    </span>
  );
}

function DeviceCluster() {
  const reduced = useReducedMotion();
  const float = (d: number) =>
    reduced
      ? {}
      : {
          animate: { y: [0, -13, 0] },
          transition: { duration: 8 + d, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <>
      {/* ---------- desktop cluster ---------- */}
      <div
        className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute right-[-7%] top-[11vh] xl:right-[-4%]">
          <Parallax distance={62}>
            <motion.div {...float(1.4)}>
              <PhoneShell className="[--ps:0.76] rotate-[11deg] xl:[--ps:0.84]">
                <AppWorkout />
              </PhoneShell>
            </motion.div>
          </Parallax>
        </div>

        <div className="absolute right-[6%] top-[24vh] xl:right-[8%]">
          <Parallax distance={-72}>
            <motion.div {...float(0)}>
              <PhoneShell className="[--ps:0.9] -rotate-[6deg] xl:[--ps:1.02]">
                <AppHome />
              </PhoneShell>
            </motion.div>
          </Parallax>
        </div>

        <motion.div
          className="absolute right-[25%] top-[13vh] xl:right-[27%]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
        >
          <motion.div {...float(2.6)}>
            <MemberCard className="rotate-[-4deg]" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-[37%] top-[55vh] xl:right-[34%] xl:top-[57vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.95, ease: EASE }}
        >
          <motion.div {...float(3.4)}>
            <RevenueCard className="rotate-[3deg]" />
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- mobile: one device, cropped by two edges ---------- */}
      <div
        className="pointer-events-none absolute bottom-[-11%] right-[-24%] z-0 block sm:right-[-14%] lg:hidden"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: EASE }}
        >
          <PhoneShell className="[--ps:0.62] rotate-[13deg] sm:[--ps:0.74]">
            <AppHome />
          </PhoneShell>
        </motion.div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-[68px] md:pt-[78px]"
    >
      <div className="gridlines" aria-hidden="true" />

      {/* voltage wash, top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-14%] h-[62vh] w-[62vw] rounded-full opacity-[0.55]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(217,255,67,0.13), transparent 62%)",
        }}
      />

      {/* diagonal accent crossing the composition */}
      <div
        aria-hidden="true"
        className="diagonal-rule left-[-10%] top-[84%] w-[130%] rotate-[-9deg] opacity-30"
      />

      {/* cropped outline word, bleeding both edges */}
      <ParallaxX
        from={-30}
        to={40}
        className="pointer-events-none absolute bottom-[-3.5vw] left-[-4vw] z-0 w-max"
      >
        <span
          aria-hidden="true"
          className="t-display t-outline t-condensed block whitespace-nowrap text-[26vw] leading-[0.7] opacity-45"
        >
          Ownership
        </span>
      </ParallaxX>

      <DeviceCluster />

      <div className="shell relative z-10 flex min-h-[calc(100svh-68px)] flex-col justify-between pb-10 pt-8 md:min-h-[calc(100svh-78px)] md:pb-12 md:pt-10">
        {/* --- top meta row --- */}
        <Reveal delay={0.1} y={14} className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="flex items-center gap-2.5">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="pulse-ring absolute inset-0 rounded-full bg-volt/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
            </span>
            <span className="t-eyebrow">Limited partner intake</span>
          </span>
          <span className="t-eyebrow hidden sm:inline">
            Revenue&nbsp;share&nbsp;·&nbsp;Not&nbsp;an&nbsp;agency
          </span>
        </Reveal>

        {/* --- headline --- */}
        <h1 className="t-display t-display-tight t-optical relative mt-10 max-w-[15ch] text-[13.2vw] sm:text-[12vw] md:mt-0 md:max-w-none md:text-[8.8vw] lg:text-[clamp(3.4rem,6.55vw,7rem)]">
          <span className="sr-only">
            Don&rsquo;t just build an audience. Build something you own.
          </span>
          <HeadlineDesktop />
          <HeadlineMobile />
        </h1>

        {/* --- bottom row --- */}
        <div className="mt-12 lg:mt-0">
          <Reveal delay={0.42} y={18}>
            <div className="hairline-x" />
          </Reveal>

          <div className="grid grid-cols-12 gap-y-8 pt-7 lg:gap-x-10">
            <Reveal delay={0.48} className="col-span-12 lg:col-span-5">
              <p className="t-lead max-w-[46ch] text-balance">
                We partner with ambitious creators to build premium digital
                products &mdash; and turn an audience into a business that
                keeps paying after the post stops trending.
              </p>
              <a
                href="#statement"
                data-cursor
                className="group mt-8 hidden items-center gap-3 lg:inline-flex"
                aria-label="Scroll to next section"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-bone-18 transition-colors duration-500 group-hover:border-volt">
                  <ArrowDown className="h-3.5 w-3.5 text-bone-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5 group-hover:text-volt" />
                </span>
                <span className="t-index text-[0.58rem] uppercase tracking-[0.24em] text-bone-34 transition-colors duration-500 group-hover:text-bone-70">
                  Scroll
                </span>
              </a>
            </Reveal>

            <Reveal
              delay={0.56}
              className="col-span-12 flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-7"
            >
              <ApplyButton size="lg" href={SITE.applyHref}>
                Apply to partner
              </ApplyButton>
              <p className="t-index max-w-[30ch] text-[0.66rem] uppercase leading-relaxed tracking-[0.16em] text-bone-34">
                Revenue-share partnerships for selected creators.
              </p>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
