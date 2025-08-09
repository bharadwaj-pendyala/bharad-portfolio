import Link from 'next/link';
import { siteConfig } from '@/config/site';
import ThemeToggle from './ThemeToggle';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex h-16 items-center justify-between">
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-lg font-semibold hover:opacity-80">
                {siteConfig.name.split(' ')[0]}
              </Link>
              {siteConfig.features.showAbout && (
                <Link href="/about" className="hover:opacity-80">
                  About
                </Link>
              )}
              {siteConfig.features.showProjects && (
                <Link href="/projects" className="hover:opacity-80">
                  Projects
                </Link>
              )}
              {siteConfig.features.showBlog && (
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

      <footer className="mt-16 border-t border-border">
        <div className="container mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-secondary"
                >
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-secondary"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social.email && (
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-muted transition-colors hover:text-secondary"
                >
                  Email
                </a>
              )}
            </div>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Bharad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
