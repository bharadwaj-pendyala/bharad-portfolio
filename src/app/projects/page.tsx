export default function Projects() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <div className="space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            A collection of projects I&apos;ve worked on, ranging from personal
            experiments to production applications.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* Portfolio Website */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Portfolio Website
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                  Personal Portfolio
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A modern, responsive portfolio website built with Next.js 14
                  and Tailwind CSS. Features dark/light mode, SEO optimization,
                  and a clean design showcasing projects and blog posts.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Next.js 14
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    TypeScript
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Tailwind CSS
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/bharadwaj-pendyala/bharad-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://bharadwaj-pendyala.github.io/bharad-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Task Management App */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Task Manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                  Task Management App
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A full-stack task management application with real-time
                  updates, user authentication, and collaborative features.
                  Built with modern web technologies and deployed on Vercel.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    React
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Node.js
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    MongoDB
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/bharadwaj-pendyala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <span className="text-gray-400 dark:text-gray-600">
                    Demo Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analytics Dashboard */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-800 dark:to-gray-900">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Analytics Platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                  Data Analytics Dashboard
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A comprehensive data visualization platform for business
                  analytics. Features interactive charts, real-time data
                  processing, and automated reporting capabilities.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Python
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    FastAPI
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    PostgreSQL
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/bharadwaj-pendyala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <span className="text-gray-400 dark:text-gray-600">
                    Private Repository
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
