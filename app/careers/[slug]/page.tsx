import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import jobs from '@/content/careers/jobs.json';
import type { Job } from '@/lib/types';
import JobDetailClient from './page-client';

const siteUrl = 'https://ahspdl.com';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allJobs = jobs as Job[];
  return allJobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const allJobs = jobs as Job[];
  const job = allJobs.find((j) => j.slug === slug);

  if (!job) {
    return { title: 'Position Not Found — AHS Properties' };
  }

  return {
    title: `${job.title} — Careers at AHS Properties & Development Ltd.`,
    description: job.description,
    openGraph: {
      title: `${job.title} — AHS Properties Careers`,
      description: job.description,
      url: `${siteUrl}/careers/${job.slug}`,
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: job.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} — AHS Properties Careers`,
      description: job.description,
      images: ['/opengraph-image.png'],
    },
    alternates: {
      canonical: `${siteUrl}/careers/${job.slug}`,
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const allJobs = jobs as Job[];
  const job = allJobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  // JSON-LD structured data for Google Jobs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.published || '2026-01-01',
    employmentType: job.type === 'Full-time' ? 'FULL_TIME' : job.type === 'Part-time' ? 'PART_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'AHS Properties & Development Ltd.',
      sameAs: siteUrl,
      logo: `${siteUrl}/opengraph-image.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: job.location,
        addressLocality: job.location,
        addressCountry: 'BD',
      },
    },
    responsibilities: job.responsibilities.join('\n'),
    qualifications: job.requirements.join('\n'),
    ...(job.remoteFriendly ? { jobLocationType: 'TELECOMMUTE' } : {}),
    directApply: true,
    url: `${siteUrl}/careers/${job.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JobDetailClient slug={slug} />
    </>
  );
}
