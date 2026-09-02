import { Marquee } from "@/components/ui/Marquee";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";

const CHAIN = ["Content", "Audience", "Product", "Revenue", "Ownership"];

function ChainRun() {
  return (
    <>
      {CHAIN.map((word, i) => (
        <span key={word} className="flex items-center">
          <span
            className={`t-display t-condensed px-5 text-[9vw] leading-none md:px-8 md:text-[6.2vw] ${
              i % 2 === 1 ? "t-outline" : ""
            }`}
          >
            {word}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-[2.4vw] w-[2.4vw] shrink-0 text-volt md:h-[1.5vw] md:w-[1.5vw]"
            aria-hidden="true"
          >
            <path d="M4 12h15m0 0-6.2-6.2M19 12l-6.2 6.2" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        </span>
      ))}
    </>
  );
}

export function Statement() {
  return (
    <section id="statement" className="relative overflow-hidden py-20 md:py-28">
      {/* horizontal chain — the whole thesis in one moving line */}
      <div className="rule-top rule-bottom py-6 md:py-8">
        <Marquee duration={44} ariaLabel="Content leads to audience, product, revenue and ownership">
          <ChainRun />
        </Marquee>
      </div>

      <div className="shell relative grid grid-cols-12 gap-y-10 pt-16 md:pt-24">
        {/* deliberately low-slung left column */}
        <div className="col-span-12 lg:col-span-3 lg:self-end lg:pb-4">
          <SectionTag index="01" label="Where you already stand" />
          <Reveal delay={0.1}>
            <p className="t-body mt-7 max-w-[34ch]">
              The problem isn&rsquo;t attention.
              <br />
              It&rsquo;s ownership.
            </p>
          </Reveal>
        </div>

        {/* headline pushed right — asymmetry by default */}
        <div className="col-span-12 lg:col-span-9">
          <h2 className="t-display t-display-tight t-optical text-[14.5vw] leading-[0.82] sm:text-[12.5vw] lg:text-[clamp(3.6rem,8.1vw,9rem)]">
            <Mask>Your audience</Mask>
            <Mask delay={0.07}>Is already</Mask>
            <Mask delay={0.14}>
              <span className="t-serif text-volt">valuable.</span>
            </Mask>
          </h2>
        </div>
      </div>

      <div className="shell mt-16 md:mt-24">
        <Marquee duration={26} reverse ariaLabel="">
          <div className="flex items-center">
            {[
              "Instagram",
              "TikTok",
              "YouTube",
              "Newsletter",
              "Community",
              "Podcast",
            ].map((p) => (
              <span
                key={p}
                className="t-index flex items-center gap-6 pr-6 text-[0.68rem] uppercase tracking-[0.24em] text-bone-34"
              >
                {p}
                <span className="h-1 w-1 rounded-full bg-volt/60" />
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
