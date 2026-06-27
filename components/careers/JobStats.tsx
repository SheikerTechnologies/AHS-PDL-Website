'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, MapPin, Wifi } from 'lucide-react';
import jobs from '@/content/careers/jobs.json';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
}

export default function JobStats() {
  const departments = [...new Set((jobs as { department: string }[]).map((j) => j.department))];
  const locations = [...new Set((jobs as { location: string }[]).map((j) => j.location))];
  const remoteCount = (jobs as { remoteFriendly: boolean }[]).filter((j) => j.remoteFriendly).length;

  const stats: StatItem[] = [
    { icon: Briefcase, label: 'Open Roles', value: jobs.length },
    { icon: Building2, label: 'Departments', value: departments.length },
    { icon: MapPin, label: 'Office Locations', value: locations.length },
    { icon: Wifi, label: 'Remote-Friendly Roles', value: remoteCount },
  ];

  return (
    <div className="w-full bg-surface-alt border-b border-border-light py-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface border border-border-light/60 rounded-xl p-5 text-center hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-text-main font-mono">{stat.value}</div>
                <div className="text-xs text-text-secondary font-medium mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
