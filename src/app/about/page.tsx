import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      {/* Terminal-style page header */}
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
            <div className="space-y-6">
              <div>
                <h1 className="mb-4 text-2xl font-bold text-foreground">
                  About Bharadwaj
                </h1>
                <p className="leading-relaxed text-secondary">
                  Passionate software engineer with 5+ years of experience
                  building scalable web applications and solving complex
                  technical challenges. I specialize in full-stack development
                  with modern technologies and have a keen interest in creating
                  elegant, efficient solutions.
                </p>
              </div>

              <div>
                <p className="leading-relaxed text-secondary">
                  Currently focused on React/Next.js ecosystems, cloud
                  technologies, and building developer-friendly tools. I enjoy
                  contributing to open source projects and staying up-to-date
                  with the latest industry trends and best practices.
                </p>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Skills Terminal */}
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="ls -la ~/skills/" />
          <TerminalOutput>
            <div className="space-y-2 font-mono text-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-accent">
                    Frontend Technologies
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>JavaScript / TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>React / Next.js</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Tailwind CSS / CSS3</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>HTML5 / Responsive Design</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-accent">
                    Backend & Database
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Node.js / Express</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>Python / Django</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>PostgreSQL / MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500">✓</span>
                      <span>REST APIs / GraphQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Tools & DevOps */}
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="which git docker aws" />
          <TerminalOutput>
            <div className="font-mono text-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-accent">
                    Development Tools
                  </h3>
                  <div className="space-y-1">
                    <div>/usr/bin/git</div>
                    <div>/usr/local/bin/docker</div>
                    <div>/usr/local/bin/code</div>
                    <div>/usr/local/bin/npm</div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-accent">
                    Cloud & DevOps
                  </h3>
                  <div className="space-y-1">
                    <div>/usr/local/bin/aws</div>
                    <div>/usr/local/bin/vercel</div>
                    <div>/usr/local/bin/terraform</div>
                    <div>/usr/bin/CI/CD pipelines</div>
                  </div>
                </div>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Experience */}
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="cat ~/experience.log | tail -10" />
          <TerminalOutput>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-sm text-muted">
                  TechCorp Inc. • 2021 - Present
                </p>
                <ul className="mt-2 space-y-1 text-sm text-secondary">
                  <li>
                    • Led development of microservices architecture serving 1M+
                    users
                  </li>
                  <li>
                    • Implemented CI/CD pipelines reducing deployment time by
                    60%
                  </li>
                  <li>
                    • Mentored 3 junior developers and conducted technical
                    interviews
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-muted pl-4">
                <h3 className="font-semibold text-foreground">
                  Software Engineer
                </h3>
                <p className="text-sm text-muted">StartupXYZ • 2019 - 2021</p>
                <ul className="mt-2 space-y-1 text-sm text-secondary">
                  <li>
                    • Built full-stack applications using React and Node.js
                  </li>
                  <li>
                    • Optimized database queries improving performance by 40%
                  </li>
                  <li>
                    • Collaborated with product team on feature specifications
                  </li>
                </ul>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Contact */}
      <div className="card border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="grep -r 'contact' ~/social/" />
          <TerminalOutput>
            <div className="space-y-2 font-mono text-sm">
              <div>
                ~/social/github:{' '}
                <a
                  href="https://github.com/bharadwaj-pendyala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  bharadwaj-pendyala
                </a>
              </div>
              <div>
                ~/social/linkedin:{' '}
                <a
                  href="https://www.linkedin.com/in/bharadwaj-pendyala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  bharadwaj-pendyala
                </a>
              </div>
              <div>
                ~/social/email:{' '}
                <a
                  href="mailto:bharadwajpendyala@gmail.com"
                  className="text-accent hover:underline"
                >
                  bharadwajpendyala@gmail.com
                </a>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>
    </div>
  );
}
