import { siteConfig } from '@/config/site';

export default function MinimalFooter(): JSX.Element {
  return (
    <footer className="border-border/80 bg-card-bg/30 mt-20 border-t">
      <div className="container mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-mono text-xs text-muted">status: open to work</p>
            <p className="text-sm text-muted">
              Built with Next.js, TypeScript, and a terminal-first design
              system.
            </p>
          </div>

          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <div className="flex items-center justify-center gap-4 md:justify-end">
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
        </div>
      </div>
    </footer>
  );
}
