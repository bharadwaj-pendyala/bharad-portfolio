import Link from 'next/link';
import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

export default function Blog() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      {/* Terminal Header */}
      <div className="card mb-8 border-card-border bg-card-bg">
        <div className="mb-4 border-b border-card-border pb-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-muted">
              bharad@portfolio:~/posts
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <TerminalCommand command="ls -la ~/posts/" />
          <TerminalOutput>
            <div className="space-y-2">
              <div className="mb-4 text-sm text-secondary">
                Thoughts, tutorials, and insights about software development,
                modern technologies, and problem-solving.
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="space-y-12">
        {/* Blog Post 1 */}
        <article className="group">
          <Link href="/blog/post-1" className="block">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-03-19">March 19, 2024</time>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                Building a Modern Portfolio with Next.js and Tailwind CSS
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to create a beautiful and performant portfolio website
                using Next.js and Tailwind CSS. This guide covers everything
                from setup to deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Next.js
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Tailwind CSS
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Web Development
                </span>
              </div>
            </div>
          </Link>
        </article>

        {/* Blog Post 2 */}
        <article className="group">
          <Link href="/blog/post-2" className="block">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-03-18">March 18, 2024</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                The Future of Web Development: Trends to Watch in 2024
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore the latest trends in web development, from AI
                integration to new frameworks and tools. Stay ahead of the curve
                with these insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Web Development
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Technology
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Future Trends
                </span>
              </div>
            </div>
          </Link>
        </article>

        {/* Blog Post 3 */}
        <article className="group">
          <Link href="/blog/post-3" className="block">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime="2024-03-17">March 17, 2024</time>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                Best Practices for Building Scalable Applications
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Discover the key principles and practices for building
                applications that can grow with your user base. Learn about
                architecture, performance, and maintainability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Architecture
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Performance
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Best Practices
                </span>
              </div>
            </div>
          </Link>
        </article>
      </section>
    </div>
  );
}
