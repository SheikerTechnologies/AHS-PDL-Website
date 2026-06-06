/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, AlertCircle, ShieldCheck, KeyRound } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Legalities' | 'Investments' | 'Customization';
  icon: any;
}

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'General' | 'Legalities' | 'Investments'>('All');

  const faqs: FAQItem[] = [
    {
      id: 1,
      category: 'General',
      icon: ShieldCheck,
      question: 'Who is behind AHS Properties & Development Ltd.?',
      answer: 'AHS Properties is built on elite military and civilian governance. It is led by retired national figures including Chairman Lt. Gen. Sabbir Ahmed (Retd.) (former Chief of General Staff, Bangladesh Army) and Managing Director DIG (Rtd.) Md. Abu Kalam Siddique. This leadership instills absolute discipline, legal precision, and uncompromised trust in real estate stewardship.'
    },
    {
      id: 2,
      category: 'Legalities',
      icon: KeyRound,
      question: 'Are AHS properties and projects fully RAJUK and Cantonment approved?',
      answer: 'Yes. Legal compliance is our primary standard. All AHS properties, apartments, and duplexes hold 100% verified mutation titles and are officially approved by RAJUK (Rajdhani Unnayan Kartripakkha) and respective cantonment development authorities. We provide all clear title clearances, land registrations, and blueprints instantly to your legal representatives.'
    },
    {
      id: 3,
      category: 'Investments',
      icon: Sparkles,
      question: 'Why is Jolshiri Abashon selected for your premier developments?',
      answer: 'Jolshiri Abashon represents Eastern Dhaka’s most secure, sustainable, and planned smart township. Developed under direct military authority, it features eco-conscious water canals, wide lakeside greenways, and high-tech security grids. Properties here enjoy high annual yields and fast CAPITAL APPRECIATION, making them excellent primary homes and premier heritage assets.'
    },
    {
      id: 4,
      category: 'Customization',
      icon: AlertCircle,
      question: 'Can buyers customize interior layouts and layout specs during pre-launch?',
      answer: 'Absolutely. For pre-launch residential bookings (such as the AHS Jolshiri Signature Villa), we offer premium interior structural customizations. Clients can coordinate with our architectural engineers to adapt interior load layouts, select Italian marble upgrades, install high-end modular kitchens, and pre-integrate smart security automations.'
    },
    {
      id: 5,
      category: 'Investments',
      icon: KeyRound,
      question: 'What are the typical payment milestones and procedures for booking?',
      answer: 'Reservations start with an initial booking token. We then offer custom payment schedules mapped directly to construction milestones (e.g., piling, structural roof slabs, brickworks, and final finishing). This ensures total transparency and fiduciary alignment. Secure local and overseas bank transfers (BDT, USD, EUR) are fully supported.'
    }
  ];

  const categories: { value: 'All' | 'General' | 'Legalities' | 'Investments'; label: string }[] = [
    { value: 'All', label: 'All Questions' },
    { value: 'General', label: 'About AHS' },
    { value: 'Legalities', label: 'Legalities & Approvals' },
    { value: 'Investments', label: 'Smart Townships' }
  ];

  const filteredFaqs = faqs.filter(faq => selectedCategory === 'All' || faq.category === selectedCategory);

  return (
    <section id="ahs-faq-section" className="w-full py-20 bg-stone-50/50 border-t border-stone-200/60 select-none">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-12">
        
        {/* Typographic Heading */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[10px] font-extrabold text-[#b84822] tracking-[0.2em] uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#b84822]" />
            Client Help & Support
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-normal mt-1 leading-relaxed">
            Get accurate details regarding our military-backed leadership, legal approvals, payment procedures, and elite smart-city planning.
          </p>
        </div>

        {/* Filter Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-stone-900 text-white shadow-md scale-[1.02]'
                  : 'bg-white border border-stone-200/80 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Area */}
        <div className="flex flex-col max-w-3xl mx-auto w-full border border-stone-200 bg-white rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.02)] divide-y divide-stone-150">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFAQ === faq.id;
              const IconComp = faq.icon;

              return (
                <motion.div
                  layout="position"
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col text-left transition-colors duration-300 hover:bg-stone-50/40"
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 md:px-8 flex items-center justify-between gap-4 text-left font-sans select-none focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isOpen ? 'bg-amber-50 border-amber-200/60 text-[#b84822]' : 'bg-stone-50 border-stone-200 text-stone-500'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-sm md:text-base font-extrabold text-stone-900 pr-2">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-stone-400 shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Collapsible Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-6 pl-[54px] md:pl-[74px] border-t border-stone-100 bg-stone-50/10">
                          <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
