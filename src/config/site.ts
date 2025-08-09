export type NavItem = {
  label: string;
  href: string;
  enabled: boolean;
};

export type SocialLinks = {
  github?: string;
  linkedin?: string;
  email?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  /** Base site URL without trailing slash, e.g., https://bharadwaj-pendyala.github.io */
  url: string;
  /** Next.js basePath, e.g., /bharad-portfolio when using GitHub Pages */
  basePath?: string;
  nav: NavItem[];
  social: SocialLinks;
  features: {
    showAbout: boolean;
    showProjects: boolean;
    showBlog: boolean;
  };
};

export const siteConfig: SiteConfig = {
  name: 'Bharadwaj P',
  description:
    'Terminal-inspired developer portfolio showcasing full-stack engineering projects, technical expertise, and software development insights. Built with Next.js, TypeScript, and modern web technologies.',
  url: 'https://bharadwaj-pendyala.github.io',
  basePath: '/bharad-portfolio',
  nav: [
    { label: 'About', href: '/about', enabled: true },
    { label: 'Projects', href: '/projects', enabled: true },
    { label: 'Blog', href: '/blog', enabled: true },
  ],
  social: {
    github: 'https://github.com/bharadwaj-pendyala',
    linkedin: 'https://www.linkedin.com/in/bharadwaj-pendyala',
    email: 'bharadwajpendyala@gmail.com',
  },
  features: {
    showAbout: true,
    showProjects: true,
    showBlog: true,
  },
};

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withBase = siteConfig.basePath ? `${siteConfig.basePath}${path}` : path;
  return `${siteConfig.url}${withBase}`;
}
