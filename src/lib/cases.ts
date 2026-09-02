/**
 * CASE STUDIES.
 *
 * `metrics` values are deliberately blank. Fill them in only once the
 * creator has signed off on the figures — nothing on this site states a
 * number we cannot stand behind.
 */

export type CaseStudy = {
  id: string;
  status: "placeholder" | "live";
  kicker: string;
  creator: string;
  handle?: string;
  creatorUrl?: string;
  product?: string;
  productUrl?: string;
  image?: string;
  before: string;
  after: string[];
  metrics: { label: string; value: string }[];
};

export const CASES: CaseStudy[] = [
  {
    id: "01",
    status: "live",
    kicker: "Creator → digital fitness platform",
    creator: "Onka Kegakilwe",
    handle: "@onka_kegakilwe",
    creatorUrl: "https://www.tiktok.com/@onka_kegakilwe",
    product: "SCULPTÉ",
    productUrl: "https://www.sculpte.fitness/",
    image: "/sculpte/onka.webp",
    before:
      "An audience built on TikTok and Instagram, monetised through sponsorships and one-to-one coaching — with no product of her own to sell at scale.",
    after: [
      "SCULPTÉ — a training app on iOS and Android",
      "Programme library, guided sessions and meal plans",
      "Memberships, checkout and a community she owns",
    ],
    metrics: [
      { label: "Audience at launch", value: "—" },
      { label: "Members", value: "—" },
      { label: "Recurring revenue", value: "—" },
    ],
  },
];
