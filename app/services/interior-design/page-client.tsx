'use client';

import InteriorHero from '@/components/interior/InteriorHero';
import ServiceGrid from '@/components/interior/ServiceGrid';
import PortfolioGallery from '@/components/interior/PortfolioGallery';
import ProcessTimeline from '@/components/interior/ProcessTimeline';
import QuoteForm from '@/components/interior/QuoteForm';

export default function InteriorDesignPageClient() {
  const scrollToForm = () => {
    const el = document.getElementById('interior-consultation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface">
      <InteriorHero onCtaClick={scrollToForm} />
      <ServiceGrid />
      <PortfolioGallery />
      <ProcessTimeline />
      <QuoteForm />
    </div>
  );
}
