import { asset } from "@/lib/asset";

/**
 * A creator's own programme, as a product tile.
 *
 * The handle stays "@yourhandle" on purpose: these are specimens of what a
 * partner's product looks like, and inventing a creator's name would read
 * as a fake client. It also happens to say the thesis out loud.
 */
export function CreatorCard({
  title,
  kcal = "250 kcal",
  minutes = "26 min",
  handle = "@yourhandle",
  tone = "cream",
  src = "/sculpte/cover-glutes.webp",
  className = "",
}: {
  title: string;
  kcal?: string;
  minutes?: string;
  handle?: string;
  tone?: "cream" | "paper";
  src?: string;
  className?: string;
}) {
  return (
    <article
      className={`card-light ${tone === "cream" ? "card-cream" : "card-paper"} w-[18rem] p-4 ${className}`}
      data-cursor
    >
      <div className="flex items-center gap-1.5">
        <span className="pill-ink">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5" aria-hidden="true">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
          </svg>
          {kcal}
        </span>
        <span className="pill-ink">
          <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="2" />
          </svg>
          {minutes}
        </span>
      </div>

      <div className="mt-3 flex items-end gap-3">
        <div className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-volt" />
            <span className="t-index truncate text-[0.55rem] uppercase tracking-[0.14em] text-ink/60">
              {handle}
            </span>
          </span>
          <p className="t-display mt-1.5 text-[1.2rem] leading-[0.95]">{title}</p>
        </div>

        <div className="h-[4.2rem] w-[4.2rem] shrink-0 overflow-hidden rounded-[12px]">
          {src ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          ) : (
            <span className="plate-light block h-full w-full" aria-hidden="true" />
          )}
        </div>
      </div>
    </article>
  );
}
