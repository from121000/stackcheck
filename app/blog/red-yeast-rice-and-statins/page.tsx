import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Red Yeast Rice and Statins: Why This Combination Is Dangerous',
  description:
    'Red yeast rice contains monacolin K — a compound chemically identical to lovastatin. Combining it with any prescription statin effectively doubles your statin dose, raising the risk of serious muscle damage.',
  openGraph: {
    title: 'Red Yeast Rice and Statins: Why This Combination Is Dangerous',
    description:
      'Red yeast rice contains monacolin K, chemically identical to lovastatin. Taking it with a prescription statin is pharmacologically equivalent to two statins at once.',
    type: 'article',
    publishedTime: '2026-07-04',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/red-yeast-rice-and-statins",
  },
};

export default function RedYeastRiceAndStatins() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-04</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Red Yeast Rice and Statins: Why This Combination Is Dangerous
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Red yeast rice is sold as a dietary supplement for heart health and cholesterol support.
          What many people don&apos;t realize is that it contains a pharmacologically active statin
          compound — and combining it with a prescription statin is not a supplement-drug
          interaction in the usual sense. It is closer to accidentally taking two doses of a
          prescription medication simultaneously.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            What red yeast rice actually contains
          </h2>
          <p>
            Red yeast rice is produced by fermenting rice with the mold{' '}
            <em>Monascus purpureus</em>. The fermentation generates a group of compounds called
            monacolins — HMG-CoA reductase inhibitors, which are the same class of molecules as
            prescription statins. The most pharmacologically active of these is monacolin K, which
            is chemically identical to lovastatin. Not similar to lovastatin — identical, at the
            molecular level.
          </p>
          <p className="mt-3">
            This is why the FDA has taken the position that red yeast rice products containing
            substantial amounts of monacolin K are not dietary supplements under the law — they are
            unapproved new drugs. The regulatory distinction matters less than the practical one:
            whatever the label says, the pharmacological reality is that you are consuming a statin.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why combining it with a prescription statin is a problem
          </h2>
          <p>
            Statins carry a dose-dependent risk of muscle toxicity. At standard therapeutic doses,
            myopathy — muscle pain and weakness — affects a meaningful minority of users. At higher
            doses, or when statin levels are raised by drug interactions, the risk escalates toward
            rhabdomyolysis: severe muscle breakdown that releases proteins into the bloodstream and
            can cause acute kidney damage.
          </p>
          <p className="mt-3">
            Prescribers carefully titrate statin doses with this in mind. A person on 20 mg of
            simvastatin is on that dose because their prescriber weighed efficacy against risk at
            that level. If that same person takes red yeast rice, they are adding an unknown
            quantity of additional lovastatin — effectively pushing their statin exposure above the
            intended level, without their prescriber knowing it is happening.
          </p>
          <p className="mt-3">
            The NCCIH specifically flags this combination. The concern is not speculative —
            rhabdomyolysis cases associated with red yeast rice have been documented in the
            medical literature, including in people not on prescription statins who simply took
            high amounts of red yeast rice. The interaction with prescription statins amplifies
            this underlying risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Dose variability makes this worse
          </h2>
          <p>
            The monacolin K content of red yeast rice supplements is not standardized. Analysis
            of commercial products has found more than 100-fold variation in monacolin K content
            across brands. This means there is no reliable way to know how much statin you are
            actually taking when you consume a red yeast rice supplement — even reading the label
            carefully will not tell you, because labeling requirements do not apply in the same
            way they do for pharmaceuticals. Some products marketed as &quot;low monacolin&quot;
            still contain meaningful amounts.
          </p>
          <p className="mt-3">
            Compare this to a prescription statin, where every tablet contains a precisely
            verified dose. Anyone combining red yeast rice with a prescription statin is stacking
            a precisely known dose on top of an unknown dose with no way to predict the combined
            exposure.
          </p>
        </section>

        <p>
          The red yeast rice interaction with statins is categorically different from most
          supplement-drug interactions, where the supplement affects how a drug is absorbed or
          metabolized. Here, the supplement is itself the drug. NCCIH recommends that anyone
          taking a prescription statin avoid red yeast rice products.
        </p>

        <p className="text-sm text-zinc-500">
          Source:{' '}
          <a
            href="https://www.nccih.nih.gov/health/red-yeast-rice"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Red Yeast Rice
          </a>{' '}
          (National Center for Complementary and Integrative Health)
        </p>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter red yeast rice
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
