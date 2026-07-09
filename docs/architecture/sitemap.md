# Information Architecture — Sitemap

```
novelle.app/
│
├── /                              # Home / Landing Page
│   ├── Hero section
│   ├── Trending books
│   ├── Recommended for you
│   ├── New releases
│   └── Activity feed (following)
│
├── /auth                          # Authentication
│   ├── /login                     # Login page
│   ├── /register                  # Register page
│   ├── /forgot-password           # Password reset
│   ├── /verify-email              # Email verification
│   └── /two-factor                # 2FA
│
├── /search                        # Search
│   ├── ?q=query                   # Search results
│   ├── /books                     # Book results
│   ├── /authors                   # Author results
│   ├── /users                     # User results
│   ├── /genres                    # Genre results
│   └── /filters                   # Filter panel (genre, year, lang, etc.)
│
├── /books                         # Book browsing
│   ├── /trending                  # Trending books
│   ├── /new-releases              # New releases
│   ├── /award-winning             # Award-winning
│   ├── /genre/:slug               # Books by genre
│   ├── /language/:code            # Books by language
│   └── /year/:year                # Books by publication year
│
├── /book/:id                      # Book Detail Page
│   ├── /overview                  # Cover, title, author, description
│   ├── /reviews                   # All reviews
│   ├── /ratings                   # Rating distribution
│   ├── /quotes                    # User quotes from this book
│   ├── /editions                  # Different editions
│   ├── /similar                   # Similar books
│   ├── /characters                # Characters
│   └── /ai-chat                   # AI book chat (inline)
│
├── /author/:id                    # Author Page
│   ├── /books                     # Author's books
│   ├── /about                     # Author bio
│   ├── /qa                        # Q&A (if verified)
│   └── /announcements             # Announcements (if verified)
│
├── /profile/:username             # User Profile
│   ├── /shelves                   # User's shelves
│   │   ├── /want-to-read
│   │   ├── /currently-reading
│   │   ├── /finished
│   │   ├── /did-not-finish
│   │   └── /:custom-shelf
│   ├── /reviews                   # User's reviews
│   ├── /ratings                   # User's ratings
│   ├── /goals                     # User's reading goals
│   ├── /stats                     # User's reading stats
│   ├── /collections               # User's collections
│   ├── /following                 # Who user follows
│   └── /followers                 # User's followers
│
├── /dashboard                     # Personal Dashboard
│   ├── /overview                  # Books read, pages, streak
│   ├── /analytics                 # Full stats dashboard
│   │   ├── /genres                # Genre breakdown
│   │   ├── /timeline              # Reading timeline
│   │   ├── /heatmap               # Reading heatmap
│   │   ├── /streaks               # Streak tracking
│   │   └── /year-in-review        # Yearly wrap
│   ├── /goals                     # Reading goals manager
│   │   ├── /annual                # Annual goal
│   │   ├── /monthly               # Monthly goal
│   │   ├── /weekly                # Weekly goal
│   │   └── /daily                 # Daily goal
│   ├── /progress                  # Currently reading progress
│   └── /collections               # My collections
│
│
├── /clubs                         # Book Clubs
│   ├── /discover                  # Discover clubs
│   ├── /create                    # Create a club
│   ├── /my                        # My clubs
│   └── /:clubId                   # Club page
│       ├── /about                 # Club info
│       ├── /members               # Members list
│       ├── /chat                  # Club chat
│       ├── /schedule              # Reading schedule
│       ├── /polls                 # Polls & voting
│       ├── /picks                 # Monthly picks
│       └── /events                # Events
│
├── /ai                            # AI Features
│   ├── /recommendations           # AI recommendations
│   ├── /coach                     # AI reading coach
│   ├── /chat/:bookId              # AI book chat
│   ├── /compare                   # Compare books
│   └── /summaries                 # Book summaries
│
├── /notifications                 # Notifications
│
├── /settings                      # Settings
│   ├── /profile                   # Edit profile
│   ├── /account                   # Account settings
│   ├── /privacy                   # Privacy settings
│   ├── /preferences               # Reading preferences
│   ├── /notifications             # Notification preferences
│   ├── /appearance                # Theme, dark mode, font size
│   ├── /accessibility             # Accessibility settings
│   ├── /import                    # Import data
│   └── /export                    # Export data
│
├── /achievements                  # Achievements & badges
│
├── /community                     # Community
│   ├── /trending-reviews          # Trending reviews
│   ├── /top-readers               # Top readers
│   ├── /challenges                # Reading challenges
│   └── /polls                     # Community polls
│
├── /marketplace                   # Marketplace (optional/v3+)
│   ├── /buy                       # Buy books
│   ├── /compare-prices            # Price comparison
│   ├── /wishlist                  # Book wishlist
│   └── /local                     # Local bookstores
│
└── /admin                         # Admin Dashboard
    ├── /users                     # Manage users
    ├── /books                     # Manage books
    ├── /reviews                   # Moderate reviews
    ├── /reports                   # Moderate reports
    ├── /analytics                 # Platform analytics
    └── /featured                  # Featured books
```

## Navigation Structure

### Primary Navigation (Top Bar)
- Logo / Home
- Search (always visible)
- Explore (Books, Authors, Genres)
- My Books (Shelves)
- Clubs
- Community
- AI
- Profile
- Notifications (bell icon)
- Settings

### Secondary Navigation (Sidebar on Desktop, Bottom Nav on Mobile)
- Home
- Search
- My Books
- Dashboard
- Clubs
- Profile

### Footer
- About
- Privacy Policy
- Terms of Service
- Contact
- API
- Status
