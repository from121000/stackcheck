import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Green Tea Drug Interactions: Iron, EGCG, and What the Research Shows',
  description:
    'Green tea catechins chelate non-heme iron, reducing its absorption. High-dose EGCG supplements also inhibit drug transporters, affecting medications like nadolol. What NCCIH documents about green tea interactions.',
  openGraph: {
    title: 'Green Tea Drug Interactions: Iron, EGCG, and What the Research Shows',
    description:
      'Concentrated green tea extract operates at doses far above what a cup of tea delivers. At those levels, EGCG chelates non-heme iron and inhibits drug transporters. What NCCIH documents.',
    type: 'article',
    publishedTime: '2026-07-10',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/green-tea-drug-interactions",
  },
};

export default function GreenTeaDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Green Tea Drug Interactions: Iron, EGCG, and What the Research Shows",
            "datePublished": "2026-07-10",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-10</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Green Tea Drug Interactions: Iron, EGCG, and What the Research Shows
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Most people don't think of green tea as pharmacologically active, and for someone
          drinking a couple of cups a day, they're largely right. The interaction concerns with
          green tea are primarily associated with concentrated extract supplements standardized to
          high EGCG (epigallocatechin gallate) content — the kind marketed for weight loss or
          antioxidant effects. At those concentrations, EGCG delivers doses far above what food
          or beverage exposure produces, and at those levels, two interactions are well enough
          documented to be worth understanding: iron chelation and effects on certain drug
          transporters.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Iron absorption and catechin chelation
          </h2>
          <p>
            EGCG and other catechins form stable, insoluble complexes with non-heme iron in the
            gastrointestinal tract. Non-heme iron — the form found in plant foods, fortified foods,
            and most iron supplements — is already absorbed less efficiently than heme iron from
            meat, partly because it depends on being in a chemically available form when it reaches
            absorption sites in the small intestine. When catechins bind to it, they reduce that
            availability further.
          </p>
          <p className="mt-3">
            For someone with good iron status eating a varied diet, this chelation from occasional
            green tea extract use probably has minimal practical consequence. The concern is more
            significant for people who are iron-deficient or at risk of deficiency — women with
            heavy periods, pregnant individuals, vegetarians with limited heme iron intake, or
            anyone taking iron supplementation to correct a deficiency. In those cases, taking
            green tea extract simultaneously with iron supplements may meaningfully blunt the
            supplement's effect. NCCIH notes this interaction and the practical fix is simple:
            separate green tea extract and iron supplements by at least an hour.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Drug transporters and medication levels
          </h2>
          <p>
            EGCG inhibits organic anion transporting polypeptides (OATPs), a class of membrane
            transporters involved in the intestinal absorption and hepatic uptake of various drugs.
            The most documented clinical example is nadolol, a beta-blocker used for high blood
            pressure and certain cardiac conditions. A pharmacokinetic study found that green tea
            — consumed as a beverage, not just a supplement — reduced nadolol plasma concentrations
            by roughly 75%, with corresponding reduction in heart rate-lowering effect. The proposed
            mechanism is OATP1A2 inhibition preventing adequate nadolol absorption.
          </p>
          <p className="mt-3">
            This is a different mechanism from the cytochrome P450 interactions covered elsewhere
            on this site. OATPs handle drug uptake; CYP enzymes handle drug metabolism. Both can
            significantly alter how much of a medication reaches systemic circulation. For nadolol
            specifically, the green tea interaction is well-characterized. For other OATP substrates
            — including some statins and certain antivirals — in vitro data suggest similar potential,
            though clinical studies are limited. NCCIH notes green tea's potential to affect drug
            metabolism and absorption.
          </p>
          <p className="mt-3">
            The practical implication is that people taking medications known to use OATP transporters
            for absorption — nadolol is the clearest example — should not take them at the same time
            as green tea extract supplements, and ideally should discuss whether high-dose EGCG is
            appropriate given their medication regimen.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-zinc-100 pt-6">
        <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
        <ul className="space-y-1 text-sm">
          <li><Link href="/blog/iron-and-vitamin-c-together" className="underline hover:text-zinc-900">Taking Iron and Vitamin C Together: What the Research Shows</Link></li>
          <li><Link href="/blog/calcium-and-iron-absorption" className="underline hover:text-zinc-900">Taking Calcium and Iron Together: Why Timing Matters</Link></li>
          <li><Link href="/blog/iron-deficiency-and-medications" className="underline hover:text-zinc-900">Medications That Impair Iron Absorption: What to Know If You Take Iron</Link></li>
        </ul>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter green tea extract
        alongside iron supplements in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see the chelation interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/green-tea"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Green Tea
        </a>
      </div>
    </main>
  );
}
