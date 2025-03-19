import Layout from '@/components/Layout';

export default function Projects() {
  return (
    <Layout>
      <div className="space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            A collection of projects I've worked on, ranging from personal experiments to production applications.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* Project 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800">
                {/* Add project screenshot or placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Screenshot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Project Name
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A detailed description of the project, its purpose, and the technologies used.
                  Explain what makes this project unique and what problems it solves.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    React
                  </span>
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    Node.js
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/yourusername/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://project-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800">
                {/* Add project screenshot or placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Screenshot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Project Name
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A detailed description of the project, its purpose, and the technologies used.
                  Explain what makes this project unique and what problems it solves.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    Next.js
                  </span>
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    PostgreSQL
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/yourusername/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://project-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800">
                {/* Add project screenshot or placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Screenshot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Project Name
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A detailed description of the project, its purpose, and the technologies used.
                  Explain what makes this project unique and what problems it solves.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    Python
                  </span>
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    Django
                  </span>
                  <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
                    AWS
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/yourusername/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://project-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}