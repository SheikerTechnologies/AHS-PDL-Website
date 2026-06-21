/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
            alt="AHS Catalog and blueprint luxury presentation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/65 to-stone-950/90" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col gap-4 text-white select-none">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#dfad42]"
        >
          Who We Are
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight"
        >
          Building Trust,<br className="hidden sm:inline" /> Delivering Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl mx-auto"
        >
          Founded on the principles of integrity and quality craftsmanship, AHS Properties & Development Ltd. is committed to creating living and working spaces that stand the test of time.
        </motion.p>
      </div>
    </section>
  );
}
