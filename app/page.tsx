import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import AssessmentFormSection from "@/components/homepage/AssessmentFormSection";
import PrimaryServicesFilter from "@/components/homepage/PrimaryServicesFilter";
import { CaseStudyProofStrip } from "@/components/homepage/CaseStudyProofStrip";
import ImageSplit from "@/components/ui/ImageSplit";
import ImageBand from "@/components/ui/ImageBand";
import { BGPattern } from "@/components/ui/bg-pattern";
import MaruM from "@/components/ui/MaruM";
import DisconnectDiagram from "@/components/ui/DisconnectDiagram";
import StatBand from "@/components/ui/StatBand";
import Glyph from "@/components/ui/Glyph";
import { seo } from '@/lib/seo'

export const metadata: Metadata = {
  ...seo('/'),
  title: "Cut Your Operating Costs With AI-Powered Workflows | Maru Online",
  description:
    "We help businesses cut operating costs by building AI-powered workflows where it matters most. Book a discovery call.",
};

// ─── Layout constants ─────────────────────────────────────────────────────────
const outerPad = "px-6 md:px-[60px]";
const inner     = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";
const innerWide = "max-w-[1100px] mx-auto";


// ─── Inline SVGs for trust bar ────────────────────────────────────────────────

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L3 5v5c0 4.418 3.134 7.5 7 8 3.866-.5 7-3.582 7-8V5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 01 — HERO
          bg: navy-deep
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`relative min-h-screen flex items-center overflow-hidden ${outerPad} pt-28 sm:pt-36 md:pt-48 pb-16 sm:pb-24 md:pb-32`}
        style={{ background: "var(--gradient-hero)" }}
      >
        <BGPattern
          variant="grid"
          mask="fade-edges"
          size={40}
          fill="rgba(61, 184, 198, 0.101)"
          className="pointer-events-none"
        />
        {/* Maru "M" — dimensional brand object (Warm Stone depth system) */}
        <div
          aria-hidden="true"
          className="hidden sm:block"
          style={{
            position: "absolute",
            top: "0px",
            right: "-140px",
            width: "500px",
            height: "500px",
            pointerEvents: "none",
            filter: "drop-shadow(0 48px 96px rgba(6, 14, 21, 0.5))",
            opacity: 0.5,
          }}
        >
          <MaruM className="w-full h-full" />
        </div>
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "3rem" }}>AI Implementation Consultancy</span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "2.5rem" }}>
              <span className="maru-headline-split-light">AI-Powered Workflows That</span>
              <br />
              <span className="maru-headline-split-strong">Cut Your Operating Costs</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "var(--text-body)",
                color: "var(--color-ink-inverted-muted)",
                lineHeight: "var(--leading-body-relaxed)",
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              We find the manual tasks eating your team&apos;s time and replace them with AI workflows that actually work.
            </p>
          </FadeUp>

          <FadeUp delay={0.19}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-inverted-muted)",
                lineHeight: "var(--leading-body-relaxed)",
                maxWidth: "560px",
                marginBottom: "3rem",
              }}
            >
              Most businesses buy AI tools that never talk to each other. We connect them, automate what matters, and show you the savings.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            {/* data-maru-primary-cta: the floating WhatsApp bubble watches for this
                and hides itself while these buttons are on screen. On a 375px
                viewport the bubble sits 6px above this row and covers its right
                end as soon as the page scrolls. See components/ui/WhatsAppWidget. */}
            <div
              data-maru-primary-cta
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button href="/booking" variant="primary" className="w-full sm:w-auto justify-center">
                Book a discovery call
              </Button>
              <Button href="/operations-assessment" variant="secondary" className="w-full sm:w-auto justify-center">
                Start the assessment
              </Button>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 02 — OPERATIONAL GAP
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.5rem" }}>The operational gap</span>
            <h2 style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <span style={{ fontWeight: 700 }}>Your tools work.</span>
              <br />
              <span style={{ fontWeight: 300 }}>Your workflows don&apos;t.</span>
            </h2>
          </FadeUp>

          {/* The picture of the problem — and the fix — before the words for it */}
          <div
            className="mx-auto"
            style={{ maxWidth: "1000px", marginBottom: "var(--space-section-header-mb)" }}
          >
            <DisconnectDiagram />
          </div>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: "var(--space-section-header-mb)" }}>
            {[
              {
                icon: "unlink" as const,
                heading: "Your tools don’t talk to each other.",
                body: "CRM, email, accounting — all working, all separate.",
              },
              {
                icon: "hourglass" as const,
                heading: "Admin is eating your week.",
                body: "Re-entering data quietly costs days every month.",
              },
              {
                icon: "stale" as const,
                heading: "You’re deciding on old numbers.",
                body: "Five systems means you’re reading last month’s export.",
              },
              {
                icon: "shield" as const,
                heading: "Manual data handling is a POPIA risk.",
                body: "Loose consent and scattered storage are exposure.",
              },
            ].map((col) => (
              <StaggerChild key={col.heading}>
                <div
                  className="card-lift"
                  style={{
                    border: "0.5px solid var(--color-border-card)",
                    borderTop: "3px solid var(--color-cyan)",
                    borderRadius: "8px",
                    padding: "1.5rem 1.25rem",
                    height: "100%",
                  }}
                >
                  <span className="glyph-chip" style={{ marginBottom: "1rem" }}>
                    <Glyph name={col.icon} size={22} />
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-ink-primary)",
                      marginBottom: "0.5rem",
                      lineHeight: "var(--leading-subheading)",
                    }}
                  >
                    {col.heading}
                  </p>
                  <p className="body-muted" style={{ marginBottom: 0 }}>
                    {col.body}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          <FadeUp delay={0.16}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                fontWeight: 500,
                color: "var(--color-ink-primary)",
                borderLeft: "4px solid var(--color-cyan)",
                paddingLeft: "1.25rem",
                margin: 0,
                lineHeight: "var(--leading-body)",
              }}
            >
              None of this needs new software. We fix it with the systems you already have.
            </p>
          </FadeUp>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          SECTION 03 — METRICS BAR
          bg: white (#FFFFFF)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <StatBand />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 04 — PRIMARY SERVICES (filter layout)
          bg: secondary (#F5F4F0)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>
              <span style={{ fontWeight: 300 }}>Pick the problem.</span>
              <br />
              <span style={{ fontWeight: 700 }}>We’ll fix it.</span>
            </h2>
            <p
              className="body-muted"
              style={{ maxWidth: "640px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Every engagement starts the same way: a free assessment that shows you where the money is leaking.
            </p>
          </FadeUp>

          <PrimaryServicesFilter />

          {/* Proof strip (brief item 08) — placed here, immediately after the
              services choice, so the question "can they actually do it" is
              answered at the point it gets asked. Contains a marked placeholder
              until Jimmy supplies a shareable GrowthIQ metric. */}
          <div style={{ marginTop: "3rem" }}>
            <FadeUp>
              <CaseStudyProofStrip />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 05 — FOUNDATION SERVICES (flush 3-col grid)
          bg: secondary — the grid cells were white on white before
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>
              <span style={{ fontWeight: 300 }}>Need more than workflows?</span>
              <br />
              <span style={{ fontWeight: 700 }}>We build the rest too.</span>
            </h2>
            <p
              className="body-muted"
              style={{ maxWidth: "680px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Strategy, websites, and marketing — the foundations that make everything else work.
            </p>
          </FadeUp>

          {/* Three discrete cards. Previously a flush grid whose 1px gaps were
              the dividers — stacked on mobile that read as one undifferentiated
              slab, so the cards now stand apart and each carries its own edge
              and elevation via .card-lift. Entrance is staggered so the set
              arrives as three things, not one. */}
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                ghost: "01",
                icon: "compass" as const,
                name: "Strategy & Consultation",
                description: "We map the ground before anything gets built.",
                deliverables: [
                  "Market and audience research",
                  "Digital roadmap and architecture",
                  "Go-to-market strategy",
                ],
              },
              {
                ghost: "02",
                icon: "browser" as const,
                name: "Design & Development",
                description: "Products built for integration from day one.",
                deliverables: [
                  "Websites, web apps and e-commerce",
                  "Built for AI integration from day one",
                  "Performance and conversion optimised",
                ],
              },
              {
                ghost: "03",
                icon: "signal" as const,
                name: "Digital Marketing Support",
                description: "Insights from your data, then campaigns that act on them.",
                deliverables: [
                  "Analytics and insights",
                  "Campaign strategy and execution",
                  "Online visibility",
                ],
              },
            ].map((col) => (
              <StaggerChild key={col.ghost} className="h-full">
              <div
                className="card-lift h-full rounded-[10px]"
                style={{ padding: "1.75rem 1.5rem" }}
              >
                {/* Glyph carries the category; the ghost number stays as a
                    faint ordinal so the three columns still read as a set. */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
                  <span className="glyph-chip glyph-chip-gold glyph-chip-lg">
                    <Glyph name={col.icon} size={28} />
                  </span>
                  <span
                    style={{
                      fontSize: "26px",
                      fontWeight: 100,
                      color: "rgba(205, 170, 83, 0.32)",
                      lineHeight: 1,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {col.ghost}
                  </span>
                </div>

                {/* Service name + gold underline */}
                <p
                  style={{
                    fontSize: "var(--text-h3-sans)",
                    fontWeight: 600,
                    color: "var(--color-ink-primary)",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    borderBottom: "2px solid var(--color-gold)",
                    paddingBottom: "0.75rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {col.name}
                </p>

                {/* Description */}
                <p className="body-muted" style={{ marginBottom: "1.25rem" }}>
                  {col.description}
                </p>

                {/* Deliverables label */}
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
                  Deliverables
                </span>

                {/* Deliverables list */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.deliverables.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-ink-secondary)",
                        padding: "4px 0",
                        lineHeight: "var(--leading-body)",
                        display: "flex",
                        gap: "8px",
                        alignItems: "flex-start",
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--color-gold)",
                          fontSize: "var(--text-body-sm)",
                          flexShrink: 0,
                          lineHeight: "var(--leading-body)",
                        }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 06 — FOUR-PHASE PROCESS
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="process"
        className={`${outerPad} py-24`}
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2 style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <span style={{ fontWeight: 300 }}>From first look to live savings</span>
              <br />
              <span style={{ fontWeight: 700 }}>in about 30 days.</span>
            </h2>
          </FadeUp>

          {/* The four-phase detail lives on /process — the homepage only needs
              the promise, not the method. */}
          <FadeUp delay={0.08}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <p className="body-muted" style={{ marginBottom: 0, maxWidth: "560px" }}>
                Four steps. Fixed price. Measured outcome.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/operations-assessment" variant="primary" className="w-full sm:w-auto justify-center">
                  Start the assessment
                </Button>
                <Button href="/process" variant="tertiary">
                  See how it works
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── IMAGE BAND — between process and assessment form ────────────── */}
      <ImageBand
        src="/images/people/replace-team.png"
        alt="Two professionals celebrating a win together in the office"
        overlayText={
          <>
            <span style={{ display: 'block', fontWeight: 300 }}>We don&apos;t replace your team.</span>
            <span style={{ display: 'block', fontWeight: 700 }}>We give them their time back.</span>
          </>
        }
        height={420}
      />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 07 — ASSESSMENT FORM (client component)
          bg: navy (#1A3A5C)
          ════════════════════════════════════════════════════════════════════ */}
      <AssessmentFormSection />

    </>
  );
}
