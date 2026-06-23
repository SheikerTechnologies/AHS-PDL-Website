"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqSection } from "@/lib/landowner-content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD FAQPage schema (injected as script)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSection.items.map((item) => ({
      "@type": "Question",
      name: item.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.en,
      },
    })),
  };

  return (
    <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Inject JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6">
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
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            {faqSection.heading.en}
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqSection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-surface-alt rounded-2xl border border-border-light overflow-hidden hover:border-accent/20 transition-colors duration-300"
            >
              {/* Question button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base md:text-lg font-semibold text-text pr-4">
                  {item.question.en}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" strokeWidth={2} />
                </motion.div>
              </button>

              {/* Answer panel */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6">
                      <div className="h-px bg-border-light mb-5" />
                      <p className="text-text-secondary leading-relaxed">
                        {item.answer.en}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
