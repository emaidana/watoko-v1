# Watoko Design System — The Law

> Every page on watoko.ai must feel like it was made by the same hand that made the homepage. Do not introduce any color, size, spacing value, or motion pattern not documented here. When in doubt, copy from `index.html`. When something is missing, add it here first, then implement.

**Source of truth:** `styles.css` (~12,300 lines), `index.html` (1,325 lines), `script.js`, `mesh-gradient.js`. All variables live in `:root`. There is one stylesheet. There are no overrides.

**Three external dependencies, no others:**
- Inter (300, 400, 500, 600, 700 + italic 300) — UI typography
- Lora (400, 500, 600 + italic 400) — editorial / serif voice
- Playfair Display (italic 400, 500) — opening screen accent only

---

## TABLE OF CONTENTS

1. Colors — the restraint principle
2. Typography — typography IS the visual element
3. Spacing & Layout
4. Component Inventory
5. Motion System
6. The Living Instrument Principle
7. Copy Voice Rules

---

## 1. COLORS

### THE RESTRAINT PRINCIPLE — READ THIS FIRST

This site uses **two surfaces and one accent**. Everything else is grayscale. Read that again.

- **Surfaces:** white (`#ffffff`), off-white (`#FAFAFA`), card-gray (`#F5F5F5`)
- **Type:** pure black (`#000000`) on white. That is the entire body palette.
- **The one accent:** orange `#F16001` — used to point at one thing per screen. CTAs, decision states, "active now" indicators.

**Color is meaning, not decoration.** If a color appears, it is doing semantic work: "this is the action," "this is alive," "this is the agronomy product." A page with three accent colors confesses that none of them mean anything.

The four product gradients (cool/warm/purple/earth) are **not** brand colors. They are **product identities**. You may use them only on a card or surface that *is* that product. You may not paint a generic page section purple "for variety."

**Forbidden moves:**
- Adding a new hex value without registering it here
- Using product colors as decoration on non-product pages
- Coloring body text anything but the documented gray scale
- Adding gradients to hero sections of subpages (only `index.html` opening screen has live gradient)
- Using shadows colored anything but `rgba(0,0,0, *)`

### Variables — registered in `:root` (styles.css:5–45)

```css
/* === ACCENT === */
--orange:        #F16001;     /* primary brand accent — one per screen */
--orange-bright: #E85002;     /* hover state only */
--orange-dim:    rgba(241, 96, 1, 0.10);  /* tint backgrounds */
--orange-glow:   rgba(241, 96, 1, 0.05);  /* faint surface */
--orange-text:   #D14E00;     /* text on white that needs to read as orange */

/* === STATUS === */
--green:         #22C55E;     /* "live", "online", "completed" — never decorative */
--green-dim:     rgba(34, 197, 94, 0.12);
--green-glow:    rgba(34, 197, 94, 0.06);

/* === SURFACES (light theme is the default) === */
--bg:             #ffffff;     /* page background */
--bg-page:        #FAFAFA;     /* alternate strip background (stats bar, off-white sections) */
--bg-card:        #F5F5F5;     /* card background — the third surface tone */
--bg-card-hover:  #EFEFEF;     /* card hover */
--surface-dark:   #0A0A0A;     /* opening screen, announcement bar, dark mocks */
--surface-dark-border: rgba(255, 255, 255, 0.08);

/* === BORDERS === */
--border:        #EEEEEE;     /* default — visible only on hover */
--border-hover:  #DDDDDD;     /* hover state */

/* === TYPE COLORS === */
--text:           #000000;     /* primary, headlines, key numbers */
--text-secondary: #555555;     /* body copy */
--text-tertiary:  #888888;     /* eyebrows, captions, tags */
--text-muted:     #aaaaaa;     /* lowest signal — placeholders, dividers */
--white:          #ffffff;     /* on dark surfaces only */
```

### Product Gradients (multi-stop radial + linear, used ONLY on product surfaces)

These appear on `.product-card`, `.pricing-card-header` on hover, `.scale-card-featured`, `.network-card-featured`, and on agent-card header zones via 38 nth-child variants. Do not invent new variants. Do not use these on non-product cards.

```css
/* gradient-cool — Brain (blues/cyans on dark navy)        base: #122a3a → #1a2e35 */
/* gradient-warm — Market (ambers/oranges on dark brown)   base: #2a1f12 → #2e2118 */
/* gradient-purple — Ecosystem (violets on dark plum)      base: #1e1530 → #221a35 */
/* gradient-earth — Labs (greens/olives on dark forest)    base: #1a2614 → #24261a */
```

Each gradient is a stack of 4 radial-gradients over a 155° linear-gradient. The recipe:
1. Top-left highlight ellipse, 50% size, 55% alpha primary tone
2. Top-right highlight ellipse, 45% size, 45% alpha secondary tone
3. Bottom-center highlight ellipse, 45% size, 40% alpha tertiary tone
4. Bottom-right ellipse, 40% size, 30% alpha bridge tone
5. 155° linear-gradient on dark base (the two near-black tones)

When you place text on a gradient: title at `rgba(255,255,255,0.95)`, body at `rgba(255,255,255,0.65)`, captions at `rgba(255,255,255,0.45)`. Never pure white. Never below 0.45.

### Product Dot Gradients (nav, hero, page-hero)

Used as 8–12px colored circles to label which product family a link belongs to. `.nav-product-dot.dot-{brain,market,ecosystem,labs}`:

| Product   | Dot stops                            | Glow                      |
|-----------|--------------------------------------|---------------------------|
| brain     | #64B5F6 → #4DD0E1 → #3d8db5         | rgba(100,181,246,0.2)     |
| market    | #FFB74D → #FF8A65 → #d4854a         | rgba(255,183,77,0.2)      |
| ecosystem | #BA93E6 → #9575CD → #8a6cb8         | rgba(186,147,230,0.2)     |
| labs      | #8BC34A → #66BB6A → #6d8c3a         | rgba(139,195,74,0.2)      |

Construction: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle, color1, color2, color3)` with a `box-shadow: 0 0 0 2px [glow]`.

### Heritage Gold (`company.html`, `pioneers.html`, blog/letter only)

```
#D4A855 — primary gold (heritage, fellowship, founder voice)
#C4944A — gold dark (button hover end stop)
#E0B88A — soft gold (warmth principle)
```

Gold is **never** used on product pages, pricing, customers, or solutions. It belongs to identity surfaces (about, fellowship, founder letter).

### One-off ambient tones (used inside cards, not as standalone palettes)

| Hex | Where it's allowed |
|---|---|
| #3b82f6 | data-viz line color in dashboard mocks (hero-dash chart, scale-card-chart) |
| #6366f1 | preview-bar-fill.labs only |
| #16a34a | small "complete/online" text inside dashboards & feature visuals |
| #d97706 | "in progress" amber text inside mocks only |
| #2563eb | agent-badge-action text only |

These are **mock-internal** colors. They live inside the UI panels to make them look like real software. They cannot leak out into page chrome.

---

## 2. TYPOGRAPHY

### THE ELEVENLABS PRINCIPLE — READ THIS FIRST

**Typography is the primary visual element of this site.** Not images. Not gradients. Not illustrations. The first thing the eye lands on is a sentence, and that sentence is doing the work that a hero image does on lesser sites.

What this means in practice:

1. **Headlines run massive.** Section titles clamp from 36–80px. Hero titles clamp 40–56px. Pricing/Start titles 48–80px. The size *is* the design.
2. **Headlines run light.** Almost everything is `font-weight: 400`. Never use `700` for a section title. The weight that signals importance on this site is the *size*, not the boldness.
3. **Tracking is tight.** All large type uses `letter-spacing: -0.02em` to `-0.03em`. Negative tracking is the editorial signature.
4. **Line-height is short on display, generous on body.** Display: 1.1–1.2. Body: 1.6–1.85.
5. **Mix two voices, never three.** Inter for the system. Lora italic for the soul (founder quote, principles, epigraphs). Playfair italic only on the opening screen.
6. **No ALL CAPS bold marketing.** Eyebrows are uppercase but tiny (13–15px) and weight 500 — they whisper.
7. **Numerals are tabular.** `font-variant-numeric: tabular-nums` on every metric.
8. **Headlines never end in exclamation marks.** See §7.

**Forbidden moves:**
- `font-weight: 700` on any heading larger than 16px
- Headlines in all caps
- `text-transform: uppercase` on body copy
- Drop shadows on type
- Three different fonts on a single page
- Italic Inter — use Lora when you need italic warmth
- Lora for UI labels — Lora is for sentences, not chrome

### Font Stacks

```css
--font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
/* Inter is the default. If a class doesn't set font-family, it gets Inter. */

/* Editorial voice — opt in by class */
font-family: 'Lora', Georgia, 'Times New Roman', serif;

/* Opening screen only */
font-family: 'Playfair Display', Georgia, serif;
font-style: italic;
```

### Type Scale — Display (used for hero & section headlines)

| Token / class                      | Size                       | Weight | Line  | Tracking | Usage                                  |
|-----------------------------------|----------------------------|--------|-------|----------|----------------------------------------|
| `.opening-phrase`                 | clamp(48px, 7vw, 96px)     | 400 italic (Playfair) | 1.1 | -0.03em | Opening screen single phrase           |
| `.hero-title`                     | clamp(48px, 5.5vw, 72px)   | 400    | 1.1   | -0.025em | Homepage hero                          |
| `.page-hero-title`                | clamp(40px, 5vw, 56px)     | 400    | 1.15  | -0.02em  | All subpage heroes                     |
| `.pricing-page-hero .section-title-lg` | clamp(40px, 5vw, 56px)| 400    | 1.15  | -0.02em  | Pricing hero                           |
| `.page-section-title`             | clamp(36px, 4.5vw, 56px)   | 400    | 1.1   | -0.025em | Mid-page section titles                |
| `.pricing-faqs-title`             | clamp(40px, 5vw, 56px)     | 400    | 1.1   | -0.025em | FAQ section title                      |
| `.pricing-start-title`            | clamp(48px, 6.5vw, 80px)   | 400    | 1.15  | -0.03em  | The "Start" CTA section — biggest type on site |
| `.platform-title` / `.compound-title` / `.scale-title` / `.network-title` / `.frontier-title` / `.feature-title` / `.vision-title` / `.why-now-title` / `.four-products-title` | clamp(28px, 3vw, 40px) | 400 | 1.2 | -0.02em | Standard section title (the most common) |
| `.company-final-statement` lines  | clamp(48px, 7vw, 96px)     | 400 (line1 Inter, line2 Lora italic gold) | 1.05 | -0.03em | Company final frame |
| `.declaration-title`              | clamp(32px, 4vw, 44px)     | 400    | 1.2   | -0.02em  | Declaration sections                   |
| `.contact-title` / `.customers-stat-value` | clamp(36px, 4vw, 52px) | 400 | 1.15 | -0.02em | Contact, customer stats                |

### Type Scale — Body & UI

| Token / class                  | Size  | Weight | Line  | Color              | Usage                          |
|-------------------------------|-------|--------|-------|--------------------|-------------------------------|
| `.page-section-desc`          | 18px  | 400    | 1.65  | text-secondary     | Subhead under section titles  |
| `.platform-desc` / `.compound-desc` / `.scale-desc` / `.network-desc` | 18px | 400 | 1.6 | text-secondary | Section descriptions |
| `.page-hero-desc`             | 18px  | 400    | 1.6   | text-secondary     | Hero subhead                   |
| `.feature-desc`               | 16px  | 400    | 1.7   | text-secondary     | Feature paragraph              |
| `.frontier-body p`            | 17px  | 400    | 1.75  | text-secondary     | Multi-paragraph prose          |
| `.about-col p`                | 16px  | 400    | 1.8   | text-secondary     | About prose                    |
| `.story-main p`               | 17px  | 400    | 1.8   | text-secondary     | Story body                     |
| `.story-intro`                | 18px  | 400    | 1.7   | text               | First paragraph of a story     |
| `.product-card-desc` / `.scale-card-desc` / `.compound-card-desc` / `.network-card-desc` / `.vision-card-desc` / `.why-now-card-body` | 15px | 400 | 1.6 | text-secondary | Card body |
| `.product-card-title` / `.scale-card-title` / `.compound-card-title` / `.network-card-title` / `.vision-card-title` / `.why-now-card-title` / `.final-cta-card-title` | 18px | 500 | 1.3 | text | Card title |
| `.agent-card-name`            | 17px  | 500    | 1.4   | text               | Agent card title               |
| `.agent-card-desc`            | 15px  | 400    | 1.6   | text-secondary     | Agent card body                |
| `.agent-card-oneliner`        | 14px  | 400    | 1.5   | text-tertiary      | Collapsed-state subline        |

### Type Scale — Eyebrows, Captions, Pills

Every section opens with an "eyebrow" — a small, lowercased label in `text-tertiary` that names the section without shouting. They are the connective tissue.

| Class                        | Size | Weight | Color          | Transform  |
|-----------------------------|------|--------|---------------|-----------|
| `.platform-eyebrow` / `.compound-eyebrow` / `.scale-eyebrow` / `.feature-eyebrow` / `.vision-eyebrow` / `.why-now-eyebrow` / `.four-products-eyebrow` / `.frontier-eyebrow` / `.declaration-eyebrow` / `.mission-eyebrow` / `.founder-quote-eyebrow` | 15px | 500 | text-tertiary | none (lowercase) |
| `.page-section-label` / `.page-hero-tag` | 14px | 500 | text-tertiary | none |
| `.page-hero-index`          | 13px | 400    | text-muted    | none      |
| `.fv-data-label` / `.fv-passport-label` / `.fv-decision-label` | 10px | 600 | text-muted/orange-text | UPPERCASE 0.03–0.10em |
| `.system-stats-pill`        | 14px | 500    | text          | none      |
| `.page-hero-stat`           | 14px | 500    | text          | none      |
| `.agent-tag`                | 12px | 400    | text-tertiary | none      |

**Rule:** Eyebrows are always one of:
- 13–15px Inter, weight 500, color `--text-tertiary`, lowercase, no letter-spacing — "section labels"
- 10–13px Inter, weight 600, color `--text-muted` or `--orange-text`, UPPERCASE, letter-spacing 0.05–0.10em — "data captions inside mocks"

These are two different things. Don't confuse them.

### The Lora Voice (when to break out the serif)

Lora italic is reserved. It is for moments where the brand stops talking like a product company and starts talking like a person:

- `.founder-quote-text` — clamp(20px, 2.2vw, 24px), 400 italic, color text — the founder quote on homepage
- `.company-epigraph` — Bushido quote on company.html
- `.company-origin-body p` — origin story prose
- `.company-principle-body` — the seven principles
- `.company-invitation-body` — closing invitation
- `.letter-body` — founder letter prose
- `.story-quote p` — pull-quotes inside customer stories
- `.inline-testimonial blockquote` — 18px italic
- `.company-final-statement .line-2` — "Toward everything." in italic gold

Never use Lora for: nav, buttons, forms, captions, eyebrows, metric numbers, or any UI element a user could click.

---

## 3. SPACING & LAYOUT

### Variables — `:root`

```css
--max-width:     1280px;     /* hard ceiling on page width */
--space-section:  80px;      /* default vertical rhythm between sections */
--space-header:   48px;      /* headline-to-content gap inside a section */
--space-gap:      24px;      /* default grid gap */
--radius:         12px;      /* small components — pills, inputs, mock cards */
--radius-lg:      16px;      /* feature cards, mock windows */
--card-radius-lg: 16px;      /* alias used by agent grid */
```

**Card border-radius standard: 20px** for the big surfaces (`.compound-card`, `.scale-card`, `.network-card`, `.vision-card`, `.why-now-card`, `.final-cta-card`, `.mission-card`, `.team-card`, `.company-principle`, `.pioneers-value-card`). 16px for medium cards. 12px for small surfaces.

### The Section Rhythm

Standard top-level section: `padding: 80px 0;` (`var(--space-section)`).
Inside the section: 48px (`var(--space-header)`) between the header block and the content grid.
Inside grids: 16–24px gutters (`var(--space-gap)`).

Hero variants (more breathing room):
- `.hero` — `min-height: 88vh; padding-top: 120px;`
- `.page-hero` — `padding: 160px 0 80px;` (subpage hero)
- `.pricing-faqs` / `.contact` — `padding: 140px 0;`
- `.pricing-start` — `padding: 140px 0 160px;` (biggest section)
- `.story-body` — `padding: 80px 0;`
- `.founder-quote` — `padding: 100px 0;`

### Container

```css
.container {
  max-width: var(--max-width);  /* 1280 */
  margin: 0 auto;
  padding: 0 24px;              /* 24 horizontal gutter at all sizes */
}
```

There is one container width on this site. Do not introduce 1440 or 1200 variants. Wider sections (full-bleed gradient panels) use the natural body width and then nest a `.container` inside.

### Grid Patterns

| Pattern | Use case |
|---|---|
| `grid-template-columns: 1fr 1fr;` | Two-column features, before/after, page-section-grid, contact, final-cta-grid, pricing-faqs-grid |
| `grid-template-columns: repeat(3, 1fr);` | Compound, vision, frontier, why-now, agent-grid, interface-grid, datasource-grid, connections-grid, security-grid, customers-all-grid |
| `grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto;` (asymmetric) | `.product-cards` — 4 cards in a 3×2 with the middle card spanning both rows |
| `grid-template-columns: repeat(4, 1fr);` | Pricing cards, pricing tiers, company-scale-stats, team-grid |
| `grid-template-columns: repeat(12, 1fr);` | `.scale-grid` and `.network-grid` — 12-col flexible row layouts using `grid-column: span N` |
| `grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;` | `.system-flow` — pipeline cards with arrows between |
| `grid-template-columns: 1fr 340px;` | `.story-layout` — main + sticky sidebar |

### Breakpoints (only two)

```css
@media (max-width: 1024px) { /* tablet — 4-col → 2-col, 3-col → 2-col, 2-col → 1-col on narrow */ }
@media (max-width: 768px)  { /* mobile — everything stacks */ }
```

There is no desktop breakpoint above 1024 (the desktop layout *is* the default). There is no narrow phone breakpoint below 768. Two states: tablet down, mobile down.

---

## 4. COMPONENT INVENTORY

This site is built from a small set of repeating components. Master these and you can build any new page in the same hand.

### 4.1 Announcement Bar (`.announcement-bar`)

Persistent black bar at the very top of every page above the nav.

```
height: 38px
background: #000
position: fixed; top: 0; z-index: 999
border-bottom: 1px solid rgba(255,255,255,0.06)
padding: 0 48px 0 20px
text-align: center
```

Contents: a single anchor with 13px Inter, weight 500, `letter-spacing: 0.2px`, color `rgba(255,255,255,0.85)`. Optional `.announcement-bar-badge` (linear-gradient `#D4A855 → #F16001`, 10px uppercase 700, white text). Close button at right (`.announcement-bar-close`, absolute right 16px, color `rgba(255,255,255,0.4)`). When dismissed: `.announcement-bar.hidden { display: none; }` and the nav slides up to occupy its space.

**Rule:** Only one message at a time. No carousels. Copy is a sentence + arrow.

### 4.2 Navigation (`.nav`)

Fixed transparent nav that gains a background when scrolled.

```
.nav { position: fixed; top: 38px; (under announcement) }
.nav.scrolled { background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
height: ~68px
```

Structure: `.nav-logo` (left, 18px Inter weight 600, letter-spacing 0.5px) | `.nav-links` (center, dropdown triggers) | `.nav-cta` (right, primary button "Get a demo").

**Mega menus** open from the dropdown triggers. Inside each mega menu is a `.mega-menu-section` grid of `.mega-menu-item` rows. Each row carries a `.nav-product-dot` (see §1) so the user sees instantly which product family the link belongs to.

**Active section pill:** `.nav-dropdown-trigger.active-section` becomes a small orange pill (`background: var(--orange-dim); color: var(--orange); padding: 6px 14px; border-radius: 20px;`) when you're on a page in that section.

### 4.3 Hero (`.hero` — homepage only)

`.hero-grid` is `1fr 1fr` at desktop. Left = title + email-capture + explore link. Right = `.hero-dash` (ElevenLabs-style dashboard mock) with `.hero-phone` floating bottom-right (an iPhone with chat).

**Hero title:** `.hero-title` clamp(48–72px), weight 400, line-height 1.1, letter-spacing -0.025em.
**Email capture:** `.email-capture` is a horizontal flex with input + primary button, both inside a single rounded-pill border that focuses as a unit.
**Explore link:** `.hero-explore` — text link with arrow, weight 500, color text.

### 4.4 Stat Strip / System Stats (`.system-stats`, `.stats-bar`, `.page-hero-stats`, `.pioneers-hero-stats`)

There are three variants of "row of stats." Use the right one.

**Variant A — Pills (`.system-stats`, `.page-hero-stats`):**
Inline-flex row of `.system-stats-pill` / `.page-hero-stat`. Each pill: `padding: 8px 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 100px; font-size: 14px; font-weight: 500; color: var(--text);`. Inner `<span>` is the unit/label in `text-tertiary` weight 400. Used in homepage hero and platform sections.

**Variant B — Bar with dividers (`.stats-bar`):**
Horizontal centered row with vertical 1px dividers (`.stats-bar-divider`). Numbers clamp(24–32px) weight 500. Used as a strip between sections, on `--bg-page`.

**Variant C — Big numbers (`.pioneers-hero-stat`, `.scale-card-chart-value`):**
Large stacked layout: 40–56px number on top, small uppercase label underneath. Used in fellowship hero and dramatic moments.

### 4.5 Product Card (`.product-card`)

The marquee card on the homepage `.platform` section. Four product-coded gradients.

```
border-radius: 16px
min-height: ~360px
display: flex column
overflow: hidden
transition: transform 0.4s spring, box-shadow 0.4s ease
```

Layout: `.product-card-top` holds the icon + title + subtitle (padding 36px 32px). `.product-card-preview` at the bottom shows a tiny dashboard fragment (rows of `.preview-label / .preview-val`, mini bars).

Hover: `transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.15);`

Layout in the grid is asymmetric: 1×1, 1×2 (middle column spans both rows), 1×1, 1×1 — creating the signature off-balance product grid.

### 4.6 Platform Deep-Dive (`.four-products`, `.four-product-block`)

Vertical stack of 4 alternating two-column blocks separated by 1px borders. Each block: `.four-product-content` (left) + `.four-product-visual` (right, holds a `.feature-dash` UI mock). Even-indexed blocks use `.four-product-reverse` to flip the order.

```
.four-product-block { padding: 64px 0; border-bottom: 1px solid var(--border); grid: 1fr 1fr; gap: 80px; }
```

**Inside content:** small pill `.four-product-name` (white background, 13px weight 600 + colored dot), then `.four-product-headline` (clamp 24–32px, 400, -0.02em), then `.four-product-stats` (dot-separated inline list), then `.four-product-desc`, then a `.feature-link` button.

**Inside visual:** a `.feature-dash` (see 4.7).

### 4.7 UI Mock Panels — THE MOST CRITICAL COMPONENT

Watoko's central trick is that every section that explains what the product does shows a UI mock that *looks like real software*. These are not screenshots and not illustrations. They are HTML+CSS reconstructions that follow strict rules.

There are three reusable mock chassis:

#### `.feature-dash` — The ElevenLabs-style clean card mock

```
background: #fff
border: 1px solid var(--border)
border-radius: 14px
box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)
```

Anatomy:
1. `.feature-dash-topbar` — small breadcrumb left (logo + path), live-status right (green pulse dot + "Live")
2. `.feature-dash-tabs` — horizontal tab strip with active underline
3. `.feature-dash-metrics` — 3–4 metric columns, each with 9px label + 15px value + tiny delta
4. `.feature-dash-content` — the chart area (an SVG line chart, height 80px, color #3b82f6)
5. `.feature-dash-bottom` — two mini cards in a 1fr 1fr grid

**Sizing rules:** Type inside a feature-dash is *deliberately small* (9–11px labels, 15–16px metric values). Mocks read at the size of real UIs, not at the size of marketing graphics. Resist the urge to enlarge them.

#### `.mock-window` — The chrome'd browser/dashboard mock

Used in the homepage hero (`.hero-dash` is a more detailed variant). Has a top chrome bar with `#ff5f57 / #febc2e / #28c840` traffic-light dots, a sidebar (`.mock-sidebar`), a topbar (`.mock-topbar`), a metrics row, a chart, and a feed (`.mock-feed`) of items with status badges.

**The badge color rules inside mocks:**
- `.mock-feed-badge.action` → orange tint
- `.mock-feed-badge.alert` → red/amber tint
- `.mock-feed-badge.completed` → green tint
- `.mock-feed-icon.green / .blue / .orange` → status icon backgrounds

These are mock-internal — they encode "this thing is happening / this needs attention / this is done." They have no relationship to brand color.

#### `.feature-card` (with `.fv-*` children) — The "feature visual" mock

A more decorative mock used inside `.feature` two-column sections. Has variants for Brain (`.fv-data-grid` + `.fv-decision`), Market (`.fv-trade-list` + `.fv-passport`), Ecosystem (`.fv-services`). Each ends with a colored accent strip (`.fv-decision`, `.fv-passport`) that uses an `--orange-glow → orange-dim` linear-gradient panel — the only place orange appears as a background fill.

**Critical rules for ALL mock panels:**

1. **Mocks must look alive.** A green pulse dot (`.feature-dash-status-dot`, `.fv-dot.pulse`) somewhere. A live timestamp. A "1.2s ago" caption. A tiny floating notification (`.feature-notif`) bottom-right that breathes (`@keyframes notifBreathe`).

2. **Mocks must contain real-looking data.** Not lorem ipsum. Not "Lorem 12,345." Use realistic Watoko-domain data: farm IDs, hectares, kilograms, crop names, country codes, prices in local currency.

3. **Mocks use a tighter type scale than the page.** 9–16px range. The page is monumental; the mocks are intimate. The contrast is the design.

4. **Mocks are never screenshots.** If you cannot build it in HTML, do not put it on the page. The reason: every mock needs to *animate* (live dot, sliding count, breathing notification) and screenshots are dead.

5. **Mocks scale gracefully.** They should look right at any container width because they are real DOM. Test at 640px, 800px, 1280px.

### 4.8 Compound Intelligence Cards (`.compound-card`)

Three large cards in a 3-col grid showing the network-effect story. Each card:

```
background: var(--bg-card)
border: 1px solid var(--border)
border-radius: 20px
padding: 32px
min-height: 420px
display: flex column
```

Top: `.compound-card-art` (260px tall flex-center) holding a 180×180 SVG illustration at 65% opacity in `var(--text)` color.
Bottom: `.compound-card-title` (18px weight 500) + `.compound-card-desc` (15px).

**Connection chevron:** Between adjacent cards, `.compound-card:not(:last-child)::after` draws a faint 7×7 chevron arrow pointing right at 25% opacity — a signal that these cards compound into each other.

The same chassis powers `.vision-card`, `.why-now-card`, `.network-card` with minor variations.

### 4.9 Founder Quote (`.founder-quote`)

A single literary moment on the homepage. Centered max-width 760px.

```
.founder-quote { padding: 100px 0; }
.founder-quote-eyebrow { 15px Inter 500 text-tertiary }
.founder-quote-text {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(20px, 2.2vw, 24px);
  font-weight: 400; font-style: italic;
  line-height: 1.7;
  color: var(--text);
  letter-spacing: -0.01em;
  margin: 0 0 32px;
  border: none; padding: 0;  /* deliberately no quote marks, no left border */
}
.founder-quote-name { 16px Inter 500 text }
.founder-quote-role { 14px Inter 400 text-tertiary }
```

**Rule:** No big quotation marks. No drop caps. No background panel. The quote is set in plain Lora italic on white. The restraint is the point.

### 4.10 Final CTA (`.final-cta`)

The closing section of most pages. Two-column: left = title + desc + actions, right = a stack of 1–3 `.final-cta-card` link cards (each 220px min-height, 20px radius, icon + title + desc, hover border-color).

```
.final-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.final-cta-title { clamp(28–40px); weight 400; -0.02em }
.btn-secondary-light { transparent bg, 1px border, 100px radius — pairs with btn-primary }
```

### 4.11 Footer (`.footer`)

```
.footer { padding: 80px 0 40px; border-top: 1px solid var(--border); }
.footer-top { grid 1fr auto; gap 48px; margin-bottom 64px }
.footer-grid { flex; gap 64px; column-flex with .footer-col }
.footer-col-title { 13px Inter 500 text }
.footer-col a { 14px text-tertiary → text on hover }
.footer-tagline { 14px text-tertiary, italic-feel through wording }
.footer-bottom { 24px top padding, 1px border-top, copyright + links }
```

The footer always carries: company logo + "From the ground. Toward everything." tagline, four columns (Products / Solutions / Company / Resources), legal links bottom (Privacy / Terms / Security / Grants).

### 4.12 Pricing Cards (`.pricing-card`)

Four-column dashed-divided grid (no card backgrounds — the columns are separated by `border-right: 1px dashed var(--border)`).

The header box (`.pricing-card-header`) is a separate rounded box inside each column, 200px min-height, that on **hover of the parent grid** transforms: all cards turn gray, then the *hovered* card reveals its product gradient. By default the second card (Market) is shown lit. This is the "grid-aware reveal" pattern unique to the pricing page.

### 4.13 Buttons

```
.btn — base. Inline-flex, gap 8px, padding 12px 24px, 100px radius, 15px Inter 500, 0.3s transition.
.btn-primary — bg var(--orange), white text, hover bg var(--orange-bright)
.btn-secondary — bg transparent, 1px border var(--border), text color var(--text), hover border var(--text)
.btn-secondary-light — same as secondary but with hover bg var(--bg-card)
.btn-pioneers — gold gradient #D4A855 → #C4944A (fellowship/about pages only)
```

**Rule:** One primary button per visible viewport. If you have two CTAs, one is primary and one is secondary. Two primaries side-by-side cancels out.

### 4.14 Forms

```
.form-group input/select/textarea {
  font: var(--font) 15px 400;
  padding: 12px 16px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: 8px;
  transition: border-color, box-shadow 0.3s;
}
:focus { border-color: var(--orange); box-shadow: 0 0 0 3px var(--orange-dim); }
```

Labels: 13px Inter 500 text, 8px gap above input. Optional pieces are tagged with `.optional` (text-muted weight 400).

The demo modal uses a slightly tighter variant (`.demo-form-group`, 14px font, 10px radius, 6px label gap).

---

## 5. MOTION SYSTEM

### Easing — there is one ease

```css
--transition:          0.3s cubic-bezier(0.4, 0, 0.2, 1);    /* default UI transitions */
--transition-spring:   0.4s cubic-bezier(0.16, 1, 0.3, 1);   /* card lifts, expansions */
--transition-gradient: 0.5s ease;                             /* color/background fades */
```

The spring ease `cubic-bezier(0.16, 1, 0.3, 1)` is the signature curve. Use it for anything that should feel "alive" — card hover lift, agent-card expansion, scroll reveals, panel entrances. The default ease is for color/border changes only.

**Forbidden eases:** `linear`, `ease-in`, `cubic-bezier(0.68, -0.55, ...)` overshoot bounces, anything > 0.6s for hover states.

### Existing keyframes (registered in styles.css)

```css
@keyframes pulse        { 0%,100% { opacity: 1 } 50% { opacity: 0.4 } }                      /* status dots */
@keyframes float        { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
@keyframes notifBreathe { 0%,100% { translate(0,0) } 33% { translate(1,-5) } 66% { translate(-1,-2) } }
@keyframes notifFloat   { /* alternate breathing for floating notifications */ }
@keyframes typingDot    { 0%,60%,100% { opacity:0.3 } 30% { opacity:1 } }
@keyframes gradientShift { 0% { bg-pos: 0% 50% } 50% { bg-pos: 100% 50% } 100% { 0% 50% } }   /* open agent card gradient */
@keyframes iconFloat    { 0%,100% { translateY(0) } 50% { translateY(-2px) } }                /* icon hover */
@keyframes dotPulse     { 0%,100% { box-shadow: 0 0 0 2px [color] } 50% { box-shadow: 0 0 0 6px [color/2] } }
@keyframes scrollHintFade / @keyframes scrollDotBounce  /* opening screen scroll hint */
```

### Scroll Reveal (`.reveal`)

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
```

Driven by IntersectionObserver in `script.js`. Add `.reveal` to any element you want to animate in on scroll. For grids, the observer applies a stagger by index so cards cascade.

### NEW MOTION PATTERNS — ADD THESE

These five patterns are part of the Watoko motion language. They are not yet exhaustively used but they are the law for any new component.

#### a) STAT NUMBERS COUNT-UP

When a stat number scrolls into view, count up from 0 to its final value over **1400ms** with easing `cubic-bezier(0.16, 1, 0.3, 1)`. Fires **once** per element. IntersectionObserver threshold: **0.3**.

```js
// Pattern (script.js)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      countUp(entry.target, parseFloat(entry.target.dataset.target), 1400);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('[data-count-up]').forEach(el => observer.observe(el));
```

```js
// Easing for the count itself — use the same spring curve
function easeOutExpo(t) { return 1 - Math.pow(2, -10 * t); }  // approx of 0.16,1,0.3,1
```

Apply to: `.stats-bar-value`, `.scale-card-chart-value`, `.customers-stat-value`, `.pioneers-hero-stat-number`, `.feature-dash-metric-value`, hero dashboard metrics. **Format with thousands separators and the original suffix** (e.g. `2,847` not `2847`; `$2.4M` not `2400000`).

#### b) UI PANEL STATUS PULSE

The "live now" pulse used on every status dot inside a UI mock.

```css
@keyframes statusPulse {
  0%, 100% { transform: scale(1);   opacity: 1;   }
  50%      { transform: scale(1.4); opacity: 0.4; }
}
.status-dot--pulse {
  animation: statusPulse 2000ms ease-in-out infinite;
}
```

Apply to: `.feature-dash-status-dot`, `.fv-dot.pulse`, `.mock-window` topbar status dot, hero-dash sidebar live indicator, any "Live" / "Online" / "Active now" affordance inside a UI mock. **2 second loop.** Never faster (jittery), never slower (looks broken).

#### c) SECTION HEADLINE ENTRANCE

When a section title scrolls into view, fade up.

```css
.section-headline-enter {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity   700ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}
.section-headline-enter.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply to: `.page-section-title`, `.platform-title`, `.compound-title`, `.scale-title`, `.network-title`, `.frontier-title`, `.feature-title`, `.why-now-title`, `.four-products-title`, `.pricing-faqs-title`, `.pricing-start-title`, `.company-final-statement` lines. Fires once. Threshold 0.2. **No stagger between siblings** — section titles enter as a single statement, not a cascade.

#### d) CARD HOVER LIFT

The standard hover for any card in any context.

```css
.card-lift {
  transition: transform 200ms ease, border-color 200ms ease;
}
.card-lift:hover {
  transform: translateY(-4px);
  /* No box-shadow change. No border-color explosion. No background tint. */
}
```

200ms (faster than the spring) because hover is a direct interaction, not an entrance. Default ease (not spring) because hover should feel snappy, not bouncy. The lift is `translateY(-4px)` — bigger than `-3px` reads as theatrical, smaller than `-4px` is invisible.

**Combined with existing patterns:** Cards that already have a border-color hover (most of them) keep that. Cards that already have shadow lifts (like `.product-card`, `.customers-featured-card`, `.customers-story-card`) keep their stronger shadows because they're hero surfaces. The 200ms × `-4px` rule is for **new** card components and any card that has no defined hover yet.

#### e) PANEL ENTRANCE

When a UI mock panel scrolls into view, scale up from 97% with a fade.

```css
.panel-enter {
  opacity: 0;
  transform: scale(0.97);
  transition:
    opacity   800ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
}
.panel-enter.is-visible {
  opacity: 1;
  transform: scale(1);
}
```

Apply to: `.feature-dash`, `.mock-window`, `.feature-card`, `.hero-dash`, `.scale-card-featured`, `.network-card-featured`, `.demo-modal-container`. Fires once. Threshold 0.15. The scale is **subtle** — 0.97 not 0.9 — because mocks should feel like they "settle into place" not "pop in."

### Composite rule — when an element belongs to multiple patterns

A `.feature-dash` inside a `.four-product-block` qualifies for **panel-enter**. The `.four-product-headline` above it qualifies for **section-headline-enter**. The metric values inside the feature-dash qualify for **stat-numbers-count-up**. The status dot inside the topbar qualifies for **ui-panel-status-pulse**. All four can fire on the same scroll moment — the choreography is:

1. 0ms — headline starts entering
2. 100ms — panel starts entering (feel the title leading the visual)
3. 800ms — panel is settled, count-up begins
4. 800ms — status pulse is already running (it never stops)
5. 2200ms — counts settle, the section is "alive"

Do not over-coordinate. The IntersectionObserver fires per-element, the staggers come from the elements being at different scroll positions. Just give each element its own observer entry.

---

## 6. THE LIVING INSTRUMENT PRINCIPLE

### The distinction: things that RUN vs things that are DRAWN

Watoko sells software. Software has state. Software is alive. The single most important visual decision on this site is that **every UI we show on a marketing page must look like it is currently running, not like a screenshot of something that ran yesterday.**

This is the difference between Stripe (alive) and a SaaS template (dead). It is the difference between ElevenLabs (alive) and a Figma export (dead). It is the difference between Linear (alive) and a stock illustration (dead).

The "Sound Flow" concept on ElevenLabs.io is the canonical reference: the homepage shows audio waveforms that *move*. Watoko's equivalent is that every dashboard, every chart, every feed, every notification, every status dot is *moving* — slowly, calmly, but unmistakably alive.

### The five tells of a Living Instrument

A UI mock on this site qualifies as a Living Instrument if and only if it has at least three of these five tells:

1. **A pulsing status dot somewhere.** Green, 2-second loop, scale + opacity. Never absent.
2. **A breathing element.** A floating notification (`.feature-notif`) that drifts up and down on a 5-second loop, or an `iconFloat` animation, or a `notifBreathe` cycle. Something is moving even when the user isn't.
3. **A real-time signal.** "1.2s ago" / "Just now" / "Live" / "Updating…" — text that implies the panel is connected to something.
4. **Realistic data.** Specific farm names, country codes, kilogram counts, prices in local currency. Never `Lorem` and never `12,345`. The data has to be plausible to a Ugandan coffee buyer.
5. **A count-up on entry.** When the panel enters the viewport, at least one number animates from 0 to its target value (see motion pattern §5a).

A Living Instrument that has **fewer than three** of these tells is not finished. It is a wireframe.

### The drawn-vs-running test

Before you ship any new mock, ask: **"If a user sat watching this for 30 seconds, would they see anything change?"**

- If the answer is no — your mock is drawn. Add a pulse, a count, a breathing notification.
- If the answer is yes — your mock is running. Ship it.

### Sound Flow → Watoko Flow

ElevenLabs's Sound Flow concept is: every interaction with their product produces audio, and the homepage shows that audio flowing visually as moving waveforms. The marketing surface and the product surface use the same visual language.

Watoko's equivalent: every interaction with our product produces a *decision* (Brain), a *trade* (Market), a *service delivery* (Ecosystem), or a *discovery* (Labs). The marketing surface shows those four decision-flows happening in real time on the home page hero, on each of the four-product blocks, and inside the compound section. The pulse is the sound of the system thinking.

Wherever you are tempted to use a static illustration, ask first: could this be a small Living Instrument instead? Almost always, the answer is yes.

### What the principle forbids

- ❌ Stock photography of African farmers (we are not a charity poster)
- ❌ Illustrated mascot characters
- ❌ Lottie animations of generic abstract shapes
- ❌ Hero videos that auto-play
- ❌ Background gradients that move on their own (the homepage opening screen is the *only* exception, and it is a separate WebGL canvas)
- ❌ Decorative SVGs that have no connection to a product action

### What the principle requires

- ✅ Every marketing section about a product feature shows a UI mock of that feature
- ✅ Every UI mock has at least three Living Instrument tells
- ✅ Every section's "evidence" is a working component, not a label that says "evidence"
- ✅ When you cannot build a real UI for an idea, the idea is not yet ready to ship as a section

---

## 7. COPY VOICE RULES

The site sounds like one person wrote it. That person is calm, declarative, and never uses sales language. The copy rules are as strict as the design rules.

### Voice anchors (all preserved verbatim across the site)

- "From the ground. Toward everything." (Company final frame, footer tagline, scale section)
- "Turn Earth's deepest biology into the food, the science, and the intelligence for better human life. On Earth and beyond." (Mission statement, opening screen)
- "A culture is not a set of beliefs. It is a set of actions." (Company epigraph)
- "Food is not a product. Food is not a market. Food is the invisible architecture of human potential…" (Founder quote on homepage)

These phrases are the spine. Do not edit them. Do not paraphrase them. Do not put them in different fonts.

### Headline rules

1. **Declarative, not promotional.** "Africa's first agentic AI for agriculture." Not "The world's best AI platform for African farmers!"
2. **Never end in an exclamation mark.** No exceptions. The exclamation is the most banned character on this site.
3. **Period-terminated when complete sentences, naked when fragments.** "We win." "Built for decades." "From now to the continental network." Both forms allowed. Mixed within a section is fine.
4. **First-person plural.** "We build." Not "Watoko builds."
5. **No marketing verbs.** Banned: "supercharge," "unlock," "empower," "transform," "revolutionize," "leverage," "synergize." Allowed: "build," "deliver," "stand," "win," "grow," "ship."
6. **No "AI-powered."** The site is *about* AI. Saying "AI-powered" is like a restaurant saying "food-powered."
7. **Specific over general.** "2,847 farms managed" not "thousands of farms." "65,000 species" not "tens of thousands of species."

### Punctuation

- **Em dashes — like this — for inline pauses.** Two spaces around the em dash on the wider screens, none on mobile is fine. No en dashes for ranges in copy (use "to": "2026 to 2028").
- **Periods inside sentences end the sentence.** No semicolons in headlines. Semicolons are fine in body copy.
- **Numerals always.** "4 engines" not "four engines." "1,000 farms" not "a thousand farms." "15+ countries" not "more than fifteen countries." This is a typographic decision: numerals carry weight that words don't.
- **Currency with symbols, not words.** "$2.4M" not "2.4 million dollars."
- **Time in lowercase abbreviations.** "1.2s ago" not "1.2 seconds ago" inside mocks.

### Eyebrow style

Section eyebrows are lowercase, 2–3 words, no terminal punctuation.

- ✅ "the platform"
- ✅ "why now"
- ✅ "the network"
- ✅ "from the founder"
- ❌ "THE PLATFORM"
- ❌ "Why Now."
- ❌ "Section 03 // The Platform"

### Body copy style

- Short paragraphs. 2–4 sentences each. Big air between paragraphs.
- One idea per paragraph.
- Concrete nouns. Avoid abstract nouns when possible. "Coffee from Tooro" beats "agricultural produce."
- Names of real places. Kampala, Tooro, Goma, Kigali, Nairobi. Geography is part of the brand.

### Numbers in mocks

Numbers shown inside UI mocks are *the* place where you can be most specific. Use:

- Real-sounding farm IDs (UG-W-2847)
- Plausible hectare counts (1.2 ha, 4.8 ha)
- Local crops (Robusta, Arabica, matooke, cassava, maize)
- Specific countries with ISO codes (UG, RW, KE, TZ, ET)
- Realistic prices in UGX, RWF, USD as appropriate

### What never appears in copy

- "Powered by" anything
- "Disrupting" anything
- "Industry-leading" / "world-class" / "best-in-class"
- "Solutions" used as a noun (we have "products," not "solutions" — except for the literal `solutions.html` page which is a list of customer use cases)
- "Stakeholders"
- "Ecosystem" used metaphorically (Ecosystem is a Watoko product name; using it loosely confuses the reader)
- "Holistic"
- Emoji in headings, body copy, or buttons. Emoji are reserved for status icons inside mocks only — and even there, prefer SVG icons.

---

## APPENDIX A — File map

| File | What lives there |
|---|---|
| `styles.css` | All CSS. Single file, 12,300 lines. Organized by section as `/* ============ */` headers. |
| `index.html` | Homepage — the canonical reference for every component above. |
| `brain.html` / `market.html` / `ecosystem.html` / `labs.html` | Product subpages, all use `[data-product]` body attribute |
| `pricing.html` | The grid-aware-reveal pricing experience |
| `customers.html` | Featured + all stories grid |
| `customers/*.html` | Individual case studies (`.story-*` styles) |
| `company.html` | About — the editorial voice page |
| `careers.html` | Roles, manifesto, accordion job listings |
| `pioneers.html` | Watoko Fellowship Program — gold-coded heritage page |
| `partnerships.html` / `developers.html` / `solutions.html` / `grants.html` | Standard subpages |
| `blog/*.html` | Founder letter and posts (`.letter-*` styles) |
| `script.js` | All JS — IntersectionObserver, modal, FAQ, agent accordion, mock animations, count-up, etc. |
| `mesh-gradient.js` | WebGL gradient on the opening screen only |

## APPENDIX B — When you need to add something not covered here

1. Read this file again. Twice. It's probably already here under a different name.
2. Find the closest existing component and copy its pattern.
3. If you absolutely need something new, add it here **first**, then implement.
4. Do not introduce a new color, type size, spacing value, or motion curve without registering it in this file.
5. Show your work. The next person to touch the codebase should be able to read this document and understand why the new thing exists.

The site is small on purpose. Restraint is the brand.
