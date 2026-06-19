'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRouter } from 'next/navigation';
import ProjectsOverview from '@/components/ProjectsOverview';

export default function ProjectsRouteClient() {
  const router = useRouter();

  const handleInquire = (_title: string) => {
    void _title;
    router.push('/#contact-broker-section');
  };

  return (
    <div className="w-full bg-[#fafaf9] min-h-screen py-12">
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-8">
        <ProjectsOverview onInquire={handleInquire} />
      </section>
    </div>
  );
}
