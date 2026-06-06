'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRouter } from 'next/navigation';
import ContactPage from '@/components/ContactPage';

export default function ContactRoute() {
  const router = useRouter();

  const handleInquireClick = () => {
    router.push('/#discover-properties-section');
  };

  return <ContactPage onInquireClick={handleInquireClick} />;
}
