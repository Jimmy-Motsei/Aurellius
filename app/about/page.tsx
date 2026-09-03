import { Metadata } from "next";
import { BGPattern } from "@/components/ui/bg-pattern";
import Button from "@/components/ui/Button";
import CardNavy from "@/components/ui/CardNavy";
import CardProof from "@/components/ui/CardProof";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import { CaseStudyCallout } from "@/components/marketing/CaseStudyCallout";
import { seo } from '@/lib/seo'

export const metadata: Metadata = {
  ...seo('/about'),
  title: "Why Maru Online Exists — Our Mission, Approach & Values",
  description:
    "We built Maru Online to fix the specific problem of AI projects that get bought, never used, and quietly forgotten. Mission, approach, and values.",
};

const outerPad    = "px-6 md:px-[60px]";
const innerWide   = "max-w-[1100px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

export default function AboutPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          bg: navy-deep — matches homepage hero
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`relative min-h-[70vh] flex items-center ${outerPad} pt-48 pb-32`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <BGPattern variant="grid" mask="fade-edges" size={40} fill="rgba(61, 184, 198, 0.101)" className="z-0" />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.12)",
            pointerEvents: "none",
          }}
        />
        <div className={`${innerWide} relative z-10`}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.5rem" }}>About Maru Online</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "2rem" }}>
              <span className="maru-headline-split-light">Built in South Africa.</span>
              <br />
              <span className="maru-headline-split-strong">For South African business.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="body-on-navy" style={{ maxWidth: "600px", marginBottom: 0 }}>
              We&apos;ve lived your journey. Let&apos;s help accelerate yours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — THE PROBLEM WE EXIST TO SOLVE
          bg: surface gradient
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className={innerNarrow}>
          <div className="card-lift p-8 md:p-12">
            <FadeUp>
              <span className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>The problem we exist to solve</span>
              <h2 style={{ marginBottom: "var(--space-heading-body)", border: "none" }}>
                <span style={{ fontWeight: 300 }}>The integration gap is real.</span>
                <br />
                <span style={{ fontWeight: 700 }}>And it&apos;s expensive.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                Most growing businesses aren&apos;t short on tools. They&apos;re short on integration.
              </p>
              <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                That&apos;s not an AI problem. It&apos;s a configuration problem. And it&apos;s solvable — without replacing the systems your team already knows.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  fontWeight: 600,
                  color: "var(--color-ink-primary)",
                  margin: 0,
                }}
              >
                That&apos;s what we do.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — OUR MISSION
          bg: primary (#FFFFFF)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>Our mission</span>
            <h2 style={{ marginBottom: "var(--space-heading-body)" }}>
              <span style={{ fontWeight: 300 }}>Make AI integration work for</span>
              <br />
              <span style={{ fontWeight: 700 }}>businesses that can&apos;t afford for it not to.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              Enterprise businesses have IT departments, implementation budgets, and six months to get it wrong before anyone notices. SMEs don&apos;t. When an integration project fails, it costs real money, real time, and real trust.
            </p>
            <p className="body-muted" style={{ marginBottom: 0 }}>
              We work with growing SMEs — the kind where the owner is still in the room, where every budget spent needs a return, and where a broken workflow costs more than a missed deadline.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — HOW WE WORK (3 principle cards)
          bg: secondary (#F5F4F0)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>How we work</span>
            <h2 style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <span style={{ fontWeight: 300 }}>Three principles.</span>
              <br />
              <span style={{ fontWeight: 700 }}>Non-negotiable.</span>
            </h2>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerChild>
              <CardNavy title="Diagnose First.">
                We don&apos;t guess. We map your current state, quantify costs, and build solutions tailored to your exact needs. Building the wrong thing faster is still wrong.
              </CardNavy>
            </StaggerChild>
            <StaggerChild>
              <CardNavy title="Clear Terms, Real Results.">
                No open-ended projects. You get a fixed scope, fixed price, and clear timeline upfront. We measure success against your baseline 30 days post-launch.
              </CardNavy>
            </StaggerChild>
            <StaggerChild>
              <CardNavy title="Empower Your Team.">
                Our goal is your independence. Every system we build is fully documented, tested, and handed over. Your team runs it, confidently.
              </CardNavy>
            </StaggerChild>
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — OUR VALUES (4 cards)
          bg: primary (#FFFFFF)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow-ochre" style={{ marginBottom: "1.25rem" }}>What we stand for</span>
            <h2 style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <span style={{ fontWeight: 300 }}>Values that show up in the work.</span>
              <br />
              <span style={{ fontWeight: 700 }}>Not on a wall.</span>
            </h2>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerChild className="h-full">
              <CardProof title="Truth Over Talk." className="h-full">
                We don&apos;t just say it; we prove it. If we can&apos;t back it up, we won&apos;t say it. Our commitment to honesty means every claim about your results is grounded in fact, not fiction.
              </CardProof>
            </StaggerChild>
            <StaggerChild className="h-full">
              <CardProof title="Clarity Over Clouds." className="h-full">
                &ldquo;Better efficiency&rdquo; is a guess; &ldquo;14 hours down to 3&rdquo; is a result. We trade vague promises for specific fixes and measurable wins.
              </CardProof>
            </StaggerChild>
            <StaggerChild className="h-full">
              <CardProof title="Impact Over Handover." className="h-full">
                A tool no one uses is a failure. We don&apos;t measure success by what we deliver, but by what actually changes in your business.
              </CardProof>
            </StaggerChild>
            <StaggerChild className="h-full">
              <CardProof title="Focus Over Volume." className="h-full">
                We limit ourselves to five active clients. This isn&apos;t a marketing tactic — it&apos;s how we ensure you get our full attention from start to finish.
              </CardProof>
            </StaggerChild>
          </StaggerParent>
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
              source="about"
              line="GrowthIQ — the most recent engagement, documented end to end."
            />
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — OUR FOUNDATION
          bg: surface gradient
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className={innerNarrow}>
          <div className="card-lift p-8 md:p-12">
            <FadeUp>
              <span className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>Our foundation</span>
              <h2 style={{ marginBottom: "var(--space-heading-body)", border: "none" }}>
                <span style={{ fontWeight: 300 }}>Built on a simple observation.</span>
                <br />
                <span style={{ fontWeight: 700 }}>Most AI integrations fail at the seams.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                The tools work. The gap is always between them — where data moves manually, where processes depend on a person remembering, where one staff change breaks the whole system.
              </p>
              <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                We focus on that specific failure point. To close the integration gap — and measure whether it&apos;s actually closed.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "var(--text-body)",
                  color: "var(--color-ink-primary)",
                  margin: 0,
                }}
              >
                That focus is deliberate. Narrow scope done properly beats broad scope done badly.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
