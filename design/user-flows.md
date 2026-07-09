# User Flow Diagrams

---

## Flow 1: User Registration

```
Landing Page
     │
     ▼
  [Sign Up] button
     │
     ▼
  ┌─────────────────────┐
  │  Register Form       │
  │                      │
  │  Name                │
  │  Email               │
  │  Password            │
  │  [Sign Up]           │
  │                      │
  │  ── or continue ──   │
  │  [Continue w/ Google]│
  │  [Continue w/ Apple] │
  └─────────────────────┘
     │
     ├─── Google OAuth ──► Consent screen ──► Redirect
     ├─── Apple OAuth  ──► Consent screen ──► Redirect
     └─── Email flow ───► Send verification email
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ Verify Email     │
                         │ (click link)     │
                         └─────────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ Onboarding       │
                         │ (1/3)            │
                         │ Pick your        │
                         │ favorite genres  │
                         └─────────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ Onboarding       │
                         │ (2/3)            │
                         │ Select reading   │
                         │ pace/mood pref   │
                         └─────────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ Onboarding       │
                         │ (3/3)            │
                         │ Import from      │
                         │ Goodreads?       │
                         │ [Yes]  [Skip]    │
                         └─────────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  Home Dashboard  │
                         └─────────────────┘
```

---

## Flow 2: Book Discovery → Add to Shelf

```
Home / Search
     │
     ▼
  [Search Bar] — type title/author
     │
     ▼
  Search Results
  ┌─────────────────────────────┐
  │  [Book Card]  [Book Card]   │
  │  [Book Card]  [Book Card]   │
  └─────────────────────────────┘
     │
     ├── Click Book Card
     │       │
     │       ▼
     │  ┌─────────────────────┐
     │  │  Book Detail Page    │
     │  │                     │
     │  │  Cover  Title       │
     │  │  Author ★★★★☆      │
     │  │                     │
     │  │  ┌───────────────┐  │
     │  │  │ ▼ Want to Read│  │
     │  │  └───────────────┘  │
     │  │                     │
     │  │  Description...     │
     │  │  Reviews...         │
     │  └─────────────────────┘
     │          │
     │          ▼
     │    Shelf Dropdown
     │    ┌──────────────────┐
     │    │  Want to Read    │
     │    │  Currently Reading│
     │    │  Finished        │
     │    │  Did Not Finish  │
     │    │  ─────────────   │
     │    │  + New Shelf     │
     │    └──────────────────┘
     │          │
     │          ▼
     │    ┌──────────────────────┐
     │    │ Toast: "Added to     │
     │    │ Want to Read"        │
     │    └──────────────────────┘
     │
     └── Alternative: Browse Discover page
              │
              ▼
         ┌─────────────────────┐
         │  Discover            │
         │  - Trending          │
         │  - New Releases      │
         │  - Mood-Based        │
         │  - Genre Browse      │
         └─────────────────────┘
```

---

## Flow 3: Update Reading Progress

```
Dashboard / Currently Reading
     │
     ▼
  ┌─────────────────────────────────┐
  │  Currently Reading Card         │
  │                                 │
  │  [Cover]  Dune — Frank Herbert  │
  │  ▓▓▓▓▓▓▓░░░░░░░░░░░  36%       │
  │  Page 218 of 600                │
  │                                 │
  │  [Log Progress]  [View Details] │
  └─────────────────────────────────┘
     │
     ├── [Log Progress]
     │       │
     │       ▼
     │  ┌──────────────────────┐
     │  │  Update Progress     │
     │  │                      │
     │  │  Current page: [218] │
     │  │                      │
     │  │  Time read: [00:45]  │
     │  │                      │
     │  │  Notes (optional):   │
     │  │  ┌────────────────┐  │
     │  │  │ Started the 3rd │  │
     │  │  │ part today...   │  │
     │  │  └────────────────┘  │
     │  │                      │
     │  │  [Save Progress]     │
     │  └──────────────────────┘
     │           │
     │           ▼
     │     ┌────────────────────┐
     │     │ Updated!           │
     │     │ 36% → 52%          │
     │     │ "3h 24m left"      │
     │     └────────────────────┘
     │
     └── [View Details]
              │
              ▼
         ┌─────────────────────────┐
         │  Reading Session Log    │
         │                         │
         │  Date        Pages  Time│
         │  Jul 9        32    45m │
         │  Jul 8        28    38m │
         │  Jul 7        45    1h  │
         │  Jul 5        18    25m │
         └─────────────────────────┘
```

---

## Flow 4: Write a Review

```
Book Detail Page
     │
     ▼
  Scroll to Reviews Section
     │
     ▼
  ┌─────────────────────────────┐
  │  Your Review                │
  │  ┌──────────────────────┐   │
  │  │  Tap to rate: ★★★★★   │   │
  │  └──────────────────────┘   │
  │  [Write a Review]           │
  └─────────────────────────────┘
     │
     ▼
  ┌──────────────────────────────────┐
  │  Write Review                    │
  │                                  │
  │  Your rating: ★★★★☆  3.5        │
  │                                  │
  │  ┌────────────────────────────┐  │
  │  │ Write your review…        │  │
  │  │ (min 10 chars)            │  │
  │  └────────────────────────────┘  │
  │                                  │
  │  [Add images (up to 5)]         │
  │                                  │
  │  □ Contains spoilers            │
  │                                  │
  │  [Publish Review]  [Cancel]     │
  └──────────────────────────────────┘
     │
     ▼
  ┌──────────────────────┐
  │ Toast: "Review       │
  │ published!"          │
  └──────────────────────┘
     │
     ▼
  Scroll to My Review (now at top)
```

---

## Flow 5: AI Book Chat

```
Book Detail Page
     │
     ▼
  [🤖 Ask AI] button
     │
     ▼
  ┌────────────────────────────────────┐
  │  AI Chat — "Dune"                   │
  │                                    │
  │  ┌────────────────────────────┐    │
  │  │ How can I help with        │    │
  │  │ Dune? I've read up to      │    │
  │  │ page 218. I won't spoil    │    │
  │  │ beyond that point.         │    │
  │  └────────────────────────────┘    │
  │                                    │
  │  ┌────────────────────────────┐    │
  │  │ What is the Bene           │    │
  │  │ Gesserit's goal?           │    │
  │  └────────────────────────────┘    │
  │                                    │
  │  ┌────────────────────────────┐    │
  │  │ Great question! The Bene   │    │
  │  │ Gesserit are a secret      │    │
  │  │ sisterhood that has been   │    │
  │  │ secretly manipulating      │    │
  │  │ bloodlines for centuries   │    │
  │  │ to breed a superhuman      │    │
  │  │ they call the Kwisatz      │    │
  │  │ Haderach…                  │    │
  │  └────────────────────────────┘    │
  │                                    │
  │  [Type a message...]  [Send]       │
  │                                    │
  │  [💬 Discussion Questions]         │
  │  [📝 Quiz Me]                      │
  │  [📋 Summary]                      │
  └────────────────────────────────────┘
     │
     ▼
  Suggested quick-actions:
  ┌────────────────────────────────────┐
  │  • "What happened in Chapter 12?"  │
  │  • "Explain the political system"  │
  │  • "Who is the protagonist?"       │
  │  • "Compare Paul to his father"    │
  └────────────────────────────────────┘
```

---

## Flow 6: Book Club — Create & Invite

```
Clubs → My Clubs
     │
     ▼
  ┌─────────────────────┐
  │  [Create a Club]    │
  └─────────────────────┘
     │
     ▼
  ┌──────────────────────────────┐
  │  Create Book Club           │
  │                             │
  │  Club name: [___________]  │
  │  Description: [________]   │
  │                             │
  │  ○ Public  ● Private       │
  │                             │
  │  Max members: [▼ 20]       │
  │                             │
  │  Pick first book: [Search] │
  │                             │
  │  Reading schedule:         │
  │  ┌──────────────────────┐  │
  │  │  4 weeks per book    │  │
  │  │  Start: Jul 14       │  │
  │  └──────────────────────┘  │
  │                             │
  │  [Create Club]             │
  └──────────────────────────────┘
     │
     ▼
  ┌──────────────────────────────┐
  │  Club Created! 🎉            │
  │                             │
  │  Invite members:            │
  │                             │
  │  [Search friends to invite] │
  │  ┌──────────────────────┐   │
  │  │ Copy invite link     │   │
  │  └──────────────────────┘   │
  │                             │
  │  [Go to Club Page]         │
  └──────────────────────────────┘
```

---

## Flow 7: Reading Goals & Streaks

```
Dashboard → Goals
     │
     ▼
  ┌──────────────────────────────────┐
  │  Reading Goals                   │
  │                                  │
  │  2026 Goal: 52 books             │
  │  ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░  38%    │
  │  20/52 books read                │
  │                                  │
  │  ┌───┬───┬───┬───┬───┬───┬───┐  │
  │  │M  │T  │W  │T  │F  │S  │S  │  │
  │  ├───┼───┼───┼───┼───┼───┼───┤  │
  │  │ ✦ │ ✦ │ ✦ │ • │ ✦ │ ✦ │ ✦ │  │
  │  └───┴───┴───┴───┴───┴───┴───┘  │
  │  6-day streak 🔥                 │
  │                                  │
  │  [Edit Goals]  [View Analytics]  │
  └──────────────────────────────────┘
     │
     ├── [Edit Goals]
     │       │
     │       ▼
     │   ┌─────────────────────────┐
     │   │  Annual Goal: [52] books│
     │   │  Monthly: [4] books     │
     │   │  Daily: [25] pages      │
     │   │  Weekly: [7] hours      │
     │   │                         │
     │   │  [Save]                 │
     │   └─────────────────────────┘
     │
     └── [View Analytics]
              │
              ▼
         Analytics Dashboard (see Flow 8)
```

---

## Flow 8: Analytics Dashboard

```
Dashboard → Analytics
     │
     ▼
  ┌─────────────────────────────────────┐
  │  Reading Analytics — 2026           │
  │                                     │
  │  ┌──────┬──────┬──────┬──────┐     │
  │  │ 20   │ 6,843│ 42   │ 4.2  │     │
  │  │Books │Pages │Hours │Avg ★ │     │
  │  └──────┴──────┴──────┴──────┘     │
  │                                     │
  │  Reading Streak: 🔥 12 days         │
  │  Best Streak: 🔥 24 days            │
  │                                     │
  │  Reading Calendar (Heatmap)         │
  │  ┌───┬───┬───┬───┬───┬───┬───┐    │
  │  │   │   │ █ │ █ │ █ │   │ █  │    │
  │  │ █ │ █ │ █ │ █ │ █ │ █ │ █  │    │
  │  │ █ │ █ │   │   │ █ │ █ │ █  │    │
  │  │ █ │   │ █ │ █ │ █ │ █ │ █  │    │
  │  └───┴───┴───┴───┴───┴───┴───┘    │
  │                                     │
  │  Genres                             │
  │  ▓▓▓▓▓▓▓▓▓▓░░░░  Sci-Fi (8)       │
  │  ▓▓▓▓▓▓░░░░░░░░  Fantasy (5)      │
  │  ▓▓▓▓░░░░░░░░░░  Lit Fiction (3)  │
  │  ▓▓░░░░░░░░░░░░  Romance (2)      │
  │                                     │
  │  Mood Breakdown                    │
  │  Dark ▓▓▓▓  |  Emotional ▓▓▓      │
  │  Funny ▓    |  Suspenseful ▓▓     │
  │                                     │
  │  [Year] [Month] [Custom] ▼         │
  └─────────────────────────────────────┘
```

---

## Flow 9: Forgot Password

```
Login Page
     │
     ▼
  [Forgot Password?] link
     │
     ▼
  ┌────────────────────────────┐
  │  Reset Password            │
  │                            │
  │  Enter your email address  │
  │  ┌────────────────────┐    │
  │  │ email@example.com  │    │
  │  └────────────────────┘    │
  │                            │
  │  [Send Reset Link]         │
  └────────────────────────────┘
     │
     ▼
  ┌────────────────────────────┐
  │  ✓ Check your email        │
  │                            │
  │  We've sent a password     │
  │  reset link to             │
  │  email@example.com         │
  │                            │
  │  [Back to Login]           │
  └────────────────────────────┘
     │
     ▼ (user clicks email link)
     │
  ┌────────────────────────────┐
  │  Set New Password          │
  │                            │
  │  New password: [______]   │
  │  Confirm:       [______]  │
  │                            │
  │  [Reset Password]          │
  └────────────────────────────┘
     │
     ▼
  ┌────────────────────────────┐
  │  ✓ Password reset!         │
  │  You can now log in with   │
  │  your new password.        │
  │                            │
  │  [Log In]                  │
  └────────────────────────────┘
```

---

## Flow 10: Social — Follow & Activity Feed

```
Search User
     │
     ▼
  User Profile: @emma_reads
  ┌──────────────────────────────────┐
  │  [Avatar] Emma Chen             │
  │  42 books this year             │
  │  ★ Avg rating: 4.1              │
  │                                  │
  │  [Follow] (unfollow state)      │
  │                                  │
  │  Shelves | Reviews | Stats      │
  └──────────────────────────────────┘
     │
     ▼  tap [Follow]
     │
  ┌──────────────────────────────────┐
  │  Toast: "Following Emma"        │
  │  Button changes to [Following]  │
  └──────────────────────────────────┘
     │
     ▼ (go to Home Feed)
     │
  ┌──────────────────────────────────┐
  │  Activity Feed                   │
  │                                  │
  │  ┌──────────────────────────┐   │
  │  │ Emma rated "Project       │   │
  │  │ Hail Mary" ★★★★☆         │   │
  │  │ "This book is incredible!  │   │
  │  │ The humor, the science…"   │   │
  │  │ 2h ago   [❤️ 5]  [💬 2]    │   │
  │  └──────────────────────────┘   │
  │                                  │
  │  ┌──────────────────────────┐   │
  │  │ John finished "The Name  │   │
  │  │ of the Wind"             │   │
  │  │ ★★★★★                    │   │
  │  │ "A masterpiece of modern  │   │
  │  │ fantasy"                 │   │
  │  │ 5h ago   [❤️ 12] [💬 3]   │   │
  │  └──────────────────────────┘   │
  │                                  │
  │  ┌──────────────────────────┐   │
  │  │ Sarah is reading "The    │   │
  │  │ Priory of the Orange     │   │
  │  │ Tree" (page 234/800)     │   │
  │  │ 1d ago                   │   │
  │  └──────────────────────────┘   │
  └──────────────────────────────────┘
```
