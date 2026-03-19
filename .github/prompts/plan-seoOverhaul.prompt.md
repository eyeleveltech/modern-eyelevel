# Plan: Comprehensive SEO Overhaul with Enhanced Schema Markup

## TL;DR
Your site has a solid SEO foundation on 8 core pages, but 11+ pages are missing SEO entirely, and schema markup is shallow. I recommend a **6-phase overhaul**: (1) enhance data models with new schemas, (2) add SEO to all missing pages, (3) create service & industry detail pages, (4) enrich existing pages with breadcrumb & local business schemas, (5) fix current issues, and (6) optimize content. **Expected impact**: 40% increase in SEO page coverage, 3x richer schema implementation.

---

## Steps

### **PHASE 1: Data Model & Schema Foundation** (Start immediately)
1. **Expand src/hooks/schemas.ts**: Add 5 new schema builders — `localBusinessSchema()`, `serviceSchema()`, `breadcrumbSchema()`, `eventSchema()`, `articleSchema()`
2. **CREATE src/data/services.ts**: Define ServiceDetail model (id, slug, seoTitle, seoDescription, benefits, useCases, keywords, image); populate 5 core services
3. **CREATE src/data/industries.ts**: Define IndustryDetail model (id, slug, seoTitle, seoDescription, capabilities, metrics, keywords, image); populate 5 industries
4. **CREATE src/data/pageMetadata.ts**: Centralized SEO registry with title/description/keywords/schema for **all ~20 pages** — enables easy audit & consistency
5. **FIX src/data/blogs.ts**: Add missing author images, fix "The Future of Performance Marketing" category, add breadcrumb fields

### **PHASE 2: Add SEO to 11 Missing Pages** (Parallel with Phase 1)
6. **4 Marketing Verticals**: Add `<SEO>` component to EduMarketing, B2BMarketing, SportsMarketing, RealEstateMarketing pages (title, description, 2-3 schemas each)
7. **2 Transactional Pages**: Add minimal SEO to Booking, Apply (CTA-focused titles, canonical)
8. **3 Legal Pages**: Add minimal SEO to Privacy, Terms, ThankYou (noindex/nofollow where appropriate)
9. **1 Dynamic Route**: Enhance IndustryDetail to load SEO from industries.ts data
10. **Higher Education Variants**: Consolidate/assign unique SEO if they're distinct pages

### **PHASE 3: Create Detail Pages** (Parallel with Phase 2)
11. **CREATE src/pages/ServiceDetail.tsx**: New page `/services/:slug` — renders service overview, benefits, CTA; pulls seoTitle/description from services.ts; includes breadcrumb + service schemas
12. **ENHANCE src/pages/IndustryDetail.tsx**: Route `/industries/:slug` — renders industry overview, stats, capabilities; pulls SEO from industries.ts; includes breadcrumb + industry schemas

### **PHASE 4: Enhance Existing Pages with Rich Schemas** (Parallel with Phases 2-3)
13. **Blog Pages**: Add breadcrumb schema to Blog.tsx, BlogCategory.tsx, BlogPost.tsx
14. **Home Page**: Merge homePageSchema + localBusinessSchema (Chennai location, hours, service area)
15. **Services Page**: Convert single service list to individual Service objects with name/description/URL per service; add breadcrumb schema
16. **Industries Page**: Add individual industry breadcrumb schema to Industries.tsx; enhance industry schema
17. **All Detail Pages**: Add breadcrumb schema to ServiceDetail & IndustryDetail routes

### **PHASE 5: Bug Fixes & Consistency** (Parallel with all phases)
18. **Fix blog categorization**: Review all 9 posts for category alignment with seoTitle intent
19. **Verify all routes**: Ensure AppRoutes.tsx exports all pages from Phase 2 with correct paths
20. **Validate SEO.tsx defaults**: Check fallback title/description behavior, canonical URL generation

### **PHASE 6: Content Review** (Optional; can defer)
21. **Keyword optimization**: Review each page title/description for 2-3 primary keywords per page
22. **hreflang tags**: Implement if multi-language expansion planned (not currently needed)

---

## Relevant Files

### **Files to Modify:**
- `src/hooks/schemas.ts` — ADD 5 new schema builders
- `src/data/blogs.ts` — FIX category mismatches, add author images
- `src/pages/Services.tsx` — ENHANCE with individual service schemas, breadcrumbs
- `src/pages/Industries.tsx` — ADD breadcrumb schema
- `src/components/SEO.tsx` — VERIFY (likely no changes; already comprehensive)
- `src/AppRoutes.tsx` — VERIFY/UPDATE routes for new pages

### **Files to Create:**
- `src/data/services.ts` — Service detail model + 5 entries
- `src/data/industries.ts` — Industry detail model + 5 entries
- `src/data/pageMetadata.ts` — Centralized SEO metadata registry
- `src/pages/ServiceDetail.tsx` — Dynamic service detail page

### **Files to Add SEO:**
- EduMarketing, B2BMarketing, SportsMarketing, RealEstateMarketing, Booking, Apply, Privacy, Terms, ThankYou

---

## Verification

1. **Schema Validation**: Run each updated page through Google Rich Results Test — 0 errors, all properties present
2. **Meta Tags**: Inspect source for `<meta name="description">` (155-160 chars), `<link rel="canonical">` accuracy
3. **Dynamic Routes**: Verify blog/:slug, services/:slug, industries/:slug generate unique seoTitle/seoDescription per item
4. **SEO Audit**: Run site through SEMrush Site Audit to check crawlability, missing meta tags, duplicates
5. **Google Search Console**: After launch, monitor indexation status, coverage errors for new pages
6. **Breadcrumb Rendering**: Confirm breadcrumb schema renders correctly in SERP previews

---

## Decisions

- **Detail Pages**: Creating individual /services/:slug and /industries/:slug pages (vs. tabs/modals) for dedicated SEO, shareable URLs, better crawlability
- **Schema Format**: Using JSON-LD array (already supported in SEO.tsx) instead of Microdata for cleaner code
- **Metadata Source**: Centralized pageMetadata.ts as single source of truth — easier to audit, catch gaps/duplicates
- **Local Business**: Enhanced with Chennai location, service hours, radius because site emphasizes local expertise
- **Single Language**: No hreflang implementation needed (single language currently; easy to add if expanding)

---

## Further Considerations

1. **Breadcrumb UI Component**: Plan focuses on schema (data structure). Consider also implementing visual breadcrumb navigation component for better UX post-Phase 4.
2. **Keyword Strategy**: Before finalizing pageMetadata, conduct keyword research to map target keywords per page (head terms, long-tails). This is a content/strategy decision.
3. **Sitemap & Robots**: After adding new routes, verify sitemap.xml includes all dynamic routes and robots.txt is updated (e.g., disallow booking, thank-you if internal-only).

---

## Current SEO Audit Summary

### **Pages with Existing SEO (8)**
- Home, About, Services, Industries, Contact, Careers, Blog, Blog Categories/Posts

### **Pages Missing SEO (11+)**
- EduMarketing, B2BMarketing, SportsMarketing, RealEstateMarketing
- Booking, Apply
- Privacy, Terms, ThankYou
- IndustryDetail (dynamic)
- HigherEducation variants

### **Current Schema Coverage**
- Organization, Website, HomePage, Services, Industries, Contact, FAQ
- **Missing**: LocalBusiness, Breadcrumb, Individual Service/Product, Event, Article

### **Metadata Quality**
- Titles: Professional, keyword-rich (good)
- Descriptions: Compelling, CTA-focused (good)
- Keywords: Present in blog/career data (good)
- Consistency: Inconsistent application across pages (needs work)

### **Key Gaps**
1. No local business schema despite claiming local expertise (Chennai)
2. No breadcrumb navigation for UX/SEO
3. No individual service page SEO (5 services buried in one page)
4. Blog categories not optimized equally (some posts miscategorized)
5. Industry detail pages lack dedicated SEO
6. 11+ pages completely missing SEO implementation
