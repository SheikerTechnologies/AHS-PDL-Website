'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import type { BlogCategory } from "@/lib/blog-types";
import { BLOG_CATEGORIES } from "@/lib/blog-types";

interface CategoryFilterProps {
  activeCategory: BlogCategory | "All";
  onCategoryChange: (category: BlogCategory | "All") => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10">
      <button
        onClick={() => onCategoryChange("All")}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
          activeCategory === "All"
            ? "bg-accent text-text-on-accent shadow-md"
            : "bg-surface-muted text-text-secondary hover:bg-surface-alt hover:text-text-main border border-border-light"
        }`}
      >
        All
      </button>
      {BLOG_CATEGORIES.map((cat, i) => (
        <motion.button
          key={cat}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 * i }}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeCategory === cat
              ? "bg-accent text-text-on-accent shadow-md"
              : "bg-surface-muted text-text-secondary hover:bg-surface-alt hover:text-text-main border border-border-light"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
