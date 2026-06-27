/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

const SERVICES = [
  {
    id: 1,
    num: "01",
    title: "Home Buying Guidance",
    desc: "Our real estate experts provide guidance traversing investment schemes, local land laws, and RAJUK guidelines to acquire your dream home smoothly.",
  },
  {
    id: 2,
    num: "02",
    title: "Property Valuation",
    desc: "Get an accurate, data-driven assessment of your property's market value backed by comprehensive analysis of recent sales, local trends, and unique property characteristics.",
  },
  {
    id: 3,
    num: "03",
    title: "Investment Advisory",
    desc: "In-depth advisory tracking Bangladesh property indices, fiscal yields, portfolio positioning, and asset allocation to guarantee legacy-building transactions.",
  },
  {
    id: 4,
    num: "04",
    title: "Transaction Management",
    desc: "Absolute stewardship from reservations to registry title clearances, taking charge of escrow safety, contract reviews, and regulatory board interfaces.",
  },
];

export default function ServicesAccordionSection() {
  const [activeService, setActiveService] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax — track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map progress to a subtle Y offset (image moves opposite to scroll direction)
  const rawY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const parallaxY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.5 });

  return (
    <section
      ref={sectionRef}
      id="about-services-section"
      className="relative w-full py-20 bg-surface-alt border-y border-border-light select-none overflow-hidden"
    >
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <Image
          src="/assets/ahspdl1.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-alt/80 via-surface-alt/70 to-surface-alt/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-alt/30" />
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col gap-4 text-left"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-stone-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e2a4a]" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight font-sans">
            What We Offer?
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal">
            Buying or selling a property can be overwhelming — we make it effortless.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col border-t border-border-main"
        >
          {SERVICES.map((serv) => {
            const isOpen = activeService === serv.id;
            return (
              <motion.div
                layout="position"
                key={serv.id}
                onClick={() => setActiveService(isOpen ? 0 : serv.id)}
                className="group py-5 border-b border-border-main cursor-pointer flex flex-col justify-start text-left transition-all duration-300 overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                      isOpen 
                        ? 'bg-accent text-text-on-accent rotate-45' 
                        : 'bg-surface-muted border border-border-main text-text-secondary'
                    }`}>
                      +
                    </span>
                    <h3
                      className={`text-base md:text-lg font-bold transition-colors ${
                        isOpen
                          ? "text-accent"
                          : "text-text-main group-hover:text-accent-hover"
                      }`}
                    >
                      {serv.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-text-muted">{serv.num}</span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs md:text-sm text-stone-500 leading-relaxed font-normal mt-3 pl-1 max-w-2xl">
                        {serv.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
