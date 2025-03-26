import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-primary-color font-semibold hover:opacity-80"
      >
        Return Home
      </Link>
    </div>
  );
}
