import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Bharadwaj Pendyala - Software Engineer and Full Stack Developer',
};

export default function About() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <div className="prose prose-gray mx-auto dark:prose-invert">
        <h1 className="mb-8 text-3xl font-bold text-foreground">About</h1>

        <div className="space-y-6 leading-relaxed text-muted">
          <p>
            I&apos;m a passionate software engineer with 5+ years of experience
            building scalable web applications and solving complex technical
            challenges. I specialize in full-stack development with modern
            technologies and have a keen interest in creating elegant, efficient
            solutions.
          </p>

          <p>
            Currently focused on React/Next.js ecosystems, cloud technologies,
            and building developer-friendly tools. I enjoy contributing to open
            source projects and staying up-to-date with the latest industry
            trends and best practices.
          </p>

          <p>
            When I&apos;m not coding, you can find me exploring new
            technologies, reading tech blogs, or working on side projects that
            challenge me to learn something new.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-medium text-foreground">Frontend</h3>
              <ul className="space-y-1 text-sm text-muted">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-foreground">
                Backend & Tools
              </h3>
              <ul className="space-y-1 text-sm text-muted">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Git / Docker / AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
