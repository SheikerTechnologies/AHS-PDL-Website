'use client';

import { motion } from 'motion/react';
import { LayoutDashboard, Sofa, Boxes, Lightbulb } from 'lucide-react';

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: 'Space Planning',
    desc: 'Optimized floor plans that maximize every square foot while ensuring natural flow and functionality.',
  },
  {
    icon: Sofa,
    title: 'Furniture & Decor',
    desc: 'Curated furniture selections and decor packages tailored to your style and budget.',
  },
  {
    icon: Boxes,
    title: '3D Rendering',
    desc: 'Photorealistic 3D visualizations so you can see your space before a single brick is laid.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    desc: 'Layered lighting plans that create ambiance, highlight architecture, and reduce energy costs.',
  },
];

export default function ServiceGrid() {
  return (
    <section className="w-full py-20 bg-surface-alt border-y border-border-light select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent block mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            Full-Service Interior Design
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            Every aspect of your interior, handled by our expert in-house team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface border border-border-light rounded-2xl p-6 text-center hover:shadow-lg hover:border-accent/20 transition-all duration-300 group dark:card-hover-glow"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
