'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import type { BlogCategory, BlogPostFrontmatter } from "@/lib/blog-types";
import BlogHeader from "@/components/blog/BlogHeader";
import CategoryFilter from "@/components/blog/CategoryFilter";
import FeaturedArticleCard from "@/components/blog/FeaturedArticleCard";
import ArticleCard from "@/components/blog/ArticleCard";

const POSTS_PER_PAGE = 6;

interface BlogListingClientProps {
  posts: BlogPostFrontmatter[];
}

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">(
    "All"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Category filter
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Search filter (client-side, by title)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [posts, activeCategory, searchQuery]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];
  const visiblePosts = remainingPosts.slice(0, visibleCount);
  const hasMore = visibleCount < remainingPosts.length;

  const handleCategoryChange = (cat: BlogCategory | "All") => {
    setActiveCategory(cat);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:50px_50px] opacity-40 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <BlogHeader />

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Category Filters */}
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface-muted border border-border-light text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && !searchQuery && activeCategory === "All" && (
          <div className="mb-12">
            <FeaturedArticleCard post={featuredPost} />
          </div>
        )}

        {/* Article Grid */}
        {visiblePosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post, i) => (
                <ArticleCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={loadMore}
                  className="px-8 py-3 rounded-full bg-surface-alt border border-border-main text-sm font-semibold text-text-main hover:bg-accent hover:text-text-on-accent hover:border-accent transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  Load More Articles
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">
              No articles found{searchQuery ? ` for "${searchQuery}"` : ""}.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-accent font-semibold hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
