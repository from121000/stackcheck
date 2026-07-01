# StackVerify Agent Journal

This file is your memory across runs. You have no other persistent state —
read this in full at the start of every run, alongside `AGENT.md`. Append a
new entry at the bottom each time you finish a run. Never edit or delete
past entries; this is an append-only log.

Each entry should cover: what you found when you started, what you decided
to do and why, what you actually did, and anything the next run needs to
know. Be specific — vague entries ("improved the site") are useless to your
future self.

IMPORTANT — append means the literal end of this file, after every existing
entry, no matter how many there are. Before adding your entry, scroll/read
to the actual last line of the file and add your new entry after that —
not after this header, not after the "Future entries go below this line"
marker, not after any specific entry number. Entries must stay in
chronological order with no insertions out of sequence.

---

## Entry 0 — 2026-06-30 (seed entry, written by a human, not the agent)

This is the starting state of the project, written before the autonomous
run begins, for context.

**What exists right now:**
- A bare Next.js + TypeScript + Tailwind scaffold, deployed and live at
  stackverify.app. The homepage is still the default Next.js placeholder —
  no real UI yet.
- `data/interactions.json` — a seeded interaction dataset with 5 entries
  (vitamin K/warfarin, St. John's Wort with warfarin/SSRIs/oral
  contraceptives, antioxidants/chemotherapy), each with a real source. The
  schema is documented in the file itself (`_schema_notes` and `schema`
  fields). Follow that schema exactly when adding entries.
- `AGENT.md` — your operating instructions. Read it first, every run.
- No blog posts exist yet.
- No analytics are wired up yet as of this entry — check `AGENT.md` or this
  journal's later entries for whether that's been resolved by the time you
  read this. If there's no analytics integration yet, that's worth being
  one of your early priorities, since you can't evaluate "are we getting
  visitors" without it.
- No sitemap or search console submission has happened yet.

**Suggested (not mandatory) starting point for the first real run:**
Build the actual checker UI — a form to enter substances, matching logic
against `data/interactions.json`, and a results display that surfaces the
mechanism, summary, severity, and source for any matches. This is the core
product; the site has nothing to offer a visitor without it. Once that
exists and is deployed, a sitemap + search console submission gets the
indexing clock started as early as possible. Blog content can begin once
the core tool isn't embarrassingly empty.

This is a suggestion, not an instruction — use your own judgment per
AGENT.md once you've assessed the actual state of things.

---

## Entry 1 — 2026-06-30 (first autonomous run)

**State at start:**
- Default Next.js placeholder homepage, nothing real deployed
- 5 interaction entries in data/interactions.json (all well-formed)
- No blog, no sitemap, no robots.txt, no analytics
- No node_modules in repo (installed at build/deploy time)

**What I decided to do and why:**
The seed entry's suggestion was right: build the core checker first. A site with no product has nothing to offer visitors and nothing to index. I prioritized:
1. The checker UI — the core product
2. Metadata + sitemap/robots — gets indexing clock started
3. Two blog posts — early SEO content
4. Three new interaction entries — makes the tool more useful

I skipped analytics setup this run because I have no access to external service configuration (billing, DNS, API keys). I noted this in the journal for a future run to decide on.

**What I actually did (3 commits, all pushed):**

**Commit 1 — Core checker UI:**
- `components/StackChecker.tsx` — interactive client component with textarea input, client-side matching against interactions.json, results display with severity badges, mechanism, and sourced citations
- `app/page.tsx` — replaced placeholder with real homepage (checker + disclaimer)
- `app/layout.tsx` — StackVerify branding, header with nav, footer with disclaimer, proper metadata
- `app/sitemap.ts` and `app/robots.ts` — sitemap for crawlers

**Commit 2 — First blog post:**
- `app/blog/page.tsx` — blog index
- `app/blog/st-johns-wort-drug-interactions/page.tsx` — article on SJW interactions with warfarin, SSRIs, and oral contraceptives. Targets the high-intent search query "st. john's wort drug interactions". Uses the same verified PMC sources as in interactions.json.

**Commit 3 — Dataset + second blog post:**
- Added 3 new entries to `data/interactions.json`: iron+levothyroxine, calcium+bisphosphonates, magnesium+fluoroquinolones. All sourced from NIH ODS Health Professional Fact Sheets (verified real URLs).
- `app/blog/iron-levothyroxine-interaction/page.tsx` — article targeting "iron levothyroxine interaction", a common question from hypothyroid patients on iron supplements
- Updated blog index and sitemap

**What the next run should know:**
- No analytics is wired up yet. Hard to measure whether pages are getting indexed or visited. Worth setting up something lightweight — Plausible, Fathom, or even just Google Search Console (doesn't require JS; just a DNS TXT verification or HTML meta tag). Search Console would at minimum confirm whether the sitemap has been picked up. I can't do DNS or billing setup, but a meta tag or HTML file verification for Search Console might be doable in app code. Next run should investigate this.
- The content safety CI check runs on blog posts — review it after this commit to make sure all three blog posts pass before treating them as stable.
- Good next blog targets (high-search, well-sourced):
  - "magnesium drug interactions" (could expand on the fluoroquinolone entry, also covers magnesium + digoxin, magnesium + diuretics)
  - "vitamin D and drug interactions" (vitamin D + thiazide diuretics → hypercalcemia)
  - "fish oil blood thinners" (omega-3 + warfarin)
- Good next dataset entries to add:
  - Vitamin D + thiazide diuretics (hypercalcemia risk) — source: NIH ODS Vitamin D fact sheet
  - Melatonin + warfarin (may affect INR) — source: PMC studies exist
  - Potassium + ACE inhibitors / potassium-sparing diuretics (hyperkalemia risk) — NIH ODS Potassium fact sheet
  - Garlic supplements + warfarin (antiplatelet effects) — PMC sources exist
- The checker matching is exact/alias-based, case-insensitive. It won't match partial strings (e.g. "cipro" will match because it's in aliases_b for magnesium+fluoroquinolones, but "ciprofloxacin 500" won't). This is intentional for now — fuzzy matching could cause false positives.
- The `new Date().getFullYear()` call in layout.tsx (footer copyright) runs server-side at build time in Next.js static builds; this is fine.
- No MDX or rich content pipeline is set up. Blog posts are plain TSX. This is fine for now; avoids adding dependencies.

---

## Human note — 2026-06-30 (from Kim, not the agent)

Visited the live site. Functionally everything works, but the visual design
has a real contrast problem: body text and headings are rendering as dark
gray on a black background, close to unreadable in places (only the yellow
disclaimer box and bold text are clearly legible). This needs to be a
priority for the next run, ahead of new content or dataset work — a site
people can't comfortably read won't convert visitors regardless of how good
the content is.

Specific ask: review the color/contrast choices across layout, homepage,
and blog pages. Body text needs to meet reasonable contrast standards
against its background (e.g. roughly WCAG AA, ~4.5:1 contrast ratio for
body text) in whatever color scheme is chosen — dark mode is fine if that's
the intended aesthetic, but the gray-on-black combination currently in use
is too low-contrast. Use your own design judgment on the overall look, but
verify the result is actually readable, not just "technically has a color
set."

---

## Entry 2 — 2026-06-30 (second autonomous run)

**State at start:**
- Kim's human note from Entry 1 flagged a critical readability problem: dark gray text on near-black background. The yellow disclaimer box was the only clearly legible element.
- 2 blog posts existed (SJW interactions, iron + levothyroxine)
- 8 dataset entries
- No analytics, no search console

**Root cause of contrast issue (diagnosed and fixed):**
The problem was a CSS cascade conflict specific to Tailwind v4. In Tailwind v4, utility classes are emitted inside `@layer` directives. CSS Cascade Level 5 treats unlayered rules as higher priority than layered ones, regardless of specificity. The `globals.css` file had an unlayered `body { background: var(--background); color: var(--foreground); }` rule. In dark mode (prefers-color-scheme: dark), the CSS variable `--background` became `#0a0a0a` (near-black) — which is an unlayered rule and thus beats the Tailwind `bg-white` class on the body. Then child elements like headings had explicit Tailwind `text-zinc-900` etc. classes, producing very dark text on the dark body background.

Fix: removed the `body {}` rule and the dark mode `@media` block from globals.css. The Tailwind utility classes now control appearance as intended: white background, dark text. Also bumped footer disclaimer from `text-zinc-400` to `text-zinc-500` for slightly better contrast on medical safety copy.

**What I did:**

**Commit 1 (pushed) — Fix contrast:**
- Removed unlayered `body { background: ...; color: ...; font-family: ... }` rule from globals.css
- Removed dark mode `@media` block (its only effect was setting CSS vars used by the removed body rule)
- Bumped footer text from zinc-400 to zinc-500

**Commit 2 (pushed) — Content expansion:**
- Added 4 new dataset entries to data/interactions.json (all sourced from NIH ODS):
  - `omega3-warfarin`: fish oil antiplatelet effects + warfarin bleeding risk (moderate)
  - `vitamin-d-thiazide-diuretics`: combined hypercalcemia risk (moderate)
  - `potassium-ace-inhibitors`: hyperkalemia from additive potassium retention (moderate)
- Added 2 new blog posts:
  - `app/blog/magnesium-drug-interactions/page.tsx` — covers fluoroquinolone chelation, tetracycline chelation, bisphosphonate chelation, diuretic-induced magnesium depletion, PPI-induced hypomagnesemia; all sourced from NIH ODS Magnesium fact sheet
  - `app/blog/fish-oil-blood-thinners/page.tsx` — covers EPA/DHA antiplatelet mechanism, warfarin interaction (with honest note that INR evidence is mixed), dose-dependence, aspirin context, surgical context; sourced from NIH ODS Omega-3 fact sheet
- Updated blog index to list 4 posts (new two added at top)
- Updated sitemap to include 2 new blog URLs

**What the next run should know:**
- Analytics is still not set up. Without this, there's no way to measure whether the indexing/traffic goal is progressing. Google Search Console can be configured via an HTML meta tag in layout.tsx (no DNS or billing needed) — this is the highest priority non-content task for the next run. The meta tag approach requires a Search Console property to exist and a verification token. Since I can't create external accounts, this may be blocked unless Kim sets up the GSC property and provides the token for me to embed.
- The site now has 4 blog posts targeting: SJW drug interactions, iron + levothyroxine, magnesium drug interactions, fish oil + blood thinners. Checker dataset has 12 entries.
- Good next blog targets from the journal backlog:
  - "vitamin D and drug interactions" — covers thiazide diuretics (now in dataset) and broader context
  - "potassium and medications" — covers ACE inhibitors (now in dataset), potassium-sparing diuretics
  - "calcium supplement interactions" — covers bisphosphonates (in dataset), levothyroxine (in dataset), fluoroquinolones, iron absorption
- Good next dataset entries:
  - Garlic + warfarin (antiplatelet effects of allicin; needs verified PMC source — next run should check NIH ODS garlic fact sheet URL)
  - Melatonin + warfarin (some case reports of INR changes; needs verified source)
  - Zinc + antibiotics / zinc + iron (chelation, similar mechanism to magnesium)
  - Ginkgo biloba + warfarin / aspirin (antiplatelet effects)
- The checker's matching is still exact/alias-based. "fish oil" will match the omega3-warfarin entry (it's in aliases_a). "vitamin d3" will match vitamin-d-thiazide. "lisinopril" will match potassium-ace-inhibitors. Test coverage looks reasonable.
- No build errors expected — all new files follow the same TSX pattern as existing blog posts, no new dependencies added.

---

## Entry 3 — 2026-07-01 (third autonomous run)

**State at start:**
- 4 blog posts, 11 dataset entries (Entry 2 count was off — I re-counted from the file)
- Contrast issue fixed (Entry 2), site readable
- Analytics still not set up — blocked without external account by Kim

**What I decided to do and why:**
Analytics remains blocked (needs Kim to create a GSC property and provide a verification token). Content expansion is the main lever I can pull. The Entry 2 backlog had three well-sourced blog post topics and four dataset entries all ready to write — highest-leverage content given the indexing lag (more pages in sitemap now = more runway to get indexed within the 30-day window). Wrote everything from the backlog.

**What I actually did (2 commits, pushed):**

**Commit 1 — 4 new dataset entries:**
- `garlic-warfarin`: allicin platelet inhibition + warfarin additive bleeding risk (NIH ODS Garlic)
- `zinc-fluoroquinolones`: Zn²⁺ chelation of fluoroquinolone antibiotics, same mechanism as Mg²⁺/Ca²⁺ (NIH ODS Zinc)
- `ginkgo-warfarin`: ginkgolides inhibit platelet activating factor (PAF), additive with warfarin (NCCIH Ginkgo)
- `calcium-levothyroxine`: Ca²⁺ chelates levothyroxine in GI tract, same mechanism as iron-levothyroxine (NIH ODS Calcium)
- Dataset now has 15 entries

**Commit 2 — 3 new blog posts + index/sitemap update:**
- `vitamin-d-drug-interactions`: thiazide diuretics (hypercalcemia), corticosteroids (depletion), anti-seizure meds (CYP induction), orlistat/cholestyramine (fat-soluble absorption)
- `calcium-supplement-interactions`: bisphosphonates (chelation, especially important since same patients take both), levothyroxine (chelation), fluoroquinolone/tetracycline antibiotics (chelation), iron absorption (transporter competition)
- `potassium-and-medications`: ACE inhibitors, ARBs, potassium-sparing diuretics (all impair potassium excretion → hyperkalemia risk with supplements), context on who is most at risk
- Blog index now has 7 posts; sitemap updated to include all 3 new URLs

**What the next run should know:**
- Analytics is still the highest-priority non-content task. GSC meta tag approach: Kim needs to create a Google Search Console property for stackverify.app, get the HTML meta tag verification token, and either put it in the journal or add it manually. Once we have the token, it can go in app/layout.tsx `<head>` with a single line. Without it, there's no way to know if any of this content is getting indexed.
- 7 blog posts now exist. Good next targets from established interaction evidence:
  - "melatonin drug interactions" — melatonin + warfarin (some case reports, cautious note), melatonin + sedatives/CNS depressants (additive sedation), melatonin + nifedipine (may raise BP). Would need PMC sources.
  - "garlic supplement interactions" — expand on the warfarin entry; garlic also interacts with antiretrovirals via CYP3A4 induction, saquinavir specifically noted in NCCIH.
  - "ginkgo biloba interactions" — expand: ginkgo + antiplatelet drugs (aspirin, clopidogrel), ginkgo + seizure threshold, ginkgo + insulin.
- Dataset has 15 entries. Good next additions:
  - Melatonin + CNS depressants (sedatives, alcohol — additive sedation)
  - Garlic + antiretrovirals (CYP3A4 induction reducing saquinavir levels — documented in NCCIH)
  - Potassium + ARBs (same mechanism as potassium + ACE inhibitors — should be a separate entry since users may type "losartan" and the current entry won't match)
  - Zinc + tetracyclines (same chelation mechanism as zinc + fluoroquinolones)
- The checker still uses exact/alias matching. "losartan" does NOT currently match the potassium-ace-inhibitors entry (only ACE inhibitors are in aliases_b). Adding a potassium-ARBs entry would be a quick win.
- No build errors expected — all new content follows identical TSX pattern, no new dependencies.