/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Image from 'next/image';

interface FooterLogoProps {
  className?: string;
}

export default function FooterLogo({ className = '' }: FooterLogoProps) {
  return (
    <div className={`flex flex-col items-start gap-2 select-none ${className}`}>
      <div className="relative" style={{ width: 220, height: 100 }}>
        <Image
          src="/assets/ahspdLogoM.png"
          alt="AHS Properties & Development Ltd."
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
