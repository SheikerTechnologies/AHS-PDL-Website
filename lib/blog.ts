/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostFrontmatter, BlogCategory } from "./blog-types";
export type { BlogPostFrontmatter, BlogCategory } from "./blog-types";
export { BLOG_CATEGORIES } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;
}

/**
 * Read all blog posts from the content/blog directory.
 * Returns posts sorted by date (newest first).
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts: BlogPost[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      frontmatter: data as BlogPostFrontmatter,
      content,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/**
 * Get a single blog post by slug.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    if ((data as BlogPostFrontmatter).slug === slug) {
      return { frontmatter: data as BlogPostFrontmatter, content };
    }
  }

  return null;
}

/**
 * Get all unique blog slugs (for generateStaticParams and sitemap).
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return (data as BlogPostFrontmatter).slug;
  });
}

/**
 * Get posts by category, excluding a specific slug (for "Related articles").
 */
export function getRelatedPosts(
  category: BlogCategory,
  excludeSlug: string,
  limit = 3
): BlogPost[] {
  return getAllPosts()
    .filter(
      (p) =>
        p.frontmatter.category === category &&
        p.frontmatter.slug !== excludeSlug
    )
    .slice(0, limit);
}
