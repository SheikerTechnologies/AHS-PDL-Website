'use client';

import { motion } from 'motion/react';
import jobs from '@/content/careers/jobs.json';

interface DepartmentFilterProps {
  selected: string;
  onSelect: (dept: string) => void;
}

export default function DepartmentFilter({ selected, onSelect }: DepartmentFilterProps) {
  const departments = [
    'All',
    ...([...new Set((jobs as { department: string }[]).map((j) => j.department))] as string[]),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => onSelect(dept)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
            selected === dept
              ? 'bg-accent text-text-on-accent shadow-md scale-[1.02]'
              : 'bg-surface-alt border border-border-main/80 text-text-secondary hover:bg-surface-muted hover:text-text-main'
          }`}
        >
          {dept}
        </button>
      ))}
    </div>
  );
}
