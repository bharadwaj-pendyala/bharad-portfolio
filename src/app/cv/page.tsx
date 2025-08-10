import type { Metadata } from 'next';
import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Professional experience and qualifications',
};

export default function CV(): JSX.Element {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      {/* Terminal Header */}
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
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-foreground">
                Bharadwaj Pendyala
              </h1>
              <div className="font-mono text-accent">
                Software Engineer // Full Stack Developer
              </div>
              <div className="text-sm text-secondary">
                📧 bharadwajpendyala@gmail.com | 🌐 LinkedIn: bharadwaj-pendyala
                | 💻 GitHub: bharadwaj-pendyala
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Professional Summary */}
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

      {/* Experience */}
      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="awk '/Experience/,/Education/ {print}' CV.pdf" />
          <TerminalOutput>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-sm text-muted">
                  TechCorp Inc. • Jan 2021 - Present
                </p>
                <ul className="mt-2 space-y-1 font-mono text-sm text-secondary">
                  <li>
                    • Led development of microservices architecture handling 1M+
                    daily requests
                  </li>
                  <li>
                    • Reduced deployment time by 60% through CI/CD pipeline
                    optimization
                  </li>
                  <li>
                    • Mentored 3 junior developers and conducted 20+ technical
                    interviews
                  </li>
                  <li>
                    • Tech: React, Node.js, PostgreSQL, AWS, Docker, Kubernetes
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-muted pl-4">
                <h3 className="font-semibold text-foreground">
                  Software Engineer
                </h3>
                <p className="text-sm text-muted">
                  StartupXYZ • Mar 2019 - Dec 2020
                </p>
                <ul className="mt-2 space-y-1 font-mono text-sm text-secondary">
                  <li>
                    • Built full-stack applications using React and Node.js
                    ecosystem
                  </li>
                  <li>
                    • Improved database performance by 40% through query
                    optimization
                  </li>
                  <li>
                    • Collaborated with product team on feature specifications
                    and user stories
                  </li>
                  <li>• Tech: React, Express.js, MongoDB, Redis, Jest</li>
                </ul>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="cat ~/.config/skills.json | jq '.'" />
          <TerminalOutput>
            <div className="font-mono text-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-2 font-semibold text-accent">
                    &quot;frontend&quot;: [
                  </div>
                  <div className="ml-4 space-y-1">
                    <div>&quot;JavaScript/TypeScript&quot;,</div>
                    <div>&quot;React/Next.js&quot;,</div>
                    <div>&quot;Tailwind CSS&quot;,</div>
                    <div>&quot;HTML5/CSS3&quot;</div>
                  </div>
                  <div>],</div>
                </div>

                <div>
                  <div className="mb-2 font-semibold text-accent">
                    &quot;backend&quot;: [
                  </div>
                  <div className="ml-4 space-y-1">
                    <div>&quot;Node.js/Express&quot;,</div>
                    <div>&quot;Python/Django&quot;,</div>
                    <div>&quot;PostgreSQL/MongoDB&quot;,</div>
                    <div>&quot;REST APIs/GraphQL&quot;</div>
                  </div>
                  <div>],</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-2 font-semibold text-accent">
                  &quot;tools&quot;: [
                </div>
                <div className="ml-4">
                  &quot;Git&quot;, &quot;Docker&quot;, &quot;AWS&quot;,
                  &quot;Vercel&quot;, &quot;CI/CD&quot;, &quot;Jest&quot;,
                  &quot;Cypress&quot;
                </div>
                <div>]</div>
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Education */}
      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="sed -n '/Education/,/Skills/p' CV.pdf" />
          <TerminalOutput>
            <div className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold text-foreground">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm text-muted">
                University of Technology • 2015 - 2019
              </p>
              <p className="mt-2 text-sm text-secondary">
                Relevant Coursework: Data Structures, Algorithms, Database
                Systems, Software Engineering, Web Development, Computer
                Networks
              </p>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Certifications */}
      <div className="card mb-6 border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="ls -la ~/certifications/" />
          <TerminalOutput>
            <div className="space-y-1 font-mono text-sm">
              <div>
                drwxr-xr-x 2 bharad staff 64B Dec 15 2023
                aws-solutions-architect/
              </div>
              <div>
                drwxr-xr-x 2 bharad staff 64B Nov 22 2023
                react-advanced-patterns/
              </div>
              <div>
                drwxr-xr-x 2 bharad staff 64B Oct 18 2023
                typescript-professional/
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Download Action */}
      <div className="card border-card-border bg-card-bg">
        <div className="space-y-4">
          <TerminalCommand command="curl -O https://bharad.dev/cv/download" />
          <TerminalOutput>
            <div className="space-y-4 text-center">
              <div className="text-sm text-secondary">
                For a complete version with references and detailed project
                descriptions
              </div>
              <button className="rounded bg-accent px-6 py-2 font-mono text-sm text-background transition-opacity hover:opacity-90">
                Download Full CV (PDF)
              </button>
            </div>
          </TerminalOutput>
        </div>
      </div>
    </div>
  );
}
