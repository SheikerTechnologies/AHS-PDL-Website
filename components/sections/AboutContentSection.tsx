/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Image from 'next/image';
import AHSLogo from '@/components/AHSLogo';

export default function AboutContentSection() {
  return (
    <section className="w-full py-20 bg-surface-alt border-b border-border-light">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main leading-tight tracking-tight">
            Bangladesh Property Leaders
          </h2>
          <div className="flex flex-col gap-5 text-sm md:text-base text-text-secondary leading-relaxed font-normal">
            <p>
              AHS Properties & Development Ltd. is a premier real estate development company in Bangladesh, specializing in the construction and sale of apartment blocks, luxury duplexes, and residential properties tailored for modern lifestyles. Founded with a distinguished legacy of property developers with over 30 years of experience, we have successfully completed and delivered high-quality architectural spaces across Dhaka.
            </p>
            <p>
              We focus on strategic locations (centering much of our premier portfolio directly in the revolutionary Jolshiri Abashon smart city township), competitive pricing, and exceptional build quality. Whether you&rsquo;re looking to invest in modern apartments, secure residential properties, or explore high-yield commercial spaces, AHS provides expert guidance and uncompromised fiduciary representation in finding the perfect property, whether for secure family living or a profitable investment.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[32px] overflow-hidden bg-surface-muted shadow-xl group border border-border-main/40">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful tropical mountain seaside"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 right-6 bg-surface-alt/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border-main/50 w-24 h-24 flex flex-col items-center justify-center select-none">
              <AHSLogo type="icon" iconSize={44} />
              <span className="font-sans font-black text-[9px] tracking-widest text-[#b84822] uppercase mt-1">AHS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
