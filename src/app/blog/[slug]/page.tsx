import Layout from '@/components/Layout';
import Link from 'next/link';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <Layout>
      <article className="prose dark:prose-invert max-w-none">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time dateTime="2024-03-19">March 19, 2024</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Building a Modern Portfolio with Next.js and Tailwind CSS
          </h1>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
              Next.js
            </span>
            <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">
              Web Development
            </span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            In this comprehensive guide, we'll explore how to create a modern, performant portfolio website
            using Next.js and Tailwind CSS. We'll cover everything from initial setup to deployment,
            including best practices and tips for creating a great user experience.
          </p>

          <h2>Getting Started</h2>
          <p>
            First, let's set up our development environment. We'll need Node.js installed on our machine
            and a code editor of our choice. Once we have those, we can create a new Next.js project
            using the following command:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>npx create-next-app@latest portfolio --typescript --tailwind --eslint</code>
          </pre>

          <h2>Project Structure</h2>
          <p>
            Next.js 13+ uses the App Router by default, which provides a more intuitive and powerful
            way to structure our application. Here's how we'll organize our project:
          </p>

          <ul>
            <li>
              <code>src/app</code> - Contains all our pages and layouts
            </li>
            <li>
              <code>src/components</code> - Reusable React components
            </li>
            <li>
              <code>src/styles</code> - Global styles and Tailwind configuration
            </li>
            <li>
              <code>public</code> - Static assets like images and fonts
            </li>
          </ul>

          <h2>Creating the Layout</h2>
          <p>
            The layout component will be the foundation of our portfolio. It includes the navigation
            bar, footer, and any other elements that should appear on every page. We'll use Tailwind
            CSS for styling and make sure it's responsive and accessible.
          </p>

          <h2>Building the Home Page</h2>
          <p>
            The home page is the first impression visitors will have of our portfolio. We'll create
            a hero section with a brief introduction, followed by sections for featured projects and
            recent blog posts.
          </p>

          <h2>Adding Projects and Blog Sections</h2>
          <p>
            We'll create dedicated pages for projects and blog posts, using dynamic routing to handle
            individual items. Each project will have its own page with detailed information, and blog
            posts will be written in Markdown for easy content management.
          </p>

          <h2>Optimization and Deployment</h2>
          <p>
            Next.js provides excellent performance optimizations out of the box, including:
          </p>

          <ul>
            <li>Automatic image optimization</li>
            <li>Font optimization</li>
            <li>Route prefetching</li>
            <li>Static and server-side rendering</li>
          </ul>

          <p>
            For deployment, we can use Vercel, which provides the best experience for Next.js
            applications with automatic deployments and excellent performance.
          </p>

          <h2>Conclusion</h2>
          <p>
            Building a portfolio website with Next.js and Tailwind CSS is a great way to showcase
            your work and skills. The combination of these technologies provides a powerful and
            flexible foundation for creating beautiful, performant websites.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400">
              Written by Bharad
            </div>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Share on Twitter
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  );
}