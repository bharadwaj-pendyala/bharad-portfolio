export type NavItem = {
  label: string;
  href: string;
  enabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string; // canonical base URL (no trailing slash)
  basePath?: string; // e.g., "/bharad-portfolio" for GitHub Pages
  nav: NavItem[];
  social: Partial<{
    github: string;
    linkedin: string;
    email: string;
    twitter: string;
  }>;
  features: {
    showAbout: boolean;
    showProjects: boolean;
    showBlog: boolean;
  };
};

export const siteConfig: SiteConfig = {
  name: 'Bharad',
  description: 'Personal portfolio website of Bharadwaj P',
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
    email: 'mailto:contact@bharad.dev',
  },
  features: {
    showAbout: true,
    showProjects: true,
    showBlog: true,
  },
};


