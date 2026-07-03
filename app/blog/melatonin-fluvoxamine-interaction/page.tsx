import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing',
  description:
    'Fluvoxamine inhibits CYP1A2, the enzyme that breaks down melatonin, raising melatonin blood levels roughly 17-fold. What this means for people on Luvox who take melatonin for sleep.',
  openGraph: {
    title: 'Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing',
    description:
      'Fluvoxamine raises melatonin levels ~17x by inhibiting CYP1A2. What the NIH ODS fact sheet documents and why the usual "low dose is fine" reasoning breaks down.',
    type: 'article',
    publishedTime: '2026-07-03',
  },
};

export default function MelatoninFluvoxamineInteraction() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-03</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Most people who take melatonin for sleep don&apos;t think much about what else is in their
          medicine cabinet. For the most part, that&apos;s a reasonable default — melatonin&apos;s
          interaction profile is limited. The exception worth knowing is fluvoxamine (Luvox), an
          SSRI used primarily for OCD and sometimes depression. The combination doesn&apos;t cause
          serotonin syndrome or anything acutely dangerous. What it does is push melatonin blood
          levels dramatically higher than the dose taken would suggest — enough that the usual
          reasoning about low-dose melatonin being harmless no longer applies.
        </p>

        <p>
          The mechanism is metabolic. Melatonin is broken down primarily by cytochrome P450 1A2
          (CYP1A2), a liver enzyme. Fluvoxamine is a potent inhibitor of CYP1A2 — not a mild one.
          A pharmacokinetic study cited in the NIH ODS melatonin fact sheet found that
          co-administration of fluvoxamine increased melatonin&apos;s area under the curve by
          approximately 17-fold. To make that concrete: 1&nbsp;mg of melatonin taken while on
          fluvoxamine may produce systemic melatonin exposure equivalent to roughly 17&nbsp;mg —
          well above what most researchers consider necessary or beneficial for sleep onset.
        </p>

        <p>
          High melatonin levels from this combination are not well-characterized in terms of harm,
          but the dose becomes unpredictable in a way that matters. Melatonin at very high exposures
          is associated with next-day grogginess, prolonged sedation, and potential disruption to
          the circadian signaling the supplement is supposed to support. The concern is less about a
          specific acute risk and more that you&apos;re no longer taking the dose you think you are.
        </p>

        <p>
          Other SSRIs don&apos;t have the same effect. Fluoxetine and sertraline primarily inhibit
          CYP2D6 and have little meaningful effect on CYP1A2. Fluvoxamine is unusual among
          antidepressants in its strong CYP1A2 inhibition — the same property also raises caffeine
          levels significantly (caffeine is another CYP1A2 substrate) and affects theophylline.
          Paroxetine and citalopram are similarly spared.
        </p>

        <p>
          If you&apos;re on fluvoxamine and want to use melatonin, the relevant guidance is to use
          the lowest possible dose and to raise it with your prescriber — not because there&apos;s
          a dramatic risk to disclose, but because they should know the combination is in play and
          can advise on whether any dose adjustment makes sense. The NIH ODS melatonin fact sheet
          documents this interaction explicitly and is worth reading if you want the primary source.
        </p>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter melatonin alongside
          fluvoxamine or other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
