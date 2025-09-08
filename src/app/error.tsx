"use client";
import Link from "next/link";
import React from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-[var(--bg-light)]">
      <div className="max-w-lg text-center p-6 rounded-lg shadow-md bg-[var(--white)]">
        {/* Error Icon */}
        <div className="text-[80px] text-[var(--red)] mb-4">⚠️</div>

        {/* Error Title */}
        <h1 className="text-3xl font-bold text-[var(--black)] mb-2">
          Oops! Something went wrong
        </h1>

        {/* Error Message */}
        <p className="text-[var(--gray-dark)] mb-4">
          {error?.message ||
            "An unexpected error occurred. Please try again later."}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-5 py-2 rounded-md font-semibold text-[var(--white)] bg-[var(--orange)] hover:bg-[var(--yellow)] transition-colors"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-5 py-2 rounded-md font-semibold text-[var(--white)] bg-[var(--blue)] hover:bg-[var(--blue-link)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
