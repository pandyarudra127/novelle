# Project Setup Guide

## Prerequisites

- Node.js v20+ 
- npm
- MongoDB (local or Atlas)

## Installation

```bash
# Install all dependencies
npm install              # root (concurrently)
npm install --prefix client
npm install --prefix server

# Or use the shortcut
npm run install:all
```

## Development

```bash
# Run both client and server
npm run dev

# Run individually
npm run dev:client    # → http://localhost:3000
npm run dev:server    # → http://localhost:5000
```

## Build

```bash
npm run build
```

## Environment Variables

### Client (`client/.env`)
```
VITE_API_URL=/api
VITE_APP_NAME=Novelle
VITE_ENV=development
```

### Server (`server/.env`)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/novelle
JWT_SECRET=your-secret
JWT_EXPIRES=7d
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

## Folder Structure

```
novelle/
├── client/                    # React + TypeScript + Vite + Tailwind
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   └── layout/        # Navbar, Sidebar, Layout
│   │   ├── lib/               # API client, utilities
│   │   ├── pages/             # Route pages
│   │   ├── App.tsx            # Root component with routes
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Tailwind imports + theme
│   ├── .env.example
│   ├── vite.config.ts
│   └── tsconfig*.json
│
├── server/                    # Express + TypeScript
│   ├── src/
│   │   ├── config/            # env, database
│   │   ├── controllers/       # Route handlers
│   │   ├── middleware/         # Auth, error handling
│   │   ├── models/            # Mongoose schemas
│   │   ├── routes/            # API route definitions
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Helpers
│   │   ├── validators/        # Request validation
│   │   └── index.ts           # Server entry point
│   ├── .env.example
│   └── tsconfig.json
│
├── docs/                      # All documentation
├── design/                    # Design system, mockups
├── database/                  # Migrations, seeds
├── api/                       # API contracts
├── assets/                    # Images, fonts
├── scripts/                   # Build/deploy scripts
├── docker/                    # Dockerfiles
├── .github/                   # CI, issue templates
├── docker-compose.yml
└── package.json               # Root workspace scripts
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Run client + server concurrently |
| `npm run dev:client` | Run frontend only |
| `npm run dev:server` | Run backend only |
| `npm run build` | Build both client and server |
| `npm run lint` | Type-check both projects |
| `npm run install:all` | Install dependencies in both |

## API Endpoints (Initial)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check with DB status |

## Git Workflow

- `main` — Production-ready code
- `develop` — Integration branch
- `feature/<name>` — New features
- `bugfix/<name>` — Bug fixes
- `hotfix/<name>` — Urgent production fixes

### Commit Convention

```
feat: new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructure
test: tests
chore: maintenance
```
