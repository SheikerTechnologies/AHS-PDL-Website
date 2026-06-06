/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface AHSLogoProps {
  className?: string;
  type?: 'icon' | 'horizontal' | 'full';
  iconSize?: number;
  textColor?: 'dark' | 'light';
}

export default function AHSLogo({
  className = '',
  type = 'full',
  iconSize = 40,
  textColor = 'dark',
}: AHSLogoProps) {
  const headingColorClass = textColor === 'dark' ? 'text-[#b84822]' : 'text-[#f5653b]';
  const subtextColorClass = textColor === 'dark' ? 'text-zinc-800' : 'text-zinc-200';

  if (type === 'icon') {
    return (
      <img
        src="/assets/ahspdl1.png"
        alt="AHS Logo"
        className={`select-none shrink-0 ${className}`}
        style={{ width: `${iconSize}px`, height: `${iconSize}px`, objectFit: 'contain' }}
      />
    );
  }
  //this is navbar logo 
  if (type === 'horizontal') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <img
          src="/assets/ahspdLogoL.png"
          alt="AHS Properties & Development Ltd."
          className="shrink-0"
          style={{ height: `${iconSize}px`, objectFit: 'contain' }}
        />
      </div>
    );
  }

  // Full, vertically-arranged premium representation
  return (
    <div className={`flex flex-col items-center text-center justify-center select-none ${className}`}>
      {/* Logo portion scaled nicely */}
      <img
        src="/assets/ahspdLogoM.png"
        alt="AHS Logo"
        className="mx-auto"
        style={{ width: `${iconSize * 2.8}px`, height: `${iconSize * 2.2}px`, objectFit: 'contain' }}
      />
    </div>
  );
}
