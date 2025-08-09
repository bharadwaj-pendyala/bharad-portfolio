import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url + (siteConfig.basePath ?? '');
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/post-1`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/blog/post-2`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/blog/post-3`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];
}


