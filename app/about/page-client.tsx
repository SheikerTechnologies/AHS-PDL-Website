'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRouter } from 'next/navigation';
import AboutPageClient from '@/components/AboutPage';

export default function AboutRouteClient() {
  const router = useRouter();

  const handleInquireClick = () => {
    router.push('/#discover-properties-section');
  };

  return <AboutPageClient onInquireClick={handleInquireClick} />;
}
