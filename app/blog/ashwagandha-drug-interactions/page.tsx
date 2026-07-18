import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants, and More',
  description:
    'Ashwagandha may increase thyroid hormone levels and stimulate immune function — both of which create real interactions with thyroid medications and immunosuppressants. What NCCIH documents.',
  openGraph: {
    title: 'Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants, and More',
    description:
      'Ashwagandha raises thyroid hormones and stimulates immune activity, creating documented interactions with levothyroxine and immunosuppressant drugs.',
    type: 'article',
    publishedTime: '2026-07-07',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/ashwagandha-drug-interactions",
  },
};

export default function AshwagandhaDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants, and More",
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
        Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Ashwagandha (<em>Withania somnifera</em>) has become one of the most popular adaptogens
          on the supplement market. It is marketed for stress reduction, energy, and athletic
          performance, among other things. It also has real pharmacological activity — it affects
          thyroid hormone levels and immune function in ways that are well-documented enough to
          matter for people on certain medications. Understanding these interactions is
          particularly important because the people most likely to be taking ashwagandha
          (those managing stress, fatigue, or chronic conditions) often overlap with people on
          thyroid therapy or immunosuppressants.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Thyroid hormone levels
          </h2>
          <p>
            Multiple clinical studies have found that ashwagandha supplementation increases serum
            levels of T4 (thyroxine) and, in some studies, T3 (triiodothyronine), while also
            affecting TSH (thyroid-stimulating hormone). The mechanism is not fully elucidated,
            but ashwagandha appears to stimulate thyroid activity rather than simply modulating
            the stress-thyroid axis indirectly via cortisol reduction.
          </p>
          <p className="mt-3">
            For people on levothyroxine or other thyroid hormone replacement therapy, this
            matters. Thyroid hormone dosing targets a narrow range — the goal is to normalize
            TSH, typically to between 0.5 and 4.5 mIU/L, and small changes in T4 or T3 can
            push someone outside that range. If ashwagandha meaningfully increases endogenous
            thyroid hormone production or sensitivity, the combined effect with exogenous
            levothyroxine can produce symptoms of hyperthyroidism: elevated heart rate, anxiety,
            heat intolerance, insomnia. NCCIH notes this interaction and flags it as a reason
            to consult a prescriber before adding ashwagandha when on thyroid medication.
          </p>
          <p className="mt-3">
            The reverse scenario — someone with hypothyroidism who is not yet on medication —
            is more ambiguous. Ashwagandha's thyroid-stimulating effect might seem beneficial
            in that context, but using a supplement to manage thyroid function without medical
            monitoring is not a substitute for proper diagnosis and treatment.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Immunosuppressants and immune-stimulating effects
          </h2>
          <p>
            Ashwagandha has immunomodulatory effects that include increasing natural killer cell
            activity, boosting white blood cell counts, and enhancing overall immune responsiveness.
            For most healthy people, these effects may be desirable or at least neutral. For
            people taking immunosuppressant medications — after an organ transplant, or to manage
            autoimmune conditions like rheumatoid arthritis, lupus, or Crohn&apos;s disease — they
            are directly counterproductive.
          </p>
          <p className="mt-3">
            Immunosuppressants such as cyclosporine, tacrolimus, mycophenolate, and azathioprine
            work by dampening immune system activity to prevent rejection or autoimmune attacks.
            Introducing a supplement that stimulates immune function works in the opposite direction
            and can reduce the effectiveness of the medication. This is not a theoretical concern —
            NCCIH explicitly lists immunosuppressants among the drug categories that may interact
            with ashwagandha.
          </p>
          <p className="mt-3">
            The interaction also extends to corticosteroids used for immune suppression, such as
            prednisone. Ashwagandha may reduce cortisol levels and counter certain
            corticosteroid-mediated effects through its adaptogenic activity. People on
            high-dose corticosteroids for serious inflammatory or autoimmune conditions should
            treat ashwagandha as an untested variable rather than an innocuous supplement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Sedatives and CNS depressants
          </h2>
          <p>
            Ashwagandha has mild sedative properties — part of what makes it attractive for
            stress and sleep. Combined with medications that also depress the central nervous
            system (benzodiazepines, z-drugs like zolpidem, alcohol, or other sedative agents),
            this effect may be additive. The interaction is less well-characterized than the
            thyroid and immunosuppressant interactions, and the magnitude at typical supplement
            doses is uncertain, but the directional concern is real. NCCIH notes the potential
            for additive CNS depression.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter ashwagandha alongside
        levothyroxine, cyclosporine, or tacrolimus in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see these interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/ashwagandha"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Ashwagandha
        </a>
      </div>
    </main>
  );
}
