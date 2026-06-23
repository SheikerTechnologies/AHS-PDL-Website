"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  CalendarCheck,
  Building2,
  Handshake,
  LucideIcon,
} from "lucide-react";
import { whyPartnerSection } from "@/lib/landowner-content";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  CalendarCheck,
  Building2,
  Handshake,
};

export default function WhyPartner() {
  return (
    <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-navy/5 blur-3xl" />

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
              Why AHS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            {whyPartnerSection.heading.en}
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {whyPartnerSection.subheading.en}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPartnerSection.cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="group bg-surface-alt rounded-2xl p-8 border border-border-light hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:card-hover-glow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text mb-3">
                  {card.title.en}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {card.description.en}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
