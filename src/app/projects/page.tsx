import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: 'active' | 'archived' | 'private';
};

export default function Projects() {
  const projects: Project[] = [
    {
      name: 'terminal-portfolio',
      description:
        'Terminal-inspired developer portfolio with animated typing effects and modern tech stack',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/bharadwaj-pendyala/bharad-portfolio',
      demo: 'https://bharadwaj-pendyala.github.io/bharad-portfolio',
      status: 'active',
    },
    {
      name: 'task-manager-pro',
      description:
        'Full-stack task management application with real-time collaboration and advanced filtering',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/bharadwaj-pendyala',
      status: 'active',
    },
    {
      name: 'analytics-dashboard',
      description:
        'Comprehensive data visualization platform with interactive charts and automated reporting',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      status: 'private',
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      {/* Header Terminal */}
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
            <div className="space-y-2">
              <div className="mb-4 text-sm text-secondary">
                A collection of projects showcasing full-stack development,
                modern architectures, and problem-solving approaches.
              </div>
              <div className="font-mono text-sm">
                <div className="mb-2 grid grid-cols-4 gap-4 border-b border-muted pb-2 text-muted">
                  <div>permissions</div>
                  <div>size</div>
                  <div>modified</div>
                  <div>name</div>
                </div>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="hover:bg-muted/10 grid grid-cols-4 gap-4 py-1 text-secondary transition-colors"
                  >
                    <div className="text-green-500">
                      {project.status === 'active'
                        ? 'drwxr-xr-x'
                        : project.status === 'private'
                          ? 'drw-------'
                          : 'drwxr--r--'}
                    </div>
                    <div>{Math.floor(Math.random() * 900 + 100)}KB</div>
                    <div>Dec {Math.floor(Math.random() * 30 + 1)}</div>
                    <div className="text-accent transition-colors hover:text-foreground">
                      {project.name}/
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Project Details */}
      {projects.map((project, index) => (
        <div key={index} className="card mb-6 border-card-border bg-card-bg">
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
                  <div className="flex items-center space-x-4 text-sm">
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
                        → Private Repository
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </TerminalOutput>
          </div>
        </div>
      ))}

      {/* Additional Commands */}
      <div className="card border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="find ~/projects -name '*.md' -type f | wc -l" />
          <TerminalOutput>
            <div className="space-y-2 font-mono text-sm">
              <div>3 project documentation files found</div>
              <div className="text-secondary">
                Each project includes comprehensive documentation, setup
                instructions, and usage examples.
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>
    </div>
  );
}
