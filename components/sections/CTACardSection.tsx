/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import { Search } from "lucide-react";
import AHSLogo from "@/components/AHSLogo";

interface CTACardSectionProps {
  onGetStarted: () => void;
}

export default function CTACardSection({ onGetStarted }: CTACardSectionProps) {
  return (
    <section className="w-full py-12 bg-[#fafaf9] select-none">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[40px] border border-stone-200/60 p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-24 h-1.5 bg-[#dfad42] rounded-r-md" />

          {/* Content left */}
          <div className="md:col-span-7 flex flex-col text-left gap-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
              Ready to Find
              <br />
              Your Dream Property?
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed font-normal max-w-md">
              Join thousands of satisfied customers and let us help you find the perfect home in
              Bangladesh.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-2">
              <button
                onClick={onGetStarted}
                className="bg-[#104a32] hover:bg-[#0b3322] text-white text-xs font-extrabold px-6 py-3 rounded-full flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Find a Property</span>
              </button>
              <a
                href="#contact-broker-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact-broker-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent hover:bg-stone-50 border border-[#104a32] text-[#104a32] text-xs font-extrabold px-6 py-3 rounded-full flex items-center justify-center transition-all cursor-pointer"
              >
                ✉️ Contact Us
              </a>
            </div>
          </div>

          {/* Geometric logo */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="md:col-span-5 h-56 flex items-center justify-center relative select-none"
          >
            <div className="w-56 h-56 relative overflow-hidden bg-stone-50 rounded-2xl border border-stone-200/60 flex items-center justify-center shadow-lg p-4">
              <AHSLogo type="full" iconSize={65} textColor="dark" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
