import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Feverfew Drug Interactions: Antiplatelet Effects, Warfarin, and NSAIDs',
  description:
    'Feverfew parthenolide inhibits platelet aggregation and affects serotonin and prostaglandin pathways, creating additive bleeding risk with warfarin, aspirin, and clopidogrel. What NCCIH documents.',
  openGraph: {
    title: 'Feverfew Drug Interactions: Antiplatelet Effects, Warfarin, and NSAIDs',
    description:
      "Feverfew's parthenolide inhibits platelet aggregation through collagen-induced activation pathways, adding bleeding risk on top of anticoagulants and antiplatelet drugs. What the evidence shows.",
    type: 'article',
    publishedTime: '2026-07-11',
  },
};

export default function FeverfewDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-11</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Feverfew Drug Interactions: Antiplatelet Effects, Warfarin, and NSAIDs
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Feverfew is used primarily for migraine prevention — a use that puts it in the
          hands of people who often take other medications for the same condition, including
          NSAIDs, triptans, and in some cases anticoagulants. The active compound,
          parthenolide, has effects on platelets and on inflammatory signaling pathways that
          overlap with several common drug classes. Understanding these overlaps matters most
          for people who combine feverfew with medications that already suppress clotting or
          affect the same biochemical targets.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Parthenolide and platelet inhibition
          </h2>
          <p>
            Parthenolide is a sesquiterpene lactone that inhibits platelet aggregation by
            suppressing collagen-induced platelet activation and interfering with thromboxane A2
            production. It also inhibits serotonin release from platelets — platelets store
            and release serotonin, which promotes further platelet aggregation and
            vasoconstriction. Blocking this serotonin release pathway reduces platelet
            activation via a mechanism distinct from most other antiplatelet agents.
          </p>
          <p className="mt-3">
            These effects are additive with anticoagulants and antiplatelet medications. Warfarin
            reduces clot formation through the coagulation cascade (specifically by reducing
            vitamin K-dependent clotting factors); aspirin blocks thromboxane A2 synthesis via
            cyclooxygenase-1; clopidogrel blocks the P2Y12 ADP receptor. Feverfew's parthenolide
            adds platelet inhibition via the collagen-activation and serotonin pathways, which
            are distinct enough that the combination is genuinely additive rather than redundant.
            NCCIH notes that feverfew may interact with blood-thinning medications.
          </p>
          <p className="mt-3">
            People taking warfarin alongside feverfew for migraine should be aware that INR
            measurements do not capture antiplatelet effects — warfarin's therapeutic monitoring
            measures coagulation cascade function, not platelet aggregation. Additional
            antiplatelet activity from feverfew would not show up as an elevated INR even if it
            is contributing to overall bleeding risk. This is the same limitation discussed for
            fish oil, garlic, and ginkgo: INR control is a necessary but not sufficient measure
            of bleeding risk when antiplatelet supplements are in use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Interactions with NSAIDs and the "rebound" consideration
          </h2>
          <p>
            Feverfew combined with NSAIDs creates a different kind of concern. NSAIDs inhibit
            cyclooxygenase enzymes, which are the same pathway feverfew's parthenolide affects
            through prostaglandin synthesis modulation. This combination does not necessarily
            produce a dangerous pharmacological interaction, but long-term feverfew use followed
            by abrupt discontinuation is associated with a "post-feverfew syndrome" — a rebound
            phenomenon including increased headache frequency, joint pain, and anxiety — which
            is thought to reflect re-sensitization of the inflammatory and platelet pathways
            that feverfew suppressed. This is not technically a drug interaction but is a
            relevant clinical consideration for anyone using feverfew as a regular preventive
            supplement.
          </p>
          <p className="mt-3">
            The evidence base for feverfew's drug interactions is primarily mechanistic and
            based on NCCIH's documented interaction list. Controlled pharmacokinetic studies
            are limited. The antiplatelet concern is the most clinically important, and it
            applies most directly to people on anticoagulant or antiplatelet therapy who add
            feverfew without disclosing it to their prescriber.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter feverfew alongside
        warfarin, aspirin, or clopidogrel in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/feverfew"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Feverfew
        </a>
      </div>
    </main>
  );
}
