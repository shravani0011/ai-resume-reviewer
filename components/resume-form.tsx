// ABOUTME: Form with resume and job description text areas.
// ABOUTME: Collects user input for resume analysis.

"use client";

import { useState } from "react";

export default function ResumeForm() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto w-full max-w-3xl space-y-6"
    >
      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-900"
        >
          Your Resume
        </label>
        <textarea
          id="resume"
          rows={10}
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          placeholder="Paste your resume here..."
          className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="job-description"
          className="block text-sm font-medium text-gray-900"
        >
          Job Description
        </label>
        <textarea
          id="job-description"
          rows={10}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
      >
        Analyze Resume
      </button>
    </form>
  );
}
