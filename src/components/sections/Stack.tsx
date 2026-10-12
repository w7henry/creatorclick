import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { Check, Cross } from "@/components/ui/Icons";

/**
 * Stan sells "all-in-one" against the stack of tools it replaces. A creator
 * business is the same comparison one level up: the hires and invoices it
 * normally takes, against one partner. The highlighted column is the
 * recommended-plan move from a pricing table — the eye lands there first.
 */
type Row = { what: string; yourself: string; us: string; key?: boolean };

const ROWS: Row[] = [
  { what: "Training app, iOS & Android", yourself: "Hire an app studio", us: "Built for you" },
  { what: "Website & storefront", yourself: "Hire a web designer", us: "Built for you" },
  { what: "Programmes & memberships", yourself: "Package them yourself", us: "Built for you" },
  { what: "Checkout & payments", yourself: "Wire up the tools yourself", us: "Built and run" },
  { what: "Hosting, updates, uptime", yourself: "Your problem, indefinitely", us: "Ours" },
  { what: "Support tickets", yourself: "Your inbox", us: "Ours" },
  { what: "Paid up front", yourself: "Invoices before a single sale", us: "No invoice — a revenue share", key: true },
];

/** The one row where both columns agree — said last, so it is what stays with them. */
const KEEP: Row = { what: "Brand, name & audience", yourself: "Yours", us: "Still yours" };

export function Stack() {
  return (
    <section id="stack" className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,255,67,0.55), transparent)",
        }}
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="02" label="Everything, one partner" />
            <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,7.1vw,7.8rem)]">
              <Mask>The whole</Mask>
              <Mask delay={0.06}>stack.</Mask>
              <Mask delay={0.12}>
                <span>
                  <span className="t-serif">One</span> partner.
                </span>
              </Mask>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-3">
            <Reveal delay={0.15}>
              <p className="t-body max-w-[40ch]">
                A creator business usually means a developer, a designer, a
                payments setup, hosting and a support inbox &mdash; all paid for
                before you have sold a thing. We do all of it, under your name,
                for a share of what it earns.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---------- desktop: a comparison table with the answer lit ---------- */}
        <Reveal className="mt-20 hidden md:block" y={30}>
          <div
            role="table"
            aria-label="Building it yourself compared with CreatorClick"
            className="relative grid grid-cols-[1.15fr_1fr_1fr]"
            style={{ gridTemplateRows: `repeat(${ROWS.length + 2}, auto)` }}
          >
            {/* the lit column, behind the cells */}
            <div
              aria-hidden="true"
              className="rounded-[22px] border border-volt/40 bg-[rgba(217,255,67,0.06)]"
              style={{
                gridColumn: "3",
                gridRow: "1 / -1",
                boxShadow: "0 48px 90px -50px rgba(217,255,67,0.35)",
              }}
            />

            <div role="row" className="contents">
              <span role="columnheader" className="t-index self-end px-6 pb-5 text-[0.6rem] uppercase tracking-[0.22em] text-bone-34" style={{ gridRow: 1, gridColumn: 1 }}>
                What it takes
              </span>
              <span role="columnheader" className="t-index self-end px-6 pb-5 text-[0.6rem] uppercase tracking-[0.22em] text-bone-34" style={{ gridRow: 1, gridColumn: 2 }}>
                Doing it yourself
              </span>
              <span role="columnheader" className="flex items-center justify-between gap-3 px-7 pb-5 pt-7" style={{ gridRow: 1, gridColumn: 3 }}>
                <span className="t-display text-[1.35rem] leading-none">CreatorClick</span>
                <span className="t-index rounded-full bg-volt px-3 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-ink">
                  Revenue share
                </span>
              </span>
            </div>

            {[...ROWS, KEEP].map((r, i) => (
              <div key={r.what} role="row" className="contents">
                <span
                  role="rowheader"
                  className="border-t border-[var(--color-rule)] px-6 py-5 text-[1rem] font-medium tracking-[-0.01em] text-bone"
                  style={{ gridRow: i + 2, gridColumn: 1 }}
                >
                  {r.what}
                </span>
                <span
                  role="cell"
                  className="flex items-start gap-3 border-t border-[var(--color-rule)] px-6 py-5 text-[0.95rem] leading-snug text-bone-50"
                  style={{ gridRow: i + 2, gridColumn: 2 }}
                >
                  {r === KEEP ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bone-34" />
                  ) : (
                    <Cross className="mt-0.5 h-4 w-4 shrink-0 text-bone-34" />
                  )}
                  {r.yourself}
                </span>
                <span
                  role="cell"
                  className={`mx-1 flex items-start gap-3 border-t border-volt/15 px-6 py-5 text-[0.98rem] font-medium leading-snug ${
                    r.key ? "text-volt" : "text-bone"
                  }`}
                  style={{ gridRow: i + 2, gridColumn: 3 }}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                  {r.us}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---------- mobile: the same rows, stacked ---------- */}
        <ul className="mt-14 md:hidden">
          {[...ROWS, KEEP].map((r) => (
            <li key={r.what} className="border-t border-[var(--color-rule)] py-5 last:border-b">
              <p className="text-[1rem] font-medium tracking-[-0.01em] text-bone">{r.what}</p>
              <p className="mt-3 flex items-start gap-3 text-[0.9rem] leading-snug text-bone-50">
                {r === KEEP ? (
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bone-34" />
                ) : (
                  <Cross className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bone-34" />
                )}
                <span>
                  <span className="sr-only">Doing it yourself: </span>
                  {r.yourself}
                </span>
              </p>
              <p
                className={`mt-2 flex items-start gap-3 text-[0.95rem] font-medium leading-snug ${
                  r.key ? "text-volt" : "text-bone"
                }`}
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt" />
                <span>
                  <span className="sr-only">With CreatorClick: </span>
                  {r.us}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
