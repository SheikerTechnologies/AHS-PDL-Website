"use client";

import Hero from "@/components/landowners/Hero";
import WhyPartner from "@/components/landowners/WhyPartner";
import ProcessTimeline from "@/components/landowners/ProcessTimeline";
import SpaceCalculator from "@/components/landowners/SpaceCalculator";
import Testimonials from "@/components/landowners/Testimonials";
import FAQ from "@/components/landowners/FAQ";
import LeadForm from "@/components/landowners/LeadForm";

export default function LandownersPageClient() {
  return (
    <div className="min-h-screen bg-surface">
      <Hero />
      <WhyPartner />
      <ProcessTimeline />
      <SpaceCalculator />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </div>
  );
}
