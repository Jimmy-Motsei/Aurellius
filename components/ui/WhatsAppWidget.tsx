'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { trackOutbound } from '@/components/analytics/TrackedLink'
import { useCookieBannerVisible } from '@/lib/cookie-consent'
import { buildWhatsAppLink } from '@/lib/whatsapp'

// Fixed floating WhatsApp button — full implementation deferred to a later session.
// Renders a pulse-animated button that opens WhatsApp on tap.
//
// It yields to two things.
//
// 1. The cookie-consent banner. Both are fixed to the bottom of the viewport and
//    at 375px wide they overlap by 33×44px, with the bubble painting on top of
//    the banner's DECLINE button. Obstructing a consent control is not something
//    to leave to z-index luck, so the bubble hides until the banner is dismissed.
//
// 2. The page's primary CTA. A fixed button and a full-bleed in-flow CTA at the
//    bottom of a hero cannot be separated by repositioning — at 375px the CTA
//    spans the full content width, so there is nowhere along the bottom edge for
//    the bubble to sit. Measured at 375×812 they clear each other by 6px at rest
//    and overlap by 4px after ~60px of scroll.
//
//    This compares the two rectangles directly rather than using an
//    IntersectionObserver. The observer form is the obvious choice and was
//    written first, but it answers the wrong question — "is the CTA on screen"
//    is a proxy for "do these two boxes collide", and it hides the bubble
//    through a long stretch of scrolling where nothing actually overlaps.
//    Measuring the collision is both the real condition and one that can be
//    verified from a script.
export default function WhatsAppWidget() {
  // The bubble renders on every route, so its opener is whichever page the
  // visitor is actually on. Unmapped routes fall back to the general opener.
  const pathname = usePathname()

  const bannerVisible = useCookieBannerVisible()
  const [ctaCollision, setCtaCollision] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const measure = () => {
      const bubble = ref.current
      const cta = document.querySelector('[data-maru-primary-cta]')
      if (!bubble || !cta) {
        setCtaCollision(false)
        return
      }
      const b = bubble.getBoundingClientRect()
      const c = cta.getBoundingClientRect()
      // 12px of breathing room on each axis so the bubble gets out of the way
      // just before the edges touch, not at the moment they do.
      const pad = 12
      setCtaCollision(
        b.left - pad < c.right &&
        b.right + pad > c.left &&
        b.top - pad < c.bottom &&
        b.bottom + pad > c.top,
      )
    }

    let frame = 0
    const onChange = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onChange, { passive: true })
    window.addEventListener('resize', onChange)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onChange)
      window.removeEventListener('resize', onChange)
    }
    // Re-measure on navigation: the CTA belongs to the page, not to this
    // component, so it is a different node (or absent) after a route change.
  }, [pathname])

  const hidden = bannerVisible || ctaCollision

  return (
    <a
      ref={ref}
      href={buildWhatsAppLink(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackOutbound('whatsapp_click', { source: 'floating_button' })}
      // Hidden from the accessibility tree and from pointer events too, not just
      // faded — a 0-opacity link still takes taps and still gets announced.
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      style={{
        position: 'fixed',
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? 'none' : 'auto',
        // Asymmetric on purpose: leaving is instant, returning fades. A
        // symmetric fade would keep the bubble painted over the CTA for the
        // whole 200ms it takes to disappear — still an overlap.
        transition: hidden ? 'none' : 'opacity 0.2s ease',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'whatsapp-pulse 2.5s ease-in-out infinite',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
      }}
    >
      {/* WhatsApp logo — plain SVG, no external dependency */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}
