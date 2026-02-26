'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import ThemeToggle from './ThemeToggle';
import TerminalPrompt from './TerminalPrompt';

export default function TerminalHeader(): JSX.Element {
  const pathname = usePathname();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'CV', href: '/cv' },
    ...siteConfig.nav.filter((item) => item.enabled),
  ];

  return (
    <header className="border-border/80 sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-2">
          <div className="flex items-center">
            <Link
              href="/"
              className="rounded-md px-2 py-1 transition-opacity hover:opacity-80"
            >
              <TerminalPrompt prompt="~$ cd /home/" className="hidden sm:block">
                {siteConfig.name.toLowerCase().replace(' ', '_')}
              </TerminalPrompt>
              <TerminalPrompt prompt="~$ " className="sm:hidden">
                {siteConfig.name.split(' ')[0].toLowerCase()}
              </TerminalPrompt>
            </Link>
          </div>

          <nav className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto font-mono text-sm sm:gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-3 py-1.5 transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'hover:bg-muted/20 text-secondary hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
