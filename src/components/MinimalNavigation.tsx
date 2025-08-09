import Link from 'next/link';
import { siteConfig } from '@/config/site';

type NavigationItem = {
  label: string;
  href: string;
  enabled: boolean;
};

export default function MinimalNavigation(): JSX.Element {
  const navigation: NavigationItem[] = [
    {
      label: 'About',
      href: '/about',
      enabled: siteConfig.features.showAbout,
    },
    {
      label: 'CV',
      href: '/cv',
      enabled: true,
    },
    {
      label: 'Projects',
      href: '/projects',
      enabled: siteConfig.features.showProjects,
    },
    {
      label: 'Blog',
      href: '/blog',
      enabled: siteConfig.features.showBlog,
    },
  ];

  const enabledItems = navigation.filter((item) => item.enabled);

  return (
    <nav className="flex justify-center">
      <div className="flex items-center space-x-8">
        {enabledItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <Link
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
            {index < enabledItems.length - 1 && (
              <div className="bg-border/50 ml-8 h-3 w-px"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
