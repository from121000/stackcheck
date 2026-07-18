import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More',
  description:
    'Curcumin inhibits platelet aggregation, competes with warfarin, and slows metabolism of CYP1A2 and CYP3A4 substrates. What NCCIH documents about turmeric supplement interactions.',
  openGraph: {
    title: 'Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More',
    description:
      'Curcumin has antiplatelet properties that add to warfarin and inhibits CYP enzymes that metabolize many medications. What the evidence shows.',
    type: 'article',
    publishedTime: '2026-07-07',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/turmeric-drug-interactions",
  },
};

export default function TurmericDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More",
            "datePublished": "2026-07-07",
            "publisher": {
              "@type": "Organization",
              "name": "StackVerify"
            }
          })
        }}
      />
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-07</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Turmeric is one of the most widely used culinary spices in the world, and curcumin —
          its primary bioactive compound — has become a popular supplement in its own right.
          People take curcumin for joint inflammation, general antioxidant support, and a range
          of other reasons. What most labels do not mention is that curcumin interacts with several
          categories of medications through two distinct mechanisms: antiplatelet activity and
          enzyme inhibition. Both are well-documented enough to matter for anyone taking
          blood thinners or certain other prescription drugs.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Antiplatelet effects and bleeding risk
          </h2>
          <p>
            Curcumin inhibits platelet aggregation — the process by which platelets clump together
            to form a clot. The main mechanism involves suppression of thromboxane B2, a signaling
            molecule that normally promotes platelet activation. At supplemental doses, this effect
            is measurable and clinically meaningful for people already on anticoagulant therapy.
          </p>
          <p className="mt-3">
            The interaction with warfarin deserves specific attention. Warfarin prevents clotting
            by blocking vitamin K-dependent clotting factors, and its effect is monitored using
            INR (international normalized ratio). The problem with combining warfarin and turmeric
            is that INR does not capture antiplatelet activity — only the clotting cascade side.
            So a person on warfarin who adds a curcumin supplement may have an INR reading that
            looks stable while their actual bleeding risk has increased because of the additive
            antiplatelet effect operating through a completely different pathway. NCCIH flags this
            interaction explicitly.
          </p>
          <p className="mt-3">
            The same concern applies to other antiplatelet drugs — aspirin, clopidogrel
            (Plavix), and similar medications — where additive inhibition of platelet function
            further elevates bleeding risk. High-dose curcumin supplements, not turmeric powder
            used as a spice, are the relevant concern here; the amounts in food are far lower.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            CYP enzyme inhibition
          </h2>
          <p>
            Curcumin inhibits CYP1A2 and CYP3A4, two of the most important enzymes in the liver
            responsible for breaking down a broad range of medications. When these enzymes are
            inhibited, drugs that depend on them for clearance accumulate at higher plasma
            concentrations and stay active longer. This can push a drug from its therapeutic
            range into toxicity territory, or amplify side effects that would otherwise be
            manageable.
          </p>
          <p className="mt-3">
            CYP3A4 metabolizes an estimated 30–50% of all marketed drugs, including
            immunosuppressants like tacrolimus and cyclosporine, certain statins, some
            antihistamines, and many others. CYP1A2 handles drugs including clozapine,
            olanzapine, theophylline, and some antidepressants. For medications with narrow
            therapeutic windows — where the difference between an effective dose and a toxic one
            is small — even modest CYP inhibition from a supplement can be significant.
          </p>
          <p className="mt-3">
            NCCIH notes that turmeric supplements may interact with drugs metabolized by the
            cytochrome P450 system. The practical consequence is that anyone taking tacrolimus,
            cyclosporine, or similarly narrow-window CYP3A4 substrates should not add high-dose
            curcumin supplements without discussing it with their prescriber. Culinary turmeric
            at spice amounts is unlikely to produce meaningful enzyme inhibition; concentrated
            supplement extracts are a different story.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter turmeric or curcumin
        alongside warfarin, cyclosporine, or tacrolimus in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see these interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/turmeric"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Turmeric
        </a>
      </div>
    </main>
  );
}
