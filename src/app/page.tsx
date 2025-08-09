import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6">
      {/* Hero Section - Clean & Centered */}
      <main className="text-center">
        <h1 className="mb-12 text-4xl font-bold text-foreground md:text-6xl">
          ✨ Bharadwaj Pendyala ✨
        </h1>

        {/* Social Links - Simple Text */}
        <div className="mb-16 flex items-center justify-center space-x-8">
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          )}

          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          )}

          {siteConfig.social.email && (
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Email
            </a>
          )}
        </div>

        {/* Simple Navigation */}
        <nav className="flex items-center justify-center space-x-8 text-sm">
          {siteConfig.features.showAbout && (
            <Link
              href="/about"
              className="text-muted transition-colors hover:text-foreground"
            >
              About
            </Link>
          )}

          <Link
            href="/cv"
            className="text-muted transition-colors hover:text-foreground"
          >
            CV
          </Link>

          {siteConfig.features.showProjects && (
            <Link
              href="/projects"
              className="text-muted transition-colors hover:text-foreground"
            >
              Projects
            </Link>
          )}

          {siteConfig.features.showBlog && (
            <Link
              href="/blog"
              className="text-muted transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
