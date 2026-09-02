"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LEGAL, UI, type Lang } from "@/lib/legal";
import { SITE } from "@/lib/site";
import { Reveal, Mask } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";

const STORAGE_KEY = "cc-legal-lang";

const LABELS = {
  en: { imprint: "Legal notice", privacy: "Privacy" },
  de: { imprint: "Impressum", privacy: "Datenschutz" },
} as const;

/** Turns bare URLs in the source text into real links. */
function linkify(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s,)]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="link-wipe break-words text-bone transition-colors duration-300 hover:text-volt"
      >
        {part.replace(/^https?:\/\//, "")}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function LegalDoc({ doc }: { doc: keyof typeof LEGAL }) {
  const [lang, setLang] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial: Lang =
      stored === "de" || stored === "en"
        ? stored
        : navigator.language?.toLowerCase().startsWith("de")
          ? "de"
          : "en";
    setLang(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang, ready]);

  const content = LEGAL[doc][lang];
  const ui = UI[lang];

  return (
    <section className="relative py-20 md:py-28">
      <div className="gridlines" aria-hidden="true" />

      <div className="shell relative grid grid-cols-12 gap-y-12 lg:gap-x-12">
        {/* ---- sticky rail ---- */}
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
            <SectionTag index="§" label={LABELS[lang][doc]} />

            <h1 className="t-display t-display-tight t-optical mt-8 text-[12vw] leading-[0.84] sm:text-[8vw] lg:text-[clamp(2.4rem,3.8vw,4.2rem)]">
              <Mask key={content.title}>{content.title}</Mask>
            </h1>

            <p className="t-body mt-6 max-w-[34ch]">{content.lede}</p>

            {/* ---- language switch ---- */}
            <div className="mt-10">
              <p className="t-index text-[0.56rem] uppercase tracking-[0.2em] text-bone-34">
                {ui.switchLabel}
              </p>
              <div
                className="mt-3 inline-flex rounded-full border border-[var(--color-rule)] p-1"
                role="group"
                aria-label={ui.switchLabel}
              >
                {(["en", "de"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`t-index rounded-full px-4 py-2 text-[0.62rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      lang === l
                        ? "bg-volt text-ink"
                        : "text-bone-50 hover:text-bone"
                    }`}
                  >
                    {l === "en" ? "English" : "Deutsch"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--color-rule)] pt-6">
              <Link
                href="/"
                className="link-wipe t-index text-[0.62rem] uppercase tracking-[0.16em] text-bone-50"
              >
                ← {ui.back}
              </Link>
            </div>
          </div>
        </div>

        {/* ---- document ---- */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <article key={lang} className="max-w-[68ch]">
            {content.blocks.map((b, i) => {
              if (b.kind === "h") {
                return (
                  <Reveal key={i} y={16}>
                    <h2
                      /* Each block sits in its own wrapper, so `first:` would
                         match every heading — key off the index instead. */
                      className={`t-display text-[1.25rem] leading-tight md:text-[1.45rem] ${
                        i === 0 ? "" : "mt-14 border-t border-[var(--color-rule)] pt-6"
                      }`}
                    >
                      {b.text}
                    </h2>
                  </Reveal>
                );
              }
              if (b.kind === "p") {
                return (
                  <Reveal key={i} y={16}>
                    <p className="t-body mt-4">{linkify(b.text)}</p>
                  </Reveal>
                );
              }
              if (b.kind === "list") {
                return (
                  <Reveal key={i} y={16}>
                    <ul className="mt-5 space-y-3">
                      {b.items.map((it) => (
                        <li key={it} className="flex items-baseline gap-4">
                          <span className="h-px w-4 shrink-0 translate-y-[-0.35em] bg-volt" />
                          <span className="t-body">{linkify(it)}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              if (b.kind === "rows") {
                return (
                  <Reveal key={i} y={16}>
                    <dl className="mt-5">
                      {b.rows.map(([k, v]) => (
                        <div
                          key={k}
                          className="flex flex-col gap-1 border-t border-[var(--color-rule)] py-3.5 last:border-b sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                        >
                          <dt className="t-index text-[0.58rem] uppercase tracking-[0.18em] text-bone-34">
                            {k}
                          </dt>
                          <dd className="text-[0.98rem] text-bone">
                            {v.includes("@") ? (
                              <a
                                href={`mailto:${v}`}
                                className="link-wipe transition-colors duration-300 hover:text-volt"
                              >
                                {v}
                              </a>
                            ) : (
                              v
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                );
              }
              return (
                <Reveal key={i} y={16}>
                  <address className="mt-5 not-italic">
                    {b.lines.map((l) => (
                      <span key={l} className="block text-[1.02rem] leading-relaxed text-bone">
                        {l.includes("@") ? (
                          <a
                            href={`mailto:${l}`}
                            className="link-wipe transition-colors duration-300 hover:text-volt"
                          >
                            {l}
                          </a>
                        ) : (
                          l
                        )}
                      </span>
                    ))}
                  </address>
                </Reveal>
              );
            })}

            <div className="mt-16 border-t border-[var(--color-rule)] pt-6">
              <p className="t-index text-[0.58rem] uppercase tracking-[0.16em] text-bone-34">
                {SITE.name} · {SITE.email}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
