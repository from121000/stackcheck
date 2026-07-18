import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Licorice Root Drug Interactions: Blood Pressure, Diuretics, and More',
  description:
    "Glycyrrhizin in licorice root inhibits 11-beta-HSD2, causing pseudo-hyperaldosteronism: sodium retention, potassium loss, and elevated blood pressure. This counteracts antihypertensives and compounds diuretics. What NCCIH documents.",
  openGraph: {
    title: 'Licorice Root Drug Interactions: Blood Pressure, Diuretics, and More',
    description:
      'Glycyrrhizin blocks an enzyme that normally inactivates cortisol in the kidney, causing sodium retention and potassium loss. The result counteracts antihypertensives and worsens diuretic-related potassium depletion.',
    type: 'article',
    publishedTime: '2026-07-10',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/licorice-root-drug-interactions",
  },
};

export default function LicoriceRootDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Licorice Root Drug Interactions: Blood Pressure, Diuretics, and More",
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
        Licorice Root Drug Interactions: Blood Pressure, Diuretics, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Licorice root is an instructive example of a supplement with a well-understood
          biochemical mechanism that most users have never heard of. The compound glycyrrhizin —
          present in most licorice root preparations — mimics excess aldosterone in the body by
          blocking a critical cortisol-inactivating enzyme. The downstream effects include sodium
          retention, potassium excretion, and elevated blood pressure. For people taking
          antihypertensive medications, diuretics, or corticosteroids, this mechanism creates
          real drug interactions that can undermine treatment. One important exception exists
          and is worth knowing upfront: deglycyrrhizinated licorice (DGL), a form commonly used
          for GI conditions, has had glycyrrhizin removed and does not carry these risks.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The 11-beta-HSD2 mechanism
          </h2>
          <p>
            In the kidney tubule, an enzyme called 11-beta-hydroxysteroid dehydrogenase type 2
            (11-beta-HSD2) converts active cortisol into inactive cortisone. This matters because
            cortisol and aldosterone act on the same mineralocorticoid receptors — the ones that
            control sodium retention and potassium excretion. Without 11-beta-HSD2 doing its job,
            cortisol would constantly stimulate those receptors at full strength, producing effects
            indistinguishable from having excess aldosterone in the blood.
          </p>
          <p className="mt-3">
            Glycyrrhizin inhibits 11-beta-HSD2. The result is exactly what you'd predict from
            that mechanism: cortisol accumulates at mineralocorticoid receptors, causing sodium
            and water retention, potassium excretion, and rising blood pressure. Clinically, this
            produces a syndrome called pseudo-hyperaldosteronism — it looks and acts like primary
            aldosteronism (Conn's syndrome), but aldosterone levels themselves are actually
            suppressed as a feedback response. The condition has been documented in people consuming
            large amounts of licorice candy, licorice tea, and licorice root supplements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Interactions with antihypertensives, diuretics, and corticosteroids
          </h2>
          <p>
            For someone taking antihypertensive medications — ACE inhibitors like lisinopril,
            ARBs like losartan, calcium channel blockers like amlodipine, beta-blockers, or
            thiazide diuretics — licorice root works in the opposite direction. These medications
            try to lower blood pressure through various mechanisms; licorice-induced sodium and
            water retention counteracts them. The interaction is pharmacodynamic, not metabolic:
            the two effects are simply pushing in opposite directions on the same physiological
            outcome. NCCIH explicitly notes that licorice root may interfere with antihypertensive
            treatment.
          </p>
          <p className="mt-3">
            The diuretic interaction is additive rather than antagonistic. Loop diuretics like
            furosemide and thiazide diuretics like hydrochlorothiazide already cause potassium
            excretion as a side effect — they're well-known causes of hypokalemia. Licorice root
            produces its own potassium-wasting effect through the 11-beta-HSD2 mechanism.
            Combined, the two can drive potassium to significantly lower levels than either alone,
            with hypokalemia symptoms ranging from muscle weakness and cramps to more serious
            cardiac effects. People on potassium-wasting diuretics are among those most likely to
            be harmed by concurrent licorice root use.
          </p>
          <p className="mt-3">
            Corticosteroids (prednisone, prednisolone, hydrocortisone) add a third dimension.
            Corticosteroids already promote sodium retention and potassium excretion at therapeutic
            doses. Glycyrrhizin, by slowing cortisol inactivation, effectively prolongs and
            amplifies the corticosteroid's mineralocorticoid activity. The result is greater
            sodium retention and potassium loss than the corticosteroid alone would produce.
          </p>
          <p className="mt-3">
            DGL (deglycyrrhizinated licorice) is processed to remove glycyrrhizin, which is why
            it's commonly recommended for people with acid reflux or gastric ulcer symptoms who
            want to avoid these cardiovascular and electrolyte effects. If the licorice root
            preparation you're taking specifies that it's DGL, it should not carry these
            interaction risks — but most standard licorice root supplements and teas are not DGL.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-zinc-100 pt-6">
        <h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>
        <ul className="space-y-1 text-sm">
          <li><Link href="/blog/potassium-and-medications" className="underline hover:text-zinc-900">Potassium Supplements and Medications: Hyperkalemia Risk</Link></li>
          <li><Link href="/blog/magnesium-and-diuretics" className="underline hover:text-zinc-900">Diuretics and Magnesium Depletion: What Furosemide and Thiazides Do</Link></li>
        </ul>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter licorice root
        alongside lisinopril, furosemide, or other antihypertensives in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/licorice-root"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Licorice Root
        </a>
      </div>
    </main>
  );
}
