'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { setCookieBannerVisible } from '@/lib/cookie-consent'

const STORAGE_KEY = 'maru-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const timer = setTimeout(() => {
        setVisible(true)
        // Tell the floating WhatsApp bubble to stand down — it otherwise paints
        // over this banner's DECLINE button. See lib/cookie-consent.ts.
        setCookieBannerVisible(true)
      }, 800)
      return () => {
        clearTimeout(timer)
        setCookieBannerVisible(false)
      }
    }
  }, [])

  function dismiss(choice: 'accepted' | 'declined') {
    localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
    setCookieBannerVisible(false)
  }

  const accept  = () => dismiss('accepted')
  const decline = () => dismiss('declined')

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position:        'fixed',
        bottom:          '2rem',
        left:            '2rem',
        zIndex:          9999,
        width:           '300px',
        backgroundColor: 'var(--color-bg-navy)',
        border:          '1px solid rgba(61, 184, 198, 0.25)',
        borderRadius:    '8px',
        padding:         '1.5rem',
        boxShadow:       '0 8px 32px rgba(13, 27, 42, 0.4)',
      }}
    >
      <p
        style={{
          fontFamily:   'var(--font-body)',
          fontSize:     'var(--text-body-sm)',
          fontWeight:   500,
          color:        'var(--color-ink-inverted)',
          lineHeight:   'var(--leading-subheading)',
          marginBottom: '0.5rem',
        }}
      >
        We use cookies
      </p>
      <p
        style={{
          fontFamily:   'var(--font-body)',
          fontSize:     'var(--text-meta)',
          fontWeight:   300,
          color:        'var(--color-ink-inverted-muted)',
          lineHeight:   'var(--leading-body)',
          marginBottom: '1.25rem',
        }}
      >
        We use cookies to improve your experience and analyse site traffic. See our{' '}
        <Link
          href="/cookie-policy"
          style={{
            color:          'var(--color-cyan)',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
        >
          Cookie Policy
        </Link>
        .
      </p>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={accept}
          style={{
            flex:            1,
            fontFamily:      'var(--font-body)',
            fontSize:        'var(--text-cta)',
            fontWeight:      600,
            letterSpacing:   'var(--tracking-label)',
            textTransform:   'uppercase',
            color:           'var(--color-navy)',
            backgroundColor: 'var(--color-cyan)',
            border:          'none',
            borderRadius:    '6px',
            padding:         '0.625rem 0',
            cursor:          'pointer',
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            flex:            1,
            fontFamily:      'var(--font-body)',
            fontSize:        'var(--text-cta)',
            fontWeight:      500,
            letterSpacing:   'var(--tracking-label)',
            textTransform:   'uppercase',
            color:           'var(--color-ink-inverted-muted)',
            backgroundColor: 'transparent',
            border:          '1px solid rgba(250, 250, 248, 0.2)',
            borderRadius:    '6px',
            padding:         '0.625rem 0',
            cursor:          'pointer',
          }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}
