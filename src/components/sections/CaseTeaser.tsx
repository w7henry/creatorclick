import Link from "next/link";
import { CASES } from "@/lib/cases";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Device } from "@/components/mockups/Device";

/**
 * Social proof, home-page length. Stan stacks creator photos with dollar
 * figures on them; this shows the one real partnership end to end and holds
 * the next slot open — proof that it works, plus a seat that is visibly
 * still available. Numbers join it once the creator signs off (lib/cases.ts).
 */
export function CaseTeaser() {
  const c = CASES.find((x) => x.status === "live");
  if (!c) return null;

  return (
    <section id="proof" className="relative overflow-hidden py-24 md:py-36">
      <div className="shell grid grid-cols-12 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <SectionTag index="04" label="Proof" />
          <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.1vw,7.8rem)]">
            <Mask>Not a mockup.</Mask>
            <Mask delay={0.08}>
              <span className="t-serif text-volt">A live product.</span>
            </Mask>
          </h2>
        </div>
      </div>

      <div className="shell mt-16 grid grid-cols-12 gap-y-16 md:mt-24 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-5">
          <Reveal y={34}>
            <div className="relative mr-10 sm:mr-24 lg:mr-0">
              <div className="overflow-hidden rounded-[18px] border border-[var(--color-rule)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(c.image ?? "")}
                  alt={`${c.creator}, founder of ${c.product}`}
                  width={900}
                  height={1328}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/5] w-full scale-[1.04] object-cover object-top"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 sm:-right-20">
                <Device screen="home" className="[--ps:0.4] rotate-[8deg] sm:[--ps:0.5]" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:self-center">
          <Reveal>
            <p className="t-index text-[0.6rem] uppercase tracking-[0.2em] text-bone-34">
              {c.creator} &middot; {c.handle}
            </p>
            <h3 className="t-display t-condensed mt-4 text-[10vw] leading-[0.88] sm:text-[7vw] lg:text-[clamp(2.2rem,3.6vw,4rem)]">
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

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/work" className="group inline-flex items-center gap-2">
                <span className="t-display text-[1.05rem] uppercase tracking-[0.02em] transition-colors duration-500 group-hover:text-volt">
                  Read the case study
                </span>
                <ArrowUpRight className="h-4 w-4 text-volt transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              {c.productUrl && (
                <a
                  href={c.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-bone-50 transition-colors duration-500 hover:text-bone"
                >
                  <span className="t-index text-[0.62rem] uppercase tracking-[0.18em]">
                    {c.productUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---------- the open seat ---------- */}
      <div className="shell mt-24 md:mt-32">
        <Reveal y={24}>
          <Link
            href={SITE.applyHref}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[22px] border border-dashed border-volt/45 p-7 transition-colors duration-500 hover:bg-[rgba(217,255,67,0.04)] md:flex-row md:items-center md:justify-between md:p-10"
          >
            <span className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
              <span className="t-index text-[0.62rem] text-volt">Case 02</span>
              <span className="t-display text-[2.4rem] leading-[0.9] text-volt md:text-[clamp(2.2rem,3.4vw,3.6rem)]">
                Reserved.
              </span>
              <span className="t-body max-w-[40ch] text-[0.95rem]">
                We keep a small number of partner slots open. The next case on
                this page could be yours.
              </span>
            </span>
            <span className="t-index flex shrink-0 items-center gap-2 text-[0.66rem] uppercase tracking-[0.18em] text-bone">
              Claim the slot
              <ArrowUpRight className="h-4 w-4 text-volt transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
