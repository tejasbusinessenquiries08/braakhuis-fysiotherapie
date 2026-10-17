import type { MetadataRoute } from 'next';
import { ALL_POSTS } from '@/content/posts';

export const dynamic = 'force-static';

export const BASE_URL = 'https://braakhuis-fysiotherapie.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2026-10-17T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified: new Date('2026-10-17T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date('2026-10-17T00:00:00.000Z'),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = ALL_POSTS.map((post) => ({
    url: `${BASE_URL}/${post.slug}/`,
    lastModified: new Date(post.updatedDate || post.publishDate),
    changeFrequency: 'monthly',
    priority: post.role === 'pillar' ? 0.9 : 0.7,
  }));

  const blogPostRoutes: MetadataRoute.Sitemap = ALL_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedDate || post.publishDate),
    changeFrequency: 'monthly',
    priority: post.role === 'pillar' ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...postRoutes, ...blogPostRoutes];
}
