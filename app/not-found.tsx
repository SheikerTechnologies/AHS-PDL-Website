/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | AHS Properties & Development Ltd.",
  description:
    "The page you are looking for does not exist. Return to the AHS Properties & Development homepage.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Page Not Found | AHS Properties & Development Ltd.",
    description:
      "The page you are looking for does not exist. Return to the AHS Properties & Development homepage.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AHS Properties & Development Ltd.",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        {/* Decorative element */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-[120px] md:text-[160px] font-black text-text-muted/20 leading-none select-none tracking-tighter">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-0.5 bg-[#b84822]" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-text-main tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-sm mx-auto">
          The page you are looking for might have been moved, deleted, or
          perhaps never existed. Let us help you find your way back.
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg dark:btn-glow-accent"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Back to Home</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 border border-border-main hover:border-border-main text-text-secondary hover:text-text-main text-xs font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>View Projects</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-border-main hover:border-border-main text-text-secondary hover:text-text-main text-xs font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Divider */}          <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-main" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-surface px-4 text-[10px] font-bold text-text-muted uppercase tracking-widest">
              Quick Links
            </span>
          </div>
        </div>

        {/* Quick navigation grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
            { label: "Layout", href: "/layout" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-surface-alt border border-border-main hover:border-border-main hover:shadow-sm rounded-xl px-3 py-2.5 text-xs font-semibold text-text-secondary hover:text-text-main transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer text */}
        <p className="mt-10 text-[10px] text-text-muted">
          AHS Properties &amp; Development Ltd. &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
