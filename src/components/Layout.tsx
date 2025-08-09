'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-border sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex h-16 items-center justify-between">
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-lg font-semibold hover:opacity-80">
                Bharad
              </Link>
              {process.env['NEXT_PUBLIC_SHOW_ABOUT'] === '1' && (
                <Link href="/about" className="hover:opacity-80">
                  About
                </Link>
              )}
              {process.env['NEXT_PUBLIC_SHOW_PROJECTS'] === '1' && (
                <Link href="/projects" className="hover:opacity-80">
                  Projects
                </Link>
              )}
              {process.env['NEXT_PUBLIC_SHOW_BLOG'] === '1' && (
                <Link href="/blog" className="hover:opacity-80">
                  Blog
                </Link>
              )}
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
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-secondary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
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
