import { CASES } from "@/lib/cases";
import { SITE } from "@/lib/site";
import { Mask, Reveal, DrawRule } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionTag } from "@/components/ui/SectionTag";
import { Plate } from "@/components/ui/Plate";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SiteMockup } from "@/components/mockups/SiteMockup";
import { AppHome, AppMembership, PhoneShell } from "@/components/mockups/Phone";

function PlaceholderChip() {
  return (
    <span className="t-index inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.18em] text-bone-34">
      <span className="h-1 w-1 rounded-full bg-bone-34" />
      Placeholder
    </span>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div className="gridlines" aria-hidden="true" />

      <div className="shell relative grid grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <SectionTag index="08" label="Case studies" />
          <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.2vw,7.9rem)]">
            <Mask>From followers</Mask>
            <Mask delay={0.08}>
              <span>
                To <span className="text-volt">customers.</span>
              </span>
            </Mask>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end lg:pb-3">
          <Reveal delay={0.18}>
            <p className="t-body max-w-[32ch]">
              The structure of a partnership, shown end to end. Figures stay
              blank until a creator has signed off on them.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ---------- cases ---------- */}
      <div className="mt-24 md:mt-32">
        {CASES.map((c, idx) => {
          const flip = idx % 2 === 1;
          return (
            <article
              key={c.id}
              className="relative border-t border-[var(--color-rule)] py-16 md:py-24"
            >
              <div className="shell grid grid-cols-12 gap-y-12 lg:gap-x-10">
                {/* visual column */}
                <div
                  className={`col-span-12 lg:col-span-5 ${
                    flip ? "lg:order-2 lg:col-start-8" : ""
                  }`}
                >
                  <Parallax distance={26}>
                    <Reveal y={34}>
                      <div className="relative">
                        <Plate
                          label="Creator portrait"
                          hint={`case ${c.id} · replace`}
                          ratio="4/5"
                          src={c.image}
                          alt={c.image ? c.creator : ""}
                          className={`rounded-[18px] ${flip ? "-rotate-[1.5deg]" : "rotate-[1.5deg]"}`}
                        />
                        <div
                          className={`pointer-events-none absolute -bottom-10 hidden md:block ${
                            flip ? "-left-14" : "-right-14"
                          }`}
                        >
                          <PhoneShell className="[--ps:0.44] rotate-[8deg]">
                            {idx % 2 === 0 ? <AppHome /> : <AppMembership />}
                          </PhoneShell>
                        </div>
                      </div>
                    </Reveal>
                  </Parallax>
                </div>

                {/* content column */}
                <div
                  className={`col-span-12 lg:col-span-6 ${
                    flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"
                  }`}
                >
                  <Reveal>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="t-index text-[0.62rem] text-volt">
                        Case {c.id}
                      </span>
                      <span className="h-px w-8 bg-[var(--color-rule)]" />
                      {c.status === "placeholder" && <PlaceholderChip />}
                    </div>

                    <h3 className="t-display t-condensed mt-6 text-[10vw] leading-[0.88] sm:text-[7vw] lg:text-[clamp(2.2rem,3.6vw,4rem)]">
                      {c.kicker}
                    </h3>

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
                      Metrics intentionally left blank &mdash; replace with
                      verified figures in{" "}
                      <span className="text-bone-50">src/lib/cases.ts</span>.
                    </p>
                  </Reveal>
                </div>
              </div>
            </article>
          );
        })}

        {/* ---------- the open slot ---------- */}
        <article className="relative border-y border-[var(--color-rule)] py-16 md:py-24">
          <div className="shell grid grid-cols-12 items-center gap-y-12 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <span className="t-index text-[0.62rem] text-volt">Case 03</span>
                <h3 className="t-display t-display-tight t-optical mt-6 text-[13vw] leading-[0.84] sm:text-[9vw] lg:text-[clamp(2.6rem,5vw,5.6rem)]">
                  Reserved.
                </h3>
                <p className="t-body mt-7 max-w-[38ch]">
                  We keep a small number of partnership slots open at any time.
                  If the fit is right, the next case study on this page is
                  yours.
                </p>
                <a
                  href={SITE.applyHref}
                  data-cursor
                  className="group mt-9 inline-flex items-center gap-4 border-b border-bone-18 pb-2 transition-colors duration-500 hover:border-volt"
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
                  <SiteMockup className="[--ps:0.35] sm:[--ps:0.5] md:[--ps:0.62] lg:[--ps:0.6] xl:[--ps:0.74]" />
                </Reveal>
              </Parallax>
            </div>
          </div>
        </article>
      </div>

      <div className="shell mt-16">
        <DrawRule />
        <Reveal delay={0.1}>
          <p className="t-index mt-6 text-[0.62rem] uppercase tracking-[0.16em] text-bone-34">
            No invented testimonials. No invented revenue. Placeholders stay
            visible until the real thing exists.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
