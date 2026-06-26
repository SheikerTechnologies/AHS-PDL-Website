/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { ShieldCheck, FileText, CreditCard } from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: 'Verified Land Titles',
    description: 'All properties fully verified with RAJUK & Cantonment Board approved documentation.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    icon: FileText,
    title: 'Transparent Documentation',
    description: 'Complete end-to-end documentation with escrow-protected stage payments and registered deeds.',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment Plans',
    description: 'Customized installment plans designed to match your investment timeline and cash flow.',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.title}
            className="flex items-start gap-3.5 bg-surface border border-border-main/80 rounded-xl p-4 transition-all duration-200 hover:shadow-sm"
          >
            <div className={`w-10 h-10 rounded-xl ${badge.bgColor} flex items-center justify-center shrink-0`}>
              <Icon className={`w-5 h-5 ${badge.color}`} />
            </div>
            <div className="min-w-0">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-text-main">
                {badge.title}
              </h4>
              <p className="text-[11px] text-text-secondary leading-relaxed mt-0.5">
                {badge.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
