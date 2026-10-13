# Rankoya landing page: implementation plan (v2)

A modern, responsive, high-conversion marketing site for **Rankoya** at `landing_page/rankoya/` (standalone repo: `favour-the-dev/rankoya_landingpage`). Section flow is modelled on [rankyak.com](https://rankyak.com/); everything visual and verbal follows the Rankoya brand guide.

This is v2 of the plan. v1 lives in the app repo history (`docs/landing_page_implementation_Plan.md`). Section 1 lists what changed and why.

---

## 0. Context

| Item               | Detail                                                                                                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product            | Rankoya: AI SEO and AI-search visibility. Tagline _Be the answer._                                                                                                    |
| Repo               | `landing_page/rankoya/`, its own git repo, deployed on its own. Not part of the app's build.                                                                          |
| Stack              | Next 16.4 (App Router, `cacheComponents` + `partialPrefetching` on), React 19.3, Tailwind 4 through `@tailwindcss/turbopack` (no PostCSS), TypeScript strict          |
| Added dependencies | `motion` 14, `lucide-react`, `next-themes`, `class-variance-authority`, `clsx`, `tailwind-merge`; dev: `prettier`, `prettier-plugin-tailwindcss`                      |
| Brand source       | App repo: `docs/rankoya_brand_identity.md` (wins on conflict), `src/app/globals.css`, `src/components/brand/logo.tsx`, `src/config/brand.ts`, `src/config/pricing.ts` |
| Marketing URL      | `https://rankoya.uk` (`NEXT_PUBLIC_SITE_URL`)                                                                                                                         |
| App URL            | `https://app.rankoya.uk` (`NEXT_PUBLIC_APP_URL`). Auth routes are `/sign-in` and `/sign-up`; there is no `/login`.                                                    |
| Company            | NETSACH TECH LTD                                                                                                                                                      |

### Decisions already made (from v1 open questions)

| #   | Question        | Answer                                                   | How v2 applies it                                                                                                                                   |
| --- | --------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | CTA destination | The app's auth page                                      | "Get started" → `app.rankoya.uk/sign-up`, "Log in" → `app.rankoya.uk/sign-in`. `/login` does not exist in the app. Both URLs live in `lib/site.ts`. |
| 2   | Google sign-in  | Single "Get started" CTA                                 | Hero has one button. No Google button, no second hero button.                                                                                       |
| 3   | Press logos     | Keep the marquee, show our platform integrations instead | Logo marquee under the hero with the real integrations and engines. Labelled "Works with" so it doesn't read as an endorsement by those companies.  |
| 4   | Demo video      | Static screenshot and animated mockups                   | Product showcase is a coded, animated dashboard mockup (crisp at any size, themed, no stale screenshot). A real screenshot can replace it later.    |
| 5   | Testimonials    | Use fictional ones                                       | Allowed, but each card carries a visible "Illustrative example" label (PRODUCT.md forbids passing off invented proof as real).                      |
| 6   | Dependencies    | Add `motion` and `lucide-react`                          | Added, plus `next-themes` (theme toggle), `cva`/`clsx`/`tailwind-merge` (component variants, matching the app).                                     |

---

## 1. Gaps found in v1 and how v2 fixes them

| #   | Gap in v1                                                                                                      | Fix in v2                                                                                                                                                                                                                                                                                                    |
| --- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Called the palette "Ink and Signal" (PRODUCT.md's old lime-signal guide).                                      | The live palette is **Blue and Navy** with Signal **Violet** `#5B47F5`. Tokens are copied from the app's `globals.css`; the brand guide wins on conflict.                                                                                                                                                    |
| 2   | Phase 1 adds `@tailwindcss/postcss`.                                                                           | The scaffold compiles CSS with `@tailwindcss/turbopack` in `next.config.ts`. No PostCSS config is needed or added.                                                                                                                                                                                           |
| 3   | CTAs pointed to `/login`.                                                                                      | The app's routes are `/sign-in` and `/sign-up`. A signed-out `/login` would bounce to `/sign-in?next=/login` and 404 after sign-in.                                                                                                                                                                          |
| 4   | Hero had two CTAs, a mock "4.8/5" star rating and an "X articles generated" counter.                           | One CTA (decision 2). Fabricated ratings and counters removed (PRODUCT.md: "do not fabricate them"). The proof strip states product facts instead: platforms tracked, approval before publishing, Telegram approvals.                                                                                        |
| 5   | "Now tracking AI answers across 5 engines".                                                                    | The app tracks 6 platforms: Google, Google Maps, ChatGPT, Claude, Gemini, Perplexity. Copy names them and doesn't round.                                                                                                                                                                                     |
| 6   | Product showcase reused `docs/reference_image.png`.                                                            | That image is an off-brand "SEO Pilot" concept (John Doe, Acme Agency, rocket logo). It must not ship. The showcase is a coded Rankoya dashboard using the app's mock entities (Northwind Roasters and its competitors).                                                                                     |
| 7   | Social proof section said "stub or omit".                                                                      | Replaced by the integrations marquee (decision 3).                                                                                                                                                                                                                                                           |
| 8   | Integrations listed Zapier, Make and Wix/Webflow next to things the app doesn't have.                          | Only real providers from the app's integration catalog: WordPress, Shopify, Webflow, Wix, Ghost, Google Search Console, Google Analytics, Telegram. Official marks come from the app's `assets/icons/platforms`.                                                                                             |
| 9   | Pricing tiers "Free / Professional / Agency", "All plans include a free trial. No credit card required."       | Tiers match the app's plans under their display names: Free, Growth (`professional`), Agency, plus Enterprise (`reseller`) and White Label for resellers. All prices are `null` in the app, so cards show "Price coming soon" (the app's wording). The free-trial / no-card line is removed until confirmed. |
| 10  | Announcement banner and hero announcement pill both planned.                                                   | One: the pill inside the hero. A separate banner pushes the hero below the fold on phones.                                                                                                                                                                                                                   |
| 11  | Wordmark described as lowercase "rankoya" in Geist.                                                            | The shipped lockup is the title-case "Rankoya" image with the R-and-arrow mark. v2 uses the app's PNG artwork (light and dark), as the app's `Logo` component does.                                                                                                                                          |
| 12  | SEO plumbing was "add OG and Twitter tags". For an SEO product's own site, that's not enough.                  | `metadataBase`, canonical URL, title template, generated OG image, Twitter card, `robots.ts`, `sitemap.ts`, JSON-LD (`Organization` + `SoftwareApplication`), favicon/icon/apple-icon from the app, `viewport.themeColor`.                                                                                   |
| 13  | "Add viewport meta".                                                                                           | Next adds the viewport tag. Theme colour goes in the `viewport` export, not `metadata`.                                                                                                                                                                                                                      |
| 14  | Dark mode was "toggle optional", with no mechanism for applying `.dark`.                                       | `next-themes` with `attribute="class"`, system default, a header toggle, and `suppressHydrationWarning` on `<html>`.                                                                                                                                                                                         |
| 15  | Accessibility (skip link, focus, ARIA, reduced motion) was left to the final phase.                            | Built into every phase. Each phase has its own acceptance checks (section 4).                                                                                                                                                                                                                                |
| 16  | No plan for the sticky header covering anchor targets, or for the mobile menu's focus, Escape and scroll lock. | `scroll-margin-top` on sections; mobile menu is a modal dialog with focus trap, Escape to close, body scroll lock and focus return.                                                                                                                                                                          |
| 17  | Hero headline faded in from opacity 0.                                                                         | That delays Largest Contentful Paint. The `h1` and hero copy render visible; only decorative mockups animate.                                                                                                                                                                                                |
| 18  | Motion setup unspecified.                                                                                      | `motion/react` through `LazyMotion` + `m` (smaller bundle) inside `MotionConfig reducedMotion="user"`. One shared `Reveal` component.                                                                                                                                                                        |
| 19  | Copy scattered across components; mock data hard to swap.                                                      | All copy and mock data in `content/` modules, all URLs in `lib/site.ts`. Components take no hard-coded strings. This also makes later translation easier.                                                                                                                                                    |
| 20  | Components in `app/components`.                                                                                | `components/{layout,sections,ui,brand,mockups}` at the project root, `lib/`, `content/`. `app/` holds routes and metadata files only.                                                                                                                                                                        |
| 21  | `cacheComponents` constraints ignored.                                                                         | Pages are fully static. Nothing in server render reads the clock or request data (for example, the footer year is a constant, not `new Date()`).                                                                                                                                                             |
| 22  | Responsive display type "44→60px" didn't exist in the token set.                                               | Marketing type scale added as fluid `clamp()` utilities (`text-hero`, `text-section`), alongside the app's fixed scale.                                                                                                                                                                                      |
| 23  | Footer links to Terms/Privacy/Cookies with no target.                                                          | The app hosts `/privacy-policy`, `/terms-of-service`, `/refund-policy`; the footer links there. No cookie policy is linked until one exists.                                                                                                                                                                 |
| 24  | No deployment, environment or analytics plan.                                                                  | Section 6.                                                                                                                                                                                                                                                                                                   |
| 25  | Verification was only build, lint and Lighthouse.                                                              | Adds `typecheck` and `format:check` scripts, a per-phase checklist and a banned-words grep.                                                                                                                                                                                                                  |
| 26  | The parent app repo doesn't ignore `landing_page/`.                                                            | Add `landing_page/` to the app repo's `.gitignore` so the nested repo is never committed into it as a gitlink.                                                                                                                                                                                               |

---

## 2. Page structure

| #   | Section            | Anchor          | Phase | RankYak equivalent  |
| --- | ------------------ | --------------- | ----- | ------------------- |
| 1   | Header             | none            | 2     | Sticky header       |
| 2   | Hero (with pill)   | `#top`          | 2     | Hero + announcement |
| 3   | Works-with marquee | `#works-with`   | 2     | "As seen in"        |
| 4   | Product showcase   | `#product`      | 2     | Demo video          |
| 5   | Feature deep-dives | `#features`     | 3     | Feature sections    |
| 6   | How it works       | `#how-it-works` | 4     | How it works        |
| 7   | Integrations grid  | `#integrations` | 4     | Integrations        |
| 8   | Testimonials       | `#stories`      | 5     | Success stories     |
| 9   | Pricing            | `#pricing`      | 5     | Pricing             |
| 10  | FAQ                | `#faq`          | 6     | FAQ                 |
| 11  | Final CTA          | none            | 6     | Bottom CTA          |
| 12  | Footer             | none            | 1 / 6 | Footer              |

Header nav is driven by `NAV_LINKS` in `lib/site.ts`. Each phase adds its own anchor when the section ships, so the nav never links to a section that isn't on the page.

---

## 3. File structure

```
landing_page/rankoya/
├── app/
│   ├── layout.tsx            fonts, metadata, viewport, providers, JSON-LD
│   ├── page.tsx              section composition
│   ├── globals.css           tokens, type scale, base styles
│   ├── opengraph-image.tsx   generated 1200×630 share card
│   ├── robots.ts, sitemap.ts
│   └── favicon.ico, icon.png, apple-icon.png   (copied from the app)
├── assets/
│   ├── brand/                logo + mark, light/dark (copied from the app)
│   └── platforms/            official integration + engine marks
├── components/
│   ├── brand/                logo.tsx, platform-tile.tsx
│   ├── layout/               header.tsx, mobile-menu.tsx, footer.tsx, skip-link.tsx, theme-toggle.tsx
│   ├── mockups/              dashboard-mockup.tsx (+ later feature mockups)
│   ├── providers.tsx         ThemeProvider + MotionConfig + LazyMotion
│   ├── sections/             hero.tsx, works-with.tsx, product-showcase.tsx, …
│   └── ui/                   button.tsx, container.tsx, section.tsx, reveal.tsx
├── content/                  copy and mock data per section
├── lib/                      site.ts (URLs, nav), cn.ts, json-ld.ts
└── docs/IMPLEMENTATION_PLAN.md
```

---

## 4. Phases

Every phase must pass: `npm run lint`, `npm run typecheck`, `npm run build`, keyboard-only pass, light + dark check, 375px / 768px / 1440px check, `prefers-reduced-motion` check, banned-words grep.

### Phase 1: Foundation

- Dependencies and scripts (`typecheck`, `format`, `format:check`), Prettier config matching the app.
- `globals.css`: the app's light and dark tokens verbatim, `@custom-variant dark`, the app's type scale plus fluid `text-hero` / `text-section`, motion easings, focus ring, selection colour, reduced-motion reset, `scroll-margin-top` for anchors, `.num` for tabular figures.
- `layout.tsx`: Geist / Geist Mono, `metadataBase`, title template, description, keywords, canonical, Open Graph, Twitter card, `viewport.themeColor` per scheme, `suppressHydrationWarning`, JSON-LD, skip link, providers.
- Metadata files: `opengraph-image.tsx` (navy card, lockup, "Be the answer."), `robots.ts`, `sitemap.ts`, app icons copied from the app.
- `lib/site.ts`: site/app URLs from env with production defaults, sign-in/sign-up URLs, nav links, legal links.
- UI primitives: `Button` (cva: primary/secondary/ghost, sizes; renders `<a>` for links), `Container`, `Section`, `Reveal`.
- Brand: `Logo`, `Mark` (themed artwork pair, as in the app), `PlatformTile`.
- Footer shell: lockup, tagline, legal links, "© 2026 NETSACH TECH LTD". Expanded in phase 6.
- Remove the create-next-app boilerplate (`public/*.svg`, page content, README).

**Done when:** build is clean, the page renders the header, empty main and footer shell in both themes, `/robots.txt`, `/sitemap.xml` and `/opengraph-image` resolve, and Lighthouse SEO is 100 on the shell.

### Phase 2: Header, hero, works-with, product showcase

- **Header**: sticky, transparent at top, surface background plus bottom border once scrolled (scroll listener with passive flag, state only flips on threshold). Lockup left, nav centre (≥ `lg`), theme toggle + "Log in" + "Get started" right. Below `lg`: menu button opens a full-screen dialog (focus trap, Escape, scroll lock, focus return, `aria-expanded`/`aria-controls`).
- **Hero**: announcement pill ("Now tracking Google, Maps, ChatGPT, Claude, Gemini and Perplexity"), `h1` "See where you rank on Google and in AI answers. Then close the gap." with inline engine tiles, sub-headline from the brand guide, single "Get started" button, reassurance line, proof strip of product facts (no ratings or counts).
- **Works-with marquee**: real integration and engine marks scrolling in a loop. Pauses on hover and focus, stops with reduced motion, duplicate track `aria-hidden`, edge fade masks. Static list for screen readers.
- **Product showcase**: coded dashboard mockup in browser chrome on a navy-to-midnight panel: visibility score ring, six platform cards with sparklines and deltas, a competitor rank list with "You" moving up, and an agent approval card in violet. Lines draw and numbers settle on first view; static under reduced motion. Decorative content is `aria-hidden` with a text summary for assistive tech.

**Done when:** hero `h1` is the LCP element and paints without waiting on JS, the CTA points to `/sign-up`, the menu passes a keyboard-only pass, and the marquee and mockup are still under reduced motion.

### Phase 3: Feature deep-dives

Reusable `FeatureRow` (alternating sides on `lg+`, stacked below; overline, `h2`, copy, bullet list, mockup). Five rows, each with its own coded mockup in `components/mockups/`:

1. **AI visibility**: "See where you show up in AI answers." Answer card with the brand line highlighted in violet, engine tiles, "mentioned" pill.
2. **Rankings and competitors**: "Know who outranks you, and why." Line chart, "You" in blue over orange/teal/magenta competitors; rank list.
3. **Your SEO agent**: "Approve the fix. Rankoya does the work." Approval card (Approve violet, Edit outlined), autopilot mode switch, Telegram thread hint.
4. **Content**: "Articles drafted from what's ranking now." Editor card with heading outline and "Rankoya does this" / "You do this" split.
5. **Site audit**: "Find what's holding your rankings back." Issue list with severity badges, never colour-only (icon + label).

Deltas always carry an arrow and sign, not only colour.

### Phase 4: How it works + integrations

- **How it works**: the real workflow, 6 steps: Add your site → Rankoya scans → Ranked action plan → Agent drafts → You approve (app or Telegram) → Publish. Horizontal on `lg+`, vertical timeline below. Staggered reveal.
- **Integrations grid**: grouped as in the app's catalog: Publishing (WordPress, Shopify, Webflow, Wix, Ghost), Data (Search Console, Analytics), Approvals (Telegram), AI engines tracked (ChatGPT, Claude, Gemini, Perplexity, Google, Maps).
- Header nav gains "How it works" and "Integrations".

### Phase 5: Testimonials + pricing

- **Testimonials**: 3 cards built on the mock personas (Ada Okafor / Northwind Roasters, plus an agency persona). Each card shows an "Illustrative example" tag. Replace with real quotes later through `content/testimonials.ts`.
- **Pricing**: Free, Growth (highlighted as "Recommended", not "Most popular", since there are no customers yet), Agency, plus an Enterprise and White Label strip for resellers (Starter 100, Pro 300, Unlimited client licences, one-time). Feature lists are the app's own plan-card lines. Price slots read "Price coming soon" while the app's prices are `null`; a single `content/pricing.ts` change turns them on. Monthly/annual toggle ships disabled until prices exist.

### Phase 6: FAQ, final CTA, full footer

- **FAQ**: native `<details>`/`<summary>` (accessible, works without JS) with animated height, 8 questions from v1 rewritten in brand voice. Emits `FAQPage` JSON-LD.
- **Final CTA**: midnight panel, "Be the answer.", one "Get started" button.
- **Footer**: Product (section anchors), Company (contact `mailto`), Legal (app's privacy, terms, refund), social links only once accounts exist. Closes with the lockup as a large one-colour watermark at container width, fading towards the bottom edge and cropped by it (`assets/brand/logo-mask.png`, a white high-resolution cut of the lockup used as a CSS mask over a white-to-transparent gradient). Decorative and `aria-hidden`; it sits below the text so it never affects contrast.

### Phase 7: Polish and QA

Motion review across sections (500–700ms, `--ease-out`, 60–100ms stagger), Lighthouse ≥ 95 on all four categories on mobile, cross-browser pass (Chrome, Firefox, Safari, iOS Safari), screen-reader pass (NVDA + VoiceOver), real-device check, image weights audit, final copy pass against the banned-words list.

#### Phase 7 results (local, production build)

| Check                                                                                                   | Result                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| axe-core (WCAG 2.0–2.2 A/AA + best practice), light and dark, 1440px and 390px                          | 0 violations, 43 rules passing in each run                                                                                                                            |
| Lighthouse mobile: Accessibility, Best Practices, SEO                                                   | 100 / 100 / 100                                                                                                                                                       |
| Lighthouse mobile: Performance                                                                          | 56–77 locally; the dev machine's background load makes TBT swing from 0.45 s to 11 s between identical runs. **Re-check on the Vercel preview (PageSpeed Insights).** |
| Unthrottled cost (Chrome performance metrics)                                                           | ~150–250 ms script, ~100 ms style, ~200–280 ms layout on load; zero work while idle; 199 KB JS transferred; 40 KB gzipped HTML                                        |
| Console errors and warnings, broken in-page anchors, images without alt, duplicate ids, heading outline | None; one `h1`, then `h2` per section and `h3` inside                                                                                                                 |
| JavaScript disabled                                                                                     | All content visible (reveals and mockups), FAQ opens natively                                                                                                         |
| Reduced motion                                                                                          | Reveals off, marquee static, mockups render their end state                                                                                                           |
| Copy                                                                                                    | Banned-words grep clean; no exclamation marks                                                                                                                         |

Changes made in this phase:

- **Reveal**: the per-element `motion` wrappers (about 40) were the largest main-thread cost. Replaced with one shared IntersectionObserver plus CSS transitions; content is only hidden after that script runs. A CSS scroll-driven version (`animation-timeline: view()`) was tried and measured far worse (style and layout above 11 s under throttling), so it was dropped.
- **Hydration**: the below-the-fold sections with client code sit in their own `<Suspense>` boundaries so React hydrates them as smaller tasks.
- **Fonts**: Geist Mono is no longer preloaded (nothing above the fold uses it), leaving the bandwidth to Geist for the hero heading.
- **Hero marks** load eagerly (they sit inside the LCP heading).
- **Contrast**: dark-theme `--ink` is `#2563eb` here instead of the app's `#3b82f6`. White text on `#3b82f6` is 3.7:1 and fails AA. **The app has the same issue in its dark theme.**
- **No-JS**: a `<noscript>` rule un-hides mockup parts that animate in from opacity 0.

Not done here (needs people or devices): Firefox and Safari passes, iOS Safari on a real phone, NVDA and VoiceOver passes, Lighthouse on the deployed preview.

---

## 5. Brand and copy rules (enforced in review)

- Sentence case, no exclamation marks, numbers first.
- Banned: supercharge, unleash, revolutionize, magic, game-changer, seamless.
- Violet is the rarest colour: agent and wins only, flat fill, never a gradient.
- No sparkle/robot/rocket icons, no glowing orbs, no purple gradients, no emoji.
- No invented ratings, customer counts, benchmarks or prices.

---

## 6. Deployment and environment

| Variable               | Default                  | Used for                           |
| ---------------------- | ------------------------ | ---------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://rankoya.uk`     | `metadataBase`, canonical, sitemap |
| `NEXT_PUBLIC_APP_URL`  | `https://app.rankoya.uk` | Sign-in / sign-up links            |

- Host on Vercel as its own project, domain `rankoya.uk` (+ `www` redirect).
- Preview deploys set `robots` to `noindex` via `VERCEL_ENV !== "production"`.
- Analytics and cookie consent: **open**. Pick a cookieless option (Vercel Web Analytics or Plausible) to avoid a consent banner, or add a banner and a cookie policy together.

## 7. Open items for the product owner

1. Confirm the "Works with" label for the marquee (asked for "Trusted by"; listing third-party marks under "Trusted by" implies their endorsement).
2. Real prices, and whether there is a free trial.
3. Social accounts for the footer.
4. Contact email for the footer and JSON-LD (`hello@rankoya.uk` is a placeholder).
5. Analytics choice (section 6).
6. Where the legal pages live: on this site (`/legal/…`, as RankYak does) or in the app (section 8.4).
7. Competitor shortlist for the `/alternatives` pages (section 8.2).
8. SVG versions of the lockup and mark, for the logo right-click menu and `/brand` (section 8.2).
9. Contact form: an email provider (Resend, Postmark or similar) so `/contact` can send a form instead of opening `mailto:` (section 8.6).
10. Confirm the Free plan column in the `/pricing` comparison: is competitor share of voice, the site audit or Telegram available on Free? (section 8.6).
11. Apply the two contrast fixes in the app too: dark `--ink` `#2563eb` and light `--text-3` `#5d6c82`.

---

## 8. Additional pages, modelled on RankYak's site map

Phases 1–7 deliver the home page. The rest of the site follows [rankyak.com](https://rankyak.com/)'s information architecture (captured 2026-10-13): three mega-menu dropdowns, two plain links and a seven-column footer. Each RankYak page is mapped to its Rankoya equivalent below. Rankoya's feature list comes from the app's own routes (`overview`, `visibility`, `rankings`, `competitors`, `actions`, `agent`, `content`, `audit`, `integrations`), not from RankYak's: Rankoya has no backlink exchange, MCP server or public API today, so those pages are left out until the product has them.

URL patterns copy RankYak's (`/features/…`, `/for-…`, `/alternatives/…`, `/tools/…`, `/integrations/…`, `/success-stories/…`, `/legal/…`), which keeps the structure flat and readable.

### 8.1 RankYak's navigation, for reference

| Header item     | Type                     | Contents                                                                                                                                                                                                                                                                            |
| --------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Features        | Mega-menu                | Five main features, each with a one-line description (Keyword discovery, Content plan, Article generation, Site Guard, Backlink exchange), then a "More in RankYak" row (Copilot, MCP server, Integrations).                                                                        |
| Solutions       | Mega-menu                | Five audiences with one-line descriptions: For agencies, For SaaS, For ecommerce, For startups, For local businesses.                                                                                                                                                               |
| Resources       | Mega-menu, three columns | **Free tools** (Robots.txt tester, Redirect checker, Meta tag checker, Broken link checker, Keyword clustering, Schema generator, All tools); **Compare** (six "vs" pages, All comparisons); **Learn** (Help center, API docs, Blog, What's new), each with a one-line description. |
| Success stories | Link                     | Case studies by segment.                                                                                                                                                                                                                                                            |
| Pricing         | Link                     | Pricing page.                                                                                                                                                                                                                                                                       |
| Logo            | Right-click menu         | Copy logo as SVG, Copy icon as SVG, Download logo as PNG, All brand assets (`/brand`).                                                                                                                                                                                              |
| Mobile          | Accordion                | The same three groups as collapsible sections, flat links inside, then Success stories, Pricing, Log in, Try for free.                                                                                                                                                              |

Footer columns: Product, Solutions, Integrations (one link per platform), Compare, Free tools, Resources (Blog, Success stories, Help center, Changelog, API docs, `llms.txt`, `llms-full.txt`), Company (About, Methodology, Editorial policy, Contact, Affiliate program, Brand assets, Press). Then the copyright line, Privacy policy, Terms of service and social links.

### 8.2 Rankoya's navigation

**Header:** Features ▾ · Solutions ▾ · Resources ▾ · Success stories · Pricing, then theme toggle, Log in and Get started. "Success stories" only appears once real case studies exist (8.4); until then the header shows four items.

**Features mega-menu**

| Item                | Route                     | One-liner                                       | App source         |
| ------------------- | ------------------------- | ----------------------------------------------- | ------------------ |
| AI visibility       | `/features/ai-visibility` | See where AI answers mention you, and where not | `visibility`       |
| Rank tracking       | `/features/rank-tracking` | Your Google and Maps positions, every day       | `rankings`         |
| Competitor tracking | `/features/competitors`   | Who outranks you, and what changed              | `competitors`      |
| SEO agent           | `/features/seo-agent`     | Drafts the fix, publishes after you approve     | `agent`, `actions` |
| Content             | `/features/content`       | Articles planned from what ranks now            | `content`          |
| Site audit          | `/features/site-audit`    | Finds what's holding your rankings back         | `audit`            |

"More in Rankoya" row: Action plan (`/features/action-plan`), Telegram approvals (`/features/telegram-approvals`), Integrations (`/integrations`), White label (`/white-label`).

**Solutions mega-menu**

| Item                 | Route                   | One-liner                                     | Angle                                                                      |
| -------------------- | ----------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| For agencies         | `/for-agencies`         | Every client site, one workspace              | Multi-site, client reports, White Label tiers; carries its own `#pricing`. |
| For local businesses | `/for-local-businesses` | Show up in Maps and in AI answers near you    | Maps tracking, local AI answers.                                           |
| For ecommerce        | `/for-ecommerce`        | Rank for every category you sell              | Shopify, category pages, product content.                                  |
| For SaaS             | `/for-saas`             | Be the tool AI answers recommend              | Comparison-style AI prompts, content.                                      |
| For startups         | `/for-startups`         | Grow search traffic before you hire marketing | The agent does the work, you approve.                                      |

**Resources mega-menu**

| Column     | Items                                                                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Free tools | AI visibility checker (Rankoya's own, the lead magnet), Robots.txt tester, Meta tag checker, Redirect checker, Broken link checker, Schema validator, All tools (`/tools`).                                     |
| Compare    | `/alternatives/[slug]` pages against the closest AI-visibility and AI-SEO products, plus All comparisons (`/alternatives`). Shortlist to be confirmed by the product owner (open item 7).                       |
| Learn      | Help center (`/help`, "How every feature works"), Blog (`/blog`, "SEO and AI search playbooks"), What's new (`/changelog`, "Every update, dated and explained"). API docs only if the app exposes a public API. |

**Logo right-click menu:** Copy logo as SVG, Copy mark as SVG, Download logo as PNG, All brand assets (`/brand`). Needs SVG versions of the lockup and mark (open item 8).

**Mobile:** the existing full-screen dialog becomes an accordion with the same three groups, as RankYak's does. Each group is a `<details>` (or a button with `aria-expanded`), so it works without JS.

**Footer:** Product, Solutions, Integrations, Compare, Free tools, Resources, Company, mirroring RankYak. A column only appears once it has at least two live links. The watermark lockup (Phase 6) stays below the columns.

| Column       | Links                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| Product      | The six feature pages, Action plan, Telegram approvals, Pricing                                              |
| Solutions    | The five `/for-…` pages, White label                                                                         |
| Integrations | WordPress, Shopify, Webflow, Wix, Ghost, Google Search Console, Google Analytics, Telegram, All integrations |
| Compare      | The `vs` pages, All comparisons                                                                              |
| Free tools   | Each tool, All tools                                                                                         |
| Resources    | Blog, Success stories, Help center, Changelog, `llms.txt`, `llms-full.txt`                                   |
| Company      | About, Methodology, Editorial policy, Contact, Affiliate program, Brand assets, Press                        |
| Bottom row   | © 2026 NETSACH TECH LTD, Privacy policy, Terms of service, Refund policy, social links                       |

### 8.3 Phase 8: groundwork before any second page

- **Nav data model.** Replace the flat `NAV_LINKS` with a typed menu tree in `lib/site.ts` (`group → items → { label, href, description?, icon? }`) that drives the desktop mega-menus, the mobile accordion and the footer, so a page is added in one place.
- **Mega-menu component.** Disclosure pattern rather than ARIA `menu`: buttons with `aria-expanded`/`aria-controls`, opens on click and on hover with a short intent delay, closes on Escape, outside click and route change, keyboard reachable in order. Panels animate with CSS only (no new client weight beyond the open state).
- **Absolute links.** Home-section links become `/#features` and so on, because `#anchor` hrefs break on every page other than `/`.
- **`app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`**: branded 404 and error fallbacks with the header, footer and a route home.
- **Shared page parts:** `PageHero` (overline, `h1`, lead, CTA), `FeaturePageLayout`, `ComparisonTable`, `ToolShell`. Every page ends with the existing `FinalCta`.
- **SEO per page:** `metadata` per route, an `opengraph-image.tsx` per page type from one shared component, `BreadcrumbList` JSON-LD through `lib/json-ld.ts`, and `app/sitemap.ts` generated from the menu tree plus every `content/` collection.
- **MDX** through `@next/mdx` for help, blog, changelog and legal. Read the MDX and `generateStaticParams` guides in `node_modules/next/dist/docs/` first; this Next version differs from older ones.
- **`/llms.txt` and `/llms-full.txt`** as route handlers generated from the same content (RankYak ships both; for an AI-visibility product they are table stakes).

### 8.4 Build order

| Phase | Pages                                                                                                                        | Depends on                                                                                            |
| ----- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 8     | Groundwork (8.3), header mega-menus, mobile accordion, new footer, 404                                                       | None                                                                                                  |
| 9     | `/pricing`, the six `/features/…` pages, `/for-agencies` (with White Label pricing), `/contact`                              | Real prices (open item 2); contact email (open item 4); form handler for contact                      |
| 10    | `/integrations` + `/integrations/[slug]`, the other four `/for-…` pages, `/legal/…` (if moved here)                          | Legal hosting decision (open item 6)                                                                  |
| 11    | `/blog` + `/blog/[slug]` with RSS, `/changelog`, `/help` + articles, `/about`, `/methodology`, `/editorial-policy`, `/brand` | Content owner; SVG logo files                                                                         |
| 12    | `/tools` + the free tools, starting with the AI visibility checker                                                           | Public, rate-limited backend endpoints                                                                |
| 13    | `/alternatives` + `vs` pages, `/success-stories` + case studies, `/affiliates`, `/press`                                     | Confirmed competitor list and legal review; real named customers; a referral programme; real coverage |

Gates that keep the no-fabrication rule (section 5): no success stories, press logos or "As seen in" strip until they are real; comparison pages only state checkable, dated facts about other products; no API docs or MCP page until those exist.

### 8.5 Done when (per page)

The section 4 checklist, plus:

- It is reachable from the menu tree, so it shows up in the header or footer, the sitemap and `llms.txt` together.
- It has a unique title, description and canonical, and its breadcrumbs JSON-LD validates.
- It links to at least one related page and ends with `FinalCta`.
- No copy repeats the home page word for word.

### 8.6 Phase 8 and 9 results (local, production build)

**Shipped**

- **Nav data model** in `lib/site.ts`: `MAIN_NAV` (header menus and links), `FOOTER_COLUMNS` and `SITE_PAGES` (sitemap and `llms.txt`). Feature entries are generated from `content/feature-pages.ts`.
- **Header**: Features mega-menu (`components/layout/desktop-nav.tsx`) with six feature pages, one-line descriptions and a "More in Rankoya" row; For agencies, Pricing and FAQ as plain links. Disclosure pattern, opens on click or hover intent, closes on Escape (focus returns to the trigger), outside click, focus leaving the nav or following a link. Closed panels are `inert`.
- **Mobile menu**: Features is a native `<details>` accordion; the panel scrolls if it outgrows the screen.
- **Footer**: Product, Solutions, Resources, Company and Legal columns from `FOOTER_COLUMNS`, plus the watermark lockup.
- **Links**: home sections are linked as `/#section`; `SmartLink` sends internal pages through `next/link` and keeps the app, `mailto:` and `/llms.txt` as plain anchors. `ButtonLink` uses it too.
- **Shared parts**: `PageHero`, `Breadcrumbs` (with `BreadcrumbList` JSON-LD), `pageMetadata()` (title, description, canonical, Open Graph and Twitter per page), `brandOgImage()` (one share-card renderer for every route), and a reusable `Faq` that takes per-page questions.
- **Routes**: `/features`, `/features/[slug]` (six pages, prerendered with `generateStaticParams`, unknown slugs 404), `/pricing` (four plans, reseller strip, full comparison table, billing FAQ), `/for-agencies` (workspace mockup, agency capabilities, `#white-label`, `#pricing`, FAQ), `/contact`, `not-found`, `error`, `global-error`, `/llms.txt`, `/llms-full.txt`. Every page has its own share image.
- **Home**: each feature row links to its page; pricing links to `/pricing`.
- **New mockups**: rank tracking (average position, position bands, keyword table by device) and the agency workspace.

**Decisions taken with the plan's defaults**

- **Solutions and Resources stay plain links for now.** Only `/for-agencies` exists in Solutions and nothing in Resources yet, and a menu needs at least two live pages (8.2). They become menus in Phases 10 and 11.
- **The competitors page reuses the share-of-voice mockup**, which already shows competitor lines; rank tracking got its own.
- **Contact uses `mailto:` links with a pre-filled subject per topic.** A form needs a handler and an email provider (open item 9).
- **MDX is not installed yet.** No Phase 8 or 9 page needs it; it arrives with the first long-form page (legal, blog or help).
- **`/features/[slug]` 404s through `notFound()`.** `dynamicParams = false` isn't available with Cache Components. The status is 200 once streaming has started, but Next adds `noindex`.
- **Error boundaries take `retry`**, as this Next version names it (`reset` in older versions).
- **`RevealObserver` re-runs on every route change**; before this, content on a page reached by client-side navigation stayed hidden.
- **Light `--text-3` is `#5d6c82`** instead of the app's `#64748b`. The old value is 4.47:1 on `--bg` and failed AA for small text. It only passed on white cards, which is why earlier runs flagged it intermittently. **The app has the same issue.**
- **Feature, pricing and agency copy only states what the app does**, taken from the app's messages and plan cards. The Free plan column of the comparison is inferred from the app's site-setup list: Free has tracking, and keyword research, content plan and writing are paid. Competitors, audit and Telegram are marked paid because the app lists them as Growth features (open item 10).

**QA**

| Check                                                                                    | Result                                                                                                                                           |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lint`, `typecheck`, `build`                                                             | Clean; every route static, feature share images prerendered                                                                                      |
| axe (WCAG 2.0–2.2 A/AA + best practice), all 11 pages + 404, light 1440px and dark 390px | 0 violations after the `--text-3` and landmark-name fixes; extra light 390px and dark 1440px runs on 5 pages also 0                              |
| One `h1` per page, broken in-page anchors, duplicate ids, console errors                 | None                                                                                                                                             |
| Menu keyboard and pointer behaviour (scripted in Chrome)                                 | Enter opens, Escape closes and refocuses the trigger, outside click closes, menu links navigate client-side and close the menu                   |
| Reveals after client-side navigation                                                     | 57 of 57 shown on the destination page                                                                                                           |
| Metadata                                                                                 | Unique title, description, canonical and share image per page; sitemap lists all 11 pages; `llms.txt` and `llms-full.txt` served as `text/plain` |

Still to do by hand: Safari, Firefox and iOS Safari passes of the menus, screen-reader passes of the menu and comparison table, and Lighthouse on the Vercel preview.
