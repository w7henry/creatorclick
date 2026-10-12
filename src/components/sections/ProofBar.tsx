import Link from "next/link";
import { CASES } from "@/lib/cases";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

/**
 * Proof directly under the promise. Stan leads with scale ("$600M+ earned by
 * creators"); we have one live product and no signed-off figures, so this
 * leads with specificity instead: a real creator, a real product, a link.
 */
export function ProofBar() {
  const c = CASES.find((x) => x.status === "live");
  if (!c) return null;

  return (
    <section aria-label="Live partnership" className="rule-top rule-bottom relative">
      <div className="shell">
        <Reveal y={12}>
          <Link
            href="/work"
            className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-6 md:py-7"
          >
            <span className="flex items-center gap-2.5">
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="pulse-ring absolute inset-0 rounded-full bg-volt/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              </span>
              <span className="t-eyebrow whitespace-nowrap">Live now</span>
            </span>

            <span className="hidden h-px w-8 bg-[var(--color-rule)] sm:block" />

            <span className="flex min-w-0 flex-1 items-center gap-4">
              {c.image && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={asset(c.image)}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 shrink-0 rounded-full border border-bone-18 object-cover object-top"
                />
              )}
              <span className="min-w-0 text-[0.98rem] leading-snug text-bone-70 md:text-[1.05rem]">
                <span className="t-display text-[1.05em] tracking-[-0.02em] text-bone">
                  {c.product}
                </span>{" "}
                &mdash; the training app we built and run with{" "}
                <span className="text-bone">{c.handle}</span>.
              </span>
            </span>

            <span className="flex items-center gap-5">
              <span className="t-index hidden text-[0.58rem] uppercase tracking-[0.18em] text-bone-34 md:inline">
                iOS &middot; Android &middot; Web
              </span>
              <span className="t-index flex items-center gap-1.5 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.16em] text-volt">
                See the case
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
