import { asset } from "@/lib/asset";

/**
 * A real site in browser chrome. Fluid rather than scaled like the specimen
 * mockups, since it is a single image and can just fill its column.
 */
export function SiteShot({
  className = "",
  caption,
}: {
  className?: string;
  caption?: React.ReactNode;
}) {
  return (
    <figure className={className}>
      <div
        className="overflow-hidden rounded-[14px] border border-[var(--color-rule)] bg-[#0A0A0C]"
        style={{ boxShadow: "0 50px 100px -40px rgba(0,0,0,0.95)" }}
      >
        <div className="browser-chrome">
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#3A3A40]" />
            ))}
          </span>
          <span className="t-index ml-3 flex-1 truncate rounded-md bg-[rgba(242,240,234,0.05)] px-3 py-1 text-[10px] text-bone-34">
            sculpte.fitness
          </span>
          <span className="t-index text-[9px] uppercase tracking-[0.16em] text-volt">
            Live
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/sculpte/site-sculpte.webp")}
          alt="The SCULPTÉ website: a full-bleed portrait of Onka Kegakilwe beside the training app."
          width={1400}
          height={744}
          loading="lazy"
          decoding="async"
          className="block w-full"
        />
      </div>
      {caption && (
        <figcaption className="t-index mt-4 max-w-[52ch] text-[0.58rem] uppercase leading-relaxed tracking-[0.16em] text-bone-34">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
