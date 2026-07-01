import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calcium Supplement Drug Interactions: What Gets Affected',
  description:
    'Calcium supplements interact with bisphosphonates, levothyroxine, fluoroquinolone and tetracycline antibiotics through chelation in the GI tract. What the evidence shows.',
  openGraph: {
    title: 'Calcium Supplement Drug Interactions: What Gets Affected',
    description:
      'Calcium reduces the absorption of bisphosphonates, thyroid medication, and certain antibiotics through GI chelation. What the NIH ODS documents.',
    type: 'article',
    publishedTime: '2026-07-01',
  },
};

export default function CalciumSupplementInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-01</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Calcium Supplement Drug Interactions: What Gets Affected
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Calcium is among the most commonly taken supplements — bone health, osteoporosis
          prevention, dietary gaps. It is also one of the minerals most likely to interfere with
          medication absorption, and it does so through a simple, predictable mechanism: calcium
          ions bind to certain drug molecules in the gastrointestinal tract before they can be
          absorbed, forming insoluble complexes that pass through without entering the bloodstream.
          This is called chelation.
        </p>
        <p>
          The practical consequence: the drug is present but not bioavailable. A medication that
          is chelated may act as though a smaller dose was taken.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Bisphosphonates — osteoporosis medications
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Bisphosphonates — alendronate (Fosamax), risedronate (Actonel), ibandronate (Boniva),
            and zoledronic acid (oral form) — are first-line medications for osteoporosis. They
            are already poorly absorbed under ideal conditions: oral bioavailability is typically
            under 1% when taken correctly (fasting, with plain water, upright for 30 minutes).
          </p>
          <p className="mt-3">
            Calcium chelates bisphosphonate molecules in the gut and can further reduce this
            already-low absorption. Bisphosphonate prescribing guidelines explicitly state that
            the medication should not be taken within 30–120 minutes of calcium supplements
            (depending on the specific drug). Since the target population for bisphosphonates
            — people with osteoporosis or low bone density — is the same population most likely
            to take calcium supplements, this is a clinically important timing conflict.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Calcium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Levothyroxine — thyroid medication
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Levothyroxine (Synthroid, generic) is the standard treatment for hypothyroidism.
            Its absorption from the gut is sensitive to interference: it should be taken on an
            empty stomach, and several substances are known to reduce how much of it reaches
            the bloodstream.
          </p>
          <p className="mt-3">
            Calcium is one of them. Calcium ions bind levothyroxine in the GI tract, reducing
            absorption and potentially lowering the effective dose. This is the same mechanism
            as iron reducing levothyroxine absorption — both are common in hypothyroid patients
            (iron deficiency is more prevalent in hypothyroidism, and calcium supplements are
            common in the demographic that develops hypothyroidism). The NIH ODS calcium fact
            sheet notes this interaction.
          </p>
          <p className="mt-3">
            The standard clinical approach is to take levothyroxine separately from calcium
            supplements by several hours — but the specific guidance should come from the
            prescribing provider, since it depends on the individual&apos;s TSH stability and
            current dose.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Calcium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Fluoroquinolone and tetracycline antibiotics
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Calcium chelates fluoroquinolone antibiotics (ciprofloxacin, levofloxacin, moxifloxacin)
            and tetracyclines (doxycycline, minocycline) in the GI tract, reducing their
            bioavailability. This is the same mechanism seen with magnesium, zinc, and iron and
            the same drug classes — all divalent or trivalent cations bind these antibiotics.
          </p>
          <p className="mt-3">
            The concern here is acute rather than chronic: it applies during a course of antibiotics,
            where missing doses or reducing bioavailability could affect whether an infection is
            adequately treated. The prescribing information for both fluoroquinolones and
            tetracyclines includes warnings about concurrent use with calcium-containing products
            including antacids and dairy.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Calcium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Iron absorption — supplement–supplement interaction
          </h2>
          <p>
            Calcium reduces non-heme iron absorption from both food and supplements when taken
            together. The mechanism is not purely chelation — it appears to involve competition
            at the intestinal transporter level — but the practical effect is similar: less iron
            absorbed per dose when calcium is present. This matters for people trying to correct
            iron deficiency while also taking calcium.
          </p>
          <p className="mt-3">
            The NIH ODS iron fact sheet notes that taking calcium supplements with iron supplements
            at the same time may reduce iron absorption. Separating them by a few hours is the
            standard recommendation.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Calcium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The timing principle
          </h2>
          <p>
            For all the chelation-based interactions, the main lever is time. These interactions
            require both substances to be in the gut simultaneously. Separating the medication
            from the calcium supplement by two or more hours (before or after, depending on
            specific guidance) typically avoids most of the interaction. This is why bisphosphonate
            and levothyroxine prescribing instructions emphasize morning dosing on an empty stomach
            — before supplements are taken.
          </p>
          <p className="mt-3">
            The practical challenge is that people often don&apos;t know this applies to calcium.
            Calcium is perceived as benign and &quot;just a supplement.&quot; Its effects on drug
            absorption are real enough to be noted in medication prescribing information, and they
            can affect the clinical management of osteoporosis, thyroid disease, and acute
            infections.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter calcium alongside
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
