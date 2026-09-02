"use client";

import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { Check, Cross } from "@/components/ui/Icons";

const TRADITIONAL = [
  "Large fee before anything is proven",
  "You carry all of the risk",
  "The relationship ends at delivery",
  "They get paid whether it works or not",
];

const PARTNERSHIP = [
  "Shared upside instead of an invoice",
  "Aligned incentives from day one",
  "A long-term operating partner",
  "We only grow when the product grows",
];

export function RevenueShare() {
  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-ink-2 py-24 md:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,255,67,0.55), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-18%] h-[70vh] w-[110vw] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(217,255,67,0.14), transparent 70%)",
        }}
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="05" label="The partnership" />
            <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.2vw,7.9rem)]">
              <Mask>We don&rsquo;t win</Mask>
              <Mask delay={0.08}>
                <span>
                  Unless <span className="text-volt">you</span> win.
                </span>
              </Mask>
            </h2>
          </div>

          <div className="col-span-12 space-y-6 lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-3">
            <Reveal delay={0.15}>
              <p className="t-body max-w-[40ch]">
                Traditional agencies get paid before the work has proved
                anything. We think a partnership should be structured the way a
                business is: skill, time and resources invested up front,
                against a share of what gets built.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="t-body max-w-[40ch] text-bone">
                When the product wins, we win. When it doesn&rsquo;t, that
                cost is ours too.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------- the comparison ---------- */}
        <div className="relative mt-24 grid grid-cols-12 gap-y-8 md:mt-32 lg:gap-x-8">
          {/* the old way — flattened, lowered, drained of colour */}
          <Reveal className="col-span-12 lg:col-span-5 lg:translate-y-12" y={30}>
            <div className="relative h-full rounded-[22px] border border-[var(--color-rule)] bg-[rgba(242,240,234,0.015)] p-7 md:p-9">
              <p className="t-index text-[0.6rem] uppercase tracking-[0.22em] text-bone-34">
                The default
              </p>
              <h3 className="t-display t-condensed mt-4 text-[2.1rem] leading-[0.92] text-bone-50 md:text-[2.6rem]">
                Traditional
                <br />
                agency
              </h3>
              <ul className="mt-8 space-y-0">
                {TRADITIONAL.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-4 border-t border-[var(--color-rule)] py-4 last:border-b"
                  >
                    <Cross className="mt-0.5 h-4 w-4 shrink-0 text-bone-34" />
                    <span className="text-[0.94rem] leading-snug text-bone-50">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="t-index mt-7 text-[0.6rem] uppercase tracking-[0.18em] text-bone-34">
                Risk: yours
              </p>
            </div>
          </Reveal>

          {/* the partnership — lifted, filled, unmistakably the better object */}
          <Reveal
            className="col-span-12 lg:col-span-6 lg:col-start-7 lg:-translate-y-6"
            y={30}
            delay={0.1}
          >
            <div
              className="relative h-full rotate-[0.6deg] rounded-[22px] bg-volt p-7 text-ink md:p-10"
              style={{ boxShadow: "0 48px 90px -44px rgba(217,255,67,0.42)" }}
              data-cursor
            >
              <div className="flex items-start justify-between gap-4">
                <p className="t-index text-[0.6rem] uppercase tracking-[0.22em] text-ink/60">
                  How we work
                </p>
                <span className="t-index rounded-full border border-ink/25 px-3 py-1 text-[0.55rem] uppercase tracking-[0.16em]">
                  Revenue share
                </span>
              </div>
              <h3 className="t-display t-condensed mt-4 text-[2.4rem] leading-[0.9] md:text-[3.2rem]">
                Partnership
                <br />
                model
              </h3>
              <ul className="mt-8 space-y-0">
                {PARTNERSHIP.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-4 border-t border-ink/15 py-4 last:border-b"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-[1rem] font-medium leading-snug tracking-[-0.01em]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="t-index mt-7 text-[0.6rem] uppercase tracking-[0.18em] text-ink/60">
                Risk: shared
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------- closing triad ---------- */}
        <div className="mt-32 md:mt-44">
          {[
            { a: "You bring", b: "the audience." },
            { a: "We build", b: "the infrastructure." },
            { a: "We share", b: "the upside.", volt: true },
          ].map((row, i) => (
            <Reveal key={row.b} delay={i * 0.08}>
              <div className="flex flex-col gap-1 border-t border-[var(--color-rule)] py-6 last:border-b md:flex-row md:items-baseline md:gap-8 md:py-8">
                <span className="t-index w-16 shrink-0 text-[0.6rem] text-bone-34">
                  0{i + 1}
                </span>
                <p
                  className={`t-display t-optical text-[9vw] leading-[0.88] sm:text-[6.4vw] lg:text-[clamp(2rem,3.9vw,4.3rem)] ${
                    row.volt ? "text-volt" : ""
                  }`}
                >
                  <span className="text-bone-34">{row.a}</span> {row.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
