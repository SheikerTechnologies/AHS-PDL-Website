/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterLogoProps {
  className?: string;
}

export default function FooterLogo({ className = '' }: FooterLogoProps) {
  return (
    <div className={`flex flex-col items-start gap-2 select-none ${className}`}>
      <img 
        src="/assets/ahspdLogoM.png"
        alt="AHS Properties & Development Ltd."
        className="shrink-0"
        style={{ height: '100px', objectFit: 'contain' }}
      />
      
    </div>
  );
}
