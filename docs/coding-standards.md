# Coding Standards

## General Principles
- Write code for humans first, machines second
- Favor readability over cleverness
- Every file should have a single responsibility
- DRY (Don't Repeat Yourself) but don't over-abstract
- No warnings, no lint errors, no type errors

## Naming Conventions

### Frontend (TypeScript/React)
- **Components**: PascalCase (`BookCard.tsx`, `ReadingShelf.tsx`)
- **Hooks**: camelCase with `use` prefix (`useBookSearch`, `useAuth`)
- **Utilities**: camelCase (`formatDate`, `calculateReadingTime`)
- **Types/Interfaces**: PascalCase (`Book`, `UserProfile`, `ReviewData`)
- **Files**: Match the export name (`BookCard.tsx` exports `BookCard`)
- **CSS Modules**: `ComponentName.module.css`
- **Pages**: kebab-case for routes (`book-details.tsx`, `reading-goals.tsx`)

### Backend (TypeScript/Node.js)
- **Files**: camelCase (`bookService.ts`, `authController.ts`)
- **Classes**: PascalCase (`BookService`, `AuthController`)
- **Functions**: camelCase (`getBookById`, `createReview`)
- **Database models**: PascalCase, singular (`Book`, `User`, `Review`)
- **Database columns**: snake_case (`created_at`, `updated_at`, `book_id`)
- **API routes**: kebab-case (`/api/books/:id`, `/api/users/:id/reviews`)

### Database
- **Tables**: snake_case, plural (`books`, `reading_shelves`, `user_follows`)
- **Columns**: snake_case (`title`, `page_count`, `publication_date`)
- **Indexes**: `idx_table_column`
- **Foreign keys**: `fk_table_column`

## Code Style
- 2 spaces indentation (frontend and backend)
- Semicolons required
- Single quotes preferred over double quotes
- Trailing commas in multiline objects/arrays
- 100 character line limit
- Explicit return types on all functions
- JSDoc comments for public APIs

## Testing Standards
- Unit tests for pure logic (utils, helpers, hooks)
- Integration tests for API endpoints
- Component tests for UI elements
- E2E tests for critical user flows
- Test files co-located with source files: `ComponentName.test.tsx`
- Minimum 80% code coverage

## Accessibility
- All images must have alt text
- All forms must have labels
- Color contrast must meet WCAG AA standards
- Keyboard navigation must work for all features
- ARIA labels where semantic HTML is insufficient

## Security
- Never trust user input — validate and sanitize
- Use parameterized queries for all database operations
- Hash passwords (bcrypt)
- Rate limit all API endpoints
- CORS configured per environment
- Environment variables for secrets (never in code)
- Regular dependency audits
