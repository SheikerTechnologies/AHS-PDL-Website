/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState } from "react";
import Image from "next/image";

export default function CEOMessageSection() {
  const [showBengali, setShowBengali] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <section className="w-full bg-surface border-b border-border-main/60 py-20 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Main Title */}
        <div className="text-center lg:text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#104a32] block mb-3">
            Leadership Message
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight relative inline-block">
            Message from our CEO
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-16 h-[3px] bg-[#104a32]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: CEO Image / Badge Area */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative group w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-md border-4 border-white mb-6 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/ceo-profile.jpg"
                alt="Md. Sohanur Rahman Sohan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#104a32]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-text-main tracking-tight">
                Md. Sohanur Rahman Sohan
              </h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#104a32] mt-1">
                Chief Executive Officer
              </p>
              <p className="text-xs text-text-muted mt-0.5">AHS Properties & Development Ltd.</p>
              <div className="mt-4 text-xs text-stone-500 space-y-0.5">
                <p>Managing Director, Sun Solaris Ltd.</p>
                <p>Proprietor, AHS Enterprise</p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="lg:col-span-8 bg-surface-alt rounded-3xl border border-border-main/80 p-8 md:p-10 shadow-sm relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 right-8 text-stone-100 font-serif text-8xl leading-none pointer-events-none select-none">
              &ldquo;
            </div>

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-text-main tracking-tight">
                Building Legacies, Shaping the Future
              </h3>
              <p className="text-[#104a32] font-medium mt-2">
                Welcome to AHS Properties & Development Ltd.
              </p>
            </div>

            {/* Short Preview */}
            <div className="text-text-secondary space-y-4 text-[15.2px] leading-relaxed font-normal">
              <p>
                Our journey began with a vision&ndash; &ldquo;We Build Tomorrow&rdquo; to establish
                a benchmark of unyielding reliability, top-tier quality, and strategic innovation in
                Bangladesh&rsquo;s most vital sectors...
              </p>
            </div>

            {/* Full Expandable Message */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showFullMessage
                  ? "max-h-[2000px] opacity-100 mt-8"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-text-secondary space-y-6 text-[15.2px] leading-relaxed border-t border-border-light pt-8">
                <p>
                  Over the years, through M/S. AHS Enterprise and Sun Solaris Limited, we have had
                  the distinct honor of serving as a trusted partner to both the military and civil
                  sectors of our nation.
                </p>
                <p>
                  From executing high-stakes strategic projects for the Bangladesh Armed Forces
                  through the DGDP, to delivering critical maritime solutions for the Bangladesh Navy
                  (including the prestigious supply of submarine machinery spares), our track record
                  speaks for itself. Our deep-rooted enlistments with premier national
                  authorities&mdash;such as Dhaka Cantonment Board, BIWTA, PWD, HED, CAAB, MES,
                  BADC, RAJUK, DPHE, CPA, PPA and Distributor of Moddhapara Granite &amp; Mining Co.
                  Ltd &mdash;reflect a legacy built entirely on trust and flawless execution.
                </p>
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-lg font-semibold text-grey-900 mb-3">
                    The Evolution: Trust Meets Sustainable Living
                  </h4>
                  <p>
                    True leadership lies in adaptability and forward-thinking. Having mastered major
                    civil construction and critical supply chains, expanding our expertise into
                    premium real estate and sustainable infrastructure was a natural evolution.
                  </p>
                  <p>
                    At AHS Properties &amp; Development Ltd., we don&rsquo;t just build structures;
                    we create environments where modern living aligns with strategic foresight. We
                    bring the same military-grade precision, absolute faithfulness, and uncompromising
                    quality that defined our past successes straight into the property development
                    sector.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-grey-900 mb-3">
                    A Vision for Tomorrow
                  </h4>
                  <p>
                    Parallel to shaping urban landscapes, our sister concern, Sun Solaris Limited, is
                    actively driving a mission toward a carbon-free world by making renewable energy
                    both accessible and affordable. This dual commitment to excellence&mdash;crafting
                    superior real estate spaces while championing sustainable, green energy
                    solutions&mdash;positions us at the forefront of Bangladesh&rsquo;s modern
                    development era.
                  </p>
                </div>
                <div className="pt-6 border-t border-border-light text-text-secondary">
                  <p className="italic">
                    To our clients, partners, and stakeholders: thank you for your unwavering trust.
                    As we step into this new era of growth, we pledge to continue delivering superior
                    results, pushing the boundaries of innovation, and building a brighter, more
                    sustainable future for generations to come.
                  </p>
                </div>
              </div>
            </div>

            {/* Bengali Version */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out mt-10 border-t border-border-light pt-8 ${
                showBengali ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-text-secondary space-y-6 text-[15px] leading-relaxed">
                <p className="font-medium text-grey-900 text-lg">
                  গৌরবময় অর্জনের ধারায় আগামীর রূপরেখা&hellip;
                </p>
                <p>
                  আমাদের যাত্রাটি মূলত শুরু &ldquo;গড়ি আগামী&rdquo;- এই লক্ষ্যে অটল আস্থা ও
                  নির্ভরতায় কৌশলগত উদ্ভাবনের দ্বারা উৎকর্ষ মানদন্ড বিনির্মাণ। সময়ের পরিক্রমায়, এ
                  এইচ এস এন্টারপ্রাইজ ও সান সোলারিস লিঃ এর মাধ্যমে সামরিক ও বেসামরিক উভয় খাতে
                  বিশ্বস্ত অংশীদার হিসেবে সেবা করার গৌরব অর্জন করেছি।
                </p>
                <p>
                  বাংলাদেশ সশস্ত্র বাহিনীর উচ্চ অগ্রাধিকারপ্রাপ্ত কৌশলগত চাহিদাগুলো ডিজিডিপি ( DGDP
                  ) এর প্রকল্পের মাধ্যমে নির্ভুলভাবে বাস্তবায়ন, বাংলাদেশ নেভি&rsquo;র জন্য
                  গুরুত্বপূর্ণ সামুদ্রিক সমাধান (বিশেষত, সাবমেরিন এর যুদ্ধাস্ত্র ও খুচরা যন্ত্রাংশ)
                  দক্ষতার সাথে সরবরাহ &ndash; প্রতিটি ক্ষেত্রেই আমাদের কর্মদক্ষতা, নিষ্ঠা ও উৎকর্ষের
                  অঙ্গীকার সুস্পষ্টভাবে প্রতিফলিত হয়েছে যা আমাদের সাফল্যের ধারাবাহিকতা নির্দেশক।
                </p>
                <p>
                  ঢাকা ক্যান্টনমেন্ট বোর্ড, BIWTA, PWD, HED, CAAB, MES, BADC, RAJUK, DPHE, CPA,
                  PPA and Distributor of Moddhapara Granite &amp; Mining Co. Ltd প্রভৃতি
                  শীর্ষস্থানীয় সরকারি দপ্তর ও সংস্থার সাথে স্বীকৃত প্রাতিষ্ঠানিক সম্পৃক্ততা আমাদের
                  নিখুঁত কর্মতৎপরতা ও গুণগত মান রক্ষায় আপসহীনতার সম্মিলন।
                </p>
                <div className="pt-4 border-t border-stone-100">
                  <p className="font-medium text-grey-900 mb-3">
                    আস্থার শক্তিতে সমৃদ্ধ আবাসনের &ndash; অগ্রযাত্রা&hellip;
                  </p>
                  <p>
                    প্রকৃত নেতৃত্বের শক্তি নিহিত থাকে দূরदर्शী চেতনায় এবং পরিবর্তনের সাথে খাপ
                    খাইয়ে নেয়ায়। বৃহৎ বেসামরিক নির্মাণ প্রকল্প নিখুঁতভাবে বাস্তবায়ন ও হস্তান্তর
                    এবং গুরুত্ববহ কৌশলগত সরবরাহ ব্যবস্থাপনায় সুনামের সাথে সাফল্য অর্জন এবং দীর্ঘ
                    অভিজ্ঞতার পরে অভিজাত মানের রিয়েল এস্টেট এবং আধুনিক দীর্ঘমেয়াদী অবকাঠামো
                    নির্মাণশিল্পে আমাদের পদচারণা একটি সুপরিকল্পিত পদক্ষেপ।
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-4 justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#104a32] animate-pulse"></span>
                <span className="text-xs text-stone-400 font-medium tracking-wide">
                  AHS Executive Office
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowFullMessage((prev) => !prev)}
                  className="inline-flex items-center gap-2 bg-[#104a32] hover:bg-[#0b3322] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
                >
                  {showFullMessage ? "View Less" : "See More"}
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      showFullMessage ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setShowBengali((prev) => !prev)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#104a32] hover:text-[#0b3322] transition-colors"
                >
                  {showBengali ? "Hide Bengali" : "বাংলায় পড়ুন"}
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
                <p className="text-[#104a32] text-xs">CEO, AHS Properties &amp; Development Ltd.</p>
              </div>
              <div className="text-xs text-stone-500 ml-auto text-right">
                +8801725555700 &nbsp; | &nbsp; +8801625555700
                <br />
                info@ahs-enterprise.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
