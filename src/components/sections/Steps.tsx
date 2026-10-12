import Link from "next/link";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

/**
 * The five-stage process on /how-it-works, folded into three for the home
 * page. Stan's pitch is "set up in minutes"; ours is the same instinct told
 * honestly — the build takes weeks, but the creator's own part takes ten
 * minutes, and the headline says the number they care about.
 */
const STEPS = [
  {
    n: "01",
    title: "Apply",
    body: "Drop your handle and tell us what you want to build. A person reads every application and answers either way.",
    meta: "You · 10 minutes",
  },
  {
    n: "02",
    title: "We build",
    body: "Strategy, brand, app, website and checkout — built end to end under your name. Nothing ships you have not signed off.",
    meta: "Us · 8–14 weeks",
  },
  {
    n: "03",
    title: "You launch",
    body: "You introduce it to the audience you already have. We host it, run it and keep improving it — and get paid when it earns.",
    meta: "Together · Revenue share",
  },
];

export function Steps() {
  return (
    <section id="steps" className="relative py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <SectionTag index="03" label="How it works" />
            <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.1vw,7.8rem)]">
              <Mask>Your part:</Mask>
              <Mask delay={0.08}>
                <span className="t-serif text-volt">ten minutes.</span>
              </Mask>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end lg:pb-3">
            <Reveal delay={0.18}>
              <p className="t-body max-w-[32ch]">
                Three steps from a feed full of attention to a product with
                paying customers. You do the first one. We carry the rest.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-20 grid gap-4 md:mt-28 md:grid-cols-3 md:gap-5">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.08} y={30} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-[22px] border p-7 md:p-8 ${
                    i === 0
                      ? "border-volt/45 bg-[rgba(217,255,67,0.05)]"
                      : "border-[var(--color-rule)] bg-[rgba(242,240,234,0.015)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`t-display t-condensed text-[4.4rem] leading-[0.8] ${
                        i === 0 ? "text-volt" : "t-outline"
                      }`}
                    >
                      {s.n}
                    </span>
                    {i < STEPS.length - 1 && (
                      <ArrowRight
                        className={`mt-2 hidden h-5 w-5 md:block ${i === 0 ? "text-volt" : "text-bone-34"}`}
                      />
                    )}
                  </div>
                  <h3 className="t-display mt-10 text-[1.9rem] leading-[0.95] md:text-[clamp(1.6rem,2.2vw,2.3rem)]">
                    {s.title}
                  </h3>
                  <p className="t-body mt-4 flex-1 text-[0.95rem]">{s.body}</p>
                  <p
                    className={`t-index mt-8 border-t pt-4 text-[0.58rem] uppercase tracking-[0.18em] ${
                      i === 0
                        ? "border-volt/25 text-volt"
                        : "border-[var(--color-rule)] text-bone-34"
                    }`}
                  >
                    {s.meta}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <Link
            href="/how-it-works"
            className="group mt-10 inline-flex items-center gap-2 text-bone-70 transition-colors duration-300 hover:text-bone"
          >
            <span className="t-index text-[0.62rem] uppercase tracking-[0.18em]">
              All five stages, in detail
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-bone-34 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
