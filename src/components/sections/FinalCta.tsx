import { SITE } from "@/lib/site";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { ApplyForm } from "./ApplyForm";

export function FinalCta() {
  return (
    <section id="apply" className="relative overflow-hidden py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-1/2 h-[70vh] w-[130vw] -translate-x-1/2 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(217,255,67,0.12), transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="diagonal-rule diagonal-rule-clay left-[-8%] top-[38%] w-[124%] rotate-[8deg] opacity-60"
      />

      <div className="shell relative">
        <SectionTag index="11" label="Apply" />

        <h2 className="t-display t-display-tight t-optical mt-9 text-[15vw] leading-[0.81] sm:text-[12vw] lg:text-[clamp(3.6rem,8.6vw,9.6rem)]">
          <Mask>You built</Mask>
          <Mask delay={0.07}>the audience.</Mask>
          <Mask delay={0.14}>Now build</Mask>
          <Mask delay={0.21}>
            <span>
              something <span className="text-volt">you own.</span>
            </span>
          </Mask>
        </h2>

        <div className="mt-20 grid grid-cols-12 gap-y-14 md:mt-28 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="t-lead max-w-[30ch] text-bone">
                We work with a limited number of creators at a time.
              </p>
              <p className="t-body mt-6 max-w-[34ch]">
                Tell us what you have built and what you want to own. If
                it&rsquo;s a fit, we&rsquo;ll come back with a product thesis
                and a partnership structure &mdash; not a proposal deck.
              </p>

              <div className="mt-10 border-t border-[var(--color-rule)] pt-7">
                <p className="t-index text-[0.58rem] uppercase tracking-[0.2em] text-bone-34">
                  Or write directly
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  data-cursor
                  className="link-wipe t-display mt-3 inline-block text-[1.15rem] tracking-[0.01em] md:text-[1.35rem]"
                >
                  {SITE.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <div className="rounded-[22px] border border-[var(--color-rule)] bg-[rgba(242,240,234,0.02)] p-6 md:p-10">
                <p className="t-index text-[0.58rem] uppercase tracking-[0.22em] text-volt">
                  Partnership application
                </p>
                <div className="mt-8">
                  <ApplyForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

    </section>
  );
}
