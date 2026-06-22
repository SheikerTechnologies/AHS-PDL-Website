/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onFeaturedInquiry: () => void;
}

export default function HeroSection({ onFeaturedInquiry }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen lg:h-[105vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-16 lg:py-0 select-none"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.9 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="AHS Bangladesh Luxury Real Estate"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 text-white h-full">
        {/* Left: Branding Titles */}
        <div className="max-w-2xl flex flex-col gap-6 text-left mt-8 lg:mt-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#dfad42]"
          >
            Registered Real Estate Developer — Bangladesh
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            We Build<br />
            Tomorrow&apos;s<br />
            Addresses Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-sm md:text-[15px] text-stone-200/90 leading-relaxed font-normal max-w-[550px]"
          >
            AHS Properties & Development Ltd. crafts premium residential and commercial spaces across Bangladesh — merging architectural vision with uncompromising quality.
          </motion.p>
        </div>

        {/* Right: Floating featured card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="w-full lg:w-[360px] self-end lg:self-center"
        >
          <div
            onClick={onFeaturedInquiry}
            className="backdrop-blur-xl bg-slate-900/35 hover:bg-slate-900/45 border border-white/20 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 text-left cursor-pointer transition-all duration-300 transform select-none"
          >
            <div className="flex flex-col gap-1.5">
              <span className="bg-[#e49b2c] text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider w-fit">
                Featured Property
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white font-sans">
                Premium Residence
              </h3>
              <p className="text-xs text-stone-300 leading-normal mt-2 line-clamp-2">
                Refined living spaces in Dhaka&rsquo;s most coveted locations, offering panoramic views and immediate urban access.
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-[#c5a257] mt-2">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
