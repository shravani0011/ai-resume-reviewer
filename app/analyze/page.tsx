// ABOUTME: Page where users paste their resume and a job description for analysis.
// ABOUTME: Hosts the resume form; results will be displayed here after analysis.

import ResumeForm from "@/components/resume-form";

export default function AnalyzePage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-900">
          Analyze Your Resume
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Paste your resume and the job description below to get AI-powered
          feedback.
        </p>
        <div className="mt-8">
          <ResumeForm />
        </div>
      </div>
    </div>
  );
}
