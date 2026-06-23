/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600; // Revalidate every hour
import {
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
} from "@/lib/blog";
import ArticlePageClient from "./page-client";

const siteUrl = "https://ahspdl.com";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { frontmatter } = post;

  return {
    title: `${frontmatter.title} | AHS Properties Blog`,
    description: frontmatter.excerpt,
    openGraph: {
      title: `${frontmatter.title} — AHS Properties Blog`,
      description: frontmatter.excerpt,
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: [
        {
          url: frontmatter.coverImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
      url: `${siteUrl}/blog/${frontmatter.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${frontmatter.title} — AHS Properties Blog`,
      description: frontmatter.excerpt,
      images: [frontmatter.coverImage],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${frontmatter.slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  // Get related articles
  const relatedRaw = getRelatedPosts(frontmatter.category, frontmatter.slug, 3);
  const relatedPosts = relatedRaw.map((r) => r.frontmatter);

  // JSON-LD schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    image: frontmatter.coverImage,
    url: `${siteUrl}/blog/${frontmatter.slug}`,
    publisher: {
      "@type": "Organization",
      name: "AHS Properties & Development Ltd.",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/ahspdLogoL.png`,
      },
    },
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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: frontmatter.category,
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: frontmatter.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <ArticlePageClient
        post={frontmatter}
        content={content}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
