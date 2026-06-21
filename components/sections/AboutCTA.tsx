/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import AHSLogo from '@/components/AHSLogo';

interface AboutCTAProps {
  onInquireClick: () => void;
}

export default function AboutCTA({ onInquireClick }: AboutCTAProps) {
  return (
    <section className="w-full py-12 bg-surface select-none">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-alt rounded-[40px] border border-border-main/60 p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-24 h-1.5 bg-[#dfad42] rounded-r-md" />

          <div className="md:col-span-7 flex flex-col text-left gap-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight leading-snug">
              Ready to Find<br />Your Perfect Property?
            </h2>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal max-w-sm">
              Let us help you discover your dream home or next key investment opportunity in Bangladesh.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={onInquireClick}
                className="bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-extrabold px-6 py-3 rounded-full flex items-center gap-1.5 transition-all shadow-md cursor-pointer dark:btn-glow-accent"
              >
                <span>View Properties</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#contact-broker-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-broker-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-accent/10 border border-accent text-accent text-xs font-extrabold px-6 py-3 rounded-full flex items-center justify-center transition-all cursor-pointer"
              >
                ✉️ Contact Us
              </a>
            </div>
          </div>

          <div className="md:col-span-5 h-56 flex items-center justify-center relative select-none">
            <div className="w-56 h-56 relative overflow-hidden bg-white rounded-2xl border border-border-main/60 flex items-center justify-center shadow-lg p-4">
              <AHSLogo type="full" iconSize={65} textColor="dark" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
