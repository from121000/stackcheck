import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Melatonin Drug Interactions: Sedatives, Warfarin, and More',
  description:
    'Melatonin interacts with sedatives (additive CNS depression), certain SSRIs (CYP metabolism), and some anticoagulants. What the evidence actually shows.',
  openGraph: {
    title: 'Melatonin Drug Interactions: Sedatives, Warfarin, and More',
    description:
      'Melatonin interacts with CNS depressants through additive sedation and with fluvoxamine through CYP1A2 inhibition. What the NIH ODS fact sheet documents.',
    type: 'article',
    publishedTime: '2026-07-01',
  },
};

export default function MelatoninDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-01</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Melatonin Drug Interactions: Sedatives, Warfarin, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Melatonin is widely used as a sleep aid. It is generally considered safe at the doses sold
          over the counter, but it is not pharmacologically inert — it has real effects on the central
          nervous system and is metabolized by liver enzymes, both of which create opportunities for
          interactions with medications.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            CNS depressants: additive sedation
          </h2>
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Moderate severity
          </div>
          <p>
            Melatonin promotes sleep by acting on MT1 and MT2 melatonin receptors in the brain,
            suppressing the alerting signal from the suprachiasmatic nucleus and lowering core body
            temperature. This CNS-depressant effect is additive with other substances that also
            depress central nervous system activity — benzodiazepines (like lorazepam, diazepam,
            clonazepam), non-benzodiazepine sleep aids (zolpidem, eszopiclone), antihistamines with
            sedating properties, opioids, and alcohol.
          </p>
          <p className="mt-3">
            The practical concern: combining melatonin with these substances may produce more
            sedation, impaired coordination, or cognitive blunting than either alone. This is a
            pharmacodynamic interaction — each substance independently suppresses CNS function, and
            the effects add. It is not a metabolic interaction where one drug changes the blood level
            of another.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Melatonin-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Melatonin — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Fluvoxamine: dramatically elevated melatonin levels
          </h2>
          <div className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            High severity
          </div>
          <p>
            Melatonin is primarily metabolized by CYP1A2 and CYP2C19 in the liver. Fluvoxamine
            (Luvox), an SSRI used for OCD and depression, is one of the most potent inhibitors of
            CYP1A2 available. When fluvoxamine blocks CYP1A2, melatonin is not cleared from the
            body normally — plasma melatonin levels can increase by 17-fold or more, according to
            pharmacokinetic studies cited in the NIH ODS melatonin fact sheet.
          </p>
          <p className="mt-3">
            This is a significant interaction. Even a low dose of supplemental melatonin becomes
            effectively a very high dose when fluvoxamine impairs its clearance. Most other SSRIs
            (sertraline, escitalopram, paroxetine, fluoxetine) do not have this effect — they inhibit
            different CYP enzymes. Fluvoxamine is specific because of its strong CYP1A2 inhibition.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Melatonin-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Melatonin — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Warfarin: possible but inconsistent INR effects
          </h2>
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            Low severity — evidence limited
          </div>
          <p>
            Some case reports have described INR changes — both increases and decreases — in patients
            on warfarin who added melatonin. The evidence is limited to case reports and small studies,
            not controlled trials. The mechanism is uncertain; melatonin may have some influence on
            CYP2C9, which metabolizes warfarin, but this has not been well characterized.
          </p>
          <p className="mt-3">
            The practical takeaway: the interaction is not well-established, but patients on warfarin
            who begin taking melatonin may want to monitor INR more closely in the period after
            starting, as they would for any supplement that has at least theoretical interaction
            potential. The NIH ODS fact sheet notes melatonin&apos;s possible effect on
            anticoagulant/antiplatelet drugs.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Melatonin-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Melatonin — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Nifedipine and antihypertensives
          </h2>
          <p>
            A few studies have found that melatonin may blunt the blood-pressure-lowering effect of
            nifedipine, a calcium channel blocker used for hypertension and angina. The mechanism is
            not fully established, but melatonin has some vasoconstrictive properties via its action
            on certain melatonin receptors. The effect appears modest and has not been consistently
            replicated, but it is flagged in the NIH ODS fact sheet as a documented interaction with
            antihypertensive drugs.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{' '}
            <a
              href="https://ods.od.nih.gov/factsheets/Melatonin-HealthProfessional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700"
            >
              Melatonin — Health Professional Fact Sheet
            </a>{' '}
            (NIH Office of Dietary Supplements)
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Immunosuppressants
          </h2>
          <p>
            Melatonin has immunomodulatory effects — it can stimulate immune cell activity and
            cytokine production. For people taking immunosuppressant medications (such as cyclosporine
            or tacrolimus after organ transplant, or methotrexate for autoimmune conditions), this
            immune-stimulating effect is theoretically counterproductive to the drug&apos;s goal of
            suppressing the immune system. The NIH ODS fact sheet flags this as a potential
            interaction category.
          </p>
        </section>

        <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
          <strong className="text-zinc-800">Check your stack:</strong> Enter melatonin alongside your
          other medications in the{' '}
          <Link href="/" className="underline hover:text-zinc-800">
            StackVerify checker
          </Link>{' '}
          to see documented interactions for your specific combination.
        </div>
      </div>
    </main>
  );
}
