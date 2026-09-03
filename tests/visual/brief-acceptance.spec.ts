import { test, expect, Page } from '@playwright/test'

/**
 * Acceptance tests for the Sep 2026 site-fix brief (items 01, 02, 03, 10).
 *
 * These live here rather than in a scratch script because the brief asks for
 * criteria that are "verifiable — screenshot, redirect check, or console output,
 * not 'looks right'".
 *
 * They must run in a real browser, not the agent preview pane: that pane
 * delivers no scroll events and no animation frames (requestAnimationFrame
 * never fires), so anything driven by scrolling — including the WhatsApp
 * bubble's collision check — cannot be observed there at all.
 */

const CONSENT_KEY = 'maru-cookie-consent'

/** Skip the consent banner so a test can look at the resting state of the page. */
async function withConsentGiven(page: Page) {
  await page.addInitScript(
    ([k]) => window.localStorage.setItem(k, 'accepted'),
    [CONSENT_KEY],
  )
}

// ─── Item 03 — WhatsApp bubble / CTA collision ───────────────────────────────

test.describe('item 03 — floating bubble never covers the primary CTA', () => {
  test.skip(({ isMobile }) => !isMobile, 'mobile-only bug')

  test('no overlap with the hero CTA at any scroll position', async ({ page }) => {
    await withConsentGiven(page)
    await page.goto('/')

    const bubble = page.locator('a[aria-label="Chat on WhatsApp"]')
    const cta = page.locator('[data-maru-primary-cta]')
    await expect(cta).toHaveCount(1)

    // Walk the scroll range that puts the CTA anywhere near the bubble's corner.
    for (const y of [0, 20, 40, 60, 80, 120, 160, 200, 400, 800]) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y)
      await page.waitForTimeout(80)

      const visible = await bubble.evaluate(
        (el) => getComputedStyle(el).opacity !== '0',
      )
      if (!visible) continue // hidden bubble cannot cover anything

      const [b, c] = await Promise.all([
        bubble.boundingBox(),
        cta.boundingBox(),
      ])
      expect(b, `bubble box at scrollY=${y}`).not.toBeNull()
      expect(c, `cta box at scrollY=${y}`).not.toBeNull()

      const collide =
        b!.x < c!.x + c!.width && b!.x + b!.width > c!.x &&
        b!.y < c!.y + c!.height && b!.y + b!.height > c!.y
      expect(collide, `visible bubble overlaps the CTA at scrollY=${y}`).toBe(false)
    }
  })

  test('bubble yields to the cookie banner, then returns', async ({ page }) => {
    // No consent stored — the banner will appear on its 800ms timer.
    await page.goto('/')
    const banner = page.getByRole('dialog', { name: /cookie/i })
    await expect(banner).toBeVisible({ timeout: 5000 })

    const bubble = page.locator('a[aria-label="Chat on WhatsApp"]')

    // While the banner is up the bubble must be invisible AND untappable —
    // it otherwise paints over the DECLINE button by 33×44px at 375px wide.
    await expect(bubble).toHaveAttribute('aria-hidden', 'true')
    await expect(bubble).toHaveCSS('opacity', '0')
    await expect(bubble).toHaveCSS('pointer-events', 'none')

    // The banner's own controls must be genuinely reachable, not just painted.
    const decline = page.getByRole('button', { name: /decline/i })
    const declineBox = (await decline.boundingBox())!
    const topmost = await page.evaluate(
      ([x, y]) => {
        const el = document.elementFromPoint(x, y)
        return el ? el.closest('button,a')?.textContent?.trim() ?? el.tagName : null
      },
      [declineBox.x + declineBox.width / 2, declineBox.y + declineBox.height / 2],
    )
    expect(topmost, 'the DECLINE button must be the topmost element at its own centre')
      .toMatch(/decline/i)

    await decline.click()
    await expect(banner).toBeHidden()

    // Once dismissed, scroll somewhere the CTA is not in play and confirm the
    // bubble comes back — the fix must not disable it permanently.
    await page.evaluate(() => window.scrollTo({ top: 1400, behavior: 'instant' }))
    await expect(bubble).toHaveCSS('opacity', '1')
    await expect(bubble).toHaveAttribute('aria-hidden', 'false')
  })

  test('footer links meet a 44px touch target', async ({ page }) => {
    await withConsentGiven(page)
    await page.goto('/')

    const links = page.locator('footer a, footer button')
    const count = await links.count()
    expect(count).toBeGreaterThan(5)

    const undersized: string[] = []
    for (let i = 0; i < count; i++) {
      const el = links.nth(i)
      if (!(await el.isVisible())) continue
      const box = await el.boundingBox()
      if (!box) continue
      if (box.height < 44) {
        undersized.push(`${(await el.textContent())?.trim() || '(no text)'} → ${box.height}px`)
      }
    }
    expect(undersized, `footer targets under 44px:\n${undersized.join('\n')}`).toEqual([])
  })
})

// ─── Item 10 — pricing ───────────────────────────────────────────────────────

test.describe('item 10 — pricing page', () => {
  test('summary strip lists all three tiers and jumps to each card', async ({ page }) => {
    await withConsentGiven(page)
    await page.goto('/pricing')

    const rows = page.locator('a[href^="#"]', { hasText: /Operations Diagnostic|Workflow Integration|Team Training/ })
    await expect(rows).toHaveCount(3)

    for (const id of ['diagnostic', 'build', 'training']) {
      const row = page.locator(`a[href="#${id}"]`)
      await expect(row).toHaveCount(1)
      // Every tier shows a price in the strip itself.
      await expect(row).toContainText(/R[\d,]+/)
      await expect(page.locator(`#${id}`)).toHaveCount(1)
    }
  })

  test('each card reads title → duration → price, not price first', async ({ page }) => {
    await withConsentGiven(page)
    await page.goto('/pricing')

    // Source order inside the card header, which is what a screen reader follows.
    const order = await page.locator('#diagnostic').evaluate((card) => {
      const text = (card.textContent || '').replace(/\s+/g, ' ')
      return {
        title: text.indexOf('Operations Diagnostic'),
        duration: text.indexOf('48 hours'),
        price: text.indexOf('R4,500'),
      }
    })
    expect(order.title).toBeGreaterThanOrEqual(0)
    expect(order.duration).toBeGreaterThan(order.title)
    expect(order.price).toBeGreaterThan(order.duration)
  })
})

// ─── Item 01 — WhatsApp openers ──────────────────────────────────────────────

test.describe('item 01 — WhatsApp number and openers', () => {
  const cases: [string, string][] = [
    ['/', 'find out more about your AI workflow services'],
    ['/pricing', 'understand your pricing for workflow integration'],
    ['/contact', "question about Maru Online's services"],
    ['/careers', 'opportunities at Maru Online'],
    ['/operations-assessment', 'book my free operations assessment'],
    ['/services/workflow-integration', 'interested in Workflow Integration'],
    ['/services/team-training-handover', 'Team Training & Handover'],
    ['/services/results-optimisation', 'know more about Results Optimisation'],
    ['/about', 'find out more about your AI workflow services'], // unmapped → fallback
  ]

  for (const [path, expected] of cases) {
    test(`${path} uses the new number and its own opener`, async ({ page }) => {
      await withConsentGiven(page)
      await page.goto(path)

      const href = await page
        .locator('a[href*="wa.me"]')
        .first()
        .getAttribute('href')

      expect(href, `${path} has no wa.me link`).toBeTruthy()
      expect(href!, 'old number must be gone').not.toContain('27635643263')
      expect(href!).toContain('wa.me/27678904113')

      const text = new URL(href!).searchParams.get('text')
      expect(text, `${path} link carries no pre-filled text`).toBeTruthy()
      expect(text!).toContain(expected)
    })
  }
})
