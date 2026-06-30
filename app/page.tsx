import type { Metadata } from 'next';
import StackChecker from '@/components/StackChecker';

export const metadata: Metadata = {
  title: 'StackVerify — Supplement & Medication Interaction Checker',
  description:
    'Check your supplement and medication stack for known drug interactions. Free, runs entirely in your browser — nothing you enter is stored or sent anywhere.',
  openGraph: {
    title: 'StackVerify — Supplement & Medication Interaction Checker',
    description:
      'Check your supplement and medication stack for known drug interactions. Free, browser-only.',
    url: 'https://stackverify.app',
    siteName: 'StackVerify',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
        Supplement &amp; Medication Interaction Checker
      </h1>
      <p className="mt-2 text-zinc-600 leading-relaxed">
        Enter your current supplements and medications below. The checker looks them up against a
        curated dataset of known interactions and shows what&apos;s been documented and why.
        Everything runs in your browser — nothing is sent to a server.
      </p>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>Not medical advice.</strong> This tool surfaces publicly documented interactions for
        informational purposes only. Consult a doctor or pharmacist before changing anything about
        your medications or supplements.
      </div>

      <div className="mt-8">
        <StackChecker />
      </div>
    </main>
  );
}
