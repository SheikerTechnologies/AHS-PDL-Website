/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Film } from "lucide-react";

interface VideoSectionProps {
  videoId?: string;
  thumbnailUrl?: string;
}

export default function VideoSection({
  videoId = "dQw4w9WgXcQ",
  thumbnailUrl,
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail =
    thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="w-full bg-surface-muted/50 border-y border-border-main/30 py-16 md:py-20 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-extrabold text-accent tracking-widest uppercase block mb-2">
            MEDIA GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            AHS Properties in Motion
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            Take a visual tour of our groundbreaking ceremonies, project walkthroughs, and drone footage
            showcasing AHS Properties&rsquo; premium developments across Dhaka.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-surface-muted shadow-xl border border-border-main/50 group"
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="AHS Properties Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              {/* Thumbnail */}
              <img
                src={thumbnail}
                alt="AHS Properties — Project Walkthrough"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {/* Play button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                aria-label="Play video"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/90 hover:bg-accent flex items-center justify-center shadow-2xl transition-colors duration-300"
                >
                  <Play className="w-8 h-8 md:w-10 h-10 text-white fill-white ml-1" />
                </motion.div>
              </button>
              {/* Bottom text */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/90 tracking-wide">
                    Groundbreaking Ceremony &amp; Project Tour
                  </span>
                  <span className="text-[10px] text-white/60">Click to play</span>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
