# Brand Identity Guide

---

## Mood Board Inspiration

| Source | Takeaway |
|---|---|
| **Goodreads** | Familiar layout, green brand color — avoid replicating, but respect user habits |
| **StoryGraph** | Clean card layouts, mood-based tagging UI, stats dashboard layout |
| **Hardcover** | Beautiful book cards, lifetime stats visualization, journal-style entries |
| **Notion** | Clean typography, whitespace, block-based layout, sidebar navigation |
| **Spotify** | Dark mode-first design, card-based discovery, personalized playlists → shelves analogy |
| **Kindle** | Reading progress bar, estimated time left, typography for long-form reading |
| **Apple Books** | Bookshelf metaphor, page curl, minimalist detail pages, beautiful typography |
| **Letterboxd** | Film → book analogy: list/diary/review pattern, social activity feed |
| **Dribbble (book apps)** | Card shadows, gradient accents, mood-based color coding |

**Vibe**: Warm, intelligent, cozy, modern — like a beautifully designed physical bookstore meets a sophisticated digital dashboard.

---

## Brand Name & Logo

| Element | Detail |
|---|---|
| **Name** | Novelle |
| **Etymology** | Italian/French for "short story" or "novel" — evokes literary heritage |
| **Logo Concept** | An open book with the spine forming the "N" or a bookmark stylized as the letter N |
| **Logo Variations** | Full lockup (Novelle + icon), icon-only (bookmark N), favicon |
| **Tagline** | *Read deeper.* (short), *Track, discover, and love your reading journey.* (long) |

---

## Brand Personality

| Trait | Description |
|---|---|
| **Warm** | Inviting, cozy, human-centered — not cold or corporate |
| **Intelligent** | Thoughtful, well-designed, respects the user's intellect |
| **Playful** | Delightful micro-interactions, achievement animations, Easter eggs |
| **Sincere** | No dark patterns, no spam, no clickbait |
| **Modern** | Clean, minimal, contemporary — but timeless, not trendy |

**Tone of Voice**:
- Friendly but not overly casual ("You finished the chapter!" not "OMG you crushed it!")
- Informative without being dry
- Encouraging without being naggy
- Professional but approachable

---

## Color Palette

### Primary Colors

```
🎨 Primary — Warm Indigo
  #6366F1 (500)
  #4F46E5 (600)  ← Primary default
  #4338CA (700)  ← Hover
  #EEF2FF (100)  ← Subtle background

  Usage: Buttons, links, active states, primary accents
  WCAG AA on white: ✓
```

```
🎨 Secondary — Deep Teal
  #0D9488 (600)
  #0F766E (700)  ← Hover
  #F0FDFA (100)  ← Subtle background

  Usage: Secondary buttons, success states, stats accents
```

```
🎨 Accent — Amber
  #F59E0B (500)
  #D97706 (600)  ← Hover
  #FFFBEB (100)  ← Subtle background

  Usage: Ratings (stars), achievements, badges, highlights
```

### Semantic Colors

```
✅ Success — Emerald
  #10B981 (500)
  #059669 (600)

  Goal reached, streak active, achievement unlocked
```

```
❌ Error — Rose/Red
  #F43F5E (500)
  #E11D48 (600)

  Validation errors, delete actions, destructive buttons
```

```
⚠️ Warning — Amber
  #F59E0B (500)

  DNF warnings, content warnings, rate limits
```

```
ℹ️ Info — Sky Blue
  #0EA5E9 (500)

  Informational banners, tips, hints
```

### Neutral Colors

```
Background (Light):  #FAFAFA  (50)  — Page background
                     #F4F4F5  (100) — Card background
                     #E4E4E7  (200) — Border/divider
Text (Light):        #18181B  (900) — Primary text
                     #52525B  (600) — Secondary text
                     #A1A1AA  (400) — Muted/placeholder

Background (Dark):   #09090B  (950) — Page background
                     #18181B  (900) — Card background
                     #27272A  (800) — Surface/elevated
Text (Dark):         #FAFAFA  (50)  — Primary text
                     #A1A1AA  (400) — Secondary text
                     #52525B  (600) — Muted/placeholder
```

### Reading Mood Colors (Data Visualization)

```
Lighthearted:   #FCD34D  (warm yellow)
Dark:           #6B21A8  (deep purple)
Humorous:       #FB923C  (bright orange)
Serious:        #475569  (slate)
Romantic:       #FB7185  (rose)
Suspenseful:    #DC2626  (red)
Emotional:      #EC4899  (pink)
Informative:    #3B82F6  (blue)
Fast-paced:     #F97316  (orange)
Slow-paced:     #8B5CF6  (violet)
```

---

## Typography System

### Font Selection

| Usage | Font | Fallback |
|---|---|---|
| **Headings** | Literata (serif) | Georgia, "Times New Roman", serif |
| **Body** | Inter (sans-serif) | -apple-system, "Segoe UI", Roboto, sans-serif |
| **Monospace** | JetBrains Mono / Fira Code | "Cascadia Code", "Consolas", monospace |

**Rationale**: Literata is designed for long-form reading (used by Google Play Books). Inter is highly legible at all sizes. The combination gives a literary-but-modern feel.

### Type Scale

```
H1 — Literata, 800 (Extra Bold)
  Desktop: 48px / 56px line-height / -0.02em tracking
  Mobile:  36px / 44px line-height

H2 — Literata, 700 (Bold)
  Desktop: 36px / 44px line-height / -0.015em tracking
  Mobile:  28px / 36px line-height

H3 — Literata, 700 (Bold)
  Desktop: 28px / 36px line-height
  Mobile:  24px / 32px line-height

H4 — Inter, 600 (Semi Bold)
  Desktop: 20px / 28px line-height
  Mobile:  18px / 26px line-height

Body Large — Inter, 400 (Regular)
  18px / 28px line-height

Body Medium — Inter, 400 (Regular)
  16px / 24px line-height

Body Small — Inter, 400 (Regular)
  14px / 20px line-height

Caption — Inter, 500 (Medium)
  12px / 16px line-height

Overline — Inter, 600 (Semi Bold), uppercase
  11px / 16px line-height / 0.05em tracking
```

### Font Weights Available

```
Inter: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi Bold), 700 (Bold)
Literata: 400 (Regular), 500 (Medium), 700 (Bold), 800 (Extra Bold)
```

---

## Spacing System

Based on a 4px grid:

```
Space 0:   0px
Space 1:   4px
Space 2:   8px
Space 3:   12px
Space 4:   16px
Space 5:   20px
Space 6:   24px
Space 7:   32px
Space 8:   40px
Space 9:   48px
Space 10:  64px
Space 11:  80px
Space 12:  96px
```

### Common Usage

```
Page horizontal padding:  Space 6 (24px) mobile, Space 10 (64px) desktop
Section spacing:          Space 10 (64px)
Card padding:             Space 4 (16px) mobile, Space 6 (24px) desktop
Card gap (grid):          Space 4 (16px) mobile, Space 6 (24px) desktop
List item spacing:        Space 3 (12px)
Icon-to-text gap:         Space 2 (8px)
Button padding:           Space 3 (12px) horizontal, Space 2 (8px) vertical
```

---

## Shadows & Elevation

```
Elevation 0:  none (flat)
Elevation 1:  0 1px 2px rgba(24, 24, 27, 0.05)         — Cards on hover
Elevation 2:  0 1px 3px rgba(24, 24, 27, 0.1), 0 1px 2px rgba(24, 24, 27, 0.06)  — Cards default
Elevation 3:  0 4px 6px rgba(24, 24, 27, 0.07), 0 2px 4px rgba(24, 24, 27, 0.06)  — Dropdowns
Elevation 4:  0 10px 15px rgba(24, 24, 27, 0.1), 0 4px 6px rgba(24, 24, 27, 0.05)  — Modals
Elevation 5:  0 20px 25px rgba(24, 24, 27, 0.1), 0 10px 10px rgba(24, 24, 27, 0.04)  — Toast/Drawer
```

---

## Border Radius

```
None:      0px
Small:     4px     — Badges, tags, inputs
Medium:    8px     — Cards, buttons, modals
Large:     12px    — Dialogs, drawers
XLarge:    16px    — Cards on mobile
Pill:      9999px  — Avatars, pill buttons
```

---

## Icons & Illustrations

{Icons are used throughout the interface to improve scannability and reduce visual clutter.}

### Icon Set
- **Library**: Lucide Icons (open source, consistent, clean)
- **Size**: 16px (inline), 20px (buttons), 24px (navigation), 32px (empty states)
- **Weight**: 2px stroke, rounded caps

### Empty States
Each empty state includes:
- A relevant illustration (minimal, line-art style matching brand)
- A heading: "No books yet" / "No reviews yet"
- A body: "Start by searching for a book to add to your shelf."
- An action button: "Search Books"

### Loading States
- **Skeleton loaders**: Animated gray placeholders matching card/component shape
- **Spinner**: Circular indeterminate progress (brand indigo)
- **Skeleton animation**: Shimmer effect (light pulse)
