'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Clock, Briefcase, ArrowRight, Building2 } from 'lucide-react';
import Link from 'next/link';
import jobs from '@/content/careers/jobs.json';
import type { Job } from '@/lib/types';

interface JobListingProps {
  departmentFilter: string;
}

export default function JobListing({ departmentFilter }: JobListingProps) {
  const allJobs = jobs as Job[];
  const filtered = departmentFilter === 'All'
    ? allJobs
    : allJobs.filter((j) => j.department === departmentFilter);

  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="open-positions" className="w-full py-16 bg-surface select-none scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-main tracking-tight">
            Open Positions
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            {filtered.length} {filtered.length === 1 ? 'role' : 'roles'} found
            {departmentFilter !== 'All' && ` in ${departmentFilter}`}
          </p>
        </motion.div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-surface-alt rounded-2xl border border-border-light">
            <Briefcase className="w-12 h-12 text-text-muted mx-auto mb-3" />
            <p className="text-text-secondary font-medium">No open roles in this department right now.</p>
            <p className="text-sm text-text-muted mt-1">Check back soon or explore other departments.</p>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-border-light border border-border-main rounded-2xl overflow-hidden bg-surface-alt">
            {filtered.map((job) => {
              const isOpen = expanded === job.slug;
              return (
                <div key={job.slug}>
                  <button
                    onClick={() => setExpanded(isOpen ? null : job.slug)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-text-main group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                        {job.remoteFriendly && (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Remote OK</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <Link
                        href={`/careers/${job.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                      >
                        Apply
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-border-light bg-surface/50">
                          <p className="text-sm text-text-secondary leading-relaxed mb-4">
                            {job.description}
                          </p>

                          {job.responsibilities.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-xs font-extrabold text-text-muted uppercase tracking-wider mb-2">Responsibilities</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {job.responsibilities.map((r, i) => (
                                  <li key={i} className="text-sm text-text-secondary">{r}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {job.requirements.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-xs font-extrabold text-text-muted uppercase tracking-wider mb-2">Requirements</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {job.requirements.map((r, i) => (
                                  <li key={i} className="text-sm text-text-secondary">{r}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <Link
                            href={`/careers/${job.slug}`}
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md mt-2"
                          >
                            Apply Now
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
