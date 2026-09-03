import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ListItem from "@/components/ui/ListItem";
import ListGroup from "@/components/ui/ListGroup";
import { FadeUp } from "@/components/ui/Animate";
import { CaseStudyCallout } from "@/components/marketing/CaseStudyCallout";
import { seo } from '@/lib/seo'
import { ServiceJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  ...seo('/services/results-optimisation'),
  title: "Results Optimisation | Maru Online",
  description:
    "A second sprint when the first one shows what's next. Fixed-scope, data-led, available after a completed build.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

const bullets = [
  {
    leader: "Data-led scope",
    body: "Built around what the 30-day measurement report surfaced, not assumptions.",
  },
  {
    leader: "Fixed-scope sprint",
    body: "Defined deliverables, defined timeline, agreed before work begins.",
  },
  {
    leader: "Compliance review",
    body: "Ongoing POPIA review as your data flows and tool stack evolve.",
  },
  {
    leader: "Updated results baseline",
    body: "A new measurement baseline set after the optimisation sprint completes.",
  },
];

export default function ResultsOptimisationPage() {
  return (
    <>
      <ServiceJsonLd
        name="Results Optimisation"
        description="A second sprint when the first one shows what's next. Fixed-scope, data-led, available after a completed build."
        path="/services/results-optimisation"
        price="8500"
      />
      {/* ── Hero ── */}
      <section
        className={`min-h-[60vh] flex items-center ${outerPad} pt-48 pb-32`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div className={inner}>
          <FadeUp>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-meta)",
                  fontWeight: 300,
                  color: "rgba(250,250,248,0.45)",
                }}
              >
                <li>
                  <Link
                    href="/services"
                    style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">→</li>
                <li style={{ color: "var(--color-cyan)" }}>Results Optimisation</li>
              </ol>
            </nav>
          </FadeUp>
          <FadeUp delay={0.06}>
            <span className="label-eyebrow-ochre">04 — Results Optimisation</span>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>Results Optimisation</h1>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3-serif)",
                fontWeight: 400,
                lineHeight: "var(--leading-subheading)",
                color: "var(--color-ink-inverted-muted)",
                letterSpacing: "var(--tracking-tight)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              A second sprint when the first one shows what&apos;s next.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Pricing block ── */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <div
              style={{
                borderLeft: "3px solid var(--color-cyan)",
                paddingLeft: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.25rem",
                  fontWeight: 600,
                  color: "var(--color-navy)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                From R8,500
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 300,
                  color: "var(--color-ink-secondary)",
                  marginBottom: "0.375rem",
                }}
              >
                Fixed-scope · Scoped from 30-day measurement data
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-meta)",
                  fontWeight: 300,
                  color: "var(--color-ink-tertiary)",
                  margin: 0,
                }}
              >
                Available to clients who have completed a Workflow Integration build.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── What it is + What's included ── */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">
            {/* Left — what it is + how it connects */}
            <div>
              <FadeUp>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-cyan)",
                    background: "rgba(61, 184, 198, 0.10)",
                    border: "1px solid rgba(61, 184, 198, 0.25)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  What it is
                </span>
                <p className="body-muted" style={{ marginBottom: "2.5rem" }}>
                  A fixed-scope optimisation engagement triggered by what the 30-day measurement
                  phase surfaces. Not a retainer — a defined sprint built around specific
                  opportunities the data identified. Scope and price are agreed before work begins,
                  the same as every other Maru engagement.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-cyan)",
                    background: "rgba(61, 184, 198, 0.10)",
                    border: "1px solid rgba(61, 184, 198, 0.25)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  How it connects
                </span>
                <p className="body-muted" style={{ margin: 0 }}>
                  This engagement is only available after a completed Workflow Integration build. The
                  30-day measurement data from Phase 4 is the input. If measurement surfaces a clear
                  next intervention, we scope it here. Not all clients will need this — some builds
                  deliver everything the diagnostic identified and no further sprint is required.
                </p>
              </FadeUp>
            </div>

            {/* Right — what's included */}
            <FadeUp delay={0.1}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-cyan)",
                  background: "rgba(61, 184, 198, 0.10)",
                  border: "1px solid rgba(61, 184, 198, 0.25)",
                  borderRadius: "4px",
                  padding: "3px 8px",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                What&apos;s included
              </span>
              <ListGroup>
                {bullets.map((b) => (
                  <ListItem key={b.leader} leader={b.leader} body={b.body} />
                ))}
              </ListGroup>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Case study (brief item 08) ── */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <CaseStudyCallout
              source="services_results_optimisation"
              line="GrowthIQ — the brief, the build, and the result."
            />
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <h2
              style={{
                color: "var(--color-ink-inverted)",
                border: "none",
                padding: 0,
                marginBottom: "var(--space-heading-body)",
              }}
            >
              <span style={{ fontWeight: 300 }}>Every engagement starts with the diagnostic.</span>
              <br />
              <span style={{ fontWeight: 700 }}>The data tells us what comes next.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/operations-assessment" variant="primary">
                Start the assessment
              </Button>
              <Button href="/booking" variant="tertiary">
                Book a discovery call
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
