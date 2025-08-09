import { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const routes = ['/', '/about', '/projects', '/blog'].filter((path) => {
    if (path === '/about' && !siteConfig.features.showAbout) return false;
    if (path === '/projects' && !siteConfig.features.showProjects) return false;
    if (path === '/blog' && !siteConfig.features.showBlog) return false;
    return true;
  });

  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.6,
  }));
}


