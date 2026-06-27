'use client';

import { motion } from 'motion/react';
import { ArrowRight, Building2, Users } from 'lucide-react';

export default function CareerHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-surface pt-28 pb-16 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:50px_50px] opacity-40 dark:opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-surface-alt px-5 py-2 rounded-full border border-border-main mb-8 shadow-sm"
        >
          <Users className="w-4 h-4 text-accent" />
          <span className="uppercase tracking-[3px] font-medium text-xs text-text-secondary">
            Careers
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-main tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          Build your career{' '}
          <span className="text-accent">with AHS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Join a team building Bangladesh&rsquo;s next landmarks — where precision meets purpose,
          and every project shapes the nation&rsquo;s skyline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-text-on-accent text-sm font-extrabold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
          >
            View Open Positions
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
