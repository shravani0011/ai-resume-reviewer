// ABOUTME: Site-wide navigation header with app name and page links.
// ABOUTME: Used in the root layout to provide consistent navigation.

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          AI Resume Reviewer
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/analyze"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Analyze
          </Link>
        </nav>
      </div>
    </header>
  );
}
