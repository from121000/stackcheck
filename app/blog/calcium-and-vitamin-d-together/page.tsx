import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calcium and Vitamin D Together: How They Work and When to Be Careful',
  description:
    'Vitamin D enhances calcium absorption through VDR-mediated intestinal transport — which is why they are commonly co-supplemented. But the combination carries a specific hypercalcemia risk with thiazide diuretics that is worth knowing.',
  openGraph: {
    title: 'Calcium and Vitamin D Together: How They Work and When to Be Careful',
    description:
      'Vitamin D enhances calcium absorption, making the combination sensible for most people. But thiazide diuretics plus calcium plus vitamin D can cause hypercalcemia. What the NIH ODS documents.',
    type: 'article',
    publishedTime: '2026-07-16',
  },
};

export default function CalciumAndVitaminDTogether() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-16</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Calcium and Vitamin D Together: How They Work and When to Be Careful
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Calcium and vitamin D are commonly sold together, and for good reason: vitamin D
          is required for efficient calcium absorption. For most people taking both, this
          is the intended outcome. But the same mechanism that makes vitamin D useful for
          calcium absorption also creates a specific risk in certain clinical contexts —
          particularly for people on thiazide diuretics, who have conditions causing
          hypercalcemia, or who are on medications that raise calcium levels through other
          pathways.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How vitamin D enhances calcium absorption
          </h2>
          <p>
            Vitamin D, in its active hormonal form as calcitriol (1,25-dihydroxyvitamin D3),
            binds to the vitamin D receptor (VDR) in intestinal epithelial cells. This
            activates genes encoding calcium transport proteins — primarily calbindin-D9k
            and TRPV6 — that pull calcium from the intestinal lumen into the bloodstream.
            Without sufficient vitamin D, the intestine absorbs calcium relatively inefficiently
            via passive diffusion; with adequate vitamin D, active transport substantially
            increases uptake.
          </p>
          <p className="mt-3">
            This is why clinical guidelines for bone health consistently recommend adequate
            vitamin D alongside calcium — not because they must be taken at the same time,
            but because chronic vitamin D deficiency limits how much calcium actually makes it
            from supplement to bloodstream. The NIH ODS Calcium fact sheet notes that
            calcium absorption in the intestine depends on vitamin D status.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The thiazide diuretic risk
          </h2>
          <p>
            Thiazide diuretics — hydrochlorothiazide, chlorthalidone, indapamide, and
            others — reduce urinary calcium excretion as a side effect of their mechanism
            of action. They block sodium-chloride cotransporters in the distal tubule of
            the kidney, and this indirectly increases calcium reabsorption. As a result,
            serum calcium rises modestly.
          </p>
          <p className="mt-3">
            When combined with vitamin D (which increases intestinal calcium absorption) and
            calcium supplements (which provide additional calcium load), the effect can
            compound: more calcium absorbed from the gut, less excreted by the kidney, net
            increase in circulating calcium. The NIH ODS Vitamin D fact sheet identifies
            this three-way interaction as a cause of hypercalcemia — elevated blood calcium —
            which at severe levels can cause kidney stones, nausea, weakness, confusion, and
            cardiac arrhythmias. The NIH ODS Calcium fact sheet specifically flags calcium
            supplements combined with thiazides as a hypercalcemia risk.
          </p>
          <p className="mt-3">
            Most people on thiazides who take moderate amounts of calcium and vitamin D will
            not develop symptomatic hypercalcemia — but higher supplement doses, particularly
            vitamin D supplementation in the range of several thousand IU daily combined with
            high-dose calcium supplements, increase the risk meaningfully. This combination
            warrants attention in anyone on a thiazide, particularly at higher supplement doses.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Other conditions that change the calculation
          </h2>
          <p>
            Beyond thiazides, several other conditions affect how calcium and vitamin D
            interact. Primary hyperparathyroidism causes excess calcium reabsorption from bone
            and excess calcium absorption from the gut (PTH upregulates calcitriol production);
            adding supplemental vitamin D can worsen hypercalcemia in people with uncontrolled
            hyperparathyroidism. Sarcoidosis and some other granulomatous diseases produce
            calcitriol outside the kidney through macrophage activity, independent of normal
            feedback regulation; supplemental vitamin D can drive calcitriol levels higher
            than the body&apos;s feedback mechanisms would otherwise allow.
          </p>
          <p className="mt-3">
            Vitamin D toxicity itself — from excessive supplementation — causes hypercalcemia
            through the same VDR-mediated mechanism operating at abnormally high vitamin D
            concentrations. This is distinct from the thiazide interaction and does not
            require any other medication to occur.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Form of calcium supplement matters separately
          </h2>
          <p>
            One additional nuance: if the person is also on acid-reducing medication (a PPI
            or H2 blocker), the form of calcium supplement affects how well it is absorbed
            independently of vitamin D. Calcium carbonate requires gastric acid to dissolve
            and ionize. Calcium citrate does not. For people on long-term acid-reducing
            therapy, calcium citrate is the recommended form regardless of vitamin D status —
            an issue covered in more detail in the{' '}
            <Link
              href="/blog/ppis-and-nutrient-absorption"
              className="underline hover:text-zinc-800"
            >
              PPI and nutrient absorption article
            </Link>.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter your calcium and
        vitamin D supplements alongside any medications in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see flagged interactions, including the thiazide hypercalcemia risk.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Sources:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Calcium — Health Professional Fact Sheet
        </a>
        {', '}
        <a
          href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Vitamin D — Health Professional Fact Sheet
        </a>
        {' '}(NIH Office of Dietary Supplements)
      </div>
    </main>
  );
}
