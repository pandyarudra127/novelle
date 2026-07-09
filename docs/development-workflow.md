# Development Workflow

## Git Workflow

We follow a simplified Git Flow with `main` and `develop` branches.

### Branches
- **main** — Production-ready code. Every merge is a deployable release.
- **develop** — Integration branch for feature work.
- **feature/<name>** — Individual feature branches, branched from `develop`.
- **fix/<name>** — Bug fix branches.
- **release/v<version>** — Release preparation branches.

### Process
1. Create a feature branch from `develop`: `git checkout -b feature/add-book-search`
2. Make changes, commit regularly with descriptive messages
3. Open a pull request to `develop`
4. At least one review required before merging
5. Squash-merge into `develop`
6. When ready for release, create `release/vX.Y.Z` from `develop`
7. After testing, merge to `main` and tag the release

### Commit Message Convention
```
<type>(<scope>): <description>

Types: feat, fix, chore, docs, style, refactor, test, perf
Scopes: auth, books, shelves, reviews, social, ai, api, ui

Examples:
feat(auth): add Google OAuth login
fix(shelves): correct shelf count after removing book
docs(api): update endpoint documentation
```

## Code Review Guidelines
- All code must be reviewed before merging
- Automated checks (lint, typecheck, tests) must pass
- No dead code, commented-out code, or console.logs
- New features must include tests
- UI changes should include screenshots in the PR

## Release Process
- Semantic versioning (MAJOR.MINOR.PATCH)
- Changelog maintained in `CHANGELOG.md`
- Release notes written for each version
- Staging deployment before production
- Production merges are tagged and released
