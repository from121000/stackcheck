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
  alternates: {
    canonical: "https://stackverify.app/blog/potassium-and-medications",
  },
};

export default function PotassiumAndMedications() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Potassium Supplements and Medications: Hyperkalemia Risk",
            "datePublished": "2026-07-01",
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
          rhythm. The kidneys regulate blood potassium tightly — under normal conditions, any excess
          potassium from food or supplements is excreted in the urine. The interactions between
          potassium supplements and certain medications arise specifically when that renal excretion
          mechanism is impaired by the drug, causing potassium to accumulate. High blood potassium
          (hyperkalemia) affects cardiac electrical conduction: mild hyperkalemia may cause muscle
          weakness or fatigue; severe hyperkalemia can cause dangerous arrhythmias. This makes
          potassium supplement interactions clinically distinct from, say, a chelation interaction
          that reduces antibiotic absorption — the consequences of getting this wrong are more
          immediate.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Medications that impair potassium excretion
          </h2>
          <p>
            ACE inhibitors — lisinopril, enalapril, ramipril, captopril, benazepril, quinapril,
            and others — work by blocking the conversion of angiotensin I to angiotensin II, which
            has downstream effects on aldosterone secretion. Aldosterone is the hormone that tells
            the kidney to excrete potassium. When ACE inhibitors suppress aldosterone production,
            the kidney retains more potassium than it normally would. Blood potassium rises modestly
            — generally tolerable and expected. Adding a potassium supplement on top of this impaired
            excretion is where the risk emerges: both sources of potassium (supplement input and
            reduced renal excretion) push blood levels higher together.
          </p>
          <p className="mt-3">
            ARBs — losartan (Cozaar), valsartan (Diovan), candesartan, irbesartan, olmesartan
            (Benicar), telmisartan — have a different mechanism than ACE inhibitors but the same
            practical effect: they block angiotensin II at the receptor level, which also reduces
            aldosterone and impairs renal potassium excretion. The hyperkalemia risk from potassium
            supplements is the same category of interaction. People prescribed ARBs often do not
            know they have the same potassium-retention effect as ACE inhibitors.
          </p>
          <p className="mt-3">
            Potassium-sparing diuretics — spironolactone (Aldactone), eplerenone (Inspra),
            triamterene, and amiloride — work by directly blocking the renal mechanisms that excrete
            potassium. They are often prescribed alongside loop or thiazide diuretics to counteract
            the potassium loss those drugs cause. Taking potassium supplements with potassium-sparing
            diuretics stacks two potassium-raising mechanisms together. This combination warrants
            particular attention because the diuretic is explicitly blocking urinary potassium
            excretion — there is no normal renal safety valve.
          </p>
          <p className="mt-3">
            The NIH ODS potassium fact sheet documents all three of these interactions and notes
            that potassium supplements should be used cautiously with any of these medication classes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Risk factors and secondary interactions
          </h2>
          <p>
            The baseline hyperkalemia risk from potassium supplements in a healthy person with
            normal kidney function is low — the kidneys easily excrete excess potassium. The risk
            profile changes substantially with reduced kidney function (chronic kidney disease),
            concurrent ACE inhibitor, ARB, or potassium-sparing diuretic use, older age (reduced
            renal reserve), and type 1 or 2 diabetes (associated with reduced aldosterone response).
          </p>
          <p className="mt-3">
            NSAIDs — ibuprofen, naproxen, and others — are worth noting as a secondary factor.
            They reduce renal blood flow and can impair kidney function, particularly in people with
            existing kidney disease, dehydration, or older age. Since the kidneys are the primary
            route for potassium excretion, anything that impairs kidney function also impairs
            potassium excretion. Regular NSAID use in people on potassium supplements or
            potassium-retaining medications may worsen the risk.
          </p>
          <p className="mt-3">
            People in any of the risk categories above who are considering potassium supplements
            should discuss it with their prescriber. The conversation is relevant even for low-dose
            supplements, since the cumulative effect depends on baseline potassium levels and
            kidney function.
          </p>
        </section>

        <p className="text-sm text-zinc-500">
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
