# On-Page SEO Checklist

Every item applicable to the page type must be satisfied before a page is marked done.
Page types: **P** = long-form post, **S** = service page, **L** = location page, **A** = all pages.

## Keyword and intent
- [ ] A  One primary keyword and 2 to 4 secondary keywords chosen before writing
- [ ] A  Search intent matched (informational, commercial, local)
- [ ] P  Length within 20% of the SERP top 3 for the primary keyword
- [ ] P  The answer appears in the first 100 words

## Metadata
- [ ] A  Title tag 50 to 60 characters, primary keyword near the start
- [ ] A  Meta description 140 to 160 characters, includes a reason to click
- [ ] A  Canonical URL via `metadata.alternates.canonical`
- [ ] A  Open Graph tags and Twitter Card tags
- [ ] A  OG image 1200x630 in `/public/og/`
- [ ] A  One H1 only, containing the primary keyword
- [ ] A  URL slug short, lowercase, hyphenated, contains the primary keyword

## Structure
- [ ] A  Headings in logical order (H1, H2, H3), no skipped levels
- [ ] A  Semantic HTML5: header, nav, main, article, footer
- [ ] P  Table of contents with anchor links
- [ ] P  Breadcrumbs in the page and BreadcrumbList JSON-LD
- [ ] P  Author byline with link to an author page
- [ ] P  Published date and last updated date shown

## Structured data (JSON-LD, present in the static HTML)
- [ ] P  Article or BlogPosting
- [ ] P  Person (author)
- [ ] P  FAQPage matching the visible FAQ exactly
- [ ] P  BreadcrumbList
- [ ] S  Service
- [ ] L  LocalBusiness
- [ ] A  Organization (site-wide)
- [ ] A  Validate every block with the Rich Results Test

## Content
- [ ] P  FAQ section with 4 to 6 real questions people ask
- [ ] P  3 to 5 internal links with descriptive anchor text
- [ ] P  2 to 3 external links to authoritative sources
- [ ] P  A "when NOT to hire us" section
- [ ] A  Numbers match `references/stats.md`
- [ ] A  Voice check against `references/voice.md` completed

## Images and performance
- [ ] A  Every image has descriptive alt text
- [ ] A  Every image has width and height attributes (CLS)
- [ ] A  File names descriptive, not "IMG_1234"
- [ ] A  Images compressed; hero image not lazy-loaded
- [ ] A  Mobile viewport set in `app/layout.tsx`

## Final checks
- [ ] A  `npm run build` passes and the route shows `○ (Static)`
- [ ] A  View source: the content and JSON-LD are in the raw HTML
- [ ] A  Page appears in the generated sitemap
- [ ] A  No broken internal or external links
