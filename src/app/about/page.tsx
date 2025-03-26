import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Skills Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>PostgreSQL</li>
          </ul>
        </section>

        {/* Tools Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Tools</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Senior Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Company Name</p>
              <p className="text-gray-600 dark:text-gray-400">2020 - Present</p>
              <p className="mt-2">
                Led the development of key features and improvements for the
                company's main product. Worked with a team of engineers to
                deliver high-quality software solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">Company Name</p>
              <p className="text-gray-600 dark:text-gray-400">2018 - 2020</p>
              <p className="mt-2">
                Developed and maintained web applications using modern
                technologies. Collaborated with cross-functional teams to
                deliver features on time.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-400">University Name</p>
            <p className="text-gray-600 dark:text-gray-400">2014 - 2018</p>
          </div>
        </section>

        {/* Contact Links */}
        <section className="pt-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
