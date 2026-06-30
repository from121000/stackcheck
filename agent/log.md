# StackVerify Agent Journal

This file is your memory across runs. You have no other persistent state —
read this in full at the start of every run, alongside `AGENT.md`. Append a
new entry at the bottom each time you finish a run. Never edit or delete
past entries; this is an append-only log.

Each entry should cover: what you found when you started, what you decided
to do and why, what you actually did, and anything the next run needs to
know. Be specific — vague entries ("improved the site") are useless to your
future self.

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

<!-- Future entries go below this line. Do not edit anything above it. -->