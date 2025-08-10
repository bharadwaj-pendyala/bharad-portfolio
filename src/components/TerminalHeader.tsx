import Link from 'next/link';
import { siteConfig } from '@/config/site';
import ThemeToggle from './ThemeToggle';
import TerminalPrompt from './TerminalPrompt';

export default function TerminalHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Terminal-style branding */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:opacity-80">
              <TerminalPrompt prompt="~$ cd /home/" className="hidden sm:block">
                {siteConfig.name.toLowerCase().replace(' ', '_')}
              </TerminalPrompt>
              <TerminalPrompt prompt="~$ " className="sm:hidden">
                {siteConfig.name.split(' ')[0].toLowerCase()}
              </TerminalPrompt>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 sm:space-x-6">
            {siteConfig.features.showAbout && (
              <Link
                href="/about"
                className="hidden font-mono text-sm font-medium text-muted transition-colors hover:text-accent sm:block"
              >
                About
              </Link>
            )}
            <Link
              href="/cv"
              className="font-mono text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              CV
            </Link>
            {siteConfig.features.showBlog && (
              <Link
                href="/blog"
                className="font-mono text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                Posts
              </Link>
            )}
            {siteConfig.features.showProjects && (
              <Link
                href="/projects"
                className="hidden font-mono text-sm font-medium text-muted transition-colors hover:text-accent sm:block"
              >
                Projects
              </Link>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
