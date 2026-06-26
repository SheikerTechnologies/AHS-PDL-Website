/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatar?: string;
}

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Md. Kamal Hossain",
    role: "Landowner, Jolshiri Sector 16",
    quote:
      "AHS Properties turned our family plot into a stunning residential complex. The transparency throughout the process gave us complete peace of mind. They delivered exactly what was promised, on time.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Fatima Begum",
    role: "Homebuyer, AHS Jolshiri Central 16",
    quote:
      "From the first site visit to final handover, the AHS team was extraordinarily professional. The quality of construction and attention to detail exceeded our expectations. Truly a world-class experience.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Engr. Shafiqur Rahman",
    role: "Investor, Dhaka",
    quote:
      "I&rsquo;ve worked with several developers in Bangladesh, and AHS stands out for their integrity and execution. The returns on my investment have been outstanding. Highly recommended for serious investors.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Nasrin Sultana",
    role: "Resident, AHS Coastal View Residences",
    quote:
      "Living in an AHS property has been a dream. The community spaces, the build quality, and the after-sales service are phenomenal. We&rsquo;re proud to call this our home.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonial = HOMEPAGE_TESTIMONIALS[current];

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % HOMEPAGE_TESTIMONIALS.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + HOMEPAGE_TESTIMONIALS.length) % HOMEPAGE_TESTIMONIALS.length
    );
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-surface py-16 md:py-20 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-extrabold text-accent tracking-widest uppercase block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            Hear from landowners, homebuyers, and investors who have partnered with AHS Properties &amp; Development Ltd.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto w-full">
          <div className="bg-surface-alt border border-border-main/60 rounded-3xl p-8 md:p-10 shadow-md min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Quote + Rating */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-accent/20" strokeWidth={1} />
                    {testimonial.rating && (
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating!
                                ? "fill-amber-400 text-amber-400"
                                : "text-border-main"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border-light">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-base font-bold text-accent shrink-0">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold text-text-main text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-border-light">
              <div className="flex gap-1.5">
                {HOMEPAGE_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > current ? 1 : -1);
                      setCurrent(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "bg-accent w-6"
                        : "bg-border-main hover:bg-text-muted"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="w-9 h-9 rounded-full border border-border-main bg-surface-alt hover:bg-surface-muted flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 text-text-secondary" />
                </button>
                <button
                  onClick={goNext}
                  className="w-9 h-9 rounded-full border border-border-main bg-surface-alt hover:bg-surface-muted flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
