import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ashwagandha and Thyroid Medications: What the Evidence Shows',
  description:
    'Ashwagandha raises T4 and T3 levels in human studies, which creates a real interaction with levothyroxine and other thyroid medications. What this means for hypothyroid and hyperthyroid patients.',
  openGraph: {
    title: 'Ashwagandha and Thyroid Medications: What the Evidence Shows',
    description:
      'Ashwagandha appears to increase circulating T4 and T3. For people already on thyroid medication, this additive effect can push thyroid hormone levels too high. What NCCIH documents.',
    type: 'article',
    publishedTime: '2026-07-13',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/ashwagandha-and-thyroid",
  },
};

export default function AshwagandhaAndThyroid() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-13</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Ashwagandha and Thyroid Medications: What the Evidence Shows
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Ashwagandha (<em>Withania somnifera</em>) is widely used for stress, fatigue, and
          cognitive function, and it has a reasonably good safety record in healthy adults at
          typical doses. But one category of people needs to pay closer attention: anyone on
          thyroid medication. Ashwagandha appears to increase circulating thyroid hormone
          levels — T4 (thyroxine) and T3 (triiodothyronine) — and that thyroid-stimulating
          effect creates a real interaction with levothyroxine and other thyroid treatments
          that most supplement users are not aware of.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            What the evidence shows on thyroid hormones
          </h2>
          <p>
            Human clinical data on ashwagandha and thyroid function are limited but consistent
            in direction. A randomized controlled trial in adults with subclinical hypothyroidism
            found that ashwagandha root extract significantly increased serum T4 and T3 compared
            to placebo over eight weeks. The mechanism is not fully characterized — ashwagandha
            may stimulate thyroid hormone synthesis or reduce peripheral clearance, but the
            downstream effect on measured hormone levels is documented. NCCIH notes that ashwagandha
            may interact with thyroid medications due to its thyroid-stimulating properties.
          </p>
          <p className="mt-3">
            For someone on levothyroxine (sold as Synthroid, Armour Thyroid, or generic
            formulations), this creates a straightforward stacking problem: levothyroxine
            is already supplying exogenous thyroid hormone, and ashwagandha may be pushing
            endogenous production higher on top of that. The result can be elevated total
            thyroid hormone levels — a state of relative hyperthyroidism — with symptoms
            like palpitations, anxiety, insomnia, heat intolerance, and unexplained weight loss.
            Because TSH suppression can lag behind the actual hormone elevation, routine TSH
            monitoring may not immediately catch this shift.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Who is most at risk
          </h2>
          <p>
            People with hypothyroidism who are optimally dosed on levothyroxine face the
            clearest risk: their dose has been titrated to a specific thyroid hormone level,
            and adding something that raises T4 or T3 disrupts that balance. The interaction
            is particularly relevant for people who have Hashimoto&apos;s thyroiditis — the
            most common cause of hypothyroidism — because Hashimoto&apos;s patients
            sometimes use ashwagandha under the impression it will &ldquo;support&rdquo;
            their immune system or thyroid. The immune-modulating properties of ashwagandha
            are a separate concern for autoimmune conditions; the thyroid hormone-raising
            effect adds an additional layer.
          </p>
          <p className="mt-3">
            People with hyperthyroidism (Graves&apos; disease) or who are taking antithyroid
            medications (methimazole, propylthiouracil) to suppress thyroid overactivity face
            a different problem: ashwagandha may directly counteract the treatment goal.
            Someone working with their physician to bring thyroid hormone levels down is working
            against their own treatment if they add a supplement that stimulates thyroid
            hormone production.
          </p>
          <p className="mt-3">
            Healthy people without thyroid conditions are unlikely to notice a clinically
            significant effect from ashwagandha on thyroid hormone levels — the effect in
            subclinical hypothyroidism may partly reflect correction of an underlying deficit
            rather than a pharmacological overstimulation. But anyone with a known thyroid
            condition or on thyroid medication should discuss ashwagandha use with their
            prescribing clinician and consider more frequent thyroid panel monitoring if
            they proceed.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter ashwagandha alongside
        levothyroxine, Synthroid, or methimazole in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see the thyroid interaction flagged.
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
