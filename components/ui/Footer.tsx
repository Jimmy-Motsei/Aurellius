'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WhatsAppWidget from './WhatsAppWidget'
import { TrackedLink } from '@/components/analytics/TrackedLink'
import { footerNavigation } from '@/data/footer-navigation'
import { buildWhatsAppLink } from '@/lib/whatsapp'

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

// ─── Shared link class ────────────────────────────────────────────────────────

// min-h-[44px] + inline-flex is the tap-target fix: these links rendered at
// ~15–16px tall, well under the 44px Apple HIG / WCAG AAA target size. The font
// size is deliberately unchanged — the height comes from the box, not the type.
// The vertical lists below drop their gap-3 to compensate, so the taller rows
// tile edge to edge instead of ballooning the footer or overlapping each other.
const linkClass =
  'font-body text-[13px] font-light transition-colors duration-200 ' +
  'hover:text-[var(--color-cyan)] inline-flex items-center min-h-[44px]'

// Legal row: same treatment at the smaller 12px size used in the bottom bar.
const legalLinkClass =
  'font-body text-[12px] font-light transition-colors duration-200 ' +
  'hover:text-[var(--color-cyan)] inline-flex items-center min-h-[44px]'

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  // Drives the footer WhatsApp link's pre-filled opener per route.
  const pathname = usePathname()

  return (
    <>
      <footer style={{ background: 'var(--gradient-navy-soft)' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-[60px] py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {/* ── 4-column grid ──────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

              {/* Brand column */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Link
                  href="/"
                  aria-label="Maru Online — home"
                  className="inline-flex items-center py-1 mb-5"
                >
                  <Image
                    src="/images/brand/maru-logo-reversed.png"
                    alt="Maru Online"
                    width={120}
                    height={52}
                    style={{ height: '36px', width: 'auto' }}
                  />
                </Link>
                <p
                  className="font-body font-light text-[13px] leading-relaxed mb-6"
                  style={{ color: 'var(--color-ink-inverted-muted)' }}
                >
                  Building AI-powered workflows for growing SMEs.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  {footerNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="
                        h-11 w-11 rounded-full flex items-center justify-center
                        transition-[color,border-color] duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)]
                      "
                      style={{
                        border: '1px solid rgba(250,250,248,0.15)',
                        color: 'rgba(250,250,248,0.4)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--color-cyan)'
                        e.currentTarget.style.borderColor = 'rgba(61,184,198,0.5)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'rgba(250,250,248,0.4)'
                        e.currentTarget.style.borderColor = 'rgba(250,250,248,0.15)'
                      }}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Navigation column */}
              <motion.div variants={itemVariants}>
                <h4
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-6"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  Navigation
                </h4>
                <ul className="flex flex-col list-none m-0 p-0">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={linkClass}
                        style={{ color: 'var(--color-ink-inverted-muted)' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services column */}
              <motion.div variants={itemVariants}>
                <h4
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-6"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  Services
                </h4>
                <ul className="flex flex-col list-none m-0 p-0">
                  {[
                    { name: 'Operations Diagnostic',      href: '/services/operations-diagnostic' },
                    { name: 'Workflow Integration',    href: '/services/workflow-integration' },
                    { name: 'Team Training & Handover',    href: '/services/team-training-handover' },
                    { name: 'Results Optimisation',          href: '/services/results-optimisation' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={linkClass}
                        style={{ color: 'var(--color-ink-inverted-muted)' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact column */}
              <motion.div variants={itemVariants}>
                <h4
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-6"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  Get in Touch
                </h4>
                <ul className="flex flex-col list-none m-0 p-0">
                  <li>
                    <TrackedLink
                      href="mailto:hello@maruonline.com"
                      event="email_click"
                      eventData={{ source: 'footer' }}
                      className={linkClass}
                      style={{ color: 'var(--color-ink-inverted-muted)' }}
                    >
                      hello@maruonline.com
                    </TrackedLink>
                  </li>
                  <li>
                    <TrackedLink
                      href={buildWhatsAppLink(pathname)}
                      event="whatsapp_click"
                      eventData={{ source: 'footer' }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkClass} hover:!text-[#25D366]`}
                      style={{ color: 'var(--color-ink-inverted-muted)' }}
                    >
                      WhatsApp
                    </TrackedLink>
                  </li>
                  <li
                    className="font-body text-[13px] font-light py-2"
                    style={{ color: 'var(--color-ink-inverted-muted)' }}
                  >
                    Gauteng, South Africa
                  </li>
                  <li
                    className="font-body text-[13px] font-light py-2"
                    style={{ color: 'var(--color-ink-inverted-muted)' }}
                  >
                    Mon–Fri, 9am–6pm SAST
                  </li>
                </ul>
              </motion.div>

            </div>

            {/* ── Bottom bar ─────────────────────────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8"
              style={{ borderTop: '1px solid rgba(250,250,248,0.1)' }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                {/* Copyright */}
                <p
                  className="font-body text-[12px] font-light"
                  style={{ color: 'rgba(250,250,248,0.35)' }}
                >
                  © {new Date().getFullYear()} Maru Online. All Rights Reserved.
                </p>

                {/* Legal links */}
                <ul className="flex flex-wrap items-center gap-5 list-none m-0 p-0">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={legalLinkClass}
                        style={{ color: 'rgba(250,250,248,0.35)' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                      className={`${legalLinkClass} focus-visible:outline-none focus-visible:underline`}
                      style={{ color: 'rgba(250,250,248,0.35)' }}
                    >
                      Cookie Preferences
                    </button>
                  </li>
                </ul>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </footer>

      {/* WhatsApp floating widget — fixed position, outside footer flow */}
      <WhatsAppWidget />
    </>
  )
}
