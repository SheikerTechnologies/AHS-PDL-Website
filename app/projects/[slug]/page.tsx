/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DEVELOPMENT_PROJECTS } from "@/lib/data";
import { getProjectIdBySlug, getAllProjectSlugs } from "@/lib/slugs";
import { titleToSlug } from "@/lib/slugs";
import ProjectDetailClient from "./page-client";

const siteUrl = "https://ahspdl.com";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projectId = getProjectIdBySlug(slug);
  const project = DEVELOPMENT_PROJECTS.find((p) => p.id === projectId);

  if (!project) return {};

  const title = `${project.title} | AHS Properties & Development Ltd.`;
  const description = `${project.title} — ${project.type} in ${project.location}. ${project.status === 'ONGOING' ? 'Currently under development.' : 'Completed project.'} ${project.percentAvailable}% units available.`;

  return {
    title,
    description,
    openGraph: {
      title: `${project.title} — AHS Properties`,
      description,
      type: "website",
      images: [
        {
          url: project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      url: `${siteUrl}/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — AHS Properties`,
      description,
      images: [project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`],
    },
    alternates: {
      canonical: `${siteUrl}/projects/${slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectId = getProjectIdBySlug(slug);
  const project = DEVELOPMENT_PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const images = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  // JSON-LD schemas
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing" as const,
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${slug}`,
    image: project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`,
    offers: {
      "@type": "Offer",
      availability: project.percentAvailable > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      price: "Contact for pricing",
      priceCurrency: "BDT",
    },
    location: {
      "@type": "Place",
      name: project.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: project.area,
        addressCountry: "BD",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Status",
        value: project.status === "ONGOING" ? "Ongoing" : "Completed",
      },
      {
        "@type": "PropertyValue",
        name: "Property Type",
        value: project.type,
      },
      {
        "@type": "PropertyValue",
        name: "Available Units",
        value: project.availableUnits,
      },
      {
        "@type": "PropertyValue",
        name: "Total Units",
        value: project.totalUnits,
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectDetailClient project={project} images={images} />
    </>
  );
}
