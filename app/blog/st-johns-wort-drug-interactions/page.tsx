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
};

export default function SJWInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
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
          herbal supplements. It also has one of the most extensively documented interaction
          profiles of any supplement — a combination that makes it worth understanding in detail if
          you&apos;re taking any medications.
        </p>

        <p>
          Three interactions show up repeatedly in the clinical literature and are well-supported by
          mechanistic evidence. All three are worth knowing about.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The primary mechanism: CYP3A4 induction
          </h2>
          <p>
            Most St. John&apos;s Wort interactions trace to a single mechanism: it strongly induces
            the CYP3A4 enzyme system, part of the liver&apos;s drug-metabolizing machinery.
            Elevated CYP3A4 activity speeds up the breakdown of a wide range of medications,
            lowering their circulating blood levels and potentially reducing their effectiveness.
            CYP3A4 is involved in metabolizing roughly 50% of currently prescribed drugs, which is
            why St. John&apos;s Wort&apos;s interaction profile is so broad.
          </p>
          <p className="mt-3">
            A second mechanism — serotonin reuptake inhibition — explains its interactions with
            psychiatric medications specifically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Warfarin (Coumadin)
          </h2>
          <div className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            High severity
          </div>
          <p>
            St. John&apos;s Wort has been associated with decreased anticoagulation effect in
            people taking warfarin, with documented cases of unstable INR values. The CYP3A4
            induction accelerates warfarin metabolism, lowering drug levels in the blood. This is
            among the most consistently reported herb-drug interactions in the pharmacokinetics
            literature.
          </p>
          <p className="mt-3">
            INR instability with warfarin carries real clinical risk. People taking warfarin and
            using St. John&apos;s Wort concurrently should discuss this with the prescribing
            provider or pharmacist.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2483264/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Clinically relevant safety issues associated with St. John&apos;s wort product labels
            </a>{' '}
            (PMC / peer-reviewed)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            SSRIs (selective serotonin reuptake inhibitors)
          </h2>
          <div className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            High severity
          </div>
          <p>
            St. John&apos;s Wort inhibits the reuptake of serotonin, dopamine, and norepinephrine
            — the same mechanism as SSRI antidepressants. Combining it with an SSRI may push
            serotonin levels beyond the intended therapeutic range, with a risk of serotonin
            syndrome. Serotonin syndrome ranges from mild (shivering, diarrhea, restlessness) to
            severe (fever, rapid heart rate, muscle rigidity, seizures).
          </p>
          <p className="mt-3">
            This interaction is considered one to actively avoid rather than simply monitor. The
            combination is generally not recommended.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12420457/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              The Effects of St. John&apos;s Wort and its Interactions with SSRI&apos;s
            </a>{' '}
            (European Psychiatry / peer-reviewed)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Oral contraceptives
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            The CYP3A4 induction mechanism also applies to the hormones in oral contraceptives.
            St. John&apos;s Wort may reduce their circulating levels, potentially affecting
            effectiveness. Case reports have documented breakthrough bleeding and unintended
            pregnancies in people using both concurrently.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2483264/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Clinically relevant safety issues associated with St. John&apos;s wort product labels
            </a>{' '}
            (PMC / peer-reviewed)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Beyond these three
          </h2>
          <p>
            Because CYP3A4 is involved in metabolizing a large fraction of prescription drugs,
            St. John&apos;s Wort&apos;s potential interaction list extends well beyond these three
            examples. Cyclosporine (an immunosuppressant), HIV antiretrovirals, and certain
            chemotherapy agents have all been reported in interaction literature. The three above
            are the ones with the most consistent documentation and clearest mechanistic
            explanation.
          </p>
          <p className="mt-3">
            If you&apos;re taking any prescription medication and considering St. John&apos;s Wort,
            a pharmacist can check your specific medication list against the known CYP3A4 substrate
            list.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> You can enter St. John&apos;s
          Wort along with your other supplements and medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see which interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
