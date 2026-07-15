import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Supplement & Drug Interaction Research',
  description:
    'In-depth articles on supplement and medication interactions: mechanisms, evidence, and what the research actually says.',
};

const posts = [
  {
    slug: 'folic-acid-and-methotrexate',
    title: 'Folic Acid and Methotrexate: Two Very Different Interactions',
    description:
      'In rheumatoid arthritis, folic acid co-prescription with methotrexate is standard of care that reduces toxicity. In cancer treatment, supplemental folate may reduce chemotherapy efficacy. The mechanism behind the difference.',
    date: '2026-07-15',
  },
  {
    slug: 'calcium-and-iron-absorption',
    title: 'Taking Calcium and Iron Together: Why Timing Matters',
    description:
      'High-dose calcium and iron compete for the DMT1 intestinal transporter. Taking them together at supplement doses reduces iron absorption by 30–60%. What the research shows and how to take both effectively.',
    date: '2026-07-15',
  },
  {
    slug: 'ppis-and-nutrient-absorption',
    title: 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium',
    description:
      'Long-term proton pump inhibitor use impairs absorption of vitamin B12, iron, magnesium, and calcium through four distinct mechanisms. What the NIH ODS fact sheets document for each nutrient.',
    date: '2026-07-15',
  },
  {
    slug: 'omeprazole-and-iron-absorption',
    title: 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?',
    description:
      'Proton pump inhibitors like omeprazole suppress the gastric acid needed to convert dietary iron to its absorbable form. Long-term PPI use is associated with iron deficiency in epidemiological studies.',
    date: '2026-07-14',
  },
  {
    slug: 'melatonin-and-alcohol',
    title: 'Melatonin and Alcohol: Sedation, Sleep Quality, and What to Know',
    description:
      'Melatonin and alcohol both depress CNS activity — their sedative effects add. Alcohol also suppresses natural melatonin secretion, undermining the supplement\'s purpose even before the interaction risk.',
    date: '2026-07-14',
  },
  {
    slug: 'iron-and-vitamin-c-together',
    title: 'Taking Iron and Vitamin C Together: What the Research Shows',
    description:
      'Vitamin C enhances non-heme iron absorption by 2–4x through a well-understood chemical mechanism. When to take them together, who benefits most, and the one group that should be cautious.',
    date: '2026-07-14',
  },
  {
    slug: '5-htp-and-ssris',
    title: '5-HTP and SSRIs: Is It Safe to Take Together?',
    description:
      'Combining 5-HTP with SSRIs raises serotonin through two independent mechanisms simultaneously — increased production plus reduced clearance. What NCCIH documents and why the answer is not "yes."',
    date: '2026-07-14',
  },
  {
    slug: 'curcumin-and-warfarin',
    title: 'Curcumin and Warfarin: Antiplatelet Effects, INR Blind Spots, and What to Know',
    description:
      'Curcumin inhibits platelet aggregation through thromboxane B2 suppression — an effect INR testing does not capture. Combined with warfarin, the bleeding risk is broader than most people realize.',
    date: '2026-07-13',
  },
  {
    slug: 'ashwagandha-and-thyroid',
    title: 'Ashwagandha and Thyroid Medications: What the Evidence Shows',
    description:
      'Ashwagandha raises T4 and T3 levels in human studies, creating a real interaction with levothyroxine. For people on thyroid medication, this additive effect can push hormone levels too high.',
    date: '2026-07-13',
  },
  {
    slug: 'berberine-and-metformin',
    title: 'Berberine and Metformin Together: Additive Blood Sugar Effects Explained',
    description:
      'Both berberine and metformin activate AMPK to lower blood glucose, producing additive effects when combined. What this means for people managing type 2 diabetes with medication.',
    date: '2026-07-13',
  },
  {
    slug: 'magnesium-and-blood-sugar-medications',
    title: 'Magnesium and Blood Sugar Medications: What the NIH ODS Documents',
    description:
      "Magnesium is a cofactor in insulin receptor signaling. High-dose supplementation may modestly enhance insulin sensitivity and compound the glucose-lowering effect of sulfonylureas and insulin. What the evidence shows.",
    date: '2026-07-12',
  },
  {
    slug: 'st-johns-wort-and-birth-control',
    title: "St. John's Wort and Birth Control: Contraceptive Failure Risk Explained",
    description:
      "St. John's Wort induces CYP3A4, speeding up metabolism of contraceptive hormones and lowering their circulating levels. Case reports document breakthrough bleeding and unplanned pregnancies. What the evidence shows.",
    date: '2026-07-12',
  },
  {
    slug: 'rhodiola-drug-interactions',
    title: 'Rhodiola Rosea Drug Interactions: MAOIs, Stimulants, and What NCCIH Documents',
    description:
      'Rhodiola rosea has mild MAO-inhibiting properties and stimulant-like effects on dopamine and norepinephrine systems. Combined with prescription MAOIs or stimulants, these effects may be additive.',
    date: '2026-07-12',
  },
  {
    slug: '5-htp-drug-interactions',
    title: '5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome Risk',
    description:
      '5-HTP directly increases serotonin production. Combined with SSRIs or MAOIs, it can produce serotonin syndrome — a serious and potentially dangerous reaction. What NCCIH documents and why this interaction is often missed.',
    date: '2026-07-11',
  },
  {
    slug: 'passionflower-drug-interactions',
    title: 'Passionflower Drug Interactions: Sedatives, Benzodiazepines, and More',
    description:
      'Passionflower flavonoids modulate GABA-A receptors — the same system as benzodiazepines and z-drugs — producing additive sedation with CNS depressants including prescription sleep medications and alcohol.',
    date: '2026-07-11',
  },
  {
    slug: 'feverfew-drug-interactions',
    title: 'Feverfew Drug Interactions: Antiplatelet Effects, Warfarin, and NSAIDs',
    description:
      "Feverfew parthenolide inhibits platelet aggregation through collagen-induced activation and serotonin pathways, creating additive bleeding risk with warfarin, aspirin, and clopidogrel. What NCCIH documents.",
    date: '2026-07-11',
  },
  {
    slug: 'grape-seed-extract-drug-interactions',
    title: 'Grape Seed Extract Drug Interactions: Antiplatelet Effects and More',
    description:
      'Grape seed extract proanthocyanidins inhibit platelet aggregation via thromboxane A2 suppression and collagen-induced activation, creating additive bleeding risk with anticoagulants and antiplatelet drugs.',
    date: '2026-07-11',
  },
  {
    slug: 'milk-thistle-drug-interactions',
    title: 'Milk Thistle Drug Interactions: CYP Enzymes, Warfarin, and More',
    description:
      'Silymarin inhibits CYP2C9 and CYP3A4, raising plasma concentrations of warfarin, cyclosporine, tacrolimus, and many other medications. Narrow-therapeutic-index drugs carry the most clinical concern.',
    date: '2026-07-11',
  },
  {
    slug: 'saw-palmetto-drug-interactions',
    title: 'Saw Palmetto Drug Interactions: Antiplatelet Effects and What to Know',
    description:
      'Saw palmetto has been associated with antiplatelet activity, creating potential additive bleeding risk with warfarin, aspirin, and other anticoagulants. What NCCIH documents and what the evidence actually shows.',
    date: '2026-07-10',
  },
  {
    slug: 'licorice-root-drug-interactions',
    title: 'Licorice Root Drug Interactions: Blood Pressure, Diuretics, and More',
    description:
      'Glycyrrhizin inhibits 11-beta-HSD2, causing pseudo-hyperaldosteronism: sodium retention, potassium loss, and elevated blood pressure. This counteracts antihypertensives and worsens diuretic-related potassium depletion.',
    date: '2026-07-10',
  },
  {
    slug: 'green-tea-drug-interactions',
    title: 'Green Tea Drug Interactions: Iron, EGCG, and What the Research Shows',
    description:
      'Green tea catechins chelate non-heme iron, reducing absorption. High-dose EGCG supplements also inhibit OATP drug transporters, with a documented 75% reduction in nadolol levels in one pharmacokinetic study.',
    date: '2026-07-10',
  },
  {
    slug: 'kava-drug-interactions',
    title: 'Kava Drug Interactions: Sedation, Liver Risk, and More',
    description:
      "Kava's kavalactones modulate GABA-A receptors — the same system as benzodiazepines — producing additive sedation. Separately, kava's documented hepatotoxicity risk compounds with acetaminophen, statins, and antifungals.",
    date: '2026-07-10',
  },
  {
    slug: 'black-cohosh-drug-interactions',
    title: 'Black Cohosh Drug Interactions: Tamoxifen, CYP2D6, and More',
    description:
      'Black cohosh inhibits CYP2D6, the enzyme that converts tamoxifen to its active metabolite endoxifen. Reduced endoxifen may diminish tamoxifen efficacy. What NCCIH documents for breast cancer patients.',
    date: '2026-07-08',
  },
  {
    slug: 'echinacea-drug-interactions',
    title: 'Echinacea Drug Interactions: Immunosuppressants and More',
    description:
      'Echinacea stimulates NK cells, phagocytic activity, and cytokine production — effects that directly oppose immunosuppressants used after organ transplant or for autoimmune conditions. What NCCIH documents.',
    date: '2026-07-08',
  },
  {
    slug: 'valerian-drug-interactions',
    title: 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More',
    description:
      'Valerenic acid modulates GABA-A receptors — the same system targeted by benzodiazepines and z-drugs. Combining valerian with CNS depressants produces additive sedation. What NCCIH documents.',
    date: '2026-07-08',
  },
  {
    slug: 'ashwagandha-drug-interactions',
    title: 'Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants, and More',
    description:
      'Ashwagandha increases thyroid hormone levels and stimulates immune function — both create real interactions with levothyroxine and immunosuppressants like cyclosporine and tacrolimus. What NCCIH documents.',
    date: '2026-07-07',
  },
  {
    slug: 'turmeric-drug-interactions',
    title: 'Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More',
    description:
      'Curcumin inhibits platelet aggregation through thromboxane B2 suppression and inhibits CYP1A2 and CYP3A4, raising plasma levels of drugs like tacrolimus and cyclosporine. What NCCIH documents.',
    date: '2026-07-07',
  },
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
