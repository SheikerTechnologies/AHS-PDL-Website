'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRouter } from 'next/navigation';
import ContactPageClient from '@/components/ContactPage';

export default function ContactRouteClient() {
  const router = useRouter();

  const handleInquireClick = () => {
    router.push('/#discover-properties-section');
  };

  return <ContactPageClient onInquireClick={handleInquireClick} />;
}
