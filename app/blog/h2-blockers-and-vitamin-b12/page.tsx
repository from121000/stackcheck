import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'H2 Blockers and Vitamin B12: Does Famotidine Affect B12 Levels?',
  description:
    'H2 receptor antagonists like famotidine and cimetidine reduce gastric acid, impairing dietary vitamin B12 absorption. The effect is less severe than with PPIs, but relevant for people on chronic H2 blocker therapy. What the NIH ODS documents.',
  openGraph: {
    title: 'H2 Blockers and Vitamin B12: Does Famotidine Affect B12 Levels?',
    description:
      'H2 receptor antagonists like famotidine and cimetidine reduce gastric acid, impairing dietary vitamin B12 absorption — less severely than PPIs, but relevant for chronic users.',
    type: 'article',
    publishedTime: '2026-07-17',
  },
};

export default function H2BlockersAndVitaminB12() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-17</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        H2 Blockers and Vitamin B12: Does Famotidine Affect B12 Levels?
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          The connection between proton pump inhibitors and vitamin B12 depletion is relatively
          well-known. Less discussed is that H2 receptor antagonists — famotidine (Pepcid),
          cimetidine (Tagamet), ranitidine (Zantac, before its recall), and nizatidine (Axid) — work
          through the same basic mechanism and create the same risk, just to a lesser degree. Both
          drug classes reduce gastric acid. Both impair the acid-dependent step that releases dietary
          B12 from food proteins. For people who rely on H2 blockers chronically, this is worth
          understanding.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Why B12 absorption depends on stomach acid
          </h2>
          <p>
            Vitamin B12 in food — meat, dairy, eggs — arrives bound to proteins. Before it can be
            absorbed, it must be released from those proteins in the stomach. Gastric acid and the
            enzyme pepsin (which itself requires an acidic environment to activate) accomplish this
            step. Once free, B12 binds to a carrier called intrinsic factor, which is secreted by
            the same parietal cells that produce acid. The B12-intrinsic factor complex then travels
            to the ileum, where it is absorbed.
          </p>
          <p className="mt-3">
            H2 receptor antagonists block histamine H2 receptors on gastric parietal cells, which
            reduces but does not eliminate acid secretion. Without enough acid, the protein-unbinding
            step is impaired. Some B12 remains attached to food proteins and passes through the gut
            without being absorbed.
          </p>
          <p className="mt-3">
            Proton pump inhibitors are more thorough. They irreversibly block the proton pump itself,
            suppressing acid secretion more completely and over a longer period than H2 blockers.
            This is why PPI-related B12 malabsorption is better-documented and generally more severe.
            H2 blockers produce a similar but milder version of the same problem.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Who is most affected — and who is not
          </h2>
          <p>
            The critical distinction for supplementation is between dietary B12 and crystalline B12.
            Dietary B12 requires acid-mediated protein release. Crystalline B12 — the form in
            tablets, sublingual preparations, and most supplements — is already free of protein
            binding. It requires intrinsic factor for absorption but not gastric acid. This means
            that someone on an H2 blocker who takes a B12 supplement absorbs that supplement
            substantially normally, while their absorption from a steak or a glass of milk is
            somewhat impaired.
          </p>
          <p className="mt-3">
            Practically, this matters most for people who depend heavily on food sources of B12 and
            do not supplement — particularly older adults, who already tend toward lower B12 levels
            as intrinsic factor production declines with age, and people with limited animal product
            intake. For people who already take a B12 supplement, chronic H2 blocker use is unlikely
            to produce deficiency.
          </p>
          <p className="mt-3">
            The NIH ODS Vitamin B12 fact sheet identifies both H2 blockers and PPIs as recognized
            causes of B12 malabsorption with prolonged use, noting that the interaction is
            well-established enough to warrant awareness in clinical practice. Short-term or
            intermittent use — taking famotidine for occasional heartburn rather than daily — is
            unlikely to produce meaningful depletion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            A note on ranitidine
          </h2>
          <p>
            Ranitidine (Zantac) was recalled in 2020 due to the presence of N-nitrosodimethylamine
            (NDMA), a probable carcinogen, at levels that increase over time with storage. This
            recall was unrelated to the B12 interaction — it was a manufacturing and chemical
            stability issue specific to ranitidine, not a class-wide concern for H2 blockers. Famotidine
            and cimetidine were not recalled and remain in use. The B12 interaction applies to all
            H2 blockers through the same acid-reduction mechanism.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter famotidine or another
        H2 blocker alongside a B12 supplement in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged. You can also check PPIs alongside B12, iron, magnesium,
        and calcium for a broader picture of acid-reducer interactions.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Vitamin B12 — Health Professional Fact Sheet
        </a>
        {' '}(NIH Office of Dietary Supplements)
      </div>
    </main>
  );
}
