/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type BlogCategory =
  | "Company news"
  | "Property guides"
  | "Market trends"
  | "Events";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Company news",
  "Property guides",
  "Market trends",
  "Events",
];

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  author: string;
  authorBio: string;
  authorAvatar: string;
}
