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
          vitamin D can interact with several drug classes in ways that matter clinically.
        </p>
        <p>
          The interactions run in two directions: vitamin D affecting drug action (the thiazide
          interaction), and drugs affecting vitamin D levels (corticosteroids, anti-seizure
          medications, statins).
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Thiazide diuretics — hypercalcemia risk
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            This is the most clinically significant vitamin D drug interaction for most supplement
            users. Thiazide diuretics — hydrochlorothiazide (HCTZ), chlorthalidone, indapamide,
            metolazone — are among the most commonly prescribed blood pressure medications. They
            reduce urinary calcium excretion: the kidney excretes less calcium than it normally
            would. Vitamin D increases intestinal calcium absorption: more calcium gets pulled in
            from food and supplements. Both mechanisms raise circulating calcium levels.
          </p>
          <p className="mt-3">
            Together, they can push calcium above the normal range — a condition called
            hypercalcemia. Symptoms of hypercalcemia range from mild (fatigue, constipation,
            increased thirst) to serious (kidney stones, impaired kidney function, cardiac
            arrhythmia at higher levels). The risk is highest with higher vitamin D doses and
            in people who also take calcium supplements, creating three converging inputs on
            blood calcium.
          </p>
          <p className="mt-3">
            This interaction is documented in the vitamin D prescribing information and noted
            in the NIH ODS fact sheet.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Vitamin D — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Corticosteroids — vitamin D depletion
          </h2>
          <p>
            Corticosteroids (prednisone, methylprednisolone, dexamethasone, and others) reduce
            intestinal calcium absorption and may impair the body&apos;s conversion of vitamin D
            to its active form (calcitriol). Long-term corticosteroid use is a well-established
            cause of secondary osteoporosis partly for this reason — reduced calcium absorption
            leads to bone resorption over time.
          </p>
          <p className="mt-3">
            This is a drug-depleting-supplement interaction rather than a supplement-affecting-drug
            interaction. Long-term corticosteroid users are often monitored for vitamin D status
            and supplementation is frequently part of the management of corticosteroid-induced bone
            loss.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Vitamin D — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Anti-seizure medications
          </h2>
          <p>
            Several anti-epileptic drugs — particularly phenytoin (Dilantin), phenobarbital,
            carbamazepine, and primidone — induce hepatic cytochrome P450 enzymes (primarily
            CYP2R1 and CYP24A1) that increase the breakdown of vitamin D and its metabolites.
            The result is lower serum 25(OH)D levels in people on long-term anti-seizure therapy.
          </p>
          <p className="mt-3">
            Phenytoin has an additional mechanism: it may directly reduce intestinal calcium
            absorption independently of its effect on vitamin D. Long-term use of these medications
            is associated with lower bone density and higher fracture risk, with vitamin D
            depletion as a contributing factor.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Vitamin D — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Orlistat and cholestyramine
          </h2>
          <p>
            Orlistat (Alli, Xenical) — a fat absorption inhibitor used for weight management —
            reduces absorption of fat-soluble vitamins including vitamin D. Cholestyramine
            (Questran), a bile acid sequestrant used to lower cholesterol, has a similar effect
            on vitamin D absorption. Both reduce the amount of dietary and supplemental vitamin D
            that reaches the bloodstream.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Vitamin D — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The calcium supplement amplifier
          </h2>
          <p>
            A pattern worth naming explicitly: the risk profile for the thiazide diuretic
            interaction scales with total calcium intake. Vitamin D increases calcium absorption;
            if someone is also taking calcium supplements (common for bone health) and a thiazide
            diuretic, all three inputs push blood calcium upward. The vitamin D fact sheet notes
            that vitamin D toxicity — rare from supplementation alone — becomes more likely when
            calcium supplements are added. People on thiazides who take both vitamin D and calcium
            supplements are the highest-risk group for this interaction.
          </p>
        </section>

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
