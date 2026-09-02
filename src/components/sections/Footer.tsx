import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";

const SOCIAL = [
  { label: "TikTok", href: "https://www.tiktok.com/@onka_kegakilwe" },
  { label: "SCULPTÉ", href: "https://www.sculpte.fitness/" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-rule)] pt-16 md:pt-20">
      <div className="shell grid grid-cols-12 gap-y-12 pb-12 md:pb-14">
        <div className="col-span-12 lg:col-span-5">
          <Logo markClass="h-8 w-8" textClass="text-[0.98rem]" />
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
                <Link
                  href={n.href}
                  data-cursor
                  className="link-wipe text-[0.92rem] text-bone-70 transition-colors duration-300 hover:text-bone"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
          <p className="t-index text-[0.56rem] uppercase tracking-[0.2em] text-bone-34">
            Elsewhere
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
            {SITE.legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-cursor
                  className="link-wipe text-[0.92rem] text-bone-70 transition-colors duration-300 hover:text-bone"
                >
                  {l.label}
                </Link>
              </li>
            ))}
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
            href="#main"
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
