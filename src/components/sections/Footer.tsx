import { SITE } from "@/lib/site";
import { Mark, ArrowUpRight } from "@/components/ui/Icons";

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-rule)] pt-16 md:pt-20">
      <div className="shell grid grid-cols-12 gap-y-12 pb-12 md:pb-14">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3">
            <Mark className="h-7 w-7" />
            <span className="t-display text-[0.98rem] tracking-[0.13em]">
              {SITE.wordmark}
            </span>
          </div>
          <p className="t-lead mt-7 max-w-[26ch]">
            You built the audience.
            <br />
            <span className="text-bone">We help you build the business.</span>
          </p>
        </div>

        <nav className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7" aria-label="Footer">
          <p className="t-index text-[0.56rem] uppercase tracking-[0.2em] text-bone-34">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {SITE.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  data-cursor
                  className="link-wipe text-[0.92rem] text-bone-70 transition-colors duration-300 hover:text-bone"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
          <p className="t-index text-[0.56rem] uppercase tracking-[0.2em] text-bone-34">
            Social
          </p>
          <ul className="mt-5 space-y-3">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="group inline-flex items-center gap-1.5 text-[0.92rem] text-bone-70 transition-colors duration-300 hover:text-bone"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3 text-bone-34 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <p className="t-index text-[0.56rem] uppercase tracking-[0.2em] text-bone-34">
            Contact
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                data-cursor
                className="link-wipe text-[0.92rem] text-bone-70 transition-colors duration-300 hover:text-bone"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.applyHref}
                data-cursor
                className="link-wipe text-[0.92rem] text-volt"
              >
                Apply to partner
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* oversized wordmark, cropped by the bottom edge */}
      <div className="relative overflow-hidden" aria-hidden="true">
        <span className="t-display t-condensed block translate-y-[22%] whitespace-nowrap text-center text-[16.5vw] leading-[0.72] text-[rgba(242,240,234,0.085)]">
          {SITE.wordmark}
        </span>
      </div>

      <div className="border-t border-[var(--color-rule)]">
        <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-index text-[0.58rem] uppercase tracking-[0.16em] text-bone-34">
            © {year} {SITE.name} — Revenue-share product partner for creators.
          </p>
          <a
            href="#top"
            data-cursor
            className="t-index text-[0.58rem] uppercase tracking-[0.16em] text-bone-34 transition-colors duration-300 hover:text-bone"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
