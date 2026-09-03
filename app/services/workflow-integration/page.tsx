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
  ...seo('/services/workflow-integration'),
  title: "Workflow Integration | Maru Online",
  description:
    "Connect your existing tools. Configure the workflows between them. Fixed-scope, vendor-agnostic.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

const bullets = [
  {
    leader: "Custom integration build",
    body: "Connecting your existing tools (CRM, calendar, email, forms) so they pass information correctly.",
  },
  {
    leader: "Automation layer",
    body: "Workflows that run without human intervention: follow-ups, confirmations, handoffs, notifications.",
  },
  {
    leader: "Brand voice training",
    body: "AI outputs calibrated to sound like your business, not a generic chatbot.",
  },
  {
    leader: "POPIA compliance built in",
    body: "Every data touchpoint designed for compliance before a line of code is written.",
  },
  {
    leader: "30-day support window",
    body: "Included in the engagement price. Issues caught in week one are straightforward to fix.",
  },
];

export default function WorkflowIntegrationPage() {
  return (
    <>
      <ServiceJsonLd
        name="Workflow Integration"
        description="Connect your existing tools. Configure the workflows between them. Fixed-scope, vendor-agnostic."
        path="/services/workflow-integration"
        price="45000"
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
                <li style={{ color: "var(--color-cyan)" }}>Workflow Integration</li>
              </ol>
            </nav>
          </FadeUp>
          <FadeUp delay={0.06}>
            <span className="label-eyebrow-gold">02 — Workflow Integration</span>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>Workflow Integration</h1>
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
              Connect your existing tools. Configure the workflows between them.
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
                From R35,000
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
                Fixed-scope · Typically 4–8 weeks
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
                Fixed price scoped after the diagnostic — no surprises.
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
                  Fixed-scope implementation built around what the diagnostic found. We configure the
                  connections between your existing tools, extend what&apos;s already working, and
                  build the automation layer on top. Vendor-agnostic — your stack stays, we connect
                  it. Nothing is built until the scope and price are agreed.
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
                  At day 30 we measure results against the baseline established in the diagnostic. If
                  the measurement surfaces further optimisation opportunities, that becomes the input
                  to a Results Optimisation sprint. Team Training & Handover runs alongside or
                  immediately after the build to ensure the capability stays in your business.
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
              source="services_workflow_integration"
              line="GrowthIQ — connecting a supplier-development programme into one system."
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
              <span style={{ fontWeight: 300 }}>Every integration starts with the diagnostic.</span>
              <br />
              <span style={{ fontWeight: 700 }}>That&apos;s where the scope comes from.</span>
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
