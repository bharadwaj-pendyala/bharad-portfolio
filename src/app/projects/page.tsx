import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of projects and contributions',
};

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
      name: 'Terminal Portfolio',
      description:
        'Clean, minimal developer portfolio inspired by terminal interfaces',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/bharadwaj-pendyala/bharad-portfolio',
      demo: 'https://bharadwaj-pendyala.github.io/bharad-portfolio',
      status: 'active',
    },
    {
      name: 'Task Manager Pro',
      description:
        'Full-stack task management application with real-time collaboration',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/bharadwaj-pendyala',
      status: 'active',
    },
    {
      name: 'Analytics Dashboard',
      description:
        'Data visualization platform with interactive charts and reporting',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      status: 'private',
    },
  ];

  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <div className="prose prose-gray mx-auto dark:prose-invert">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Projects</h1>

        <p className="mb-12 text-muted">
          A collection of projects showcasing full-stack development, modern
          architectures, and problem-solving approaches.
        </p>

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  {project.name}
                </h2>
                <div className="flex items-center space-x-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>

              <p className="leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-muted/10 rounded px-2 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
