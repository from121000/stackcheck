import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zinc Drug Interactions: Antibiotics, Iron, and Copper',
  description:
    'Zinc interacts with fluoroquinolone and tetracycline antibiotics through chelation, competes with iron for intestinal absorption, and at high doses can deplete copper. What the NIH ODS zinc fact sheet documents.',
  openGraph: {
    title: 'Zinc Drug Interactions: Antibiotics, Iron, and Copper',
    description:
      'Zinc reduces antibiotic absorption through chelation, competes with iron at shared transporters, and can deplete copper with prolonged high-dose use.',
    type: 'article',
    publishedTime: '2026-07-06',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/zinc-drug-interactions",
  },
};

export default function ZincDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-06</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Zinc Drug Interactions: Antibiotics, Iron, and Copper
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Zinc shows up in immune support supplements, multivitamins, and standalone capsules
          at doses ranging from a few milligrams to 50 mg or more. At those concentrations,
          its interactions with certain medications and other minerals are real and worth
          understanding — both for people taking antibiotics and for anyone combining zinc
          with iron or copper supplements over the long term.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Chelation and antibiotic absorption
          </h2>
          <p>
            Zinc is a divalent cation — a positively charged metal ion — and divalent cations
            have an affinity for binding to certain drug molecules in the gastrointestinal tract.
            The result is an insoluble chelate complex that cannot be absorbed. Fluoroquinolone
            antibiotics (ciprofloxacin and others) and tetracycline antibiotics (doxycycline,
            minocycline, tetracycline) are both vulnerable to this interaction.
          </p>
          <p className="mt-3">
            This is the same mechanism by which magnesium, calcium, and iron reduce absorption
            of these same antibiotic classes. Zinc does not have any special affinity here —
            it simply participates in the same chemistry. The practical consequence is the same:
            taking zinc within a few hours of a fluoroquinolone or tetracycline dose can
            meaningfully reduce how much antibiotic is absorbed. The NIH ODS zinc fact sheet
            documents both interactions. Most antibiotic prescribing information recommends
            separating the antibiotic from any divalent cation supplement by at least two hours
            before or after.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Competition with iron and copper
          </h2>
          <p>
            The interactions between zinc and other minerals happen through two distinct mechanisms,
            and they matter most for people taking multiple mineral supplements simultaneously.
          </p>
          <p className="mt-3">
            Zinc and iron are absorbed in the small intestine via the same transporter — DMT1
            (divalent metal transporter 1, also called SLC11A2). When both are present at high
            supplemental doses at the same time, they compete for the available transporter
            capacity, and absorption of each is reduced. The interaction is largely a function
            of dose ratio and timing: dietary amounts of both minerals coexist without much
            problem, but a 50 mg zinc supplement taken alongside an iron supplement can
            measurably impair iron absorption. The NIH ODS zinc fact sheet notes this competition
            and the practical solution — separation by a couple of hours — applies here as well.
          </p>
          <p className="mt-3">
            The zinc–copper relationship works differently and has a longer time horizon.
            High-dose zinc intake induces the production of metallothionein, a protein in
            intestinal epithelial cells that binds metals. The problem is that metallothionein
            binds copper with higher affinity than zinc. When metallothionein levels are elevated
            by chronic high zinc intake, copper gets trapped inside the enterocyte and excreted
            rather than absorbed into systemic circulation. At sustained doses around 50 mg/day
            or more over weeks to months, this can progressively deplete copper stores and
            eventually produce copper deficiency — which presents as anemia, neurological
            symptoms, and bone changes. This is actually exploited therapeutically in
            Wilson&apos;s disease, where excess copper accumulation is the problem; zinc is
            used to reduce copper absorption. For everyone else, the concern is inadvertent
            copper depletion from high-dose zinc supplements taken without a copper offset.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter zinc alongside
        ciprofloxacin, doxycycline, iron, or copper in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see these interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NIH ODS Zinc — Health Professional Fact Sheet
        </a>
      </div>
    </main>
  );
}
