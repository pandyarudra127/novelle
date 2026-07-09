# Responsive Design Specifications

---

## Breakpoints

| Device | Width | Layout |
|---|---|---|
| **Mobile** | 320px – 639px | Single column, bottom nav |
| **Tablet** | 640px – 1023px | 2-column grid, collapsible sidebar |
| **Laptop** | 1024px – 1439px | 3-column grid, sidebar visible |
| **Desktop** | 1440px+ | 4-column grid, max-width container |

```
Mobile:   320 ───────────────────── 639
Tablet:   640 ──────────── 1023
Laptop:   1024 ────────── 1439
Desktop:  1440+ ─────────────────────
```

---

## Layout Adaptation by Screen Size

### 1. Navigation

| Component | Mobile (<640px) | Tablet (640-1023) | Desktop (1024+) |
|---|---|---|---|
| **Top Navbar** | Logo + Search icon + Notif + Avatar | Logo + Full search + Nav links + Notif + Avatar | Same as tablet |
| **Sidebar** | Hidden (drawer) | Collapsible (icon-only mode) | Fixed, expanded (240px) |
| **Bottom Nav** | Visible (4 tabs) | ✓ | ✗ |

### 2. Home Dashboard

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Continue Reading** | Horizontal scroll, card 140w | Horizontal scroll, card 160w | Grid, 4 columns |
| **Goal Summary** | Full width bar | Full width with streak | Inline with stats |
| **Activity Feed** | Single column | Single column | Single column, max-w 640px |
| **Recommended** | Horizontal scroll | 2 cols | 4 cols |
| **New Releases** | Horizontal scroll | 3 cols | 4 cols |

### 3. Book Detail Page

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Layout** | Single column, stacked | Cover left, details right | Cover left, details right, wider |
| **Cover** | 140px wide | 200px wide | 280px wide |
| **Description** | Full width | Full width | Full width, max-w 720px |
| **Reviews** | Single column | Single column | Single column, max-w 640px |
| **Similar Books** | Horizontal scroll | 3 cols | 4 cols |

### 4. Search

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Search Bar** | Full width below nav | Full width, centered | 640px max, centered |
| **Results Grid** | 2 columns | 3 columns | 4 columns |
| **Filters** | Bottom sheet / Drawer | Slide-in sidebar | Inline sidebar on left |

### 5. Analytics

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Stat Cards** | 2 per row (3 rows) | 3 per row (2 rows) | 5 per row (1 row) |
| **Charts** | Full width, stacked | 2 per row | 3 per row |
| **Heatmap** | Compact (smaller cells) | Full | Full |

### 6. Book Clubs

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Chat** | Full screen | 60% width, members sidebar | 60% width + members + info panels |
| **Polls/Votes** | Full width cards | Side-by-side with schedule | Side-by-side |

---

## Navigation Adaptation Strategy

### Mobile: Bottom Tab Bar
```
┌──────────────────────────────────────┐
│                                      │
│           (Page Content)             │
│                                      │
│                                      │
│                                      │
├──────────────────────────────────────┤
│  🏠 Home  🔍 Search  📖  Books  👤 Me │
└──────────────────────────────────────┘
- 4 tabs: Home, Search, Books, Profile
- Active tab highlighted with brand color
- Badge on Books tab for currently reading count
```

### Tablet: Sidebar Collapsed
```
┌───┬──────────────────────────────────┐
│ ⚡ │                                  │
│ 🏠 │                                  │
│ 🔍 │                                  │
│ 📖 │         (Page Content)           │
│ 📊 │                                  │
│ 👥 │                                  │
│ 🤖 │                                  │
│ ⚙️ │                                  │
└───┴──────────────────────────────────┘
- Icons only (72px wide)
- Expand on hover with text labels
- Tap to navigate
```

### Desktop: Sidebar Expanded
```
┌──────────┬───────────────────────────┐
│ 🏠 Home   │                           │
│ 🔍 Search │                           │
│ 📖 My Books│                           │
│ 📊 Dashboard│      (Page Content)      │
│ 🏆 Goals  │                           │
│ 👥 Clubs  │                           │
│ 🤖 AI     │                           │
│ ⚙️ Settings│                           │
└──────────┴───────────────────────────┘
- Full text + icons (240px)
- Active/hover states
- Sub-items for My Books (shelves)
```

---

## Content Adaptation Patterns

### Card Grid — Responsive Columns
```
Mobile (2 col):    [Card][Card]
                    [Card][Card]

Tablet (3 col):     [Card][Card][Card]
                     [Card][Card][Card]

Desktop (4 col):    [Card][Card][Card][Card]
                     [Card][Card][Card][Card]
```

### Horizontal Scroll (Mobile)
```
┌──────────────────────────────────────────────────┐
│  Section Title                         → See All  │
├──────────────────────────────────────────────────┤
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐              │
│ │Card│ │Card│ │Card│ │Card│ │Card│    ← scroll →  │
│ └────┘ └────┘ └────┘ └────┘ └────┘              │
├──────────────────────────────────────────────────┤
│  Show scroll hint (fading gradient on right edge) │
└──────────────────────────────────────────────────┘
- Snap scrolling to card boundaries
- Scroll indicator dots when applicable
- "See All" link at section header
```

### Stack → Side-by-Side (Tablet/Desktop)
```
Mobile:                    Desktop:
┌──────────────────┐      ┌──────────┬───────────┐
│  Book Cover      │      │ Cover    │ Details   │
│  Details below   │      │ (sticky) │ (scroll)  │
│                  │      │          │           │
│  Description     │      │          │ Description│
│                  │      │          │           │
│  Reviews         │      │          │ Reviews   │
└──────────────────┘      └──────────┴───────────┘
```

---

## Touch Targets (Mobile)

| Element | Min Size | Notes |
|---|---|---|
| Buttons | 44x44px | Primary calls to action |
| Icon buttons | 44x44px | Navigation, actions |
| Links | 44px min height | Inline text links exempt |
| Cards | 44px tap zone | Entire card tappable |
| List items | 44px | Each row tappable |
| Bottom nav items | 56x56px | With label |
| Close/X buttons | 44x44px | Modals, drawers |
| Swipe actions | 44px reveal | Swipe to archive/delete |

---

## Typography Scaling

```
                    Mobile      Tablet      Desktop
H1                  36px        44px        48px
H2                  28px        32px        36px
H3                  24px        26px        28px
H4                  18px        20px        20px
Body Large          16px        18px        18px
Body Medium         15px        16px        16px
Body Small          13px        14px        14px
Caption             12px        12px        12px
```

---

## Container Max-Widths

```
Content:   1200px max-width, centered
Text/Read: 720px max-width (for descriptions, reviews, articles)
Narrow:    480px max-width (forms, settings panels)
Wide:      Full bleed (heatmap, dashboard stats)
```

---

## Safe Areas & Notches

- Bottom navigation: `padding-bottom: env(safe-area-inset-bottom, 16px)`
- Top content: `padding-top: env(safe-area-inset-top, 0px)`
- Status bar aware: `min-height: 100dvh` (dynamic viewport height)

---

## Dark Mode Adaptations

```
Light → Dark conversion:

Page bg:        #FAFAFA → #09090B
Card bg:        #FFFFFF → #18181B
Elevated:       #FFFFFF → #27272A
Border:         #E4E4E7 → #3F3F46

Primary text:   #18181B → #FAFAFA
Secondary text: #52525B → #A1A1AA
Muted text:     #A1A1AA → #52525B

Shadow:         dark bg → reduced/removed shadows
Images:         opacity 0.9 to prevent glare
Stars:          keep amber, no change
Icons:          same treatment as text
```

---

## Accessibility Checks

| Check | Standard | Verification |
|---|---|---|
| Color contrast | WCAG AA (4.5:1 text, 3:1 large) | All brand colors pass |
| Touch targets | 44x44px minimum | All interactive elements |
| Focus indicators | 2px outline, 2px offset | Custom focus ring (indigo) |
| Screen reader | Proper heading hierarchy | H1→H2→H3, no skips |
| Reduced motion | `prefers-reduced-motion` | Disable animations, transitions |
| Font scaling | Support 200% zoom without breaking | Relative units (rem/em) |
| Keyboard nav | All features reachable via Tab | Custom TabIndex management |
