/* @ds-bundle: {"format":3,"namespace":"MaruOnlineDesignSystem_422da4","components":[{"name":"WhatsAppButton","sourcePath":"components/actions/WhatsAppButton.jsx"},{"name":"CardFeature","sourcePath":"components/cards/CardFeature.jsx"},{"name":"CardGold","sourcePath":"components/cards/CardGold.jsx"},{"name":"CardMetric","sourcePath":"components/cards/CardMetric.jsx"},{"name":"CardNavy","sourcePath":"components/cards/CardNavy.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SplitHeadline","sourcePath":"components/core/SplitHeadline.jsx"},{"name":"AccordionFAQ","sourcePath":"components/feedback/AccordionFAQ.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/actions/WhatsAppButton.jsx":"a759299d3dad","components/cards/CardFeature.jsx":"2613d6efc2a0","components/cards/CardGold.jsx":"c8956f9d2c13","components/cards/CardMetric.jsx":"aaf301f645f2","components/cards/CardNavy.jsx":"88ad99f13de7","components/cards/ServiceCard.jsx":"982353116d1a","components/core/Badge.jsx":"6fc8663b84b5","components/core/Button.jsx":"352e2923d077","components/core/Eyebrow.jsx":"476d0be92b32","components/core/SplitHeadline.jsx":"d16759665179","components/feedback/AccordionFAQ.jsx":"ff16e6982e69","components/forms/Checkbox.jsx":"59929e0120ae","components/forms/Input.jsx":"64cb686aa3e5","components/forms/Select.jsx":"f48ed36caad3","components/forms/Textarea.jsx":"966ee98391df","ui_kits/website/Assessment.jsx":"0735158ea206","ui_kits/website/Footer.jsx":"b496cdac8094","ui_kits/website/Header.jsx":"0f1477615c78","ui_kits/website/Homepage.jsx":"3e802eba5f6b","ui_kits/website/Pricing.jsx":"a2ffbf508940","ui_kits/website/Process.jsx":"9ea5b4de0aa5","ui_kits/website/Services.jsx":"adb5a410ca00"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaruOnlineDesignSystem_422da4 = window.MaruOnlineDesignSystem_422da4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WhatsAppButton — the persistent, first-class WhatsApp CTA. A pulsing green
 * floating action button (default) or an inline pill. WhatsApp is how SA SMEs
 * actually talk to suppliers, so it is always reachable.
 */
function WhatsAppButton({
  phone = "27678904113",
  message = "",
  variant = "fab",
  label = "Chat on WhatsApp",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
  const green = "#25D366";
  const Glyph = ({
    size
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  }));
  if (variant === "inline") {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "11px 20px",
        minHeight: "44px",
        borderRadius: "9999px",
        background: hover ? "#1fb957" : green,
        color: "#FFFFFF",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 600,
        textDecoration: "none",
        letterSpacing: "0.01em",
        transition: "background-color 200ms",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Glyph, {
      size: 20
    }), label);
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label,
    style: {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: 50,
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: green,
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(37,211,102,0.4)",
      animation: "maru-whatsapp-pulse 2.5s ease-in-out infinite",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes maru-whatsapp-pulse {
        0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
        70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
        100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
      }`), /*#__PURE__*/React.createElement(Glyph, {
    size: 28
  }));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardFeature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CardFeature — white feature tile with a cyan icon chip, title and body.
 * Flat (no radius), hairline border, lifts to a faint cyan wash on hover.
 * The default card for service / benefit grids on light sections.
 */
function CardFeature({
  icon,
  title,
  body,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1.75rem",
      background: hover ? "rgba(61,184,198,0.08)" : "var(--color-bg-primary)",
      border: hover ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-default)",
      boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out, background-color 300ms ease-out",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: hover ? "var(--color-cyan)" : "rgba(61,184,198,0.1)",
      color: hover ? "#FFFFFF" : "var(--color-cyan)",
      transition: "background-color 200ms, color 200ms"
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "18px",
      color: "var(--color-navy)",
      lineHeight: 1.35,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "15px",
      color: "var(--color-ink-secondary)",
      lineHeight: 1.6,
      margin: 0
    }
  }, body));
}
Object.assign(__ds_scope, { CardFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardFeature.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardGold.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CardGold — light gold-tint panel with an antique-gold left-rail. The system's
 * credential register: reserve it for proof, results, and trust statements
 * (case results, guarantees, POPIA notes). Gold is never an interactive accent.
 */
function CardGold({
  label,
  title,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--color-gold-light)",
      border: "1px solid var(--color-gold-antique-border)",
      borderLeft: "4px solid var(--color-gold-antique)",
      borderRadius: "0 8px 8px 0",
      padding: "2rem 2.25rem",
      boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
      transform: hover ? "translateY(-2px) scale(1.015)" : "none",
      transition: "transform 300ms ease-out, box-shadow 300ms ease-out",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-gold-antique)",
      display: "block",
      marginBottom: "0.5rem"
    }
  }, label), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3-serif)",
      fontWeight: 500,
      color: "var(--color-gold-antique)",
      lineHeight: "var(--leading-subheading)",
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 1rem"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 300,
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { CardGold });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardGold.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardMetric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CardMetric — a single stat. Numerals are a brand asset, so the value renders
 * large in the Outfit display face over a small uppercase label. The building
 * block of the Free / 24-Hour / 30 Days / Fixed stat row.
 */
function CardMetric({
  value,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      backgroundColor: "var(--color-bg-primary)",
      border: hover ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-default)",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "38px",
      fontWeight: 600,
      color: "var(--color-navy)",
      lineHeight: 1,
      margin: "0 0 8px",
      letterSpacing: "-0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--color-ink-tertiary)",
      lineHeight: 1.4,
      margin: 0
    }
  }, label));
}
Object.assign(__ds_scope, { CardMetric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardMetric.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardNavy.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CardNavy — dark navy panel with a cyan left-rail and cyan title. Use for
 * "what you get" / current-state statements on light pages. Lifts on hover.
 */
function CardNavy({
  label,
  title,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--color-bg-navy)",
      border: "1px solid rgba(61,184,198,0.15)",
      borderLeft: "4px solid var(--color-cyan)",
      borderRadius: "0 12px 12px 0",
      padding: "2rem 2.25rem",
      boxShadow: hover ? "0 8px 28px rgba(0,0,0,0.40), 0 0 16px rgba(61,184,198,0.10)" : "0 4px 16px rgba(0,0,0,0.30)",
      borderColor: hover ? "rgba(61,184,198,0.35)" : "rgba(61,184,198,0.15)",
      transform: hover ? "translateY(-2px) scale(1.015)" : "none",
      transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      display: "block",
      marginBottom: "0.75rem"
    }
  }, label), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3-serif)",
      fontWeight: 400,
      color: "var(--color-cyan)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 1rem"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      fontWeight: 300,
      color: "rgba(250,250,248,0.75)",
      lineHeight: "var(--leading-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { CardNavy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardNavy.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — navy service tile with a title, description, and a cyan circular
 * arrow affordance that scales on hover. Links through to a service detail page.
 */
function ServiceCard({
  title,
  description,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "2rem",
      textDecoration: "none",
      background: hover ? "#16324f" : "var(--color-bg-navy)",
      boxShadow: hover ? "0 8px 28px rgba(0,0,0,0.45)" : "0 4px 16px rgba(0,0,0,0.30)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "transform 300ms ease-out, box-shadow 300ms ease-out, background-color 300ms ease-out",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "20px",
      color: "var(--color-ink-inverted)",
      margin: "0 0 1.25rem",
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "16px",
      color: "rgba(250,250,248,0.75)",
      lineHeight: 1.65,
      margin: "0 0 2rem",
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "9999px",
      background: "var(--color-cyan)",
      color: "var(--color-navy)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: hover ? "scale(1.15)" : "scale(1)",
      transition: "transform 200ms ease-out"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / pill — a small status or category marker. Cyan tint (default),
 * gold tint (credential, e.g. "POPIA-aligned"), or navy.
 */
function Badge({
  children,
  tone = "cyan",
  style,
  ...rest
}) {
  const tones = {
    cyan: {
      bg: "var(--color-cyan-light)",
      fg: "var(--color-cyan-dark)"
    },
    gold: {
      bg: "var(--color-gold-light)",
      fg: "var(--color-gold-antique)"
    },
    navy: {
      bg: "rgba(26,58,92,0.08)",
      fg: "var(--color-navy)"
    },
    whatsapp: {
      bg: "rgba(37,211,102,0.12)",
      fg: "#128C4B"
    }
  };
  const t = tones[tone] || tones.cyan;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: t.fg,
      backgroundColor: t.bg,
      padding: "5px 11px",
      borderRadius: "9999px",
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maru Button — the system's primary action. Cyan fill with navy ink (primary),
 * cyan outline (secondary), or inline text link with a trailing arrow (tertiary).
 * Labels are uppercase, 0.15em tracked. Minimum 44px tap target.
 */
function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const cyan = "#3DB8C6";
  const cyanDark = "#2DA8B6";
  const navy = "#1A3A5C";
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: "11px",
      minHeight: "38px"
    },
    md: {
      padding: "12px 26px",
      fontSize: "12px",
      minHeight: "44px"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "13px",
      minHeight: "52px"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    borderRadius: "8px",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : "auto",
    transition: "transform 200ms ease-out, background-color 200ms ease-out, color 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out",
    transform: active ? "scale(0.98)" : hover ? "scale(1.02)" : "scale(1)",
    ...sizes[size]
  };
  const focusRing = focus ? "0 0 0 3px rgba(61,184,198,0.45), 0 4px 16px rgba(61,184,198,0.25)" : "none";
  const variants = {
    primary: {
      backgroundColor: active || hover ? cyanDark : cyan,
      color: navy,
      boxShadow: focus ? focusRing : hover ? "0 4px 16px rgba(61,184,198,0.35)" : "none"
    },
    secondary: {
      backgroundColor: hover ? cyan : "transparent",
      color: hover ? navy : cyan,
      borderColor: cyan,
      boxShadow: focus ? focusRing : hover ? "0 4px 16px rgba(61,184,198,0.2)" : "none"
    },
    tertiary: {
      backgroundColor: "transparent",
      color: hover ? cyanDark : cyan,
      borderRadius: 0,
      padding: "4px 0",
      minHeight: "auto",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: "4px",
      letterSpacing: "0.04em",
      textTransform: "none",
      fontWeight: 600,
      boxShadow: "none"
    }
  };
  const composed = {
    ...base,
    ...variants[variant],
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  const label = variant === "tertiary" ? /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")) : children;
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: composed,
      onClick: onClick
    }, handlers, rest), label);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: composed,
    onClick: onClick
  }, handlers, rest), label);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small uppercase kicker above a headline. Cyan by default
 * (interactive register) or gold (credential register). 11px / 500 / 0.2em.
 */
function Eyebrow({
  children,
  tone = "cyan",
  style,
  ...rest
}) {
  const color = tone === "gold" ? "var(--color-gold-antique)" : "var(--color-cyan)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color,
      display: "block",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SplitHeadline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SplitHeadline — Maru's signature display lockup: a light-weight (100) leading
 * phrase and a strong-weight (500) emphasis phrase, optionally on two lines.
 * Renders the Outfit display face at the size you pass via `style.fontSize`.
 */
function SplitHeadline({
  leadingText,
  emphasisText,
  as = "h2",
  breakBeforeEmphasis = true,
  emphasisTone = "navy",
  style,
  ...rest
}) {
  const Tag = as;
  const emphasisColor = emphasisTone === "cyan" ? "var(--color-cyan)" : emphasisTone === "gold" ? "var(--color-gold-antique)" : emphasisTone === "inverted" ? "var(--color-ink-inverted)" : "var(--color-navy)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      fontWeight: 100,
      color: "var(--color-navy)",
      margin: 0,
      ...style
    }
  }, rest), leadingText, breakBeforeEmphasis ? /*#__PURE__*/React.createElement("br", null) : " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: emphasisColor
    }
  }, emphasisText));
}
Object.assign(__ds_scope, { SplitHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SplitHeadline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AccordionFAQ.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AccordionFAQ — hairline-divided list of questions. The question sits in cyan
 * Outfit; a + icon rotates to × on open and the answer expands smoothly.
 */
function AccordionFAQ({
  items = [],
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), items.map((faq, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: "1px solid var(--color-border-default)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
        padding: "1.5rem 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-h3-serif)",
        fontWeight: 600,
        color: "var(--color-cyan)",
        lineHeight: "var(--leading-subheading)"
      }
    }, faq.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: "20px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-cyan)",
        transition: "transform 0.3s ease",
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8 2v12M2 8h12",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        paddingBottom: "1.5rem",
        maxWidth: "640px",
        fontSize: "var(--text-body-sm)",
        fontWeight: 300,
        color: "var(--color-ink-secondary)",
        lineHeight: "var(--leading-body)"
      }
    }, faq.a))));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-border-default)"
    }
  }));
}
Object.assign(__ds_scope, { AccordionFAQ });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AccordionFAQ.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — square control that fills cyan when checked, with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const inputId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flexShrink: 0,
      width: "20px",
      height: "20px",
      marginTop: "2px",
      borderRadius: "4px",
      border: on ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-strong)",
      background: on ? "var(--color-cyan)" : "var(--color-bg-primary)",
      transition: "background-color 150ms, border-color 150ms"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "pointer"
    }
  }, rest)), on && /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1A3A5C",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--color-ink-secondary)",
      lineHeight: 1.5
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with the brand cyan focus ring. Supports an
 * error state with helper text. Mobile-first 44px target.
 */
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "#C0392B" : focus ? "var(--color-cyan)" : "var(--color-border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--color-navy)",
      letterSpacing: "0.01em"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "44px",
      padding: "11px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      fontWeight: 400,
      color: "var(--color-ink-primary)",
      background: "var(--color-bg-primary)",
      border: `1px solid ${borderColor}`,
      borderRadius: "8px",
      outline: "none",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color 150ms, box-shadow 150ms",
      boxSizing: "border-box"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "#C0392B" : "var(--color-ink-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — labelled dropdown with a custom chevron and cyan focus ring. */
function Select({
  label,
  hint,
  error,
  id,
  children,
  options,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "#C0392B" : focus ? "var(--color-cyan)" : "var(--color-border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--color-navy)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "44px",
      padding: "11px 40px 11px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      color: "var(--color-ink-primary)",
      background: "var(--color-bg-primary)",
      border: `1px solid ${borderColor}`,
      borderRadius: "8px",
      outline: "none",
      appearance: "none",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color 150ms, box-shadow 150ms",
      boxSizing: "border-box",
      cursor: "pointer"
    }
  }, rest), options ? options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--color-ink-tertiary)"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L6 6.5L11 1.5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "#C0392B" : "var(--color-ink-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — labelled multi-line field, same chrome as Input. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "#C0392B" : focus ? "var(--color-cyan)" : "var(--color-border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--color-navy)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      color: "var(--color-ink-primary)",
      background: "var(--color-bg-primary)",
      border: `1px solid ${borderColor}`,
      borderRadius: "8px",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color 150ms, box-shadow 150ms",
      boxSizing: "border-box"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "#C0392B" : "var(--color-ink-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Assessment.jsx
try { (() => {
// Maru — Operations Assessment. Faithful interactive recreation of the live
// multi-step flow: intro → 10 questions (5 areas) → LIVE per-area score preview
// → email gate → confirmation. Aligned to the Maru cyan + type system.
const {
  Button: ABtn
} = window.MaruOnlineDesignSystem_422da4;
const {
  useState,
  useEffect
} = React;
const CYAN = "#3DB8C6";
const NAVY_INK = "#0D1B2A";
const QUESTIONS = [{
  id: "q1",
  area: "Process & Workflow",
  areaIndex: 1,
  text: "How would you describe the way work actually gets done in your business day-to-day?",
  options: ["We have documented steps and the team follows them consistently", "We have processes but they vary depending on who is handling it", "Things get done but we keep solving the same problems repeatedly", "It's ad hoc — whoever is available figures it out as they go"]
}, {
  id: "q2",
  area: "Process & Workflow",
  areaIndex: 1,
  text: "What happens when a key team member is unexpectedly unavailable for a week?",
  options: ["Someone else picks it up without skipping a beat — it's all documented", "It usually gets covered but there's significant scrambling", "Things slow down significantly until they're back", "It stalls — only they know how to handle their area"]
}, {
  id: "q3",
  area: "Data & Information Flow",
  areaIndex: 2,
  text: "Where does your business data live — customer records, job status, financials, communications?",
  options: ["Mostly in one central system — our tools are connected and talk to each other", "In a few separate tools — we move data between them manually when needed", "Spread across email, spreadsheets, and WhatsApp — no single source of truth", "Mostly in people's heads and informal notes"]
}, {
  id: "q4",
  area: "Data & Information Flow",
  areaIndex: 2,
  text: "How often does information in your business get lost, re-entered, or entered incorrectly?",
  options: ["Rarely — our systems catch errors and we have checks in place", "Occasionally — we usually catch it before it causes a real problem", "Regularly — it's a source of frustration and wasted time", "All the time — it's one of our biggest day-to-day issues"]
}, {
  id: "q5",
  area: "Client & Lead Management",
  areaIndex: 3,
  text: "When a new enquiry or lead comes in, what actually happens next?",
  options: ["It enters a defined process — automatically logged, assigned, and followed up", "We have a process but it depends on who's available to action it", "Someone handles it personally — how well depends on their current capacity", "It's reactive — we respond when we see it or someone flags it to us"]
}, {
  id: "q6",
  area: "Client & Lead Management",
  areaIndex: 3,
  text: "How confident are you that every lead gets followed up consistently — not just when it's convenient?",
  options: ["Very — follow-up is systematic and we track where every lead sits", "Reasonably — most leads get follow-up but some slip through", "Not very — follow-up depends on memory or whoever has capacity", "Not at all — we know we're losing leads but haven't fixed the process"]
}, {
  id: "q7",
  area: "Visibility & Reporting",
  areaIndex: 4,
  text: "How do you get a current view of how the business is actually performing?",
  options: ["From a dashboard or tool that updates automatically", "By pulling reports from our systems — takes some manual effort each time", "By asking the team or checking across different tools separately", "Mostly from instinct and experience — no formal process"]
}, {
  id: "q8",
  area: "Visibility & Reporting",
  areaIndex: 4,
  text: "When something goes wrong in the business, how do you typically find out?",
  options: ["Our systems flag it before it becomes a real problem", "It comes up during a team check-in or scheduled review", "A client or team member tells us — usually after the fact", "We often only find out once the damage is already done"]
}, {
  id: "q9",
  area: "People & Dependency",
  areaIndex: 5,
  text: "How reliant is your business on specific individuals to keep day-to-day operations running?",
  options: ["Low — most processes can be handled by any trained team member", "Moderate — some roles are critical but most things can be covered", "High — a few people hold most of the operational knowledge", "Very high — if one or two people left, the business would struggle"]
}, {
  id: "q10",
  area: "People & Dependency",
  areaIndex: 5,
  text: "Have you made a deliberate attempt to improve or systematise how your business operates?",
  options: ["No — it hasn't been a priority until now", "Yes — we've worked on it internally but haven't got far", "Yes — we brought someone in to help but it didn't fully deliver", "Yes — we have systems in place but they need to work better"]
}];
const AREAS = ["Process & Workflow", "Data & Information Flow", "Client & Lead Management", "Visibility & Reporting", "People & Dependency"];
const STATUS = {
  strong: {
    label: "Strong",
    colour: "#2B6CB0",
    bg: "#EBF8FF",
    border: "#63B3ED"
  },
  partial: {
    label: "Partial",
    colour: "#2F855A",
    bg: "#F0FFF4",
    border: "#68D391"
  },
  significant: {
    label: "Significant gap",
    colour: "#C05621",
    bg: "#FFFAF0",
    border: "#F6AD55"
  },
  critical: {
    label: "Critical gap",
    colour: "#E53E3E",
    bg: "#FFF5F5",
    border: "#FC8181"
  }
};
function statusFor(avg) {
  if (avg < 0.75) return "strong";
  if (avg < 1.5) return "partial";
  if (avg < 2.5) return "significant";
  return "critical";
}
function scoreAnswers(answers) {
  // answers: { q1: 0..3, ... }  (index = severity, higher = worse)
  const areaResults = AREAS.map(area => {
    const qs = QUESTIONS.filter(q => q.area === area);
    const idxs = qs.map(q => answers[q.id]).filter(v => v != null);
    const avg = idxs.reduce((a, b) => a + b, 0) / (idxs.length || 1);
    return {
      area,
      status: statusFor(avg)
    };
  });
  const overall = QUESTIONS.map(q => answers[q.id]).reduce((a, b) => a + b, 0) / QUESTIONS.length;
  let label, tagline;
  if (overall < 0.75) {
    label = "Well-systematised";
    tagline = "Your operations are in strong shape. The opportunity now is fine-tuning and protecting what works.";
  } else if (overall < 1.5) {
    label = "Mostly solid, some gaps";
    tagline = "The foundations are there. A few targeted connections would remove the friction that's slowing you down.";
  } else if (overall < 2.5) {
    label = "Significant manual load";
    tagline = "Your team is carrying real manual effort. There's clear, recoverable time across several areas.";
  } else {
    label = "Operating on goodwill";
    tagline = "Day-to-day runs on individual effort and memory. This is where integration delivers the biggest, fastest return.";
  }
  return {
    areaResults,
    overall,
    label,
    tagline
  };
}

// ── Logo ────────────────────────────────────────────────────────────────────
function Logo() {
  return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/maru-logo.png",
    alt: "Maru Online",
    style: {
      height: "26px",
      width: "auto",
      filter: "brightness(0) invert(1)"
    }
  });
}
const mono = {
  fontFamily: "var(--font-display)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontSize: "11px",
  fontWeight: 500
};

// ── Question step ─────────────────────────────────────────────────────────────
function QuestionStep({
  question,
  number,
  total,
  onAnswer
}) {
  const [selected, setSelected] = useState(null);
  function pick(i) {
    setSelected(i);
    setTimeout(() => onAnswer(i), 220);
  }
  const firstInArea = number % 2 === 1;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: firstInArea ? CYAN : "rgba(255,255,255,0.3)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      color: firstInArea ? CYAN : "rgba(255,255,255,0.4)"
    }
  }, firstInArea ? `Area ${question.areaIndex} of 5 — ${question.area}` : question.area)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...mono,
      color: "rgba(255,255,255,0.4)",
      marginBottom: "16px"
    }
  }, "Question ", number, " of ", total), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.35,
      margin: "0 0 24px",
      border: "none",
      padding: 0
    }
  }, question.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, question.options.map((opt, i) => {
    const on = selected === i;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => pick(i),
      style: {
        width: "100%",
        textAlign: "left",
        borderRadius: "8px",
        padding: "16px 20px",
        fontFamily: "var(--font-body)",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
        cursor: "pointer",
        transition: "all 180ms ease-out",
        border: on ? `1px solid ${CYAN}` : "1px solid rgba(61,184,198,0.3)",
        background: on ? "rgba(61,184,198,0.20)" : "rgba(232,248,250,1)",
        color: NAVY_INK
      }
    }, opt);
  })));
}
function InfoBox({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F4F6",
      border: "1px solid rgba(61,184,198,0.3)",
      borderRadius: "8px",
      padding: "24px",
      marginBottom: "24px"
    }
  }, children);
}

// ── Main ──────────────────────────────────────────────────────────────────────
function MaruAssessment() {
  const [step, setStep] = useState("intro"); // intro | 0..9 | results | gate | done
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (step === "intro") setProgress(0);else if (typeof step === "number") setProgress((step + 1) / QUESTIONS.length * 75);else if (step === "results") setProgress(85);else if (step === "gate") setProgress(95);else if (step === "done") setProgress(100);
  }, [step]);
  function answer(qid, idx) {
    const next = {
      ...answers,
      [qid]: idx
    };
    setAnswers(next);
    const cur = typeof step === "number" ? step : 0;
    if (cur + 1 >= QUESTIONS.length) {
      setResult(scoreAnswers(next));
      setStep("results");
    } else setStep(cur + 1);
  }
  return /*#__PURE__*/React.createElement("main", {
    style: {
      position: "relative",
      minHeight: "100vh",
      background: "var(--color-bg-navy)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(61,184,198,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.07) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: "3px",
      background: "#1e2a38"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: CYAN,
      width: `${progress}%`,
      transition: "width 500ms ease-out"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "24px",
      left: "24px",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "672px",
      margin: "0 auto",
      padding: "96px 24px 80px"
    }
  }, step === "intro" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...mono,
      color: CYAN,
      marginBottom: "24px"
    }
  }, "Maru Online \xB7 Operations Assessment"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "30px",
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0 0 16px",
      letterSpacing: "-0.01em"
    }
  }, "Find out where your business is losing time and money to manual processes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "18px",
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.6,
      marginBottom: "32px"
    }
  }, "10 questions across 5 operational areas. About 3 minutes."), /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: NAVY_INK,
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.6,
      margin: "0 0 12px"
    }
  }, "Answer based on how things actually work today \u2014 not how you want them to work. The more honest your answers, the more useful your result."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "#3a4a5c",
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: 1.6,
      margin: 0
    }
  }, "You'll receive a structured report showing how your business rates across five areas \u2014 process, data flow, lead management, visibility, and people dependency \u2014 with a recommended approach for where you sit.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      marginBottom: "32px"
    }
  }, AREAS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "8px",
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      color: CYAN,
      width: "16px"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      color: "rgba(255,255,255,0.8)",
      fontSize: "14px"
    }
  }, a)))), /*#__PURE__*/React.createElement(ABtn, {
    variant: "primary",
    size: "lg",
    onClick: () => setStep(0)
  }, "Start the assessment")), typeof step === "number" && /*#__PURE__*/React.createElement(QuestionStep, {
    key: step,
    question: QUESTIONS[step],
    number: step + 1,
    total: QUESTIONS.length,
    onAnswer: i => answer(QUESTIONS[step].id, i)
  }), step === "results" && result && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...mono,
      color: CYAN,
      marginBottom: "24px"
    }
  }, "Your result"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 8px",
      border: "none",
      padding: 0
    }
  }, result.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "16px",
      color: "rgba(255,255,255,0.7)",
      lineHeight: 1.6,
      marginBottom: "32px"
    }
  }, result.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "32px"
    }
  }, result.areaResults.map(a => {
    const cfg = STATUS[a.status];
    return /*#__PURE__*/React.createElement("div", {
      key: a.area,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px",
        padding: "16px 20px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        color: "rgba(255,255,255,0.9)",
        fontSize: "14px",
        fontWeight: 500
      }
    }, a.area), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "11px",
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
        padding: "4px 12px",
        borderRadius: "9999px",
        border: `1px solid ${cfg.border}`,
        color: cfg.colour,
        background: cfg.bg
      }
    }, cfg.label));
  })), /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: NAVY_INK,
      fontWeight: 600,
      fontSize: "16px",
      margin: "0 0 8px"
    }
  }, "Your detailed report goes deeper."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "#3a4a5c",
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: 1.6,
      margin: 0
    }
  }, "It breaks down each area \u2014 what your answers reveal, the specific issues, and a recommended approach for your stage of business. Enter your details below to receive it.")), /*#__PURE__*/React.createElement(ABtn, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep("gate")
  }, "Get my free detailed report")), step === "gate" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...mono,
      color: CYAN,
      marginBottom: "24px"
    }
  }, "Your report"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 8px",
      border: "none",
      padding: 0
    }
  }, "Where should we send it?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "16px",
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.6,
      marginBottom: "32px"
    }
  }, "We'll email you a link to your personalised report \u2014 a structured page showing your findings across all five areas with a recommended next step."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (name.trim() && email.trim()) setStep("done");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: name,
    onChange: setName,
    placeholder: "First name is fine",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email address",
    type: "email",
    value: email,
    onChange: setEmail,
    placeholder: "you@yourbusiness.com",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Business website",
    optional: true,
    value: website,
    onChange: setWebsite,
    placeholder: "yourbusiness.com"
  }), /*#__PURE__*/React.createElement(ABtn, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Send my report"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "rgba(255,255,255,0.5)",
      fontSize: "12px",
      textAlign: "center"
    }
  }, "No spam. Unsubscribe any time. POPIA compliant."))), step === "done" && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "rgba(61,184,198,0.10)",
      border: "1px solid rgba(61,184,198,0.3)",
      borderRadius: "9999px",
      padding: "24px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5",
    stroke: CYAN,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 12px",
      border: "none",
      padding: 0
    }
  }, "Your report is on its way."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "16px",
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.6,
      margin: "0 auto 32px",
      maxWidth: "440px"
    }
  }, "Check your inbox for a link to your personalised report \u2014 your findings across all five operational areas and a recommended next step."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(InfoBox, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: NAVY_INK,
      fontWeight: 600,
      fontSize: "16px",
      margin: "0 0 8px"
    }
  }, "While you wait:"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "#3a4a5c",
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: 1.6,
      margin: 0
    }
  }, "The report will invite you to book a free 30-minute discovery call \u2014 where we review your assessment together and tell you honestly whether a full Operations Diagnostic makes sense right now."))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setStep("intro");
      setAnswers({});
      setName("");
      setEmail("");
      setWebsite("");
    },
    style: {
      background: "none",
      border: "none",
      color: CYAN,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, "\u2190 Restart the assessment"))));
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  optional
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: 500,
      color: "#fff",
      marginBottom: "8px"
    }
  }, label, optional && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "rgba(255,255,255,0.5)"
    }
  }, " (optional \u2014 helps us personalise your report)")), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    required: required,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      borderRadius: "10px",
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "#fff",
      background: "rgba(255,255,255,0.05)",
      border: `1px solid ${focus ? CYAN : "rgba(255,255,255,0.15)"}`,
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 150ms"
    }
  }));
}
window.MaruAssessment = MaruAssessment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Assessment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Maru — site footer. Deep navy, logo + one-line positioning, IA columns, and
// the persistent WhatsApp affordance. IA matches the nav (Insights, not Resources).
const {
  WhatsAppButton: FooterWhatsApp
} = window.MaruOnlineDesignSystem_422da4;
const FOOTER_COLS = [{
  title: "Services",
  links: ["Operations Diagnostic", "Workflow Integration", "Results & Optimisation", "POPIA-Compliant AI", "Team Training"]
}, {
  title: "Company",
  links: ["About", "How We Work", "Pricing", "Insights", "Contact"]
}, {
  title: "Trust",
  links: ["POPIA compliance", "Fixed pricing", "30-day support", "Vendor-agnostic"]
}];
function MaruFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-bg-navy-deep)",
      padding: "64px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "40px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/maru-logo.png",
    alt: "Maru Online",
    style: {
      height: "32px",
      width: "auto",
      filter: "brightness(0) invert(1)",
      marginBottom: "20px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      fontWeight: 300,
      color: "rgba(250,250,248,0.6)",
      lineHeight: 1.7,
      margin: "0 0 24px",
      maxWidth: "320px"
    }
  }, "AI & automation consultancy for South African SMEs. We connect the tools you already pay for \u2014 no hype, fixed pricing, measured results."), /*#__PURE__*/React.createElement(FooterWhatsApp, {
    variant: "inline",
    label: "Chat on WhatsApp"
  })), FOOTER_COLS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: "0 0 16px"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, col.links.map(link => /*#__PURE__*/React.createElement("li", {
    key: link
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: 300,
      color: "rgba(250,250,248,0.7)",
      textDecoration: "none",
      transition: "color 200ms"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--color-cyan)",
    onMouseLeave: e => e.currentTarget.style.color = "rgba(250,250,248,0.7)"
  }, link))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "48px",
      paddingTop: "24px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("small", {
    style: {
      color: "rgba(250,250,248,0.4)",
      fontSize: "12px"
    }
  }, "\xA9 2026 Maru Online \xB7 Gauteng, South Africa"), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "rgba(250,250,248,0.4)",
      fontSize: "12px"
    }
  }, "POPIA compliant \xB7 Privacy \xB7 Terms"))));
}
window.MaruFooter = MaruFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Maru — site header. Navy translucent bar, white logo, cyan CTA. For the kit it
// renders in its "over-hero" state (the real site swaps to white when scrolled).
const {
  Button
} = window.MaruOnlineDesignSystem_422da4;
const NAV_LINKS = [{
  label: "About",
  href: "#"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "How We Work",
  href: "#process"
}, {
  label: "Pricing",
  href: "#"
}, {
  label: "Insights",
  href: "#"
}, {
  label: "Contact",
  href: "#"
}];
function MaruHeader({
  onMenu
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      backgroundColor: "rgba(13,27,42,0.6)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      padding: "0 24px",
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Maru Online \u2014 home",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/maru-logo.png",
    alt: "Maru Online",
    style: {
      height: "30px",
      width: "auto",
      filter: "brightness(0) invert(1)"
    }
  })), /*#__PURE__*/React.createElement("ul", {
    className: "maru-nav-links",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "32px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: 400,
      color: "rgba(250,250,248,0.8)",
      textDecoration: "none",
      transition: "color 200ms"
    },
    onMouseEnter: e => e.currentTarget.style.color = "#FFFFFF",
    onMouseLeave: e => e.currentTarget.style.color = "rgba(250,250,248,0.8)"
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "maru-nav-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#assessment"
  }, "Start Assessment")), /*#__PURE__*/React.createElement("button", {
    className: "maru-nav-burger",
    onClick: onMenu,
    "aria-label": "Open menu",
    style: {
      display: "none",
      flexDirection: "column",
      justifyContent: "center",
      gap: "6px",
      width: "28px",
      height: "28px",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "28px",
      height: "1.5px",
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "28px",
      height: "1.5px",
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "28px",
      height: "1.5px",
      background: "#fff"
    }
  }))));
}
window.MaruHeader = MaruHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
// Maru — Homepage. Faithful recreation of the live homepage composition and the
// LATEST copy (hero "312 hours of Busywork", operational-gap cards, 6-service
// filter, foundation services, 4-step process, assessment form). Uses the Maru
// design-system bundle for Button + WhatsApp; bespoke section layout is inline.
const DS = window.MaruOnlineDesignSystem_422da4;
const {
  Button,
  WhatsAppButton
} = DS;
const WRAP = {
  maxWidth: "1200px",
  margin: "0 auto"
};
const WRAP_MD = {
  maxWidth: "900px",
  margin: "0 auto"
};
const PAD = "64px 24px";

// ── Reusable bits ─────────────────────────────────────────────────────────────
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow",
    style: style
  }, children);
}
function CheckCircle() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      marginTop: "3px"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    stroke: "var(--color-cyan)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8l2.5 2.5 3.5-4",
    stroke: "var(--color-cyan)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// ── 01 · Hero ───────────────────────────────────────────────────────────────
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy-deep)",
      padding: "120px 24px 96px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(61,184,198,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.10) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-100px",
      right: "-100px",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.1)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "2.5rem"
    }
  }, "AI Integration Consultancy"), /*#__PURE__*/React.createElement("h1", {
    className: "maru-headline-split",
    style: {
      marginBottom: "2.5rem",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-light"
  }, "You\u2019re paying for 312 hours"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-strong"
  }, "of Busywork Every Year.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "var(--color-ink-inverted-muted)",
      lineHeight: "var(--leading-body-relaxed)",
      maxWidth: "640px",
      marginBottom: "2rem"
    }
  }, "Six hours a week. That\u2019s how much time the average team loses manually moving data between a CRM, a spreadsheet, an email platform."), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--text-h3-sans)",
      color: "var(--color-ink-inverted)",
      lineHeight: "var(--leading-subheading)",
      maxWidth: "560px",
      marginBottom: "3rem"
    }
  }, "We don\u2019t sell you new tools. We use AI to configure the connections your business is missing."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#assessment"
  }, "Get a Free Assessment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "rgba(250,250,248,0.45)",
      marginTop: "1rem",
      marginBottom: 0
    }
  }, "No obligation. No cost. 24-hour turnaround on results.")));
}

// ── 02 · Operational gap ──────────────────────────────────────────────────────
const GAP_CARDS = [{
  heading: "Your tools don\u2019t talk to each other.",
  body: "Your CRM, email, and accounting software all work — separately. Your team pays the difference in manual effort, every day."
}, {
  heading: "Manual admin is killing your capacity.",
  body: "Re-entering data and chasing confirmations aren\u2019t small tasks. They stack into days of lost productivity every month."
}, {
  heading: "You\u2019re making decisions on stale data.",
  body: "When information lives across five systems, you\u2019re always working from last month\u2019s export. Never from right now."
}, {
  heading: "Manual data handling is a POPIA risk.",
  body: "Inconsistent consent and storage aren\u2019t just inefficient — they\u2019re exposure. We build compliance in from the start."
}];
function OperationalGap() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-canvas)",
      padding: PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "1.5rem"
    }
  }, "The operational gap"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-section-header-mb)",
      borderBottom: "none",
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Your tools work."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Your workflows don\u2019t.")), /*#__PURE__*/React.createElement("div", {
    className: "maru-grid-4",
    style: {
      marginBottom: "var(--space-section-header-mb)"
    }
  }, GAP_CARDS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.heading,
    style: {
      background: "var(--color-bg-primary)",
      border: "0.5px solid var(--color-border-default)",
      borderTop: "3px solid var(--color-cyan)",
      borderRadius: "8px",
      padding: "1.5rem 1.25rem",
      height: "100%",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-primary)",
      marginBottom: "0.625rem",
      lineHeight: "var(--leading-subheading)"
    }
  }, c.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      margin: 0
    }
  }, c.body)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 500,
      color: "var(--color-ink-primary)",
      borderLeft: "4px solid var(--color-cyan)",
      paddingLeft: "1.25rem",
      margin: 0,
      lineHeight: "var(--leading-body)"
    }
  }, "These are configuration problems \u2014 solvable without replacing a single system your team already uses.")));
}

// ── 03 · Metrics bar ──────────────────────────────────────────────────────────
const METRICS = [{
  stat: "Free",
  sub: "Assessment — no cost to find where you stand"
}, {
  stat: "24-Hour",
  sub: "Turnaround on your diagnostic report"
}, {
  stat: "30 Days",
  sub: "Average timeline to first automated workflow live"
}, {
  stat: "Fixed",
  sub: "Clear pricing at every phase — no surprise invoices"
}];
function MetricsBar() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-primary)",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-grid-4"
  }, METRICS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.stat,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
      fontWeight: 600,
      color: "var(--color-cyan)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      marginBottom: "0.5rem"
    }
  }, m.stat), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-ink-tertiary)",
      lineHeight: 1.5,
      margin: 0
    }
  }, m.sub))))));
}

// ── 04 · Primary services ─────────────────────────────────────────────────────
const SERVICES = [{
  tag: "Free entry point",
  tagColor: "cyan",
  number: "01",
  name: "Operations Diagnostic",
  body: "Recommended first step. We find exactly where you're losing time and money before prescribing anything."
}, {
  tag: "Core",
  tagColor: "cyan",
  number: "02",
  name: "AI-Powered Workflow Integration",
  body: "For businesses ready to connect tools and stop manual admin. Fixed price, vendor-agnostic."
}, {
  tag: "Ongoing",
  tagColor: "cyan",
  number: "03",
  name: "Results Measurement & Optimisation",
  body: "Workflows running but no evidence of impact. We measure and optimise against your baseline."
}, {
  tag: "Foundation",
  tagColor: "gold",
  number: "04",
  name: "Site Infrastructure Analysis & Remediation",
  body: "Legacy or broken sites that need clean infrastructure before AI workflows can run."
}, {
  tag: "Compliance",
  tagColor: "gold",
  number: "05",
  name: "POPIA-Compliant AI Integration",
  body: "For legal, financial, and healthcare sectors. Compliance built in from day one."
}, {
  tag: "Support",
  tagColor: "cyan",
  number: "06",
  name: "Team Training & Capability Support",
  body: "Onboarding for teams to ensure adoption. Your team runs the system — not IT."
}];
function PrimaryServices() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "How We Fix"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "the Integration Gap")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      maxWidth: "640px",
      marginBottom: "var(--space-section-header-mb)"
    }
  }, "Six services. One starting point \u2014 the free assessment."), /*#__PURE__*/React.createElement("div", {
    className: "maru-grid-2"
  }, SERVICES.map(s => {
    const cyan = s.tagColor === "cyan";
    return /*#__PURE__*/React.createElement("div", {
      key: s.number,
      style: {
        border: "0.5px solid var(--color-border-default)",
        borderRadius: "8px",
        padding: "1.25rem 1.5rem",
        background: "var(--color-bg-primary)",
        boxShadow: "var(--shadow-card)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: cyan ? "rgba(61,184,198,0.10)" : "rgba(205,170,83,0.10)",
        color: cyan ? "var(--color-cyan)" : "var(--color-gold)",
        fontSize: "10px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        padding: "2px 8px",
        borderRadius: "3px",
        display: "inline-block",
        marginBottom: "0.75rem"
      }
    }, s.tag), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--color-cyan)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.1em",
        margin: "0 0 0.375rem",
        fontFamily: "var(--font-body)"
      }
    }, s.number), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-h3-sans)",
        fontWeight: 600,
        color: "var(--color-ink-primary)",
        fontFamily: "var(--font-body)",
        margin: "0 0 0.5rem",
        lineHeight: 1.3
      }
    }, s.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: "var(--text-body-sm)",
        color: "var(--color-ink-secondary)",
        lineHeight: "var(--leading-body)",
        margin: 0
      }
    }, s.body));
  }))));
}

// ── 05 · Foundation services ──────────────────────────────────────────────────
const FOUNDATION = [{
  ghost: "01",
  name: "Strategy & Consultation",
  description: "We map your market position, technology needs, and competitor landscape before anything gets built.",
  deliverables: ["User research and audience insights", "Digital roadmap and technology strategy", "Technical architecture planning", "Prototype design and validation", "Go-to-market strategy development"]
}, {
  ghost: "02",
  name: "Design & Development",
  description: "Digital products built for AI integration from day one — lead capture, data collection, and workflow automation baked in.",
  deliverables: ["Website and web application development", "E-commerce platform builds", "Mobile app development", "Built for AI workflow integration", "Performance and conversion optimised"]
}, {
  ghost: "03",
  name: "Digital Marketing Support",
  description: "Strategic insights from your data, then the campaign execution that acts on what the data reveals.",
  deliverables: ["Website analytics and insights", "Campaign strategy and planning", "Campaign execution and management", "Online visibility optimisation", "Data-driven marketing decisions"]
}];
function FoundationServices() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-primary)",
      padding: PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Beyond AI Integration \u2014"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Full-Spectrum Business Support")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      maxWidth: "680px",
      marginBottom: "var(--space-section-header-mb)"
    }
  }, "Strong workflows need strong foundations. We handle the strategy, build, and marketing that makes integration possible."), /*#__PURE__*/React.createElement("div", {
    className: "maru-grid-3-flush",
    style: {
      background: "var(--color-border-default)",
      border: "0.5px solid var(--color-border-default)",
      borderRadius: "8px",
      overflow: "hidden"
    }
  }, FOUNDATION.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.ghost,
    style: {
      background: "var(--color-bg-primary)",
      padding: "1.75rem 1.5rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "32px",
      fontWeight: 100,
      color: "rgba(205,170,83,0.30)",
      lineHeight: 1,
      marginBottom: "1rem",
      fontFamily: "var(--font-display)"
    }
  }, col.ghost), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-h3-sans)",
      fontWeight: 600,
      color: "var(--color-ink-primary)",
      lineHeight: 1.3,
      marginBottom: "0.75rem",
      borderBottom: "2px solid var(--color-gold)",
      paddingBottom: "0.75rem",
      fontFamily: "var(--font-body)"
    }
  }, col.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      marginBottom: "1.25rem"
    }
  }, col.description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontSize: "10px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--color-cyan)",
      background: "rgba(61,184,198,0.10)",
      border: "1px solid rgba(61,184,198,0.25)",
      borderRadius: "4px",
      padding: "3px 8px",
      marginBottom: "0.75rem",
      fontFamily: "var(--font-body)"
    }
  }, "Deliverables"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, col.deliverables.map(d => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      padding: "4px 0",
      lineHeight: "var(--leading-body)",
      display: "flex",
      gap: "8px",
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-gold)",
      flexShrink: 0
    }
  }, "\u2192"), d))))))));
}

// ── 06 · Process ──────────────────────────────────────────────────────────────
const PHASES = [{
  number: "01",
  name: "Diagnose",
  description: "We audit your workflows, tools, and data flow. We find where you're losing time and money.",
  outcome: "A diagnostic report, a cost calculation, and a prioritised roadmap.",
  timeline: "24 hours from submission."
}, {
  number: "02",
  name: "Design",
  description: "We design your integration architecture. What systems connect where? What data flows how?",
  outcome: "A documented roadmap with clear ownership and success metrics.",
  timeline: "5–7 business days."
}, {
  number: "03",
  name: "Build",
  description: "We integrate your tools and build the workflows. We test every connection.",
  outcome: "Live workflows that connect your tools. Your team can manage them.",
  timeline: "20–30 days."
}, {
  number: "04",
  name: "Launch & Measure",
  description: "We deploy with your team and measure results against your baseline. 30 days of free support included.",
  outcome: "Measured results. Real evidence of time and money saved.",
  timeline: "First 30 days of operation."
}];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      backgroundColor: "var(--color-bg-canvas)",
      padding: PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP_MD
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-section-header-mb)",
      fontWeight: 700,
      borderBottom: "none",
      paddingBottom: 0
    }
  }, "Our 4-Step Process"), /*#__PURE__*/React.createElement("div", {
    className: "maru-grid-2"
  }, PHASES.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.number,
    style: {
      padding: "2rem",
      background: "var(--color-bg-primary)",
      borderRadius: "8px",
      height: "100%",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 700,
      color: "var(--color-cyan)",
      letterSpacing: "-0.02em",
      lineHeight: 1,
      display: "block",
      marginBottom: "1rem",
      opacity: 0.9
    }
  }, p.number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3-serif)",
      fontWeight: 500,
      color: "var(--color-ink-primary)",
      lineHeight: "var(--leading-subheading)",
      letterSpacing: "var(--tracking-tight)",
      marginBottom: "0.875rem"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      marginBottom: "1rem"
    }
  }, p.description), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 500,
      color: "var(--color-ink-primary)",
      marginBottom: "0.375rem",
      lineHeight: "var(--leading-body)"
    }
  }, p.outcome), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-cyan)",
      margin: 0,
      letterSpacing: "0.05em"
    }
  }, "\u23F1 ", p.timeline)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-section-header-mb)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      margin: 0,
      maxWidth: "560px"
    }
  }, "Four steps. Fixed price. Measured outcome."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#assessment"
  }, "Get My Free Assessment"))));
}

// ── Image band ────────────────────────────────────────────────────────────────
function ImageBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "420px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/tech-setup.jpg",
    alt: "A team at work",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(13,27,42,0.88) 0%, rgba(13,27,42,0.55) 60%, rgba(13,27,42,0.35) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      borderBottom: "none",
      paddingBottom: 0,
      margin: 0,
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 300
    }
  }, "We don\u2019t replace your team."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 700
    }
  }, "We give them their time back."))));
}

// ── 07 · Assessment form ──────────────────────────────────────────────────────
function AssessmentForm() {
  const proof = ["Average 3–5 critical gaps identified per assessment", "Average 12–18 hours per week recoverable through integration"];
  const points = ["See your score live as you go", "Detailed report delivered within 24 hours", "No sign-up required to begin"];
  return /*#__PURE__*/React.createElement("section", {
    id: "assessment",
    style: {
      backgroundColor: "var(--color-bg-navy)",
      padding: PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-assess-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Free Business Diagnostic"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--color-ink-inverted)",
      borderBottom: "none",
      paddingBottom: 0,
      marginBottom: "var(--space-heading-body)",
      marginTop: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 300
    }
  }, "Find Out Exactly What\u2019s"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 700
    }
  }, "Costing You Time and Money")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "rgba(250,250,248,0.75)",
      lineHeight: "var(--leading-body)",
      marginBottom: "var(--space-para-section)"
    }
  }, "Our free assessment shows you exactly where your processes are losing capacity. Ten minutes. Results within 24 hours."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 300,
      color: "rgba(250,250,248,0.5)",
      lineHeight: "var(--leading-body)",
      marginBottom: "var(--space-section-header-mb)",
      fontStyle: "italic"
    }
  }, "Either way, you get clarity. That\u2019s the point."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      marginBottom: "1.5rem"
    }
  }, proof.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      gap: "0.75rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      background: "var(--color-cyan)",
      borderRadius: "50%",
      marginTop: "9px",
      flexShrink: 0,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 500,
      color: "var(--color-ink-inverted)",
      lineHeight: "var(--leading-body)"
    }
  }, s)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "rgba(250,250,248,0.4)",
      margin: 0,
      letterSpacing: "0.02em"
    }
  }, "POPIA compliant. No opt-in to marketing \u2014 just your results.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "12px",
      padding: "2.5rem",
      boxShadow: "0 8px 40px rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "var(--text-h3-serif)",
      color: "var(--color-ink-primary)",
      lineHeight: "var(--leading-subheading)",
      marginBottom: "1.25rem"
    }
  }, "Get Your Free Assessment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 300,
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      marginBottom: "1.5rem"
    }
  }, "Answer 10 questions about your operations. Takes about 10 minutes. We pinpoint exactly where your business is leaking time and money \u2014 and what to do about it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.625rem",
      marginBottom: "2rem"
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: "flex",
      gap: "0.625rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(CheckCircle, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 300,
      color: "var(--color-ink-secondary)",
      lineHeight: 1.5
    }
  }, p)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#",
    fullWidth: true
  }, "Start Your Free Assessment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-ink-tertiary)",
      marginTop: "0.875rem",
      marginBottom: 0,
      textAlign: "center",
      lineHeight: 1.5
    }
  }, "Free. No obligation. Results within 24 hours.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      fontWeight: 300,
      color: "rgba(250,250,248,0.5)",
      margin: 0,
      fontStyle: "italic"
    }
  }, "No obligation. If there\u2019s no clear opportunity, we\u2019ll tell you \u2014 and you\u2019ll still walk away with a clear picture of where you stand."))));
}
function MaruHomepage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(OperationalGap, null), /*#__PURE__*/React.createElement(MetricsBar, null), /*#__PURE__*/React.createElement(PrimaryServices, null), /*#__PURE__*/React.createElement(FoundationServices, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(ImageBand, null), /*#__PURE__*/React.createElement(AssessmentForm, null));
}
window.MaruHomepage = MaruHomepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
// Maru — Pricing page. Faithful recreation of app/pricing/page.tsx with the
// real engagement data and FAQ copy. Reuses Header/Footer and the AccordionFAQ
// from the design-system bundle.
const PricingDS = window.MaruOnlineDesignSystem_422da4;
const {
  Button: PBtn,
  AccordionFAQ: PFAQ
} = PricingDS;
const PWRAP = {
  maxWidth: "1100px",
  margin: "0 auto"
};
const PWRAP_MD = {
  maxWidth: "900px",
  margin: "0 auto"
};
const PWRAP_NARROW = {
  maxWidth: "720px",
  margin: "0 auto"
};
const ENGAGEMENTS = [{
  label: "01",
  badge: "Start here",
  featured: false,
  title: "Operations Diagnostic",
  price: "R4,500",
  note: "Offsets against build cost if you proceed.",
  scope: "48 hours",
  body: "A structured audit of your workflows, tools, and data connections. You receive a written report that maps your gaps and tells you exactly what to configure first.",
  items: [{
    leader: "Intake brief",
    body: "Structured questions tailored to your industry."
  }, {
    leader: "Verification call",
    body: "A 30-minute call to clarify the brief and confirm scope."
  }, {
    leader: "Gap report",
    body: "Named failures, cost per gap, and fix priority."
  }, {
    leader: "90-day roadmap",
    body: "A sequenced action plan for your next steps."
  }]
}, {
  label: "02",
  badge: "Most common",
  featured: true,
  title: "Workflow Integration",
  price: "From R35,000",
  note: "Fixed price. Scoped after the diagnostic.",
  scope: "4–8 weeks",
  body: "Implementation built around the diagnostic findings. We configure the connections between your tools and build the automation layer. We work with your existing stack.",
  items: [{
    leader: "Custom integration",
    body: "Connecting your CRM, calendar, and email correctly."
  }, {
    leader: "Automation layer",
    body: "Workflows that run without human intervention."
  }, {
    leader: "Brand voice training",
    body: "AI outputs calibrated to sound like your business."
  }, {
    leader: "POPIA compliance",
    body: "Every data touchpoint is designed for compliance first."
  }]
}, {
  label: "03",
  badge: "",
  featured: false,
  title: "Team Training & Handover",
  price: "From R15,000",
  note: "Can be standalone or follow a build.",
  scope: "Scoped per engagement",
  body: "Hands-on training built around your specific workflows. Your team learns how to use and manage the system. The capability stays in your business after we hand over.",
  items: [{
    leader: "Hands-on workshops",
    body: "Built around your tools, not generic theory."
  }, {
    leader: "Prompt engineering",
    body: "High-quality outputs from the tools you have."
  }, {
    leader: "Workflow adoption",
    body: "Getting new workflows embedded in daily work."
  }, {
    leader: "Follow-up support",
    body: "30 days of support to catch issues early."
  }]
}];
const PRICING_FAQS = [{
  q: "Why do I have to pay for the diagnostic?",
  a: "Because it is real work that produces a real deliverable. A free call tells you what we think is wrong. A paid diagnostic tells you exactly what is wrong and what it is costing you. It ensures we are both serious about the conversation."
}, {
  q: "What if I decide not to proceed after the diagnostic?",
  a: "That is fine. The report is yours. You walk away with a clear picture of your gaps and a prioritised action plan. You can act on it yourself or take it elsewhere. We would rather you have clarity than commit to an engagement you are not ready for."
}, {
  q: "Why don't you publish a full engagement price?",
  a: "Every engagement is scoped to what the diagnostic finds. A single number would either undersell complex work or oversell simple work. We guarantee the price is fixed before you commit. No surprises. No scope creep."
}, {
  q: "Do you offer payment plans?",
  a: "The diagnostic is payable upfront. For the core engagement, we can discuss a milestone-based structure. Typically, this is 50% on sign-off and 50% on delivery. We can work something out during the scoping conversation."
}];
function EngagementCard({
  eng
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: eng.featured ? "var(--color-bg-canvas)" : "var(--color-bg-primary)",
      border: eng.featured ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-default)",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
      padding: "1.75rem 2rem",
      borderBottom: "1px solid var(--color-border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-number"
  }, eng.label), eng.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: eng.featured ? "var(--color-cyan)" : "var(--color-gold-antique)",
      backgroundColor: eng.featured ? "var(--color-cyan-light)" : "var(--color-gold-light)",
      borderRadius: "4px",
      padding: "0.2rem 0.5rem"
    }
  }, eng.badge)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, eng.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-ink-tertiary)",
      margin: "0.25rem 0 0"
    }
  }, eng.scope)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "var(--color-navy)",
      lineHeight: 1,
      marginBottom: "0.25rem"
    }
  }, eng.price), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-ink-tertiary)",
      margin: 0
    }
  }, eng.note))), /*#__PURE__*/React.createElement("div", {
    className: "maru-pricing-body",
    style: {
      padding: "1.75rem 2rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      marginBottom: "1.5rem"
    }
  }, eng.body), /*#__PURE__*/React.createElement(PBtn, {
    variant: "secondary"
  }, "Learn more")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-ink-tertiary)",
      marginBottom: "0.75rem"
    }
  }, "What's included"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem"
    }
  }, eng.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.leader,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "var(--color-cyan)",
      marginTop: "8px",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-subheading)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-navy)",
      fontWeight: 600
    }
  }, it.leader, "."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "var(--color-ink-secondary)"
    }
  }, it.body))))))));
}
function MaruPricing() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy)",
      padding: "120px 24px 88px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(61,184,198,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.12) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.15)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PWRAP,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
    className: "maru-headline-split",
    style: {
      color: "#fff",
      margin: "1rem 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-strong"
  }, "One fixed price to start."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-light"
  }, "No surprises after that.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "var(--color-ink-inverted-muted)",
      maxWidth: "600px",
      lineHeight: "var(--leading-body)",
      margin: "var(--space-heading-body) 0 var(--space-section-header-mb)"
    }
  }, "Every Maru engagement begins with the Operations Diagnostic. Fixed scope, fixed price, clear deliverables."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(PBtn, {
    variant: "primary",
    size: "lg",
    href: "#assessment"
  }, "Start with Assessment"), /*#__PURE__*/React.createElement(PBtn, {
    variant: "tertiary",
    href: "#engagements"
  }, "See all pricing")))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PWRAP_NARROW
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3-serif)",
      fontWeight: 400,
      lineHeight: "var(--leading-subheading)",
      color: "var(--color-ink-primary)",
      letterSpacing: "var(--tracking-tight)",
      margin: 0
    }
  }, "If you have already invested in AI tools, you don't need more tools. You need the ones you have to work together. The diagnostic is where that starts. If you proceed to a full engagement, the diagnostic fee offsets against the project cost."))), /*#__PURE__*/React.createElement("section", {
    id: "engagements",
    style: {
      backgroundColor: "var(--color-bg-primary)",
      padding: "64px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PWRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-section-header-mb)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow-gold"
  }, "Engagements"), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: "0.5rem 0 1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Start here."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Build from what we find.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      margin: 0,
      maxWidth: "560px"
    }
  }, "All three engagements are fixed-scope. We agree on the price before work begins. Start with the diagnostic. Everything else is scoped from what it finds.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }
  }, ENGAGEMENTS.map(eng => /*#__PURE__*/React.createElement(EngagementCard, {
    key: eng.label,
    eng: eng
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: "64px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PWRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-section-header-mb)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow-gold"
  }, "Common questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: "0.5rem 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "A note on"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "how we price"))), /*#__PURE__*/React.createElement(PFAQ, {
    items: PRICING_FAQS
  }))), /*#__PURE__*/React.createElement("section", {
    id: "assessment",
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy)",
      padding: "64px 24px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-80px",
      left: "-80px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.12)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PWRAP_NARROW,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow"
  }, "The diagnostic"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--color-ink-inverted)",
      border: "none",
      padding: 0,
      margin: "0.5rem 0 var(--space-heading-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Start with"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "a Diagnostic")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "rgba(250,250,248,0.75)",
      lineHeight: "var(--leading-body)",
      marginBottom: "var(--space-para-section)"
    }
  }, "It takes 15 minutes. A written report delivered in 48 hours."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: "100%",
      height: "1px",
      background: "rgba(250,250,248,0.15)",
      border: "none",
      marginBottom: "var(--space-para-section)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(PBtn, {
    variant: "primary",
    size: "lg",
    href: "#"
  }, "Start with Assessment"), /*#__PURE__*/React.createElement(PBtn, {
    variant: "tertiary",
    href: "#",
    style: {
      color: "var(--color-cyan)"
    }
  }, "Book a 20-minute call")))));
}
window.MaruPricing = MaruPricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
// Maru — How We Work (Process) page. Faithful recreation of app/process/page.tsx:
// hero, principle, image split, tools-we-work-with scroller, four phases with
// prose + per-phase lists, image band, 8-question FAQ, final CTA.
const {
  Button: WBtn,
  AccordionFAQ: WFAQ
} = window.MaruOnlineDesignSystem_422da4;
const WWRAP = {
  maxWidth: "1100px",
  margin: "0 auto"
};
const WWRAP_MD = {
  maxWidth: "900px",
  margin: "0 auto"
};
const WWRAP_NARROW = {
  maxWidth: "720px",
  margin: "0 auto"
};
const TOOLS = ["chatgpt", "claude", "zapier", "make", "hubspot", "notion", "google", "calendly", "perplexity"];
const PHASES = [{
  number: "01",
  label: "Diagnose",
  title: "We map the gaps before we configure anything.",
  body: ["You complete a sector-specific intake form. It takes fifteen minutes. We follow up with a short verification call. Within 48 hours, you receive your diagnostic report.", "The report covers your workflows, tools, and site infrastructure. It includes a quantified revenue gap analysis. This is a live document, not a PDF. Whether you proceed or not, the report is yours."],
  items: [{
    leader: "Sector-specific intake brief",
    body: "Fifteen questions tailored to your industry."
  }, {
    leader: "Verification call",
    body: "We clarify the brief and confirm scope before work begins."
  }, {
    leader: "Written gap report",
    body: "A snapshot of what is working and the cost of your current state."
  }, {
    leader: "90-day roadmap",
    body: "A sequenced action plan so you know what to do next."
  }],
  note: "The Operations Diagnostic. If you proceed to a full engagement, this fee offsets against the project cost.",
  bg: "var(--color-bg-primary)"
}, {
  number: "02",
  label: "Design",
  title: "We scope the work before you commit.",
  body: ["We use the diagnostic findings to build a fixed-scope plan. Every item is specified. We define what we are building, what it connects to, and what it produces. Nothing is vague.", "You review the plan and request adjustments. We do not proceed until you sign off on every element. If your site infrastructure needs work first, the plan addresses it upfront."],
  items: [{
    leader: "Fixed-scope definition",
    body: "A clear written spec of what will be built and measured."
  }, {
    leader: "Fixed price",
    body: "Agreed before work begins. No hourly billing. No scope creep."
  }, {
    leader: "Baseline measurement",
    body: "We establish the \u201cbefore\u201d state so results are provable."
  }, {
    leader: "Stack decision",
    body: "We document exactly why we chose each tool or connection."
  }],
  note: null,
  bg: "var(--color-bg-canvas)"
}, {
  number: "03",
  label: "Build",
  title: "We configure on solid foundations.",
  body: ["We build exactly what the plan specifies. If your site needs remediation, that happens first. The automation layer follows once the foundation is sound. Every sprint has a defined output.", "Everything we build is tested and documented. Your team receives instructions they can follow without a technical background.", "**POPIA compliance is designed in from the start.**"],
  items: [{
    leader: "Infrastructure first",
    body: "We resolve site and stack issues before adding automation."
  }, {
    leader: "Custom integration",
    body: "We connect your CRM, calendar, and email so data passes correctly."
  }, {
    leader: "Automation layer",
    body: "Workflows that run without human intervention."
  }, {
    leader: "Brand voice calibration",
    body: "AI outputs designed to use your defined business brand voice."
  }, {
    leader: "Compliance by design",
    body: "Every data touchpoint is reviewed for POPIA compliance."
  }],
  note: null,
  bg: "var(--color-bg-secondary)"
}, {
  number: "04",
  label: "Launch and Measure",
  title: "You own the system. We track the results.",
  body: ["We track results against your baseline for 30 days after launch. At the end of the period, you receive a results report. It shows what moved, what didn't, and what to watch next.", "This phase is built into every engagement. It is not an optional add-on. We make decisions about further optimisation based on data, not a sales conversation."],
  items: [{
    leader: "Full documentation",
    body: "Every connection and configuration is documented for your team."
  }, {
    leader: "Hands-on training",
    body: "We train the people who will actually use the system."
  }, {
    leader: "30-day measurement",
    body: "We track results against the baseline and report changes."
  }, {
    leader: "Results report",
    body: "A written report of outcomes, not just a handover checklist."
  }],
  note: null,
  bg: "var(--color-bg-primary)"
}];
const PROCESS_FAQS = [{
  q: "How long does the whole process take?",
  a: "The diagnostic takes 48 hours from intake form submission to report delivery. The core engagement — Phases 2 through 4 — typically runs six to ten weeks depending on complexity and whether site remediation is required. The 30-day measurement phase runs after launch."
}, {
  q: "Do I need to be technical to work with you?",
  a: "No. We build systems your team can use and maintain without a technical background. Everything is documented in plain language at handover. If something breaks after we've handed over, we're reachable — but the systems are designed not to need us."
}, {
  q: "What if my business isn't ready for AI implementation?",
  a: "The diagnostic will tell you. If the honest answer is that your foundation needs work before AI automation makes sense, we'll say so — and we can scope the infrastructure work that needs to happen first, before any automation is layered on top. We'd rather give you a clear picture than sell you something you're not ready for."
}, {
  q: "I already have AI tools. Do I have to replace them?",
  a: "Almost certainly not. Our first obligation is to audit what you have and make it work better. We only recommend new tools when there is a genuine capability gap your existing stack cannot fill — and we explain exactly why when that happens."
}, {
  q: "How many clients do you work with at once?",
  a: "Maximum five. That's a hard limit, not a soft guideline. It's how we protect the quality of every engagement."
}, {
  q: "What happens if the results don't meet expectations?",
  a: "The 30-day measurement phase is where this gets addressed honestly. If something didn't perform as expected, the results report says so and explains why. We don't disappear after handover — the 30-day check-in is built in specifically to catch this and course-correct where needed."
}, {
  q: "Can I start with just the diagnostic and decide later?",
  a: "Yes — that's exactly how it's designed. The diagnostic is a complete, standalone deliverable. There is no obligation to proceed to a full engagement. Many clients use the diagnostic report to make an internal case for the investment before committing."
}, {
  q: "Do you work outside Gauteng, South Africa?",
  a: "Yes, we do. The diagnostic and most of the engagement work is handled remotely. For clients in Gauteng we can meet in person at key stages. For clients elsewhere in South Africa the process works entirely via video call and shared documents — same quality, same process."
}];
function PhaseList({
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-ink-tertiary)",
      marginBottom: "0.75rem"
    }
  }, "What happens in this phase"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.875rem"
    }
  }, items.map(b => /*#__PURE__*/React.createElement("li", {
    key: b.leader,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "var(--color-cyan)",
      marginTop: "8px",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-subheading)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-navy)",
      fontWeight: 600
    }
  }, b.leader, "."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "var(--color-ink-secondary)"
    }
  }, b.body))))));
}
function PhaseSection({
  p
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: p.bg,
      padding: "64px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WWRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-section-header-mb)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-number"
  }, p.number), /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow-gold",
    style: {
      margin: 0
    }
  }, p.label)), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: 0
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    className: "maru-phase-grid"
  }, /*#__PURE__*/React.createElement("div", null, p.body.map((para, i) => {
    const bold = para.startsWith("**") && para.endsWith("**");
    const text = bold ? para.slice(2, -2) : para;
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: bold ? 700 : 300,
        fontSize: "var(--text-body-sm)",
        color: bold ? "var(--color-ink-primary)" : "var(--color-ink-secondary)",
        lineHeight: "var(--leading-body)",
        marginBottom: i < p.body.length - 1 ? "var(--space-para-section)" : 0
      }
    }, text);
  }), p.note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-ink-tertiary)",
      marginTop: "1.5rem",
      marginBottom: 0,
      paddingTop: "1rem",
      borderTop: "1px solid var(--color-border-default)"
    }
  }, p.note)), /*#__PURE__*/React.createElement(PhaseList, {
    items: p.items
  }))));
}
function MaruProcess() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy)",
      padding: "120px 24px 88px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(61,184,198,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.12) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.15)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WWRAP,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow"
  }, "How we work"), /*#__PURE__*/React.createElement("h1", {
    className: "maru-headline-split",
    style: {
      color: "#fff",
      margin: "1rem 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-strong"
  }, "A process built around"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-light"
  }, "where your operation has gaps.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "var(--color-ink-inverted-muted)",
      maxWidth: "600px",
      lineHeight: "var(--leading-body)",
      margin: "var(--space-heading-body) 0 var(--space-section-header-mb)"
    }
  }, "Every engagement follows the same four phases. Fixed scope, fixed price, clear outcomes at every stage."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(WBtn, {
    variant: "primary",
    size: "lg",
    href: "#phases"
  }, "Start with Assessment"), /*#__PURE__*/React.createElement(WBtn, {
    variant: "tertiary",
    href: "#phases"
  }, "See the process")))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WWRAP_NARROW
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: "var(--space-heading-body)"
    }
  }, "We start with a diagnostic of your current processes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      margin: 0,
      fontStyle: "italic"
    }
  }, "\u201CBuilding the wrong thing faster is still building the wrong thing.\u201D"))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-split-img",
    style: {
      backgroundImage: "url(../../assets/illustrations/tech-setup.jpg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "maru-split-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow",
    style: {
      marginBottom: "1rem"
    }
  }, "Diagnostic first"), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: "0 0 1rem"
    }
  }, "We audit your workflows before we touch your tools."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      margin: 0
    }
  }, "Building automation on top of broken infrastructure just breaks faster. We map how your business actually operates \u2014 the manual steps, the data handoffs, the gaps \u2014 before a single workflow is configured.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: "32px 24px 40px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-ink-tertiary)",
      margin: "0 0 24px",
      textAlign: "center"
    }
  }, "Tools we work with"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "48px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "900px",
      margin: "0 auto"
    }
  }, TOOLS.map(t => /*#__PURE__*/React.createElement("img", {
    key: t,
    src: `../../assets/tools/${t}.svg`,
    alt: t,
    style: {
      height: "30px",
      width: "auto",
      opacity: 0.8
    }
  })))), /*#__PURE__*/React.createElement("div", {
    id: "phases"
  }), PHASES.map(p => /*#__PURE__*/React.createElement(PhaseSection, {
    key: p.number,
    p: p
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "380px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/integration-looks-like.png",
    alt: "Team collaborating in a professional setting",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.6) 60%, rgba(13,27,42,0.4) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WWRAP,
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      borderBottom: "none",
      paddingBottom: 0,
      margin: 0,
      maxWidth: "680px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Every phase has a defined output."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "You always know what's happening and what comes next.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: "64px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WWRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-section-header-mb)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow-gold"
  }, "Common questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: "0.5rem 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "How the process works"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "in practice"))), /*#__PURE__*/React.createElement(WFAQ, {
    items: PROCESS_FAQS
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy)",
      padding: "64px 24px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-80px",
      left: "-80px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.12)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WWRAP_NARROW,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow"
  }, "The diagnostic"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--color-ink-inverted)",
      border: "none",
      padding: 0,
      margin: "0.5rem 0 var(--space-heading-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Start with"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "a Diagnostic")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "rgba(250,250,248,0.75)",
      lineHeight: "var(--leading-body)",
      marginBottom: "var(--space-para-section)"
    }
  }, "It takes 15 minutes. A written report delivered in 48 hours."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: "100%",
      height: "1px",
      background: "rgba(250,250,248,0.15)",
      border: "none",
      marginBottom: "var(--space-para-section)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(WBtn, {
    variant: "primary",
    size: "lg",
    href: "#"
  }, "Start with Assessment"), /*#__PURE__*/React.createElement(WBtn, {
    variant: "tertiary",
    href: "#",
    style: {
      color: "var(--color-cyan)"
    }
  }, "Book a 20-minute call")))));
}
window.MaruProcess = MaruProcess;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Maru — Services page. Faithful recreation of app/services/page.tsx: hero,
// "what integrated AI looks like" image split, fixed-scope principle, four
// alternating service sections with included-lists + pricing, and final CTA.
const {
  Button: SBtn
} = window.MaruOnlineDesignSystem_422da4;
const SWRAP = {
  maxWidth: "1100px",
  margin: "0 auto"
};
const SWRAP_MD = {
  maxWidth: "900px",
  margin: "0 auto"
};
const SWRAP_NARROW = {
  maxWidth: "720px",
  margin: "0 auto"
};
const SERVICES = [{
  id: "diagnostic",
  label: "01",
  title: "Operations Diagnostic",
  tagline: "Map where your operation has gaps — before configuring anything.",
  description: "A structured audit of your current workflows, tools, and data connections. You receive a written report — delivered within 48 hours — that maps where information isn't flowing, quantifies what that's costing, and tells you exactly what to configure first. This is where every engagement starts.",
  bullets: [{
    leader: "Sector-specific intake",
    body: "A structured brief tailored to your industry — medico legal, HR & recruitment, or conference & events."
  }, {
    leader: "Verification call",
    body: "A 30–45 minute call to clarify the brief, ask the right questions, and confirm scope."
  }, {
    leader: "Written gap report",
    body: "A clear document mapping where your workflows aren't connected, the cost of each gap, and the configuration priority order."
  }, {
    leader: "90-day roadmap",
    body: "A sequenced action plan so you know exactly what to configure and in what order."
  }],
  pricing: "R4,500",
  note: "If you proceed to a full engagement, this fee offsets against the project cost.",
  bg: "var(--color-bg-primary)"
}, {
  id: "build",
  label: "02",
  title: "Workflow Integration",
  tagline: "Connect your existing tools. Configure the workflows between them.",
  description: "Fixed-scope implementation built around what the diagnostic found. We configure the connections between your tools, extend what's already working, and build the automation layer on top. Vendor-agnostic. Your stack stays — we connect it.",
  bullets: [{
    leader: "Custom integration build",
    body: "Connecting your existing tools — CRM, calendar, email, forms — so they pass information correctly."
  }, {
    leader: "Automation layer",
    body: "The workflows that run without human intervention: follow-ups, confirmations, handoffs, notifications."
  }, {
    leader: "Brand voice training",
    body: "AI outputs calibrated to sound like your business, not like a generic chatbot."
  }, {
    leader: "POPIA compliance built in",
    body: "Every data touchpoint designed for compliance before a line of code is written."
  }],
  pricing: "From R35,000",
  note: "Fixed price. Scoped after the diagnostic — no surprises.",
  bg: "var(--color-bg-canvas)"
}, {
  id: "training",
  label: "03",
  title: "Team Training & Handover",
  tagline: "Your team runs the system. Not us.",
  description: "Hands-on training built around the specific workflows we've configured. Your team learns how to use, manage, and adapt the system — so the capability stays in the business after we hand over.",
  bullets: [{
    leader: "Hands-on workshops",
    body: "Practical sessions built around your actual tools, not generic AI theory."
  }, {
    leader: "Prompt engineering",
    body: "Teaching your team to get consistent, high-quality outputs from the tools you already have."
  }, {
    leader: "Workflow adoption",
    body: "Getting the new workflows embedded in how the team actually works — not just documented."
  }, {
    leader: "30-day follow-up support",
    body: "A structured support window after training to catch issues before they become habits."
  }],
  pricing: "From R15,000",
  note: "Scoped per engagement. Can be standalone or follow a build.",
  bg: "var(--color-bg-primary)"
}, {
  id: "support",
  label: "04",
  title: "Results Optimisation",
  tagline: "A second sprint when the first one shows what's next.",
  description: "A fixed-scope optimisation engagement triggered by what the 30-day measurement phase surfaces. Not a retainer — a defined sprint built around specific opportunities the data identified.",
  bullets: [{
    leader: "Data-led scope",
    body: "Built around what the 30-day measurement report surfaced — not assumptions."
  }, {
    leader: "Fixed-scope sprint",
    body: "Defined deliverables, defined timeline, agreed before work begins."
  }, {
    leader: "Compliance review",
    body: "Ongoing POPIA review as your data flows and tool stack evolve."
  }, {
    leader: "Updated results baseline",
    body: "A new measurement baseline set after the optimisation sprint completes."
  }],
  pricing: "From R8,500",
  note: "Available to clients who have completed a build engagement.",
  bg: "var(--color-bg-canvas)"
}];
function IncludedList({
  bullets
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--color-ink-tertiary)",
      marginBottom: "0.75rem"
    }
  }, "What's included"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.875rem"
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b.leader,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "var(--color-cyan)",
      marginTop: "8px",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-subheading)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-navy)",
      fontWeight: 600
    }
  }, b.leader, "."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "var(--color-ink-secondary)"
    }
  }, b.body))))));
}
function ServiceSection({
  s
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: s.id,
    style: {
      backgroundColor: s.bg,
      padding: "64px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SWRAP_MD
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-section-header-mb)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow-gold",
    style: {
      marginBottom: "0.75rem"
    }
  }, s.label, " \u2014 ", s.title), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: "0 0 0.75rem"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3-serif)",
      fontWeight: 400,
      lineHeight: "var(--leading-subheading)",
      color: "var(--color-ink-primary)",
      letterSpacing: "var(--tracking-tight)",
      margin: 0
    }
  }, s.tagline)), /*#__PURE__*/React.createElement("div", {
    className: "maru-svc-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      marginBottom: "var(--space-para-section)"
    }
  }, s.description), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-border-default)",
      paddingTop: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "var(--color-navy)",
      lineHeight: 1,
      marginBottom: "0.375rem"
    }
  }, s.pricing), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-meta)",
      fontWeight: 300,
      color: "var(--color-ink-tertiary)",
      margin: 0
    }
  }, s.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement(SBtn, {
    variant: "secondary"
  }, "Learn more"))), /*#__PURE__*/React.createElement(IncludedList, {
    bullets: s.bullets
  }))));
}
function MaruServices() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy)",
      padding: "120px 24px 88px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(61,184,198,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.12) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.15)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SWRAP,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow"
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    className: "maru-headline-split",
    style: {
      color: "#fff",
      margin: "1rem 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-strong"
  }, "AI tools don't create ROI."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "maru-headline-split-light"
  }, "Integrated AI systems do.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "var(--color-ink-inverted-muted)",
      maxWidth: "600px",
      lineHeight: "var(--leading-body)",
      margin: "var(--space-heading-body) 0 var(--space-section-header-mb)"
    }
  }, "We build AI workflows that connect what you already have \u2014 and measure what changes. Every engagement is fixed-scope and priced before work begins."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(SBtn, {
    variant: "primary",
    size: "lg",
    href: "#services"
  }, "Start with Assessment"), /*#__PURE__*/React.createElement(SBtn, {
    variant: "tertiary",
    href: "#services"
  }, "See all services")))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "maru-split-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow",
    style: {
      marginBottom: "1rem"
    }
  }, "Integrated AI in practice"), /*#__PURE__*/React.createElement("h2", {
    style: {
      borderBottom: "none",
      paddingBottom: 0,
      margin: "0 0 1rem"
    }
  }, "What integrated AI actually looks like."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      margin: 0
    }
  }, "Leads captured in your CRM automatically. Follow-up emails triggered without anyone pressing send. Invoices generated the moment a job is marked complete. Reports that update themselves. This is what connected systems deliver.")), /*#__PURE__*/React.createElement("div", {
    className: "maru-split-img",
    style: {
      backgroundImage: "url(../../assets/illustrations/integration-looks-like.png)"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: "var(--color-bg-secondary)",
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SWRAP_NARROW
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body-sm)",
      color: "var(--color-ink-secondary)",
      lineHeight: "var(--leading-body)",
      margin: 0
    }
  }, "We identify where information isn't flowing automatically and configure the connections that make it happen. We only recommend new tools when there's a genuine capability gap your existing stack can't fill \u2014 and we'll tell you plainly when that's the case."))), /*#__PURE__*/React.createElement("div", {
    id: "services"
  }), SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceSection, {
    key: s.id,
    s: s
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "400px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/tech-setup.jpg",
    alt: "South African professionals working together",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.6) 60%, rgba(13,27,42,0.4) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SWRAP,
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      borderBottom: "none",
      paddingBottom: 0,
      margin: 0,
      maxWidth: "680px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Vendor-agnostic."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Your tools stay."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "We configure the connections between them.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-navy)",
      padding: "64px 24px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-80px",
      left: "-80px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      border: "1px solid rgba(61,184,198,0.12)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SWRAP_NARROW,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-eyebrow"
  }, "The right place to start"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--color-ink-inverted)",
      border: "none",
      padding: 0,
      margin: "0.5rem 0 var(--space-heading-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "The right place to start is"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "a conversation about where your operation has gaps.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--text-body)",
      color: "rgba(250,250,248,0.75)",
      lineHeight: "var(--leading-body)",
      marginBottom: "var(--space-para-section)"
    }
  }, "The Operations Diagnostic is where every engagement starts \u2014 a structured audit of your current setup, a clear picture of what to configure first, and a written report delivered within 48 hours."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: "100%",
      height: "1px",
      background: "rgba(250,250,248,0.15)",
      border: "none",
      marginBottom: "var(--space-para-section)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(SBtn, {
    variant: "primary",
    size: "lg",
    href: "#"
  }, "Start with Assessment"), /*#__PURE__*/React.createElement(SBtn, {
    variant: "tertiary",
    href: "#",
    style: {
      color: "var(--color-cyan)"
    }
  }, "Book a 20-minute call")))));
}
window.MaruServices = MaruServices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.CardFeature = __ds_scope.CardFeature;

__ds_ns.CardGold = __ds_scope.CardGold;

__ds_ns.CardMetric = __ds_scope.CardMetric;

__ds_ns.CardNavy = __ds_scope.CardNavy;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SplitHeadline = __ds_scope.SplitHeadline;

__ds_ns.AccordionFAQ = __ds_scope.AccordionFAQ;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
