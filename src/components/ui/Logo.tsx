/** CreatorClick mark — a tapered "C" opening onto a cursor mid-click. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-grid shrink-0 place-items-center overflow-hidden rounded-[24%] bg-volt ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path
          d="M59.78 84.72 A36.50 36.50 0 1 1 80.71 33.90 L73.68 44.44 A25.50 25.50 0 1 0 59.38 71.75 Z"
          fill="#0B0B0C"
        />
        <path
          d="M52.5 52 L86 71.5 L70.8 75.8 L65.9 90.5 Z"
          fill="#0B0B0C"
          stroke="#0B0B0C"
          strokeWidth="4.8"
          strokeLinejoin="round"
        />
        <path d="M46.51 47.48 L40.11 42.66" stroke="#0B0B0C" strokeWidth="5.6" strokeLinecap="round" />
        <path d="M49.81 45.00 L47.06 37.53" stroke="#0B0B0C" strokeWidth="5.6" strokeLinecap="round" />
        <path d="M54.69 44.83 L57.03 37.18" stroke="#0B0B0C" strokeWidth="5.6" strokeLinecap="round" />
        <path d="M58.16 47.08 L64.20 41.83" stroke="#0B0B0C" strokeWidth="5.6" strokeLinecap="round" />
      </svg>
    </span>
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
