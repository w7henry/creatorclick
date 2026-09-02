import { asset } from "@/lib/asset";

/** CreatorClick mark — the supplied artwork, corners cut to transparent. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={asset("/logo.webp")}
      alt=""
      aria-hidden="true"
      width={192}
      height={192}
      decoding="async"
      className={`shrink-0 select-none ${className}`}
    />
  );
}

/** Mark + wordmark, used in the header and footer. */
export function Logo({
  className = "",
  markClass = "h-8 w-8",
  textClass = "text-[0.98rem]",
}: {
  className?: string;
  markClass?: string;
  textClass?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Mark className={markClass} />
      <span className={`t-display tracking-[0.13em] ${textClass}`}>CREATORCLICK</span>
    </span>
  );
}
