'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-3 bg-surface-alt px-6 py-2 rounded-full border border-border-main mb-6">
        <span className="text-accent">✦</span>
        <span className="uppercase tracking-[3px] font-medium text-sm text-text-secondary">
          AHS Blog
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-text-main tracking-tighter">
        Insights &amp; Updates
      </h1>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
        Expert perspectives on Bangladesh&apos;s real estate market, property investment
        guides, company news, and community events from the AHS Properties team.
      </p>
    </motion.div>
  );
}
