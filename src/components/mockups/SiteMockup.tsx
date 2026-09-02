import { asset } from "@/lib/asset";
import { ScaleBox } from "./ScaleBox";

const W = 880;
const H = 552;

/**
 * A creator's own website, rendered as live DOM inside a browser chrome.
 * Copy is deliberately generic — this is a design specimen, not a client.
 */
export function SiteMockup({ className = "" }: { className?: string }) {
  return (
    <ScaleBox width={W} height={H} className={className}>
      <div
        className="h-full w-full overflow-hidden rounded-[14px] border border-[rgba(242,240,234,0.1)] bg-[#0A0A0C]"
        style={{ boxShadow: "0 50px 100px -40px rgba(0,0,0,0.95)" }}
      >
        <div className="browser-chrome">
          <span className="flex gap-1.5">
            {["#3A3A40", "#3A3A40", "#3A3A40"].map((c, i) => (
              <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
            ))}
          </span>
          <span className="t-index ml-3 flex-1 truncate rounded-md bg-[rgba(242,240,234,0.05)] px-3 py-1 text-[10px] text-bone-34">
            yourname.com
          </span>
          <span className="t-index text-[9px] uppercase tracking-[0.16em] text-bone-18">
            Specimen
          </span>
        </div>

        <div className="relative h-[calc(100%-41px)] w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 90% at 88% 8%, rgba(217,255,67,0.12), transparent 58%)",
            }}
          />

          {/* site nav */}
          <div className="relative flex items-center justify-between px-9 pt-7">
            <span className="t-display text-[13px] tracking-[0.16em]">YOUR NAME</span>
            <nav className="hidden items-center gap-7 md:flex">
              {["Method", "Programmes", "App", "Journal"].map((n) => (
                <span key={n} className="t-index text-[9.5px] uppercase tracking-[0.18em] text-bone-50">
                  {n}
                </span>
              ))}
            </nav>
            <span className="t-index rounded-full bg-volt px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-ink">
              Join
            </span>
          </div>

          <div className="relative mt-11 grid grid-cols-12 gap-6 px-9">
            <div className="col-span-7">
              <p className="t-index text-[9px] uppercase tracking-[0.24em] text-volt">
                Strength · Method · Community
              </p>
              <h3
                className="t-display t-condensed mt-5 text-[86px] leading-[0.78]"
                style={{ letterSpacing: "-0.045em" }}
              >
                Train
                <br />
                <span className="text-bone-34">with</span> me
              </h3>
              <p className="mt-6 max-w-[330px] text-[12.5px] leading-relaxed text-bone-50">
                Twelve-week strength blocks, built around the way you actually
                live. Train in the app. Progress in the numbers.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="t-index rounded-full bg-bone px-5 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-ink">
                  Start free week
                </span>
                <span className="t-index rounded-full border border-[rgba(242,240,234,0.16)] px-5 py-2.5 text-[9.5px] uppercase tracking-[0.12em] text-bone-70">
                  The method
                </span>
              </div>
            </div>

            <div className="col-span-5">
              <div className="h-[264px] w-full overflow-hidden rounded-[10px]" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/sculpte/cover-hero.webp")}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-[rgba(242,240,234,0.08)] px-9 py-4">
            <div className="flex items-center justify-between">
              {["12-week blocks", "iOS + Android", "Weekly check-ins", "Private community"].map(
                (s) => (
                  <span
                    key={s}
                    className="t-index text-[9px] uppercase tracking-[0.18em] text-bone-34"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </ScaleBox>
  );
}
