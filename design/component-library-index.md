# UI Component Library — Index

---

This document catalogs every reusable UI component in the Novelle design system, organized by category.

---

## 1. Buttons (5 variants × 3 sizes × N states)

| Component | File | Variants |
|---|---|---|
| Button | `components/ui/button.tsx` | Primary, Secondary, Ghost, Outline, Danger |
| IconButton | `components/ui/icon-button.tsx` | Rounded, Circular, With badge |
| ButtonGroup | `components/ui/button-group.tsx` | Horizontal, Vertical |
| FAB | `components/ui/fab.tsx` | Single action, Speed dial |

### States per variant
Default, Hover, Active, Focus, Disabled, Loading

---

## 2. Inputs (6 components)

| Component | File | Description |
|---|---|---|
| TextField | `components/ui/text-field.tsx` | With label, helper, error states |
| SearchBar | `components/ui/search-bar.tsx` | Expandable, with filters |
| PasswordField | `components/ui/password-field.tsx` | Toggle visibility |
| TextArea | `components/ui/textarea.tsx` | Resize vertical, char count |
| Select | `components/ui/select.tsx` | Native enhanced |
| FileUpload | `components/ui/file-upload.tsx` | Image upload with preview |

---

## 3. Cards (7 components)

| Component | File | Description |
|---|---|---|
| BookCard | `components/ui/book-card.tsx` | Cover, title, author, rating |
| ReviewCard | `components/ui/review-card.tsx` | Avatar, rating, text, actions |
| AuthorCard | `components/ui/author-card.tsx` | Photo, name, book count |
| CollectionCard | `components/ui/collection-card.tsx` | Gradient accent, icon, count |
| GoalCard | `components/ui/goal-card.tsx` | Progress bar, target, status |
| ClubCard | `components/ui/club-card.tsx` | Name, members, current book |
| StatCard | `components/ui/stat-card.tsx` | Icon, number, label |

---

## 4. Navigation (5 components)

| Component | File | Description |
|---|---|---|
| Navbar | `components/ui/navbar.tsx` | Top navigation bar |
| Sidebar | `components/ui/sidebar.tsx` | Desktop sidebar, collapsible |
| BottomNav | `components/ui/bottom-nav.tsx` | Mobile bottom tabs |
| Breadcrumbs | `components/ui/breadcrumbs.tsx` | Page hierarchy |
| Tabs | `components/ui/tabs.tsx` | Horizontal tab navigation |

---

## 5. Feedback (5 components)

| Component | File | Description |
|---|---|---|
| Toast | `components/ui/toast.tsx` | Auto-dismiss notifications |
| Alert | `components/ui/alert.tsx` | Inline status banners |
| Modal | `components/ui/modal.tsx` | Dialog overlay |
| Tooltip | `components/ui/tooltip.tsx` | Hover info |
| ProgressBar | `components/ui/progress-bar.tsx` | Reading progress (linear) |

---

## 6. Data Display (9 components)

| Component | File | Description |
|---|---|---|
| Avatar | `components/ui/avatar.tsx` | User photo/initials |
| Badge | `components/ui/badge.tsx` | Genre, mood, content tags |
| RatingStars | `components/ui/rating-stars.tsx` | Display & input |
| RatingDistribution | `components/ui/rating-distribution.tsx` | Bar chart of ratings |
| Heatmap | `components/ui/heatmap.tsx` | Reading calendar heatmap |
| Statistics | `components/ui/statistics.tsx` | Dashboard stat row |
| Chip | `components/ui/chip.tsx` | Filter chips |
| Divider | `components/ui/divider.tsx` | Section separator |
| SpoilerTag | `components/ui/spoiler-tag.tsx` | Blur overlay, click to reveal |

---

## 7. Layout (8 components)

| Component | File | Description |
|---|---|---|
| Container | `components/ui/container.tsx` | Max-width wrapper |
| Grid | `components/ui/grid.tsx` | Responsive grid system |
| Stack | `components/ui/stack.tsx` | Flex column/row spacer |
| Card | `components/ui/card.tsx` | Base card wrapper |
| Section | `components/ui/section.tsx` | Page section with header |
| PageHeader | `components/ui/page-header.tsx` | Page title + actions |
| EmptyState | `components/ui/empty-state.tsx` | Illustration + text + CTA |
| Skeleton | `components/ui/skeleton.tsx` | Loading placeholder |

---

## 8. Lists (3 components)

| Component | File | Description |
|---|---|---|
| ActivityFeed | `components/ui/activity-feed.tsx` | Social activity timeline |
| ReviewList | `components/ui/review-list.tsx` | Paginated reviews |
| ShelfList | `components/ui/shelf-list.tsx` | Bookshelf grid |

---

## 9. Charts & Data Viz (6 components)

| Component | File | Description |
|---|---|---|
| BarChart | `components/ui/bar-chart.tsx` | Genres, monthly books |
| PieChart | `components/ui/pie-chart.tsx` | Mood breakdown |
| LineChart | `components/ui/line-chart.tsx` | Reading over time |
| StreakIndicator | `components/ui/streak-indicator.tsx` | Fire icon + days |
| Calendar | `components/ui/calendar.tsx` | Reading calendar |
| YearInReview | `components/ui/year-in-review.tsx` | Annual wrap-up |

---

## 10. Social (5 components)

| Component | File | Description |
|---|---|---|
| FollowButton | `components/ui/follow-button.tsx` | Follow/Following toggle |
| LikeButton | `components/ui/like-button.tsx` | Heart with count |
| ShareButton | `components/ui/share-button.tsx` | Share sheet trigger |
| CommentSection | `components/ui/comment-section.tsx` | Threaded comments |
| ActivityItem | `components/ui/activity-item.tsx` | Single feed item |

---

## 11. Book Club (6 components)

| Component | File | Description |
|---|---|---|
| ClubCard | `components/ui/club-card.tsx` | Club preview card |
| ChatBubble | `components/ui/chat-bubble.tsx` | Chat message |
| PollCard | `components/ui/poll-card.tsx` | Voting poll |
| ReadingSchedule | `components/ui/reading-schedule.tsx` | Timeline of picks |
| MemberList | `components/ui/member-list.tsx` | Member avatars grid |
| InviteModal | `components/ui/invite-modal.tsx` | Invite members dialog |

---

## 12. AI (3 components)

| Component | File | Description |
|---|---|---|
| ChatInterface | `components/ui/chat-interface.tsx` | Full AI chat UI |
| QuickActions | `components/ui/quick-actions.tsx` | Suggestion chips |
| SummarizeCard | `components/ui/summarize-card.tsx` | AI summary display |

---

## 13. Onboarding (4 components)

| Component | File | Description |
|---|---|---|
| GenrePicker | `components/ui/genre-picker.tsx` | Visual genre selection |
| MoodSelector | `components/ui/mood-selector.tsx` | Reading mood preferences |
| ImportPrompt | `components/ui/import-prompt.tsx` | Goodreads import CTA |
| OnboardingProgress | `components/ui/onboarding-progress.tsx` | Step indicator |

---

## Component Tree (Page-Level Composition)

```
Page
├── PageHeader
│   ├── Breadcrumbs
│   └── Actions (buttons)
├── Container
│   ├── Section
│   │   ├── SectionHeader (title + "See All")
│   │   └── Grid
│   │       └── BookCard × N
│   ├── Section
│   │   ├── SectionHeader
│   │   └── Stack
│   │       └── ActivityFeed
│   │           └── ActivityItem × N
│   └── Section
│       └── Skeleton (loading state)
└── Footer (minimal)
```
