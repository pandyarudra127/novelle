# Design System — UI Components

---

## 1. Buttons

### Primary Button
```
┌──────────────────┐
│  Action Text      │
└──────────────────┘

Background:  Indigo 600 (#4F46E5)
Text:        White
Border:      none
Padding:     12px 24px
Radius:      8px
Font:        Inter 500, 14px/16px

States:
  Default:   Indigo 600
  Hover:     Indigo 700 (#4338CA) + slight lift (elevation 1)
  Active:    Indigo 800 (#3730A3)
  Disabled:  Indigo 300 (#A5B4FC), cursor: not-allowed
  Loading:   Show spinner, disable interaction

Sizes:
  Small:  8px 16px, 12px font
  Medium: 12px 24px, 14px font  ← default
  Large:  16px 32px, 16px font
```

### Secondary Button
```
┌──────────────────┐
│  Action Text      │
└──────────────────┘

Background:  Transparent
Text:        Indigo 600
Border:      1px solid Indigo 200 (#C7D2FE)
Radius:      8px
Padding:     12px 24px
Font:        Inter 500, 14px/16px

States:
  Default:   Transparent + indigo border
  Hover:     Indigo 50 (#EEF2FF)
  Active:    Indigo 100 (#E0E7FF)
  Disabled:  Gray 300 border, gray 400 text
```

### Ghost Button
```
┌──────────────────┐
│  Action Text      │
└──────────────────┘

Background:  Transparent
Text:        Gray 700
Border:      none
Radius:      8px
Padding:     8px 12px
Font:        Inter 500, 14px/16px

States:
  Default:   Transparent
  Hover:     Gray 100 (#F4F4F5)
  Active:    Gray 200 (#E4E4E7)
```

### Icon Button
```
┌──┐
│🔍│
└──┘

Size: 40x40px (touch target), icon 20x20
Radius: 8px
Background: Transparent
States: Same as ghost button
```

---

## 2. Inputs

### Text Field
```
┌─────────────────────────────┐
│  Label                       │
│  ┌─────────────────────────┐ │
│  │ Placeholder text        │ │
│  └─────────────────────────┘ │
│  Helper text / Error text    │
└─────────────────────────────┘

Container:  12px padding, 8px radius
Border:     1px solid Gray 300 (#D4D4D8)
Background: White
Text:       Inter 400, 16px
Label:      Inter 500, 14px (above field)
Helper:     Inter 400, 12px (below field)

States:
  Default:     Gray 300 border
  Focus:       Indigo 500 ring (3px), Indigo 600 border
  Error:       Rose 500 border + ring, error text in Rose 500
  Disabled:    Gray 100 background, Gray 400 text
  Filled:      Normal state with content
```

### Search Bar
```
┌──────────────────────────────────────┐
│ 🔍  Search by title, author, ISBN…   │
└──────────────────────────────────────┘

Container:  12px padding, pill radius (9999px)
Border:     1px solid Gray 300
Background: Gray 50 (#FAFAFA) or white
Icon:       Search (16px), Gray 400
Text:       Inter 400, 16px

States:
  Default:     Gray 100 bg
  Focus:       White bg, Indigo 500 ring
  Filled:      Show clear (X) icon on right
  Expanded:    In search page — show filters below
```

### Text Area
Same as text field but with:
- Min height: 100px
- Resize: vertical only
- Character count in bottom-right when maxLength set

### Password Field
Same as text field but with:
- Toggle visibility icon (eye/eye-off) on right
- Password strength indicator (optional)

---

## 3. Cards

### Book Card
```
┌────────────────────┐
│  ┌──────────────┐  │
│  │   Book Cover  │  │
│  │  (140x210)   │  │
│  └──────────────┘  │
│  Title (2 lines)   │
│  Author (1 line)   │
│  ★★★★☆ 4.2        │
└────────────────────┘

Width:      160px (mobile), 180px (desktop)
Padding:    0 (image flush top), 8px below
Radius:     8px
Shadow:     Elevation 2
Hover:      Elevation 3 + slight scale (1.02)
Content:
  - Cover image (aspect ratio 2:3)
  - Title: Inter 500, 14px, 2-line clamp
  - Author: Inter 400, 12px, Gray 500
  - Rating: stars inline with number
```

### Review Card
```
┌────────────────────────────────────┐
│  [Avatar] Username     ★★★★☆      │
│  Read on Jan 5, 2026               │
│                                    │
│  Review text (3-20 lines)…         │
│                                    │
│  ❤️ 24  💬 5  📖 Shared  🔖 Save │
└────────────────────────────────────┘

Padding:    16px
Radius:     8px
Border:     1px solid Gray 200
Background: White / Gray 50 (alternating)

Header:
  Avatar: 32px circle
  Username: Inter 600, 14px
  Rating: inline stars
  Date: Inter 400, 12px, Gray 400

Body:
  Text: Inter 400, 15px, 24px line-height
  Spoiler: Blur overlay, click to reveal

Actions:
  Like, Comment, Share, Save — icon buttons, Gray 500
```

### Author Card
```
┌────────────────────┐
│  ┌─────────────┐   │
│  │   Author    │   │
│  │   Photo     │   │
│  │  (80x80)   │   │
│  └─────────────┘   │
│  Author Name       │
│  42 books          │
│  ★ 4.2 avg rating  │
└────────────────────┘

Width:      160px
Center-aligned content
```

### Collection Card
```
┌────────────────────┐
│  📚 Best Fantasy   │
│  12 books          │
│  Updated 2d ago    │
└────────────────────┘

Padding:    16px
Radius:     8px
Background: Gradient accent (light version)
Icon:       Collection icon (24px)
Title:      Inter 600, 16px
Meta:       Inter 400, 13px, Gray 500
```

---

## 4. Navigation

### Top Navbar
```
┌────────────────────────────────────────────────────┐
│  [Logo]  Explore  My Books  Clubs  AI  [🔍]  [🔔] [👤] │
└────────────────────────────────────────────────────┘

Height:     64px
Background: White (light) / Gray 950 (dark)
Border:     1px solid Gray 200 bottom
Content:
  Left: Logo (bookmark N + "Novelle" wordmark)
  Center: Nav links (Inter 500, 14px, Gray 600 → Indigo 600 active)
  Right: Search icon, Notification bell (with badge), Avatar dropdown
```

### Sidebar (Desktop)
```
┌──────────┬─────────────────────────────────────┐
│          │                                      │
│  📚 Home │                                      │
│  🔍 Search                                      │
│  📖 My Books │                                  │
│  ├ Want to Read │                               │
│  ├ Currently Reading │                          │
│  ├ Finished │                                   │
│  └ DNF │                                        │
│  📊 Dashboard │                                 │
│  🏆 Goals │                                     │
│  👥 Clubs │                                     │
│  🤖 AI │                                        │
│  📋 Collections │                               │
│  ⭐ Reviews │                                   │
│  ⚙️ Settings │                                   │
│          │                                      │
└──────────┴─────────────────────────────────────┘

Width:      240px (collapsed: 72px, icons only)
Background: White/Gray 950
Border:     1px solid Gray 200 right
Items:      Inter 500, 14px, Gray 600
Active:     Indigo 600, bg Indigo 50
```

### Bottom Navigation (Mobile)
```
┌──────────────────────────────────────────┐
│  🏠 Home  🔍 Search  📖 Books  📊 Me    │
└──────────────────────────────────────────┘

Height:     56px + safe area
Background: White (light) / Gray 950 (dark)
Border:     1px solid Gray 200 top
Items:      4 tabs max, icon + label
Active:     Indigo 600
Inactive:   Gray 400
```

### Breadcrumbs
```
Home  ›  Books  ›  Science Fiction  ›  Dune
Inter 400, 13px
Gray 400 (separator ›)
Gray 600 (links)
Gray 900 (current page)
```

---

## 5. Feedback Components

### Toast
```
┌──────────────────────────────────┐
│ ✅  Book added to "Want to Read" │
└──────────────────────────────────┘

Position: Top right (desktop), top center (mobile)
Width:    Auto, max 400px
Padding:  12px 16px
Radius:   8px
Shadow:   Elevation 5
Icon:     Status icon (checkmark, error, warning)
Text:     Inter 500, 14px
Duration: 4s auto-dismiss + manual close
Types:    Success (emerald), Error (rose), Info (sky), Warning (amber)
```

### Alert / Banner
```
┌──────────────────────────────────────────────────┐
│ ⚠️  You haven't logged reading in 3 days!        │
│    [Log Now]  [Dismiss]                          │
└──────────────────────────────────────────────────┘

Full width, inside page content
Padding:  12px 16px
Radius:   8px
Border:   1px solid status color
Types:    Info (blue bg), Warning (amber bg), Error (red bg)
```

### Modal / Dialog
```
┌──────────────────────────────────────┐
│  ┌────────────────────────────────┐  │
│  │ Title                          │  │
│  │                                │  │
│  │ Content body...                │  │
│  │                                │  │
│  │       [Cancel]  [Confirm]      │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

Overlay:    Black 50% opacity, backdrop-blur-sm
Width:      400px (mobile: 90vw)
Radius:     12px
Shadow:     Elevation 4
Background: White
Padding:    24px
Close:      X button top-right + Escape key
```

### Tooltip
```
┌──────────┐
│ Text     │
└──────────┘
    ▲
  [Icon]
  
Background: Gray 900
Text:       White, Inter 400, 12px
Padding:    4px 8px
Radius:     4px
Position:   Top (default), Bottom, Left, Right
Delay:      300ms show, 100ms hide
```

---

## 6. Additional Components

### Rating Stars
```
★★★★☆  (clickable for input)
★★★★☆  (display, with numeric: 4.2)

Size:     16px (inline), 20px (interactive), 24px (hero)
Colors:   Amber 500 filled, Gray 300 empty
Half:     Gradiented star for half-ratings
Input:    Hover highlights up to cursor, click to set
Animation: Bounce on click, scale on hover
```

### Progress Bar (Reading)
```
┌────────────────────────────────────────────┐
│  Dune                                 73%  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░        │
│  Page 438 of 600                 ⏱️ 2h left │
└────────────────────────────────────────────┘

Height:     6px (bar), rounded
Background: Gray 200
Fill:       Indigo 500 (or gradient)
Label:      Title left, percentage right
Detail:     Page count, estimated time remaining
```

### Badge / Tag
```
┌──────────┐
│ Fantasy  │
└──────────┘

Padding:    4px 8px
Radius:     4px
Font:       Inter 500, 12px
Background: Indigo 100 (light) / Indigo 900 (dark)
Text:       Indigo 700 (light) / Indigo 200 (dark)
Variants:   Genre, Mood, Pace, Content Warning, Spoiler
```

### Avatar
```
┌──────┐
│  👤  │
└──────┘

Sizes: 24px (inline), 32px (comments), 40px (navbar), 80px (profile)
Shape: Circle
Fallback: Initials on colored background (hash-based color)
Status: Optional online indicator dot (green 8px circle)
```

### Skeleton Loader
```
┌────────────────────┐
│  ┌──────────────┐  │
│  │ ████████████ │  │  (animated shimmer)
│  │ ████████████ │  │
│  └──────────────┘  │
│  ██████████████    │
│  ██████            │
└────────────────────┘

Background: Gray 200 with shimmer animation
Shape:      Matches the component being loaded
Animation:  Shimmer (gradient sweep left to right, 1.5s, infinite)
```

### Tabs
```
┌──────┬─────────┬───────┬──────┐
│ All  │ Reviews │ Stats │ More │
├──────┴─────────┴───────┴──────┤
│                                │
│  Tab content here…            │
│                                │
└────────────────────────────────┘

Border:     Gray 200 bottom (2px)
Active:     Indigo 600 text + Indigo 600 bottom border (2px)
Inactive:   Gray 500 text
Font:       Inter 500, 14px
Padding:    8px 16px, 12px bottom-margin
```

### Empty State
```
┌────────────────────────────────────┐
│                                    │
│         📖  (illustration)         │
│                                    │
│    No books in this shelf yet      │
│                                    │
│    Start building your library     │
│    by searching for a book.        │
│                                    │
│    ┌──────────────────────────┐    │
│    │    Search Books          │    │
│    └──────────────────────────┘    │
│                                    │
└────────────────────────────────────┘

Content:
  - Illustration (80px, centered)
  - Heading: Inter 600, 18px, Gray 900
  - Body: Inter 400, 14px, Gray 500
  - Action button
  - Padding: 48px top/bottom
```

### Floating Action Button (FAB)
```
    ┌──┐
    │+ │
    └──┘

Position: Bottom-right, above bottom nav
Size:     56px circle
Shadow:   Elevation 3
Color:    Indigo 600
Icon:     24px white
Action:   Quick-add book / log reading / new review
```
