'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Image from "next/image";
import { DevelopmentProject } from "@/lib/types";
import { DEVELOPMENT_PROJECTS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import TrustStats from "@/components/TrustStats";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import CEOMessageSection from "@/components/sections/CEOMessageSection";
import ServicesAccordionSection from "@/components/sections/ServicesAccordionSection";
import CTACardSection from "@/components/sections/CTACardSection";
import NewsSection from "@/components/sections/NewsSection";
import ThemeAnalyzer from "@/components/ThemeAnalyzer";
import PropertySearch from "@/components/PropertySearch";
import AgentForm from "@/components/AgentForm";
import FAQSection from "@/components/FAQSection";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import { useAppContext } from "./providers";

export default function Home() {
  const { themeAnalyzerOpen, setThemeAnalyzerOpen } = useAppContext();

  const [blurLevel, setBlurLevel] = useState<string>("md");
  const [roundedLevel, setRoundedLevel] = useState<string>("full");
  const [activeProjectInquiry, setActiveProjectInquiry] = useState<DevelopmentProject | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>("All");

  const handleViewProperties = () => {
    const element = document.getElementById("discover-properties-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquireNow = () => {
    document
      .getElementById("contact-broker-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetStarted = () => {
    const element = document.getElementById("discover-properties-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-surface text-text-main relative flex flex-col justify-between selection:bg-navy selection:text-text-on-accent">
      {/* 1. Hero — simplified with two CTAs */}
      <HeroSection
        onViewProperties={handleViewProperties}
        onEnquireNow={handleEnquireNow}
      />

      {/* 2. Trust Stat Strip */}
      <TrustStats />

      {/* 3. Government & Institutional Partners marquee */}
      <ClientMarqueeSection />

      {/* 4. Featured Properties */}
      <section
        id="discover-properties-section"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col gap-6 scroll-mt-24"
      >
        <div>
          <span className="text-xs font-extrabold text-navy tracking-widest uppercase block mb-1">
            REAL ESTATE DECK
          </span>
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            Our Signature Properties
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl">
            Filter by location architectural zones or specific project blueprints online.
          </p>
        </div>
        <PropertySearch
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          maxItems={6}
          viewAllHref="/projects"
          onInquire={(project) => {
            setActiveProjectInquiry(project);
            document
              .getElementById("contact-broker-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </section>

      {/* 5. Video Section */}
      <VideoSection />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* Services Accordion */}
      <ServicesAccordionSection />

      {/* CTA Card */}
      <CTACardSection onGetStarted={handleGetStarted} />

      {/* 7. CEO Message — condensed pull-quote */}
      <CEOMessageSection />

      {/* Theme Analyzer Panel */}
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

      {/* APDL RJSC Registration Certificate */}
      <section
        id="certificate-section"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 scroll-mt-24"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold text-navy tracking-widest uppercase block mb-1">
            OFFICIAL CREDENTIALS
          </span>
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            APDL RJSC Registration Certificate
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            Authenticated by the Registrar of Joint Stock Companies &amp; Firms, Government of the People&rsquo;s Republic of Bangladesh
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative select-none">
          <div className="relative rounded-2xl overflow-hidden border-4 border-border-main shadow-xl bg-surface-muted">
            <Image
              src="/attachments/APDL_RJSC-1.png"
              alt="APDL RJSC Registration Certificate"
              width={1836}
              height={2376}
              className="w-full h-auto object-contain"
              draggable={false}
              loading="lazy"
            />
          </div>
          <p className="text-center text-xs text-text-muted mt-4 select-none">
            RJSC Registration Certificate — AHS Properties &amp; Development Ltd.
          </p>
        </div>
      </section>

      {/* 8. Publications / Blog */}
      <NewsSection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. Consultation Form + AHS Group Cross-Promotion */}
      <section
        id="contact-broker-section"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-border-main/50 scroll-mt-24"
      >
        <AgentForm
          selectedProject={activeProjectInquiry}
          onClose={() => setActiveProjectInquiry(null)}
        />

        {/* AHS Group Cross-Promotion Card */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-surface-muted/70 border border-border-main/50 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold text-accent tracking-widest uppercase">
                Part of the AHS Group
              </span>
              <p className="text-xs text-text-secondary mt-1 max-w-md">
                AHS Properties is a flagship entity under the AHS Group &mdash; alongside our sister concerns delivering excellence across sectors.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://sunsolaris.ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-alt border border-border-main hover:border-accent/30 text-text-main text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-sm"
              >
                <Image
                  src="/assets/sunSolarisLimited.png"
                  alt="Sun Solaris Ltd."
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Sun Solaris Ltd.
              </a>
              <a
                href="https://ahs.redesstech.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-alt border border-border-main hover:border-accent/30 text-text-main text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-sm"
              >
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                AHS Enterprise
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
