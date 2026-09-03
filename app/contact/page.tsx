import { Metadata } from 'next'
import ContactFormWithRecaptcha from './ContactFormWithRecaptcha'
import Button from '@/components/ui/Button'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { TrackedLink } from '@/components/analytics/TrackedLink'
import { FadeUp } from '@/components/ui/Animate'
import { BGPattern } from '@/components/ui/bg-pattern'
import { seo } from '@/lib/seo'

export const metadata: Metadata = {
  title:       'Contact | Maru Online',
  description: "Two ways to start — the Operations Assessment or a 20-minute discovery call. You speak directly with Jimmy.",
  ...seo('/contact'),
}

const outerPad    = 'px-6 md:px-[60px]'
const inner       = 'max-w-[900px] mx-auto'
const innerWide   = 'max-w-[1100px] mx-auto'
const innerNarrow = 'max-w-[720px] mx-auto'

export default function ContactPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`relative min-h-[60vh] flex items-center ${outerPad} pt-48 pb-32`}
        style={{ backgroundColor: 'var(--color-bg-navy)' }}
      >
        <BGPattern
          variant="grid"
          mask="none"
          size={40}
          fill="rgba(61, 184, 198, 0.12)"
          className="z-0"
        />
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            top:           '-120px',
            right:         '-120px',
            width:         '480px',
            height:        '480px',
            borderRadius:  '50%',
            border:        '1px solid rgba(61,184,198,0.15)',
            pointerEvents: 'none',
          }}
        />
        <div className={`${innerWide} relative z-10`}>
          <FadeUp>
            <span className="label-eyebrow">Contact us</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split">
              <span className="maru-headline-split-strong">Tell us what&apos;s eating your time.</span>
              <br />
              <span className="maru-headline-split-light">Let&apos;s talk about it.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-body font-light"
              style={{
                color:      'var(--color-ink-inverted-muted)',
                fontSize:   'var(--text-body-sm)',
                lineHeight: 'var(--leading-body)',
                marginBottom: 0,
              }}
            >
              We respond within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CONTACT FORM + SIDE INFO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="contact-form"
        className={`${outerPad} py-24`}
        style={{ background: 'var(--gradient-surface)' }}
      >
        <div className={innerWide}>
          <div className="card-lift p-8 md:p-12">
            {/* Header — left-column width only */}
            <div className="md:grid md:grid-cols-[1fr_360px] md:gap-24">
            <FadeUp>
              <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
                <Button href="/booking" variant="primary">
                  Book a discovery call
                </Button>
                <p
                  style={{
                    fontFamily:  'var(--font-body)',
                    fontSize:    'var(--text-meta)',
                    fontWeight:  300,
                    color:       'var(--color-ink-tertiary)',
                    marginTop:   '0.75rem',
                    marginBottom: 0,
                  }}
                >
                  Twenty minutes, straight to the point.
                </p>
              </div>

              <h2 style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: 300 }}>Or send a</span>
                <br />
                <span style={{ fontWeight: 700 }}>message directly</span>
              </h2>
            </FadeUp>
            </div>

            {/* Two-column grid starts here — aligned to first form field */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10 md:gap-24 items-start">

              {/* Left — form */}
              <div>
                <ContactFormWithRecaptcha />
              </div>

              {/* Right — contact details */}
              <div style={{ paddingTop: '0.5rem' }} className="md:sticky md:top-24 md:self-start">
                  <p
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      'var(--text-label)',
                      fontWeight:    500,
                      letterSpacing: 'var(--tracking-eyebrow)',
                      textTransform: 'uppercase',
                      color:         'var(--color-ink-tertiary)',
                      marginBottom:  '1.5rem',
                    }}
                  >
                    Other ways to reach us
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <p
                        style={{
                          fontFamily:    'var(--font-body)',
                          fontSize:      'var(--text-label)',
                          fontWeight:    500,
                          letterSpacing: 'var(--tracking-eyebrow)',
                          textTransform: 'uppercase',
                          color:         'var(--color-ink-tertiary)',
                          marginBottom:  '0.25rem',
                        }}
                      >
                        WhatsApp — fastest
                      </p>
                      <TrackedLink
                        href={buildWhatsAppLink('/contact')}
                        event="whatsapp_click"
                        eventData={{ source: 'contact_page' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="group inline-flex items-center rounded-[6px] overflow-hidden no-underline shadow-[var(--shadow-btn)] hover:-translate-y-px hover:shadow-[var(--shadow-btn-hover)] transition-[transform,box-shadow] duration-150"
                        style={{ marginBottom: '0.25rem' }}
                      >
                        {/* Icon + label */}
                        <span
                          style={{
                            display:         'flex',
                            alignItems:      'center',
                            gap:             '10px',
                            padding:         '10px 16px',
                            backgroundColor: 'var(--color-cyan)',
                          }}
                        >
                          {/* WhatsApp SVG */}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
                            <path fill="#fff" d="M16 2C8.27 2 2 8.27 2 16a13.93 13.93 0 0 0 1.93 7.07L2 30l7.2-1.88A14 14 0 1 0 16 2zm0 25.46a11.6 11.6 0 0 1-5.94-1.63l-.43-.25-4.42 1.06 1.1-4.3-.28-.44A11.54 11.54 0 1 1 16 27.46zm6.35-8.6c-.33-.17-1.96-1-2.27-1.11s-.52-.17-.74.17-.85 1.1-1.04 1.33-.38.25-.71.08a9.07 9.07 0 0 1-2.68-1.66 10.1 10.1 0 0 1-1.86-2.32c-.2-.33 0-.52.15-.69s.33-.38.5-.58a2.3 2.3 0 0 0 .33-.56.63.63 0 0 0-.03-.58c-.08-.17-.74-1.8-1.02-2.47s-.53-.56-.74-.57h-.63a1.22 1.22 0 0 0-.88.42 3.73 3.73 0 0 0-1.15 2.77 6.48 6.48 0 0 0 1.35 3.43 14.85 14.85 0 0 0 5.68 5.01c.79.34 1.4.54 1.88.69a4.56 4.56 0 0 0 2.1.13 3.44 3.44 0 0 0 2.24-1.59 2.78 2.78 0 0 0 .19-1.59c-.08-.14-.3-.22-.64-.39z"/>
                          </svg>
                          <span
                            style={{
                              fontFamily:    'var(--font-body)',
                              fontSize:      '0.8rem',
                              fontWeight:    600,
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase',
                              color:         '#fff',
                              whiteSpace:    'nowrap',
                            }}
                          >
                            WhatsApp
                          </span>
                        </span>
                        {/* Arrow block */}
                        <span
                          style={{
                            display:         'flex',
                            alignItems:      'center',
                            justifyContent:  'center',
                            padding:         '10px 14px',
                            backgroundColor: 'var(--color-navy)',
                            alignSelf:       'stretch',
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </TrackedLink>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize:   'var(--text-meta)',
                          fontWeight: 300,
                          color:      'var(--color-ink-tertiary)',
                          margin:     0,
                        }}
                      >
                        Response within 4 business hours.
                      </p>
                    </div>

                    <div>
                      <p
                        style={{
                          fontFamily:    'var(--font-body)',
                          fontSize:      'var(--text-label)',
                          fontWeight:    500,
                          letterSpacing: 'var(--tracking-eyebrow)',
                          textTransform: 'uppercase',
                          color:         'var(--color-ink-tertiary)',
                          marginBottom:  '0.25rem',
                        }}
                      >
                        Email
                      </p>
                      <TrackedLink
                        href="mailto:hello@maruonline.com"
                        event="email_click"
                        eventData={{ source: 'contact_page' }}
                        style={{
                          fontFamily:     'var(--font-body)',
                          fontSize:       'var(--text-body)',
                          fontWeight:     300,
                          color:          'var(--color-cyan-ink)',
                          textDecoration: 'none',
                          display:        'block',
                          marginBottom:   '0.25rem',
                        }}
                      >
                        hello@maruonline.com
                      </TrackedLink>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize:   'var(--text-meta)',
                          fontWeight: 300,
                          color:      'var(--color-ink-tertiary)',
                          margin:     0,
                        }}
                      >
                        Response within 1 business day.
                      </p>
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-meta)',
                        fontWeight: 300,
                        color:      'var(--color-ink-tertiary)',
                        margin:     0,
                      }}
                    >
                      Mon–Fri, 8am–6pm SAST.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CLOSING QUOTE
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <p
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--text-h3-serif)',
                fontWeight:    400,
                fontStyle:     'italic',
                color:         'var(--color-ink-primary)',
                lineHeight:    'var(--leading-subheading)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom:  '0.75rem',
              }}
            >
              &ldquo;The right first step is an honest conversation about where you are.
              Everything else follows from that.&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
