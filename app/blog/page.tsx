import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Supplement & Drug Interaction Research',
  description:
    'In-depth articles on supplement and medication interactions: mechanisms, evidence, and what the research actually says.',
};

const posts = [
  {
    slug: 'berberine-drug-interactions',
    title: 'Berberine Drug Interactions: Blood Sugar, CYP Enzymes, and What NCCIH Documents',
    description:
      'Berberine activates AMPK — similar to metformin — and inhibits CYP3A4, raising levels of drugs like cyclosporine. Both create real interactions with diabetes medications and CYP3A4-sensitive drugs.',
    date: '2026-07-06',
  },
  {
    slug: 'zinc-drug-interactions',
    title: 'Zinc Drug Interactions: Antibiotics, Iron, and Copper',
    description:
      'Zinc chelates fluoroquinolone and tetracycline antibiotics in the GI tract, competes with iron at the DMT1 transporter, and at sustained high doses depletes copper via metallothionein induction. What the NIH ODS zinc fact sheet documents.',
    date: '2026-07-06',
  },
  {
    slug: 'coq10-and-statins',
    title: 'CoQ10 and Statins: The Depletion Relationship Explained',
    description:
      'Statins inhibit the mevalonate pathway, which produces both cholesterol and CoQ10. Whether this depletion contributes to muscle symptoms is plausible but not conclusively proven. What NCCIH documents.',
    date: '2026-07-05',
  },
  {
    slug: 'vitamin-b12-and-medications',
    title: 'Vitamin B12 and Medications: What Depletes It and Why',
    description:
      'Metformin impairs B12 absorption through a calcium-dependent mechanism at the ileal membrane. Proton pump inhibitors reduce the gastric acid needed to release B12 from food. Who is most at risk.',
    date: '2026-07-05',
  },
  {
    slug: 'red-yeast-rice-and-statins',
    title: 'Red Yeast Rice and Statins: Why This Combination Is Dangerous',
    description:
      'Red yeast rice contains monacolin K — chemically identical to lovastatin. Combining it with a prescription statin is pharmacologically equivalent to taking two statins at once, substantially increasing the risk of muscle damage.',
    date: '2026-07-04',
  },
  {
    slug: 'vitamin-e-blood-thinners',
    title: 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do',
    description:
      'High-dose vitamin E supplements inhibit platelet aggregation and may potentiate warfarin. What the NIH ODS fact sheet documents and why dose matters more than most people realize.',
    date: '2026-07-03',
  },
  {
    slug: 'melatonin-fluvoxamine-interaction',
    title: 'Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing',
    description:
      'Fluvoxamine inhibits CYP1A2, the enzyme that breaks down melatonin, raising melatonin blood levels roughly 17-fold. What this means for people on Luvox who take melatonin for sleep.',
    date: '2026-07-03',
  },
  {
    slug: 'supplement-interactions-with-statins',
    title: "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice, and More",
    description:
      "St. John's Wort reduces simvastatin and lovastatin levels via CYP3A4 induction. Red yeast rice contains monacolin K — pharmacologically identical to lovastatin — and should not be combined with prescription statins.",
    date: '2026-07-02',
  },
  {
    slug: 'ginkgo-biloba-drug-interactions',
    title: 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More',
    description:
      'Ginkgo biloba contains ginkgolides that inhibit platelet activating factor, creating additive bleeding risk when combined with warfarin, aspirin, or clopidogrel. What NCCIH documents.',
    date: '2026-07-02',
  },
  {
    slug: 'garlic-supplement-interactions',
    title: 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications, and More',
    description:
      'Garlic inhibits platelet aggregation and can induce CYP3A4, affecting warfarin, saquinavir, and other medications. What NCCIH and NIH ODS document.',
    date: '2026-07-01',
  },
  {
    slug: 'melatonin-drug-interactions',
    title: 'Melatonin Drug Interactions: Sedatives, Warfarin, and More',
    description:
      'Melatonin interacts with CNS depressants through additive sedation and with fluvoxamine through CYP1A2 inhibition — which can increase melatonin levels 17-fold. What the evidence shows.',
    date: '2026-07-01',
  },
  {
    slug: 'potassium-and-medications',
    title: 'Potassium Supplements and Medications: Hyperkalemia Risk',
    description:
      'ACE inhibitors, ARBs, and potassium-sparing diuretics all raise blood potassium. Adding a potassium supplement on top can push levels into a dangerous range. What the mechanisms are and who is at risk.',
    date: '2026-07-01',
  },
  {
    slug: 'calcium-supplement-interactions',
    title: 'Calcium Supplement Drug Interactions: What Gets Affected',
    description:
      'Calcium reduces the absorption of bisphosphonates, levothyroxine, fluoroquinolone and tetracycline antibiotics through chelation in the GI tract. What the evidence shows.',
    date: '2026-07-01',
  },
  {
    slug: 'vitamin-d-drug-interactions',
    title: 'Vitamin D Drug Interactions: What the Evidence Shows',
    description:
      'Vitamin D supplements interact with thiazide diuretics (hypercalcemia risk), corticosteroids, and anti-seizure medications. What the mechanisms are and why they matter.',
    date: '2026-07-01',
  },
  {
    slug: 'fish-oil-blood-thinners',
    title: 'Fish Oil and Blood Thinners: What the Evidence Shows',
    description:
      'Omega-3 fatty acids have antiplatelet effects that may interact with warfarin and other anticoagulants. The clinical evidence is mixed but the combination is worth understanding.',
    date: '2026-06-30',
  },
  {
    slug: 'magnesium-drug-interactions',
    title: 'Magnesium Drug Interactions: What Gets Affected and Why',
    description:
      'Magnesium supplements interact with antibiotics, bisphosphonates, and other medications through chelation in the GI tract — and some medications deplete magnesium over time. What the NIH ODS fact sheet documents.',
    date: '2026-06-30',
  },
  {
    slug: 'iron-levothyroxine-interaction',
    title: 'Iron Supplements and Levothyroxine: A Clinically Important Interaction',
    description:
      'Iron supplements can significantly reduce levothyroxine absorption through chelation in the GI tract. What the evidence shows and why it matters for thyroid patients.',
    date: '2026-06-30',
  },
  {
    slug: 'st-johns-wort-drug-interactions',
    title: "St. John's Wort Drug Interactions: What the Evidence Shows",
    description:
      "St. John's Wort has one of the most extensive interaction profiles of any supplement. Three well-documented interactions — with warfarin, SSRIs, and oral contraceptives — and the mechanism behind each.",
    date: '2026-06-30',
  },
];

export default function BlogIndex() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Blog</h1>
      <p className="mt-2 text-zinc-600">
        Research on supplement and drug interactions — mechanisms, evidence, sources.
      </p>

      <div className="mt-10 space-y-8">
        {posts.map(post => (
          <article key={post.slug}>
            <p className="text-xs text-zinc-400 mb-1">{post.date}</p>
            <h2 className="text-lg font-semibold text-zinc-900">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-zinc-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-2 inline-block text-sm font-medium text-zinc-800 underline hover:text-zinc-500 transition-colors"
            >
              Read →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
