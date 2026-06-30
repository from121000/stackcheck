import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'StackVerify — Supplement & Medication Interaction Checker',
    template: '%s | StackVerify',
  },
  description:
    'Check your supplement and medication stack for known drug interactions. Free, browser-only, no data stored.',
  metadataBase: new URL('https://stackverify.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 antialiased font-sans">
        <header className="border-b border-zinc-100">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
              StackVerify
            </a>
            <nav className="flex gap-5 text-sm text-zinc-600">
              <a href="/blog" className="hover:text-zinc-900 transition-colors">
                Blog
              </a>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-zinc-100 mt-16">
          <div className="max-w-2xl mx-auto px-4 py-8 text-xs text-zinc-500 space-y-1">
            <p>
              StackVerify is an informational tool, not a medical service. Nothing on this site
              constitutes medical advice. Always consult a qualified healthcare provider before
              making decisions about your medications or supplements.
            </p>
            <p>© {new Date().getFullYear()} StackVerify</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
