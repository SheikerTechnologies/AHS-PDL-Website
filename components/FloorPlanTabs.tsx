/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ProjectUnit } from '@/lib/projectExtras';

// Floor plan images — add actual floor plan assets here when available
// Each unit type maps to an array of floor plan image paths
const FLOOR_PLANS: Record<string, string[]> = {};

interface FloorPlanTabsProps {
  units: ProjectUnit[];
}

export default function FloorPlanTabs({ units }: FloorPlanTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!units || units.length === 0) return null;

  const currentUnit = units[activeTab];
  const floorPlanImages = FLOOR_PLANS[currentUnit.name] || [];

  return (
    <div className="flex flex-col gap-4">
      {/* Tab bar */}
      <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
        {units.map((unit, idx) => (
          <button
            key={unit.name}
            onClick={() => setActiveTab(idx)}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              idx === activeTab
                ? 'bg-accent text-text-on-accent shadow-sm'
                : 'bg-surface-muted text-text-secondary hover:bg-surface-alt border border-border-main'
            }`}
          >
            {unit.beds} Bed - {unit.name.includes('Type') ? unit.name.split(' - ')[1] || unit.name : unit.name.split(' ').slice(0, 3).join(' ')}
          </button>
        ))}
      </div>

      {/* Floor plan display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-muted border border-border-main"
        >
          {false ? ( // Set to true and add floor plan paths above when assets are available
            null
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted gap-2">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <span className="text-xs font-medium">Floor plan coming soon</span>
              <span className="text-[10px] text-text-muted/60">{currentUnit.name} &middot; {currentUnit.sizeSqm} m&sup2;</span>
            </div>
          )}

          {/* Unit info overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs">
            <div className="flex items-center gap-3">
              <span className="font-medium">{currentUnit.name}</span>
              <span className="text-white/60">|</span>
              <span>{currentUnit.sizeSqm} m&sup2;</span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                currentUnit.status === 'Available'
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : currentUnit.status === 'Only 1 Left'
                  ? 'bg-amber-500/20 text-amber-300'
                  : 'bg-rose-500/20 text-rose-300'
              }`}
            >
              {currentUnit.status}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
