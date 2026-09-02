export const SITE = {
  name: "CreatorClick",
  wordmark: "CREATORCLICK",
  url: "https://w7henry.github.io/creatorclick",
  tagline: "You built the audience. We help you build the business.",
  description:
    "CreatorClick is a revenue-share product partner for fitness creators. We design and build premium websites, training apps and digital products — and only win when you win.",
  applyHref: "/apply",
  email: "partners@creator-click.com",

  /**
   * Make.com webhook the application form posts to.
   * Team "My Team" (2361746) → hook "CreatorClick — Partnership Applications".
   * A scenario must be listening on it for submissions to be delivered;
   * the form falls back to a mailto: if the POST fails.
   */
  formWebhook: "https://hook.eu2.make.com/bedd5qsx8mojpp449sn2nn9llmx09dxt",

  nav: [
    { label: "How it works", href: "/how-it-works" },
    { label: "What we build", href: "/what-we-build" },
    { label: "Partnership", href: "/partnership" },
    { label: "Case studies", href: "/work" },
  ],

  legal: [
    { label: "Imprint", href: "/legal/imprint" },
    { label: "Privacy", href: "/legal/privacy" },
  ],
} as const;
