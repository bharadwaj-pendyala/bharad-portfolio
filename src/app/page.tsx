import TerminalHero from '@/components/TerminalHero';
import NavigationCards from '@/components/NavigationCards';
import TerminalSession from '@/components/TerminalSession';

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      {/* Terminal Hero Section */}
      <section className="mb-16">
        <div className="card border-card-border bg-card-bg">
          <div className="relative">
            {/* Terminal window decorations */}
            <div className="mb-4 flex items-center space-x-2 border-b border-card-border pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-4 font-mono text-xs text-muted">
                bharad@portfolio:~
              </span>
            </div>

            {/* Animated terminal content */}
            <TerminalHero className="min-h-[200px]" />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-medium text-foreground">
            Available Files & Directories
          </h2>
          <p className="text-sm text-secondary">
            Click on any item to explore different sections of the portfolio
          </p>
        </div>
        <NavigationCards />
      </section>

      {/* Terminal Session Preview */}
      <section className="mb-16">
        <div className="card border-card-border bg-card-bg">
          <div className="mb-4">
            <h3 className="mb-1 text-base font-medium text-foreground">
              Demo Session
            </h3>
            <p className="text-sm text-secondary">
              Example commands and typical terminal usage
            </p>
          </div>
          <TerminalSession />
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="card text-center">
            <div className="mb-1 text-2xl font-bold text-accent">5+</div>
            <div className="text-sm text-secondary">Years Experience</div>
          </div>
          <div className="card text-center">
            <div className="mb-1 text-2xl font-bold text-accent">20+</div>
            <div className="text-sm text-secondary">Projects Completed</div>
          </div>
          <div className="card text-center">
            <div className="mb-1 text-2xl font-bold text-accent">10+</div>
            <div className="text-sm text-secondary">Technologies</div>
          </div>
        </div>
      </section>
    </div>
  );
}
