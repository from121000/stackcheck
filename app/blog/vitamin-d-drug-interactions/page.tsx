import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vitamin D Drug Interactions: What the Evidence Shows',
  description:
    'Vitamin D supplements interact with thiazide diuretics, corticosteroids, and anti-seizure medications. What the mechanisms are and why they matter.',
  openGraph: {
    title: 'Vitamin D Drug Interactions: What the Evidence Shows',
    description:
      'Vitamin D can interact with thiazide diuretics (hypercalcemia risk), corticosteroids (depletion), and several other drug classes. What the NIH ODS documents.',
    type: 'article',
    publishedTime: '2026-07-01',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/vitamin-d-drug-interactions",
  },
};

export default function VitaminDDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-01</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Vitamin D Drug Interactions: What the Evidence Shows
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Vitamin D is one of the most widely supplemented nutrients — estimates suggest a large
          fraction of adults in many countries have low serum 25(OH)D levels, and supplementation
          is common at doses ranging from 400 IU to several thousand IU daily. At those doses,
          vitamin D interacts with several drug classes in ways that matter clinically. The
          interactions run in two directions: vitamin D affecting drug action, and drugs reducing
          vitamin D levels.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Thiazide diuretics and hypercalcemia
          </h2>
          <p>
            The most clinically significant vitamin D interaction for most supplement users involves
            thiazide diuretics — hydrochlorothiazide (HCTZ), chlorthalidone, indapamide, metolazone
            — among the most commonly prescribed blood pressure medications. Thiazides reduce urinary
            calcium excretion: the kidney retains more calcium than it normally would. Vitamin D
            increases intestinal calcium absorption: more calcium is pulled in from food and
            supplements. Both mechanisms raise circulating calcium, and together they can push it
            above the normal range — a condition called hypercalcemia.
          </p>
          <p className="mt-3">
            Symptoms of hypercalcemia range from mild (fatigue, constipation, increased thirst) to
            serious (kidney stones, impaired kidney function, cardiac arrhythmia at higher levels).
            The risk is highest with higher vitamin D doses and in people who also take calcium
            supplements — three converging inputs on blood calcium. This interaction is documented in
            the vitamin D prescribing information and noted in the NIH ODS vitamin D fact sheet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Drugs that deplete vitamin D
          </h2>
          <p>
            Several drugs lower vitamin D levels rather than amplifying its effects. Corticosteroids
            — prednisone, methylprednisolone, dexamethasone, and others — reduce intestinal calcium
            absorption and may impair conversion of vitamin D to its active form (calcitriol).
            Long-term corticosteroid use is a well-established cause of secondary osteoporosis
            partly for this reason. Long-term users are often monitored for vitamin D status, and
            supplementation is frequently part of managing corticosteroid-induced bone loss.
          </p>
          <p className="mt-3">
            Anti-epileptic drugs — particularly phenytoin (Dilantin), phenobarbital, carbamazepine,
            and primidone — induce hepatic cytochrome P450 enzymes (primarily CYP2R1 and CYP24A1)
            that increase the breakdown of vitamin D and its metabolites. The result is lower serum
            25(OH)D in people on long-term anti-seizure therapy. Phenytoin has an additional
            mechanism: it may directly reduce intestinal calcium absorption. Long-term use of these
            medications is associated with lower bone density and higher fracture risk, with vitamin
            D depletion as a contributing factor.
          </p>
          <p className="mt-3">
            Orlistat (a fat absorption inhibitor used for weight management) and cholestyramine
            (a bile acid sequestrant used to lower cholesterol) both reduce absorption of
            fat-soluble vitamins, including vitamin D. Both reduce how much dietary and supplemental
            vitamin D reaches the bloodstream.
          </p>
        </section>

        <p>
          All of the interactions above are documented in the{' '}
          <a
            href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-900"
          >
            NIH ODS vitamin D health professional fact sheet
          </a>
          .
        </p>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter vitamin D alongside
          your other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see which documented interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
