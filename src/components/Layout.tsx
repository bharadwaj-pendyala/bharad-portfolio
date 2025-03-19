'use client'

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(var(--background-rgb))]">
      <header className="sticky top-0 z-50 bg-[rgb(var(--background-rgb))]/95 backdrop-blur-sm border-b border-border-color">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex items-center justify-center h-14">
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-lg font-semibold hover:opacity-80">
                Bharad
              </Link>
              <Link href="/about" className="hover:opacity-80">
                About
              </Link>
              <Link href="/projects" className="hover:opacity-80">
                Projects
              </Link>
              <Link href="/blog" className="hover:opacity-80">
                Blog
              </Link>
            </nav>
            <div className="fixed right-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow py-6">
        {children}
      </main>

      <footer className="border-t border-border-color mt-16">
        <div className="container mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-color hover:text-secondary-color transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-color hover:text-secondary-color transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-color hover:text-secondary-color transition-colors"
              >
                Email
              </a>
            </div>
            <p className="text-sm text-muted-color">
              © {new Date().getFullYear()} Bharad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}