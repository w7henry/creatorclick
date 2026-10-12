# Conversion psychology — what we took from Stan, and why

The home page was rebuilt around the persuasion structure of
[stan.store](https://stan.store), the creator-storefront platform. This file
records what that structure is, how each piece was translated for CreatorClick,
and what was deliberately left out.

**What was copied is the psychology, not the page.** No Stan copy, layout,
colours or branding are reused, and they shouldn't be. CreatorClick keeps its
own design system and voice.

**Source caveat.** The live stan.store page could not be loaded from the build
environment. The analysis rests on Stan's published, indexed homepage copy
("Meet your all-in-one Creator Store", "Try Stan for 14 days free", "Start my
trial"), its stated figures ($400M → $600M+ earned by creators), its pricing
($29 / $99, 14-day trial, no free plan), its partnerships page (15K+ followers,
10 spots a month) and third-party reviews. It is worth re-checking against the
live page.

---

## The levers, and where each one lives now

| # | Stan's lever | The psychology | CreatorClick version | Where |
|---|---|---|---|---|
| 1 | "All-in-one Creator Store": a named category | **Instant clarity.** A visitor decides in about five seconds whether a page is for them. A concrete noun beats a slogan. | Headline names the product outright: *Your own fitness app. Built and run for you.* | `Hero.tsx` |
| 2 | `stan.store/yourname` field + "Start my trial" | **Micro-commitment and endowment.** Typing your own name is a tiny first "yes", and seeing it on the product makes it feel like yours already. First-person CTA ("my") adds ownership. | `@handle` field. The handle appears live on an app-icon preview and on the floating product card. CTA: *See if I qualify*. | `HandleClaim.tsx` |
| 3 | 14-day free trial, 0% transaction fees | **Risk reversal.** Answer the money objection right where the hand is on the button. | Three assurances under every claim field: *No upfront invoice · Your brand stays yours · Buy-out option*. | `HandleClaim.tsx` (`Assurances`) |
| 4 | "$600M+ earned by creators", creator counts | **Social proof at scale.** | We don't have scale or signed-off numbers, so we use **specificity** instead: one real creator, one live product, a link, directly under the hero. | `ProofBar.tsx` |
| 5 | Creator photos with dollar outcomes | **Outcome proof.** Show that it worked for someone like the visitor. | *Not a mockup. A live product.* Onka and SCULPTÉ shown end to end, before → after. | `CaseTeaser.tsx` |
| 6 | Replaces Linktree + Kajabi + Calendly + Mailchimp | **Anchoring against the stack.** The price feels small next to everything it replaces. | *The whole stack. One partner.* A table of the hires and invoices it normally takes, with our column lit like a "recommended" plan. | `Stack.tsx` |
| 7 | "Set up in minutes" | **Effort heuristic.** People act when the next step feels small. | *Your part: ten minutes.* Five stages folded into three, with the creator's own time stated. | `Steps.tsx` |
| 8 | Partnerships: 15K+ followers, 10 spots a month | **Scarcity and selectivity.** Being chosen is worth more than being sold to. | *Limited partner intake* in the hero, plus *Case 02 — Reserved*: a visibly open seat. | `Hero.tsx`, `CaseTeaser.tsx` |
| 9 | FAQ on pricing | **Objection handling** before the last ask. | The five questions that block a decision: revenue share, ownership, lock-in, follower count, timeline. | `FAQ` with `pick` |
| 10 | The same CTA, everywhere | **Repetition and consistency.** One action, always within reach. | The same handle field closes every content page. A sticky *See if I qualify* bar follows mobile visitors, who previously had no visible CTA at all. | `CtaBand.tsx`, `StickyApply.tsx` |

The handle carries into `/apply` in the URL fragment, so the application opens
already started (*Started for @handle*). A half-finished task pulls harder than
a blank one.

### Page order

Promise and first step → proof → cost of standing still (`Problem`) → the
offer (`Stack`) → the effort (`Steps`) → the evidence (`CaseTeaser`) →
objections (`FAQ`) → the same first step again (`CtaBand`).

---

## Deliberately not copied

- **Big counters and dollar-tagged testimonials.** Stan has the numbers to back
  them up; we don't yet. Inventing them would be dishonest, legally risky
  (UWG §5, misleading advertising) and fatal to trust if found out. The site's
  rule stands: numbers appear only once a creator has confirmed them.
- **"Free trial" framing.** A done-for-you build isn't something you can try for
  14 days. The honest equivalent is *no upfront invoice*.
- **Stan's bright, friendly visual style.** CreatorClick sells a premium,
  selective partnership, and the dark editorial look already signals that.

## What would make it stronger (needs you, not code)

1. **Real figures for SCULPTÉ** in `src/lib/cases.ts` once Onka signs off. A
   single real number is the strongest proof the page can carry.
2. **A real intake cap**, e.g. "3 partner slots this quarter". Specific
   scarcity converts far better than "limited", but only if it's true.
3. **One quote from Onka** about working with you. A testimonial with a face
   and a name.
4. **Confirm "No upfront invoice"** matches your actual contracts. The page
   promises it in three places.
5. **Measurement.** The site has no analytics on purpose (see the privacy
   policy), so conversion can't be measured yet. If you want to A/B test,
   choose a cookieless tool and update the privacy policy first.
