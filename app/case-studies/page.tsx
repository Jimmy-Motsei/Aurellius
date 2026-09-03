import { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/ui/Animate";
import { ScaffoldPlaceholder } from "@/components/ui/ScaffoldPlaceholder";
import { seo } from "@/lib/seo";

// SCAFFOLD (brief item 08). noindex until the GrowthIQ study carries real
// content — an index page listing one placeholder is not something to put in
// front of Google. Remove `robots` here and add /case-studies to app/sitemap.ts
// when the study is filled in. Same restore-point convention as /insights.
export const metadata: Metadata = {
  ...seo("/case-studies"),
  title: "Case Studies | Maru Online",
  description:
    "How Maru Online builds AI-powered workflows for South African businesses.",
  robots: { index: false, follow: true },
};

const outerPad = "px-6 md:px-[60px]";
const inner = "max-w-[900px] mx-auto";

const studies = [
  {
    slug: "growthiq",
    client: "GrowthIQ",
    sector: "Enterprise & Supplier Development",
    summary:
      "Supplier-development platform: beneficiary portal, assessment wizard and AI growth plans.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className={`min-h-[50vh] flex items-center ${outerPad} pt-48 pb-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div className={inner}>
          <FadeUp>
            <span className="label-eyebrow">Case Studies</span>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>
              <span style={{ fontWeight: 300 }}>The work,</span>
              <br />
              <span style={{ fontWeight: 700 }}>and what it changed.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "var(--color-ink-inverted-muted)",
                maxWidth: "560px",
                marginTop: "1.5rem",
              }}
            >
              Engagements documented end to end — the brief we were given, what we
              built, and the numbers afterwards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Index ── */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {studies.map((s) => (
              <FadeUp key={s.slug}>
                <Link
                  href={`/case-studies/${s.slug}`}
                  className="card-lift block no-underline"
                  style={{
                    border: "1px solid var(--color-border-card)",
                    borderRadius: "8px",
                    padding: "2rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-label)",
                      fontWeight: 500,
                      letterSpacing: "var(--tracking-eyebrow)",
                      textTransform: "uppercase",
                      color: "var(--color-ink-tertiary)",
                    }}
                  >
                    {s.sector}
                  </span>
                  <h2 style={{ margin: "0.5rem 0 0.75rem" }}>{s.client}</h2>
                  <p className="body-muted" style={{ margin: 0 }}>
                    {s.summary}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <ScaffoldPlaceholder
              label="Further case studies"
              blockedOn="completed engagements with client sign-off to publish"
            >
              One study is live. Add an entry to the <code>studies</code> array in
              this file and a matching route under <code>/case-studies/</code>.
            </ScaffoldPlaceholder>
          </div>
        </div>
      </section>
    </>
  );
}
