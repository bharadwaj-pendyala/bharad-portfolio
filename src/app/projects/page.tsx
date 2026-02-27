import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

type Project = {
  name: string;
  description: string;
  tech: string[];
  size: string;
  updated: string;
  github?: string;
  demo?: string;
  status: 'active' | 'archived' | 'private';
};

const projects: Project[] = [
  {
    name: 'terminal-portfolio',
    description:
      'Terminal-inspired portfolio with strong performance, accessibility, and responsive behavior.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    size: '324KB',
    updated: '2025-08-10',
    github: 'https://github.com/bharadwaj-pendyala/bharad-portfolio',
    demo: 'https://bharadwaj-pendyala.github.io/bharad-portfolio',
    status: 'active',
  },
  {
    name: 'task-manager-pro',
    description:
      'Task management platform with real-time collaboration, filtering, and team workflows.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    size: '512KB',
    updated: '2025-02-12',
    github: 'https://github.com/bharadwaj-pendyala',
    status: 'active',
  },
  {
    name: 'analytics-dashboard',
    description:
      'Data visualization and reporting tool built for operational monitoring and insights.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    size: '748KB',
    updated: '2024-11-03',
    status: 'private',
  },
];

function getStatusStyles(status: Project['status']): string {
  if (status === 'active') return 'text-green-600 dark:text-green-400';
  if (status === 'archived') return 'text-amber-600 dark:text-amber-400';
  return 'text-muted';
}

export default function Projects(): JSX.Element {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-8">
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="mb-4 border-b border-card-border pb-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/projects
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <TerminalCommand command="ls -la ~/projects/" />
          <TerminalOutput>
            <div className="space-y-4">
              <p className="m-0 max-w-3xl text-sm text-secondary">
                Selected projects focused on product quality, engineering rigor,
                and measurable user impact.
              </p>
              <div className="rounded-lg border border-card-border bg-background/40 p-4 font-mono text-sm">
                <div className="mb-2 grid grid-cols-3 gap-4 border-b border-card-border pb-2 text-xs uppercase tracking-wide text-muted">
                  <div>project</div>
                  <div>status</div>
                  <div>updated</div>
                </div>
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="grid grid-cols-3 gap-4 py-1 text-secondary"
                  >
                    <div className="text-accent">{project.name}</div>
                    <div className={getStatusStyles(project.status)}>
                      {project.status}
                    </div>
                    <div>{project.updated}</div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {projects.map((project) => (
        <div
          key={project.name}
          className="card hover:border-accent/40 mb-6 border-card-border bg-card-bg transition-colors"
        >
          <div className="space-y-4">
            <TerminalCommand
              command={`cat ~/projects/${project.name}/README.md`}
            />
            <TerminalOutput>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted">
                    <span>Size: {project.size}</span>
                    <span>Updated: {project.updated}</span>
                    <span className={getStatusStyles(project.status)}>
                      Status: {project.status}
                    </span>
                  </div>
                  <p className="leading-relaxed text-secondary">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-accent">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted/20 rounded-full px-3 py-1 font-mono text-sm text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-accent transition-colors hover:text-foreground"
                      >
                        → GitHub Repository
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-accent transition-colors hover:text-foreground"
                      >
                        → Live Demo
                      </a>
                    )}
                    {project.status === 'private' && (
                      <span className="font-mono text-muted">
                        → Repository access available on request
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </TerminalOutput>
          </div>
        </div>
      ))}

      <div className="card border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="find ~/projects -name '*.md' -type f | wc -l" />
          <TerminalOutput>
            <div className="space-y-2 font-mono text-sm">
              <div>3 project documentation files found</div>
              <div className="text-secondary">
                Each project includes setup details, context, and usage notes.
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>
    </div>
  );
}
