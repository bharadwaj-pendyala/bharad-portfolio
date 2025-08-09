import { siteConfig } from '@/config/site';

export default function MinimalFooter(): JSX.Element {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container mx-auto max-w-4xl px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          {/* Tech stack / Attribution */}
          <div className="flex items-center space-x-4 text-sm text-muted">
            <span>Powered by Next.js</span>
            <span>•</span>
            <span>Made with ❤️</span>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground text-sm"
              >
                GitHub
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground text-sm"
              >
                LinkedIn
              </a>
            )}
            {siteConfig.social.email && (
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="text-muted transition-colors hover:text-foreground text-sm"
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
