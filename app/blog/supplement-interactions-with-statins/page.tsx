import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice, and More",
  description:
    "St. John's Wort reduces simvastatin and lovastatin levels via CYP3A4 induction. Red yeast rice contains a statin compound and shouldn't be combined with prescription statins. What the evidence shows.",
  openGraph: {
    title: "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice, and More",
    description:
      "St. John's Wort induces CYP3A4, cutting simvastatin/lovastatin plasma levels. Red yeast rice contains monacolin K — pharmacologically identical to lovastatin. What NCCIH documents.",
    type: 'article',
    publishedTime: '2026-07-02',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/supplement-interactions-with-statins",
  },
};

export default function SupplementInteractionsWithStatins() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice, and More",
            "datePublished": "2026-07-02",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-02</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Supplement Interactions with Statins: St. John&apos;s Wort, Red Yeast Rice, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Statins — HMG-CoA reductase inhibitors — are among the most widely prescribed
          medications in the world. Several common supplements interact with them in ways that
          are clinically significant: one reduces statin effectiveness by speeding up its
          metabolism, and another is itself a statin compound that creates a double-dosing
          problem. Neither interaction is hypothetical.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            When supplements reduce statin effectiveness
          </h2>
          <p>
            St. John&apos;s Wort is one of the most potent CYP3A4 inducers among commonly used
            supplements. CYP3A4 is a hepatic enzyme that metabolizes a large fraction of drugs in
            clinical use — when it is induced (upregulated), drugs that depend on CYP3A4 clearance
            are metabolized faster, which lowers their plasma concentrations.
          </p>
          <p className="mt-3">
            Simvastatin and lovastatin are almost entirely dependent on CYP3A4 for their
            metabolism and have the most exposure to this interaction. Atorvastatin is also
            partially CYP3A4-dependent and may see reduced levels to a lesser degree. By contrast,
            pravastatin, rosuvastatin, fluvastatin, and pitavastatin are not CYP3A4 substrates and
            are not meaningfully affected by St. John&apos;s Wort.
          </p>
          <p className="mt-3">
            The practical result: someone taking simvastatin or lovastatin while also taking St.
            John&apos;s Wort may have substantially lower statin plasma levels than expected,
            reducing the medication&apos;s LDL-lowering effect. Since the whole point of these
            medications is sustained plasma exposure to achieve a target LDL, this is a meaningful
            interaction. NCCIH specifically flags the interaction between St. John&apos;s Wort and
            simvastatin, and the same CYP3A4 induction mechanism extends to lovastatin. Someone
            who needs both St. John&apos;s Wort and a statin — a situation that should involve
            their prescriber — might have their statin switched to a non-CYP3A4-dependent option
            rather than accepting reduced statin effect.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Red yeast rice: combining two statins
          </h2>
          <p>
            Red yeast rice (RYR) is fermented rice produced using the mold{' '}
            <em>Monascus purpureus</em>. The fermentation process produces monacolins, a family of
            HMG-CoA reductase inhibitors. The most pharmacologically active of these is monacolin K
            — chemically identical to the prescription drug lovastatin.
          </p>
          <p className="mt-3">
            Red yeast rice is not a supplement that &quot;supports&quot; heart health in some vague
            way — it contains an actual statin compound. Taking it alongside a prescription statin
            (simvastatin, atorvastatin, rosuvastatin) is effectively combining two statins. The
            consequences are the same as taking higher-than-prescribed doses: elevated risk of
            myopathy (muscle pain and weakness), and in severe cases rhabdomyolysis — a breakdown
            of muscle tissue that can cause kidney damage.
          </p>
          <p className="mt-3">
            The monacolin K content of red yeast rice supplements varies considerably by product
            and is not standardized or consistently labeled. FDA has taken the position that red
            yeast rice products containing substantial amounts of monacolin K are unapproved new
            drugs, not dietary supplements, precisely because of this pharmacological overlap with
            lovastatin. Anyone on a prescription statin should not take red yeast rice. The risk
            is not speculative — it is the same risk that makes prescribers careful about statin
            dosing in the first place.
          </p>
        </section>

        <p>
          CoQ10 is worth addressing separately: statins reduce endogenous CoQ10 (coenzyme Q10)
          production as a side effect of blocking the mevalonate pathway, which synthesizes both
          cholesterol and CoQ10. Taking CoQ10 alongside a statin is not dangerous — CoQ10 is not
          a statin-inhibiting compound, does not affect CYP3A4, and does not amplify any statin
          side effect. The interactions that matter are St. John&apos;s Wort (which reduces statin
          effectiveness) and red yeast rice (which multiplies statin dose).
        </p>

        <p className="text-sm text-zinc-500">
          Sources:{' '}
          <a
            href="https://www.nccih.nih.gov/health/st-johns-wort"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            St. John&apos;s Wort
          </a>{' '}
          (NCCIH);{' '}
          <a
            href="https://www.nccih.nih.gov/health/red-yeast-rice"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Red Yeast Rice
          </a>{' '}
          (NCCIH)
        </p>

        <div className="mt-10 border-t border-zinc-100 pt-6">
          <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog/red-yeast-rice-and-statins" className="underline hover:text-zinc-900">Red Yeast Rice and Statins: Why This Combination Is Dangerous</Link></li>
            <li><Link href="/blog/coq10-and-statins" className="underline hover:text-zinc-900">CoQ10 and Statins: The Depletion Relationship Explained</Link></li>
            <li><Link href="/blog/st-johns-wort-drug-interactions" className="underline hover:text-zinc-900">St. John's Wort Drug Interactions: What the Evidence Shows</Link></li>
          </ul>
        </div>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter your statin
          alongside your other supplements in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
