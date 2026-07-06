import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://stackverify.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://stackverify.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://stackverify.app/blog/st-johns-wort-drug-interactions',
      lastModified: new Date('2026-06-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/iron-levothyroxine-interaction',
      lastModified: new Date('2026-06-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/magnesium-drug-interactions',
      lastModified: new Date('2026-06-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/fish-oil-blood-thinners',
      lastModified: new Date('2026-06-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/vitamin-d-drug-interactions',
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/calcium-supplement-interactions',
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/potassium-and-medications',
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/melatonin-drug-interactions',
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/garlic-supplement-interactions',
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/ginkgo-biloba-drug-interactions',
      lastModified: new Date('2026-07-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/supplement-interactions-with-statins',
      lastModified: new Date('2026-07-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/melatonin-fluvoxamine-interaction',
      lastModified: new Date('2026-07-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/vitamin-e-blood-thinners',
      lastModified: new Date('2026-07-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/red-yeast-rice-and-statins',
      lastModified: new Date('2026-07-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/vitamin-b12-and-medications',
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/coq10-and-statins',
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/zinc-drug-interactions',
      lastModified: new Date('2026-07-06'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stackverify.app/blog/berberine-drug-interactions',
      lastModified: new Date('2026-07-06'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
