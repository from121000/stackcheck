import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Taking Calcium and Iron Together: Why Timing Matters',
  description:
    'High-dose calcium and iron compete for the same intestinal transporter. Taking them together at supplement doses reduces iron absorption by 30–60%. What the research shows and when to space them.',
  openGraph: {
    title: 'Taking Calcium and Iron Together: Why Timing Matters',
    description:
      'Calcium and iron share the DMT1 transporter in the gut. Simultaneous supplementation reduces iron absorption significantly. What the NIH ODS documents and how to take them both effectively.',
    type: 'article',
    publishedTime: '2026-07-15',
  },
};

export default function CalciumAndIronAbsorption() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-15</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Taking Calcium and Iron Together: Why Timing Matters
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Many people take both calcium and iron supplements — often for independent
          reasons like bone density and iron-deficiency anemia. The combination is
          common enough that it comes up regularly in clinical practice. The problem
          is that calcium and iron compete for the same intestinal transporter, and
          taking them together at supplement doses substantially reduces iron absorption.
          The NIH ODS Calcium fact sheet identifies this as a clinically relevant
          interaction that is easy to avoid with simple timing.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why they compete: shared intestinal machinery
          </h2>
          <p>
            Iron in the ferrous form (Fe²⁺) and calcium (Ca²⁺) are both divalent
            cations — positively charged ions with a charge of 2+. The DMT1
            transporter (divalent metal transporter 1) in the lining of the small
            intestine handles the uptake of multiple divalent metals, including iron,
            zinc, manganese, and cobalt. Calcium does not use DMT1 as its primary
            uptake pathway — it mainly uses calcium-specific channels — but at high
            concentrations, calcium competes with iron at DMT1 and may also compete
            at other shared transport sites.
          </p>
          <p className="mt-3">
            The evidence for this competition comes from human absorption studies.
            One well-cited study found that 300 mg of calcium reduced iron
            absorption from a test meal by about 60% in healthy adults. Other
            studies have found reductions in the 30–50% range at similar supplemental
            doses. The effect is dose-dependent: typical dietary calcium from a single
            food source is not concentrated enough to produce this kind of reduction,
            but a 500–1000 mg calcium supplement tablet taken at the same time as an
            iron supplement creates the kind of competitive excess that meaningfully
            impairs iron uptake.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Who this matters for most
          </h2>
          <p>
            The combination of calcium and iron supplementation is especially common
            in premenopausal women (often iron-deficient, often taking calcium for
            bone health), pregnant women (who need both calcium and substantially
            increased iron), and older women taking both for osteoporosis prevention
            alongside iron for mild anemia. In any of these groups, getting less iron
            than intended from supplementation because calcium is blocking absorption
            could mean iron deficiency persists even with supplementation.
          </p>
          <p className="mt-3">
            The solution is simple: separate the two supplements by at least two hours.
            Iron absorption is highest on an empty stomach in the morning; calcium can
            be taken with food at a different time of day. Some people find iron better
            tolerated with a small amount of food, which is fine — just not alongside
            a calcium supplement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Food versus supplements: a meaningful distinction
          </h2>
          <p>
            The competition documented in absorption studies occurs at supplemental
            calcium concentrations. Calcium from a glass of milk or a piece of cheese
            consumed with a meal is distributed across a larger meal bolus and
            represents a smaller absolute calcium load than a 500 mg tablet. The NIH
            ODS notes that calcium from food sources is less likely to produce the
            concentrated competition seen with supplements. If someone eats a
            calcium-rich meal while taking iron, the interaction is real but less
            pronounced than when both come from supplements.
          </p>
          <p className="mt-3">
            This distinction matters practically: it is more important to separate
            iron supplements from calcium supplements than to avoid eating dairy foods
            entirely around the time of iron supplementation. The goal is to avoid
            concentrated competition, not eliminate calcium from the diet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Related: zinc also competes with iron
          </h2>
          <p>
            Calcium is not the only mineral that competes with iron at intestinal
            transporters. Zinc also competes with iron for DMT1 uptake, through the
            same divalent cation competition mechanism. People taking a full-spectrum
            mineral supplement alongside an iron supplement may be inadvertently
            reducing iron absorption from multiple competitive inputs simultaneously.
            The safest approach for anyone being treated for iron deficiency is to
            take iron alone, separated from other mineral supplements, and add vitamin
            C to the iron dose to enhance conversion and absorption.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter calcium and iron
        supplements in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
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
