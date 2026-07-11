import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Milk Thistle Drug Interactions: CYP Enzymes, Warfarin, and More',
  description:
    'Silymarin, the active compound in milk thistle, inhibits CYP2C9 and CYP3A4 — enzymes that metabolize warfarin, cyclosporine, tacrolimus, and many other medications. What NCCIH documents.',
  openGraph: {
    title: 'Milk Thistle Drug Interactions: CYP Enzymes, Warfarin, and More',
    description:
      'Milk thistle inhibits CYP2C9 and CYP3A4, raising plasma levels of a wide range of medications. Narrow-therapeutic-index drugs like warfarin and cyclosporine carry the most clinical concern.',
    type: 'article',
    publishedTime: '2026-07-11',
  },
};

export default function MilkThistleDrugInteractions() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <nav className="text-sm text-zinc-400 mb-8">
        <Link href="/blog" className="hover:text-zinc-600 transition-colors">
          ← Blog
        </Link>
      </nav>

      <div className="mb-2 text-xs text-zinc-400">2026-07-11</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        Milk Thistle Drug Interactions: CYP Enzymes, Warfarin, and More
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Milk thistle is one of the most commonly used herbal supplements for liver support,
          and that use context is relevant to understanding its interaction profile. People taking
          milk thistle often do so precisely because they are on medications — statins, hepatotoxic
          drugs, or antiretrovirals — that they worry are stressing their liver. The complication
          is that milk thistle doesn't just protect the liver; through its active compound
          silymarin, it also inhibits the liver enzymes that metabolize many of those same
          medications, potentially raising their blood levels to a degree that matters clinically.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How silymarin affects drug metabolism
          </h2>
          <p>
            Silymarin is a flavonolignan complex extracted from the seeds of Silybum marianum
            (the milk thistle plant). It inhibits two major cytochrome P450 enzymes: CYP2C9
            and CYP3A4. These enzymes are responsible for metabolizing an unusually large
            proportion of commonly prescribed medications — CYP3A4 alone handles roughly
            30–50% of all clinically used drugs.
          </p>
          <p className="mt-3">
            CYP2C9 substrates include warfarin (specifically the S-warfarin enantiomer, which
            is the more potent form), many NSAIDs including ibuprofen and celecoxib, certain
            sulfonylurea diabetes medications, and some ARBs including losartan and irbesartan.
            CYP3A4 substrates include immunosuppressants such as cyclosporine and tacrolimus,
            statins including simvastatin and lovastatin, many benzodiazepines, calcium channel
            blockers, certain antidepressants, and numerous others. Inhibiting either enzyme
            slows breakdown of its substrates, which raises their plasma concentrations — a
            straightforward pharmacokinetic interaction.
          </p>
          <p className="mt-3">
            NCCIH notes that milk thistle may interact with medications changed by the liver.
            The magnitude of the effect appears to vary considerably depending on dose, the
            specific silymarin preparation, and the individual drug involved. Clinical data are
            limited — most evidence comes from in vitro and animal studies, with some human
            pharmacokinetic studies. The interaction is unlikely to be dramatic for most drugs
            at typical milk thistle doses, but for drugs with narrow therapeutic indices, even
            modest increases in plasma levels matter.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Narrow-therapeutic-index drugs deserve the most attention
          </h2>
          <p>
            Warfarin is the clearest concern. S-warfarin is primarily metabolized by CYP2C9,
            so inhibition of that enzyme could raise warfarin levels and increase anticoagulation
            beyond the intended therapeutic range. Warfarin's therapeutic window — where it
            prevents clots without causing excessive bleeding — is already narrow enough that
            relatively small changes in drug levels or vitamin K intake destabilize INR control.
            Adding a CYP2C9 inhibitor to a stable warfarin regimen creates the possibility of
            INR drift upward without any change in dose.
          </p>
          <p className="mt-3">
            Cyclosporine and tacrolimus carry a similar concern via CYP3A4. Both are used after
            organ transplant to prevent rejection, and both have narrow therapeutic windows where
            the difference between underdosing (rejection risk) and overdosing (nephrotoxicity,
            neurotoxicity) is clinically meaningful. Elevated cyclosporine or tacrolimus levels
            from CYP3A4 inhibition — even modest elevation — can have serious consequences in
            transplant patients.
          </p>
          <p className="mt-3">
            For medications with wider therapeutic windows — many statins, benzodiazepines at
            normal doses, most calcium channel blockers — the interaction exists in principle but
            is less likely to produce a clinically significant event. The practical priority is
            disclosing milk thistle use to prescribers of narrow-window drugs, so they can decide
            whether INR monitoring should be increased or drug levels checked more frequently.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            OATP and P-glycoprotein: additional transport interactions
          </h2>
          <p>
            Beyond CYP inhibition, silymarin also inhibits organic anion transporting polypeptides
            (OATPs) — drug uptake transporters in the intestine and liver — and P-glycoprotein,
            an efflux pump that limits absorption of many drugs. OATP inhibition is relevant
            because OATPs facilitate the absorption and hepatic uptake of statins including
            atorvastatin, rosuvastatin, and pravastatin. Statins that were thought to be safe
            from CYP3A4 interactions can still be affected through transporter inhibition.
            P-glycoprotein inhibition could raise levels of digoxin, certain HIV medications,
            and other P-gp substrates.
          </p>
          <p className="mt-3">
            The clinical significance of these transporter interactions at typical milk thistle
            supplement doses is not well established. They represent a theoretical concern backed
            by mechanistic plausibility rather than documented clinical outcomes in most cases.
            Still, the picture that emerges is of a supplement with multiple mechanisms through
            which it can affect circulating drug levels — enzyme inhibition plus transporter
            inhibition — which is a more complex profile than many users of liver-support
            supplements appreciate.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter milk thistle
        alongside warfarin, cyclosporine, or tacrolimus in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.nccih.nih.gov/health/milk-thistle"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          NCCIH — Milk Thistle
        </a>
      </div>
    </main>
  );
}
