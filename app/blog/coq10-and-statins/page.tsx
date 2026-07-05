import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CoQ10 and Statins: The Depletion Relationship Explained',
  description:
    'Statins reduce the body\'s CoQ10 production by blocking the mevalonate pathway. Whether this contributes to muscle symptoms is still debated. What NCCIH documents and what the evidence actually shows.',
  openGraph: {
    title: 'CoQ10 and Statins: The Depletion Relationship Explained',
    description:
      'Statins lower CoQ10 levels by inhibiting the mevalonate pathway. The link to muscle symptoms is plausible but unproven. What the evidence says.',
    type: 'article',
    publishedTime: '2026-07-05',
  },
};

export default function CoQ10AndStatins() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-05</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        CoQ10 and Statins: The Depletion Relationship Explained
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Coenzyme Q10 — also called CoQ10 or ubiquinone — is a molecule the body makes in nearly
          every cell and that plays a central role in producing cellular energy. It also functions
          as an antioxidant. Most people get some CoQ10 from food (particularly meat and fish), but
          the body synthesizes most of what it needs. Statins, the widely prescribed
          cholesterol-lowering drugs, interfere with that synthesis — not as a side effect of
          targeting cholesterol, but as an unavoidable consequence of how they work.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why statins reduce CoQ10
          </h2>
          <p>
            Statins work by inhibiting HMG-CoA reductase, the rate-limiting enzyme in the mevalonate
            pathway. That pathway produces cholesterol — but it also produces a number of other
            molecules, including ubiquinone (CoQ10). Blocking HMG-CoA reductase reduces the supply
            of mevalonate available for all downstream products, CoQ10 among them.
          </p>
          <p className="mt-3">
            The result is that statin therapy lowers circulating CoQ10 levels, sometimes
            substantially. This isn&apos;t a drug–supplement interaction in the traditional sense
            (nothing about taking CoQ10 as a supplement changes what the statin does, and the statin
            doesn&apos;t interact with supplemental CoQ10 in a harmful way). It&apos;s a depletion
            relationship: the drug reduces the body&apos;s own production.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The muscle symptom question
          </h2>
          <p>
            A subset of people on statins experience muscle symptoms — aching, weakness, or
            fatigue, referred to broadly as statin-associated muscle symptoms (SAMS). The frequency
            varies across studies, but it&apos;s a recognized issue and one of the main reasons
            people stop taking statins.
          </p>
          <p className="mt-3">
            The obvious hypothesis is that reduced CoQ10 impairs mitochondrial energy production in
            muscle cells, causing the symptoms. It&apos;s mechanistically plausible: CoQ10 is
            central to the mitochondrial electron transport chain, and muscle is metabolically
            demanding tissue. But the clinical evidence has been inconsistent. Multiple randomized
            trials have compared CoQ10 supplementation against placebo in statin users with muscle
            symptoms, and results have been mixed — some trials showed benefit, others found no
            statistically significant difference.
          </p>
          <p className="mt-3">
            NCCIH summarizes the evidence as inconclusive: CoQ10 supplementation may help some
            people with statin-associated muscle symptoms, but the data aren&apos;t strong enough
            to support a definitive recommendation. The muscle symptoms themselves appear
            multifactorial — genetics, specific statin, and dose all play roles — which may explain
            why results across trials are heterogeneous.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            What this means practically
          </h2>
          <p>
            Taking CoQ10 alongside a statin is not contraindicated. There&apos;s no known safety
            concern with the combination, and the theoretical rationale for addressing statin-induced
            depletion is reasonable even if the clinical evidence hasn&apos;t consistently confirmed
            a benefit for muscle symptoms. CoQ10 supplements are generally well tolerated.
          </p>
          <p className="mt-3">
            This is a different situation from most of the interactions this site covers. It&apos;s
            not about one substance reducing the effectiveness of a medication, or creating additive
            toxicity. The relevant question is whether supplementing helps with a symptom that statins
            may cause — and on that question, the evidence is genuinely uncertain.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter CoQ10 alongside
        atorvastatin or another statin in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see the documented relationship.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Sources:{' '}
        <a
          href="https://www.nccih.nih.gov/health/coenzyme-q10"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH Coenzyme Q10
        </a>
      </div>
    </main>
  );
}
