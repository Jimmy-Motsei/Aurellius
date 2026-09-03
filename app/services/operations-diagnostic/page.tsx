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
  ...seo('/services/operations-diagnostic'),
  title: "Operations Diagnostic | Maru Online",
  description:
    "Map where your operation has gaps — before configuring anything. A structured audit delivered within 48 hours.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

const bullets = [
  {
    leader: "Sector-specific intake brief",
    body: "Structured questions tailored to your industry (medico-legal, HR & recruitment, or conference & events).",
  },
  {
    leader: "Verification call",
    body: "A 30–45 minute call to clarify the brief, ask the right questions, and confirm scope.",
  },
  {
    leader: "Written gap report",
    body: "A clear document mapping where your workflows aren't connected, the cost of each gap, and the configuration priority order.",
  },
  {
    leader: "90-day roadmap",
    body: "A sequenced action plan so you know exactly what to configure and in what order.",
  },
];

export default function OperationsDiagnosticPage() {
  return (
    <>
      <ServiceJsonLd
        name="Operations Diagnostic"
        description="Map where your operation has gaps \u2014 before configuring anything. A structured audit delivered within 48 hours."
        path="/services/operations-diagnostic"
        price="4500"
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
                <li style={{ color: "var(--color-cyan)" }}>Operations Diagnostic</li>
              </ol>
            </nav>
          </FadeUp>
          <FadeUp delay={0.06}>
            <span className="label-eyebrow-ochre">01 — Operations Diagnostic</span>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>Operations Diagnostic</h1>
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
              Map where your operation has gaps — before configuring anything.
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
                R4,500
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
                Fixed-scope · Delivered within 48 hours
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
                If you proceed to a full engagement, this fee offsets against the project cost.
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
                  A structured audit of your current workflows, tools, and data connections. You
                  receive a written report — delivered within 48 hours — that maps where information
                  isn&apos;t flowing, quantifies what that&apos;s costing, and tells you exactly what
                  to configure first. This is where every engagement starts.
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
                  The diagnostic report is the input to every other engagement. If we find a clear
                  integration opportunity, we scope the Workflow Integration engagement directly from
                  the report findings. If the diagnostic surfaces a site infrastructure problem first,
                  we scope that. Either way, you know the full cost before committing to anything
                  further.
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
              source="services_operations_diagnostic"
              line="GrowthIQ — how the scope was set, what was built, and what changed."
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
              <span style={{ fontWeight: 300 }}>The right place to start is</span>
              <br />
              <span style={{ fontWeight: 700 }}>a conversation about where your operation has gaps.</span>
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
