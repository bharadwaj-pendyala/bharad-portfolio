import Link from 'next/link';

// Define the static paths for blog posts
export async function generateStaticParams() {
  // Available blog post slugs
  return [{ slug: 'post-1' }, { slug: 'post-2' }, { slug: 'post-3' }];
}

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({
  params: _params,
}: BlogPostProps): JSX.Element {
  // Future: Implement MDX content loading based on params.slug
  // Consider using next-mdx-remote or contentlayer for blog posts
  // Currently params is not used but will be needed for dynamic content loading

  // Content loaded based on slug parameter
  // Future: Remove this once actual content loading is implemented
  return (
    <div className="container mx-auto max-w-4xl px-6 py-8">
      <article className="prose mx-auto max-w-none dark:prose-invert">
        <div className="mb-8">
          <Link
            href="/blog"
            className="font-mono text-secondary transition-colors hover:text-foreground"
          >
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="mb-4 flex items-center space-x-4 font-mono text-sm text-muted">
            <time dateTime="2024-03-19">March 19, 2024</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Building a Modern Portfolio with Next.js and Tailwind CSS
          </h1>
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-muted px-2 py-1 font-mono text-sm text-foreground">
              Next.js
            </span>
            <span className="rounded bg-muted px-2 py-1 font-mono text-sm text-foreground">
              Tailwind CSS
            </span>
            <span className="rounded bg-muted px-2 py-1 font-mono text-sm text-foreground">
              Web Development
            </span>
          </div>
        </header>

        <div className="space-y-6">
          <p className="font-mono text-muted">
            In this comprehensive guide, we&apos;ll explore how to create a
            modern, performant portfolio website using Next.js and Tailwind CSS.
            We&apos;ll cover everything from initial setup to deployment,
            including best practices and tips for creating a great user
            experience.
          </p>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Getting Started
          </h2>
          <p className="font-mono text-muted">
            First, let&apos;s set up our development environment. We&apos;ll
            need Node.js installed on our machine and a code editor of our
            choice. Once we have those, we can create a new Next.js project
            using the following command:
          </p>

          <pre className="overflow-x-auto rounded-lg bg-muted p-4">
            <code className="font-mono text-foreground">
              npx create-next-app@latest portfolio --typescript --tailwind
              --eslint
            </code>
          </pre>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Project Structure
          </h2>
          <p className="font-mono text-muted">
            Next.js 13+ uses the App Router by default, which provides a more
            intuitive and powerful way to structure our application. Here&apos;s
            how we&apos;ll organize our project:
          </p>

          <ul className="space-y-2">
            <li className="font-mono">
              <code className="rounded bg-muted px-2 py-1 text-accent">
                src/app
              </code>{' '}
              - Contains all our pages and layouts
            </li>
            <li className="font-mono">
              <code className="rounded bg-muted px-2 py-1 text-accent">
                src/components
              </code>{' '}
              - Reusable React components
            </li>
            <li className="font-mono">
              <code className="rounded bg-muted px-2 py-1 text-accent">
                src/styles
              </code>{' '}
              - Global styles and Tailwind configuration
            </li>
            <li className="font-mono">
              <code className="rounded bg-muted px-2 py-1 text-accent">
                public
              </code>{' '}
              - Static assets like images and fonts
            </li>
          </ul>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Creating the Layout
          </h2>
          <p className="font-mono text-muted">
            The layout component will be the foundation of our portfolio. It
            includes the navigation bar, footer, and any other elements that
            should appear on every page. We&apos;ll use Tailwind CSS for styling
            and make sure it&apos;s responsive and accessible.
          </p>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Building the Home Page
          </h2>
          <p className="font-mono text-muted">
            The home page is the first impression visitors will have of our
            portfolio. We&apos;ll create a hero section with a brief
            introduction, followed by sections for featured projects and recent
            blog posts.
          </p>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Adding Projects and Blog Sections
          </h2>
          <p className="font-mono text-muted">
            We&apos;ll create dedicated pages for projects and blog posts, using
            dynamic routing to handle individual items. Each project will have
            its own page with detailed information, and blog posts will be
            written in Markdown for easy content management.
          </p>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Optimization and Deployment
          </h2>
          <p className="font-mono text-muted">
            Next.js provides excellent performance optimizations out of the box,
            including:
          </p>

          <ul className="space-y-2 font-mono">
            <li>• Automatic image optimization</li>
            <li>• Font optimization</li>
            <li>• Route prefetching</li>
            <li>• Static and server-side rendering</li>
          </ul>

          <p className="font-mono text-muted">
            For deployment, we can use Vercel, which provides the best
            experience for Next.js applications with automatic deployments and
            excellent performance.
          </p>

          <h2 className="font-mono text-2xl font-bold text-foreground">
            Conclusion
          </h2>
          <p className="font-mono text-muted">
            Building a portfolio website with Next.js and Tailwind CSS is a
            great way to showcase your work and skills. The combination of these
            technologies provides a powerful and flexible foundation for
            creating beautiful, performant websites.
          </p>
        </div>

        <footer className="mt-12 border-t border-border pt-8">
          <div className="flex items-center justify-between">
            <div className="font-mono text-muted">Written by Bharad</div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/bharadwaj-pendyala"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-muted transition-colors hover:text-accent"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/bharadwaj-pendyala"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-muted transition-colors hover:text-accent"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
