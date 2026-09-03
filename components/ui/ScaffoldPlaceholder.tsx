import type { ReactNode } from 'react'

/**
 * A deliberately loud marker for scaffolded content awaiting real input.
 *
 * The brief for items 06 and 08 asks for "visually-obvious placeholder markers
 * (not invisible TODOs a reviewer could miss and ship)", so this is styled to
 * be impossible to mistake for finished work: dashed ochre border, tinted
 * ground, an explicit PLACEHOLDER label, and the blocker named in the heading.
 *
 * Every page that renders one of these must also carry `robots: noindex` — see
 * the note on each scaffold route. Delete the placeholder and the noindex
 * together when the real content lands.
 */
export function ScaffoldPlaceholder({
  label,
  blockedOn,
  children,
  minHeight,
}: {
  /** What this block will become, e.g. "Client quote". */
  label: string
  /** Who or what it is waiting on, e.g. "Jimmy — shareable metric". */
  blockedOn: string
  /** Optional note about shape, length or source of the eventual content. */
  children?: ReactNode
  /** For image slots — reserve the real asset's height so layout is honest. */
  minHeight?: string
}) {
  return (
    <div
      role="note"
      aria-label={`Placeholder: ${label}. Pending ${blockedOn}.`}
      style={{
        border:          '2px dashed var(--color-ochre-ink, #9A6B24)',
        backgroundColor: 'var(--color-ochre-tint, #FBF3E6)',
        borderRadius:    '8px',
        padding:         '1.5rem',
        minHeight,
        display:         'flex',
        flexDirection:   'column',
        justifyContent:  'center',
      }}
    >
      <span
        style={{
          fontFamily:    'var(--font-body)',
          fontSize:      'var(--text-label)',
          fontWeight:    700,
          letterSpacing: 'var(--tracking-eyebrow)',
          textTransform: 'uppercase',
          color:         'var(--color-ochre-ink, #9A6B24)',
          marginBottom:  '0.5rem',
        }}
      >
        Placeholder — not real content
      </span>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   'var(--text-body-sm)',
          fontWeight: 600,
          color:      'var(--color-ink-primary)',
          margin:     '0 0 0.25rem',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   'var(--text-meta)',
          fontWeight: 300,
          color:      'var(--color-ink-secondary, var(--color-ink-tertiary))',
          margin:     0,
        }}
      >
        Pending: {blockedOn}
      </p>
      {children && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'var(--text-meta)',
            fontWeight: 300,
            color:      'var(--color-ink-tertiary)',
            marginTop:  '0.75rem',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}
