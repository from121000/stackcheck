import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alcohol and Magnesium: Does Drinking Deplete Magnesium?',
  description:
    'Chronic alcohol use depletes magnesium through increased urinary excretion and impaired intestinal absorption. What the NIH ODS documents, why supplementation is less effective while drinking continues, and how this connects to common symptoms.',
  openGraph: {
    title: 'Alcohol and Magnesium: Does Drinking Deplete Magnesium?',
    description:
      'Alcohol causes magnesium depletion through two mechanisms: increased renal excretion and impaired intestinal absorption. The NIH ODS identifies alcoholism as a recognized cause of hypomagnesemia.',
    type: 'article',
    publishedTime: '2026-07-18',
  },
  alternates: {
    canonical: 'https://stackverify.app/blog/alcohol-and-magnesium',
  },
};

export default function AlcoholAndMagnesium() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Alcohol and Magnesium: Does Drinking Deplete Magnesium?",
            "datePublished": "2026-07-18",
            "publisher": {
              "@type": "Organization",
              "name": "StackVerify"
            }
          })
        }}
      />
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-18</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Alcohol and Magnesium: Does Drinking Deplete Magnesium?
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Magnesium is one of the nutrients most consistently depleted by chronic alcohol use — a
          well-established relationship that the NIH ODS identifies as a recognized cause of
          hypomagnesemia (low blood magnesium). People who drink heavily and then take magnesium
          supplements often ask whether the supplement offsets the effect of alcohol. The answer is
          partially yes, but the mechanisms that cause alcohol-related magnesium loss continue as
          long as drinking does, which limits how much supplementation can accomplish.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How alcohol depletes magnesium
          </h2>
          <p>
            Alcohol causes magnesium depletion through two independent pathways. The first and more
            significant is renal: alcohol directly impairs the kidney's tubular reabsorption of
            magnesium. Normally, the kidney filters large amounts of magnesium from the blood and
            then reabsorbs most of it before it reaches the urine. Alcohol disrupts this
            reabsorption process, increasing urinary magnesium excretion substantially. This effect
            is dose-dependent and occurs even with moderate drinking — it is not limited to heavy or
            chronic drinkers, though the cumulative effect is most pronounced with chronic use.
          </p>
          <p className="mt-3">
            The second pathway is gastrointestinal. Alcohol damages intestinal epithelial cells and
            impairs nutrient absorption broadly, including magnesium. Chronic heavy drinking also
            causes poor dietary intake — alcohol displaces food calories, and the diet of heavy
            drinkers tends to be deficient in magnesium-rich foods. Vomiting associated with heavy
            drinking further reduces absorption opportunity. These nutritional factors compound the
            direct renal effect, making alcohol-associated hypomagnesemia a convergence of multiple
            mechanisms rather than a single one.
          </p>
          <p className="mt-3">
            The clinical consequence is that heavy drinkers have substantially lower magnesium levels
            than non-drinkers, on average. Hypomagnesemia is found in 30–80% of alcoholics admitted
            to hospital settings. The symptoms — muscle cramps, tremors, irritability, arrhythmias —
            overlap with alcohol withdrawal symptoms, which complicates both diagnosis and
            attribution. In withdrawal settings, correcting magnesium deficiency is often part of
            clinical management precisely because of this overlap.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Magnesium supplementation while drinking
          </h2>
          <p>
            Taking magnesium supplements while continuing to drink is not pointless — it increases
            the pool of magnesium available for absorption and can partially offset the renal losses.
            But it cannot fully compensate for ongoing renal wasting if alcohol consumption
            continues. The kidney continues to excrete more magnesium than it should, and
            supplemental magnesium, like dietary magnesium, is subject to that same increased
            excretion. Higher supplemental doses may achieve adequate blood levels despite the
            increased loss, but this depends on the amount and frequency of drinking.
          </p>
          <p className="mt-3">
            The interaction also goes in the other direction for some forms of magnesium
            supplementation: magnesium oxide in particular has low inherent bioavailability
            (estimated 4–30% depending on the study). In people with alcohol-related GI
            dysfunction, this already low absorption rate may be further reduced. Magnesium glycinate
            and magnesium citrate are generally better absorbed, and magnesium citrate specifically
            has a reasonable evidence base for bioavailability in GI-compromised patients.
          </p>
          <p className="mt-3">
            The broader context matters here: magnesium is far from the only nutrient depleted by
            heavy alcohol use. Thiamine, folate, zinc, and B12 depletion are all documented
            consequences of chronic heavy drinking, often simultaneously. Addressing magnesium in
            isolation while the underlying cause continues has limited clinical impact. This is
            context the NIH ODS magnesium fact sheet provides for the alcohol-magnesium relationship.
          </p>
        </section>

        <p className="text-sm text-zinc-500 mt-2">
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

        <div className="mt-10 border-t border-zinc-100 pt-6">
          <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog/magnesium-drug-interactions" className="underline hover:text-zinc-900">Magnesium Drug Interactions: What Gets Affected and Why</Link></li>
            <li><Link href="/blog/magnesium-and-diuretics" className="underline hover:text-zinc-900">Diuretics and Magnesium Depletion: What Furosemide and Thiazides Do</Link></li>
            <li><Link href="/blog/magnesium-and-ppis" className="underline hover:text-zinc-900">Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?</Link></li>
          </ul>
        </div>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter magnesium alongside
          alcohol in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see what interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
