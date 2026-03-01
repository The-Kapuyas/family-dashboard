# Family Dashboard

## What is this?
A shared family dashboard web app with widgets (grocery list, creative picker, and more to come). Built collaboratively by the family using Claude Code.

## Tech stack
- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 — all inline utility classes, no CSS modules
- **Database**: Supabase (PostgreSQL + realtime subscriptions)
- **Hosting**: Vercel
- **Path alias**: `@/*` maps to `./src/*`

## Project structure
```
src/
  app/          — Pages and layouts (Next.js App Router)
  components/   — React components (one per file, "use client" when needed)
  lib/          — Shared utilities (e.g., supabase client)
```

## How to add a new widget
1. Create a new component in `src/components/YourWidget.tsx`
2. Add `"use client";` at the top if it uses hooks or browser APIs
3. Import and add it to `src/app/page.tsx` inside the `<main>` tag
4. Match the existing card style: `bg-white rounded-xl shadow p-6`
5. Use blue as the accent color (`bg-blue-500`, `text-blue-500`)

## Coding conventions
- Components are default-exported and named in PascalCase
- Use Tailwind classes for all styling — no inline styles or CSS files
- After every mutation to Supabase, call `fetchItems()` (or equivalent) to refresh the UI
- Keep components simple — one file per widget, no unnecessary abstractions

## Common commands
- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — build for production
- `npm run lint` — run ESLint

## Environment variables
Copy `.env.example` to `.env.local` and fill in the values. Never commit `.env.local`.
