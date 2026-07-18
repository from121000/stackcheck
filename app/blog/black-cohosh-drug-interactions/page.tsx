import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Black Cohosh Drug Interactions: Tamoxifen, CYP2D6, and More',
  description:
    'Black cohosh inhibits CYP2D6, the enzyme that converts tamoxifen to its active metabolite endoxifen. Reduced endoxifen levels may diminish tamoxifen efficacy in breast cancer treatment. What NCCIH documents.',
  openGraph: {
    title: 'Black Cohosh Drug Interactions: Tamoxifen, CYP2D6, and More',
    description:
      'Black cohosh inhibits CYP2D6, potentially reducing tamoxifen effectiveness by blocking conversion to its active metabolite. What breast cancer patients need to know.',
    type: 'article',
    publishedTime: '2026-07-08',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/black-cohosh-drug-interactions",
  },
};

export default function BlackCohoshDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Black Cohosh Drug Interactions: Tamoxifen, CYP2D6, and More",
            "datePublished": "2026-07-08",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-08</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Black Cohosh Drug Interactions: Tamoxifen, CYP2D6, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Black cohosh is primarily used by women navigating perimenopause and menopause for
          symptom relief — hot flashes, night sweats, mood changes. Many women in this age group
          are also managing breast cancer or are in active treatment or post-treatment follow-up,
          which is exactly where the interaction concern becomes clinically relevant. Black cohosh
          inhibits CYP2D6, an enzyme that plays a critical role in tamoxifen's conversion to
          its active form, and that inhibition may reduce tamoxifen's ability to prevent
          cancer recurrence.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The tamoxifen–endoxifen connection
          </h2>
          <p>
            Tamoxifen itself is not the pharmacologically active agent — it is a prodrug that
            the body must convert to endoxifen, its primary active metabolite, to achieve
            meaningful anti-estrogenic effects in breast tissue. That conversion is carried out
            almost entirely by CYP2D6, a liver enzyme that varies substantially in activity
            between individuals based on genetic polymorphisms. People who are CYP2D6 poor
            metabolizers produce far less endoxifen and tend to have worse outcomes on tamoxifen
            than extensive metabolizers — the clinical data supporting this relationship are
            reasonably consistent.
          </p>
          <p className="mt-3">
            Black cohosh inhibits CYP2D6. By reducing the enzyme's activity, it slows the
            conversion of tamoxifen to endoxifen, potentially pushing someone who would
            otherwise have adequate CYP2D6 activity into a functional state closer to a
            poor metabolizer. Whether this translates to meaningfully lower endoxifen
            concentrations in a given patient depends on the dose of black cohosh, baseline
            CYP2D6 phenotype, and tamoxifen dose — but the directional effect is clearly
            unfavorable. NCCIH flags this interaction and notes that black cohosh may interact
            with hormone-sensitive conditions and treatments.
          </p>
          <p className="mt-3">
            This same CYP2D6 inhibition is also relevant for other medications metabolized
            by this enzyme — certain antidepressants (fluoxetine, paroxetine, tricyclics),
            opioid analgesics like codeine and tramadol (which require CYP2D6 conversion for
            analgesia), antiarrhythmics, and antipsychotics. Reduced CYP2D6 activity from
            black cohosh could raise plasma levels of some drugs (those where the parent
            compound is active and CYP2D6 handles elimination) while reducing efficacy
            for prodrugs like tamoxifen and codeine where the enzyme creates the active form.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Hormone-sensitive conditions and broader context
          </h2>
          <p>
            Beyond CYP2D6, black cohosh has historically been studied — and marketed — for
            estrogen-like effects, though the evidence for genuine estrogenic activity is
            mixed. Earlier research suggested possible SERM (selective estrogen receptor
            modulator) activity; more recent work using binding assays and tissue studies
            has cast doubt on whether black cohosh directly activates estrogen receptors.
            NCCIH currently notes that the mechanism of any hormonal effects is unclear.
          </p>
          <p className="mt-3">
            For people with hormone-receptor-positive breast cancer on tamoxifen or aromatase
            inhibitors (letrozole, anastrozole, exemestane), the uncertainty itself is a
            reason for caution — not because estrogen receptor agonism is proven, but because
            the stakes of getting it wrong in an active treatment context are high. Aromatase
            inhibitors are not CYP2D6-dependent and would not be affected by that specific
            mechanism, but the broader question of whether any supplement exerts hormonally
            relevant effects is worth discussing with an oncologist rather than deciding
            unilaterally.
          </p>
          <p className="mt-3">
            The practical guidance from NCCIH is clear: people with hormone-sensitive conditions
            or taking hormone-modulating treatments should discuss black cohosh use with their
            healthcare provider before starting it. The alternative symptom relief options for
            menopause symptoms during cancer treatment — including non-hormonal pharmacological
            options — are worth exploring with the oncology team.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-zinc-100 pt-6">
        <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
        <ul className="space-y-1 text-sm">
          <li><Link href="/blog/supplement-interactions-with-statins" className="underline hover:text-zinc-900">Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice</Link></li>
          <li><Link href="/blog/st-johns-wort-drug-interactions" className="underline hover:text-zinc-900">St. John's Wort Drug Interactions: What the Evidence Shows</Link></li>
        </ul>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter black cohosh alongside
        tamoxifen in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/black-cohosh"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Black Cohosh
        </a>
      </div>
    </main>
  );
}
