# Project Overview


A Next.js site optimised for SEO. Pages are pre-rendered to static HTML at build time.


---


# Agent Instructions (Gemini)


This file is loaded as project context for Gemini. Treat every rule below as binding, not as a suggestion.

- Follow instructions literally. Do not infer extra work, refactors, or "improvements" that were not requested.
- Do not skip steps to be faster. Reading the required files and running the build are mandatory, even for small changes.
- If a rule conflicts with a user request, stop and ask before proceeding.
- Never claim a task is complete without having run the checks listed under **Testing**.
- Prefer small, targeted edits to existing files over rewriting whole files.


---


# Voice — read before writing any content

- Write for a reader with no knowledge of this field, at about a 12 to 13 year old
  reading level. Explain or replace every technical term. See "The reader" in
  references/voice.md.

When writing **any blog post, service page, or customer-facing copy**, read the files in `./references/`:


| File | What it is |
|------|-----------|
| `references/voice.md` | Writing style, sentence rhythm, vocabulary, formatting, anti-patterns |
| `references/humour.md` | How the brand handles humour |
| `references/stats.md` | Canonical real numbers — pricing, response times, jobs, reviews |
| `references/stories.md` | Recurring anecdotes the brand uses |
| `references/opinions.md` | Hot takes and strong opinions backed by numbers |


**Content rules:**


- Never use AI-tell phrases (e.g. "unlock", "leverage", "seamless", "world-class", "in today's fast-paced world"), exclamation marks, or emojis
- Start with the answer; add context after
- Use real numbers from `stats.md`, never round
- One story per post max (from `stories.md`, don't invent new ones)
- One strong opinion per post max (from `opinions.md`, backed by a number)
- Tell people when NOT to hire you — biggest voice tell


Before shipping any writing, re-read `references/voice.md` → "Tells that it's AI-written" and delete anything that matches.


---


# On-page SEO


When generating or editing a blog post, read `on-page-seo.md` at the root. Every item applicable to the page type must be satisfied.


Required for every long-form post:
- FAQ section with FAQPage schema (JSON-LD)
- Breadcrumbs + BreadcrumbList schema
- Author byline + Person schema
- Table of contents with anchor links
- 3–5 internal links, 2–3 external links to authoritative sources
- Open Graph + Twitter Card meta
- Length within 20% of SERP top-3 for the target keyword


---


# Technical SEO


Site-wide:
- `app/sitemap.ts` — auto-generated sitemap covering all routes
- `app/robots.ts` — allows all crawlers, points to sitemap
- Canonical URLs on every page (via `metadata.alternates.canonical`)
- Open Graph images (1200×630) — `/public/og/*.png`
- Image width/height attributes for CLS
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Static pre-rendering — `output: 'export'`
- Mobile viewport — set in `app/layout.tsx`


---


# Design


Premium, modern, elegant. Subtle animations, proper spacing, clear visual hierarchy. No emoji icons. No generic gradients. One accent colour (pick one and stick to it).


---


# Development Rules


**Rule 1: Always read first** — before any action, read `GEMINI.md`.


**Rule 2: Define before you build** — no code before spec approval.


**Rule 3: Look before you create** — check existing files before creating new ones.


**Rule 4: Test before you respond** — run `npm run build` before saying "done".


**Core Rule** — do exactly what is asked. Nothing more, nothing less.


---


# Tech Stack


- **Language:** TypeScript
- **Framework:** Next.js 15 (App Router)
- **Rendering:** Static Site Generation via `output: 'export'`. `out/` is the deployable.
- **Styling:** Tailwind CSS
- **Content:** Flat TypeScript files in `/content/*.ts`. No database.
- **Deployment:** Vercel


**SSG constraints — do NOT break these:**
- No `cookies()`, `headers()`, or `searchParams` in server components
- No `fetch(..., { cache: 'no-store' })` or `export const dynamic = 'force-dynamic'`
- No runtime API routes
- Dynamic routes (`[slug]`) must implement `generateStaticParams`
- All data fetched at **build time**, not request time


---


# Running the Project


1. `npm install`
2. `npm run dev` — opens on `http://localhost:3000`
3. To ship: `npm run build` → the `out/` directory is the deployable site


---


# Organisation Rules


- One component per file
- Shared components live in `/components/`
- Page-specific content lives in `/content/*.ts`
- Don't create new top-level folders without asking


---


# Testing


Before marking any task done:
- `npm run build` completes with no errors
- Every route shows `○ (Static)` in the build log
- **View-source check:** the HTML contains the actual rendered content and any JSON-LD schema
- **Voice check** (for content changes): re-read `references/voice.md` → "Tells that it's AI-written" and delete anything that matches


Never say "done" if the build is failing, there are console errors, the voice reads as AI, or the feature hasn't been tested in the browser.


---


# Scope


Only build what's requested. If anything is unclear, ask before starting.

# Keywords

Never choose keywords yourself. For any blog post, take the primary keyword,
secondary keywords, intent, slug and internal link targets from
references/keyword-clusters.md. If the requested topic is not in that file,
stop and ask. After publishing a post, set its status to "drafted".