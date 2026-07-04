import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Iron Supplements and Levothyroxine: A Clinically Important Interaction',
  description:
    'Iron supplements can significantly reduce levothyroxine absorption through chelation in the GI tract. What the evidence shows and why it matters for thyroid patients.',
  openGraph: {
    title: 'Iron Supplements and Levothyroxine: A Clinically Important Interaction',
    description:
      'Iron supplements may reduce levothyroxine absorption via chelation — a well-documented interaction noted in thyroid medication prescribing information.',
    type: 'article',
    publishedTime: '2026-06-30',
  },
};

export default function IronLevothyroxine() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-06-30</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Iron Supplements and Levothyroxine: A Clinically Important Interaction
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Levothyroxine (sold as Synthroid, Tirosint, and generics) is one of the most commonly
          prescribed medications in the United States — the standard treatment for hypothyroidism.
          Iron supplements are also extremely common, particularly among people with anemia,
          pregnancy, or heavy menstrual periods. The overlap is frequent enough that their
          interaction is well worth understanding.
        </p>

        <p>
          Iron forms insoluble complexes — chelates — with levothyroxine molecules when both are
          present in the gastrointestinal tract at the same time. The resulting complex is poorly
          absorbed, so less of the thyroid medication reaches the bloodstream. Studies have measured
          reductions in levothyroxine bioavailability when taken with ferrous sulfate, with some
          reporting decreases in the range of 30–40%. The practical consequence is that thyroid
          hormone levels may fall below the intended therapeutic range. This interaction is
          recognized in levothyroxine prescribing information and noted in the NIH ODS iron fact
          sheet. It applies to ferrous sulfate (the most common supplement form), ferrous gluconate,
          and ferric salts. Dietary iron from food is unlikely to cause the same degree of
          interference because it arrives in the gut differently than a supplement bolus.
        </p>

        <p>
          The interaction is rated moderate rather than high because it is generally manageable —
          it does not create an acute dangerous situation. The concern is chronic under-medication
          of thyroid disease, which has its own health consequences, particularly for people where
          TSH control matters. Timing is the practical solution: levothyroxine is typically taken on
          an empty stomach in the morning, with iron and other supplements taken separately by
          several hours.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Other minerals with similar effects
          </h2>
          <p>
            Levothyroxine absorption is affected by a broader class of divalent cations, not just
            iron. Calcium carbonate (from supplements and antacids) has a similar chelation
            mechanism. Magnesium-containing antacids may also interfere. If you take levothyroxine
            and any of these supplements, a pharmacist can help you think through the timing.
          </p>
        </section>

        <p className="text-sm text-zinc-500">
          Source:{' '}
          <a
            href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Iron — Health Professional Fact Sheet
          </a>{' '}
          (NIH Office of Dietary Supplements)
        </p>

        <div className="mt-6 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter your supplements and
          medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see what interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
