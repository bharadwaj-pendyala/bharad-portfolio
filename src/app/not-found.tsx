import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-8 text-center text-lg text-secondary">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="font-semibold text-primary hover:opacity-80">
        Return Home
      </Link>
    </div>
  );
}
