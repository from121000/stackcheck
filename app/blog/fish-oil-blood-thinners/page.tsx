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
          Fish oil (omega-3 fatty acids) is one of the most commonly used supplements. It is also
          one of the few supplements that cardiologists and anticoagulation clinics specifically ask
          patients about — because omega-3s have biological effects on platelet function and
          bleeding tendency, and those effects overlap with how blood-thinning medications work.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How omega-3s affect blood clotting
          </h2>
          <p>
            EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) — the two omega-3s in fish
            oil — influence platelet aggregation through their effects on thromboxane and
            prostacyclin production. They shift the balance between these two prostaglandins in a
            direction that reduces platelet clumping (aggregation). In practical terms, high-dose
            omega-3s can mildly prolong bleeding time.
          </p>
          <p className="mt-3">
            This is not a trivial effect. Prescription omega-3 formulations (like Vascepa/icosapent
            ethyl) are used at 4g/day for cardiovascular risk reduction, and at those doses bleeding
            risk is a recognized clinical consideration. Over-the-counter fish oil supplements are
            typically lower dose, but the effect scales with dose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The combination with warfarin
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Warfarin (Coumadin) works by inhibiting vitamin K-dependent clotting factors, reducing
            the blood&apos;s ability to form clots via the coagulation cascade. Omega-3s act on a
            different part of the hemostasis system — platelet aggregation — but the end result is
            that both reduce the blood&apos;s clotting tendency through different mechanisms.
          </p>
          <p className="mt-3">
            Whether the combination produces a clinically meaningful change in INR (the measure of
            warfarin&apos;s anticoagulant effect) is debated. Some studies have found small INR
            increases in patients taking fish oil with warfarin; others have not found a significant
            effect. The evidence is mixed on the anticoagulant-effect side specifically.
          </p>
          <p className="mt-3">
            What is less debated is the additive effect on overall bleeding risk: two substances
            that both reduce clotting tendency through different mechanisms represent an additive
            biological effect, even if one component (INR) does not change measurably.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
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
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Other anticoagulants and antiplatelet drugs
          </h2>
          <p>
            The same logic applies to other anticoagulants — apixaban (Eliquis), rivaroxaban
            (Xarelto), dabigatran (Pradaxa) — and antiplatelet drugs like aspirin and clopidogrel
            (Plavix). The mechanism of the omega-3 interaction (platelet function) is separate from
            how most of these drugs work, so the potential for an additive bleeding effect applies
            broadly to the category.
          </p>
          <p className="mt-3">
            Aspirin is particularly relevant here, since aspirin plus fish oil is a common
            combination people take without considering the additive antiplatelet effect of both.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Dose matters
          </h2>
          <p>
            The antiplatelet effect of omega-3s is dose-dependent. The clinical evidence for a
            meaningful bleeding interaction comes mainly from studies at higher doses — the 2–4g
            EPA+DHA range used in cardiovascular trials and prescriptions. At lower over-the-counter
            doses (typically 0.5–1g EPA+DHA per serving), the effect may be smaller, but the
            combination with anticoagulants is still routinely flagged in clinical practice as
            worth monitoring.
          </p>
          <p className="mt-3">
            People on anticoagulants or antiplatelet therapy who take fish oil supplements should
            let their prescribing provider or anticoagulation clinic know — not because the
            combination is necessarily dangerous, but because it is relevant clinical information
            for anyone monitoring bleeding risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Pre-surgical context
          </h2>
          <p>
            A related but distinct practical concern: many surgeons ask patients to stop fish oil
            supplements before elective procedures for the same reason — the antiplatelet effect
            can increase surgical bleeding. This is not a drug interaction in the traditional sense
            but reflects the same underlying biology. It is worth knowing if you take fish oil and
            have any planned procedures.
          </p>
        </section>

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
