import TerminalHero from '@/components/TerminalHero';
import MinimalNavigation from '@/components/MinimalNavigation';

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-12">
      {/* Main Terminal - Clean & Minimal */}
      <section className="mb-20">
        <div className="border-border/50 rounded-lg border bg-background">
          {/* Minimal terminal header */}
          <div className="border-border/50 flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center space-x-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-muted/70 font-mono text-xs">terminal</div>
          </div>

          {/* Interactive terminal */}
          <div className="p-6">
            <TerminalHero className="min-h-[240px]" />
          </div>
        </div>
      </section>

      {/* Minimal Navigation */}
      <section className="mb-20">
        <MinimalNavigation />
      </section>

      {/* Simple Footer Info */}
      <section className="text-center">
        <div className="inline-flex items-center space-x-8 text-sm text-muted">
          <span>Software Engineer</span>
          <span className="h-1 w-1 rounded-full bg-muted"></span>
          <span>Full Stack Developer</span>
          <span className="h-1 w-1 rounded-full bg-muted"></span>
          <span>Problem Solver</span>
        </div>
      </section>
    </div>
  );
}
