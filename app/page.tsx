// ABOUTME: Landing page with hero section promoting the resume analysis tool.
// ABOUTME: Entry point for new visitors with a call-to-action to the analyze page.

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Improve your resume for the job you want.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Compare your resume with a job description and get practical
          AI-powered feedback.
        </p>
        <div className="mt-10">
          <Link
            href="/analyze"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Analyze My Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
