import Link from 'next/link';
import TerminalCommand from '@/components/TerminalCommand';
import TerminalOutput from '@/components/TerminalOutput';

type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  summary: string;
  tags: string[];
};

const posts: BlogPost[] = [
  {
    slug: 'post-1',
    title: 'Building a Modern Portfolio with Next.js and Tailwind CSS',
    publishedAt: '2024-03-19',
    publishedLabel: 'March 19, 2024',
    readTime: '5 min read',
    summary:
      'A walkthrough for building and deploying a performant portfolio with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Web Development'],
  },
  {
    slug: 'post-2',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    publishedAt: '2024-03-18',
    publishedLabel: 'March 18, 2024',
    readTime: '8 min read',
    summary:
      'A practical look at emerging frontend and platform trends shaping modern product development.',
    tags: ['Web Development', 'Technology', 'Future Trends'],
  },
  {
    slug: 'post-3',
    title: 'Best Practices for Building Scalable Applications',
    publishedAt: '2024-03-17',
    publishedLabel: 'March 17, 2024',
    readTime: '6 min read',
    summary:
      'Key architecture and delivery patterns that keep applications maintainable as teams and traffic grow.',
    tags: ['Architecture', 'Performance', 'Best Practices'],
  },
];

export default function Blog() {
  return (
    <div className="py-8">
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
              <div className="mb-4 font-mono text-sm text-secondary">
                Thoughts, tutorials, and insights about software development,
                modern technologies, and problem-solving.
              </div>
            </div>
          </TerminalOutput>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="space-y-5">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="bg-card-bg/50 hover:border-accent/40 block rounded-lg border border-card-border p-5 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-4 font-mono text-sm text-muted">
                  <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="m-0 text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="m-0 text-muted">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted/20 rounded px-2 py-1 font-mono text-xs text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
