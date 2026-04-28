# Watoko Design System & Style Guide

Last updated: April 2026

---

## 1. Design Philosophy

Clean, light, premium. Inspired by ElevenLabs.io — minimal decoration, generous whitespace, harmonious typography, and restrained use of color. Every element should feel intentional. When in doubt, simplify.

---

## 2. Colors

### Core Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--text` | `#000000` | Primary text, headings |
| `--text-secondary` | `#555555` | Body text, descriptions |
| `--text-tertiary` | `#888888` | Supporting text, labels |
| `--text-muted` | `#aaaaaa` | Placeholders, timestamps, meta |

### Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FFFFFF` | Primary background |
| `--bg-page` | `#FAFAFA` | Alternating sections, subtle contrast |
| `--bg-card` | `#F5F5F5` | Card backgrounds |
| `--bg-card-hover` | `#EFEFEF` | Card hover state |

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border` | `#EEEEEE` | Default borders — always 1px solid |
| `--border-hover` | `#DDDDDD` | Hover state borders |

### Brand Accents

| Token | Value | Usage |
|-------|-------|-------|
| `--orange` | `#F16001` | Brand accent (sparingly) |
| `--orange-text` | `#D14E00` | Orange used in text contexts |
| `--orange-dim` | `rgba(241,96,1,0.10)` | Tinted backgrounds |
| `--orange-glow` | `rgba(241,96,1,0.05)` | Very subtle tinted backgrounds |
| `--green` | `#22C55E` | Success states |
| `--green-dim` | `rgba(34,197,94,0.12)` | Success tinted backgrounds |

### Gradient Accents (Product Cards)

| Token | Colors | Mapped To |
|-------|--------|-----------|
| `--gradient-cool` | `#B8D4E3 → #A0C4D8 → #C2D0DC` | Brain |
| `--gradient-warm` | `#F0C6A8 → #E8B0A0 → #D4A088` | Market |
| `--gradient-purple` | `#C8B8E0 → #B8A8D4 → #D0C4E0` | Ecosystem |
| `--gradient-earth` | `#D4C8A8 → #C8BC98 → #B8B090` | Labs |

### Rich Gradients (Featured Elements)

Used for the scale section featured card, pricing featured card, and demo modal left panel. Multi-layered radial gradients over a deep navy base:

```css
/* Warm variant (scale card) */
radial-gradient(ellipse at 25% 40%, rgba(76,175,80,0.55), transparent 50%),
radial-gradient(ellipse at 80% 25%, rgba(100,181,246,0.45), transparent 45%),
radial-gradient(ellipse at 55% 75%, rgba(255,183,77,0.4), transparent 45%),
linear-gradient(155deg, #14261e, #162436);

/* Cool variant (pricing featured, demo modal) */
radial-gradient(ellipse at 20% 25%, rgba(56,189,248,0.45), transparent 50%),
radial-gradient(ellipse at 75% 65%, rgba(99,102,241,0.35), transparent 45%),
radial-gradient(ellipse at 45% 90%, rgba(76,175,80,0.25), transparent 50%),
linear-gradient(155deg, #0f1b2d, #162436, #1a1f3a);
```

---

## 3. Typography

### Font

**Inter** — loaded via Google Fonts. Weights: 300, 400, 500, 600, 700.

Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Scale

| Element | Size | Weight | Line-height | Letter-spacing |
|---------|------|--------|-------------|----------------|
| Hero title (home & pages) | `clamp(40px, 5vw, 56px)` | 400 | 1.15 | -0.02em |
| Section title | `clamp(28px, 3vw, 40px)` | 400 | 1.2 | -0.02em |
| CTA title | `clamp(28px, 3vw, 40px)` | 400 | 1.2 | -0.02em |
| Card title | 17–22px | 500 | 1.4 | -0.01em |
| Body text | 16–18px | 400 | 1.6–1.8 | 0 |
| Label / eyebrow | 13–14px | 500 | — | 0 |
| Meta / timestamp | 12–13px | 400–500 | — | 0 |

### Rules

- **Headings**: Always weight 400 (thin/light feel), letter-spacing -0.02em
- **Body**: Weight 400, generous line-height (1.6+)
- **Labels**: Weight 500, color `var(--text-tertiary)`, no uppercase transform, no extra letter-spacing
- **No uppercase text transforms** anywhere in the design
- **All text left-aligned** — no centered heroes or section titles

---

## 4. Layout & Spacing

### Container

```css
max-width: 1280px;
margin: 0 auto;
padding: 0 24px; /* 20px on mobile */
```

### Section Spacing

| Context | Padding |
|---------|---------|
| Major sections | `100px 0` (desktop), `60px 0` (mobile) |
| Hero sections | `160px 0 80px` (desktop), `120px 0 60px` (mobile) |
| Header margins | `48px` bottom |
| Grid gaps | `24px` standard, `16–20px` for cards |

### Section Backgrounds

- All sections use `var(--bg)` (white) — **no alternating gray backgrounds**
- Only cards use `var(--bg-card)` (#F5F5F5) for subtle contrast
- No separator lines between sections or list items
- Footer uses `var(--bg)` with a top border

### Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Tablet | `max-width: 1024px` | Grids collapse to 2-col or 1-col |
| Mobile | `max-width: 768px` | Single column, reduced padding |

---

## 5. Components

### Buttons

All buttons use pill shape: `border-radius: 100px`.

| Type | Background | Color | Border | Hover |
|------|-----------|-------|--------|-------|
| Primary | `var(--text)` (#000) | `var(--white)` | none | `#333` |
| Secondary | transparent | `var(--text)` | `1px solid var(--border)` | `bg: var(--bg-card)` |
| CTA (nav) | `var(--text)` | `var(--white)` | none | `#333` |

```css
.btn {
    border-radius: 100px;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 500;
}
```

### Cards

| Property | Value |
|----------|-------|
| Border radius | `var(--radius)` (12px) or `var(--radius-lg)` (16px) for featured |
| Background | `var(--bg-card)` (#F5F5F5) |
| Border | `1px solid var(--border)` when needed |
| Shadow (default) | `0 1px 3px rgba(0,0,0,0.06)` |
| Shadow (hover) | `0 8px 28px rgba(0,0,0,0.08)` max |
| Hover transform | `translateY(-2px)` max |
| Transition | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` for spring feel |

### Inputs

```css
border: 1px solid var(--border);
border-radius: 10px;
padding: 10px 14px;
font-size: 14px;
background: var(--white);
/* Focus state: */
border-color: var(--text);
box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
```

### Dropdowns (Navigation)

Contained card style (not full-width mega menus):

```css
position: absolute;
border-radius: 16px;
padding: 24px;
border: 1px solid var(--border);
box-shadow: 0 8px 40px rgba(0,0,0,0.08);
```

- Text-only items (title + description, no icons)
- Column sections with labels for multi-section dropdowns
- Vertical divider between sections: `border-left: 1px solid var(--border)`

### Modal (Demo)

Split-panel design:
- **Left**: Rich gradient background, white text, marketing copy
- **Right**: Clean white, dark text, form inputs
- **Overlay**: `rgba(0,0,0,0.45)` with `backdrop-filter: blur(4px)`
- **Container**: White bg, `border-radius: 20px`, no padding (panels self-pad)

---

## 6. Shadows

Minimal. Barely visible. Never heavy.

| Context | Value |
|---------|-------|
| Card default | `0 1px 3px rgba(0,0,0,0.06)` |
| Card hover | `0 8px 28px rgba(0,0,0,0.08)` |
| Product card hover | `0 12px 40px rgba(0,0,0,0.15)` |
| Dropdown | `0 8px 40px rgba(0,0,0,0.08)` |
| Modal | `0 24px 80px rgba(0,0,0,0.12)` |
| Notification float | `0 4px 24px rgba(0,0,0,0.08)` |

---

## 7. Borders

Always `1px solid`. Never thicker except for accent left-borders on quotes/highlights (3px).

| Context | Value |
|---------|-------|
| Default | `1px solid var(--border)` (#EEEEEE) |
| Hover | `1px solid var(--border-hover)` (#DDDDDD) |
| Section divider | `1px solid var(--border)` |
| Quote accent | `border-left: 3px solid var(--orange)` |
| Highlight box | `border-left: 3px solid var(--orange)` |

---

## 8. Animation & Motion

### Transitions

| Context | Value |
|---------|-------|
| Default | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` |
| Spring entrance | `0.6s cubic-bezier(0.16, 1, 0.3, 1)` |
| Hover transform | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` |

### Scroll Animations

- Elements enter with `opacity: 0` → `1` and `translateY(20px)` → `0`
- Staggered delay: `i * 0.05s` per element
- Triggered via `IntersectionObserver` with `threshold: 0.1`
- Chat messages cascade in sequence with typing indicator

### Hover Effects

- Cards: `translateY(-2px)` + shadow increase
- Product cards: 3D tilt via `perspective(800px) rotateX/rotateY` (max 4deg)
- Buttons: Background color shift only, no transform
- Links: Color transition only

### Floating Notifications

- Entrance: slide up + fade in with spring easing
- Breathing: `@keyframes notifBreathe` — 7s ease-in-out, `translateY(0)` → `translateY(-4px)`
- Triggered when parent section enters viewport

---

## 9. Page Structure

### Shared Components (all pages)

1. **Navigation** — Fixed top, 56px height, blur on scroll, contained dropdown cards
2. **Footer** — Light theme, `footer-top` grid (brand + 4 columns), `footer-bottom` with copyright + legal
3. **Demo Modal** — Split panel (gradient left, form right)

### Page Templates

**Product pages** (Brain, Market, Ecosystem, Labs):
- `page-hero` (enhanced with stat pills + user badges) → Agents section (`agent-grid`) → How It Works (`workflow`) → How You Interact (`interface-grid`) → Data Sources (`datasource-grid`) → Cross-Product Connections (`connections-grid`) → Getting Started (`onboarding`) → `page-cta` → footer

**Solutions page**:
- `page-hero` → `page-section` per stakeholder → `page-cta` → footer

**Pricing page**:
- `pricing-page-hero` → `pricing-grid` (4 cards, one featured with gradient) → `pricing-page-cta` → footer

**Customers page**:
- `customers-hero` → `customers-featured` grid → `customers-stats` carousel → `customers-testimonial` → `customers-all` grid → `customers-cta` → footer

**Customer stories**:
- `story-hero` (gradient image) → `story-body` (2-col: article + sidebar) → `customers-cta` → footer

**Company page**:
- `page-hero` → `about` section (headline + 2-col text) → `page-cta` → footer

---

## 10. Product Page Components (Redesign)

### Hero Enhancements

- **`.page-hero-stats`** — Flex row of pill-shaped stat badges below hero description
- **`.page-hero-stat`** — Pill with `var(--bg-card)` background, `100px` border-radius, 14px weight 500 text
- **`.page-hero-users`** — Flex row of user badges showing target audience
- **`.page-hero-user`** — Small pill with border, 13px weight 500 text, `var(--text-tertiary)` color

### Agent Cards

- **`.agent-grid`** — 2-column grid, 20px gap
- **`.agent-card`** — `var(--bg-card)` background, `var(--radius)` border-radius, 28px padding, 1px border
- **`.agent-card-header`** — Flex row with agent name and autonomy badge
- **`.agent-card-name`** — 17px weight 500
- **`.agent-card-desc`** — 15px weight 400, `var(--text-secondary)`
- **`.agent-card-meta`** — Column layout for inputs/output rows
- **`.agent-tags`** — Flex-wrap row of small input tag pills
- **`.agent-tag`** — 12px pill with border, `var(--text-tertiary)` color
- **`.agent-card-impact`** — 14px weight 500, `var(--orange-text)`, top border separator

### Autonomy Badges

- **`.agent-badge`** — Base pill badge, 12px weight 500
- **`.agent-badge-autonomous`** — Green tinted background (`rgba(34,197,94,0.12)`), green text
- **`.agent-badge-approval`** — Amber tinted background (`rgba(245,158,11,0.12)`), amber text
- **`.agent-badge-action`** — Blue tinted background (`rgba(59,130,246,0.12)`), blue text

### Workflow Steps

- **`.workflow`** — Horizontal flex on desktop, vertical on mobile/tablet
- **`.workflow-step`** — Numbered circle + title + description
- **`.workflow-step-number`** — 36px black circle, white text, z-index 1
- **`.workflow-step-title`** — 16px weight 500
- **`.workflow-step-desc`** — 14px weight 400, `var(--text-secondary)`
- **Connector lines** — CSS `::after` pseudo-elements between steps (horizontal desktop, vertical mobile)

### Interface Cards

- **`.interface-grid`** — 3-column grid, 20px gap (collapses to 2 on tablet, 1 on mobile)
- **`.interface-card`** — Same card style as agent cards
- **`.interface-card-user`** — 15px weight 500, user role
- **`.interface-card-channel`** — 13px weight 500, `var(--orange-text)`, channel/interface type
- **`.interface-card-desc`** — 14px weight 400, what the user sees

### Data Source Cards

- **`.datasource-grid`** — 3-column grid, 20px gap
- **`.datasource-card`** — Lighter card, 24px padding
- **`.datasource-card-name`** — 15px weight 500
- **`.datasource-card-desc`** — 14px description
- **`.datasource-card-meta`** — Row of frequency/type tag pills
- **`.datasource-card-tag`** — Same style as `.agent-tag`

### Connection Cards

- **`.connections-grid`** — 3-column grid, 20px gap
- **`.connection-card`** — Standard card style
- **`.connection-card-header`** — Flex row: product name + arrow + product name
- **`.connection-card-product`** — 15px weight 500
- **`.connection-card-arrow`** — `&harr;` symbol, `var(--text-muted)`
- **`.connection-card-desc`** — 14px description of bidirectional data flow

### Onboarding Timeline

- **`.onboarding`** — Vertical column, max-width 640px
- **`.onboarding-step`** — Flex row: numbered circle + content, connected by vertical line
- **`.onboarding-step-number`** — Same 36px black circle as workflow
- **`.onboarding-step-title`** — 16px weight 500
- **`.onboarding-step-desc`** — 14px description
- **`.onboarding-step-time`** — 13px weight 500, `var(--text-muted)`, timeframe

### Section Headers (within product pages)

- **`.page-section-title`** — `clamp(28px, 3vw, 40px)` weight 400, replaces old `page-section-label` as main heading
- **`.page-section-desc`** — 17px description below title, max-width 640px, 48px bottom margin
- **`.page-section-label`** — Still used as eyebrow label above the title

---

## 11. Do's and Don'ts

### Do
- Use `var()` tokens for all colors, spacing, and radii
- Keep shadows barely visible
- Use 1px hairline borders (on cards, nav, footer only)
- Use pill-shaped buttons (`border-radius: 100px`)
- Use weight **400** for all major headings (thin, elegant feel)
- Use weight **500** for labels and eyebrows
- Keep all sections on white (`--bg`) background
- Use `clamp()` for responsive typography
- Left-align all text (heroes, sections, CTAs)

### Don't
- Use dark section backgrounds (exception: gradient featured cards)
- Use heavy shadows (`> 0.15` opacity)
- Use uppercase text transforms
- Use thick borders (`> 1px` except quote accents)
- Use icon boxes in dropdowns
- Use orange as a primary button color (buttons are black)
- Add decorative gradient blobs (`::before`/`::after` radial gradients on sections)
- Use `translateY` hover effects larger than `-3px`
- Use alternating gray section backgrounds
- Add separator lines/borders between list items or sections
- Center-align hero titles or section titles
- Use font-weight 600 or 700 on headings (use 400)

---

## 11. File Structure

```
watoko/
├── index.html          # Home page
├── brain.html          # Product: Brain
├── market.html         # Product: Market
├── ecosystem.html      # Product: Ecosystem
├── labs.html           # Product: Labs
├── solutions.html      # Solutions overview
├── pricing.html        # Pricing
├── company.html        # About / Company
├── customers.html      # Customer stories index
├── customers/
│   ├── ngoma.html
│   ├── coffee-circle.html
│   └── tooro-coffee.html
├── styles.css          # Single shared stylesheet
├── script.js           # Single shared script
└── style-guide.md      # This file
```

All pages share one `styles.css` and one `script.js`. No page-specific stylesheets. Customer story pages use `../` relative paths.
