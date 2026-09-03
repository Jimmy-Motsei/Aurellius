import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Animate";
import { ScaffoldPlaceholder } from "@/components/ui/ScaffoldPlaceholder";
import { seo } from "@/lib/seo";

// SCAFFOLD (brief item 08) — structure only. Everything factual on this page is
// a marked placeholder: the brief is explicit that no GrowthIQ numbers or client
// quotes are to be invented.
//
// Blocked on, from Jimmy:
//   1. Build timeline (start → launch).
//   2. One shareable metric, cleared with City/GrowthIQ.
//   3. A client quote with attribution and permission to publish.
//   4. Real dashboard screenshots — not stock imagery.
//
// noindex until those land, and NOT in app/sitemap.ts. Remove `robots` below and
// add both /case-studies and /case-studies/growthiq to the sitemap on publish.
export const metadata: Metadata = {
  ...seo("/case-studies/growthiq"),
  title: "GrowthIQ | Case Study | Maru Online",
  description:
    "How Maru Online built the GrowthIQ supplier-development platform.",
  robots: { index: false, follow: true },
};

const outerPad = "px-6 md:px-[60px]";
const inner = "max-w-[900px] mx-auto";

export default function GrowthIqCaseStudy() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className={`min-h-[55vh] flex items-center ${outerPad} pt-48 pb-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div className={inner}>
          <FadeUp>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
              <Link
                href="/case-studies"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-meta)",
                  color: "var(--color-cyan)",
                }}
              >
                ← Case Studies
              </Link>
            </nav>
            <span className="label-eyebrow">
              Enterprise &amp; Supplier Development
            </span>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>GrowthIQ</h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "var(--color-ink-inverted-muted)",
                maxWidth: "560px",
                marginTop: "1.5rem",
              }}
            >
              A supplier-development platform for tracking beneficiary SMEs
              through an enterprise development programme.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Brief → Build → Result ── */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

            {/* 01 — Brief */}
            <FadeUp>
              <div>
                <span className="section-number">01</span>
                <h2 style={{ margin: "0.5rem 0 1.5rem" }}>The brief</h2>
                <ScaffoldPlaceholder
                  label="What GrowthIQ came to us with"
                  blockedOn="Jimmy — the problem statement as the client framed it"
                >
                  Two or three paragraphs: the operational problem, why existing
                  tooling did not solve it, and the constraint that shaped the
                  engagement. Pain first, per the house rule — do not open with AI.
                </ScaffoldPlaceholder>
              </div>
            </FadeUp>

            {/* 02 — Build */}
            <FadeUp>
              <div>
                <span className="section-number">02</span>
                <h2 style={{ margin: "0.5rem 0 1.5rem" }}>The build</h2>
                <ScaffoldPlaceholder
                  label="What was built, and over what period"
                  blockedOn="Jimmy — build timeline (start → launch)"
                >
                  The delivered scope. Candidates from the repo, to be confirmed
                  rather than assumed: beneficiary portal and auth, assessment
                  wizard, AI growth plans, mentor capture against the growth plan,
                  WhatsApp Business as the beneficiary channel, custom domain and
                  analytics.
                </ScaffoldPlaceholder>

                <div style={{ marginTop: "1.5rem" }}>
                  <ScaffoldPlaceholder
                    label="Screenshot — GrowthIQ dashboard"
                    blockedOn="Jimmy — real product screenshots, not stock imagery"
                    minHeight="320px"
                  >
                    16:9. Alt text still to be written. Check for beneficiary
                    names or figures needing redaction before publishing.
                  </ScaffoldPlaceholder>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <ScaffoldPlaceholder
                    label="Screenshot — assessment wizard or growth plan"
                    blockedOn="Jimmy — real product screenshots"
                    minHeight="320px"
                  >
                    16:9. Alt text still to be written.
                  </ScaffoldPlaceholder>
                </div>
              </div>
            </FadeUp>

            {/* 03 — Result */}
            <FadeUp>
              <div>
                <span className="section-number">03</span>
                <h2 style={{ margin: "0.5rem 0 1.5rem" }}>The result</h2>
                <ScaffoldPlaceholder
                  label="Before / after numbers"
                  blockedOn="Jimmy — one shareable metric, cleared with the client"
                >
                  Standing rule 5 requires documented before/after numbers per
                  engagement. One verified figure beats three vague ones — and
                  standing rule 6 says verify it is real before building on it.
                </ScaffoldPlaceholder>

                <div style={{ marginTop: "1.5rem" }}>
                  <ScaffoldPlaceholder
                    label="Client quote"
                    blockedOn="Jimmy — quote, attribution, and permission to publish"
                  >
                    Name and role of the person quoted. Do not paraphrase or
                    compose it on their behalf.
                  </ScaffoldPlaceholder>
                </div>
              </div>
            </FadeUp>

          </div>

          {/* ── CTA ── */}
          <FadeUp>
            <div
              style={{
                marginTop: "4rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--color-border-default)",
              }}
            >
              <h2 style={{ marginBottom: "1rem" }}>
                <span style={{ fontWeight: 300 }}>Got a similar problem?</span>
              </h2>
              <p className="body-muted" style={{ marginBottom: "1.5rem", maxWidth: "560px" }}>
                Start with the free operations assessment. It takes a few minutes
                and tells you where your workflows are leaking time.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/operations-assessment" variant="primary" className="w-full sm:w-auto justify-center">
                  Start the assessment
                </Button>
                <Button href="/pricing" variant="tertiary">
                  See pricing
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
