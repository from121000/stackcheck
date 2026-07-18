import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications, and More',
  description:
    'Garlic supplements interact with warfarin through antiplatelet effects and with certain antiretroviral drugs through CYP3A4 induction. What NCCIH and NIH ODS document.',
  openGraph: {
    title: 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications, and More',
    description:
      'Garlic inhibits platelet aggregation and can induce CYP3A4, affecting warfarin, saquinavir, and other medications. What the evidence actually shows.',
    type: 'article',
    publishedTime: '2026-07-01',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/garlic-supplement-interactions",
  },
};

export default function GarlicSupplementInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-01</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Garlic Supplement Drug Interactions: Warfarin, HIV Medications, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Garlic supplements — standardized extracts, aged garlic extract, or garlic oil — are
          among the most commonly used herbal supplements worldwide. They are not pharmacologically
          inert. Garlic contains organosulfur compounds, particularly allicin, with measurable
          effects on platelet function and the liver enzymes responsible for drug metabolism. Both
          create documented drug interactions.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Antiplatelet and anticoagulant interactions
          </h2>
          <p>
            Garlic inhibits platelet aggregation — it reduces the tendency of platelets to clump
            together at sites of vascular injury. This effect is attributed primarily to allicin and
            related organosulfur compounds, which inhibit thromboxane synthesis and directly
            interfere with platelet membrane function, reducing ADP-induced aggregation.
          </p>
          <p className="mt-3">
            Warfarin works through a different mechanism — inhibiting vitamin K-dependent clotting
            factors — but both warfarin and garlic reduce the blood&apos;s overall clotting tendency.
            Combining them adds antiplatelet inhibition on top of anticoagulation: two separate
            mechanisms both working to impair hemostasis. The NIH ODS garlic fact sheet notes this
            interaction and flags it as an area requiring clinical attention. The same additive logic
            applies to other anticoagulants (apixaban, rivaroxaban) and antiplatelet drugs
            (aspirin, clopidogrel).
          </p>
          <p className="mt-3">
            Garlic&apos;s antiplatelet effects are also relevant before surgery. Like fish oil and
            vitamin E, garlic supplements are commonly listed among supplements to pause before
            elective surgery because of the bleeding risk from impaired platelet aggregation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            CYP3A4 induction: antiretrovirals and other medications
          </h2>
          <p>
            Garlic supplements can induce CYP3A4, the liver enzyme responsible for metabolizing a
            large fraction of all drugs in clinical use. When CYP3A4 is induced — upregulated —
            drugs that depend on it for clearance are metabolized faster and their plasma
            concentrations fall, reducing their effectiveness.
          </p>
          <p className="mt-3">
            The most clearly documented case involves saquinavir, an HIV protease inhibitor.
            Pharmacokinetic studies found that garlic supplements reduced saquinavir plasma
            concentrations by approximately 51% compared to saquinavir alone — a clinically
            significant reduction for an antiretroviral, where maintaining adequate plasma
            concentrations is essential to suppressing viral replication. NCCIH specifically
            flags this interaction. Other protease inhibitors that are CYP3A4 substrates —
            ritonavir, lopinavir, atazanavir — may also be affected, though the magnitude can vary.
            People on antiretroviral regimens that include protease inhibitors should avoid
            garlic supplements unless specifically cleared by their HIV specialist.
          </p>
          <p className="mt-3">
            Garlic is a weaker CYP3A4 inducer than St. John&apos;s Wort, but the same general
            concern applies to other CYP3A4-dependent medications: certain statins (simvastatin,
            lovastatin), some calcium channel blockers (amlodipine, nifedipine), some
            immunosuppressants (cyclosporine, tacrolimus), and some benzodiazepines. The clinical
            significance varies by drug — people on narrow-therapeutic-index CYP3A4 substrates
            should discuss garlic supplement use with their prescriber.
          </p>
        </section>

        <p className="text-sm text-zinc-500">
          Sources:{' '}
          <a
            href="https://www.nccih.nih.gov/health/garlic"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Garlic
          </a>{' '}
          (NCCIH);{' '}
          <a
            href="https://ods.od.nih.gov/factsheets/Garlic-HealthProfessional/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Garlic — Health Professional Fact Sheet
          </a>{' '}
          (NIH ODS)
        </p>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter garlic alongside your
          other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
