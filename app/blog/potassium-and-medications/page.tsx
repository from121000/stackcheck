import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Potassium Supplements and Medications: Hyperkalemia Risk',
  description:
    'Potassium supplements can cause dangerously high blood potassium when combined with ACE inhibitors, ARBs, or potassium-sparing diuretics. What the mechanisms are and who is at risk.',
  openGraph: {
    title: 'Potassium Supplements and Medications: Hyperkalemia Risk',
    description:
      'ACE inhibitors, ARBs, and potassium-sparing diuretics all raise potassium levels. Adding a supplement can push blood potassium into a dangerous range.',
    type: 'article',
    publishedTime: '2026-07-01',
  },
};

export default function PotassiumAndMedications() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-01</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Potassium Supplements and Medications: Hyperkalemia Risk
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Potassium is an electrolyte essential for nerve and muscle function, including heart
          rhythm. The kidneys regulate blood potassium tightly — under normal conditions, any
          excess potassium from food or supplements is excreted in the urine. The interactions
          between potassium supplements and certain medications arise specifically when that
          renal excretion mechanism is impaired or blocked by the drug, causing potassium to
          accumulate.
        </p>
        <p>
          High blood potassium (hyperkalemia) affects cardiac electrical conduction. Mild
          hyperkalemia may cause no symptoms or subtle ones (muscle weakness, fatigue). Severe
          hyperkalemia can cause dangerous arrhythmias. This makes potassium supplement
          interactions clinically distinct from, say, a chelation interaction that reduces
          antibiotic absorption — the consequences of getting this wrong are more immediate.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            ACE inhibitors
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            ACE inhibitors — lisinopril, enalapril, ramipril, captopril, benazepril, quinapril,
            and others — are widely prescribed for hypertension, heart failure, and diabetic
            kidney protection. They work by blocking the conversion of angiotensin I to
            angiotensin II, which has downstream effects on aldosterone secretion.
          </p>
          <p className="mt-3">
            Aldosterone is a hormone that tells the kidney to excrete potassium. When ACE
            inhibitors suppress aldosterone production, the kidney retains more potassium than
            it normally would. Blood potassium rises modestly — which is generally tolerable
            and expected. Adding a potassium supplement on top of this impaired excretion is
            where the risk emerges: both sources of potassium (supplement input and reduced
            renal excretion) push blood levels higher together.
          </p>
          <p className="mt-3">
            The NIH ODS potassium fact sheet documents this interaction and notes that potassium
            supplements should be used cautiously in people on ACE inhibitors.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Potassium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            ARBs (angiotensin receptor blockers)
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            ARBs — losartan (Cozaar), valsartan (Diovan), candesartan (Atacand), irbesartan
            (Avapro), olmesartan (Benicar), telmisartan (Micardis) — have a different mechanism
            than ACE inhibitors but the same practical effect on potassium: they block angiotensin
            II at the receptor level, which also reduces aldosterone and impairs renal potassium
            excretion. The hyperkalemia risk from potassium supplements is the same category of
            interaction.
          </p>
          <p className="mt-3">
            People prescribed ARBs often don&apos;t know they have the same potassium-retention
            effect as ACE inhibitors. The prescribing information for ARBs includes the same
            caution about potassium supplementation.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Potassium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Potassium-sparing diuretics
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Potassium-sparing diuretics — spironolactone (Aldactone), eplerenone (Inspra),
            triamterene (Dyrenium), and amiloride — work by directly blocking the renal
            mechanisms that excrete potassium. They are often prescribed alongside loop or
            thiazide diuretics to counteract the potassium loss those diuretics cause. The name
            describes the effect: they spare potassium.
          </p>
          <p className="mt-3">
            Taking potassium supplements with potassium-sparing diuretics stacks two
            potassium-raising mechanisms on top of each other. This combination warrants particular
            attention because the diuretic is explicitly blocking urinary potassium excretion —
            there is no normal renal safety valve. The NIH ODS potassium fact sheet identifies this
            as a significant interaction.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Potassium — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            NSAIDs and kidney function
          </h2>
          <p>
            Nonsteroidal anti-inflammatory drugs (NSAIDs) — ibuprofen, naproxen, and others —
            reduce renal blood flow and can impair kidney function, particularly in people with
            existing kidney disease, dehydration, or older age. Since the kidneys are the primary
            route for potassium excretion, anything that impairs kidney function also impairs
            potassium excretion. Regular NSAID use in people on potassium supplements (or
            potassium-retaining medications) may worsen the risk. This is a secondary interaction
            rather than a direct drug-supplement one, but it is worth knowing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Context that increases risk
          </h2>
          <p>
            The baseline hyperkalemia risk from potassium supplements in a healthy person with
            normal kidney function is low — the kidneys easily excrete excess potassium. The risk
            profile changes with:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-zinc-600">
            <li>Reduced kidney function (chronic kidney disease)</li>
            <li>Concurrent ACE inhibitor or ARB use</li>
            <li>Concurrent potassium-sparing diuretic use</li>
            <li>Older age (reduced renal reserve)</li>
            <li>Type 1 or 2 diabetes (associated with reduced aldosterone response)</li>
          </ul>
          <p className="mt-3">
            People in those categories who are considering potassium supplements should discuss
            it with the prescribing provider monitoring their blood pressure medications. The
            conversation is relevant even for &quot;low-dose&quot; supplements, since the
            cumulative effect depends on baseline potassium levels and renal function.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter potassium alongside
          your blood pressure medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see which documented interactions apply to your specific combination.
        </div>
      </div>
    </main>
  );
}
