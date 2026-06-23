"use client";

import { motion } from "motion/react";
import { processTimelineSection } from "@/lib/landowner-content";

export default function ProcessTimeline() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-surface-muted overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 px-5 py-2 rounded-full border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="uppercase tracking-[3px] font-medium text-sm text-accent">
              Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            {processTimelineSection.heading.en}
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {processTimelineSection.subheading.en}
          </p>
        </motion.div>

        {/* Timeline - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop: connecting line */}
          <div className="hidden lg:block absolute top-12 left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processTimelineSection.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-surface-alt border-2 border-accent/30 shadow-lg flex items-center justify-center mb-6 group-hover:border-accent transition-colors duration-300">
                  <span className="text-3xl font-bold text-accent">
                    {step.number}
                  </span>
                  {/* Mobile: connecting line downwards */}
                  {index < processTimelineSection.steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-accent/40 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-text mb-2">
                  {step.title.en}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[220px]">
                  {step.description.en}
                </p>

                {/* Desktop: arrow indicator */}
                {index < processTimelineSection.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-2 text-accent/40">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
