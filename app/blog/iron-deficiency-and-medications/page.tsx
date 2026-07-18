import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medications That Impair Iron Absorption: What to Know If You Have Iron Deficiency',
  description:
    'Proton pump inhibitors, H2 blockers, calcium supplements, antacids, and certain antibiotics all reduce iron absorption through different mechanisms. What people with iron deficiency anemia should know about their other medications.',
  openGraph: {
    title: 'Medications That Impair Iron Absorption: What to Know If You Have Iron Deficiency',
    description:
      'PPIs, H2 blockers, calcium supplements, antacids, and tetracycline/fluoroquinolone antibiotics all reduce iron absorption. Why this matters if you are treating iron deficiency.',
    type: 'article',
    publishedTime: '2026-07-16',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/iron-deficiency-and-medications",
  },
};

export default function IronDeficiencyAndMedications() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-16</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Medications That Impair Iron Absorption: What to Know If You Have Iron Deficiency
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Iron deficiency is the most common nutritional deficiency globally. Treating it with
          an iron supplement seems straightforward — until other medications in the picture
          interfere with absorption. Several drug classes reduce how much iron the body can
          absorb, through mechanisms ranging from acid suppression to direct chelation in the
          gut. People who are taking iron supplements and not seeing their levels recover may
          be experiencing one of these interactions, and the problem can often be resolved
          through timing changes rather than requiring any medication adjustment.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Acid-reducing medications: PPIs and H2 blockers
          </h2>
          <p>
            Most dietary iron and many iron supplements contain iron in the ferric state (Fe³⁺).
            The intestinal transporter that handles iron — DMT1 (divalent metal transporter 1)
            — absorbs iron only in the ferrous form (Fe²⁺). The conversion from ferric to
            ferrous iron requires an acidic environment. Proton pump inhibitors suppress
            gastric acid production substantially, raising stomach pH and impairing this
            conversion. The result is reduced non-heme iron absorption.
          </p>
          <p className="mt-3">
            H2 receptor antagonists — famotidine (Pepcid), cimetidine (Tagamet) — cause the
            same effect through the same mechanism, though less severely, because they suppress
            acid less completely than PPIs. Both drug classes are identified in the NIH ODS
            Iron fact sheet as relevant impairers of iron absorption.
          </p>
          <p className="mt-3">
            The practical implication for people on these medications who are also taking iron
            supplements: ferrous iron forms (ferrous sulfate, ferrous gluconate, ferrous
            fumarate) are already in the Fe²⁺ state and are less dependent on gastric acid
            conversion, though still somewhat affected by reduced solubility in an
            acid-suppressed environment. Heme iron, from red meat, uses a completely different
            absorption pathway and is not affected by acid suppression at all. Taking iron
            supplements with vitamin C — which reduces Fe³⁺ to Fe²⁺ through a direct chemical
            mechanism — can partially compensate for reduced gastric acid conversion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Calcium supplements and antacids
          </h2>
          <p>
            Calcium and iron share the DMT1 transporter. Both Ca²⁺ and Fe²⁺ are divalent
            cations, and the transporter handles multiple divalent metals with overlapping
            affinity. When both are present in the gut simultaneously at supplemental
            concentrations, they compete for transport into the bloodstream. Human studies
            have documented 30–60% reductions in iron absorption when high-dose calcium
            supplements are taken at the same time as iron supplements, with the magnitude
            depending on calcium dose and iron source.
          </p>
          <p className="mt-3">
            This applies to any calcium source: calcium citrate, calcium carbonate, and
            calcium carbonate antacids like Tums all provide calcium that competes with iron.
            Many people who take antacids for heartburn relief do not think of them as
            calcium supplements, but each regular-strength Tums tablet contains roughly 500 mg
            of calcium carbonate. Taking Tums within an hour of an iron supplement significantly
            reduces iron absorption, per the NIH ODS Calcium fact sheet.
          </p>
          <p className="mt-3">
            The straightforward fix: separate iron supplements and calcium supplements (or
            antacids) by at least two hours. The competition requires both to be present in
            the gut at the same time; taking them apart largely eliminates the problem.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Chelation by certain antibiotics
          </h2>
          <p>
            Fluoroquinolone antibiotics — ciprofloxacin, levofloxacin, and others — and
            tetracycline antibiotics — doxycycline, minocycline, tetracycline — bind to
            iron ions in the gut through chelation, forming insoluble complexes that neither
            drug nor iron can be absorbed efficiently. The NIH ODS Iron fact sheet notes this
            interaction, and it is bidirectional: the iron reduces antibiotic absorption as
            well, which can affect treatment efficacy.
          </p>
          <p className="mt-3">
            For people who need both an antibiotic from these classes and an iron supplement,
            the standard recommendation is to separate them by two to three hours. This does
            not require stopping either — just taking them at different times reduces chelation
            substantially.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Other relevant interactions
          </h2>
          <p>
            Green tea and other high-tannin beverages reduce non-heme iron absorption through
            a chelation mechanism similar to the antibiotic interactions — the catechins in
            green tea (EGCG) bind iron in the gut. This is primarily relevant for people
            drinking large amounts of green tea alongside iron supplements, and is most
            significant when intake is concurrent. Phytates from whole grains and legumes
            also impair non-heme iron absorption, though this is a dietary rather than
            medication issue.
          </p>
          <p className="mt-3">
            Levothyroxine and iron interact through a separate chelation mechanism —
            iron forms a poorly soluble complex with levothyroxine in the GI tract, reducing
            thyroid hormone absorption. This is covered in more detail in the{' '}
            <Link
              href="/blog/iron-levothyroxine-interaction"
              className="underline hover:text-zinc-800"
            >
              iron and levothyroxine interaction article
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Timing as the primary tool
          </h2>
          <p>
            Most of the interactions above are timing-dependent: the problem occurs when
            the interacting substances are in the gut simultaneously. Separating iron
            supplements from calcium-containing products, antacids, and certain antibiotics
            by two hours substantially reduces the interaction in each case. Acid-reducing
            medications are an exception — they change the gastric environment persistently
            over their dosing interval, so timing iron supplements at peak acid rebound (for
            PPIs, roughly 12 hours after a morning dose) may help modestly, but the
            interaction is harder to fully avoid while staying on a daily PPI.
          </p>
          <p className="mt-3">
            Taking iron supplements on an empty stomach generally enhances absorption,
            though it increases GI side effects. Taking them with a small amount of food
            reduces side effects at some cost to absorption. Taking them with vitamin C
            enhances absorption by facilitating Fe³⁺ to Fe²⁺ conversion.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter your iron supplement
        alongside your other medications and supplements in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see relevant iron absorption interactions flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Sources:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Iron — Health Professional Fact Sheet
        </a>
        {', '}
        <a
          href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Calcium — Health Professional Fact Sheet
        </a>
        {' '}(NIH Office of Dietary Supplements)
      </div>
    </main>
  );
}
