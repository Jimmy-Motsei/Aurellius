# Insights publishing path — verification and gaps

**Date:** 3 September 2026
**Context:** item 09 of the Sep 2026 site-fix brief, which asks to *verify* the
`/insights` infrastructure rather than assume it, and to document any gaps found
"separately rather than silently building around them".

---

## What was verified

The brief records `/insights` as having "working blog/CMS infrastructure
already, currently empty". That is correct. Specifically:

| Piece | State |
|---|---|
| CMS | Sanity, project `za64kmro`, dataset `production` |
| Studio | Mounted at `/studio` (`app/studio/[[...tool]]`) |
| Schema | `sanity/schemaTypes/post.ts` |
| Read layer | `lib/insights/getInsights.ts` |
| List page | `app/insights/page.tsx` |
| Article page | `app/insights/[slug]/page.tsx`, with `generateStaticParams` |
| Automation | `lib/insights/generate.ts` — the bi-weekly insights bot |

The dataset was queried directly to confirm the connection is live and the
section is genuinely empty rather than broken:

```bash
curl -s 'https://za64kmro.api.sanity.io/v2024-01-01/data/query/production?query=count(*%5B_type%3D%3D%22post%22%5D)'
# → {"result":0}
```

A valid `0` (not an error) means the read path works end to end and there is
simply nothing published yet.

### Content model vs. the brief's checklist

| Required | Field | Status |
|---|---|---|
| Title | `title` | Yes |
| Meta description | `seoDescription`, falling back to `excerpt` | Yes |
| Body | `body` (Portable Text, blocks + images) | Yes |
| Publish date | `publishedAt` | Yes — and it gates visibility: queries require `publishedAt <= now()`, so a future date is a scheduled post |
| Canonical tag | `alternates.canonical` in `generateMetadata` | Yes |
| OG image | `mainImage` | Fixed — see below |

Drafts are excluded automatically: the read client uses Sanity's `published`
perspective, so `drafts.*` documents never reach the site.

---

## Defects found and fixed

**1. `post.mainImage` was read by nothing.** The field existed in the schema, so
the Studio offered an editor a cover-image upload — and the site discarded it.
Both the list and the article used `categoryImage(category)`, a fixed stock
image per category. That default exists for the bot, which has no image to
supply, and it should stay; but a hand-written article could not have its own
cover. `getInsights.ts` now prefers `mainImage` when set and falls back to the
category image, so both cases work.

**2. The article route hand-rolled its Open Graph block.** `lib/seo.ts` exists
specifically to prevent this and documents why: a child segment's `openGraph`
*replaces* the root layout's rather than merging. Because the article page set
its own, every insight article would have shipped with no Twitter card and no
`og:locale`. It now builds on `seo()` and overrides only what is article-specific,
including using the article's own cover as the OG image when there is one.

---

## Open gaps — these need Jimmy, not code

**A. `/insights` is deliberately hidden and must be un-hidden on first publish.**
Two suppressions were added in Aug 2026 while the section was empty, both with
restore-point comments:

- `app/insights/page.tsx` — `robots: { index: false, follow: true }`
- `app/sitemap.ts` — the `/insights` entry is commented out

**If the first article ships without reverting both, it will be invisible to
search.** This is the single most likely way to waste the first article.

**B. The publish half of the path could not be exercised.** There are no Sanity
environment variables in `.env.local` at all — no `SANITY_API_WRITE_TOKEN`, and
no `NEXT_PUBLIC_SANITY_*` (the code falls back to hardcoded defaults in
`sanity/env.ts`). Reads work because the dataset is publicly readable. Creating
a test post to prove draft → preview → live therefore was not possible from this
environment, and no test content was written to the production dataset.

What still needs a human pass, once a token is in place:
1. Create a draft in `/studio` and confirm it does *not* appear on `/insights`.
2. Set `publishedAt` to a past date and publish.
3. Confirm the post appears on `/insights` and at `/insights/<slug>` within the
   600-second revalidation window (or trigger the `insights` cache tag).
4. Confirm the cover image, canonical and OG tags on the live URL.

**C. The bot's write path shares that dependency.** `lib/insights/generate.ts`
and `sanity/lib/writeClient.ts` both need `SANITY_API_WRITE_TOKEN`. If it is
unset in Vercel too, the bi-weekly generator cannot be writing anything — worth
checking against the deployed environment, not just locally.

---

## Note on item 02

Per the brief, the two redirected pre-migration URLs point at
`/operations-assessment`, **not** at these articles. They cover AI regulation
and adoption; the planned articles cover BEE/ESD. They are not a replacement and
the redirect must not be re-pointed at them later.
