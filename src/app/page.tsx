import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold">Hi, I&apos;m Bharad</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary">
          I&apos;m a software engineer passionate about building great products
          and solving complex problems. I specialize in full-stack development
          with modern technologies and love creating intuitive user experiences.
        </p>
        <div className="flex justify-center space-x-8">
          {siteConfig.features.showProjects && (
            <Link href="/projects" className="text-primary hover:opacity-80">
              View Projects
            </Link>
          )}
          {siteConfig.features.showAbout && (
            <Link href="/about" className="text-primary hover:opacity-80">
              About Me
            </Link>
          )}
        </div>
      </section>

      {/* Latest Projects Section */}
      {siteConfig.features.showProjects && (
        <section className="mb-20">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Latest Projects
          </h2>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link href="/projects" className="hover:text-primary">
                  Personal Portfolio
                </Link>
              </h3>
              <p className="mb-4 text-secondary">
                A modern, responsive portfolio website with dark/light mode and
                SEO optimization.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="bg-muted/20 rounded-full px-4 py-1 text-sm text-secondary">
                  Next.js 14
                </span>
                <span className="bg-muted/20 rounded-full px-4 py-1 text-sm text-secondary">
                  TypeScript
                </span>
                <span className="bg-muted/20 rounded-full px-4 py-1 text-sm text-secondary">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link href="/projects" className="hover:text-primary">
                  Task Management App
                </Link>
              </h3>
              <p className="mb-4 text-secondary">
                A full-stack application with real-time updates and
                collaborative features.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="bg-muted/20 rounded-full px-4 py-1 text-sm text-secondary">
                  React
                </span>
                <span className="bg-muted/20 rounded-full px-4 py-1 text-sm text-secondary">
                  Node.js
                </span>
                <span className="bg-muted/20 rounded-full px-4 py-1 text-sm text-secondary">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts Section */}
      {siteConfig.features.showBlog && (
        <section>
          <h2 className="mb-6 text-center text-2xl font-bold">
            Latest Blog Posts
          </h2>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link href="/blog/post-1" className="hover:text-primary">
                  Blog Post 1
                </Link>
              </h3>
              <p className="mb-3 text-secondary">
                A brief excerpt from your first blog post that captures the
                reader&apos;s attention.
              </p>
              <time className="text-sm text-muted">March 19, 2024</time>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold">
                <Link href="/blog/post-2" className="hover:text-primary">
                  Blog Post 2
                </Link>
              </h3>
              <p className="mb-3 text-secondary">
                A brief excerpt from your second blog post that captures the
                reader&apos;s attention.
              </p>
              <time className="text-sm text-muted">March 18, 2024</time>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
