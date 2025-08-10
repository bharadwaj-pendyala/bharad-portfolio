import EnhancedTerminalHero from '@/components/EnhancedTerminalHero';
import EnhancedStatsSection from '@/components/EnhancedStatsSection';
import NavigationCards from '@/components/NavigationCards';

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-8">
      {/* Enhanced Terminal Hero Section */}
      <section className="mb-20">
        <EnhancedTerminalHero />
      </section>

      {/* Navigation Cards with Professional Enhancement */}
      <section className="mb-20">
        <div className="card border-card-border bg-card-bg">
          <div className="mb-6 flex items-center space-x-2 border-b border-card-border pb-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/navigate
            </span>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-sm">
              <span className="text-accent">$</span>
              <span className="ml-2 text-foreground">ls -la ~/portfolio</span>
            </div>

            <div className="pl-4">
              <p className="mb-6 text-sm text-muted">
                Explore different sections of my professional portfolio. Each
                directory contains detailed information about my work and
                expertise.
              </p>
              <NavigationCards />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="mb-20">
        <EnhancedStatsSection />
      </section>

      {/* Professional Summary */}
      <section className="mb-20">
        <div className="card border-card-border bg-card-bg">
          <div className="mb-6 flex items-center space-x-2 border-b border-card-border pb-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/summary
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Technical Focus */}
            <div className="space-y-4">
              <div className="font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="ml-2 text-foreground">
                  cat technical_focus.md
                </span>
              </div>

              <div className="space-y-3 pl-4">
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  🎯 Technical Excellence
                </h3>
                <ul className="space-y-2 font-mono text-sm text-muted">
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Full-stack development with modern JavaScript/TypeScript
                      ecosystem
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Scalable architecture design and microservices
                      implementation
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      DevOps practices including CI/CD, containerization, and
                      cloud deployment
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Performance optimization and user experience enhancement
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Impact */}
            <div className="space-y-4">
              <div className="font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="ml-2 text-foreground">
                  grep -i &quot;impact&quot; career.log
                </span>
              </div>

              <div className="space-y-3 pl-4">
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  💼 Professional Impact
                </h3>
                <ul className="space-y-2 font-mono text-sm text-muted">
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Led development teams in delivering complex projects on
                      time and within budget
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Improved application performance by 40% through
                      optimization strategies
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Mentored junior developers and established coding best
                      practices
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1 text-accent">•</span>
                    <span>
                      Contributed to open-source projects with 1000+ GitHub
                      stars
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
