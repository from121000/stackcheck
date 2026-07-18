import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corticosteroids and Vitamin D: Why Prednisone Undermines Calcium Absorption',
  description:
    'Prednisone and other corticosteroids reduce the intestinal calcium absorption that vitamin D normally drives, while also increasing urinary calcium loss. What the NIH ODS documents and why supplementation alone may not be enough.',
  openGraph: {
    title: 'Corticosteroids and Vitamin D: Why Prednisone Undermines Calcium Absorption',
    description:
      'Corticosteroids reduce vitamin D-driven calcium absorption and increase urinary calcium excretion. The NIH ODS documents this as a recognized cause of vitamin D deficiency with chronic steroid use.',
    type: 'article',
    publishedTime: '2026-07-18',
  },
  alternates: {
    canonical: 'https://stackverify.app/blog/corticosteroids-and-vitamin-d',
  },
};

export default function CorticosteroidsAndVitaminD() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Corticosteroids and Vitamin D: Why Prednisone Undermines Calcium Absorption",
            "datePublished": "2026-07-18",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-18</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Corticosteroids and Vitamin D: Why Prednisone Undermines Calcium Absorption
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          People on long-term prednisone or other corticosteroids are routinely told to take calcium
          and vitamin D. This advice is correct — but understanding why reveals something
          counterintuitive: corticosteroids specifically undermine the mechanism by which vitamin D
          improves calcium absorption, so supplementing while on steroids is not equivalent to
          supplementing under normal conditions. The NIH ODS Vitamin D fact sheet identifies
          corticosteroids as a recognized cause of vitamin D deficiency, and it documents the
          bone-damaging cascade in detail.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            What corticosteroids do to vitamin D and calcium
          </h2>
          <p>
            Vitamin D's main job in calcium homeostasis is to upregulate intestinal calcium
            transport proteins — specifically calbindin-D9k and the epithelial calcium channel
            TRPV6. These proteins pull calcium out of food in the small intestine and move it into
            the bloodstream. Corticosteroids suppress the expression of these proteins, directly
            reducing the intestinal response to vitamin D. The result is that even adequate vitamin D
            levels do not produce the same calcium absorption efficiency they would in the absence of
            steroids.
          </p>
          <p className="mt-3">
            The problem compounds through a second mechanism: corticosteroids increase renal calcium
            excretion. The kidney normally reabsorbs most of the calcium filtered from the blood.
            Steroids impair this reabsorption, leading to more calcium being lost in the urine. The
            body's compensatory response — pulling calcium from bone to maintain blood calcium levels
            — is what drives corticosteroid-induced osteoporosis over time.
          </p>
          <p className="mt-3">
            A third effect is on vitamin D activation itself. Vitamin D from sun exposure or
            supplements exists as an inactive form (25-hydroxyvitamin D). The liver converts it to
            25(OH)D, and the kidneys then convert that to the active form, calcitriol (1,25-dihydroxyvitamin D),
            which is what actually drives calcium absorption. Corticosteroids may impair hepatic
            25-hydroxylation, meaning the initial activation step in the liver runs less efficiently.
            This effect is less consistently demonstrated than the intestinal and renal effects, but
            it contributes to why people on chronic steroids are more likely to have genuinely low
            vitamin D levels, not just impaired response to the vitamin D they have.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why supplementation is still recommended — and what it cannot fix
          </h2>
          <p>
            Given that corticosteroids actively oppose vitamin D's calcium-absorption mechanism, one
            might wonder whether supplementing vitamin D on steroids accomplishes anything. It does —
            but with important caveats. Higher vitamin D levels still partially offset the suppressed
            intestinal response: more vitamin D means more activation of calbindin-D9k and TRPV6
            even when their upregulation is blunted. Supplementation also addresses the renal calcium
            losses to some extent by increasing the circulating pool available for reabsorption.
          </p>
          <p className="mt-3">
            What supplementation cannot fully compensate for is the ongoing renal calcium wasting and
            the direct suppression of bone-forming cells (osteoblasts) that corticosteroids also
            cause. Corticosteroid-induced osteoporosis is a real and serious complication of chronic
            steroid use — more than 30% of people on long-term corticosteroids develop vertebral
            fractures. This is why clinical guidelines for people on prolonged corticosteroid therapy
            go beyond just recommending supplements; they typically include bone density monitoring
            and, in some cases, bisphosphonate therapy to counteract the bone loss directly.
          </p>
          <p className="mt-3">
            The interaction here is not just that vitamin D is depleted by steroids (though that
            happens), but that steroids impair the mechanism by which vitamin D works. Taking more
            vitamin D helps, but the underlying antagonism remains while steroids are used. This is
            different from, say, a PPI reducing vitamin D absorption, where the problem is upstream
            and fixing the absorption issue restores normal function. Here, even well-absorbed vitamin D
            encounters a system that has been partly disabled.
          </p>
        </section>

        <p className="text-sm text-zinc-500 mt-2">
          Source:{' '}
          <a
            href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700"
          >
            Vitamin D — Health Professional Fact Sheet
          </a>{' '}
          (NIH Office of Dietary Supplements)
        </p>

        <div className="mt-10 border-t border-zinc-100 pt-6">
          <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog/vitamin-d-drug-interactions" className="underline hover:text-zinc-900">Vitamin D Drug Interactions: What the Evidence Shows</Link></li>
            <li><Link href="/blog/calcium-and-vitamin-d-together" className="underline hover:text-zinc-900">Calcium and Vitamin D Together: How They Work and When to Be Careful</Link></li>
            <li><Link href="/blog/ppis-and-nutrient-absorption" className="underline hover:text-zinc-900">PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium</Link></li>
          </ul>
        </div>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter vitamin D alongside
          prednisone or another corticosteroid in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see what interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
