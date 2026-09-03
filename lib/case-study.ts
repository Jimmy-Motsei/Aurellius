/**
 * Links into the GrowthIQ case study.
 *
 * ─── Why internal links are NOT UTM-tagged ───────────────────────────────────
 *
 * The brief (Appendix A) asked for `utm_campaign=case_study` on *internal*
 * links into the case study. Jimmy overrode that on 3 Sep 2026, and this is why:
 *
 * **UTM parameters on same-site links restart the GA4 session and overwrite its
 * traffic source.** A visitor who arrives from Google and then clicks a tagged
 * internal link is re-attributed from `google / organic` to
 * `homepage / internal` mid-visit, and is counted as two sessions. At Maru's
 * traffic volume a handful of these visibly distorts the channel report — the
 * same report the H2 strategy is steered by.
 *
 * The question the brief wanted answered — "which page sent people to the case
 * study" — is already answerable without UTMs, from GA4's page_referrer /
 * previous-page path on the case-study pageview, or a plain custom event.
 *
 * The GrowthIQ → Maru footer backlink stays tagged (`utm_source=growthiq`,
 * `utm_medium=referral`), and should: that is a genuine cross-domain referral,
 * which is what UTM parameters are actually for. It lives in the growthiq repo,
 * not here.
 *
 * `TAG_INTERNAL_LINKS` is kept as a switch rather than deleting the code, so the
 * decision stays visible and reversible. Do not flip it back without re-reading
 * the above.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Off by design — see the note above before changing. */
export const TAG_INTERNAL_LINKS = false

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
