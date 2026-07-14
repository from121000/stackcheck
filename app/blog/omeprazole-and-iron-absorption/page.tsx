import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?',
  description:
    'Proton pump inhibitors like omeprazole suppress the gastric acid needed to convert dietary iron to its absorbable form. Long-term PPI use is associated with iron deficiency in epidemiological studies.',
  openGraph: {
    title: 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?',
    description:
      'PPIs reduce gastric acid, which is required to convert Fe³⁺ to Fe²⁺ for intestinal absorption. What the NIH ODS Iron fact sheet documents and what it means for people on long-term PPI therapy.',
    type: 'article',
    publishedTime: '2026-07-14',
  },
};

export default function OmeprazoleAndIronAbsorption() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-14</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Iron deficiency is one of the most common nutritional deficiencies worldwide, and
          proton pump inhibitors — omeprazole, lansoprazole, pantoprazole, esomeprazole, and
          others — are among the most widely prescribed drugs. Many people take both: a PPI
          for acid reflux or stomach protection and an iron supplement for deficiency or anemia.
          What is less widely understood is that PPIs impair iron absorption through a direct
          chemical mechanism, which means long-term PPI users may absorb less iron from both
          food and supplements than they expect.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why gastric acid matters for iron absorption
          </h2>
          <p>
            Most dietary iron and many iron supplements contain iron in the ferric state (Fe³⁺).
            The small intestine cannot absorb ferric iron directly. The DMT1 transporter
            (divalent metal transporter 1) in the intestinal lining absorbs iron only in the
            ferrous form (Fe²⁺). Before ferric iron can be absorbed, it must be chemically
            reduced — converted from Fe³⁺ to Fe²⁺. This reduction happens primarily in the
            acidic environment of the stomach, where hydrogen ions facilitate the conversion.
          </p>
          <p className="mt-3">
            PPIs suppress this acidic environment by irreversibly blocking the proton pumps
            in gastric parietal cells. With stomach pH raised from its normal acidic range
            toward neutral, the ferric-to-ferrous conversion is impaired. Iron passes into
            the small intestine in a form the DMT1 transporter handles poorly. The result is
            reduced non-heme iron absorption — the NIH ODS Iron fact sheet identifies this
            interaction explicitly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Which iron forms are most affected
          </h2>
          <p>
            Not all iron supplements are equally affected. Ferrous sulfate, ferrous gluconate,
            and ferrous fumarate are already in the Fe²⁺ state and do not require the
            ferric-to-ferrous conversion step — they can be absorbed directly by DMT1.
            In theory, ferrous iron supplements are less dependent on gastric acid than
            ferric forms. In practice, the evidence suggests that even ferrous iron absorption
            may be somewhat impaired under achlorhydric conditions, possibly because gastric
            acid also helps maintain iron solubility and prevent precipitation before
            the absorption window.
          </p>
          <p className="mt-3">
            Heme iron — the form found in red meat, poultry, and fish — is absorbed through
            a separate pathway (heme carrier protein 1, HCP1) that is not pH-dependent.
            PPI therapy does not appear to impair heme iron absorption. People with iron
            deficiency on PPIs who can eat red meat are getting their heme iron delivered
            by a pathway PPIs do not touch.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How significant is the effect in practice
          </h2>
          <p>
            Epidemiological studies have found associations between long-term PPI use and
            iron deficiency, and the pharmacological rationale is solid. The effect is more
            pronounced with longer duration of PPI use and higher doses — someone taking a
            double-dose PPI every day for years will have more sustained acid suppression,
            and therefore more impaired iron conversion, than someone who takes a standard
            dose occasionally. For the large population of people who take PPIs daily for
            years, iron status is worth monitoring.
          </p>
          <p className="mt-3">
            One practical consideration: taking vitamin C with an iron supplement may
            partially offset the PPI effect. Vitamin C reduces Fe³⁺ to Fe²⁺ independently
            of gastric acid, through a separate chemical reduction mechanism. It cannot
            fully replace acid-mediated conversion, but taking iron with orange juice or
            a vitamin C supplement may improve absorption relative to taking iron alone
            while on a PPI.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Magnesium: a separate PPI interaction
          </h2>
          <p>
            Iron is not the only mineral that long-term PPI use affects. Prolonged PPI therapy
            is also associated with hypomagnesemia — low serum magnesium — through an unrelated
            mechanism involving impaired active magnesium transport in the colon. The FDA issued
            a safety communication on this interaction in 2011. Unlike the iron interaction,
            PPI-induced magnesium depletion does not respond reliably to oral magnesium
            supplementation in some affected individuals. If you take magnesium alongside a
            PPI, this association is worth knowing.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter your PPI alongside
        iron or magnesium in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see these interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Sources:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Iron — Health Professional Fact Sheet
        </a>
        {' '}and{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Magnesium — Health Professional Fact Sheet
        </a>
        {' '}(NIH Office of Dietary Supplements)
      </div>
    </main>
  );
}
