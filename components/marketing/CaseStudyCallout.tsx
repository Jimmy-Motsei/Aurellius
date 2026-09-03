import Link from 'next/link'
import { caseStudyLink } from '@/lib/case-study'

/**
 * Contextual pointer to the GrowthIQ case study, for service and About pages.
 *
 * Structure is final; the copy is not — the one-line summary stays deliberately
 * factual and claim-free until Jimmy supplies a shareable metric (brief item
 * 08). It states what was built, which is verifiable, and no outcome, which is
 * not.
 */
export function CaseStudyCallout({
  source,
  line,
}: {
  /** Page this sits on — becomes utm_source. See lib/case-study.ts. */
  source: string
  /** Context line tying the study to this page's service. */
  line: string
}) {
  return (
    <aside
      style={{
        border:       '1px solid var(--color-border-card)',
        borderLeft:   '3px solid var(--color-cyan)',
        borderRadius: '8px',
        padding:      '1.5rem',
      }}
    >
      <span
        style={{
          fontFamily:    'var(--font-body)',
          fontSize:      'var(--text-label)',
          fontWeight:    500,
          letterSpacing: 'var(--tracking-eyebrow)',
          textTransform: 'uppercase',
          color:         'var(--color-ink-tertiary)',
        }}
      >
        Case study
      </span>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   'var(--text-body-sm)',
          fontWeight: 300,
          color:      'var(--color-ink-primary)',
          margin:     '0.5rem 0 1rem',
        }}
      >
        {line}
      </p>
      <Link
        href={caseStudyLink(source)}
        style={{
          fontFamily:     'var(--font-body)',
          fontSize:       'var(--text-cta)',
          fontWeight:     600,
          letterSpacing:  'var(--tracking-label)',
          textTransform:  'uppercase',
          color:          'var(--color-cyan)',
          textDecoration: 'none',
        }}
      >
        Read the GrowthIQ build →
      </Link>
    </aside>
  )
}
