'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRouter } from 'next/navigation';
import AboutPage from '@/components/AboutPage';

export default function AboutRoute() {
  const router = useRouter();

  const handleInquireClick = () => {
    router.push('/#discover-properties-section');
  };

  return <AboutPage onInquireClick={handleInquireClick} />;
}
