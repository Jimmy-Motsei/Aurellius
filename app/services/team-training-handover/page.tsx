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
  ...seo('/services/team-training-handover'),
  title: "Team Training & Handover | Maru Online",
  description:
    "Your team runs the system. Not us. Hands-on training built around the specific workflows we've configured.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

const bullets = [
  {
    leader: "Hands-on workshops",
    body: "Practical sessions built around your actual tools, not generic AI theory.",
  },
  {
    leader: "Prompt engineering",
    body: "Teaching your team to get consistent, high-quality outputs from the tools you already have.",
  },
  {
    leader: "Workflow adoption",
    body: "Getting the new workflows embedded in how the team actually works, not just documented.",
  },
  {
    leader: "Plain-language documentation",
    body: "Written guides your team can use without needing a technical background.",
  },
  {
    leader: "30-day follow-up support",
    body: "A structured support window after training to catch issues before they become habits.",
  },
];

export default function TeamTrainingHandoverPage() {
  return (
    <>
      <ServiceJsonLd
        name="Team Training & Handover"
        description="Your team runs the system. Not us. Hands-on training built around the specific workflows we've configured."
        path="/services/team-training-handover"
        price="15000"
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
                <li style={{ color: "var(--color-cyan)" }}>Team Training &amp; Handover</li>
              </ol>
            </nav>
          </FadeUp>
          <FadeUp delay={0.06}>
            <span className="label-eyebrow-ochre">03 — Team Training &amp; Handover</span>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>Team Training &amp; Handover</h1>
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
              Your team runs the system. Not us.
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
                From R15,000
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
                Fixed-scope · Scoped per engagement
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
                Can be standalone or follow a Workflow Integration build.
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
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-label)",
                    fontWeight: 500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color: "var(--color-ink-tertiary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  What it is
                </p>
                <p className="body-muted" style={{ marginBottom: "2.5rem" }}>
                  Hands-on training built around the specific workflows we&apos;ve configured. Your
                  team learns how to use, manage, and adapt the system — so the capability stays in
                  the business after we hand over. Independence is the goal. Dependency on outside
                  support is not.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-label)",
                    fontWeight: 500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color: "var(--color-ink-tertiary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  How it connects
                </p>
                <p className="body-muted" style={{ margin: 0 }}>
                  Training is included as part of every Workflow Integration build. If you&apos;ve
                  had workflows configured previously (by us or anyone else) and need your team to
                  own them properly, this can run as a standalone engagement scoped to your existing
                  setup.
                </p>
              </FadeUp>
            </div>

            {/* Right — what's included */}
            <FadeUp delay={0.1}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-label)",
                  fontWeight: 500,
                  letterSpacing: "var(--tracking-eyebrow)",
                  textTransform: "uppercase",
                  color: "var(--color-ink-tertiary)",
                  marginBottom: "0.75rem",
                }}
              >
                What&apos;s included
              </p>
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
              source="services_team_training_handover"
              line="GrowthIQ — what was built, and what was handed over to the client's team."
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
              <span style={{ fontWeight: 300 }}>Start with the diagnostic.</span>
              <br />
              <span style={{ fontWeight: 700 }}>Training is scoped from what we find.</span>
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
