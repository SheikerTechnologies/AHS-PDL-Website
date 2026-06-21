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
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import CEOMessageSection from "@/components/sections/CEOMessageSection";
import ServicesAccordionSection from "@/components/sections/ServicesAccordionSection";
import CTACardSection from "@/components/sections/CTACardSection";
import NewsSection from "@/components/sections/NewsSection";
import ThemeAnalyzer from "@/components/ThemeAnalyzer";
import PropertySearch from "@/components/PropertySearch";
import AgentForm from "@/components/AgentForm";
import FAQSection from "@/components/FAQSection";
import { useAppContext } from "./providers";

export default function Home() {
  const { themeAnalyzerOpen, setThemeAnalyzerOpen } = useAppContext();

  const [blurLevel, setBlurLevel] = useState<string>("md");
  const [roundedLevel, setRoundedLevel] = useState<string>("full");
  const [activeProjectInquiry, setActiveProjectInquiry] = useState<DevelopmentProject | null>(null);
  const [selectedCoast, setSelectedCoast] = useState<string>("All");

  const handleGetStarted = () => {
    const element = document.getElementById("discover-properties-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFeaturedInquiry = () => {
    const featuredProject = DEVELOPMENT_PROJECTS[0];
    if (featuredProject) {
      setActiveProjectInquiry(featuredProject);
      document
        .getElementById("contact-broker-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-surface text-text-main relative flex flex-col justify-between selection:bg-navy selection:text-text-on-accent">
      {/* Hero */}
      <HeroSection onFeaturedInquiry={handleFeaturedInquiry} />

      {/* Client Logo Marquee */}
      <ClientMarqueeSection />

      {/* CEO Welcome Message */}
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

      {/* Services Accordion */}
      <ServicesAccordionSection />

      {/* CTA Card */}
      <CTACardSection onGetStarted={handleGetStarted} />

      {/* APDL RJSC Registration Certificate - Protected Display */}
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
            Official Registration Certificate — AHS Properties &amp; Development Ltd.
          </p>
        </div>
      </section>

      {/* Properties Catalog */}
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
          selectedCoast={selectedCoast}
          setSelectedCoast={setSelectedCoast}
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

      {/* News & Insights */}
      <NewsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Contact Broker Form */}
      <section
        id="contact-broker-section"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-border-main/50 scroll-mt-24"
      >
        <AgentForm
          selectedProject={activeProjectInquiry}
          onClose={() => setActiveProjectInquiry(null)}
        />
      </section>
    </div>
  );
}
