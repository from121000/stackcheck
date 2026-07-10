import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kava Drug Interactions: Sedation, Liver Risk, and More',
  description:
    "Kava's kavalactones modulate GABA-A receptors, adding to the sedation of benzodiazepines and alcohol. Kava also carries documented hepatotoxicity risk that compounds with other liver-toxic drugs. What NCCIH documents.",
  openGraph: {
    title: 'Kava Drug Interactions: Sedation, Liver Risk, and More',
    description:
      "Kavalactones work through some of the same neurological pathways as benzodiazepines — combining them isn't adding an herb to a prescription, it's stacking two pharmacologically active sedating agents. Plus the liver risk.",
    type: 'article',
    publishedTime: '2026-07-10',
  },
};

export default function KavaDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-10</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Kava Drug Interactions: Sedation, Liver Risk, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Kava is taken for anxiety and stress relief, and its reputation as a "natural" relaxant
          leads many people to assume it operates through an entirely different pathway than
          prescription sedatives. That assumption is wrong in a pharmacologically important way.
          Kavalactones — the active compounds in kava root — modulate GABA-A receptors, the same
          receptor system that benzodiazepines, barbiturates, and alcohol exploit. Stacking kava
          with any of those substances means adding two pharmacologically active CNS depressants,
          not one mild herb and one prescription. There is also a second, distinct concern with
          kava: documented cases of serious liver injury that make it relevant to anyone taking
          other medications with hepatotoxic potential.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Additive sedation with CNS depressants
          </h2>
          <p>
            Kavalactones produce their anxiolytic and sedative effects partly through direct
            modulation of GABA-A receptor activity and partly through effects on serotonin and
            dopamine signaling. The GABA-A component is the most pharmacologically relevant for
            drug interactions. Benzodiazepines — lorazepam, diazepam, clonazepam, alprazolam —
            bind to GABA-A receptors and enhance inhibitory chloride ion flow. The z-drugs
            (zolpidem, eszopiclone) act on overlapping receptor sites. Barbiturates work through
            the same channel. Alcohol potentiates GABA-A activity and suppresses glutamate.
            All of these, combined with kava, produce additive CNS depression.
          </p>
          <p className="mt-3">
            The practical consequence is more sedation than intended: greater drowsiness, impaired
            coordination, slower reaction time, and in higher doses or susceptible individuals,
            potential respiratory depression. The concern is not that kava combined with a single
            drink is catastrophic for most people. The concern is the combination with therapeutic
            doses of benzodiazepines or sedative-hypnotics, where the pharmacodynamic overlap is
            clinically meaningful and where individual variation in both kava metabolism and
            benzodiazepine sensitivity is substantial.
          </p>
          <p className="mt-3">
            Kava also inhibits several cytochrome P450 enzymes, including CYP2D6 and CYP3A4, which
            affects how certain medications are metabolized. The practical consequence of this CYP
            inhibition is that drugs dependent on these pathways for clearance — some antidepressants,
            antipsychotics, and anticonvulsants — may reach higher plasma levels when kava is
            taken concurrently. This layer of metabolic interaction compounds the direct GABAergic
            sedation concern.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Liver risk: the interaction that goes overlooked
          </h2>
          <p>
            Kava's hepatotoxicity has been documented since the early 2000s, when case reports
            of serious liver injury — hepatitis, cirrhosis, and fulminant hepatic failure — began
            accumulating, particularly from European markets where concentrated kava extracts were
            popular. Several countries imposed regulatory restrictions or outright bans on kava
            products in response, though many have since been lifted as the picture became more
            nuanced. NCCIH explicitly flags liver damage as a significant safety concern.
          </p>
          <p className="mt-3">
            The mechanism of kava hepatotoxicity is not fully resolved. Leading hypotheses involve
            reactive metabolites produced through CYP450-mediated kava metabolism, as well as
            inhibition of cyclooxygenase activity and mitochondrial function. What this means for
            drug interactions is that people taking other medications with hepatotoxic potential
            may face compounded liver stress. The most clinically relevant examples are high-dose
            or chronic acetaminophen use, statin therapy at higher doses, antifungal azoles
            (fluconazole, ketoconazole, itraconazole), isoniazid for tuberculosis, amiodarone,
            and methotrexate — all of which carry their own liver toxicity profiles.
          </p>
          <p className="mt-3">
            NCCIH's guidance is straightforward: people with liver disease should not use kava,
            and people taking medications known to affect the liver should consult their prescriber
            before adding it. The hepatotoxicity risk appears to be dose-dependent and may be
            greater with solvent-extracted commercial preparations than with traditional
            water-based preparations, though this distinction is not consistently established.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter kava alongside
        lorazepam, zolpidem, or acetaminophen in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see these interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/kava"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Kava
        </a>
      </div>
    </main>
  );
}
