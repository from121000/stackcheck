import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More',
  description:
    'Ginkgo biloba inhibits platelet activating factor, increasing bleeding risk when combined with warfarin, aspirin, or clopidogrel. What NCCIH documents and why it matters.',
  openGraph: {
    title: 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More',
    description:
      'Ginkgo contains ginkgolides that inhibit platelet aggregation, creating clinically relevant interactions with anticoagulants and antiplatelet drugs. What the evidence shows.',
    type: 'article',
    publishedTime: '2026-07-02',
  },
};

export default function GinkgoBilobaDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-02</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Ginkgo biloba is one of the most widely used herbal supplements globally, marketed
          primarily for cognitive support and circulation. It is not pharmacologically inert.
          Ginkgo contains two classes of active compounds — flavonoids and terpenoids — and the
          terpenoid fraction, specifically the ginkgolides, has well-documented effects on platelet
          function. These effects create real drug interactions.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The core mechanism: PAF antagonism and platelet inhibition
          </h2>
          <p>
            Ginkgolide B is a potent antagonist of platelet-activating factor (PAF), a phospholipid
            mediator that triggers platelet aggregation at sites of vascular injury. By blocking PAF
            receptors on platelets, ginkgo reduces the tendency of platelets to clump together.
            This antiplatelet effect is separate from the mechanisms targeted by common antiplatelet
            drugs — aspirin inhibits COX-1, clopidogrel blocks the P2Y12 receptor — which means
            combining ginkgo with these drugs inhibits platelet aggregation through multiple
            independent pathways simultaneously.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Warfarin and other anticoagulants
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Warfarin prevents clot formation by blocking vitamin K-dependent clotting factor
            synthesis — a different mechanism from platelet aggregation. When ginkgo&apos;s
            antiplatelet effect is layered on top of warfarin&apos;s anticoagulation, the overall
            hemostatic capacity is reduced through two separate pathways: impaired platelet function
            and reduced clotting factor activity. The combined effect may increase bleeding risk
            beyond what either agent produces alone.
          </p>
          <p className="mt-3">
            NCCIH specifically flags ginkgo&apos;s interaction with anticoagulants and recommends
            caution. People on warfarin or other anticoagulants (apixaban, rivaroxaban, dabigatran)
            who use ginkgo should ensure their prescriber is aware of both.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://www.nccih.nih.gov/health/ginkgo-biloba"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Ginkgo — Herbs at a Glance
            </a>{' '}
            (NCCIH)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Aspirin and clopidogrel: additive antiplatelet effects
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Aspirin irreversibly inhibits COX-1 in platelets, reducing thromboxane A2 production
            (a platelet activator). Clopidogrel and related drugs (prasugrel, ticagrelor)
            irreversibly or reversibly block the P2Y12 ADP receptor. Both are already strong
            antiplatelet agents individually.
          </p>
          <p className="mt-3">
            Ginkgo inhibits a third pathway — PAF-mediated activation. Combining ginkgo with
            aspirin or clopidogrel adds PAF inhibition on top of COX-1 or P2Y12 inhibition,
            broadening platelet suppression across more activation pathways. The clinical
            consequence is an increased risk of bleeding, particularly in contexts where platelet
            function already matters: surgical procedures, injuries, or GI events.
          </p>
          <p className="mt-3">
            NCCIH notes this class of interaction specifically, recommending caution when ginkgo
            is used alongside any antiplatelet or anticoagulant drug.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://www.nccih.nih.gov/health/ginkgo-biloba"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Ginkgo — Herbs at a Glance
            </a>{' '}
            (NCCIH)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Seizure threshold and antiepileptic drugs
          </h2>
          <p>
            Ginkgo seeds contain ginkgotoxin (4-O-methylpyridoxine), a compound that is a
            functional vitamin B6 antagonist and can lower seizure threshold. Ginkgo extracts
            standardized for flavonoid/terpenoid content generally do not contain meaningful
            amounts of ginkgotoxin — it is concentrated in the seeds, not the leaf extract used
            in most supplements.
          </p>
          <p className="mt-3">
            However, NCCIH notes that seizures have been reported with ginkgo use, particularly
            in people with pre-existing seizure disorders. People taking antiepileptic drugs
            (valproate, lamotrigine, levetiracetam, phenytoin) may be at elevated risk if ginkgo
            use destabilizes seizure control. This interaction is less certain than the
            antiplatelet effects, but the risk is notable enough to warrant disclosure to a
            neurologist for anyone on antiepileptics.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Surgical context
          </h2>
          <p>
            Ginkgo&apos;s antiplatelet effects are directly relevant to surgery. Like aspirin, fish
            oil, and garlic, ginkgo is commonly listed among supplements to stop before elective
            procedures. The American Society of Anesthesiologists includes ginkgo in its standard
            preoperative supplement review list, though specific timelines for stopping vary by
            clinical context.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter ginkgo biloba
          alongside your other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
