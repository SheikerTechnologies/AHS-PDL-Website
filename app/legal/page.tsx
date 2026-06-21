/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal | AHS Properties & Development Ltd.",
  description:
    "Privacy Policy, Terms of Service, and Cookie Settings for AHS Properties & Development Ltd. Learn how we protect your data.",
  openGraph: {
    title: "Legal Information — AHS Properties & Development Ltd.",
    description:
      "Review our Privacy Policy, Terms of Service, and Cookie Settings for AHS Properties & Development Ltd.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AHS Properties & Development Legal Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Information — AHS Properties & Development Ltd.",
    description:
      "Review our Privacy Policy, Terms of Service, and Cookie Settings for AHS Properties & Development Ltd.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://ahspdl.com/legal",
  },
};

const sections = [
  {
    id: "privacy-policy",
    label: "Privacy Policy",
    content: (
      <>
        <p        className="text-text-secondary leading-relaxed">
          AHS Properties & Development Ltd. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you
          visit our website.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Information We Collect</h4>
        <p        className="text-text-secondary leading-relaxed">
          We may collect personal information that you voluntarily provide to us when you
          fill out enquiry forms, subscribe to newsletters, or contact us. This may include
          your name, email address, phone number, and property preferences.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">How We Use Your Information</h4>
        <p        className="text-text-secondary leading-relaxed">
          The information we collect is used to respond to your enquiries, provide property
          information, improve our services, and communicate with you about our
          developments and offerings.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Data Protection</h4>
        <p        className="text-text-secondary leading-relaxed">
          We implement appropriate technical and organizational measures to protect your
          personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Third-Party Disclosure</h4>
        <p        className="text-text-secondary leading-relaxed">
          We do not sell, trade, or otherwise transfer your personal information to third
          parties without your consent, except as required by law or as necessary to provide
          our services.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Contact Us</h4>
        <p        className="text-text-secondary leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:ahspropertiesdevelopmentltd@gmail.com"
            className="text-[#b84822] hover:underline font-medium"
          >
            ahspropertiesdevelopmentltd@gmail.com
          </a>{" "}
          or call{" "}
          <a href="tel:01625555700" className="text-[#b84822] hover:underline font-medium">
            01625-555700
          </a>.
        </p>
      </>
    ),
  },
  {
    id: "terms-of-service",
    label: "Terms of Service",
    content: (
      <>
        <p        className="text-text-secondary leading-relaxed">
          By accessing and using the AHS Properties & Development Ltd. website, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Use of the Website</h4>
        <p        className="text-text-secondary leading-relaxed">
          This website is provided for informational purposes only. You may use the site
          for lawful purposes only and in a way that does not infringe upon the rights of
          others.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Property Information</h4>
        <p        className="text-text-secondary leading-relaxed">
          All property listings, descriptions, and images on this website are for
          illustrative purposes. While we strive for accuracy, specifications may vary.
          Please contact our team for the most up-to-date information.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Intellectual Property</h4>
        <p        className="text-text-secondary leading-relaxed">
          All content on this website, including text, graphics, logos, and images, is the
          property of AHS Properties & Development Ltd. and is protected by applicable
          intellectual property laws.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Limitation of Liability</h4>
        <p        className="text-text-secondary leading-relaxed">
          AHS Properties & Development Ltd. shall not be liable for any direct, indirect,
          incidental, or consequential damages arising out of the use or inability to use
          this website.
        </p>
      </>
    ),
  },
  {
    id: "cookie-settings",
    label: "Cookie Settings",
    content: (
      <>
        <p        className="text-text-secondary leading-relaxed">
          This website uses cookies to enhance your browsing experience and analyze site
          traffic. This Cookie Policy explains what cookies are, how we use them, and how
          you can manage your preferences.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">What Are Cookies?</h4>
        <p        className="text-text-secondary leading-relaxed">
          Cookies are small text files stored on your device when you visit a website.
          They help the website remember your preferences and improve your user experience.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">How We Use Cookies</h4>
        <p        className="text-text-secondary leading-relaxed">
          We use essential cookies for the website to function properly, and analytics
          cookies to understand how visitors interact with our site. We do not use cookies
          for targeted advertising purposes.
        </p>

        <h4 className="font-bold text-stone-900 text-sm mt-6">Managing Cookies</h4>
        <p        className="text-text-secondary leading-relaxed">
          You can control and manage cookies through your browser settings. Please note
          that disabling certain cookies may affect the functionality of this website.
        </p>
      </>
    ),
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold text-[#b84822] tracking-widest uppercase block mb-2">
            Legal Information
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            Policies & Terms
          </h1>
          <p className="text-sm text-text-secondary mt-2 max-w-lg mx-auto">
            Important information about how we handle your data, your rights, and our
            terms of service.
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-5 py-2.5 rounded-full text-xs font-bold border border-border-main bg-surface-alt text-text-secondary hover:border-accent/30 hover:text-accent transition-all duration-200"
            >
              {section.label}
            </a>
          ))}
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-accent text-text-on-accent hover:bg-accent-hover transition-all duration-200 dark:btn-glow-accent"
          >
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="bg-surface-alt rounded-3xl border border-border-main shadow-sm overflow-hidden">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`p-8 md:p-10 ${index < sections.length - 1 ? "border-b border-border-light" : ""}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-6 bg-accent rounded-full" />
                <h2 className="text-xl md:text-2xl font-bold text-text-main">
                  {section.label}
                </h2>
              </div>
              <div className="space-y-4 text-sm">{section.content}</div>
            </div>
          ))}
        </div>

        {/* Last updated */}
        <p className="text-center text-[10px] text-text-muted mt-8">
          Last updated: June 2026 &middot; AHS Properties &amp; Development Ltd.
        </p>
      </div>
    </div>
  );
}
