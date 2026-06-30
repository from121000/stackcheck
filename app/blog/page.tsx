import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Supplement & Drug Interaction Research',
  description:
    'In-depth articles on supplement and medication interactions: mechanisms, evidence, and what the research actually says.',
};

const posts = [
  {
    slug: 'iron-levothyroxine-interaction',
    title: 'Iron Supplements and Levothyroxine: A Clinically Important Interaction',
    description:
      'Iron supplements can significantly reduce levothyroxine absorption through chelation in the GI tract. What the evidence shows and why it matters for thyroid patients.',
    date: '2026-06-30',
  },
  {
    slug: 'st-johns-wort-drug-interactions',
    title: "St. John's Wort Drug Interactions: What the Evidence Shows",
    description:
      "St. John's Wort has one of the most extensive interaction profiles of any supplement. Three well-documented interactions — with warfarin, SSRIs, and oral contraceptives — and the mechanism behind each.",
    date: '2026-06-30',
  },
];

export default function BlogIndex() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Blog</h1>
      <p className="mt-2 text-zinc-600">
        Research on supplement and drug interactions — mechanisms, evidence, sources.
      </p>

      <div className="mt-10 space-y-8">
        {posts.map(post => (
          <article key={post.slug}>
            <p className="text-xs text-zinc-400 mb-1">{post.date}</p>
            <h2 className="text-lg font-semibold text-zinc-900">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-zinc-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-2 inline-block text-sm font-medium text-zinc-800 underline hover:text-zinc-500 transition-colors"
            >
              Read →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
