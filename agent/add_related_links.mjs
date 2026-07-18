// Adds a "Related" section before the "Check your stack" box in each blog post.
// Related links are manually curated per post for genuine topical relevance.

import fs from 'fs';
import path from 'path';

const ROOT = '/home/runner/work/stackcheck/stackcheck';
const BLOG = path.join(ROOT, 'app/blog');

// For each slug: array of [slug, title] pairs to link to (max 3)
const RELATED = {
  'magnesium-drug-interactions': [
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
    ['zinc-drug-interactions', 'Zinc Drug Interactions: Antibiotics, Iron, and Copper'],
    ['magnesium-and-ppis', 'Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?'],
  ],
  'fish-oil-blood-thinners': [
    ['vitamin-e-blood-thinners', 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do'],
    ['ginkgo-biloba-drug-interactions', 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More'],
    ['garlic-supplement-interactions', 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications'],
  ],
  'st-johns-wort-drug-interactions': [
    ['st-johns-wort-and-birth-control', "St. John's Wort and Birth Control: Contraceptive Failure Risk"],
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
    ['melatonin-fluvoxamine-interaction', 'Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing'],
  ],
  'iron-levothyroxine-interaction': [
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
    ['omeprazole-and-iron-absorption', 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?'],
    ['iron-and-vitamin-c-together', 'Taking Iron and Vitamin C Together: What the Research Shows'],
  ],
  'melatonin-drug-interactions': [
    ['melatonin-and-alcohol', 'Melatonin and Alcohol: Sedation, Sleep Quality, and What to Know'],
    ['melatonin-fluvoxamine-interaction', 'Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing'],
    ['valerian-drug-interactions', 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More'],
  ],
  'magnesium-drug-interactions': [
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
    ['zinc-drug-interactions', 'Zinc Drug Interactions: Antibiotics, Iron, and Copper'],
    ['magnesium-and-ppis', 'Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?'],
  ],
  'garlic-supplement-interactions': [
    ['ginkgo-biloba-drug-interactions', 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More'],
    ['fish-oil-blood-thinners', 'Fish Oil and Blood Thinners: What the Evidence Shows'],
    ['vitamin-e-blood-thinners', 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do'],
  ],
  'ginkgo-biloba-drug-interactions': [
    ['garlic-supplement-interactions', 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications'],
    ['fish-oil-blood-thinners', 'Fish Oil and Blood Thinners: What the Evidence Shows'],
    ['feverfew-drug-interactions', 'Feverfew Drug Interactions: Antiplatelet Effects, Warfarin'],
  ],
  'calcium-supplement-interactions': [
    ['iron-levothyroxine-interaction', 'Iron Supplements and Levothyroxine: A Clinically Important Interaction'],
    ['calcium-and-iron-absorption', 'Taking Calcium and Iron Together: Why Timing Matters'],
    ['calcium-and-vitamin-d-together', 'Calcium and Vitamin D Together: How They Work and When to Be Careful'],
  ],
  'vitamin-d-drug-interactions': [
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
    ['calcium-and-vitamin-d-together', 'Calcium and Vitamin D Together: How They Work and When to Be Careful'],
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
  ],
  'potassium-and-medications': [
    ['magnesium-and-diuretics', 'Diuretics and Magnesium Depletion: What Furosemide and Thiazides Do'],
    ['magnesium-drug-interactions', 'Magnesium Drug Interactions: What Gets Affected and Why'],
  ],
  'supplement-interactions-with-statins': [
    ['red-yeast-rice-and-statins', 'Red Yeast Rice and Statins: Why This Combination Is Dangerous'],
    ['coq10-and-statins', 'CoQ10 and Statins: The Depletion Relationship Explained'],
    ['st-johns-wort-drug-interactions', "St. John's Wort Drug Interactions: What the Evidence Shows"],
  ],
  'red-yeast-rice-and-statins': [
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
    ['coq10-and-statins', 'CoQ10 and Statins: The Depletion Relationship Explained'],
  ],
  'coq10-and-statins': [
    ['red-yeast-rice-and-statins', 'Red Yeast Rice and Statins: Why This Combination Is Dangerous'],
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
  ],
  'melatonin-fluvoxamine-interaction': [
    ['melatonin-drug-interactions', 'Melatonin Drug Interactions: Sedatives, Warfarin, and More'],
    ['melatonin-and-alcohol', 'Melatonin and Alcohol: Sedation, Sleep Quality, and What to Know'],
    ['5-htp-drug-interactions', '5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome'],
  ],
  'vitamin-e-blood-thinners': [
    ['fish-oil-blood-thinners', 'Fish Oil and Blood Thinners: What the Evidence Shows'],
    ['ginkgo-biloba-drug-interactions', 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More'],
    ['curcumin-and-warfarin', 'Curcumin and Warfarin: Antiplatelet Effects, INR Blind Spots'],
  ],
  '5-htp-drug-interactions': [
    ['5-htp-and-ssris', '5-HTP and SSRIs: Is It Safe to Take Together?'],
    ['melatonin-fluvoxamine-interaction', 'Melatonin and Fluvoxamine: A Drug Interaction Worth Knowing'],
    ['melatonin-drug-interactions', 'Melatonin Drug Interactions: Sedatives, Warfarin, and More'],
  ],
  '5-htp-and-ssris': [
    ['5-htp-drug-interactions', '5-HTP Drug Interactions: SSRIs, MAOIs, and Serotonin Syndrome'],
    ['melatonin-drug-interactions', 'Melatonin Drug Interactions: Sedatives, Warfarin, and More'],
  ],
  'berberine-drug-interactions': [
    ['berberine-and-metformin', 'Berberine and Metformin Together: Additive Blood Sugar Effects'],
    ['magnesium-and-blood-sugar-medications', 'Magnesium and Blood Sugar Medications: What the NIH ODS Documents'],
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
  ],
  'berberine-and-metformin': [
    ['berberine-drug-interactions', 'Berberine Drug Interactions: Blood Sugar, CYP Enzymes, and Warfarin'],
    ['magnesium-and-blood-sugar-medications', 'Magnesium and Blood Sugar Medications: What the NIH ODS Documents'],
  ],
  'zinc-drug-interactions': [
    ['magnesium-drug-interactions', 'Magnesium Drug Interactions: What Gets Affected and Why'],
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
    ['calcium-and-iron-absorption', 'Taking Calcium and Iron Together: Why Timing Matters'],
  ],
  'ashwagandha-drug-interactions': [
    ['ashwagandha-and-thyroid', 'Ashwagandha and Thyroid Medications: What the Evidence Shows'],
    ['echinacea-drug-interactions', 'Echinacea Drug Interactions: Immunosuppressants and More'],
    ['valerian-drug-interactions', 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More'],
  ],
  'ashwagandha-and-thyroid': [
    ['ashwagandha-drug-interactions', 'Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants'],
    ['iron-levothyroxine-interaction', 'Iron Supplements and Levothyroxine: A Clinically Important Interaction'],
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
  ],
  'turmeric-drug-interactions': [
    ['curcumin-and-warfarin', 'Curcumin and Warfarin: Antiplatelet Effects, INR Blind Spots'],
    ['garlic-supplement-interactions', 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications'],
    ['milk-thistle-drug-interactions', 'Milk Thistle Drug Interactions: CYP Enzymes, Warfarin, and More'],
  ],
  'curcumin-and-warfarin': [
    ['turmeric-drug-interactions', 'Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More'],
    ['fish-oil-blood-thinners', 'Fish Oil and Blood Thinners: What the Evidence Shows'],
    ['vitamin-e-blood-thinners', 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do'],
  ],
  'echinacea-drug-interactions': [
    ['ashwagandha-drug-interactions', 'Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants'],
    ['valerian-drug-interactions', 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More'],
  ],
  'black-cohosh-drug-interactions': [
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
    ['st-johns-wort-drug-interactions', "St. John's Wort Drug Interactions: What the Evidence Shows"],
  ],
  'valerian-drug-interactions': [
    ['kava-drug-interactions', 'Kava Drug Interactions: Sedation, Liver Risk, and More'],
    ['passionflower-drug-interactions', 'Passionflower Drug Interactions: Sedatives, Benzodiazepines, and More'],
    ['melatonin-drug-interactions', 'Melatonin Drug Interactions: Sedatives, Warfarin, and More'],
  ],
  'kava-drug-interactions': [
    ['valerian-drug-interactions', 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More'],
    ['passionflower-drug-interactions', 'Passionflower Drug Interactions: Sedatives, Benzodiazepines, and More'],
    ['melatonin-and-alcohol', 'Melatonin and Alcohol: Sedation, Sleep Quality, and What to Know'],
  ],
  'passionflower-drug-interactions': [
    ['valerian-drug-interactions', 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More'],
    ['kava-drug-interactions', 'Kava Drug Interactions: Sedation, Liver Risk, and More'],
    ['melatonin-drug-interactions', 'Melatonin Drug Interactions: Sedatives, Warfarin, and More'],
  ],
  'melatonin-and-alcohol': [
    ['melatonin-drug-interactions', 'Melatonin Drug Interactions: Sedatives, Warfarin, and More'],
    ['kava-drug-interactions', 'Kava Drug Interactions: Sedation, Liver Risk, and More'],
    ['valerian-drug-interactions', 'Valerian Drug Interactions: Sedatives, Sleep Medications, and More'],
  ],
  'milk-thistle-drug-interactions': [
    ['turmeric-drug-interactions', 'Turmeric and Drug Interactions: Warfarin, CYP Enzymes, and More'],
    ['berberine-drug-interactions', 'Berberine Drug Interactions: Blood Sugar, CYP Enzymes, and Warfarin'],
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
  ],
  'grape-seed-extract-drug-interactions': [
    ['vitamin-e-blood-thinners', 'Vitamin E and Blood Thinners: What High-Dose Supplements Can Do'],
    ['fish-oil-blood-thinners', 'Fish Oil and Blood Thinners: What the Evidence Shows'],
    ['feverfew-drug-interactions', 'Feverfew Drug Interactions: Antiplatelet Effects, Warfarin'],
  ],
  'feverfew-drug-interactions': [
    ['ginkgo-biloba-drug-interactions', 'Ginkgo Biloba Drug Interactions: Warfarin, Antiplatelet Drugs, and More'],
    ['garlic-supplement-interactions', 'Garlic Supplement Drug Interactions: Warfarin, HIV Medications'],
    ['saw-palmetto-drug-interactions', 'Saw Palmetto Drug Interactions: Antiplatelet Effects and Warfarin'],
  ],
  'saw-palmetto-drug-interactions': [
    ['fish-oil-blood-thinners', 'Fish Oil and Blood Thinners: What the Evidence Shows'],
    ['feverfew-drug-interactions', 'Feverfew Drug Interactions: Antiplatelet Effects, Warfarin'],
    ['grape-seed-extract-drug-interactions', 'Grape Seed Extract Drug Interactions: Antiplatelet Effects'],
  ],
  'licorice-root-drug-interactions': [
    ['potassium-and-medications', 'Potassium Supplements and Medications: Hyperkalemia Risk'],
    ['magnesium-and-diuretics', 'Diuretics and Magnesium Depletion: What Furosemide and Thiazides Do'],
  ],
  'green-tea-drug-interactions': [
    ['iron-and-vitamin-c-together', 'Taking Iron and Vitamin C Together: What the Research Shows'],
    ['calcium-and-iron-absorption', 'Taking Calcium and Iron Together: Why Timing Matters'],
    ['iron-deficiency-and-medications', 'Medications That Impair Iron Absorption: What to Know If You Take Iron'],
  ],
  'vitamin-b12-and-medications': [
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
    ['h2-blockers-and-vitamin-b12', 'H2 Blockers and Vitamin B12: Does Famotidine Affect B12 Levels?'],
    ['omeprazole-and-iron-absorption', 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?'],
  ],
  'rhodiola-drug-interactions': [
    ['berberine-and-metformin', 'Berberine and Metformin Together: Additive Blood Sugar Effects'],
    ['ashwagandha-drug-interactions', 'Ashwagandha Drug Interactions: Thyroid Medications, Immunosuppressants'],
  ],
  'st-johns-wort-and-birth-control': [
    ['st-johns-wort-drug-interactions', "St. John's Wort Drug Interactions: What the Evidence Shows"],
    ['supplement-interactions-with-statins', "Supplement Interactions with Statins: St. John's Wort, Red Yeast Rice"],
  ],
  'magnesium-and-blood-sugar-medications': [
    ['berberine-and-metformin', 'Berberine and Metformin Together: Additive Blood Sugar Effects'],
    ['berberine-drug-interactions', 'Berberine Drug Interactions: Blood Sugar, CYP Enzymes, and Warfarin'],
    ['magnesium-drug-interactions', 'Magnesium Drug Interactions: What Gets Affected and Why'],
  ],
  'ppis-and-nutrient-absorption': [
    ['omeprazole-and-iron-absorption', 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?'],
    ['magnesium-and-ppis', 'Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?'],
    ['ppi-and-calcium-absorption', 'Calcium Carbonate vs. Calcium Citrate: Does Your PPI or Antacid Matter?'],
  ],
  'omeprazole-and-iron-absorption': [
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
    ['iron-and-vitamin-c-together', 'Taking Iron and Vitamin C Together: What the Research Shows'],
    ['iron-deficiency-and-medications', 'Medications That Impair Iron Absorption: What to Know If You Take Iron'],
  ],
  'ppi-and-calcium-absorption': [
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
    ['calcium-and-vitamin-d-together', 'Calcium and Vitamin D Together: How They Work and When to Be Careful'],
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
  ],
  'magnesium-and-ppis': [
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
    ['magnesium-drug-interactions', 'Magnesium Drug Interactions: What Gets Affected and Why'],
    ['magnesium-and-diuretics', 'Diuretics and Magnesium Depletion: What Furosemide and Thiazides Do'],
  ],
  'h2-blockers-and-vitamin-b12': [
    ['vitamin-b12-and-medications', 'Vitamin B12 and Medications: What Depletes It and Why'],
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
    ['omeprazole-and-iron-absorption', 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?'],
  ],
  'calcium-and-vitamin-d-together': [
    ['vitamin-d-drug-interactions', 'Vitamin D Drug Interactions: What the Evidence Shows'],
    ['calcium-supplement-interactions', 'Calcium Supplement Drug Interactions: What Gets Affected'],
    ['ppi-and-calcium-absorption', 'Calcium Carbonate vs. Calcium Citrate: Does Your PPI or Antacid Matter?'],
  ],
  'magnesium-and-diuretics': [
    ['magnesium-drug-interactions', 'Magnesium Drug Interactions: What Gets Affected and Why'],
    ['magnesium-and-ppis', 'Omeprazole and Magnesium: Does PPI Therapy Deplete Magnesium?'],
    ['potassium-and-medications', 'Potassium Supplements and Medications: Hyperkalemia Risk'],
  ],
  'iron-and-vitamin-c-together': [
    ['iron-levothyroxine-interaction', 'Iron Supplements and Levothyroxine: A Clinically Important Interaction'],
    ['calcium-and-iron-absorption', 'Taking Calcium and Iron Together: Why Timing Matters'],
    ['iron-deficiency-and-medications', 'Medications That Impair Iron Absorption: What to Know If You Take Iron'],
  ],
  'calcium-and-iron-absorption': [
    ['iron-and-vitamin-c-together', 'Taking Iron and Vitamin C Together: What the Research Shows'],
    ['iron-levothyroxine-interaction', 'Iron Supplements and Levothyroxine: A Clinically Important Interaction'],
    ['iron-deficiency-and-medications', 'Medications That Impair Iron Absorption: What to Know If You Take Iron'],
  ],
  'iron-deficiency-and-medications': [
    ['omeprazole-and-iron-absorption', 'Omeprazole and Iron Absorption: Does Your PPI Affect Iron Levels?'],
    ['iron-and-vitamin-c-together', 'Taking Iron and Vitamin C Together: What the Research Shows'],
    ['calcium-and-iron-absorption', 'Taking Calcium and Iron Together: Why Timing Matters'],
  ],
  'folic-acid-and-methotrexate': [
    ['vitamin-b12-and-medications', 'Vitamin B12 and Medications: What Depletes It and Why'],
    ['ppis-and-nutrient-absorption', 'PPIs and Nutrient Absorption: B12, Iron, Magnesium, and Calcium'],
  ],
};

// The marker before which we insert the related section (two indentation variants)
const MARKERS = [
  '        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg',
  '      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg',
];

let updated = 0;
let skipped = 0;
let noMarker = 0;

for (const [slug, related] of Object.entries(RELATED)) {
  const filepath = path.join(BLOG, slug, 'page.tsx');
  if (!fs.existsSync(filepath)) {
    console.log('MISSING:', slug);
    continue;
  }

  let content = fs.readFileSync(filepath, 'utf8');

  if (content.includes('Related</h3>') || content.includes('Related\n') || content.includes('"related"')) {
    console.log('SKIP (has related):', slug);
    skipped++;
    continue;
  }

  const MARKER = MARKERS.find(m => content.includes(m));
  if (!MARKER) {
    console.log('WARN (no marker):', slug);
    noMarker++;
    continue;
  }

  // Determine indentation from the marker
  const indent = MARKER.startsWith('        ') ? '        ' : '      ';
  const inner = indent + '  ';

  // Build related links HTML
  const linkLines = related.map(([s, t]) =>
    inner + '  <li><Link href="/blog/' + s + '" className="underline hover:text-zinc-900">' + t + '</Link></li>'
  ).join('\n');

  const relatedSection =
    indent + '<div className="mt-10 border-t border-zinc-100 pt-6">\n' +
    inner + '<h3 className="text-sm font-semibold text-zinc-700 mb-3">Related</h3>\n' +
    inner + '<ul className="space-y-1 text-sm">\n' +
    linkLines + '\n' +
    inner + '</ul>\n' +
    indent + '</div>\n' +
    '\n';

  const newContent = content.replace(MARKER, relatedSection + MARKER);
  fs.writeFileSync(filepath, newContent);
  updated++;
  console.log('OK:', slug);
}

console.log('\nUpdated:', updated, 'Skipped:', skipped, 'No-marker:', noMarker);
