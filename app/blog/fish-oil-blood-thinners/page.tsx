import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fish Oil and Blood Thinners: What the Evidence Shows',
  description:
    'Omega-3 fatty acids have antiplatelet effects that may interact with warfarin and other anticoagulants. The clinical evidence is mixed but the combination warrants attention.',
  openGraph: {
    title: 'Fish Oil and Blood Thinners: What the Evidence Shows',
    description:
      'Fish oil (omega-3s) has antiplatelet effects and is noted in prescribing guidelines as a potential interaction with warfarin. What the evidence actually shows.',
    type: 'article',
    publishedTime: '2026-06-30',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/fish-oil-blood-thinners",
  },
};

export default function FishOilBloodThinners() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-06-30</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Fish Oil and Blood Thinners: What the Evidence Shows
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Fish oil is one of the most commonly used supplements — and one of the few that
          cardiologists and anticoagulation clinics specifically ask patients about. Omega-3 fatty
          acids have measurable effects on platelet function and bleeding tendency, and those effects
          overlap with how blood-thinning medications work. Understanding where the evidence is solid
          and where it is murkier makes this a more tractable question than it first appears.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How omega-3s affect platelet function
          </h2>
          <p>
            EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) — the two omega-3s in fish
            oil — influence platelet aggregation through their effects on thromboxane and prostacyclin
            production. They shift the balance between these two prostaglandins in a direction that
            reduces platelet clumping. In practical terms, high-dose omega-3s can mildly prolong
            bleeding time.
          </p>
          <p className="mt-3">
            This is not a trivial pharmacological effect. Prescription omega-3 formulations are used
            at 4&nbsp;g/day for cardiovascular risk reduction, and at those doses bleeding risk is a
            recognized clinical consideration. Over-the-counter fish oil supplements are typically
            lower dose, but the effect scales with dose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The combination with blood thinners
          </h2>
          <p>
            Warfarin works by inhibiting vitamin K-dependent clotting factors, reducing the
            blood&apos;s ability to form clots via the coagulation cascade. Omega-3s act on a
            different part of the hemostasis system — platelet aggregation — but both reduce the
            blood&apos;s overall clotting tendency. Whether the combination produces a clinically
            meaningful change in INR (the measure used to monitor warfarin dosing) is genuinely
            debated: some studies have found small INR increases with fish oil plus warfarin; others
            have not. The evidence is mixed on the anticoagulant-effect side specifically.
          </p>
          <p className="mt-3">
            What is less debated is the additive effect on bleeding risk overall: two agents that
            each reduce clotting tendency through different mechanisms create an additive biological
            effect, even if one marker (INR) does not change measurably. The NIH ODS omega-3 fact
            sheet notes this interaction context. Aspirin and clopidogrel raise the same concern —
            both are antiplatelet drugs, and omega-3s add platelet suppression through a separate
            pathway on top of what those drugs already do.
          </p>
          <p className="mt-3">
            People on anticoagulants or antiplatelet therapy who take fish oil supplements should
            let their prescribing provider or anticoagulation clinic know. The combination is not
            necessarily unsafe, but it is relevant clinical information for anyone monitoring
            bleeding risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Dose and surgical context
          </h2>
          <p>
            The clinical evidence for a meaningful bleeding interaction comes mainly from studies at
            higher doses — the 2–4&nbsp;g EPA+DHA range used in cardiovascular trials. At lower
            over-the-counter doses (typically 0.5–1&nbsp;g EPA+DHA per serving), the effect may be
            smaller, but the combination is still routinely flagged in clinical practice.
          </p>
          <p className="mt-3">
            A related practical concern: many surgeons ask patients to stop fish oil before elective
            procedures because the antiplatelet effect can increase surgical bleeding. This reflects
            the same underlying biology — it is not a drug-drug interaction in the traditional sense,
            but the reason to mention fish oil use to a surgical team is the same reason to mention
            it to an anticoagulation clinic.
          </p>
        </section>

        <p className="text-sm text-zinc-500 mt-2">
          Source:{' '}
          <a
            href="https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Omega-3 Fatty Acids — Health Professional Fact Sheet
          </a>{' '}
          (NIH Office of Dietary Supplements)
        </p>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter fish oil or omega-3
          alongside warfarin or other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
