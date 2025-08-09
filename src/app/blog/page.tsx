import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights about software development',
};

export default function Blog() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <div className="prose prose-gray mx-auto dark:prose-invert">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Blog</h1>

        <p className="mb-12 text-muted">
          Thoughts, tutorials, and insights about software development, modern
          technologies, and problem-solving.
        </p>

        {/* Blog Posts */}
        <div className="space-y-12">
          {/* Blog Post 1 */}
          <article className="group">
            <Link href="/blog/post-1" className="block">
              <div className="space-y-3">
                <time className="text-sm text-muted">March 19, 2024</time>
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-muted">
                  Building a Modern Portfolio with Next.js and Tailwind CSS
                </h2>
                <p className="leading-relaxed text-muted">
                  Learn how to create a beautiful and performant portfolio
                  website using Next.js and Tailwind CSS. This guide covers
                  everything from setup to deployment.
                </p>
              </div>
            </Link>
          </article>

          {/* Blog Post 2 */}
          <article className="group">
            <Link href="/blog/post-2" className="block">
              <div className="space-y-3">
                <time className="text-sm text-muted">March 18, 2024</time>
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-muted">
                  The Future of Web Development: Trends to Watch in 2024
                </h2>
                <p className="leading-relaxed text-muted">
                  Explore the latest trends in web development, from AI
                  integration to new frameworks and tools. Stay ahead of the
                  curve with these insights.
                </p>
              </div>
            </Link>
          </article>

          {/* Blog Post 3 */}
          <article className="group">
            <Link href="/blog/post-3" className="block">
              <div className="space-y-3">
                <time className="text-sm text-muted">March 17, 2024</time>
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-muted">
                  Best Practices for Building Scalable Applications
                </h2>
                <p className="leading-relaxed text-muted">
                  Discover the key principles and practices for building
                  applications that can grow with your user base. Learn about
                  architecture, performance, and maintainability.
                </p>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}
