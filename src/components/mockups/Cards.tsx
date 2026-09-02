/** Small floating interface fragments used to layer the compositions. */

function SampleTag() {
  return (
    <span className="t-index absolute -top-2 right-3 rounded-full border border-[rgba(242,240,234,0.14)] bg-ink px-2 py-[3px] text-[7px] uppercase tracking-[0.16em] text-bone-34">
      Sample UI
    </span>
  );
}

export function RevenueCard({ className = "" }: { className?: string }) {
  const points = [0, 6, 4, 12, 10, 19, 17, 27, 34, 31, 44, 58];
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 168;
      const y = 46 - (p / 58) * 40;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className={`glass relative rounded-[16px] px-5 py-4 ${className}`} data-cursor>
      <SampleTag />
      <p className="t-index text-[8px] uppercase tracking-[0.22em] text-bone-34">
        Recurring revenue
      </p>
      <p className="mt-2 flex items-baseline gap-2">
        <span className="t-display tabnums text-[27px] leading-none">—</span>
        <span className="t-index text-[9px] uppercase tracking-[0.14em] text-volt">
          / month
        </span>
      </p>
      <svg viewBox="0 0 168 52" className="mt-3 h-[46px] w-[168px]" aria-hidden="true">
        <defs>
          <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(217,255,67,0.28)" />
            <stop offset="100%" stopColor="rgba(217,255,67,0)" />
          </linearGradient>
        </defs>
        <path d={`${path} L168 52 L0 52 Z`} fill="url(#spark)" />
        <path d={path} fill="none" stroke="#D9FF43" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="168" cy="6" r="2.6" fill="#D9FF43" />
      </svg>
      <p className="t-index mt-1 text-[7.5px] uppercase tracking-[0.14em] text-bone-34">
        Illustrative chart · no client data
      </p>
    </div>
  );
}

export function OwnershipCard({ className = "" }: { className?: string }) {
  const rows = [
    ["Audience", "Yours"],
    ["Product", "Yours"],
    ["Customer list", "Yours"],
  ];
  return (
    <div className={`glass relative rounded-[16px] px-5 py-4 ${className}`} data-cursor>
      <p className="t-index text-[8px] uppercase tracking-[0.22em] text-bone-34">
        Ownership ledger
      </p>
      <div className="mt-3 space-y-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-8">
            <span className="text-[11px] text-bone-70">{k}</span>
            <span className="t-index text-[9px] uppercase tracking-[0.14em] text-volt">
              {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
