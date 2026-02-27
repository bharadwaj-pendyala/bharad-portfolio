import type { Metadata } from 'next';
import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Professional experience and qualifications',
};

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    period: 'Jan 2021 - Present',
    highlights: [
      'Led architecture and delivery for scalable web applications.',
      'Reduced release friction through CI/CD process improvements.',
      'Mentored engineers and supported hiring and technical interviews.',
    ],
    stack: 'React, Node.js, PostgreSQL, AWS, Docker',
  },
  {
    role: 'Software Engineer',
    company: 'StartupXYZ',
    period: 'Mar 2019 - Dec 2020',
    highlights: [
      'Delivered full-stack product features from design to production.',
      'Improved API and database performance through query optimization.',
      'Worked closely with product teams to ship roadmap priorities.',
    ],
    stack: 'React, Express.js, MongoDB, Redis',
  },
];

const skills = {
  frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
};

export default function CV(): JSX.Element {
  const email = siteConfig.social.email ?? 'bharadwajpendyala@gmail.com';

  return (
    <div className="container mx-auto max-w-5xl px-6 py-8">
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="mb-4 border-b border-card-border pb-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/cv
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <TerminalCommand command="head -20 CV.pdf" />
          <TerminalOutput>
            <div className="space-y-3">
              <h1 className="m-0 text-3xl font-bold text-foreground">
                Bharadwaj Pendyala
              </h1>
              <p className="m-0 font-mono text-accent">
                Software Engineer | Full-Stack Developer
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-secondary">
                {siteConfig.social.email && (
                  <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.social.email}
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
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="grep -A 5 'Professional Summary' CV.pdf" />
          <TerminalOutput>
            <p className="leading-relaxed text-secondary">
              Experienced software engineer with 5+ years building scalable web
              applications. Passionate about clean code, modern architectures,
              and creating exceptional user experiences. Proven track record in
              leading technical projects and mentoring development teams.
            </p>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="awk '/Experience/,/Education/ {print}' CV.pdf" />
          <TerminalOutput>
            <div className="space-y-5">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-lg border border-card-border bg-background/40 p-4"
                >
                  <h2 className="m-0 text-lg font-semibold text-foreground">
                    {item.role}
                  </h2>
                  <p className="m-0 mt-1 text-sm text-muted">
                    {item.company} • {item.period}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-secondary">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted">Tech: {item.stack}</p>
                </article>
              ))}
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="cat ~/.config/skills.json | jq '.'" />
          <TerminalOutput>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-3 font-mono text-sm font-semibold text-accent">
                  Frontend
                </h2>
                <ul className="space-y-1 text-sm text-secondary">
                  {skills.frontend.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-3 font-mono text-sm font-semibold text-accent">
                  Backend
                </h2>
                <ul className="space-y-1 text-sm text-secondary">
                  {skills.backend.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-card-border bg-background/40 p-4">
                <h2 className="m-0 mb-3 font-mono text-sm font-semibold text-accent">
                  Tools
                </h2>
                <ul className="space-y-1 text-sm text-secondary">
                  {skills.tools.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="sed -n '/Education/,/Skills/p' CV.pdf" />
          <TerminalOutput>
            <div className="rounded-lg border border-card-border bg-background/40 p-4">
              <h2 className="m-0 font-semibold text-foreground">
                Bachelor of Science in Computer Science
              </h2>
              <p className="m-0 mt-1 text-sm text-muted">
                University of Technology • 2015 - 2019
              </p>
              <p className="m-0 mt-2 text-sm text-secondary">
                Relevant Coursework: Data Structures, Algorithms, Database
                Systems, Software Engineering, Web Development, Computer
                Networks
              </p>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="ls -la ~/certifications/" />
          <TerminalOutput>
            <div className="space-y-1 text-sm text-secondary">
              <div>AWS Solutions Architect</div>
              <div>Advanced React Patterns</div>
              <div>TypeScript Professional</div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      <div className="card border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="open contact_for_full_cv.txt" />
          <TerminalOutput>
            <div className="space-y-4 text-center">
              <div className="text-sm text-secondary">
                For a complete version with references and detailed project
                descriptions
              </div>
              <a
                href={`mailto:${email}?subject=CV%20Request`}
                className="inline-flex rounded bg-accent px-6 py-2 font-mono text-sm text-background transition-opacity hover:opacity-90"
              >
                Request Full CV (PDF)
              </a>
            </div>
          </TerminalOutput>
        </div>
      </div>
    </div>
  );
}
