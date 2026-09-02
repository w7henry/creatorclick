import { CASES } from "@/lib/cases";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { Mask, Reveal, DrawRule } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionTag } from "@/components/ui/SectionTag";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SiteShot } from "@/components/mockups/SiteShot";
import { Device } from "@/components/mockups/Device";

function OutLink({
  href,
  label,
  value,
}: {
  href: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between gap-6 border-t border-[var(--color-rule)] py-4 transition-colors duration-500 last:border-b hover:border-volt/40"
    >
      <span className="t-index text-[0.58rem] uppercase tracking-[0.2em] text-bone-34">
        {label}
      </span>
      <span className="flex items-center gap-2">
        <span className="t-display text-[1.05rem] transition-colors duration-500 group-hover:text-volt">
          {value}
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 text-bone-34 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt" />
      </span>
    </a>
  );
}

export function CaseStudies({ as: H = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="work" className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div className="gridlines" aria-hidden="true" />

      <div className="shell relative grid grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <SectionTag index="01" label="Case study" />
          <H className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.2vw,7.9rem)]">
            <Mask>From followers</Mask>
            <Mask delay={0.08}>
              <span>
                To <span className="text-volt">customers.</span>
              </span>
            </Mask>
          </H>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end lg:pb-3">
          <Reveal delay={0.18}>
            <p className="t-body max-w-[32ch]">
              One partnership, shown end to end. Figures stay blank until the
              creator has signed off on them.
            </p>
          </Reveal>
        </div>
      </div>

      {CASES.map((c) => (
        <article
          key={c.id}
          className="relative mt-20 border-t border-[var(--color-rule)] py-16 md:mt-28 md:py-24"
        >
          <div className="shell grid grid-cols-12 gap-y-16 lg:gap-x-10">
            {/* portrait + device */}
            <div className="col-span-12 lg:col-span-5">
              <Parallax distance={26}>
                <Reveal y={34}>
                  <div className="relative">
                    <div className="overflow-hidden rounded-[18px] border border-[var(--color-rule)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(c.image ?? "")}
                        alt={`${c.creator}, founder of ${c.product}`}
                        width={900}
                        height={1328}
                        loading="lazy"
                        decoding="async"
                        className="block w-full rotate-[0.6deg] scale-[1.04] object-cover"
                      />
                    </div>
                    <div className="pointer-events-none absolute -bottom-14 -right-10 hidden md:block lg:-right-20">
                      <Device screen="home" className="[--ps:0.5] rotate-[8deg]" />
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            </div>

            {/* the story */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Reveal>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="t-index text-[0.62rem] text-volt">Case {c.id}</span>
                  <span className="h-px w-8 bg-[var(--color-rule)]" />
                  <span className="t-index text-[0.58rem] uppercase tracking-[0.18em] text-bone-50">
                    Live product
                  </span>
                </div>

                <h3 className="t-display t-condensed mt-6 text-[10vw] leading-[0.88] sm:text-[7vw] lg:text-[clamp(2.2rem,3.6vw,4rem)]">
                  {c.kicker}
                </h3>

                <div className="mt-9">
                  {c.creatorUrl && (
                    <OutLink href={c.creatorUrl} label="Creator" value={c.handle ?? c.creator} />
                  )}
                  {c.productUrl && (
                    <OutLink href={c.productUrl} label="Product" value={c.product ?? ""} />
                  )}
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="t-index text-[0.58rem] uppercase tracking-[0.2em] text-bone-34">
                      Before
                    </p>
                    <p className="t-body mt-3 text-[0.94rem]">{c.before}</p>
                  </div>
                  <div>
                    <p className="t-index text-[0.58rem] uppercase tracking-[0.2em] text-volt">
                      After
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.after.map((a) => (
                        <li key={a} className="flex items-baseline gap-3">
                          <span className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-volt" />
                          <span className="t-body text-[0.94rem] text-bone">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 border-t border-[var(--color-rule)]">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="border-r border-[var(--color-rule)] py-6 pr-3 last:border-r-0"
                    >
                      <p className="t-display tabnums text-[2rem] leading-none text-bone-34 md:text-[2.6rem]">
                        {m.value}
                      </p>
                      <p className="t-index mt-3 text-[0.55rem] uppercase leading-relaxed tracking-[0.16em] text-bone-34">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="t-index mt-5 text-[0.58rem] uppercase leading-relaxed tracking-[0.14em] text-bone-34">
                  Figures pending sign-off &mdash; fill them in at{" "}
                  <span className="text-bone-50">src/lib/cases.ts</span>.
                </p>
              </Reveal>
            </div>
          </div>
        </article>
      ))}

      {/* the open slot */}
      <article className="relative border-y border-[var(--color-rule)] py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[42%]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-volt-soft), transparent 78%)",
          }}
        />
        <div className="shell relative grid grid-cols-12 items-center gap-y-12 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <span className="t-index text-[0.62rem] text-volt">Case 02</span>
              <h3 className="t-display t-display-tight t-optical mt-6 text-[13vw] leading-[0.84] text-volt sm:text-[9vw] lg:text-[clamp(2.6rem,5vw,5.6rem)]">
                Reserved.
              </h3>
              <p className="t-body mt-7 max-w-[38ch]">
                We keep a small number of partnership slots open at any time. If
                the fit is right, the next case study on this page is yours.
              </p>
              <a
                href={SITE.applyHref}
                className="group mt-9 inline-flex items-center gap-4 border-b border-volt/45 pb-2 transition-colors duration-500 hover:border-volt"
              >
                <span className="t-display text-[1.15rem] uppercase tracking-[0.02em]">
                  Apply to partner
                </span>
                <ArrowUpRight className="h-4 w-4 text-volt transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Parallax distance={22}>
              <Reveal y={34} delay={0.1}>
                <SiteShot
                  caption={
                    <>
                      <a
                        href="https://www.sculpte.fitness/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-wipe text-bone-50 transition-colors duration-300 hover:text-volt"
                      >
                        sculpte.fitness
                      </a>{" "}
                      &mdash; the site from case 01, shown as an example of
                      what the open slot becomes.
                    </>
                  }
                />
              </Reveal>
            </Parallax>
          </div>
        </div>
      </article>

      <div className="shell mt-16">
        <DrawRule />
        <Reveal delay={0.1}>
          <p className="t-index mt-6 text-[0.62rem] uppercase tracking-[0.16em] text-bone-34">
            No invented testimonials. No invented revenue. Numbers appear only
            once a creator has confirmed them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
