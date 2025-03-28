import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold">Hi, I&apos;m Bharad</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          I&apos;m a software engineer passionate about building great products.
          I love working with modern technologies and creating elegant solutions
          to complex problems.
        </p>
        <div className="flex justify-center space-x-8">
          {process.env['NEXT_PUBLIC_SHOW_PROJECTS'] === '1' && (
            <Link
              href="/projects"
              className="text-primary-color hover:opacity-80"
            >
              View Projects
            </Link>
          )}
          {process.env['NEXT_PUBLIC_SHOW_ABOUT'] === '1' && (
            <Link href="/about" className="text-primary-color hover:opacity-80">
              About Me
            </Link>
          )}
        </div>
      </section>

      {/* Latest Projects Section */}
      {process.env['NEXT_PUBLIC_SHOW_PROJECTS'] === '1' && (
        <section className="mb-20">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Latest Projects
          </h2>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link
                  href="/projects/project-1"
                  className="hover:text-primary-color"
                >
                  Project 1
                </Link>
              </h3>
              <p className="text-secondary-color mb-4">
                A brief description of your first project and its key features.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm dark:bg-gray-800">
                  React
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm dark:bg-gray-800">
                  TypeScript
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm dark:bg-gray-800">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link
                  href="/projects/project-2"
                  className="hover:text-primary-color"
                >
                  Project 2
                </Link>
              </h3>
              <p className="text-secondary-color mb-4">
                A brief description of your second project and its key features.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm dark:bg-gray-800">
                  Next.js
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm dark:bg-gray-800">
                  Node.js
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm dark:bg-gray-800">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts Section */}
      {process.env['NEXT_PUBLIC_SHOW_BLOG'] === '1' && (
        <section>
          <h2 className="mb-6 text-center text-2xl font-bold">
            Latest Blog Posts
          </h2>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link href="/blog/post-1" className="hover:text-primary-color">
                  Blog Post 1
                </Link>
              </h3>
              <p className="text-secondary-color mb-3">
                A brief excerpt from your first blog post that captures the
                reader&apos;s attention.
              </p>
              <time className="text-muted-color text-sm">March 19, 2024</time>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link href="/blog/post-2" className="hover:text-primary-color">
                  Blog Post 2
                </Link>
              </h3>
              <p className="text-secondary-color mb-3">
                A brief excerpt from your second blog post that captures the
                reader&apos;s attention.
              </p>
              <time className="text-muted-color text-sm">March 18, 2024</time>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
