/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import Image from "next/image";

const NEWS_ITEMS = [
  {
    tag: "Regulatory Codes",
    title: "Smart City Housing and Development Schemes in Bangladesh",
    desc: "Understanding the newest RAJUK and Cantonment Board planning frameworks for modern townships.",
    date: "May 20, 2026",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80",
  },
  {
    tag: "Investment Guides",
    title: "Why Jolshiri Abashon is Selected by Elite Capital Pools",
    desc: "Analyzing the urban planning, high fiscal security, robust infrastructure, and high-yield returns.",
    date: "April 28, 2026",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=400&q=80",
  },
  {
    tag: "Township Lifestyles",
    title: "Jolshiri Sector 16: The Future Premier Destination",
    desc: "Discovering why Eastern Dhaka's new smart layout is selected by key developers and active luxury families.",
    date: "March 14, 2026",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function NewsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      id="insights-section"
      className="w-full bg-surface-muted/30 py-16 md:py-20 border-t border-border-main/30 scroll-mt-24 select-none"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-8">
      <div>
        <span className="text-xs font-bold text-text-secondary tracking-widest uppercase block mb-1">
          NEWS & INSIGHTS
        </span>
        <h2 className="text-3xl font-extrabold text-text-main tracking-tight">Publications</h2>
        <p className="text-sm text-text-secondary">
          Keep up with Bangladesh real estate laws, guidelines, and modern smart city perspectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {NEWS_ITEMS.map((n, idx) => (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.01,
              boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
            }}
            className="group bg-surface-alt rounded-2xl border border-border-main shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer dark:card-hover-glow"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <Image
                src={n.img}
                alt={n.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-[#111827]/90 text-white text-[8px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md">
                {n.tag}
              </span>
            </div>
            <div className="p-4 flex flex-col gap-1.5 flex-1 text-left">
              <span className="text-[10px] text-stone-400 font-bold">{n.date}</span>
              <h4 className="text-sm font-extrabold text-shadow-gray-800 group-hover:text-[#1d3e5a] transition-colors leading-snug line-clamp-2">
                {n.title}
              </h4>
              <p className="text-[11px] text-stone-500 leading-relaxed line-clamp-3 mt-1 font-normal">
                {n.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
