import type { Metadata } from 'next';
import CareersPageClient from './page-client';

const siteUrl = 'https://ahspdl.com';

export const metadata: Metadata = {
  title: 'Careers | AHS Properties & Development Ltd.',
  description:
    'Join the AHS Properties team — build Bangladesh\'s next landmarks. Open positions in architecture, engineering, sales, marketing, design, and operations in Dhaka.',
  openGraph: {
    title: 'Careers — AHS Properties & Development Ltd.',
    description:
      'Build your career with AHS. Join a team building Bangladesh\'s next landmarks across architecture, engineering, sales, design, and operations.',
    url: `${siteUrl}/careers`,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'AHS Properties Careers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers — AHS Properties & Development Ltd.',
    description:
      'Build your career with AHS. Open positions in architecture, engineering, sales, marketing, and design.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
