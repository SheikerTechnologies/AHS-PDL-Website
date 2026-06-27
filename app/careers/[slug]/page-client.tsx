'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Building2,
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import jobs from '@/content/careers/jobs.json';
import type { Job } from '@/lib/types';

interface JobDetailClientProps {
  slug: string;
}

export default function JobDetailClient({ slug }: JobDetailClientProps) {
  const allJobs = jobs as Job[];
  const job = allJobs.find((j) => j.slug === slug);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface pt-24">
        <div className="text-center max-w-md px-6">
          <h1 className="text-2xl font-extrabold text-text-main mb-2">Position Not Found</h1>
          <p className="text-text-secondary text-sm mb-6">
            This job listing may have been filled or removed.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-text-on-accent text-sm font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            View All Positions
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const body = new FormData();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('message', formData.message);
      body.append('jobSlug', job.slug);
      if (resumeFile) {
        body.append('resume', resumeFile);
      }

      const res = await fetch('/api/careers-application', {
        method: 'POST',
        body,
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setResumeFile(null);
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-surface border border-border-light rounded-xl px-4 py-3.5 text-text placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200';

  return (
    <main className="min-h-screen bg-surface pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Back link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all positions
        </Link>

        {/* Job header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
              {job.department}
            </span>
            {job.remoteFriendly && (
              <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">
                Remote Friendly
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-[1.1]">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {job.department}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {job.type}
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <p className="text-base text-text-secondary leading-relaxed">{job.description}</p>
        </motion.section>

        {/* Responsibilities */}
        {job.responsibilities.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10"
          >
            <h2 className="text-xl font-extrabold text-text-main mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Requirements */}
        {job.requirements.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <h2 className="text-xl font-extrabold text-text-main mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Apply Now Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 scroll-mt-24"
          id="apply-form"
        >
          <div className="border-t border-border-light pt-10">
            <h2 className="text-2xl font-extrabold text-text-main mb-2">
              Apply for {job.title}
            </h2>
            <p className="text-sm text-text-secondary mb-8">
              Fill out the form below and we&rsquo;ll review your application.
            </p>

            <div className="bg-surface-alt border border-border-main/60 rounded-3xl p-8 md:p-10 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+880 1XXX XXXXXX"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                    Resume / CV <span className="text-accent">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full bg-surface border border-border-light rounded-xl px-4 py-3.5 text-sm text-text-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-accent file:text-text-on-accent hover:file:bg-accent-hover file:cursor-pointer cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200"
                  />
                  <p className="text-[10px] text-text-muted mt-1">Accepted: PDF, DOC, DOCX. Max 10MB.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                    Cover Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us why you're a great fit for this role..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent/60 text-text-on-accent font-extrabold text-sm py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed shadow-lg shadow-accent/20 flex items-center justify-center gap-2 dark:btn-glow-accent"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Apply Now
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-xl px-5 py-4 border border-emerald-200 dark:border-emerald-800"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Application submitted! We&rsquo;ll review your application and get back to you.</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-xl px-5 py-4 border border-red-200 dark:border-red-800"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
