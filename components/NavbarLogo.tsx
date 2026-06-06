/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface NavbarLogoProps {
  className?: string;
}

export default function NavbarLogo({ className = '' }: NavbarLogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Compact Icon Badge */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b84822] to-[#a03d1b] rounded-lg shadow-lg" />
        <svg 
          viewBox="0 0 64 64" 
          className="w-6 h-6 relative z-10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern Geometric Building */}
          <rect x="12" y="20" width="8" height="24" fill="white" rx="1" />
          <rect x="28" y="12" width="8" height="32" fill="white" rx="1" />
          <rect x="44" y="24" width="8" height="20" fill="white" rx="1" />
          {/* Window Details */}
          <circle cx="16" cy="26" r="1.5" fill="#b84822" />
          <circle cx="16" cy="34" r="1.5" fill="#b84822" />
          <circle cx="32" cy="18" r="1.5" fill="#b84822" />
          <circle cx="32" cy="26" r="1.5" fill="#b84822" />
          <circle cx="48" cy="30" r="1.5" fill="#b84822" />
          {/* Foundation Line */}
          <line x1="8" y1="46" x2="56" y2="46" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Compact Text */}
      <div className="flex flex-col gap-0">
        <span className="text-sm font-black text-[#b84822] tracking-tighter leading-none">
          AHS PDL
        </span>
        <span className="text-[10px] font-bold text-zinc-700 tracking-wider">
          PROPERTIES
        </span>
      </div>
    </div>
  );
}
