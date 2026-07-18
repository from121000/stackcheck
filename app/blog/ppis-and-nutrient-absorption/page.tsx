import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium',
  description:
    'Long-term proton pump inhibitor use impairs absorption of vitamin B12, iron, magnesium, and calcium through distinct mechanisms. What the NIH ODS fact sheets document for each.',
  openGraph: {
    title: 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium',
    description:
      'Omeprazole and other PPIs suppress gastric acid that multiple nutrients depend on. Four separate interactions, four separate mechanisms — what chronic PPI users should know.',
    type: 'article',
    publishedTime: '2026-07-15',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/ppis-and-nutrient-absorption",
  },
};

export default function PPIsAndNutrientAbsorption() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium",
            "datePublished": "2026-07-15",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-15</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Proton pump inhibitors — omeprazole, lansoprazole, pantoprazole, esomeprazole, and
          others — are among the most prescribed drug classes in the world. They work by
          irreversibly blocking the proton pumps in gastric parietal cells, substantially
          reducing stomach acid. For people with GERD, peptic ulcers, or Barrett&apos;s esophagus,
          this is the point. But gastric acid is not just a problem to manage. Several
          essential nutrients depend on it — directly or indirectly — to be absorbed from
          food and supplements. Long-term PPI use, particularly daily use for a year or more,
          has documented effects on vitamin B12, iron, magnesium, and calcium absorption,
          through four distinct mechanisms.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Vitamin B12: the protein unbinding problem
          </h2>
          <p>
            Dietary vitamin B12 arrives in food tightly bound to proteins. Before it can
            be absorbed, gastric acid must denature those proteins to release B12 in free form.
            Once free, B12 binds to intrinsic factor — secreted by the same parietal cells
            that produce acid — and travels to the ileum for absorption. PPIs suppress both
            acid secretion and parietal cell function, impairing each step: the acid-dependent
            protein release and the intrinsic factor-dependent ileal uptake.
          </p>
          <p className="mt-3">
            The NIH ODS Vitamin B12 fact sheet identifies chronic PPI use as a recognized
            cause of B12 malabsorption. An important nuance: crystalline B12 in supplements
            (tablets, sublingual lozenges) is already unbound from protein and does not require
            the acid-dependent release step. High-dose crystalline B12 supplements are
            substantially less affected by PPI therapy than dietary B12 from meat and dairy.
            People on long-term PPIs who are concerned about B12 status are better served by
            a supplement than by increasing dietary sources alone.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Iron: acid-dependent conversion to the absorbable form
          </h2>
          <p>
            Most dietary iron and many iron supplements contain iron in the ferric state (Fe³⁺).
            The intestinal DMT1 transporter absorbs iron only in the ferrous form (Fe²⁺).
            That conversion — Fe³⁺ to Fe²⁺ — requires an acidic environment. PPIs raise
            stomach pH, impairing this conversion and reducing non-heme iron absorption.
            The NIH ODS Iron fact sheet identifies this as a clinically relevant interaction.
            Epidemiological studies have found associations between long-term PPI use and
            iron deficiency.
          </p>
          <p className="mt-3">
            The effect is most pronounced with ferric iron forms. Ferrous iron supplements
            (ferrous sulfate, ferrous gluconate) are already in the Fe²⁺ state and do not
            require conversion, though some evidence suggests they may still be modestly
            affected by reduced gastric solubility under acid-suppressed conditions.
            Heme iron, from red meat and poultry, uses a completely separate absorption
            pathway and is not affected by PPIs. Taking iron supplements with vitamin C
            may partially compensate — vitamin C reduces Fe³⁺ to Fe²⁺ through a
            direct chemical mechanism that does not depend on stomach pH.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Magnesium: a separate mechanism that oral supplements cannot reliably fix
          </h2>
          <p>
            PPI-associated hypomagnesemia is mechanistically distinct from the B12 and iron
            interactions. It does not involve acid suppression impairing absorption — it
            involves PPIs impairing active magnesium transport in the colon through a
            pathway that is still not fully characterized. The FDA issued a safety
            communication in 2011 requiring all PPI labeling to include a warning about
            this interaction, noting it typically occurs with long-term use (usually more
            than one year) and may be severe enough to cause muscle cramps, irregular
            heartbeat, and seizures.
          </p>
          <p className="mt-3">
            What makes this interaction particularly notable is that oral magnesium
            supplementation does not reliably correct PPI-induced hypomagnesemia in many
            affected individuals. Some people require intravenous magnesium or discontinuation
            of the PPI to restore normal magnesium levels. Simply adding a magnesium
            supplement while continuing long-term PPI therapy may not be sufficient.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Calcium: form matters more than it does for iron
          </h2>
          <p>
            Calcium carbonate — the most common and inexpensive calcium supplement form —
            requires gastric acid to dissolve and ionize before it can be absorbed.
            In an acid-suppressed environment, calcium carbonate absorption is impaired.
            The NIH ODS Calcium fact sheet notes that calcium citrate does not require
            gastric acid and is the preferred form for people on acid-reducing medications
            or with achlorhydria. Epidemiological studies have found associations between
            long-term PPI use and increased fracture risk, consistent with impaired
            long-term calcium absorption.
          </p>
          <p className="mt-3">
            People on long-term PPIs who take calcium supplements should use calcium
            citrate rather than calcium carbonate to minimize this interaction. This is a
            straightforward switch that substantially reduces the acid-dependency of
            the supplement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How to think about this in practice
          </h2>
          <p>
            None of these interactions are reasons to stop a PPI if a clinician has
            recommended it. For someone with Barrett&apos;s esophagus or a history of
            GI bleeding, the protection a PPI provides is clinically significant.
            But for people on long-term daily PPIs, these interactions are worth
            knowing and worth discussing with a prescriber at regular intervals —
            particularly for B12 status in older adults (who are already at risk
            for deficiency), iron status in premenopausal women and anyone with
            iron-deficiency anemia, and magnesium status in anyone experiencing
            unexplained muscle symptoms or cardiac arrhythmias.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-zinc-100 pt-6">
        <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
        <ul className="space-y-1 text-sm">
          <li><Link href="/blog/omeprazole-and-iron-absorption" className="underline hover:text-zinc-900">Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?</Link></li>
          <li><Link href="/blog/magnesium-and-ppis" className="underline hover:text-zinc-900">Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?</Link></li>
          <li><Link href="/blog/ppi-and-calcium-absorption" className="underline hover:text-zinc-900">Calcium Carbonate vs. Calcium Citrate: Does Your PPI or Antacid Matter?</Link></li>
        </ul>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter your PPI alongside
        any vitamin or mineral supplement in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see relevant interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Sources:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Vitamin B12 — Health Professional Fact Sheet
        </a>
        {', '}
        <a
          href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Iron — Health Professional Fact Sheet
        </a>
        {', '}
        <a
          href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Magnesium — Health Professional Fact Sheet
        </a>
        {', '}
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
