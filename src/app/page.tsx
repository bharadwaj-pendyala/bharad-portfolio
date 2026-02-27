import EnhancedTerminalHero from '@/components/EnhancedTerminalHero';
import EnhancedStatsSection from '@/components/EnhancedStatsSection';
import NavigationCards from '@/components/NavigationCards';

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-10">
      <section className="mb-14">
        <EnhancedTerminalHero />
      </section>

      <section className="mb-14">
        <div className="card border-card-border bg-card-bg">
          <div className="mb-5 border-b border-card-border pb-4 font-mono text-sm">
            <div>
              <span className="text-accent">$</span>
              <span className="ml-2 text-foreground">ls -la ~/portfolio</span>
            </div>
          </div>

          <div className="mb-6 max-w-2xl space-y-2">
            <h2 className="m-0 font-mono text-xl text-foreground">
              Explore by section
            </h2>
            <p className="m-0 text-sm text-muted">
              Jump directly to projects, writing, resume, and background with
              faster navigation cards.
            </p>
          </div>
          <NavigationCards />
        </div>
      </section>

      <section className="mb-14">
        <EnhancedStatsSection />
      </section>

      <section className="mb-16">
        <div className="card border-card-border bg-card-bg">
          <div className="mb-5 border-b border-card-border pb-4 font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="ml-2 text-foreground">cat summary.md</span>
          </div>

          <div className="mb-6 max-w-2xl">
            <h2 className="m-0 font-mono text-xl text-foreground">
              Technical and product impact
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="ml-2 text-foreground">
                  cat technical_focus.md
                </span>
              </div>

              <div className="space-y-3 pl-4">
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  Technical Excellence
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

            <div className="space-y-4">
              <div className="font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="ml-2 text-foreground">
                  grep -i &quot;impact&quot; career.log
                </span>
              </div>

              <div className="space-y-3 pl-4">
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  Professional Impact
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
