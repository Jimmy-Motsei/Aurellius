import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Animate";
import { ScaffoldPlaceholder } from "@/components/ui/ScaffoldPlaceholder";
import { seo } from "@/lib/seo";

// SCAFFOLD (brief item 06) — structure only, no chatbot.
//
// Route name is provisional: the brief says to confirm /ai-in-action with Jimmy
// before finalising. Changing it now is a directory rename plus the
// '/ai-in-action' key in lib/whatsapp.ts; once the page has been linked or
// shared, it also needs a redirect from the old path.
//
// Decisions already taken (brief item 06): a dedicated page, not a site-wide
// widget — a floating chat bubble would compete with the assessment CTA, which
// is the site's one working conversion path. WhatsApp-native is preferred over
// a generic embedded web widget once the real thing is scoped.
//
// Blocked on: chatbot behaviour and tech spec from Jimmy.
//
// noindex and absent from app/sitemap.ts until there is a working demo. A page
// promising a demo it does not have is the failure pattern this codebase has
// already paid for twice — the phantom "Website Lead Grader" and the empty
// /insights section (Aug 2026). Remove `robots` and add to the sitemap on launch.
export const metadata: Metadata = {
  ...seo("/ai-in-action"),
  title: "AI in Action | Maru Online",
  description:
    "See the kind of AI workflow we build for South African businesses.",
  robots: { index: false, follow: true },
};

const outerPad = "px-6 md:px-[60px]";
const inner = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

export default function AiInActionPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className={`min-h-[55vh] flex items-center ${outerPad} pt-48 pb-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div className={inner}>
          <FadeUp>
            <span className="label-eyebrow">AI in Action</span>
            <h1 style={{ color: "var(--color-ink-inverted)" }}>
              <span style={{ fontWeight: 300 }}>Less explaining.</span>
              <br />
              <span style={{ fontWeight: 700 }}>More showing.</span>
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
              A working example of the kind of workflow we build — the same
              mechanism, running on our own site.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── What this is ── */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <h2 style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontWeight: 300 }}>Why a demo</span>
              <br />
              <span style={{ fontWeight: 700 }}>instead of a description.</span>
            </h2>
            <p className="body-muted" style={{ marginBottom: "1rem" }}>
              Most businesses have been sold AI as a category. That is a hard
              thing to evaluate. A workflow you can actually use for two minutes
              is not.
            </p>
            <p className="body-muted" style={{ margin: 0 }}>
              This page holds one running example. It is the same pattern we
              build into client operations: a defined job, a defined handover
              point, and a measurable outcome at the end.
            </p>
          </FadeUp>

          {/* ── Demo slot ── */}
          <FadeUp>
            <div style={{ marginTop: "2.5rem" }}>
              <ScaffoldPlaceholder
                label="Chatbot entry point"
                blockedOn="Jimmy — chatbot behaviour and tech spec"
                minHeight="280px"
              >
                Nothing interactive ships here until the spec exists — a fake or
                half-working demo on a page selling working systems does more
                damage than an empty slot.
                <br />
                <br />
                Decided already: dedicated page, no site-wide widget;
                WhatsApp-native preferred over a generic embedded web widget.
                Analytics helpers are ready and unfired in{" "}
                <code>lib/chatbot-events.ts</code> —{" "}
                <code>chatbot_opened</code>, <code>chatbot_completed</code>,{" "}
                <code>chatbot_handoff_to_booking</code>. Call them from the real
                integration; do not rename them once anything has fired.
              </ScaffoldPlaceholder>
            </div>
          </FadeUp>

          {/* ── Fallback CTA ── */}
          <FadeUp>
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--color-border-default)",
              }}
            >
              <p className="body-muted" style={{ marginBottom: "1.5rem" }}>
                In the meantime, the operations assessment is the fastest way to
                see what we would actually change in your business.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="/operations-assessment"
                  variant="primary"
                  className="w-full sm:w-auto justify-center"
                >
                  Start the assessment
                </Button>
                <Button href="/booking" variant="tertiary">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
