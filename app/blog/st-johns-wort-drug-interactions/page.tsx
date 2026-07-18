import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "St. John's Wort Drug Interactions: What the Evidence Shows",
  description:
    "St. John's Wort has one of the most extensive interaction profiles of any supplement. Three well-documented interactions with warfarin, SSRIs, and oral contraceptives — and the mechanism behind each.",
  openGraph: {
    title: "St. John's Wort Drug Interactions: What the Evidence Shows",
    description:
      "St. John's Wort interacts with warfarin, SSRIs, and oral contraceptives via two distinct mechanisms. Here's what the clinical literature shows.",
    type: 'article',
    publishedTime: '2026-06-30',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/st-johns-wort-drug-interactions",
  },
};

export default function SJWInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "St. John's Wort Drug Interactions: What the Evidence Shows",
            "datePublished": "2026-06-30",
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

      <div className="mb-2 text-xs text-zinc-400">2026-06-30</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        St. John&apos;s Wort Drug Interactions: What the Evidence Shows
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          St. John&apos;s Wort (<em>Hypericum perforatum</em>) is one of the most widely used
          herbal supplements, and it has one of the most extensively documented interaction profiles
          of any supplement — a combination that makes it worth understanding in detail if
          you&apos;re taking any medications. Three interactions show up consistently in the clinical
          literature and are well-supported by mechanistic evidence.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The primary mechanism: CYP3A4 induction
          </h2>
          <p>
            Most St. John&apos;s Wort interactions trace to a single mechanism: it strongly induces
            CYP3A4, a liver enzyme central to metabolizing a large fraction of prescription drugs.
            Elevated CYP3A4 activity speeds up the breakdown of affected medications, lowering their
            blood levels and potentially reducing their effectiveness.
          </p>
          <p className="mt-3">
            The most clinically significant application of this mechanism is with warfarin. CYP3A4
            induction accelerates warfarin metabolism, lowering drug levels and reducing
            anticoagulant effect. Documented cases of unstable INR in people using both concurrently
            appear consistently across the interaction literature — this is among the most
            reproducible herb-drug interactions known. INR instability with warfarin carries real
            clinical risk; anyone on warfarin and considering St. John&apos;s Wort should discuss
            it with their prescriber.
          </p>
          <p className="mt-3">
            The same CYP3A4 mechanism applies to oral contraceptives. St. John&apos;s Wort may
            reduce circulating hormone levels, potentially affecting contraceptive effectiveness.
            Case reports have documented breakthrough bleeding and unintended pregnancies in people
            using both. Because CYP3A4 is involved in metabolizing roughly half of currently
            prescribed drugs, the potential list extends further — cyclosporine, HIV antiretrovirals,
            and certain chemotherapy agents have all been reported. A pharmacist can check a specific
            medication list against the known CYP3A4 substrate list.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            SSRIs and serotonin syndrome
          </h2>
          <p>
            St. John&apos;s Wort also inhibits the reuptake of serotonin, dopamine, and
            norepinephrine — overlapping with how SSRI antidepressants work. Combining it with an
            SSRI may push serotonin activity beyond the intended therapeutic range. Serotonin
            syndrome, the clinical consequence, ranges from mild (shivering, restlessness, diarrhea)
            to severe (fever, rapid heart rate, muscle rigidity, seizures).
          </p>
          <p className="mt-3">
            Unlike the warfarin interaction, where the concern is reduced drug efficacy, the risk
            here is excess pharmacological effect. The combination is generally considered one to
            avoid rather than monitor, and is not recommended in clinical guidelines.
          </p>
        </section>

        <div className="mt-8 text-sm text-zinc-500">
          Sources:{' '}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2483264/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Clinically relevant safety issues associated with St. John&apos;s wort product labels
          </a>{' '}
          (PMC / peer-reviewed);{' '}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12420457/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            The Effects of St. John&apos;s Wort and its Interactions with SSRIs
          </a>{' '}
          (European Psychiatry / peer-reviewed)
        </div>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter St. John&apos;s Wort
          along with your other supplements and medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see which interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
