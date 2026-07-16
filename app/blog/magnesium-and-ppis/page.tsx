import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?',
  description:
    'Long-term PPI use causes hypomagnesemia through a colonic transport mechanism that oral magnesium supplements cannot reliably fix. What the FDA safety communication documents and what it means for people on chronic PPI therapy.',
  openGraph: {
    title: 'Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?',
    description:
      'Long-term PPI use causes hypomagnesemia through a colonic transport mechanism that oral magnesium supplements cannot reliably fix. What the FDA safety communication documents.',
    type: 'article',
    publishedTime: '2026-07-16',
  },
};

export default function MagnesiumAndPPIs() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-16</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Among the nutrient interactions associated with proton pump inhibitors, the magnesium
          interaction is unusual in two ways. First, it is not caused by acid suppression —
          the same mechanism responsible for the B12 and iron interactions. Second, oral
          magnesium supplements may not fix it. For people on long-term PPI therapy, this
          distinction matters.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            A mechanism that is still not fully understood
          </h2>
          <p>
            The stomach-acid interactions PPIs cause are well-characterized: reduce acid, impair
            the chemical steps that depend on acid, reduce absorption. The magnesium interaction
            does not work this way. PPI-associated hypomagnesemia — clinically low serum
            magnesium — appears to involve impaired active magnesium transport in the colon,
            not impaired absorption in the stomach or small intestine.
          </p>
          <p className="mt-3">
            Specifically, PPIs appear to interfere with the TRPM6 and TRPM7 ion channels that
            mediate active magnesium transport across the colonic epithelium. The precise
            mechanism remains incompletely characterized. What is clear from clinical data is
            that the interaction is real: hypomagnesemia associated with PPI use has been
            documented in case reports and observational studies, and the FDA took it seriously
            enough to require a warning.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The FDA safety communication
          </h2>
          <p>
            In 2011, the FDA issued a safety communication requiring all prescription and
            over-the-counter proton pump inhibitor labeling to include a warning about
            hypomagnesemia. The communication noted that the interaction typically appears
            with long-term use — generally more than one year — and that symptoms may include
            muscle spasms, irregular heartbeat, and seizures. Shorter-term use (under three
            months) rarely produces this effect.
          </p>
          <p className="mt-3">
            The NIH ODS Magnesium fact sheet documents this interaction, noting that
            hypomagnesemia has been reported with all PPI formulations and that it may be
            severe. In some documented cases, affected individuals required intravenous
            magnesium to restore serum levels. In others, stopping the PPI was the only
            effective intervention.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why oral magnesium may not be enough
          </h2>
          <p>
            The clinical data on PPI-induced hypomagnesemia consistently show that oral
            magnesium supplementation does not reliably correct it in affected individuals.
            Some people respond to oral supplements. Others do not, because the same colonic
            transport mechanism that was impaired by the PPI is the mechanism required to
            absorb supplemental magnesium from the colon — where the majority of active
            magnesium absorption happens.
          </p>
          <p className="mt-3">
            Adding a magnesium supplement is not necessarily wrong, but it may be insufficient.
            People whose serum magnesium remains low despite oral supplementation while on a
            PPI may need to discuss the situation with a prescriber — either moving to
            intravenous repletion or reconsidering the PPI if the indication allows it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Who is most at risk
          </h2>
          <p>
            Most people on PPIs for short-term use — treating an H. pylori infection, healing
            an ulcer, managing reflux during pregnancy — are unlikely to develop this problem.
            The interaction is associated with chronic daily use, typically for more than a year.
            Risk is higher in people who are also taking diuretics (which independently cause
            magnesium loss through the kidneys) or who have conditions associated with
            magnesium wasting.
          </p>
          <p className="mt-3">
            Symptoms of hypomagnesemia are easy to miss because they are nonspecific: muscle
            cramps, fatigue, weakness, and irregular heartbeat. Someone on a long-term PPI
            who develops unexplained muscle symptoms or cardiac arrhythmias is worth evaluating
            for magnesium status. Standard blood chemistry panels do not always include
            magnesium — it may need to be ordered separately.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter your PPI alongside
        any magnesium supplement in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged. You can also check for other PPI-related nutrient
        interactions (B12, iron, calcium).
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
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
