import { asset } from "@/lib/asset";

/**
 * PLATE — art-directed media slot.
 *
 * With no `src` it renders a designed placeholder that is clearly labelled,
 * so nothing on the page pretends to be real photography.
 * To ship a real asset, drop the file into /public and pass `src`:
 *
 *   <Plate src="/creators/mara.jpg" alt="Mara K." ratio="4/5" />
 */
export function Plate({
  label = "Creator image",
  hint,
  ratio = "4/5",
  src,
  alt = "",
  index,
  className = "",
  glow = true,
  showLabel = true,
}: {
  label?: string;
  hint?: string;
  ratio?: string;
  src?: string;
  alt?: string;
  index?: string;
  className?: string;
  glow?: boolean;
  showLabel?: boolean;
}) {
  return (
    <div
      className={`plate ${className}`}
      style={{ aspectRatio: ratio }}
      data-cursor
    >
      {src ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          {/* Abstract light form — suggests a figure without faking one */}
          <svg
            viewBox="0 0 400 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id={`pg-${label.replace(/\W/g, "")}`} cx="32%" cy="24%" r="72%">
                <stop offset="0%" stopColor="rgba(242,240,234,0.15)" />
                <stop offset="55%" stopColor="rgba(242,240,234,0.03)" />
                <stop offset="100%" stopColor="rgba(242,240,234,0)" />
              </radialGradient>
            </defs>
            <rect
              width="400"
              height="500"
              fill={`url(#pg-${label.replace(/\W/g, "")})`}
            />
            <ellipse
              cx="200"
              cy="300"
              rx="118"
              ry="176"
              fill="none"
              stroke="rgba(242,240,234,0.075)"
              strokeWidth="1"
            />
            <ellipse
              cx="200"
              cy="188"
              rx="54"
              ry="58"
              fill="none"
              stroke="rgba(242,240,234,0.075)"
              strokeWidth="1"
            />
            {glow && (
              <circle cx="86" cy="82" r="2.5" fill="rgba(217,255,67,0.75)" />
            )}
          </svg>

          {/* Corner ticks */}
          {showLabel && (
            <>
              <span className="pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 border-l border-t border-bone-18" />
          <span className="pointer-events-none absolute right-3 top-3 h-3.5 w-3.5 border-r border-t border-bone-18" />
          <span className="pointer-events-none absolute bottom-3 left-3 h-3.5 w-3.5 border-b border-l border-bone-18" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-3.5 w-3.5 border-b border-r border-bone-18" />
            </>
          )}

          {index && showLabel && (
            <span className="t-index absolute left-4 top-4 text-[0.62rem] text-bone-34">
              {index}
            </span>
          )}

          <div
            className={`absolute inset-0 grid place-items-center px-6 text-center ${
              showLabel ? "" : "hidden"
            }`}
          >
            <div>
              <p className="t-index text-[0.6rem] uppercase tracking-[0.28em] text-bone-50">
                [ {label} ]
              </p>
              {hint && (
                <p className="t-index mt-2 text-[0.55rem] uppercase tracking-[0.18em] text-bone-34">
                  {hint}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
