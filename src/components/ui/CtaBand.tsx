import { SITE } from "@/lib/site";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { ApplyButton } from "@/components/ui/Cta";

/** Closing band on content pages. The form itself lives on /apply. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-rule)] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[60vh] w-[120vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(217,255,67,0.10), transparent 68%)",
        }}
      />
      <div className="shell relative grid grid-cols-12 items-end gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <p className="t-eyebrow">Limited partner intake</p>
          <p className="t-display t-display-tight t-optical mt-6 text-[12vw] leading-[0.84] sm:text-[9vw] lg:text-[clamp(2.6rem,5.2vw,5.8rem)]">
            <Mask>Think it could</Mask>
            <Mask delay={0.07}>
              <span>
                be <span className="text-volt">yours?</span>
              </span>
            </Mask>
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:justify-self-end lg:text-right">
          <Reveal delay={0.14}>
            <ApplyButton size="lg" href={SITE.applyHref}>
              Apply to partner
            </ApplyButton>
            <p className="t-index mt-6 max-w-[30ch] text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-bone-34 lg:ml-auto">
              Revenue-share partnerships for selected creators.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
