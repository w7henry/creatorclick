import { Mask, Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionTag } from "@/components/ui/SectionTag";
import { Plate } from "@/components/ui/Plate";

const CRITERIA = [
  { t: "A strong, engaged audience", s: "Depth beats follower count. Comments, replies, DMs, people who show up." },
  { t: "A clear personal brand", s: "We can tell what you stand for within thirty seconds of your feed." },
  { t: "Consistency", s: "You have shown up long enough that the audience is a habit, not a spike." },
  { t: "Long-term ambition", s: "You are thinking in years, not in one launch." },
  { t: "A desire to build something bigger", s: "Content is the beginning of the business, not the whole of it." },
];

export function Selectivity() {
  return (
    <section id="selectivity" className="relative overflow-hidden py-24 md:py-36">
      <div className="shell grid grid-cols-12 gap-y-14 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-7">
          <SectionTag index="02" label="Selectivity" />
          <h2 className="t-display t-display-tight t-optical mt-8 text-[14vw] leading-[0.82] sm:text-[11.5vw] lg:text-[clamp(3.2rem,6.9vw,7.6rem)]">
            <Mask>We don&rsquo;t work</Mask>
            <Mask delay={0.08}>
              <span>
                With <span className="t-outline">everyone.</span>
              </span>
            </Mask>
          </h2>
          <Reveal delay={0.18}>
            <div className="mt-10 max-w-[46ch] space-y-5">
              <p className="t-body">
                Revenue share only works when both sides genuinely believe in
                the opportunity. That is why we take on a small number of
                creators at a time, and why we say no more often than yes.
              </p>
              <p className="t-body text-bone">
                It is not exclusivity for its own sake. It is the only honest
                way to take real risk with somebody.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <Parallax distance={34}>
            <Reveal y={34}>
              <div className="relative">
                <Plate
                  src="/sculpte/cover-hero.webp"
                  alt=""
                  ratio="4/5"
                  className="rotate-[1.5deg] rounded-[18px]"
                />
                <div className="glass absolute -bottom-6 -left-6 hidden rounded-[14px] px-5 py-4 sm:block">
                  <p className="t-index text-[0.55rem] uppercase tracking-[0.2em] text-bone-34">
                    Intake
                  </p>
                  <p className="t-display mt-1.5 text-[1.4rem] leading-none">
                    Selective
                  </p>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>
      </div>

      {/* ---------- criteria ---------- */}
      <div className="shell mt-24 md:mt-32">
        <Reveal>
          <p className="t-eyebrow">What we look for</p>
        </Reveal>
        <ul className="mt-8">
          {CRITERIA.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <li
                data-cursor
                className="group relative grid grid-cols-12 items-baseline gap-x-5 gap-y-2 border-t border-[var(--color-rule)] py-7 transition-colors duration-500 last:border-b hover:bg-[rgba(242,240,234,0.02)] md:py-9"
              >
                <span className="t-index col-span-2 text-[0.62rem] text-bone-34 transition-colors duration-500 group-hover:text-volt md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="t-display col-span-10 text-[6.6vw] leading-[0.94] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 sm:text-[4.4vw] md:col-span-6 lg:text-[clamp(1.6rem,2.6vw,2.9rem)]">
                  {c.t}
                </h3>
                <p className="t-body col-span-12 col-start-3 max-w-[42ch] text-[0.92rem] md:col-span-4 md:col-start-8">
                  {c.s}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
