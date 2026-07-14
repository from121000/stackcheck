import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5-HTP and SSRIs: Is It Safe to Take Together?',
  description:
    'Combining 5-HTP with SSRIs raises serotonin through two independent mechanisms simultaneously — increased production plus reduced clearance. What NCCIH documents and why the answer is not "yes."',
  openGraph: {
    title: '5-HTP and SSRIs: Is It Safe to Take Together?',
    description:
      '5-HTP boosts serotonin production; SSRIs prevent its clearance. Together, they push serotonin higher than either does alone — and the symptoms of serotonin syndrome can start mild.',
    type: 'article',
    publishedTime: '2026-07-14',
  },
};

export default function FiveHTPAndSSRIs() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-14</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        5-HTP and SSRIs: Is It Safe to Take Together?
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          The short answer is no — combining 5-HTP with an SSRI is something to discuss with
          a prescriber rather than attempt independently. The reason is pharmacological, not
          precautionary hedging: 5-HTP and SSRIs both raise serotonin activity in the brain,
          but through completely different mechanisms, and those mechanisms are additive.
          Serotonin syndrome — the clinical condition that results from excess serotonergic
          activity — can start with symptoms that look like anxiety, restlessness, or side
          effects from the medication itself, which makes it easy to miss in its early stages.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why the two mechanisms compound
          </h2>
          <p>
            5-HTP is the direct metabolic precursor to serotonin. It crosses the blood-brain
            barrier and converts to serotonin via aromatic amino acid decarboxylase, bypassing
            the rate-limiting step of tryptophan conversion. Brain serotonin levels rise.
            SSRIs — fluoxetine, sertraline, escitalopram, citalopram, paroxetine — work by
            blocking the serotonin transporter (SERT), which normally clears serotonin from
            the synapse after it is released. With SERT blocked, serotonin that is released
            lingers longer, producing stronger and more sustained signaling.
          </p>
          <p className="mt-3">
            Taking both means serotonin is being produced at an elevated rate (5-HTP) and
            cleared more slowly than usual (SSRI). The two effects are independent of each
            other and add together, which is why NCCIH identifies this combination as a
            significant interaction and a serotonin syndrome risk. Neither mechanism is
            small — 5-HTP at supplemental doses produces real serotonin increases, and SSRIs
            at therapeutic doses produce real reuptake inhibition. Stacking them is not like
            adding a small top-up; it is running two serotonin-elevating mechanisms
            simultaneously at full effect.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The population most at risk for missing this
          </h2>
          <p>
            5-HTP is marketed for mood and sleep. SSRIs are prescribed for the same reasons.
            This creates a specific situation: people who feel their SSRI is not working as
            well as they&apos;d like sometimes add 5-HTP independently, reasoning that
            supplementing serotonin should help. The reasoning is intuitive and pharmacologically
            backwards. An SSRI does not work by providing more serotonin — it works by
            making existing serotonin more effective by preventing its clearance. The synapse
            already has elevated serotonin under SSRI treatment. Adding 5-HTP to produce
            more serotonin on top of reduced clearance is the setup for toxicity, not
            improved efficacy.
          </p>
          <p className="mt-3">
            Mild serotonin syndrome symptoms — agitation, tremor, diarrhea, dilated pupils,
            rapid heart rate, insomnia — are also symptoms that people starting or adjusting
            SSRIs commonly experience and often attribute to the medication or underlying
            condition. Someone who adds 5-HTP to their SSRI and experiences these symptoms
            may not connect them to the new supplement. The condition can progress, and
            moderate-to-severe serotonin syndrome involves hyperthermia, muscle rigidity,
            and seizures.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            SNRIs and other serotonergic drugs
          </h2>
          <p>
            The concern is not limited to SSRIs. SNRIs — venlafaxine and duloxetine — block
            both serotonin and norepinephrine reuptake; the serotonin component creates the
            same interaction dynamic with 5-HTP as SSRIs do. Tramadol, commonly prescribed
            for pain, has serotonin reuptake inhibiting properties alongside its opioid
            activity. Dextromethorphan, found in many over-the-counter cough medicines,
            is a mild serotonin reuptake inhibitor. Triptans for migraine act partly through
            serotonin receptor activity. The broader principle is that any drug that raises
            serotonin signaling through any mechanism warrants the same caution when
            considering 5-HTP.
          </p>
          <p className="mt-3">
            MAOIs are a distinct and higher-risk category — they block serotonin degradation
            entirely, which compounds with 5-HTP&apos;s production increase in a more severe
            way. If you take a prescribed MAOI for depression or a selective MAO-B inhibitor
            for Parkinson&apos;s, 5-HTP is not appropriate to add without explicit guidance
            from the prescriber. The linezolid antibiotic, used for drug-resistant infections,
            also has MAOI properties, making this concern relevant in settings where it would
            not be obvious.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter 5-HTP alongside
        your antidepressant in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged with the mechanism documented.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/5-hydroxytryptophan-5-htp"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — 5-Hydroxytryptophan (5-HTP)
        </a>
      </div>
    </main>
  );
}
