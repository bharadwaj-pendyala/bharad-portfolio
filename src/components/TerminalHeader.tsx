import Link from 'next/link';
import { siteConfig } from '@/config/site';
import ThemeToggle from './ThemeToggle';

export default function TerminalHeader(): JSX.Element {
  return (
    <header className="border-border/20 border-b bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Simple branding */}
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition-colors hover:text-muted"
          >
            cd /home/bharadwaj_p
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {siteConfig.features.showAbout && (
              <Link
                href="/about"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                About
              </Link>
            )}
            {siteConfig.features.showBlog && (
              <Link
                href="/blog"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Blog
              </Link>
            )}
            <span className="text-muted">|</span>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
