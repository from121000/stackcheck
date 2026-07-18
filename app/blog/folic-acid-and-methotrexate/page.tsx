import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Folic Acid and Methotrexate: Two Very Different Interactions',
  description:
    'In rheumatoid arthritis, folic acid co-prescription with methotrexate is standard of care that reduces toxicity. In cancer treatment, the same supplement may reduce chemotherapy efficacy. The mechanism behind the difference.',
  openGraph: {
    title: 'Folic Acid and Methotrexate: Two Very Different Interactions',
    description:
      'Methotrexate works by blocking folate metabolism — but co-prescribing folic acid is standard in RA while contraindicated in cancer chemotherapy. What the NIH ODS Folate fact sheet documents.',
    type: 'article',
    publishedTime: '2026-07-15',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/folic-acid-and-methotrexate",
  },
};

export default function FolicAcidAndMethotrexate() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-15</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Folic Acid and Methotrexate: Two Very Different Interactions
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Methotrexate is used for two very different purposes: as a disease-modifying drug
          in rheumatoid arthritis, psoriasis, and inflammatory bowel disease at low doses
          taken weekly; and as a chemotherapy agent in certain cancers at much higher doses.
          Both uses involve the same drug and the same biochemical mechanism, but the
          interaction with folic acid supplementation is nearly opposite between them.
          Understanding why requires understanding what methotrexate actually does at
          the cellular level.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            What methotrexate does: blocking the folate pathway
          </h2>
          <p>
            Methotrexate inhibits dihydrofolate reductase (DHFR), the enzyme that converts
            dietary folate into its active, usable form. DHFR takes dihydrofolate (the
            partially reduced form) and converts it to tetrahydrofolate (THF), which the
            body needs for DNA synthesis — specifically for making the building blocks of
            new DNA strands. Cells that divide rapidly, whether rapidly dividing immune
            cells in an inflamed joint or cancer cells in a tumor, depend heavily on this
            pathway.
          </p>
          <p className="mt-3">
            By blocking DHFR, methotrexate creates a relative folate deficiency in rapidly
            dividing cells. In cancer treatment, this is the therapeutic goal — the drug
            kills tumor cells by starving them of the folate-derived nucleotides they need
            to replicate their DNA. In rheumatoid arthritis, the anti-inflammatory mechanism
            operates partly through this pathway (impairing proliferating immune cells)
            but also through several other effects on adenosine signaling and immune
            regulation that are not folate-dependent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            In rheumatoid arthritis: folic acid is standard of care
          </h2>
          <p>
            At the low weekly doses used for RA (typically 7.5–25 mg per week), methotrexate
            depletes folate in all rapidly dividing cells, not just immune cells. The most
            common side effects of low-dose methotrexate — nausea, oral ulcers, GI discomfort,
            and elevated liver enzymes — appear to be largely driven by this broad folate
            depletion rather than by the specific anti-inflammatory mechanism. Co-prescribing
            folic acid reduces these side effects substantially, and randomized controlled
            trials have consistently shown that folic acid supplementation does not
            significantly reduce methotrexate&apos;s anti-inflammatory efficacy in RA patients.
          </p>
          <p className="mt-3">
            The NIH ODS Folate fact sheet notes this interaction directly, identifying it
            as well-established: folic acid is routinely co-prescribed with low-dose
            methotrexate. This is not a contraindication — it is standard clinical practice.
            Someone with RA on methotrexate who takes a daily folic acid supplement (often
            1 mg/day, sometimes 5 mg/week) is following their prescriber&apos;s guidance, not
            introducing a risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            In cancer treatment: supplemental folate may reduce efficacy
          </h2>
          <p>
            At the high doses used in cancer chemotherapy, the anti-tumor mechanism depends
            directly on DHFR inhibition and the resulting folate starvation of cancer cells.
            Adding a folate supplement provides a reservoir of dietary folate that cancer
            cells may be able to use to partially overcome the blockade — in effect,
            partially rescuing the cells that methotrexate is trying to kill. This is why
            clinicians managing patients on methotrexate-based chemotherapy regimens typically
            advise against unsupervised supplementation with folate-containing vitamins,
            including high-dose multivitamins with significant B9 content.
          </p>
          <p className="mt-3">
            The picture is more nuanced for some treatment protocols. Leucovorin (folinic acid),
            a form of active folate, is sometimes administered deliberately after high-dose
            methotrexate in cancer treatment as a &quot;leucovorin rescue&quot; — protecting normal
            cells once the tumor-targeting window has passed. This is a timed, supervised
            clinical protocol, not self-supplementation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The practical implication: ask why you are taking methotrexate
          </h2>
          <p>
            The same supplement — folic acid — is actively encouraged for one group of
            methotrexate users and potentially harmful for another. The determining factor
            is the indication. For RA, psoriasis, or psoriatic arthritis at low weekly
            doses: folic acid supplementation is usually recommended by the prescribing
            physician, reduces side effects, and does not compromise the drug&apos;s benefit.
            For cancer chemotherapy: supplemental folate should be discussed explicitly
            with the oncology team before adding.
          </p>
          <p className="mt-3">
            This makes methotrexate an unusual case where the supplement&apos;s safety cannot
            be determined without knowing why the drug is prescribed. Someone who has recently
            started methotrexate should ask their prescriber directly about folic acid —
            not assume the answer is yes or no based on general supplement guidance.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter folic acid and
        methotrexate in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Folate — Health Professional Fact Sheet
        </a>
        {' '}(NIH Office of Dietary Supplements)
      </div>
    </main>
  );
}
