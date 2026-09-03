/**
 * Links into the GrowthIQ case study.
 *
 * ─── A caveat worth reading before this ships ────────────────────────────────
 *
 * The brief (Appendix A) asks for `utm_campaign=case_study` on *internal* links
 * into the case study, with a page-dependent source and medium. That is
 * implemented here, but it has a real cost that should be a deliberate choice
 * rather than a surprise:
 *
 * **UTM parameters on same-site links restart the GA4 session and overwrite its
 * traffic source.** A visitor who arrives from Google and then clicks a tagged
 * internal link is re-attributed from `google / organic` to
 * `homepage / internal` mid-visit, and is counted as two sessions. On a site
 * with the traffic Maru currently has, a handful of these is enough to distort
 * the channel report that the H2 strategy is being steered by.
 *
 * The information the brief wants — "which page sent people to the case study"
 * — is already available without UTMs, via GA4's page_referrer / previous-page
 * path on the case-study pageview, or by adding a plain custom event.
 *
 * So: `TAG_INTERNAL_LINKS` below implements the brief as written. Flip it to
 * false to keep attribution intact; the anchors keep working either way, and
 * nothing else needs to change. The GrowthIQ → Maru backlink is a genuinely
 * cross-domain referral and is tagged regardless — that is what UTMs are for.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Set false to stop tagging same-site links (see the note above). */
export const TAG_INTERNAL_LINKS = true

export const CASE_STUDY_PATH = '/case-studies/growthiq'

/**
 * Href for an internal link into the GrowthIQ case study.
 *
 * @param source the page the link sits on, e.g. 'homepage', 'about',
 *               'services_workflow_integration' — becomes utm_source.
 */
export function caseStudyLink(source: string): string {
  if (!TAG_INTERNAL_LINKS) return CASE_STUDY_PATH

  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: 'internal',
    utm_campaign: 'case_study',
  })
  return `${CASE_STUDY_PATH}?${params.toString()}`
}
