'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';

interface ErrorPageProps {
  reset: () => void;
}

export default function BlogError({ reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h2 className="text-xl font-bold text-text-main tracking-tight mb-2">
          Failed to load articles
        </h2>
        <p className="text-sm text-text-secondary mb-6">
          We couldn&apos;t load the blog. Please try again.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-bold px-6 py-3 rounded-full transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-border-main hover:bg-surface-muted text-text-secondary text-xs font-bold px-6 py-3 rounded-full transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
