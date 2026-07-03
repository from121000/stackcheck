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
          primarily for cognitive support and circulation. It is not pharmacologically inert. Ginkgo
          contains two classes of active compounds — flavonoids and terpenoids — and the terpenoid
          fraction, specifically the ginkgolides, has well-documented effects on platelet function
          that create real drug interactions for people on blood thinners.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Bleeding risk with anticoagulants and antiplatelet drugs
          </h2>
          <p>
            Ginkgolide B is a potent antagonist of platelet-activating factor (PAF), a phospholipid
            mediator that triggers platelet aggregation at sites of vascular injury. By blocking PAF
            receptors on platelets, ginkgo reduces the tendency of platelets to clump together.
          </p>
          <p className="mt-3">
            The most clinically significant consequence is the additive effect when ginkgo is
            combined with antiplatelet or anticoagulant drugs. Warfarin works by blocking vitamin
            K-dependent clotting factor synthesis — a different mechanism from platelet aggregation.
            Layering ginkgo&apos;s antiplatelet effect on top of warfarin&apos;s anticoagulation
            impairs hemostasis through two independent pathways simultaneously, potentially
            increasing bleeding risk beyond what either agent causes alone. NCCIH specifically flags
            this interaction and recommends caution.
          </p>
          <p className="mt-3">
            With aspirin and clopidogrel, the combination is antiplatelet on top of antiplatelet —
            but through distinct mechanisms. Aspirin inhibits COX-1 in platelets, reducing
            thromboxane A2 production. Clopidogrel blocks the P2Y12 ADP receptor. Ginkgo adds PAF
            inhibition as a third pathway. Combining ginkgo with either of these drugs suppresses
            platelet activation across more pathways than any one agent alone, with a corresponding
            increase in bleeding risk — particularly relevant around surgical procedures, injuries,
            or GI events. NCCIH notes this class of interaction specifically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Seizure risk and antiepileptic drugs
          </h2>
          <p>
            Ginkgo seeds contain ginkgotoxin (4-O-methylpyridoxine), a compound that functions as
            a vitamin B6 antagonist and can lower seizure threshold. Most commercial ginkgo leaf
            extracts contain minimal ginkgotoxin — it concentrates in the seeds, not the leaf —
            but NCCIH notes that seizures have been reported with ginkgo use, particularly in people
            with pre-existing seizure disorders. Anyone taking antiepileptic medications (valproate,
            lamotrigine, levetiracetam, phenytoin) who also uses ginkgo should disclose this to
            their neurologist, since even a modest reduction in seizure threshold can destabilize
            otherwise-controlled epilepsy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Surgical context
          </h2>
          <p>
            Ginkgo&apos;s antiplatelet effects are directly relevant to surgery. Like aspirin, fish
            oil, and garlic, ginkgo is commonly included in the list of supplements to review before
            elective procedures. The American Society of Anesthesiologists includes ginkgo in its
            standard preoperative supplement review list, though specific timelines for stopping
            vary by clinical context and should be confirmed with the surgical team.
          </p>
        </section>

        <p className="text-sm text-zinc-500 mt-2">
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
