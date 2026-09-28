# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About this project

Eliana Ferreira's personal resume, rendered as a single Next.js page (`app/page.tsx` → `components/resume/Resume.tsx`) styled to look like a printable, letter-sized document. Section layout follows `references/Engineering_Resume_Template_1_ee17338795.docx`. The accent color is `#0A4D68` (defined as the `--primary` token / Tailwind `primary` color in `app/globals.css`).

Two constraints shape most decisions here:

- **No HTTP requests.** All resume content is local, plain TypeScript data — no fetching, no CMS, no API routes.
- **Built for a future PDF export.** Export tooling isn't implemented yet, but layout/styling choices (fixed letter-size container, `@media print` rules, `print-color-adjust: exact`, avoiding client-only interactivity) are made with that in mind. Don't add features that would only work on-screen (e.g. hover-only content, animation-dependent layout) without considering the print path.

## Commands

- `npm run dev` — start the dev server (Turbopack, stable by default in Next.js 16)
- `npm run build` — production build (Turbopack by default)
- `npm run start` — run the production build
- `npm run lint` — ESLint via flat config (`eslint.config.mjs`); there is no `next lint` (removed in Next.js 16)

There is no test runner configured in this project.

## Architecture notes

- **Next.js 16.3.6 / React 19.2, App Router only** — routes live under `app/`. There is no `pages/` directory.
- Before writing App Router code, read the matching guide under `node_modules/next/dist/docs/01-app/` (see AGENTS.md above) — this version has breaking changes vs. training data, notably:
  - `params`/`searchParams` are async-only (no sync compat). Use the generated `PageProps<'/route'>` / `LayoutProps<'/route'>` / `RouteContext` helpers (see `app/layout.tsx`'s `LayoutProps<"/">` for the pattern already in use) instead of hand-written prop types.
  - A `middleware.ts` file/export is deprecated in favor of `proxy.ts` / a `proxy` export.
  - `next.config.ts` uses a top-level `turbopack` key (not `experimental.turbopack`).
- Styling is Tailwind CSS v4 via `@import "tailwindcss"` and `@theme inline` in `app/globals.css` (no `tailwind.config.js` — v4 is CSS-first config). Design tokens (`--background`, `--foreground`, `--primary`, fonts) are defined there, along with the `@media print` block.
- Fonts are loaded via `next/font/google` (Geist Sans/Mono) in `app/layout.tsx` and exposed as CSS variables consumed by the Tailwind theme. This self-hosts the fonts at build time — no runtime font requests.
- Path alias `@/*` maps to the repo root (`tsconfig.json`).

### Resume section pattern

`components/resume/Resume.tsx` composes the sections into a two-column print layout: a `bg-primary` sidebar (Skills, Certifications) and a main column (Summary, Experience, Education), under a shared `Header`.

Each section under `components/resume/sections/<section>/` follows the same three-file split:

- `data.ts` — the actual resume content. This is the file to edit when updating the resume; it has no logic.
- `types.ts` — the TypeScript interface(s) `data.ts` is checked against.
- `<Section>.tsx` — a server component that imports its own `data.ts` and renders it; no props are passed in from `Resume.tsx`.

`SectionHeading` (`components/resume/SectionHeading.tsx`) is the one shared component, used by every section for its heading; it takes a `variant="inverted"` prop for sections rendered on the dark sidebar.

`experience/` is the deepest section: `ExperienceData` is `Company[]`, each company has `roles: Role[]` (to represent promotions within the same company), and each role has `projects: Project[]`, each with its own `responsibilities: string[]`. When extending other sections, prefer following this shape-in-`types.ts` / content-in-`data.ts` split rather than inlining content in JSX.
