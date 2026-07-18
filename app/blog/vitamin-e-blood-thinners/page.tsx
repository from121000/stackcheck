import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do',
  description:
    'High-dose vitamin E supplements inhibit platelet aggregation and may potentiate warfarin. What the NIH ODS fact sheet documents and why dose matters more than most people realize.',
  openGraph: {
    title: 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do',
    description:
      'Vitamin E at high doses has antiplatelet properties that create additive bleeding risk with warfarin and other anticoagulants. The evidence and what it means practically.',
    type: 'article',
    publishedTime: '2026-07-03',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/vitamin-e-blood-thinners",
  },
};

export default function VitaminEBloodThinners() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-03</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Vitamin E and Blood Thinners: What High-Dose Supplements Can Do
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Vitamin E is a fat-soluble antioxidant found in nuts, seeds, and vegetable oils, and
          sold in supplement form at doses ranging from the modest (15&nbsp;mg / ~22&nbsp;IU) to
          the substantial (400–800&nbsp;IU and above). What most people don&apos;t know about it is
          that at high supplemental doses, vitamin E has measurable effects on blood clotting —
          effects that are clinically relevant for anyone on warfarin or other anticoagulants.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The interaction with warfarin
          </h2>
          <p>
            Vitamin E has two mechanisms that combine to raise bleeding risk alongside warfarin.
            First, high doses inhibit platelet aggregation — the initial clumping response that
            precedes clot formation — through a mechanism distinct from aspirin or clopidogrel.
            Second, there is evidence that large amounts of vitamin E may antagonize vitamin
            K-dependent clotting factor activity, partially overlapping with how warfarin itself
            works. Layered on top of warfarin&apos;s anticoagulant effect, both mechanisms
            contribute to an increased risk of bleeding.
          </p>
          <p className="mt-3">
            The NIH ODS Vitamin E Health Professional Fact Sheet notes this interaction directly,
            flagging that high supplemental doses may potentiate warfarin and recommending that
            people on anticoagulant therapy discuss vitamin E supplementation with their provider.
            Some studies have documented measurable changes in INR (the test used to monitor
            warfarin dosing) with high-dose vitamin E use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Dose is the key variable
          </h2>
          <p>
            The concern here is specifically about supplemental doses — not dietary vitamin E. The
            RDA for vitamin E is 15&nbsp;mg (about 22&nbsp;IU). Getting vitamin E from food sources
            at typical amounts is unlikely to have any clinically meaningful effect on coagulation.
            The antiplatelet and anticoagulant-potentiating effects emerge at higher supplemental
            intakes, generally above approximately 400&nbsp;IU/day — which is where many commonly
            sold vitamin E supplements land.
          </p>
          <p className="mt-3">
            For people not on any blood thinners, high-dose vitamin E supplementation is a separate
            question worth discussing with a doctor, but the interaction profile is most relevant
            specifically in the context of warfarin, aspirin, or other antiplatelet or anticoagulant
            medications.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Absorption interactions
          </h2>
          <p>
            Vitamin E is fat-soluble, so anything that impairs fat absorption also reduces vitamin E
            absorption. Cholestyramine (Questran), a bile acid sequestrant used to lower
            cholesterol, can substantially reduce how much vitamin E gets absorbed when taken around
            the same time. Orlistat, the weight-loss medication that blocks dietary fat absorption,
            has a similar effect. The NIH ODS fact sheet lists both as interactions worth monitoring
            in people who depend on adequate vitamin E status.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter vitamin E alongside
          warfarin or other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
