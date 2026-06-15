'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Search
} from 'lucide-react';
import { Property } from '@/lib/types';
import { PROPERTIES } from '@/lib/data';
import AHSLogo from '@/components/AHSLogo';
import ThemeAnalyzer from '@/components/ThemeAnalyzer';
import PropertySearch from '@/components/PropertySearch';
import AgentForm from '@/components/AgentForm';
import FAQSection from '@/components/FAQSection';
import { useAppContext } from './providers';

const CLIENT_METADATA = [
  { name: "People's Republic of Bangladesh", bengName: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার", filename: "bangladesh-govt.png" },
  { name: "Rajdhani Unnayan Kartripakkha", bengName: "রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক)", filename: "rajuk.png" },
  { name: "Bangladesh Navy", bengName: "বাংলাদেশ নৌবাহিনী", filename: "bangladesh-navy.png" },
  { name: "Bangladesh Coast Guard", bengName: "বাংলাদেশ কোস্ট গার্ড", filename: "coast-guard.png" },
  { name: "Civil Aviation Authority of Bangladesh", bengName: "সিভিল এভিয়েশন অথরিটি, বাংলাদেশ", filename: "CAAB.png" },
  { name: "Chittagong Port Authority", bengName: "চট্টগ্রাম বন্দর কর্তৃপক্ষ", filename: "chittagong-port.png" },
  { name: "Mongla Port Authority", bengName: "মংলা বন্দর কর্তৃপক্ষ", filename: "mongla-port.png" },
  { name: "Bangladesh Inland Water Transport Authority", bengName: "বাংলাদেশ অভ্যন্তরীণ নৌ-পরিবহন কর্তৃপক্ষ", filename: "biwta.png" },
  { name: "Bangladesh Agricultural Development Corporation", bengName: "বাংলাদেশ কৃষি উন্নয়ন কর্পোরেশন", filename: "badc.png" },
  { name: "Public Works Department", bengName: "গণপূর্ত অধিদপ্তর (পিডব্লিউডি)", filename: "pwd.png" },
  { name: "Military Engineer Services", bengName: "মিলিটারি ইঞ্জিনিয়ার সার্ভিসেস (এমইএস)", filename: "mes.png" },
  { name: "Directorate General Defence Purchase", bengName: "প্রতিরক্ষা ক্রয় মহাপরিদপ্তর (ডিজিডিপি)", filename: "dgdp.png" },
  { name: "Dhaka Cantonment Board", bengName: "ঢাকা ক্যান্টনমেন্ট বোর্ড", filename: "dhaka-cantonment-board.png" },
  { name: "Department of Public Health Engineering", bengName: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর", filename: "dphe.png" },
];

function ClientLogo({ client }: { client: typeof CLIENT_METADATA[0] }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-stone-200/50 shrink-0 overflow-hidden shadow-sm">
      <img
        src={`/assets/ClientList/${client.filename}`}
        alt={client.name}
        className="w-full h-full object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/assets/ClientList/placeholder.png';
        }}
      />
    </div>
  );
}

export default function Home() {
  const { themeAnalyzerOpen, setThemeAnalyzerOpen } = useAppContext();

  // Custom live design sandbox states
  const [blurLevel, setBlurLevel] = useState<string>('md');
  const [roundedLevel, setRoundedLevel] = useState<string>('full');

  // Interactive sections / modallings
  const [activePropertyInquiry, setActivePropertyInquiry] = useState<Property | null>(null);

  // Home Coast Quick Filters
  const [selectedCoast, setSelectedCoast] = useState<string>('All');

  // Services Accordion State
  const [activeService, setActiveService] = useState<number>(1); // Index 1 is Property Valuation expanded by default
  const [showBengali, setShowBengali] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

  const handleGetStarted = () => {
    const element = document.getElementById('discover-properties-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeaturedInquiry = () => {
    // Selects the first available showcase signature property
    const featuredProp = PROPERTIES[0];
    if (featuredProp) {
      setActivePropertyInquiry(featuredProp);
      document.getElementById('contact-broker-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-850 relative flex flex-col justify-between selection:bg-[#1e2a4a] selection:text-white">

      {/* 1. HERO EXQUISITE LANDSCAPE */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-screen lg:h-[105vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-16 lg:py-0 select-none"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.9 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="AHS Bangladesh Luxury Real Estate"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#fafaf9] via-[#fafaf9]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 text-white h-full">
          {/* Left: Branding Titles and Filtering Console */}
          <div className="max-w-2xl flex flex-col gap-6 text-left mt-8 lg:mt-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#dfad42]"
            >
              Registered Real Estate Developer — Bangladesh
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              We Build<br />
              Tomorrow's<br />
              Addresses Today
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-sm md:text-[15px] text-stone-200/90 leading-relaxed font-normal max-w-[550px]"
            >
              AHS Properties & Development Ltd. crafts premium residential and commercial spaces across Bangladesh — merging architectural vision with uncompromising quality.
            </motion.p>
          </div>

          {/* Right: Floating featured card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="w-full lg:w-[360px] self-end lg:self-center"
          >
            <div
              onClick={handleFeaturedInquiry}
              className="backdrop-blur-xl bg-slate-900/35 hover:bg-slate-900/45 border border-white/20 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 text-left cursor-pointer transition-all duration-300 transform select-none"
            >
              <div className="flex flex-col gap-1.5">
                <span className="bg-[#e49b2c] text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider w-fit">
                  👑 Featured Space
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white font-sans">
                  Premium Suite
                </h3>
                <p className="text-xs text-stone-300 leading-normal mt-2 line-clamp-2">
                  Luxurious layout situated in structural hubs, offering metropolitan vistas and immediate urban access.
                </p>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-bold text-[#c5a257] mt-2 group-hover:underline">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* INFINITE CLIENT LOGO MARQUEE */}
      <section className="bg-white border-b border-stone-200/50 py-10 md:py-12 overflow-hidden select-none">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 mb-6 md:mb-8 text-center flex flex-col items-center justify-center">
          <div className="mb-4 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/10 shadow-sm">
            <AHSLogo type="icon" iconSize={50} className="text-[#b84822]" />
          </div>

          <span className="text-[10px] font-black text-[#c5a257] uppercase tracking-[0.25em] block mb-2">OUR TRUSTED ACCREDITATIONS & PRESTIGIOUS CLIENTS</span>
          <h2 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight font-sans uppercase">
            GOVERNMENT PARTNERS
          </h2>
          <p className="text-xs text-stone-500 max-w-2xl mx-auto mt-1 leading-relaxed">
            We coordinate, build, and deliver high-specification properties fully aligned with Bangladesh's premier public authorities, statutory institutions, and specialized national commands.
          </p>
        </div>

        <div className="relative w-full flex items-center overflow-hidden">
          {/* Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling loop */}
          <motion.div
            className="flex gap-6 whitespace-nowrap py-1"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 45,
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
          >
            {[...CLIENT_METADATA, ...CLIENT_METADATA].map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3.5 bg-stone-50 border border-stone-200/60 hover:bg-white hover:border-[#c5a257]/30 hover:shadow-md px-5 py-3 rounded-2xl transition-all duration-300 min-w-[280px] md:min-w-[340px]"
              >
                <ClientLogo client={client} />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-sans font-black tracking-wide text-stone-900 leading-snug line-clamp-1">{client.name}</span>
                  <span className="text-[9px] font-sans font-medium text-[#c5a257] leading-none mt-0.5">{client.bengName}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. CEO WELCOME MESSAGE SECTION */}
      <section className="w-full bg-[#fcfbfc] border-b border-stone-200/60 py-20 select-none">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Main Title */}
          <div className="text-center lg:text-left mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#104a32] block mb-3">
              Leadership Message
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight relative inline-block">
              Message from our CEO
              <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-16 h-[3px] bg-[#104a32]"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: CEO Image / Badge Area */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative group w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-md border-4 border-white mb-6 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/images/ceo-profile.jpg"
                  alt="Md. Sohanur Rahman Sohan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#104a32]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-stone-900 tracking-tight">Md. Sohanur Rahman Sohan</h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#104a32] mt-1">Chief Executive Officer</p>
                <p className="text-xs text-stone-400 mt-0.5">AHS Properties & Development Ltd.</p>
                <div className="mt-4 text-xs text-stone-500 space-y-0.5">
                  <p>Managing Director, Sun Solaris Ltd.</p>
                  <p>Proprietor, AHS Enterprise</p>
                </div>
              </div>
            </div>

            {/* Right Column: Message Content */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200/80 p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-stone-100 font-serif text-8xl leading-none pointer-events-none select-none">
                “
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                  Building Legacies, Shaping the Future
                </h3>
                <p className="text-[#104a32] font-medium mt-2">Welcome to AHS Properties & Development Ltd.</p>
              </div>

              {/* Short Preview */}
              <div className="text-stone-600 space-y-4 text-[15.2px] leading-relaxed font-normal">
                <p>
                  Our journey began with a vision– “We Build Tomorrow” to establish a benchmark of unyielding reliability, top-tier quality, and strategic innovation in Bangladesh’s most vital sectors...
                </p>
              </div>

              {/* Full Expandable Message */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFullMessage ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                <div className="text-stone-600 space-y-6 text-[15.2px] leading-relaxed border-t border-stone-100 pt-8">
                  <p>
                    Over the years, through M/S. AHS Enterprise and Sun Solaris Limited, we have had the distinct honor of serving as a trusted partner to both the military and civil sectors of our nation.
                  </p>

                  <p>
                    From executing high-stakes strategic projects for the Bangladesh Armed Forces through the DGDP, to delivering critical maritime solutions for the Bangladesh Navy (including the prestigious supply of submarine machinery spares), our track record speaks for itself. Our deep-rooted enlistments with premier national authorities—such as Dhaka Cantonment Board, BIWTA, PWD, HED, CAAB, MES, BADC, RAJUK, DPHE, CPA, PPA and Distributor of Moddhapara Granite & Mining Co. Ltd —reflect a legacy built entirely on trust and flawless execution.
                  </p>

                  <div className="pt-4 border-t border-stone-100">
                    <h4 className="text-lg font-semibold text-stone-800 mb-3">The Evolution: Trust Meets Sustainable Living</h4>
                    <p>
                      True leadership lies in adaptability and forward-thinking. Having mastered major civil construction and critical supply chains, expanding our expertise into premium real estate and sustainable infrastructure was a natural evolution.
                    </p>
                    <p>
                      At AHS Properties & Development Ltd., we don't just build structures; we create environments where modern living aligns with strategic foresight. We bring the same military-grade precision, absolute faithfulness, and uncompromising quality that defined our past successes straight into the property development sector.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-stone-800 mb-3">A Vision for Tomorrow</h4>
                    <p>
                      Parallel to shaping urban landscapes, our sister concern, Sun Solaris Limited, is actively driving a mission toward a carbon-free world by making renewable energy both accessible and affordable. This dual commitment to excellence—crafting superior real estate spaces while championing sustainable, green energy solutions—positions us at the forefront of Bangladesh's modern development era.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-100 text-stone-700">
                    <p className="italic">
                      To our clients, partners, and stakeholders: thank you for your unwavering trust. As we step into this new era of growth, we pledge to continue delivering superior results, pushing the boundaries of innovation, and building a brighter, more sustainable future for generations to come.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bengali Version */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out mt-10 border-t border-stone-100 pt-8 ${showBengali ? 'max-h-[1600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-stone-600 space-y-6 text-[15px] leading-relaxed">
                  <p className="font-medium text-stone-800 text-lg">গৌরবময় অর্জনের ধারায় আগামীর রূপরেখা…</p>
                  <p>
                    আমাদের যাত্রাটি মূলত শুরু “গড়ি আগামী”- এই লক্ষ্যে অটল আস্থা ও নির্ভরতায় কৌশলগত উদ্ভাবনের দ্বারা উৎকর্ষ মানদন্ড বিনির্মাণ। সময়ের পরিক্রমায়, এ এইচ এস এন্টারপ্রাইজ ও সান সোলারিস লিঃ এর মাধ্যমে সামরিক ও বেসামরিক উভয় খাতে বিশ্বস্ত অংশীদার হিসেবে সেবা করার গৌরব অর্জন করেছি।
                  </p>
                  <p>
                    বাংলাদেশ সশস্ত্র বাহিনীর উচ্চ অগ্রাধিকারপ্রাপ্ত কৌশলগত চাহিদাগুলো ডিজিডিপি ( DGDP ) এর প্রকল্পের মাধ্যমে নির্ভুলভাবে বাস্তবায়ন, বাংলাদেশ নেভি’র জন্য গুরুত্বপূর্ণ সামুদ্রিক সমাধান (বিশেষত, সাবমেরিন এর যুদ্ধাস্ত্র ও খুচরা যন্ত্রাংশ) দক্ষতার সাথে সরবরাহ – প্রতিটি ক্ষেত্রেই আমাদের কর্মদক্ষতা, নিষ্ঠা ও উৎকর্ষের অঙ্গীকার সুস্পষ্টভাবে প্রতিফলিত হয়েছে যা আমাদের সাফল্যের ধারাবাহিকতা নির্দেশক।
                  </p>
                  <p>
                    ঢাকা ক্যান্টনমেন্ট বোর্ড, BIWTA, PWD, HED, CAAB, MES, BADC, RAJUK, DPHE, CPA, PPA and Distributor of Moddhapara Granite & Mining Co. Ltd প্রভৃতি শীর্ষস্থানীয় সরকারি দপ্তর ও সংস্থার সাথে স্বীকৃত প্রাতিষ্ঠানিক সম্পৃক্ততা আমাদের নিখুঁত কর্মতৎপরতা ও গুণগত মান রক্ষায় আপসহীনতার সম্মিলন।
                  </p>
                  <div className="pt-4 border-t border-stone-100">
                    <p className="font-medium text-stone-800 mb-3">আস্থার শক্তিতে সমৃদ্ধ আবাসনের – অগ্রযাত্রা…</p>
                    <p>
                      প্রকৃত নেতৃত্বের শক্তি নিহিত থাকে দূরदर्शी চেতনায় এবং পরিবর্তনের সাথে খাপ খাইয়ে নেয়ায়। বৃহৎ বেসামরিক নির্মাণ প্রকল্প নিখুঁতভাবে বাস্তবায়ন ও হস্তান্তর এবং গুরুত্ববহ কৌশলগত সরবরাহ ব্যবস্থাপনায় সুনামের সাথে সাফল্য অর্জন এবং দীর্ঘ অভিজ্ঞতার পরে অভিজাত মানের রিয়েল এস্টেট এবং আধুনিক দীর্ঘমেয়াদী অবকাঠামো নির্মাণশিল্পে আমাদের পদচারণা একটি সুপরিকল্পিত পদক্ষেপ।
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-4 justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#104a32] animate-pulse"></span>
                  <span className="text-xs text-stone-400 font-medium tracking-wide">AHS Executive Office</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowFullMessage(prev => !prev)}
                    className="inline-flex items-center gap-2 bg-[#104a32] hover:bg-[#0b3322] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
                  >
                    {showFullMessage ? 'View Less' : 'See More'}
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${showFullMessage ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowBengali(prev => !prev)}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#104a32] hover:text-[#0b3322] transition-colors"
                  >
                    {showBengali ? 'Hide Bengali' : 'বাংলায় পড়ুন'}
                  </button>

                  <a
                    href="mailto:info@ahs-enterprise.com"
                    className="inline-flex items-center gap-2 bg-[#104a32] hover:bg-[#0b3322] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
                  >
                    Contact CEO
                  </a>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-4 text-sm">
                <div>
                  <p className="font-semibold text-stone-900">Md. Sohanur Rahman Sohan</p>
                  <p className="text-[#104a32] text-xs">CEO, AHS Properties & Development Ltd.</p>
                </div>
                <div className="text-xs text-stone-500 ml-auto text-right">
                  +8801725555700 &nbsp; | &nbsp; +8801625555700<br />
                  info@ahs-enterprise.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE INTEGRATED THEME AUDITOR PANEL */}
      {themeAnalyzerOpen && (
        <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-4 animate-in slide-in-from-top-10 duration-300">
          <ThemeAnalyzer
            blurLevel={blurLevel}
            setBlurLevel={setBlurLevel}
            roundedLevel={roundedLevel}
            setRoundedLevel={setRoundedLevel}
            onClose={() => setThemeAnalyzerOpen(false)}
          />
        </section>
      )}

      {/* 3. SERVICES "WHAT WE OFFER" SECTION */}
      <section id="about-services-section" className="w-full py-20 bg-white border-y border-stone-100 select-none">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
              What We Offer?
            </h2>
            <p className="text-sm md:text-base text-stone-500 leading-relaxed font-normal">
              Buying or selling a property can be overwhelming — we make it effortless.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col border-t border-stone-200"
          >
            {[
              { id: 1, num: '01', title: 'Home Buying Guidance', desc: 'Our real estate experts provide guidance traversing investment schemes, local land laws, and RAJUK guidelines to acquire your dream home smoothly.' },
              { id: 2, num: '02', title: 'Property Valuation', desc: 'Get an accurate, data-driven assessment of your property\'s market value backed by comprehensive analysis of recent sales, local trends, and unique property characteristics.' },
              { id: 3, num: '03', title: 'Investment Advisory', desc: 'In-depth advisory tracking Bangladesh property indices, fiscal yields, portfolio positioning, and asset allocation to guarantee legacy-building transactions.' },
              { id: 4, num: '04', title: 'Transaction Management', desc: 'Absolute stewardship from reservations to registry title clearances, taking charge of escrow safety, contract reviews, and regulatory board interfaces.' }
            ].map((serv) => {
              const isOpen = activeService === serv.id;
              return (
                <motion.div
                  layout="position"
                  key={serv.id}
                  onClick={() => setActiveService(isOpen ? 0 : serv.id)}
                  className="group py-5 border-b border-stone-200 cursor-pointer flex flex-col justify-start text-left transition-all duration-300 overflow-hidden"
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#1e2a4a]' : 'text-stone-700 group-hover:text-stone-900'}`}>
                      {serv.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-stone-400">
                      {serv.num}
                    </span>
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

      {/* 5. CALL TO ACTION CARD */}
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
                Ready to Find<br />
                Your Dream Property?
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed font-normal max-w-md">
                Join thousands of satisfied customers and let us help you find the perfect home in Bangladesh.
              </p>
              <div className="flex flex-wrap gap-3.5 mt-2">
                <button
                  onClick={handleGetStarted}
                  className="bg-[#104a32] hover:bg-[#0b3322] text-white text-xs font-extrabold px-6 py-3 rounded-full flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Find a Property</span>
                </button>
                <a
                  href="#contact-broker-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-broker-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent hover:bg-stone-50 border border-[#104a32] text-[#104a32] text-xs font-extrabold px-6 py-3 rounded-full flex items-center justify-center transition-all cursor-pointer"
                >
                  ✉️ Contact Us
                </a>
              </div>
            </div>

            {/* Geometric botanical chevron logo right */}
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

      {/* 6. PROPERTIES CATALOG DISCOVERY PANEL */}
      <section id="discover-properties-section" className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col gap-6 scroll-mt-24">
        <div>
          <span className="text-xs font-extrabold text-[#1e2a4a] tracking-widest uppercase block mb-1">REAL ESTATE DECK</span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">Our Signature Properties</h2>
          <p className="text-sm text-stone-500 max-w-2xl">
            Filter by location architectural zones or specific project blueprints online.
          </p>
        </div>
        <PropertySearch
          selectedCoast={selectedCoast}
          setSelectedCoast={setSelectedCoast}
          onInquire={(prop) => {
            setActivePropertyInquiry(prop);
            document.getElementById('contact-broker-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </section>

      {/* 9. MARKET ANALYTICS AND EXPERT PUBLICATIONS (NEWS) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        id="insights-section"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 flex flex-col gap-8 border-t border-stone-200/50 scroll-mt-24 select-none"
      >
        <div>
          <span className="text-xs font-bold text-stone-500 tracking-widest uppercase block mb-1">NEWS & INSIGHTS</span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">Publications</h2>
          <p className="text-sm text-stone-500">Keep up with Bangladesh real estate laws, guidelines, and modern smart city perspectives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: 'Regulatory Codes', title: 'Smart City Housing and Development Schemes in Bangladesh', desc: 'Understanding the newest RAJUK and Cantonment Board planning frameworks for modern townships.', date: 'May 20, 2026', img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80' },
            { tag: 'Investment Guides', title: 'Why Jolshiri Abashon is Selected by Elite Capital Pools', desc: 'Analyzing the urban planning, high fiscal security, robust infrastructure, and high-yield returns.', date: 'April 28, 2026', img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=400&q=80' },
            { tag: 'Township Lifestyles', title: 'Jolshiri Sector 16: The Future Premier Destination', desc: 'Discovering why Eastern Dhaka\'s new smart layout is selected by key developers and active luxury families.', date: 'March 14, 2026', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
          ].map((n, idx) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 12px 30px rgba(0,0,0,0.05)" }}
              className="group bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img src={n.img} alt={n.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#111827]/90 text-white text-[8px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md">{n.tag}</span>
              </div>
              <div className="p-4 flex flex-col gap-1.5 flex-1 text-left">
                <span className="text-[10px] text-stone-400 font-bold">{n.date}</span>
                <h4 className="text-sm font-extrabold text-stone-900 group-hover:text-[#1e2a4a] transition-colors leading-snug line-clamp-2">{n.title}</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed line-clamp-3 mt-1 font-normal">{n.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 9.5 FAQ SECTION COMPONENT */}
      <FAQSection />

      {/* 10. ACTIVE BROKER ROUTING FORM */}
      <section id="contact-broker-section" className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-stone-200/50 scroll-mt-24">
        <AgentForm
          selectedProperty={activePropertyInquiry}
          onClose={() => setActivePropertyInquiry(null)}
        />
      </section>

    </div>
  );
}