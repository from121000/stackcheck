import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "St. John's Wort and Birth Control: Contraceptive Failure Risk Explained",
  description:
    "St. John's Wort induces CYP3A4, speeding up the metabolism of estrogen and progestin hormones in oral contraceptives. Case reports document breakthrough bleeding and unplanned pregnancies. What the evidence shows.",
  openGraph: {
    title: "St. John's Wort and Birth Control: Contraceptive Failure Risk Explained",
    description:
      "St. John's Wort speeds up the liver enzymes that break down contraceptive hormones, reducing their circulating levels — a well-documented interaction with real-world consequences.",
    type: 'article',
    publishedTime: '2026-07-12',
  },
  alternates: {
    canonical: "https://stackverify.app/blog/st-johns-wort-and-birth-control",
  },
};

export default function SJWBirthControl() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "St. John's Wort and Birth Control: Contraceptive Failure Risk Explained",
            "datePublished": "2026-07-12",
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

      <div className="mb-2 text-xs text-zinc-400">2026-07-12</div>
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
        St. John&apos;s Wort and Birth Control: Contraceptive Failure Risk Explained
      </h1>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This article is for informational purposes only.
        Consult a doctor or pharmacist before making any decisions about your medications or
        supplements.
      </div>

      <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
        <p>
          St. John&apos;s Wort (Hypericum perforatum) is widely used for mild to moderate
          depression, and its interaction with oral contraceptives is one of the best-documented
          supplement-drug interactions in clinical literature. The concern isn&apos;t theoretical:
          case reports describe breakthrough bleeding and unplanned pregnancies in women who added
          St. John&apos;s Wort without recognizing its effect on contraceptive hormone levels. The
          mechanism is specific and well-characterized, and it applies to most conventional
          hormonal contraceptive formulations.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            How CYP3A4 induction reduces hormone levels
          </h2>
          <p>
            St. John&apos;s Wort induces the cytochrome P450 3A4 enzyme (CYP3A4), which is the
            primary enzyme responsible for metabolizing a large fraction of drugs, including the
            estrogen and progestin hormones in combined oral contraceptives. CYP3A4 induction means
            the liver produces more of this enzyme, which breaks down contraceptive hormones faster
            than normal. The result is lower circulating hormone concentrations than the
            contraceptive formulation was designed to maintain.
          </p>
          <p className="mt-3">
            Contraceptive pills rely on maintaining specific minimum hormone levels to suppress
            ovulation and maintain the cervical mucus and endometrial changes that prevent
            pregnancy. When hormone levels drop below those thresholds — even transiently —
            ovulation suppression may be incomplete. Breakthrough bleeding is often the first
            visible sign that hormone levels have dropped, but ovulation can resume before
            breakthrough bleeding becomes apparent.
          </p>
          <p className="mt-3">
            The induction effect is not immediate. CYP3A4 induction builds over days to a few
            weeks of consistent St. John&apos;s Wort use, meaning the interaction may not be
            obvious at first. It also persists for a period after stopping the supplement —
            enzyme induction doesn&apos;t reverse immediately when the inducing agent is
            discontinued. How quickly CYP3A4 returns to baseline after stopping St. John&apos;s
            Wort varies across individuals.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            Which contraceptives are affected
          </h2>
          <p>
            Combined oral contraceptives containing both estrogen (ethinyl estradiol) and
            progestin are the formulations most directly documented in the interaction literature.
            Ethinyl estradiol is heavily CYP3A4-dependent, so the induction effect on estrogen
            levels is substantial. Many progestins — including norethindrone, levonorgestrel,
            desogestrel, and norgestimate — are also metabolized via CYP3A4 to varying degrees.
          </p>
          <p className="mt-3">
            Progestin-only pills (the "mini-pill") are also affected, since progestin is similarly
            metabolized via CYP3A4. Hormonal patches and vaginal rings deliver the same hormones
            transdermally or vaginally rather than orally, but the hormones still enter the
            systemic circulation and are metabolized by the liver — the interaction applies to
            these formulations as well.
          </p>
          <p className="mt-3">
            Non-hormonal contraceptive methods — copper IUDs, barrier methods — are not affected
            by this interaction, since they don&apos;t rely on hormone levels. Hormonal IUDs work
            primarily through local progestin action in the uterus rather than systemic hormone
            levels; the evidence on whether the St. John&apos;s Wort interaction affects them
            meaningfully is less clear than for systemic hormonal methods.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mt-8 mb-3">
            The real-world evidence
          </h2>
          <p>
            The clinical evidence for this interaction includes pharmacokinetic studies
            demonstrating reduced hormone plasma levels in women taking St. John&apos;s Wort
            alongside oral contraceptives, alongside case reports documenting breakthrough
            bleeding and unintended pregnancies in women using both concurrently. A PMC review
            of clinically relevant safety issues on St. John&apos;s Wort product labels found
            this interaction consistently documented. Several European regulatory bodies have
            issued formal warnings about this combination, and the interaction appears in most
            established drug interaction databases.
          </p>
          <p className="mt-3">
            The overlap in the population who might use both is real: St. John&apos;s Wort is
            commonly used for mood, anxiety, and PMS — the same symptoms that sometimes prompt
            people to consider or adjust hormonal contraception. Someone managing mild depression
            with St. John&apos;s Wort who is also using oral contraceptives may not connect the
            two, particularly since both are available without a prescription in many places and
            carry a general perception of being "natural" or lower-risk.
          </p>
          <p className="mt-3">
            The practical guidance from prescribers familiar with this interaction is generally
            to avoid combining St. John&apos;s Wort with hormonal contraceptives or to use an
            additional barrier method as backup during and for a period after St. John&apos;s
            Wort use. The specifics of timing and backup duration should be discussed with a
            prescriber, as individual enzyme induction rates vary.
          </p>
        </section>
      </div>

      <div className="mt-10 p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-600">
        <strong className="text-zinc-800">Check your stack:</strong> Enter St. John&apos;s Wort
        alongside any oral contraceptive in the{' '}
        <Link href="/" className="underline hover:text-zinc-800">
          StackVerify checker
        </Link>{' '}
        to see this interaction flagged.
      </div>

      <div className="mt-6 text-xs text-zinc-400">
        Source:{' '}
        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2483264/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600"
        >
          Clinically relevant safety issues associated with St. John&apos;s wort product labels
          — PMC
        </a>
      </div>
    </main>
  );
}
