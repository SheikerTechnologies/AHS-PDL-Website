'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.87-1.144 2.87-2.758 0-1.492-1.125-2.578-2.87-2.578H5.082c-1.745 0-2.87 1.086-2.87 2.579 0 1.613 1.33 2.757 2.87 2.757z" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-extrabold text-text-main tracking-tight mb-2">
          Something went wrong
        </h1>
        <p className="text-sm text-text-secondary mb-8 leading-relaxed max-w-sm mx-auto">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-bold px-6 py-3 rounded-full transition-all duration-200 dark:btn-glow-accent"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-border-main hover:bg-surface-muted text-text-secondary hover:text-text-main text-xs font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
