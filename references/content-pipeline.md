# Content Pipeline

Turns a keyword list into keyword clusters, a funnel plan and drafted blog posts, with approval gates.

GEMINI.md always applies. This file only adds process. If the two conflict, GEMINI.md wins.
Do exactly what each phase says. Nothing more.

## How to run

The person starts a run with a message like:

    Run the content pipeline.
    mode: supervised
    batch_size: 3

Settings (use the defaults if not given):
- `mode: supervised` (default). Stops at every gate listed below.
- `mode: batch`. Skips Gate 3 (outline approval) only, and writes up to `batch_size` posts in a row. Gates 1, 2 and 4 are never skipped.
- `batch_size`: number of posts per run. Default 3. Maximum 5.

## Files

| File | Role |
|------|------|
| `references/keywords.csv` | Input. Raw keywords supplied by the person. Never edited by the agent except to flag duplicates in `notes`. |
| `references/keyword-clusters.csv` | Output of Phase 2. The content plan and the status tracker. |
| `/content/<slug>.ts` | One file per post. |
| `references/*.md`, `on-page-seo.md` | Voice, humour, stats, stories, opinions, SEO checklist. |

## Status values

`planned` then `drafted` then `reviewed` then `published`.
The agent may only set `planned` and `drafted`. A human sets `reviewed` and `published`.

Every post file has `draft: true` when created. Posts with `draft: true` must be left out of the blog index, the sitemap and internal links from live pages. Only a human changes it to `false`.

---

## Phase 0: Preflight

Do these checks first. If any check fails, stop and tell the person exactly what is missing. Do not guess or fill gaps.

1. Read GEMINI.md and `on-page-seo.md`.
2. Read every file in `references/`. If any file still contains `[FILL IN]`, stop and list which files and lines.
3. Confirm author details exist (real name, credentials, short bio, profile link). If not, ask for them. Do not invent an author.
4. Confirm `references/keywords.csv` exists and has at least one real keyword.
5. Check whether the blog system exists (`/blog` route and `/blog/[slug]`). Note the result for Phase 3.

## Phase 1: Intake

1. Read `references/keywords.csv`.
2. Normalise: trim spaces, lowercase, remove exact duplicates.
3. Flag near-duplicates (same meaning, different word order or plurals). Group them. Do not delete them.
4. Flag health, legal and money topics as sensitive (YMYL). Sensitive pages get extra rules in Phase 4.
5. Do not add keywords. Do not invent search volume, difficulty or competitor data. Use only what is in the file.

## Phase 2: Cluster and funnel

Write or update `references/keyword-clusters.csv` with these columns:

`cluster, funnel_stage, keyword, role, page_id, page_title, slug, search_intent, internal_link_to, status, notes`

Rules:
- One page per search intent. Keywords with the same intent are `variant` rows on the same page. Never create two pages for variants.
- Each cluster has one `pillar` page and up to 8 `supporting` pages. A keyword that fits no cluster is `standalone` with a note on why.
- Funnel stage definitions:
  - TOFU: the searcher wants to understand something (causes, symptoms, what is, why).
  - MOFU: the searcher is comparing or choosing a solution (treatment, exercises, options, vs).
  - BOFU: the searcher is ready to book, buy or contact (near me, cost, book, appointment).
- Slugs are short, lowercase and hyphenated. Titles state the answer, not a theme.
- If the file already exists, do not change rows whose status is not `planned`. Add new rows only. Continue page IDs from the highest existing one.
- Report any funnel gap (for example, no BOFU keywords) and suggest the type of keyword to add. Do not add them yourself.

GATE 1: stop. Show a summary table (clusters, pages, posts per stage, suggested publishing order) and the gaps. Wait for approval.

## Phase 3: Blog system (only if it does not exist)

1. Write a spec covering: `/blog` index, `/blog/[slug]` with `generateStaticParams`, a typed post interface, one content file per post, sitemap integration that skips `draft: true`, and every item in the "Required for every long-form post" list in GEMINI.md.
2. List anything needed from the person (author details, brand name, base URL).

GATE 2: stop. Wait for spec approval before writing code.

After approval: build it, run `npm run build`, confirm every route shows `○ (Static)`, and view the HTML source to confirm the content and JSON-LD are present.

## Phase 4: Write posts

Choose the next posts with status `planned`, in this order: clusters in the approved publishing order; within a cluster, the pillar first, then supporting posts from TOFU to BOFU. Write at most `batch_size` posts per run (one in supervised mode unless told otherwise).

For each post:

1. Take the primary keyword, secondary keywords, intent, slug and title from the CSV. Do not choose your own.
2. Re-read `voice.md`, `humour.md` and `stats.md`.
3. Outline: H2 headings, FAQ questions, internal links, external links, and which story or opinion (if any) you will use.
   GATE 3 (supervised mode only): stop and wait for outline approval.
4. Write the post following GEMINI.md and the rules below.
5. Run the quality checklist below. Fix every failure before continuing.
6. Create `/content/<slug>.ts` with `draft: true`. Set the CSV status to `drafted`.
7. Run `npm run build`. Confirm the route shows `○ (Static)`. Check view-source for the content and JSON-LD.

Post rules:
- Numbers come only from `stats.md`. Never invent statistics, stories, reviews, quotes or credentials. If something is missing, leave it out or ask.
- At most one story and one opinion per post, only if they fit. Skipping both is fine.
- Include a section on when NOT to hire or book, and who should do something else instead.
- Humour follows `humour.md`. Never joke about pain, symptoms, money worries or safety.
- External links go to authoritative sources only. Open each page to confirm it exists and supports the claim. Never guess a URL. If you cannot verify a link, leave it out.
- Internal links go only to pages that exist and are not drafts. For planned pages, add a line to the CSV `notes` column: `pending link: <slug>`.
- Length: within 20% of the top 3 results for the keyword if you can browse. If you cannot, ask for a target word count.

Extra rules for sensitive (YMYL) pages, meaning topics where bad advice could harm
the reader's health, money, legal position or safety:
- No guarantees of results. No advice that depends on the reader's personal
  circumstances. Explain general information and say when the reader needs a
  qualified professional.
- State clearly when to see a professional and who (doctor, solicitor, accountant,
  electrician, etc.), and list any warning signs that mean act now.
- Cite authoritative sources for every factual claim in the field: government,
  regulator, professional body or peer-reviewed sources (NHS, NICE, Chartered
  Society of Physiotherapy, Health & Care Professions Council).
- Do not give doses, legal or tax rulings, financial product recommendations or
  safety-critical instructions.
- Add `needs review: qualified person` to the CSV `notes` column. Do not mark it
  reviewed.

## Quality checklist (run before saving every post)

- [ ] Primary keyword in the title, H1, first 100 words and slug
- [ ] Opens with the answer
- [ ] Every item in `on-page-seo.md` applicable to a long-form post is satisfied
- [ ] FAQ matches the FAQPage JSON-LD exactly
- [ ] Every number appears in `stats.md`
- [ ] Every external link was opened and checked
- [ ] No internal link points to a draft or missing page
- [ ] "When NOT to hire or book" section present
- [ ] `voice.md` "Tells that it's AI-written" re-read and every match deleted
- [ ] No exclamation marks, no emojis, no banned words
- [ ] Sensitive-topic rules applied where relevant

## Phase 5: Link pass

After a run, if any `pending link` notes now point to existing, non-draft pages, add those links, remove the notes, and rebuild. Because drafts are excluded from live links, most pending links resolve only after a human publishes posts. Run this phase again after publishing.

## Phase 6: Report

End every run with:
- A table of posts written (page ID, slug, word count, status)
- Build result and confirmation that routes are Static
- Posts flagged for human review, and why
- Pending internal links
- Questions or missing information
- The next posts that would run

## Stop conditions

Stop and ask when:
- A reference file contains `[FILL IN]`
- Author details are missing
- A needed number, story or source is not in the files
- A requested topic is not in `keyword-clusters.csv`
- The build fails and the cause is not obvious
- Any instruction here conflicts with GEMINI.md
