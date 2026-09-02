/**
 * CASE STUDIES — placeholder data.
 *
 * Everything here is intentionally empty of numbers. Replace `metrics`
 * values and set `status: "live"` only once figures are verified with the
 * creator, and drop portrait/screenshot files into /public then reference
 * them from `image`.
 *
 * A real reference already exists from the previous site — sculpte.fitness
 * (@onka_kegakilwe). Fill in the details and flip `status` when the numbers
 * are confirmed.
 */

export type CaseStudy = {
  id: string;
  status: "placeholder" | "live";
  kicker: string;
  title: string;
  creator: string;
  image?: string;
  link?: string;
  before: string;
  after: string[];
  metrics: { label: string; value: string }[];
};

export const CASES: CaseStudy[] = [
  {
    id: "01",
    status: "placeholder",
    kicker: "Creator → digital fitness platform",
    title: "Strength creator",
    creator: "Creator name",
    before:
      "An engaged audience monetised almost entirely through sponsorships and affiliate links.",
    after: [
      "Custom website and brand system",
      "Training app on iOS and Android",
      "Premium programme and membership",
    ],
    metrics: [
      { label: "Audience at launch", value: "—" },
      { label: "Members", value: "—" },
      { label: "Recurring revenue", value: "—" },
    ],
  },
  {
    id: "02",
    status: "placeholder",
    kicker: "Coach → subscription business",
    title: "Online coach",
    creator: "Creator name",
    before:
      "One-to-one coaching capped by hours in the day, with no product to sell at scale.",
    after: [
      "Programme storefront and checkout",
      "Cohort challenges with community",
      "Retention and lifecycle automation",
    ],
    metrics: [
      { label: "Audience at launch", value: "—" },
      { label: "Members", value: "—" },
      { label: "Recurring revenue", value: "—" },
    ],
  },
];
