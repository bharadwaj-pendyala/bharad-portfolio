import Link from 'next/link';
import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

export default function NotFound(): JSX.Element {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <div className="card border-card-border bg-card-bg">
        <div className="mb-4 border-b border-card-border pb-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/404
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <TerminalCommand command="ls -la /requested/path" />
          <TerminalOutput type="error">
            ls: cannot access &apos;/requested/path&apos;: No such file or
            directory
          </TerminalOutput>

          <TerminalCommand command="find . -name 'page'" />
          <TerminalOutput>./home ./about ./projects ./cv ./blog</TerminalOutput>

          <div className="mt-6 text-center">
            <h1 className="mb-4 text-3xl font-bold text-foreground">
              404 - Page Not Found
            </h1>
            <p className="mb-6 text-secondary">
              The requested resource could not be found in the current
              directory.
            </p>
            <Link
              href="/"
              className="inline-flex items-center rounded bg-accent px-4 py-2 font-mono text-sm text-background transition-opacity hover:opacity-90"
            >
              cd ~/home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
