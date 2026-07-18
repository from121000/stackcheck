import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vitamin B12 and Medications: What Depletes It and Why',
  description:
    'Metformin reduces vitamin B12 absorption over time. Proton pump inhibitors have a similar effect via a different mechanism. What the NIH ODS documents and who is most at risk.',
  openGraph: {
    title: 'Vitamin B12 and Medications: What Depletes It and Why',
    description:
      'Long-term metformin use is associated with B12 deficiency. PPIs reduce B12 absorption too. The mechanisms, who is at risk, and what the evidence says.',
    type: 'article',
    publishedTime: '2026-07-05',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/vitamin-b12-and-medications",
  },
};

export default function VitaminB12AndMedications() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Vitamin B12 and Medications: What Depletes It and Why",
            "datePublished": "2026-07-05",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-05</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Vitamin B12 and Medications: What Depletes It and Why
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Vitamin B12 deficiency is more common than most people expect, partly because it can take
          years to develop — the body stores several years&apos; worth — and partly because two of
          the most widely prescribed drug classes in the world interfere with how B12 is absorbed.
          If you take metformin for diabetes, or a proton pump inhibitor for acid reflux or ulcers,
          your B12 absorption may be lower than it would otherwise be. How much lower depends on the
          medication, the dose, and how long you&apos;ve been taking it.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Metformin and B12 depletion
          </h2>
          <p>
            Metformin, the first-line oral medication for type 2 diabetes, is one of the most
            prescribed drugs in the world. Its main mechanism — reducing hepatic glucose output and
            improving insulin sensitivity — is well understood. Less commonly discussed is its effect
            on vitamin B12 absorption.
          </p>
          <p className="mt-3">
            The absorption of dietary B12 depends on a specific transport system in the small
            intestine. B12 from food binds to intrinsic factor (a protein produced by stomach cells),
            and the resulting complex attaches to calcium-dependent receptors at the ileal membrane
            for uptake. Metformin appears to interfere with this calcium-dependent step, impairing
            how much B12 gets taken in. The effect is dose-related and accumulates gradually — it
            doesn&apos;t cause a sudden drop in B12, but over months and years of treatment, levels
            can drift downward.
          </p>
          <p className="mt-3">
            The NIH ODS Vitamin B12 fact sheet documents this interaction directly, noting that
            long-term metformin use has been associated with reduced B12 absorption in clinical
            studies, and that B12 blood levels should be monitored in people on long-term metformin
            therapy. The risk is higher in people who already have limited B12 intake — vegans and
            vegetarians, for instance — or in older adults, who absorb B12 less efficiently even
            without medication interference.
          </p>
          <p className="mt-3">
            Because B12 deficiency affects nerve function and can cause symptoms that overlap with
            diabetic neuropathy (tingling, numbness, cognitive changes), it can be easy to misattribute
            deficiency symptoms to the underlying disease rather than the medication. Monitoring B12
            levels periodically is a reasonable precaution for anyone on long-term metformin.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Proton pump inhibitors and B12 absorption
          </h2>
          <p>
            Proton pump inhibitors — omeprazole, lansoprazole, esomeprazole, pantoprazole, and
            similar drugs — are prescribed for acid reflux, peptic ulcers, and related conditions.
            They work by blocking the gastric proton pump (H+/K+ ATPase), substantially reducing
            gastric acid production. That&apos;s useful for treating acid-related conditions, but
            gastric acid plays a necessary role in B12 absorption: it cleaves B12 from the proteins
            in food, releasing it so it can bind to intrinsic factor.
          </p>
          <p className="mt-3">
            When acid secretion is suppressed, protein-bound B12 from food isn&apos;t released
            efficiently. Crystalline B12 — the form used in most supplements and fortified foods —
            doesn&apos;t require acid for absorption and isn&apos;t affected the same way. So PPIs
            can impair B12 absorption from food while leaving supplement absorption largely intact.
          </p>
          <p className="mt-3">
            The NIH ODS fact sheet notes that several studies have found reduced B12 levels in
            people on long-term PPI therapy, with the effect becoming more pronounced at higher
            doses and longer durations. As with metformin, the concern is most relevant for people
            who take these medications for years rather than the weeks typically recommended for acute
            treatment.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Other medications with B12 interactions
          </h2>
          <p>
            H2 blockers (famotidine, ranitidine, cimetidine) also reduce gastric acid, though less
            potently than PPIs, and have a similar but generally smaller effect on B12 absorption
            from food. Cholestyramine, the bile acid sequestrant, can bind B12 in the gut and reduce
            absorption, though this is less commonly flagged than the metformin and PPI interactions.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter metformin alongside
        vitamin B12 in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see the documented interaction.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Sources:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NIH ODS Vitamin B12 Health Professional Fact Sheet
        </a>
      </div>
    </main>
  );
}
