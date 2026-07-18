import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calcium Carbonate vs. Calcium Citrate: Does Your PPI or Antacid Matter?',
  description:
    'Calcium carbonate requires stomach acid to dissolve and absorb. PPIs suppress that acid, reducing calcium carbonate absorption. Calcium citrate does not depend on acid. What the NIH ODS documents for people on acid-reducing medications.',
  openGraph: {
    title: 'Calcium Carbonate vs. Calcium Citrate: Does Your PPI or Antacid Matter?',
    description:
      'Calcium carbonate requires stomach acid to dissolve. PPIs suppress that acid, reducing its absorption. Calcium citrate is acid-independent. What the NIH ODS documents.',
    type: 'article',
    publishedTime: '2026-07-17',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/ppi-and-calcium-absorption",
  },
};

export default function PPIAndCalciumAbsorption() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-17</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Calcium Carbonate vs. Calcium Citrate: Does Your PPI or Antacid Matter?
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Most calcium supplements on the market contain one of two forms: calcium carbonate or
          calcium citrate. For most people, the choice makes relatively little practical difference —
          both are absorbed reasonably well when taken with food, and the elemental calcium content
          differs only modestly. But for people who take acid-reducing medications — proton pump
          inhibitors like omeprazole, or H2 blockers like famotidine — the form of calcium matters
          considerably. Calcium carbonate depends on stomach acid to dissolve and be absorbed. Calcium
          citrate does not. When stomach acid is suppressed, this distinction becomes clinically
          relevant.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why calcium carbonate needs acid
          </h2>
          <p>
            Calcium carbonate is poorly soluble at neutral or alkaline pH. In the normal acidic
            stomach environment, it reacts with hydrochloric acid to form calcium chloride — a
            highly soluble, easily absorbed form that passes efficiently into the small intestine
            for uptake. When stomach acid is suppressed by a PPI, the conversion to calcium
            chloride is incomplete. Calcium carbonate passes through the stomach partially
            undissolved and reaches the small intestine in a form that is less bioavailable.
          </p>
          <p className="mt-3">
            Proton pump inhibitors are particularly effective at this — they suppress parietal cell
            acid secretion by blocking the proton pump directly, raising stomach pH substantially.
            H2 blockers produce a similar but less complete effect. In both cases, the acid
            environment that calcium carbonate requires is reduced or absent during the period of
            peak drug activity.
          </p>
          <p className="mt-3">
            The NIH ODS Calcium fact sheet explicitly notes this form difference: calcium carbonate
            absorption is impaired in low-acid conditions, while calcium citrate absorption is not
            significantly affected. Calcium citrate is already in a soluble, readily absorbed form
            that does not depend on an acidic environment for dissolution.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Who this matters most for
          </h2>
          <p>
            The population on chronic PPI therapy overlaps significantly with the population that
            most needs reliable calcium absorption. Older adults — who are disproportionately likely
            to be on PPIs for GERD or to be taking antacids regularly — are also the group most at
            risk for osteoporosis and most reliant on supplements to meet calcium needs that are
            harder to achieve through diet alone. If calcium supplements fail to absorb effectively
            in this group, the protective effect against bone loss is diminished.
          </p>
          <p className="mt-3">
            Long-term PPI use is itself independently associated with increased fracture risk in
            observational studies, though the mechanism is debated — it may involve impaired
            calcium absorption, the separately documented magnesium depletion associated with PPIs,
            or confounding by the underlying conditions that required PPI therapy. Whatever the
            mechanism, adding impaired calcium carbonate absorption to an already elevated fracture
            risk is worth avoiding when an acid-independent alternative exists.
          </p>
          <p className="mt-3">
            Calcium citrate costs somewhat more than calcium carbonate, and the tablets are typically
            larger because calcium citrate has lower elemental calcium content per gram. But for
            someone on a PPI who needs supplemental calcium, the absorption reliability of citrate
            makes it the better choice — this is a case where the form genuinely matters.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Timing and dietary calcium
          </h2>
          <p>
            For people not on acid-reducing medications, calcium carbonate is best absorbed when
            taken with food — the meal stimulates acid secretion, which helps dissolve it. Calcium
            citrate can be taken with or without food, since it does not require acid for
            dissolution.
          </p>
          <p className="mt-3">
            Dairy-derived calcium from food is affected differently than supplements. Calcium in
            milk and yogurt is already in solution within a protein matrix and is absorbed through
            mechanisms that are less dependent on gastric acid than carbonate dissolution. Dietary
            calcium sources remain worth prioritizing regardless of medication status, but for
            supplemental calcium in PPI users, form matters.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter your PPI or antacid
        alongside a calcium supplement in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged. You can also check for other PPI-related nutrient
        interactions — B12, iron, and magnesium.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Calcium — Health Professional Fact Sheet
        </a>
        {' '}(NIH Office of Dietary Supplements)
      </div>
    </main>
  );
}
