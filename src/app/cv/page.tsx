import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Professional experience and qualifications',
};

export default function CV(): JSX.Element {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Curriculum Vitae</h1>

        {/* Personal Info */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
          <div className="space-y-2 text-secondary">
            <p>
              <strong>Name:</strong> Bharadwaj Pendyala
            </p>
            <p>
              <strong>Role:</strong> Software Engineer // Full Stack Developer
            </p>
            <p>
              <strong>Location:</strong> [Your Location]
            </p>
            <p>
              <strong>Email:</strong> bharadwajpendyala@gmail.com
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold">Software Engineer</h3>
              <p className="mb-2 text-sm text-muted">
                [Company Name] • [Start Date] - Present
              </p>
              <ul className="list-inside list-disc space-y-1 text-secondary">
                <li>
                  Developed and maintained web applications using modern
                  technologies
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality solutions
                </li>
                <li>
                  Implemented responsive UI components and optimized application
                  performance
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-muted pl-6">
              <h3 className="font-semibold">[Previous Role]</h3>
              <p className="mb-2 text-sm text-muted">
                [Previous Company] • [Start Date] - [End Date]
              </p>
              <ul className="list-inside list-disc space-y-1 text-secondary">
                <li>Key achievement or responsibility</li>
                <li>Another important contribution</li>
                <li>Technology or methodology implemented</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">Education</h2>
          <div className="border-l-2 border-primary pl-6">
            <h3 className="font-semibold">[Degree Name]</h3>
            <p className="mb-2 text-sm text-muted">
              [University Name] • [Graduation Year]
            </p>
            <p className="text-secondary">
              [Relevant coursework or achievements]
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-medium">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  React
                </span>
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  Next.js
                </span>
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  TypeScript
                </span>
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  Node.js
                </span>
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  Python
                </span>
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  PostgreSQL
                </span>
                <span className="bg-muted/20 rounded-full px-3 py-1 text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Download link */}
        <section className="text-center">
          <p className="mb-4 text-sm text-muted">
            For a complete version, please download my CV
          </p>
          <button className="rounded bg-primary px-6 py-2 text-white transition-opacity hover:opacity-90">
            Download CV (PDF)
          </button>
        </section>
      </div>
    </div>
  );
}
