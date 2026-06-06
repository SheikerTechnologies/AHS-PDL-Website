'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRouter } from 'next/navigation';
import ProjectsOverview from '@/components/ProjectsOverview';
import { useAppContext } from '../providers';

export default function ProjectsPage() {
  const router = useRouter();
  const { currency, language } = useAppContext();

  const handleInquire = (title: string) => {
    // Navigate back to the home page's contact broker form and pass the project title if needed
    router.push(`/#contact-broker-section`);
  };

  return (
    <div className="w-full bg-[#fafaf9] min-h-screen py-12">
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-8">
        <ProjectsOverview
          currency={currency}
          language={language}
          onInquire={handleInquire}
        />
      </section>
    </div>
  );
}
