import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium Drug Interactions: What Gets Affected and Why',
  description:
    'Magnesium supplements interact with several medication classes — antibiotics, bisphosphonates, and more — mainly through chelation in the GI tract. Here is what the evidence shows.',
  openGraph: {
    title: 'Magnesium Drug Interactions: What Gets Affected and Why',
    description:
      'Magnesium interacts with fluoroquinolone antibiotics, bisphosphonates, and other medications through chelation. What the NIH ODS fact sheet documents.',
    type: 'article',
    publishedTime: '2026-06-30',
  },
};

export default function MagnesiumDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-06-30</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Magnesium Drug Interactions: What Gets Affected and Why
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Magnesium supplements are taken widely — for sleep, muscle cramps, migraines, and general
          nutritional support. They are also among the more pharmacologically active minerals when
          it comes to drug interactions, for a simple chemical reason: magnesium is a divalent
          cation (Mg²⁺) that binds tightly to certain drug molecules in the gastrointestinal tract,
          reducing how much of the drug gets absorbed.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The primary mechanism: chelation
          </h2>
          <p>
            When magnesium ions are present in the gut alongside certain medications, they can form
            insoluble complexes — a process called chelation. The resulting compound is poorly
            absorbed through the intestinal wall, so less of the drug reaches the bloodstream.
            This is the same mechanism that makes calcium, iron, and zinc interact with similar
            medications — they are all divalent or trivalent cations with the same binding tendency.
          </p>
          <p className="mt-3">
            The practical consequence is reduced drug bioavailability: the drug is present in the
            gut but can not be absorbed properly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Fluoroquinolone antibiotics
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            The best-documented magnesium drug interaction is with fluoroquinolone antibiotics —
            ciprofloxacin (Cipro), levofloxacin (Levaquin), moxifloxacin (Avelox), and related
            drugs. Magnesium chelates these antibiotics in the GI tract, substantially reducing
            their absorption. This is clinically significant because fluoroquinolones are often
            prescribed for serious infections where achieving adequate blood levels matters.
          </p>
          <p className="mt-3">
            This interaction is explicitly noted in fluoroquinolone prescribing information.
            Antacids containing magnesium have the same effect, and patients are typically advised
            to separate them from the antibiotic by several hours.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Magnesium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Tetracycline antibiotics
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Tetracyclines (doxycycline, minocycline, tetracycline itself) interact with magnesium
            through the same chelation mechanism as fluoroquinolones. Magnesium ions bind to the
            antibiotic in the gut, reducing absorption. The NIH ODS fact sheet specifically notes
            that magnesium-containing products can decrease tetracycline absorption.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Magnesium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Bisphosphonates
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Bisphosphonates — medications used for osteoporosis, including alendronate (Fosamax),
            risedronate (Actonel), and ibandronate (Boniva) — are already poorly absorbed under
            ideal conditions (typically less than 1% oral bioavailability). Magnesium, like calcium,
            chelates bisphosphonate molecules in the gut and can further reduce what little
            absorption occurs. Bisphosphonate prescribing guidelines call for taking the medication
            with plain water and separating it from minerals, food, and other supplements.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Magnesium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Diuretics and magnesium depletion
          </h2>
          <p>
            Loop diuretics (furosemide/Lasix, bumetanide) and thiazide diuretics (hydrochlorothiazide,
            chlorthalidone) increase magnesium excretion in the urine, which can cause magnesium
            deficiency over time — the interaction here is the diuretic depleting the supplement,
            not the supplement reducing the drug.
          </p>
          <p className="mt-3">
            The NIH ODS fact sheet notes that long-term use of these diuretics is associated with
            significant urinary magnesium losses, and that magnesium supplementation may be needed
            in some patients on chronic loop or thiazide diuretic therapy.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Magnesium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Proton pump inhibitors
          </h2>
          <p>
            Long-term use of proton pump inhibitors (PPIs) — omeprazole (Prilosec), pantoprazole
            (Protonix), esomeprazole (Nexium), and others — has been associated with hypomagnesemia
            (low blood magnesium) in some patients, particularly after a year or more of use. The
            mechanism is not fully understood but may involve impaired intestinal magnesium
            transport. The FDA issued a safety communication about this in 2011, and it is noted
            in PPI prescribing information.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Magnesium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The practical pattern
          </h2>
          <p>
            For the chelation-based interactions (antibiotics, bisphosphonates), the main variable
            is timing. These interactions are concentration-dependent: both substances need to be
            in the gut at the same time to bind. Separating the antibiotic or bisphosphonate from
            magnesium-containing products by several hours is the standard clinical approach to
            managing them, but the specific timing guidance should come from the prescribing
            information for the medication in question.
          </p>
          <p className="mt-3">
            For the depletion interactions (diuretics, PPIs reducing magnesium), monitoring blood
            magnesium levels and discussing whether supplementation is appropriate is a conversation
            for the prescribing provider.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter magnesium alongside
          your other supplements and medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see which documented interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
