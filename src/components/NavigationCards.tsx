import Link from 'next/link';
import { siteConfig } from '@/config/site';

type NavigationCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
  enabled: boolean;
};

export default function NavigationCards(): JSX.Element {
  const cards: NavigationCard[] = [
    {
      title: 'About.md',
      description: 'Learn about my background, skills, and interests',
      href: '/about',
      icon: '📄',
      enabled: siteConfig.features.showAbout,
    },
    {
      title: 'CV.pdf',
      description: 'Professional experience and qualifications',
      href: '/cv',
      icon: '📋',
      enabled: true,
    },
    {
      title: 'Projects/',
      description: 'Portfolio of my latest work and contributions',
      href: '/projects',
      icon: '📁',
      enabled: siteConfig.features.showProjects,
    },
    {
      title: 'Posts/',
      description: 'Technical articles and thoughts on development',
      href: '/blog',
      icon: '📝',
      enabled: siteConfig.features.showBlog,
    },
  ];

  const enabledCards = cards.filter((card) => card.enabled);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {enabledCards.map((card) => (
        <Link key={card.href} href={card.href} className="group block">
          <div className="card hover:border-accent/50 transition-all duration-200 hover:scale-[1.02]">
            <div className="flex items-start space-x-3">
              <span className="text-2xl" role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  {card.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
