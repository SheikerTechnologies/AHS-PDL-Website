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
    <a
      href="https://ahspdl.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-start gap-2 select-none hover:opacity-80 transition-opacity duration-200 ${className}`}
      aria-label="Visit AHS Properties & Development Ltd. official website"
    >
      <div className="relative" style={{ width: 220, height: 100 }}>
        <Image
          src="/assets/ahspdLogoM.png"
          alt="AHS Properties & Development Ltd."
          fill
          className="object-contain"
          sizes="559px"
          loading="lazy"
        />
      </div>
    </a>
  );
}
