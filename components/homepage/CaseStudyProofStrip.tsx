import Link from 'next/link'
import { caseStudyLink } from '@/lib/case-study'
import { ScaffoldPlaceholder } from '@/components/ui/ScaffoldPlaceholder'

/**
 * Homepage proof strip (brief item 08), placed after "Pick the problem, we'll
 * fix it".
 *
 * The frame is real and the link works. The proof point itself is a marked
 * placeholder: a proof strip with no number is the thing this module exists to
 * carry, and inventing one is explicitly out of bounds.
 */
export function CaseStudyProofStrip() {
  return (
    <div
      style={{
        border:       '1px solid var(--color-border-card)',
        borderRadius: '8px',
        padding:      '2rem',
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
        Proof
      </span>

      <div style={{ marginTop: '1rem' }}>
        <ScaffoldPlaceholder
          label="GrowthIQ headline number"
          blockedOn="Jimmy — one shareable metric, cleared with the client"
        >
          One figure and one line of context, e.g. what the platform now handles
          that a spreadsheet did before. Standing rule 6: verify it before
          building on it.
        </ScaffoldPlaceholder>
      </div>

      <div style={{ marginTop: '1.25rem' }}>
        <Link
          href={caseStudyLink('homepage')}
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
      </div>
    </div>
  )
}
