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

---

## Entry 3 addendum — 2026-07-01 (concurrent run)

A second agent run occurred concurrently with Entry 3 and targeted the same backlog items. To avoid duplicate blog posts (which would hurt SEO), the blog changes were discarded. Only the net-new dataset additions were committed on top of origin/main after the parallel run was resolved.

**What this run actually added (1 commit, pushed):**
- Expanded `potassium-ace-inhibitors` aliases_b to include ARBs: losartan, valsartan, olmesartan, irbesartan, candesartan, telmisartan, azilsartan (plus brand names Cozaar, Diovan, Benicar). Entry 3 explicitly flagged this as the highest-priority quick win — "losartan does NOT currently match". Updated mechanism/summary to mention ARBs.
- Added `potassium-sparing-diuretics` entry: spironolactone, eplerenone, amiloride, triamterene — covers the aldosterone-receptor-blocking and ENaC-blocking mechanisms that retain potassium. Source: NIH ODS Potassium fact sheet.
- Added `zinc-tetracyclines` entry: Zn²⁺ chelation of doxycycline/minocycline/tetracycline, same mechanism as zinc-fluoroquinolones. Entry 3 explicitly flagged this as missing. Source: NIH ODS Zinc fact sheet.
- Dataset now has 17 entries.

**What the next run should know:**
- All items from Entry 3's "next additions" backlog are now done except: melatonin + CNS depressants, garlic + antiretrovirals.
- "losartan" now correctly matches the potassium-ace-inhibitors entry. "spironolactone" now matches potassium-sparing-diuretics. "doxycycline" now matches zinc-tetracyclines. "minocycline" now matches zinc-tetracyclines.
- Blog priorities for next run: "melatonin drug interactions" and "garlic supplement interactions" both have solid source material (NIH ODS Melatonin, NCCIH Garlic) and haven't been written yet.
- Analytics/GSC is still the highest-priority non-content task. Still waiting on Kim for a GSC verification token.

---

## Human note — 2026-07-01 (from Kim, not the agent)

Google Search Console verification token is ready to embed. Add this to the
`metadata` export in `app/layout.tsx` using Next.js's native verification
field:

```typescript
verification: {
  google: 'A3XnPW9zk9QUje5RTixwDlMoiru3WAYiOn9uzf2rVXE',
}
```

This will render the correct meta tag in the `<head>` automatically. Once
this is deployed live, I will complete verification on my end in Search
Console. After that, submit the sitemap at
`https://stackverify.app/sitemap.xml` via Search Console — that's also
something I'll handle once verification is confirmed.

Vercel Web Analytics has also been enabled in the Vercel dashboard. The
code side needs:
- `npm install @vercel/analytics`
- Import `Analytics` from `@vercel/analytics/next` and render `<Analytics />`
  inside the `<body>` in `app/layout.tsx`

Both of these can be done in a single commit.

---

## Entry 4 — 2026-07-01 (fourth autonomous run)

**State at start:**
- Kim's 2026-07-01 human note provided GSC verification token and Vercel Analytics setup instructions
- 9 blog posts (including 7 from prior runs), 17 dataset entries
- Analytics still not wired up (now unblocked by Kim)

**What I decided to do and why:**
Two clear priority tasks from Kim's note: GSC verification + Vercel Analytics. Both are non-content, directly serve the 30-day goal by enabling measurement and indexing confirmation. After completing those, content work from the established backlog: melatonin drug interactions and garlic supplement interactions — both had solid sourcing identified in earlier journal entries.

**What I actually did (2 commits, both pushed):**

**Commit 1 — Analytics + GSC:**
- `npm install @vercel/analytics` — added `@vercel/analytics@^2.0.1` to package.json; package-lock.json updated
- Added `import { Analytics } from '@vercel/analytics/next'` to app/layout.tsx
- Rendered `<Analytics />` inside `<body>` in RootLayout, after the footer
- Added `verification: { google: 'A3XnPW9zk9QUje5RTixwDlMoiru3WAYiOn9uzf2rVXE' }` to the `metadata` export in app/layout.tsx

**Commit 2 — 2 blog posts + 2 dataset entries:**
- `app/blog/melatonin-drug-interactions/page.tsx`: covers CNS depressant additive sedation (benzodiazepines, z-drugs, alcohol), fluvoxamine CYP1A2 inhibition (17x melatonin levels — documented in NIH ODS fact sheet), warfarin case reports with appropriate hedging (evidence limited), nifedipine, immunosuppressants. Source: NIH ODS Melatonin fact sheet.
- `app/blog/garlic-supplement-interactions/page.tsx`: covers warfarin/antiplatelet additive effects (allicin mechanism), saquinavir CYP3A4 induction (~51% level reduction, documented in pharmacokinetic studies cited by NCCIH), broader CYP3A4 substrate context, surgical context. Sources: NCCIH Garlic, NIH ODS Garlic fact sheet.
- Dataset: added `melatonin-cns-depressants` (severity: moderate) and `garlic-antiretrovirals` (severity: high) entries with verified sources
- Blog index updated (9 posts now listed); sitemap updated with 2 new URLs
- Dataset now has 19 entries

**What the next run should know:**
- GSC verification is now deployed. Kim needs to complete verification in Search Console and submit the sitemap at https://stackverify.app/sitemap.xml. Once that's done, the indexing clock truly starts.
- Vercel Analytics is now live — Kim should see data in the Vercel dashboard once the deployment goes live. This finally unlocks the ability to measure whether content is getting traffic.
- "losartan" → matches potassium-ace-inhibitors. "spironolactone" → matches potassium-sparing-diuretics. "melatonin" + "zolpidem" → matches melatonin-cns-depressants. "garlic" + "saquinavir" → matches garlic-antiretrovirals.
- 9 blog posts, 19 dataset entries.
- Good next blog candidates:
  - "ginkgo biloba drug interactions" — ginkgo-warfarin is in the dataset (ginkgolides + PAF inhibition); expand to cover ginkgo + antiplatelet drugs (aspirin, clopidogrel), ginkgo + seizure threshold drugs. Source: NCCIH Ginkgo.
  - "melatonin and fluvoxamine" could be a standalone targeted post since the 17x melatonin level increase is a high-severity, high-search query — or leave it in the broader melatonin post for now.
  - "supplement interactions with statins" — SJW + simvastatin (CYP3A4 induction), red yeast rice (contains lovastatin analogue — an unusual one), CoQ10 + statins context. Broader topic with good search volume.
- Good next dataset entries:
  - Melatonin + fluvoxamine (deserves its own entry — the CYP1A2 mechanism and 17x level increase is distinct from the general CNS-depressant interaction). Source: NIH ODS Melatonin.
  - Ginkgo + antiplatelet drugs (aspirin, clopidogrel) — ginkgolide B is a PAF antagonist; additive antiplatelet risk. Source: NCCIH Ginkgo.
  - St. John's Wort + simvastatin/lovastatin — CYP3A4 induction reduces statin levels. Source: NCCIH SJW / existing NLM literature.

---

## Entry 5 — 2026-07-02 (fifth autonomous run)

**State at start:**
- 9 blog posts, 19 dataset entries (from Entry 4)
- GSC verification deployed; Vercel Analytics live (Kim to confirm sitemap submission once GSC verified)
- Entry 4 left a clear backlog: 3 dataset entries + 2 blog posts all with sourcing identified

**What I decided to do and why:**
All 3 dataset entries and both blog posts from the Entry 4 backlog had well-sourced mechanisms already identified — straightforward to execute without new research. Content volume matters for indexing runway: every page added now has more time to rank before the 30-day window closes. Completed everything from the backlog.

**What I actually did (2 commits, both pushed):**

**Commit 1 — 3 new dataset entries (22 total):**
- `melatonin-fluvoxamine`: CYP1A2 inhibition by fluvoxamine → ~17x melatonin level increase. Source: NIH ODS Melatonin fact sheet. Severity: high.
- `ginkgo-antiplatelets`: ginkgolide B PAF antagonism + aspirin/clopidogrel additive antiplatelet inhibition across multiple pathways. Source: NCCIH Ginkgo. Severity: moderate.
- `sjw-statins`: CYP3A4 induction by SJW reduces simvastatin/lovastatin plasma levels; pravastatin/rosuvastatin not affected (not CYP3A4-dependent). Source: NCCIH SJW. Severity: moderate.

**Commit 2 — 2 new blog posts + blog index + sitemap (11 posts total):**
- `ginkgo-biloba-drug-interactions`: warfarin (PAF + anticoagulation additive), aspirin/clopidogrel (multi-pathway antiplatelet synergy), seizure threshold context, surgical context. Source: NCCIH Ginkgo.
- `supplement-interactions-with-statins`: SJW CYP3A4 induction (simvastatin/lovastatin most affected; pravastatin/rosuvastatin not affected), red yeast rice contains monacolin K = lovastatin (double-dosing risk, high severity), CoQ10 depletion context (not dangerous, just background). Sources: NCCIH SJW, NCCIH Red Yeast Rice.

**What the next run should know:**
- 11 blog posts, 22 dataset entries now.
- Matcher coverage improvements: "fluvoxamine" + "melatonin" now matches `melatonin-fluvoxamine`. "aspirin" or "clopidogrel" + "ginkgo" now matches `ginkgo-antiplatelets`. "simvastatin" or "lovastatin" + "st. john's wort" now matches `sjw-statins`.
- Good next blog candidates:
  - "melatonin and fluvoxamine" standalone post — the 17x melatonin level increase is a very specific, high-severity, high-search query that warrants its own URL targeting "fluvoxamine melatonin interaction". Currently the fluvoxamine CYP1A2 interaction appears in the melatonin-drug-interactions post but not as its own targeted page.
  - "CoQ10 and statins" standalone — some search volume around this; could be a short focused post distinguishing the statin-CoQ10 depletion relationship from the red yeast rice / SJW actual interactions.
  - "omega-3 and warfarin" vs "fish oil and blood thinners" — already have the fish oil post; could add a targeted "omega-3 warfarin interaction" page for the more specific search query.
- Good next dataset entries:
  - Red yeast rice + statins deserves its own dedicated entry (currently only covered in the blog post). Would allow the checker to flag "red yeast rice" + "simvastatin" as high severity. Source: NCCIH Red Yeast Rice.
  - Ginkgo + seizure medications (valproate, phenytoin) — seizure threshold concern noted in blog post but no dataset entry exists. Source: NCCIH Ginkgo.
  - Vitamin E + warfarin — vitamin E in high doses has antiplatelet effects; often listed alongside fish oil / garlic in anticoagulation literature. Source: NIH ODS Vitamin E.
- Analytics/GSC: still waiting on Kim to confirm GSC verification is complete and sitemap submitted. No traffic data available yet to inform content prioritization.
- Build should pass: all new content follows identical TSX pattern, no new dependencies, JSON is valid.

---

## Human note — 2026-07-01 (from Kim, not the agent)

**Analytics and Search Console status (unblocking previous journal items):**
- Vercel Web Analytics is now live and tracking. The `<Analytics />`
  component is deployed and data is flowing to the Vercel dashboard.
- Google Search Console is verified (HTML tag method, confirmed). Sitemap
  at `https://stackverify.app/sitemap.xml` has been submitted and Google
  confirmed 11 pages discovered. Indexing is underway — no further action
  needed on this front. Do not add this to the "blocked" list in future
  journal entries; it is resolved.

**Blog writing style — apply to all new posts and retroactively fix existing ones:**

The blog posts need a writing style overhaul. The content and sourcing are
solid, but the format makes them hard to read. Apply these rules to all new
posts going forward, and retroactively fix existing posts when you have
spare turns after content work.

The core problem: structure is doing the work that prose should do. Every
interaction gets its own bold header + severity label + source line, which
makes the reader stop and re-orient constantly. It reads like a database
with narrative bolted on. Write actual articles instead.

Specific rules:

1. No headed section per interaction. Headers are for genuinely distinct
   topics within a post (e.g. "Absorption interactions" vs "Depletion
   interactions"). Not for each individual drug or substance. Discuss
   specific substances as named examples within flowing paragraphs.

2. Explain jargon immediately or don't use it. "Divalent cation" is fine
   if the next clause explains what that means in plain terms. Don't
   introduce a technical term and then use it freely two paragraphs later
   as if the reader now knows it. Pick a level of technicality and stay
   there throughout the post.

3. No severity badges inline. If severity matters, work it into the
   sentence: "The most clinically significant of these is the interaction
   with fluoroquinolone antibiotics..." not a standalone "Moderate severity"
   line under a header.

4. Avoid these specific patterns:
   - "can not" → always "cannot"
   - Sentences starting with "This is" or "This means"
   - "It is worth noting that..." / "It is important to note that..."
   - Passive where active is natural: "magnesium chelates the drug" not
     "the drug is chelated by magnesium"
   - Long parenthetical lists of brand names mid-sentence — pick the most
     common one: "ciprofloxacin (and other fluoroquinolones)" not
     "(ciprofloxacin, levofloxacin, moxifloxacin, Avelox, Levaquin...)"

5. Write a real introduction. One paragraph that tells the reader why this
   topic matters and what they'll understand by the end. Something a person
   might actually want to read.

6. Handle sources cleanly. Either fold the citation into a sentence
   ("...as documented in the NIH ODS magnesium fact sheet") or collect
   sources in a brief section at the end. Don't repeat "Source: NIH ODS..."
   after every interaction.

7. Target reader: smart and curious, not a pharmacist. Don't over-explain
   basics, but don't assume clinical knowledge either.

The magnesium post is the clearest example of what to fix — correct
information, wrong structure. A rewritten version would have 2-3 headers
instead of 6, sources folded into prose, and would read as a coherent
article rather than a formatted reference sheet.

---


## Human note — 2026-07-03 (from Kim, not the agent)

**Early traffic results — strategy is working, keep doing what you're doing.**

Checked Vercel Analytics just now (day 3 of the experiment). Numbers:
- 23 unique visitors, 45 page views in the last 7 days
- Referrers: google.com and bing.com already sending traffic
- Countries: US (48%), France (17%), Norway (13%), Austria (9%), Brazil (9%)
- Pages getting visits: /, /blog, /fish-oil-blood-thinners, /magnesium-drug-interactions, /st-johns-wort-drug-interactions, /vitamin-d-drug-interactions, /ginkgo-biloba-drug-interactions

This is real organic traffic from search engines, geographically distributed,
within 48 hours of sitemap submission. The blog post targeting strategy is
working — people are finding these pages via real search queries.

What this means for your priorities:
- Keep writing blog posts on the same pattern: specific, high-intent
  supplement/drug interaction queries, well-sourced, clear mechanism
  explanations. The topics already in the backlog (melatonin, garlic
  supplement interactions, ginkgo biloba expanded, statins) are exactly
  the right type to continue with.
- The checker tool itself is getting the most traffic (19 of 23 visitors
  hit /). If you have ideas for improving the checker UX or expanding what
  it surfaces, that is worth prioritizing alongside content.
- Don't pivot — the current strategy is already producing results faster
  than expected for a brand new domain. Stay the course.
- 65% bounce rate is normal for informational content at this stage, not
  a signal to change anything.

---
