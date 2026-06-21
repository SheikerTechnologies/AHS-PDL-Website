/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Image from 'next/image';

const LOCATIONS = [
  { name: 'Jolshiri Sector 16', subtitle: 'Premium smart township', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80' },
  { name: 'Dhaka Cantonment', subtitle: 'Prestigious secure living', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
  { name: 'Jolshiri Sector 15', subtitle: 'Scenic lakeside sanctuary', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80' },
  { name: 'VIP Road, Nayapaltan', subtitle: 'Central business corridor', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bashundhara R/A', subtitle: 'Modern residential sector', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Gulshan Enclave', subtitle: 'Premium diplomat zone', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
];

export default function AboutLocationsGrid() {
  return (
    <section className="w-full py-20 bg-surface-muted/50 border-b border-border-light">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col gap-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">Where We Build</h2>
          <p className="text-sm text-text-secondary leading-relaxed font-normal">
            Explore our properties across Bangladesh&rsquo;s most desirable locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(0,0,0,0.06)" }}
              className="group bg-surface-alt rounded-3xl border border-border-main overflow-hidden flex flex-col justify-between transition-all duration-300 dark:card-hover-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={loc.img}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-4 flex flex-col text-left gap-0.5 select-none bg-surface-alt">
                <h4 className="text-sm md:text-base font-extrabold text-text-main group-hover:text-[#b84822] transition-colors leading-none tracking-tight">
                  {loc.name}
                </h4>
                <p className="text-[10px] md:text-xs text-text-secondary leading-none font-normal mt-1 border-t border-border-light pt-1.5 uppercase tracking-wider font-semibold">
                  {loc.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
