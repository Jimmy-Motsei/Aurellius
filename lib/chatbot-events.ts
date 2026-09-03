/**
 * Analytics plumbing for the Maru Chatbot demo (brief item 06).
 *
 * Deliberately unfired. The chatbot's behaviour and tech are still unspecified,
 * so these exist so that wiring them up later is a one-line call at each point
 * in the real integration rather than a fresh analytics design.
 *
 * They go through the same `trackEvent` path as the rest of the site
 * (dataLayer + gtag), so they will show up in GA4 without further setup — but
 * note that an event only becomes a *key event* by being marked as one in the
 * GA4 UI. `chatbot_handoff_to_booking` is the one worth marking; the other two
 * are funnel steps.
 *
 * Names are fixed by the brief. Do not rename them once anything fires — GA4
 * will not backfill a renamed event, and the site has been bitten by
 * documentation naming events the code never sent (see docs/
 * TECHNICAL-FIXES-AND-BOT-CONTROL.md, the T4 correction).
 */

import { trackEvent } from '@/lib/analytics'

export type ChatbotEvent =
  | 'chatbot_opened'
  | 'chatbot_completed'
  | 'chatbot_handoff_to_booking'

/** Visitor started a session with the demo chatbot. */
export function trackChatbotOpened(params?: { entry_point?: string }) {
  trackEvent('chatbot_opened', { ...params })
}

/** Visitor reached the end of the scripted flow. */
export function trackChatbotCompleted(params?: {
  turns?: number
  outcome?: string
}) {
  trackEvent('chatbot_completed', { ...params })
}

/**
 * Visitor moved from the chatbot to a booking or assessment — the conversion
 * this page exists to produce, and the one to mark as a GA4 key event.
 */
export function trackChatbotHandoff(params?: { destination?: string }) {
  trackEvent('chatbot_handoff_to_booking', { ...params })
}
