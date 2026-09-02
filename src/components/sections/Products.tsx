"use client";

import { Mask, Reveal, DrawRule } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionTag } from "@/components/ui/SectionTag";
import { SiteMockup } from "@/components/mockups/SiteMockup";
import { AppHome, AppMembership, AppWorkout, PhoneShell } from "@/components/mockups/Phone";
import { Plate } from "@/components/ui/Plate";
import { ArrowUpRight } from "@/components/ui/Icons";

function BigIndex({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`t-display t-outline pointer-events-none absolute select-none text-[30vw] leading-[0.7] md:text-[22vw] ${className}`}
    >
      {n}
    </span>
  );
}

function Spec({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-0">
      {items.map((s, i) => (
        <li
          key={s}
          className="flex items-center gap-4 border-t border-[var(--color-rule)] py-3 last:border-b"
        >
          <span className="t-index text-[0.58rem] text-volt">{String(i + 1).padStart(2, "0")}</span>
          <span className="t-index text-[0.68rem] uppercase tracking-[0.16em] text-bone-70">
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */

export function Products() {
  return (
    <section id="build" className="relative overflow-hidden py-24 md:py-36">
      {/* ---------- section headline ---------- */}
      <div className="shell grid grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <SectionTag index="04" label="What we build" />
          <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.1vw,7.8rem)]">
            <Mask>Your name.</Mask>
            <Mask delay={0.07}>Your product.</Mask>
            <Mask delay={0.14}>
              <span className="t-serif">Your business.</span>
            </Mask>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end lg:pb-3">
          <Reveal delay={0.2}>
            <p className="t-body max-w-[32ch]">
              Three product surfaces, built as one system &mdash; so the brand,
              the app and the checkout never feel like different companies.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ================= 01 — WEBSITES ================= */}
      <div className="relative mt-28 md:mt-44">
        <BigIndex n="01" className="-top-[6vw] right-[2vw] opacity-70" />

        <div className="shell relative grid grid-cols-12 items-center gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="t-index text-[0.62rem] uppercase tracking-[0.24em] text-volt">
                Product 01
              </p>
              <h3 className="t-display t-condensed mt-5 text-[13vw] leading-[0.86] sm:text-[9vw] lg:text-[clamp(2.6rem,3.9vw,4.4rem)]">
                Premium
                <br />
                websites
              </h3>
              <p className="t-body mt-7 max-w-[38ch]">
                A digital home that looks like the brand you have already built
                &mdash; not a link-in-bio. Editorial art direction, real
                storytelling, and every path leading somewhere you own.
              </p>
              <Spec items={["Brand & art direction", "Editorial build", "Owned email capture", "Analytics that mean something"]} />
            </Reveal>
          </div>

          {/* bleeds past the right edge */}
          <div className="col-span-12 lg:col-span-8">
            <Parallax distance={34} className="relative -mr-[var(--shell-pad)] sm:mr-0 lg:-mr-[22vw] xl:-mr-[16vw]">
              <Reveal y={40}>
                <SiteMockup className="[--ps:0.47] sm:[--ps:0.55] md:[--ps:0.72] lg:[--ps:0.86] xl:[--ps:1]" />
              </Reveal>
            </Parallax>
          </div>
        </div>
      </div>

      {/* ================= 02 — APPS ================= */}
      <div className="relative mt-36 md:mt-52">
        <BigIndex n="02" className="-top-[7vw] left-[1vw] opacity-70" />

        <div className="shell relative grid grid-cols-12 items-center gap-y-16">
          {/* phones bleed past the left edge */}
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-7">
            <div className="relative h-[24rem] sm:h-[30rem] lg:h-[38rem] lg:-ml-[16vw] xl:-ml-[12vw]">
              <Parallax distance={-42} className="absolute left-0 top-[3rem] z-10 lg:left-[2%]">
                <Reveal y={40}>
                  <PhoneShell className="[--ps:0.44] rotate-[-9deg] sm:[--ps:0.56] lg:[--ps:0.72]">
                    <AppWorkout />
                  </PhoneShell>
                </Reveal>
              </Parallax>
              <Parallax distance={26} className="absolute left-[26%] top-0 z-20">
                <Reveal y={40} delay={0.08}>
                  <PhoneShell className="[--ps:0.5] rotate-[2deg] sm:[--ps:0.64] lg:[--ps:0.82]">
                    <AppHome />
                  </PhoneShell>
                </Reveal>
              </Parallax>
              <Parallax distance={-18} className="absolute left-[58%] top-[4.5rem] z-10">
                <Reveal y={40} delay={0.16}>
                  <PhoneShell className="[--ps:0.44] rotate-[11deg] sm:[--ps:0.56] lg:[--ps:0.72]">
                    <AppMembership />
                  </PhoneShell>
                </Reveal>
              </Parallax>
            </div>
          </div>

          <div className="order-1 col-span-12 lg:order-2 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <p className="t-index text-[0.62rem] uppercase tracking-[0.24em] text-volt">
                Product 02
              </p>
              <h3 className="t-display t-condensed mt-5 text-[13vw] leading-[0.86] sm:text-[9vw] lg:text-[clamp(2.6rem,3.9vw,4.4rem)]">
                Training
                <br />
                apps
              </h3>
              <p className="t-body mt-7 max-w-[38ch]">
                Your method, turned into software. Programmes, progression,
                logging and check-ins &mdash; under your name, on their home
                screen, every single week.
              </p>
              <Spec items={["iOS & Android", "Programme engine", "Subscriptions & billing", "Retention analytics"]} />
            </Reveal>
          </div>
        </div>
      </div>

      {/* ================= 03 — DIGITAL PRODUCTS ================= */}
      <div className="relative mt-36 md:mt-52">
        <BigIndex n="03" className="-top-[6vw] right-[6vw] opacity-70" />

        <div className="shell relative grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4 lg:pt-10">
            <Reveal>
              <p className="t-index text-[0.62rem] uppercase tracking-[0.24em] text-volt">
                Product 03
              </p>
              <h3 className="t-display t-condensed mt-5 text-[13vw] leading-[0.86] sm:text-[9vw] lg:text-[clamp(2.6rem,3.9vw,4.4rem)]">
                Digital
                <br />
                products
              </h3>
              <p className="t-body mt-7 max-w-[38ch]">
                Programmes, memberships, challenges and cohorts. Sold from your
                own storefront, on your own terms, to a list nobody can take
                away from you.
              </p>
              <Spec items={["Memberships & tiers", "Programme drops", "Checkout & payments", "Lifecycle automation"]} />
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { t: "12-week hypertrophy", k: "Programme", m: "App + PDF" },
                { t: "The inner circle", k: "Membership", m: "Monthly" },
                { t: "Six-week reset", k: "Challenge", m: "Cohort" },
                { t: "Form library", k: "Vault", m: "Included" },
              ].map((c, i) => (
                <Reveal key={c.t} delay={0.05 * i} y={26}>
                  <article
                    data-cursor
                    className={`group relative overflow-hidden rounded-[16px] border border-[var(--color-rule)] bg-[rgba(242,240,234,0.02)] p-3.5 transition-colors duration-500 hover:border-bone-18 sm:p-4 ${
                      i % 2 === 1 ? "sm:translate-y-8" : ""
                    }`}
                  >
                    <Plate
                      label={c.k}
                      ratio="4/3"
                      className="rounded-[10px]"
                      index={`0${i + 1}`}
                    />
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="t-display text-[1.05rem] leading-tight sm:text-[1.2rem]">
                          {c.t}
                        </p>
                        <p className="t-index mt-1.5 text-[0.56rem] uppercase tracking-[0.18em] text-bone-34">
                          {c.k} &middot; {c.m}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-bone-34 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt" />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="shell mt-28 md:mt-40">
        <DrawRule />
        <Reveal delay={0.1}>
          <p className="t-index mt-7 text-[0.66rem] uppercase tracking-[0.18em] text-bone-34">
            All interfaces on this page are design specimens &mdash; not client work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
