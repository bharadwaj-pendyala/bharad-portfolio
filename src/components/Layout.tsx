'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { siteConfig } from '@/config/site';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-border sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex h-16 items-center justify-between">
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-lg font-semibold hover:opacity-80">
                {siteConfig.name}
              </Link>
              {siteConfig.nav
                .filter((item) => item.enabled !== false)
                .map((item) => (
                  <Link key={item.href} href={item.href} className="hover:opacity-80">
                    {item.label}
                  </Link>
                ))}
            </nav>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border-border mt-16 border-t">
        <div className="container mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8">
              <a
                href={siteConfig.social.github ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-secondary transition-colors"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.email ?? '#'}
                className="text-muted hover:text-secondary transition-colors"
              >
                Email
              </a>
            </div>
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Bharad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
