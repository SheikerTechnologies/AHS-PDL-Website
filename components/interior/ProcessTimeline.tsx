'use client';

import { motion } from 'motion/react';
import { ClipboardList, Palette, ScanEye, PaintRoller } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Consultation',
    desc: 'We meet with you to understand your vision, budget, timeline, and lifestyle needs. On-site measurements and photography included.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Concept & Moodboard',
    desc: 'Our designers create a visual concept with material samples, color palettes, furniture styles, and a preliminary layout.',
  },
  {
    number: '03',
    icon: ScanEye,
    title: '3D Render & Approval',
    desc: 'You receive photorealistic 3D renders of every room. We refine until every detail meets your approval.',
  },
  {
    number: '04',
    icon: PaintRoller,
    title: 'Execution & Handover',
    desc: 'Our team procures materials, coordinates contractors, and manages installation — delivering a finished space on time.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-surface-muted overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent block mb-2">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            How We Work
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            A proven 4-step journey from your first conversation to moving into your dream space.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-24 h-24 rounded-full bg-surface-alt border-2 border-accent/30 shadow-lg flex items-center justify-center mb-6 group-hover:border-accent transition-colors duration-300">
                    <Icon className="w-9 h-9 text-accent" />
                  </div>

                  <span className="text-xs font-mono font-bold text-accent mb-1">{step.number}</span>
                  <h3 className="text-lg font-bold text-text-main mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-[260px]">{step.desc}</p>

                  {/* Arrow between steps (desktop) */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 text-accent/40">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}

                  {/* Mobile connecting line */}
                  {index < STEPS.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-accent/40 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
