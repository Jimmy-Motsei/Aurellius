/**
 * WhatsApp — single source of truth for the number and the per-page openers.
 *
 * The number lived as a hardcoded `wa.me/…` literal in four places (the floating
 * widget, the footer, the contact page, and the contact auto-reply email), which
 * is how a number change turns into a bug hunt. It is now one constant, and the
 * openers are one table.
 *
 * Format: E.164 without the leading `+` and without the trunk `0` after the
 * country code — `27` + `678904113`, never `27` + `0678904113`. wa.me silently
 * fails on a malformed number rather than erroring, so this is worth stating.
 */

/** Dedicated WhatsApp Business line. Override per environment if it ever moves. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27678904113'

/** Human-facing rendering of the same number, for body copy and email templates. */
export const WHATSAPP_DISPLAY = '+27 67 890 4113'

/**
 * Pre-filled opener per page. The message text IS the attribution — a wa.me link
 * carries no referrer and UTM parameters do not survive into WhatsApp, so what
 * the visitor sends is the only signal of where they came from. Do not also UTM-tag
 * these links; it adds nothing and clutters the URL.
 *
 * Keys are route paths. Nested routes fall back to their closest parent, and
 * anything unmapped falls back to `default` — an untagged link should never ship.
 */
export const WHATSAPP_OPENERS: Record<string, string> = {
  default:
    "I'd like to find out more about your AI workflow services.",
  '/operations-assessment':
    "I'd like to book my free operations assessment.",
  '/pricing':
    "I'd like to understand your pricing for workflow integration.",
  '/services/workflow-integration':
    "I'm interested in Workflow Integration for my business.",
  '/services/team-training-handover':
    "I'd like more info on Team Training & Handover.",
  '/services/results-optimisation':
    "I'd like to know more about Results Optimisation.",
  '/contact':
    "I have a question about Maru Online's services.",
  '/careers':
    "I'm interested in opportunities at Maru Online.",
  '/ai-in-action':
    'I just tried the Maru Chatbot demo and had a question.',
}

/** The opener for a route, falling back to the closest parent then to default. */
export function whatsAppOpener(page?: string): string {
  if (!page) return WHATSAPP_OPENERS.default

  // Strip any query/hash and normalise a trailing slash so '/pricing?x=1' and
  // '/pricing/' both resolve.
  let path = page.split(/[?#]/)[0]
  if (path.length > 1) path = path.replace(/\/+$/, '')

  if (WHATSAPP_OPENERS[path]) return WHATSAPP_OPENERS[path]

  // Walk up: '/services/workflow-integration/extra' → '/services/workflow-integration'
  const parts = path.split('/').filter(Boolean)
  for (let i = parts.length - 1; i > 0; i--) {
    const parent = '/' + parts.slice(0, i).join('/')
    if (WHATSAPP_OPENERS[parent]) return WHATSAPP_OPENERS[parent]
  }

  return WHATSAPP_OPENERS.default
}

/**
 * A wa.me link with the opener for `page` pre-filled.
 *
 * encodeURIComponent, not a hand-rolled template — the openers contain
 * apostrophes and ampersands ("Team Training & Handover"), and an unencoded `&`
 * would truncate the message at that point.
 */
export function buildWhatsAppLink(page?: string): string {
  const text = whatsAppOpener(page)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
