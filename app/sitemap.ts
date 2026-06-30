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
  ];
}
