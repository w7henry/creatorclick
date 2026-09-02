import type { ReactNode } from "react";
import { ScaleBox } from "./ScaleBox";

const W = 320;
const H = 668;

export function PhoneShell({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <ScaleBox width={W} height={H} className={className} style={style}>
      <div className="device h-full w-full" data-cursor>
        <div className="device-notch" />
        <div className="device-screen h-full w-full">{children}</div>
      </div>
    </ScaleBox>
  );
}

function StatusBar({ tone = "bone" }: { tone?: "bone" | "ink" }) {
  const c = tone === "ink" ? "text-ink" : "text-bone";
  return (
    <div className={`flex items-center justify-between px-6 pt-4 pb-1 ${c}`}>
      <span className="t-index text-[10px] font-medium">9:41</span>
      <div className="flex items-center gap-1 opacity-90">
        <svg width="15" height="10" viewBox="0 0 15 10" fill="currentColor" aria-hidden="true">
          <rect x="0" y="6" width="2.4" height="4" rx="0.6" />
          <rect x="4.2" y="4" width="2.4" height="6" rx="0.6" />
          <rect x="8.4" y="2" width="2.4" height="8" rx="0.6" />
          <rect x="12.6" y="0" width="2.4" height="10" rx="0.6" opacity="0.35" />
        </svg>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="17" height="9" rx="2.4" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="12.4" height="6" rx="1.4" fill="currentColor" />
          <path d="M19.4 3.4v3.2c1-.3 1.5-.9 1.5-1.6s-.5-1.3-1.5-1.6Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Ring({ value = 68, size = 62 }: { value?: number; size?: number }) {
  const r = size / 2 - 4;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(242,240,234,0.14)"
        strokeWidth="4"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#D9FF43"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value / 100)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="53%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F2F0EA"
        fontSize="14"
        fontWeight="700"
        fontFamily="var(--font-display)"
        letterSpacing="-0.03em"
      >
        {value}%
      </text>
    </svg>
  );
}

function TabBar({ active = 0 }: { active?: number }) {
  const items = [
    { d: "M3 10.5 12 3.5l9 7V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z", label: "Home" },
    { d: "M4 5h16v3H4V5Zm0 5.5h16v3H4v-3ZM4 16h10v3H4v-3Z", label: "Plan" },
    { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0H4Z", label: "You" },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-[rgba(242,240,234,0.08)] bg-[rgba(10,10,12,0.86)] px-8 pb-4 pt-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {items.map((it, i) => (
          <div key={it.label} className="flex flex-col items-center gap-1">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill={i === active ? "#D9FF43" : "rgba(242,240,234,0.34)"}
              aria-hidden="true"
            >
              <path d={it.d} />
            </svg>
            <span
              className="t-index text-[7px] uppercase tracking-[0.14em]"
              style={{ color: i === active ? "#D9FF43" : "rgba(242,240,234,0.30)" }}
            >
              {it.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-3 h-[3px] w-[86px] rounded-full bg-[rgba(242,240,234,0.28)]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SCREEN 01 — programme home                                          */
/* ------------------------------------------------------------------ */

export function AppHome() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="relative h-full w-full bg-[#08080A] text-bone">
      <div
        className="absolute inset-x-0 top-0 h-[300px]"
        style={{
          background:
            "radial-gradient(120% 78% at 72% 0%, rgba(217,255,67,0.14), transparent 62%)",
        }}
      />
      <div className="relative">
        <StatusBar />

        <div className="flex items-center justify-between px-6 pt-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[rgba(242,240,234,0.14)] bg-[rgba(242,240,234,0.05)]">
              <span className="t-index text-[9px] font-semibold tracking-[0.02em]">MK</span>
            </span>
            <span className="t-index text-[8.5px] uppercase tracking-[0.2em] text-bone-50">
              Week 06 · Phase II
            </span>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[rgba(242,240,234,0.1)]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 13h16M4 19h10" stroke="rgba(242,240,234,0.6)" strokeWidth="1.8" />
            </svg>
          </span>
        </div>

        <div className="px-6 pt-7">
          <p
            className="t-display t-condensed text-[52px] leading-[0.82]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Push
            <br />
            Day
          </p>
        </div>

        <div className="mx-6 mt-6 rounded-[18px] border border-[rgba(242,240,234,0.09)] bg-[rgba(242,240,234,0.035)] p-4">
          <div className="flex items-center gap-4">
            <Ring value={68} />
            <div className="flex-1">
              <p className="t-index text-[8px] uppercase tracking-[0.2em] text-volt">
                Today
              </p>
              <p className="mt-1.5 text-[13px] font-semibold leading-tight tracking-[-0.01em]">
                6 exercises · 42 min
              </p>
              <p className="t-index mt-1 text-[9px] text-bone-50">
                Upper body · Hypertrophy
              </p>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-volt text-[11px] font-bold uppercase tracking-[0.1em] text-ink"
            tabIndex={-1}
          >
            Start session
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </button>
        </div>

        <div className="mt-6 px-6">
          <div className="flex items-center justify-between">
            {days.map((d, i) => (
              <div key={`${d}-${i}`} className="flex flex-col items-center gap-2">
                <span className="t-index text-[8.5px] uppercase tracking-[0.1em] text-bone-34">
                  {d}
                </span>
                <span
                  className="grid h-[26px] w-[26px] place-items-center rounded-full text-[9px] font-bold"
                  style={
                    i < 3
                      ? { background: "#D9FF43", color: "#0B0B0C" }
                      : i === 3
                        ? {
                            border: "1px solid #D9FF43",
                            color: "#D9FF43",
                          }
                        : {
                            border: "1px solid rgba(242,240,234,0.12)",
                            color: "rgba(242,240,234,0.28)",
                          }
                  }
                >
                  {i < 3 ? "✓" : i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 px-6">
          <p className="t-index text-[8px] uppercase tracking-[0.22em] text-bone-34">
            Up next
          </p>
          <div className="mt-3 flex items-center gap-3 rounded-[14px] border border-[rgba(242,240,234,0.07)] p-2.5">
            <span className="h-11 w-11 shrink-0 rounded-[10px] bg-gradient-to-br from-[#26262c] to-[#111114]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11.5px] font-semibold tracking-[-0.01em]">
                Incline dumbbell press
              </p>
              <p className="t-index mt-0.5 text-[9px] text-bone-50">
                4 × 8 · 32.5 kg
              </p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m9 5 7 7-7 7" stroke="rgba(242,240,234,0.4)" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
      </div>
      <TabBar active={0} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SCREEN 02 — live session                                            */
/* ------------------------------------------------------------------ */

export function AppWorkout() {
  return (
    <div className="relative h-full w-full bg-[#08080A] text-bone">
      <StatusBar />
      <div className="flex items-center justify-between px-6 pt-4">
        <span className="t-index text-[8.5px] uppercase tracking-[0.2em] text-bone-50">
          Exercise 03 / 06
        </span>
        <span className="t-index rounded-full border border-[rgba(242,240,234,0.12)] px-2.5 py-1 text-[8.5px] uppercase tracking-[0.16em] text-bone-50">
          Rest 90s
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="relative">
          <svg width="196" height="196" viewBox="0 0 196 196" aria-hidden="true">
            <circle cx="98" cy="98" r="88" fill="none" stroke="rgba(242,240,234,0.08)" strokeWidth="2" />
            <circle
              cx="98"
              cy="98"
              r="88"
              fill="none"
              stroke="#D9FF43"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 88}
              strokeDashoffset={2 * Math.PI * 88 * 0.38}
              transform="rotate(-90 98 98)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="t-display tabnums text-[46px] leading-none"
              style={{ letterSpacing: "-0.05em" }}
            >
              0:42
            </span>
            <span className="t-index mt-1.5 text-[8px] uppercase tracking-[0.24em] text-volt">
              Set 3 of 4
            </span>
          </div>
        </div>

        <p
          className="t-display t-condensed mt-7 px-6 text-center text-[30px] leading-[0.9]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Incline
          <br />
          Press
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-2.5 px-6">
        {[
          { k: "Weight", v: "32.5", u: "kg" },
          { k: "Reps", v: "8", u: "reps" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-[14px] border border-[rgba(242,240,234,0.08)] bg-[rgba(242,240,234,0.03)] px-3 py-3"
          >
            <p className="t-index text-[8px] uppercase tracking-[0.2em] text-bone-34">
              {s.k}
            </p>
            <p className="mt-1.5 flex items-baseline gap-1">
              <span className="t-display tabnums text-[24px] leading-none">{s.v}</span>
              <span className="t-index text-[8.5px] text-bone-50">{s.u}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="px-6 pt-4">
        <button
          type="button"
          tabIndex={-1}
          className="flex h-11 w-full items-center justify-center rounded-full bg-volt text-[11px] font-bold uppercase tracking-[0.12em] text-ink"
        >
          Complete set
        </button>
        <p className="t-index mt-3 text-center text-[8.5px] uppercase tracking-[0.18em] text-bone-34">
          Next · Cable fly · 3 × 12
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SCREEN 03 — membership                                              */
/* ------------------------------------------------------------------ */

export function AppMembership() {
  return (
    <div className="relative h-full w-full bg-[#08080A] text-bone">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 55% at 50% 100%, rgba(217,255,67,0.13), transparent 60%)",
        }}
      />
      <div className="relative">
        <StatusBar />
        <div className="px-6 pt-8">
          <span className="t-index inline-block rounded-full border border-volt/40 px-2.5 py-1 text-[8px] uppercase tracking-[0.2em] text-volt">
            Membership
          </span>
          <p
            className="t-display t-condensed mt-5 text-[42px] leading-[0.85]"
            style={{ letterSpacing: "-0.04em" }}
          >
            The
            <br />
            Inner
            <br />
            Circle
          </p>
          <p className="mt-4 text-[11.5px] leading-relaxed text-bone-50">
            Full programme library, weekly check-ins and the private community.
          </p>
        </div>

        <div className="mx-6 mt-6 space-y-2.5">
          {[
            "New training block every 4 weeks",
            "Form reviews & Q&A",
            "Nutrition framework",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5">
              <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-volt">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m4.5 12.5 5 5 10-11" stroke="#0B0B0C" strokeWidth="3" />
                </svg>
              </span>
              <span className="text-[11px] text-bone-70">{f}</span>
            </div>
          ))}
        </div>

        <div className="mx-6 mt-7 rounded-[18px] border border-[rgba(242,240,234,0.1)] bg-[rgba(242,240,234,0.04)] p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="t-index text-[8px] uppercase tracking-[0.2em] text-bone-34">
                Monthly
              </p>
              <p className="mt-1 flex items-baseline gap-1">
                <span className="t-display text-[30px] leading-none">29</span>
                <span className="t-index text-[10px] text-bone-50">EUR / mo</span>
              </p>
            </div>
            <span className="t-index rounded-full bg-volt px-2 py-1 text-[7.5px] uppercase tracking-[0.14em] text-ink">
              7-day trial
            </span>
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="mt-4 flex h-10 w-full items-center justify-center rounded-full bg-bone text-[10.5px] font-bold uppercase tracking-[0.12em] text-ink"
          >
            Join now
          </button>
          <p className="t-index mt-2.5 text-center text-[8px] uppercase tracking-[0.14em] text-bone-34">
            Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}
