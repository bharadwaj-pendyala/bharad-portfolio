import Link from 'next/link';
import { siteConfig } from '@/config/site';

type NavigationCard = {
  title: string;
  description: string;
  href: string;
  command: string;
  enabled: boolean;
};

const cards: NavigationCard[] = [
  {
    title: 'About',
    description: 'Background, skills, and current focus areas.',
    href: '/about',
    command: 'cat about.md',
    enabled: siteConfig.features.showAbout,
  },
  {
    title: 'CV',
    description: 'Experience, skills, and professional history.',
    href: '/cv',
    command: 'open cv.pdf',
    enabled: true,
  },
  {
    title: 'Projects',
    description: 'Selected work with architecture and delivery details.',
    href: '/projects',
    command: 'cd projects',
    enabled: siteConfig.features.showProjects,
  },
  {
    title: 'Blog',
    description: 'Notes on engineering practices and web development.',
    href: '/blog',
    command: 'ls posts',
    enabled: siteConfig.features.showBlog,
  },
];

export default function NavigationCards(): JSX.Element {
  const enabledCards = cards.filter((card) => card.enabled);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {enabledCards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="hover:border-accent/40 group block rounded-lg border border-card-border bg-background/40 p-4 transition-colors hover:bg-background/60"
        >
          <div className="space-y-3">
            <p className="font-mono text-xs text-muted">
              <span className="text-accent">$</span> {card.command}
            </p>
            <div>
              <h3 className="font-mono text-base font-medium text-foreground transition-colors group-hover:text-accent">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-secondary">{card.description}</p>
            </div>
            <p className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
              Open section &gt;
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
