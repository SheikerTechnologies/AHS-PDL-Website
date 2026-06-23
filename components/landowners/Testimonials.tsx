"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonialsSection } from "@/lib/landowner-content";

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-muted overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 right-10 text-accent/5 select-none pointer-events-none">
        <Quote className="w-48 h-48" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            {testimonialsSection.heading.en}
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonialsSection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-surface-alt rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:card-hover-glow"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" strokeWidth={1.5} />

              {/* Quote text */}
              <p className="text-text-secondary leading-relaxed mb-8 italic">
                &ldquo;{item.quote.en}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border-light">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-lg font-bold text-accent">
                  {item.name.en
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">
                    {item.name.en}
                  </p>
                  <p className="text-xs text-text-muted">{item.project.en}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
