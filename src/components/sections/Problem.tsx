"use client";

import { Mask, Reveal, DrawRule } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionTag } from "@/components/ui/SectionTag";

const FRAGMENTS = [
  {
    k: "Reach",
    title: "Your reach is down this week",
    meta: "Platform notice",
    icon: (
      <path d="M4 7l7 7 3.5-3.5L20 17M20 17h-5m5 0v-5" stroke="currentColor" strokeWidth="1.8" />
    ),
  },
  {
    k: "Deal",
    title: "This campaign has ended",
    meta: "Brand partnership",
    icon: <path d="M5 8h14v11H5V8Zm4 0V6h6v2" stroke="currentColor" strokeWidth="1.8" />,
  },
  {
    k: "Algo",
    title: "We've updated how content is ranked",
    meta: "Algorithm update",
    icon: (
      <path
        d="M12 4v4m0 8v4m8-8h-4M8 12H4m11.7-5.7-2.8 2.8m-2.8 2.8-2.8 2.8m11.2 0-2.8-2.8M9.1 9.1 6.3 6.3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    ),
  },
  {
    k: "Payout",
    title: "Payout threshold not reached",
    meta: "Creator fund",
    icon: (
      <path d="M4 6h16v12H4V6Zm4 6h8" stroke="currentColor" strokeWidth="1.8" />
    ),
  },
];

function Fragment({
  item,
  className = "",
}: {
  item: (typeof FRAGMENTS)[number];
  className?: string;
}) {
  return (
    <div className={`glass w-[16.5rem] rounded-[14px] px-4 py-3.5 ${className}`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-bone-18 text-bone-50">
          <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            {item.icon}
          </svg>
        </span>
        <div>
          <p className="text-[0.82rem] font-medium leading-snug tracking-[-0.01em] text-bone-70">
            {item.title}
          </p>
          <p className="t-index mt-1.5 text-[0.55rem] uppercase tracking-[0.18em] text-bone-34">
            {item.meta}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-24 md:py-36">
      <div className="shell grid grid-cols-12 gap-y-14">
        <div className="col-span-12 lg:col-span-7">
          <SectionTag index="02" label="The problem" />
          <h2 className="t-display t-display-tight t-optical mt-8 text-[13.5vw] leading-[0.83] sm:text-[11.5vw] lg:text-[clamp(3.2rem,6.9vw,7.6rem)]">
            <Mask>Millions</Mask>
            <Mask delay={0.07}>of views.</Mask>
            <Mask delay={0.14}>
              <span className="t-outline">Zero</span>
            </Mask>
            <Mask delay={0.21}>
              <span className="t-outline">ownership.</span>
            </Mask>
          </h2>
        </div>

        {/* the fragile income stack, floating */}
        <div className="col-span-12 lg:col-span-5">
          <div className="relative hidden h-[26rem] lg:block">
            <Parallax distance={44} className="absolute left-[2%] top-[1rem]">
              <Fragment item={FRAGMENTS[0]} className="rotate-[-4deg]" />
            </Parallax>
            <Parallax distance={-26} className="absolute right-[0%] top-[6.5rem]">
              <Fragment item={FRAGMENTS[1]} className="rotate-[3deg]" />
            </Parallax>
            <Parallax distance={62} className="absolute left-[8%] top-[13rem]">
              <Fragment item={FRAGMENTS[2]} className="rotate-[-2deg]" />
            </Parallax>
            <Parallax distance={-48} className="absolute right-[6%] top-[19.5rem]">
              <Fragment item={FRAGMENTS[3]} className="rotate-[5deg]" />
            </Parallax>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden [scrollbar-width:none]">
            {FRAGMENTS.map((f) => (
              <Fragment key={f.k} item={f} className="shrink-0" />
            ))}
          </div>
        </div>
      </div>

      <div className="shell mt-20 grid grid-cols-12 gap-y-12 md:mt-28">
        <div className="col-span-12 lg:col-span-4">
          <DrawRule className="mb-8" />
          <Reveal>
            <p className="t-index text-[0.66rem] uppercase leading-[2] tracking-[0.18em] text-bone-34">
              Attention is rented.
              <br />
              Ownership is built.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="space-y-6">
            <Reveal>
              <p className="t-lead max-w-[44ch] text-bone">
                You spend years building trust. Creating content. Growing an
                audience. Showing up every single day.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="max-w-[44ch] space-y-3">
                {[
                  "Platforms control your reach.",
                  "Brand deals end.",
                  "Algorithms change.",
                ].map((line) => (
                  <li key={line} className="flex items-baseline gap-4">
                    <span className="h-px w-5 shrink-0 translate-y-[-0.35em] bg-volt" />
                    <span className="t-body text-bone-70">{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="t-body max-w-[46ch]">
                And without something of your own, your income depends on
                somebody else&rsquo;s platform &mdash; and somebody else&rsquo;s
                decisions.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* transition */}
      <div className="shell mt-24 md:mt-36">
        <p className="t-display t-optical text-[10.5vw] leading-[0.86] sm:text-[8vw] lg:text-[clamp(2.4rem,4.9vw,5.4rem)]">
          <Mask>Your audience is valuable.</Mask>
          <Mask delay={0.08}>
            <span className="text-bone-34">
              You just need something{" "}
              <span className="t-serif text-bone">worth owning.</span>
            </span>
          </Mask>
        </p>
      </div>
    </section>
  );
}
