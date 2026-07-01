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
          inert. Garlic contains organosulfur compounds, particularly allicin, that have measurable
          effects on platelet function and liver enzymes responsible for drug metabolism. Both
          of these create documented drug interactions.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Warfarin and anticoagulants: antiplatelet effects
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Garlic inhibits platelet aggregation — it reduces the tendency of platelets to clump
            together at sites of vascular injury. This effect is attributed primarily to allicin and
            related organosulfur compounds. Allicin inhibits thromboxane synthesis and directly
            interferes with platelet membrane function, reducing ADP-induced aggregation.
          </p>
          <p className="mt-3">
            Warfarin works through a different mechanism (inhibiting vitamin K-dependent clotting
            factors), but both warfarin and garlic reduce the blood&apos;s overall clotting tendency.
            Combining them adds antiplatelet inhibition on top of anticoagulation — two separate
            mechanisms both working to impair hemostasis. The NIH ODS garlic fact sheet notes this
            interaction and flags it as an area requiring clinical attention.
          </p>
          <p className="mt-3">
            The same additive logic applies to other anticoagulants (apixaban, rivaroxaban) and
            antiplatelet drugs (aspirin, clopidogrel). Anyone taking garlic supplements alongside
            blood-thinning medications should let their prescriber know.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Garlic-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Garlic — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            HIV antiretrovirals: CYP3A4 induction
          </h2>
          <div className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            High severity
          </div>
          <p>
            Garlic supplements can induce CYP3A4, the liver enzyme responsible for metabolizing a
            large fraction of all drugs in clinical use. When CYP3A4 is induced (sped up), drugs
            that depend on CYP3A4 for their clearance are metabolized faster — their plasma
            concentrations fall, reducing their effectiveness.
          </p>
          <p className="mt-3">
            The most clearly documented case involves saquinavir, an HIV protease inhibitor.
            Pharmacokinetic studies found that garlic supplements reduced saquinavir plasma
            concentrations by approximately 51% when compared to saquinavir alone. This is a
            clinically significant reduction for an antiretroviral, where maintaining adequate plasma
            concentrations is essential to suppressing viral replication. The National Center for
            Complementary and Integrative Health (NCCIH) specifically flags saquinavir and notes the
            clinical significance of this interaction.
          </p>
          <p className="mt-3">
            The broader implication: other protease inhibitors that are CYP3A4 substrates —
            ritonavir, lopinavir, atazanavir — may also be affected by garlic&apos;s CYP3A4 induction,
            though the magnitude may vary. People on antiretroviral regimens that include protease
            inhibitors should avoid garlic supplements unless specifically cleared by their HIV
            specialist.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
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
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Other CYP3A4-dependent medications
          </h2>
          <p>
            Given garlic&apos;s CYP3A4-inducing potential, it is worth being aware that a wide range
            of other medications are metabolized by CYP3A4, including certain statins (simvastatin,
            lovastatin), some calcium channel blockers (amlodipine, nifedipine), certain
            immunosuppressants (cyclosporine, tacrolimus), and some benzodiazepines. The clinical
            significance of the CYP3A4 interaction for each of these will vary — garlic is a weaker
            inducer than St. John&apos;s Wort, for example — but people on narrow-therapeutic-index
            medications that are CYP3A4 substrates should discuss garlic supplement use with their
            prescriber.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Surgical context
          </h2>
          <p>
            Garlic&apos;s antiplatelet effects are relevant in surgical settings as well. Like fish
            oil and vitamin E, garlic supplements are commonly listed among supplements to stop before
            elective surgery because of the bleeding risk from impaired platelet aggregation. This is
            not strictly a drug interaction but reflects the same underlying mechanism.
          </p>
        </section>

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
