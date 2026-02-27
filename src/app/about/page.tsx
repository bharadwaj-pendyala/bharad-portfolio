import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';
import { siteConfig } from '@/config/site';

const strengths = [
  'Build production-grade full-stack apps with TypeScript and modern web tooling',
  'Design APIs and data flows that scale without sacrificing developer velocity',
  'Improve UX quality through performance, accessibility, and interaction polish',
  'Collaborate across product and engineering to ship reliable features quickly',
];

const stack = {
  frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
  delivery: ['GitHub Actions', 'Docker', 'AWS', 'Vercel'],
};

export default function About(): JSX.Element {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-8">
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="mb-4 border-b border-card-border pb-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/about
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <TerminalCommand command="cat About.md" />
          <TerminalOutput>
            <div className="space-y-4">
              <h1 className="m-0 text-3xl font-bold text-foreground">
                About Bharadwaj
              </h1>
              <p className="m-0 max-w-3xl text-base leading-relaxed text-secondary">
                I am a software engineer with 5+ years of experience building
                full-stack products. My focus is on maintainable architecture,
                fast user experiences, and practical engineering that ships.
              </p>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="cat strengths.txt" />
          <TerminalOutput>
            <ul className="space-y-3 pl-4 font-mono text-sm">
              {strengths.map((strength) => (
                <li key={strength} className="text-secondary">
                  <span className="mr-2 text-accent">•</span>
                  {strength}
                </li>
              ))}
            </ul>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="jq '.stack' profile.json" />
          <TerminalOutput>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-3 font-mono text-sm font-semibold text-accent">
                  Frontend
                </h2>
                <ul className="space-y-1 text-sm text-secondary">
                  {stack.frontend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-3 font-mono text-sm font-semibold text-accent">
                  Backend
                </h2>
                <ul className="space-y-1 text-sm text-secondary">
                  {stack.backend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-3 font-mono text-sm font-semibold text-accent">
                  Delivery
                </h2>
                <ul className="space-y-1 text-sm text-secondary">
                  {stack.delivery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="tail -n 2 experience.log" />
          <TerminalOutput>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-2 text-base font-semibold text-foreground">
                  Senior Software Engineer
                </h2>
                <p className="m-0 text-sm text-muted">2021 - Present</p>
                <ul className="mt-3 space-y-1 text-sm text-secondary">
                  <li>Led development for scalable web applications.</li>
                  <li>Improved deployment speed through CI/CD workflows.</li>
                  <li>Mentored engineers and supported delivery quality.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-2 text-base font-semibold text-foreground">
                  Software Engineer
                </h2>
                <p className="m-0 text-sm text-muted">2019 - 2021</p>
                <ul className="mt-3 space-y-1 text-sm text-secondary">
                  <li>Built full-stack features with React and Node.js.</li>
                  <li>Optimized APIs and database access patterns.</li>
                  <li>Partnered with product teams on roadmap execution.</li>
                </ul>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="ls ~/contact" />
          <TerminalOutput>
            <div className="flex flex-wrap gap-4 font-mono text-sm text-secondary">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social.email && (
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="transition-colors hover:text-accent"
                >
                  Email
                </a>
              )}
            </div>
          </TerminalOutput>
        </div>
      </div>
    </div>
  );
}
