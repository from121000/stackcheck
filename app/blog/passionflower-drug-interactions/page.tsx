import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Passionflower Drug Interactions: Sedatives, Benzodiazepines, and More',
  description:
    'Passionflower flavonoids modulate GABA-A receptors — the same system as benzodiazepines and z-drugs — producing additive sedation with CNS depressants. What NCCIH documents.',
  openGraph: {
    title: 'Passionflower Drug Interactions: Sedatives, Benzodiazepines, and More',
    description:
      "Passionflower's GABA-A modulation adds to the effects of benzodiazepines, z-drugs, opioids, and alcohol. People taking prescription sleep or anxiety medications need to know about this combination.",
    type: 'article',
    publishedTime: '2026-07-11',
  },
};

export default function PassionflowerDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-11</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Passionflower Drug Interactions: Sedatives, Benzodiazepines, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Passionflower is used as a sleep aid and anxiolytic — and it works partly through
          the same receptor system as prescription benzodiazepines and z-drugs like zolpidem.
          That shared mechanism is exactly why passionflower belongs in the same
          conversation as valerian and kava when it comes to sedative drug interactions.
          People reach for passionflower precisely when they are anxious or unable to sleep,
          which is also when they are most likely to be taking prescription medications for
          those same problems. The combination matters.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            GABA-A modulation and additive CNS depression
          </h2>
          <p>
            Passionflower (Passiflora incarnata) contains flavonoids including chrysin that
            bind to and modulate GABA-A receptors — the ligand-gated chloride channels that
            produce inhibitory effects throughout the central nervous system. GABA (gamma-aminobutyric
            acid) is the primary inhibitory neurotransmitter in the brain. When GABA-A
            receptors are activated, they hyperpolarize neurons, reducing their firing rate
            and producing sedation, anxiety reduction, and at higher levels, muscle relaxation
            and anticonvulsant effects.
          </p>
          <p className="mt-3">
            Benzodiazepines such as diazepam, lorazepam, alprazolam, and clonazepam work as
            positive allosteric modulators of GABA-A receptors — they enhance the effect of
            endogenous GABA at these receptors. Z-drugs (zolpidem, eszopiclone, zaleplon)
            work through the same receptor at a partially overlapping binding site. Barbiturates
            and alcohol both directly potentiate GABA-A function through distinct mechanisms.
            Passionflower's chrysin and related flavonoids act on the same receptor system,
            producing effects that are additive with all of these agents.
          </p>
          <p className="mt-3">
            The practical consequence is that combining passionflower supplements with
            prescription benzodiazepines, z-drugs, or other CNS depressants will produce more
            sedation, cognitive impairment, and psychomotor slowing than either agent alone.
            At high combined doses, respiratory depression becomes a concern — particularly
            relevant when opioids are also in the stack, since opioids suppress respiration
            through a different mechanism (mu-opioid receptors) and CNS depressants from any
            source compound that risk. NCCIH notes that passionflower may interact with sedative
            medications.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Who is most at risk
          </h2>
          <p>
            The combination most likely to cause a meaningful clinical problem is passionflower
            with prescription benzodiazepines or z-drugs for sleep. The marketing of passionflower
            as a "natural" sleep aid can lead users to treat it as equivalent to herbal tea —
            something with no real pharmacological activity — when in fact it is modulating the
            same receptor system as their prescription medication. Adding it on top of, say,
            zolpidem creates a pharmacodynamic interaction that increases sedative depth and
            duration, which translates to next-day cognitive impairment, fall risk in older
            adults, and at higher doses, respiratory concerns.
          </p>
          <p className="mt-3">
            Passionflower with alcohol is a less dramatic but similar interaction. Alcohol
            is a positive modulator of GABA-A receptors through a different binding site than
            benzodiazepines; the combination with passionflower produces additive CNS depression.
            This is a relevant concern for someone who takes passionflower for evening anxiety
            and also drinks — the "natural supplement" framing can obscure the fact that the
            two are acting on the same system.
          </p>
          <p className="mt-3">
            Passionflower's interaction profile for sedative combinations is the same category
            as valerian and kava — supplements discussed elsewhere on this site. Of the three,
            kava carries additional concerns (documented hepatotoxicity cases) that passionflower
            does not. Passionflower's primary interaction risk is specifically the GABA-A additive
            sedation, and NCCIH documents this interaction as a reason to disclose passionflower
            use to healthcare providers prescribing sedative medications.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter passionflower
        alongside zolpidem, diazepam, or lorazepam in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/passionflower"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Passionflower
        </a>
      </div>
    </main>
  );
}
