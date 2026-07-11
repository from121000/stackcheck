import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grape Seed Extract Drug Interactions: Antiplatelet Effects and More',
  description:
    'Grape seed extract proanthocyanidins inhibit platelet aggregation, creating additive bleeding risk with warfarin, aspirin, clopidogrel, and direct oral anticoagulants. What NCCIH documents.',
  openGraph: {
    title: 'Grape Seed Extract Drug Interactions: Antiplatelet Effects and More',
    description:
      "Grape seed extract's antiplatelet properties are additive with anticoagulants. High-dose use may also affect CYP3A4. What the evidence shows for people on blood-thinning medications.",
    type: 'article',
    publishedTime: '2026-07-11',
  },
};

export default function GrapeSeedExtractDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-11</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Grape Seed Extract Drug Interactions: Antiplatelet Effects and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Grape seed extract is marketed primarily for its antioxidant properties, but its
          active compounds — oligomeric proanthocyanidins (OPCs) — also affect platelet
          function in ways that are relevant for anyone on anticoagulant or antiplatelet
          therapy. The supplement is widely used, commonly taken alongside cardiovascular
          health regimens, and the people most likely to take it for heart health are often
          the same people taking warfarin, aspirin, or clopidogrel. That overlap is exactly
          why the interaction profile matters.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Antiplatelet activity and bleeding risk
          </h2>
          <p>
            Proanthocyanidins in grape seed extract inhibit platelet aggregation through
            multiple mechanisms: suppression of thromboxane A2 synthesis (thromboxane A2 is a
            potent platelet activator), inhibition of collagen-induced platelet activation, and
            interference with arachidonic acid metabolism. These are overlapping but distinct
            pathways from those targeted by aspirin (which also inhibits thromboxane via
            cyclooxygenase), clopidogrel (which blocks the P2Y12 ADP receptor), and
            anticoagulants like warfarin and the direct oral anticoagulants apixaban,
            rivaroxaban, and dabigatran.
          </p>
          <p className="mt-3">
            When an antiplatelet agent is combined with an existing anticoagulant regimen,
            the effect on bleeding risk is additive. Anticoagulants reduce the ability to form
            clots via the coagulation cascade; antiplatelet agents reduce the contribution of
            platelet aggregation to clot initiation. Both mechanisms contribute to hemostasis,
            so suppressing both simultaneously results in greater bleeding risk than either
            alone. NCCIH notes that grape seed extract may interact with blood-thinning
            medications and recommends disclosing use to healthcare providers.
          </p>
          <p className="mt-3">
            The clinical evidence base for grape seed extract's antiplatelet effects is less
            extensive than for supplements like garlic or ginkgo, where the mechanisms are more
            thoroughly characterized. Most grape seed extract antiplatelet data comes from in
            vitro and animal studies, with limited controlled clinical data. However, the
            mechanistic plausibility is sound, and the practical advice is the same as for
            better-characterized antiplatelet supplements: disclose use to whoever manages
            your anticoagulation therapy, particularly before surgery.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            CYP enzyme effects and drug level changes
          </h2>
          <p>
            Some evidence suggests grape seed extract may inhibit CYP3A4 at higher doses,
            which could raise plasma concentrations of CYP3A4-metabolized medications —
            immunosuppressants like cyclosporine and tacrolimus, certain statins, benzodiazepines,
            and many others. The clinical relevance of this at typical supplement doses (often
            100–300 mg standardized OPC) is uncertain and less established than the antiplatelet
            concern.
          </p>
          <p className="mt-3">
            The more relevant practical concern for most users is the antiplatelet effect,
            because the population taking high-dose antioxidant supplements for cardiovascular
            benefit substantially overlaps with the population taking anticoagulants. Someone
            on warfarin for atrial fibrillation who adds grape seed extract for its
            "cardiovascular benefits" is adding an antiplatelet agent on top of an
            anticoagulant — a combination where the margin for additional bleeding risk
            is already managed carefully.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter grape seed extract
        alongside warfarin, aspirin, or clopidogrel in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/grape-seed-extract"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Grape Seed Extract
        </a>
      </div>
    </main>
  );
}
