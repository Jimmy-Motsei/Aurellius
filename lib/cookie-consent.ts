'use client';
import { useState, useEffect } from 'react';

export const COOKIE_CONSENT_KEY = 'maru-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;

export interface CookieConsentState {
  version: number;
  categories: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
  };
  updatedAt: string;
}

export const DEFAULT_CONSENT: CookieConsentState = {
  version: COOKIE_CONSENT_VERSION,
  categories: {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  },
  updatedAt: new Date().toISOString(),
};

export const saveConsent = (categories: CookieConsentState['categories']) => {
  if (typeof window === 'undefined') return;
  const state = { version: COOKIE_CONSENT_VERSION, categories, updatedAt: new Date().toISOString() };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event('cookie-consent-updated'));
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getStored = () => {
      try {
        const item = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!item) return null;
        
        const parsed = JSON.parse(item);
        // Ensure structure is valid by merging with defaults
        if (parsed && typeof parsed === 'object') {
             // Handle case where categories might be missing or incomplete
             if (!parsed.categories) {
                 return { ...DEFAULT_CONSENT, ...parsed, categories: DEFAULT_CONSENT.categories };
             }
             return {
                 ...DEFAULT_CONSENT,
                 ...parsed,
                 categories: { ...DEFAULT_CONSENT.categories, ...parsed.categories }
             };
        }
        return null;
      } catch { return null; }
    };
    setConsent(getStored());
    setLoaded(true);
    const handler = () => setConsent(getStored());
    window.addEventListener('cookie-consent-updated', handler);
    return () => window.removeEventListener('cookie-consent-updated', handler);
  }, []);

  return { consent, loaded };
};

// ─── Cookie banner visibility ─────────────────────────────────────────────────
// The banner is fixed at bottom-left (300px wide) and the floating WhatsApp
// bubble is fixed at bottom-right. On a 375px viewport those two overlap by
// 33×44px, and because the bubble paints over the banner it lands directly on
// the DECLINE button — an overlay obstructing a consent control. Measured live
// at 375×812 on 3 Sep 2026 before this fix.
//
// Rather than nudge either element and hope, the bubble subscribes to this
// signal and takes itself out of the way while the banner is up.

export const COOKIE_BANNER_EVENT = 'maru:cookie-banner-visibility';

let bannerVisible = false;

/** Called by the banner itself as it mounts and dismisses. */
export const setCookieBannerVisible = (visible: boolean) => {
  if (typeof window === 'undefined') return;
  bannerVisible = visible;
  window.dispatchEvent(new CustomEvent(COOKIE_BANNER_EVENT, { detail: visible }));
};

/** True while the consent banner is on screen. Safe during SSR (returns false). */
export const useCookieBannerVisible = (): boolean => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The banner mounts on an 800ms timer, so it may already be up (or already
    // dismissed) by the time a subscriber mounts. Seed from the module value.
    setVisible(bannerVisible);
    const handler = (e: Event) => setVisible((e as CustomEvent<boolean>).detail);
    window.addEventListener(COOKIE_BANNER_EVENT, handler);
    return () => window.removeEventListener(COOKIE_BANNER_EVENT, handler);
  }, []);

  return visible;
};
