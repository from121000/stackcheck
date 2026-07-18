import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome Risk',
  description:
    '5-HTP is a direct serotonin precursor. Combined with SSRIs or MAOIs, it can push serotonin levels dangerously high — a well-documented risk for serotonin syndrome. What NCCIH documents.',
  openGraph: {
    title: '5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome Risk',
    description:
      'Combining 5-HTP with antidepressants that affect serotonin — SSRIs, SNRIs, MAOIs — creates a real risk of serotonin syndrome by elevating serotonin through two independent mechanisms.',
    type: 'article',
    publishedTime: '2026-07-11',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/5-htp-drug-interactions",
  },
};

export default function FiveHTPDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome Risk",
            "datePublished": "2026-07-11",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-11</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome Risk
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          5-HTP (5-hydroxytryptophan) is sold as a supplement for mood, sleep, and appetite
          regulation, and it works — which is exactly the problem. It works by directly
          increasing serotonin production in the brain, crossing the blood-brain barrier and
          converting to serotonin with high efficiency. That mechanism is straightforward and
          well-characterized. What is less well understood by many users is that this same
          direct serotonergic activity makes 5-HTP one of the higher-risk supplements to
          combine with prescription antidepressants. The combination can produce too much
          serotonin, not just more.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            What serotonin syndrome is and how 5-HTP contributes
          </h2>
          <p>
            Serotonin syndrome is a drug reaction caused by excess serotonergic activity in
            the central nervous system. It exists on a spectrum: mild cases involve tremor,
            diarrhea, and restlessness; moderate cases add rapid heart rate, high blood
            pressure, and hyperthermia; severe cases can involve muscle rigidity, seizures,
            and in rare cases, death. The condition is most commonly triggered by combining
            two or more serotonin-active drugs — not by any single agent at typical doses.
          </p>
          <p className="mt-3">
            5-HTP is the direct metabolic precursor to serotonin. The biosynthetic path is
            tryptophan → 5-HTP → serotonin, and the second step — 5-HTP to serotonin — is
            carried out by aromatic amino acid decarboxylase, an enzyme present throughout
            the body and brain. Taking supplemental 5-HTP bypasses the rate-limiting step
            of tryptophan hydroxylation and delivers serotonin precursor directly. Brain
            serotonin levels rise.
          </p>
          <p className="mt-3">
            SSRIs (selective serotonin reuptake inhibitors) — including fluoxetine, sertraline,
            escitalopram, citalopram, and paroxetine — block the serotonin transporter (SERT),
            which normally clears serotonin from the synapse. With SERT blocked, serotonin
            accumulates in the synapse longer than it otherwise would. This is the therapeutic
            mechanism of SSRIs. Combining an SSRI with 5-HTP means serotonin is being both
            produced faster (5-HTP) and cleared more slowly (SSRI). The two effects are
            independent and additive, and together they substantially raise synaptic serotonin
            activity beyond what either agent produces alone. NCCIH identifies this combination
            as a significant interaction and a serotonin syndrome risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            MAOIs: a higher-risk combination
          </h2>
          <p>
            If SSRIs present a serious risk, combining 5-HTP with MAOIs (monoamine oxidase
            inhibitors) is more serious still. MAOIs block the enzyme that breaks down
            serotonin, dopamine, and norepinephrine. The result is that serotonin accumulates
            not just in the synapse but throughout the brain, because its primary degradation
            pathway has been eliminated. Add 5-HTP — which increases serotonin production —
            and you have simultaneous overproduction and blocked degradation. This is the
            pharmacological setup for severe serotonin syndrome.
          </p>
          <p className="mt-3">
            Traditional MAOIs (phenelzine, tranylcypromine, isocarboxazid) are used for
            depression when other treatments have failed and are irreversible — their effects
            persist for about two weeks after stopping. Selective MAO-B inhibitors like
            selegiline and rasagiline are used in Parkinson's disease and also inhibit
            serotonin metabolism at higher doses. Linezolid, an antibiotic used for
            drug-resistant infections, has MAOI properties and carries the same interaction
            risk despite not being prescribed for mood. Someone taking linezolid for a serious
            infection who also uses 5-HTP for sleep may not recognize the drug class relevance.
          </p>
          <p className="mt-3">
            The practical takeaway is that anyone taking any medication that affects serotonin
            — whether for depression, anxiety, Parkinson's, or an unusual reason like a
            specific antibiotic — should verify whether 5-HTP is safe to add before starting
            it. The list extends beyond obvious antidepressants to include SNRIs (venlafaxine,
            duloxetine), tramadol (which has serotonin reuptake properties), dextromethorphan
            (found in many cough medicines), and triptans for migraine. The common thread is
            any drug that meaningfully raises serotonin signaling through any mechanism.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why this interaction is often missed
          </h2>
          <p>
            5-HTP is sold without a prescription and is marketed primarily for mood and sleep
            — exactly the same reasons people take SSRIs. This creates a population overlap:
            people already on SSRIs who feel the medication isn't fully working sometimes add
            5-HTP, reasoning that "more serotonin support" is the answer. The reasoning is
            intuitive but backwards from a safety perspective. The medication is already
            maximizing the available serotonin by blocking its clearance; adding 5-HTP doesn't
            supplement a deficiency, it pushes an already-elevated system further.
          </p>
          <p className="mt-3">
            Mild serotonin syndrome symptoms — restlessness, tremor, diarrhea, insomnia — are
            also symptoms that people taking antidepressants sometimes attribute to the
            medication itself, to anxiety, or to other causes. The interaction can be in progress
            without being recognized. Severe symptoms are less ambiguous, but by that point the
            situation has escalated. The better approach is not adding 5-HTP to any serotonergic
            drug regimen without explicit discussion with a prescriber.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-zinc-100 pt-6">
        <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
        <ul className="space-y-1 text-sm">
          <li><Link href="/blog/5-htp-and-ssris" className="underline hover:text-zinc-900">5-HTP and SSRIs: Is It Safe to Take Together?</Link></li>
          <li><Link href="/blog/melatonin-fluvoxamine-interaction" className="underline hover:text-zinc-900">Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing</Link></li>
          <li><Link href="/blog/melatonin-drug-interactions" className="underline hover:text-zinc-900">Melatonin Drug Interactions: Sedatives, Warfarin, and More</Link></li>
        </ul>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter 5-HTP alongside
        fluoxetine, sertraline, or any SSRI in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
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
