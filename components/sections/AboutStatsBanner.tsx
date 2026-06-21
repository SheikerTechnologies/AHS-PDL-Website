/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const STATS = [
  { value: '30+', label: 'Years in Business' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '100+', label: 'Satisfied Clients' },
  { value: '50+', label: 'Properties Sold' },
];

export default function AboutStatsBanner() {
  return (
    <section className="w-full py-16 bg-surface-alt border-b border-border-light">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
          {STATS.map((st, idx) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center gap-1 border-r last:border-0 border-border-main/60 h-20"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-[#b84822] font-mono leading-none tracking-tight">
                {st.value}
              </span>
              <span className="text-[10px] md:text-xs text-text-secondary font-bold uppercase tracking-wider">
                {st.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
