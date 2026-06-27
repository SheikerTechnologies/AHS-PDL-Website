'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Upload } from 'lucide-react';

const DEPARTMENTS = [
  'Engineering & Architecture',
  'Sales & Marketing',
  'Operations',
  'Design',
];

export default function GeneralApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      body.append('department', formData.department);
      body.append('message', formData.message);
      if (resumeFile) {
        body.append('resume', resumeFile);
      }

      const res = await fetch('/api/careers-application', {
        method: 'POST',
        body,
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', department: '', message: '' });
      setResumeFile(null);
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-surface border border-border-light rounded-xl px-4 py-3.5 text-text placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200';

  return (
    <section className="w-full py-20 bg-surface-muted/30 border-t border-border-light select-none">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent block mb-2">
            Don&rsquo;t see a fit?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            Send Us Your CV Anyway
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            We&rsquo;re always on the lookout for talented individuals. Drop your details and we&rsquo;ll
            reach out when a suitable role opens up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface-alt border border-border-main/60 rounded-3xl p-8 md:p-10 shadow-lg"
        >
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

            <div className="grid sm:grid-cols-2 gap-5">
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
                  Department of Interest
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select department...</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                Resume / CV
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full bg-surface border border-border-light rounded-xl px-4 py-3.5 text-sm text-text-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-accent file:text-text-on-accent hover:file:bg-accent-hover file:cursor-pointer cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200"
                />
              </div>
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
                placeholder="Tell us about yourself, your experience, and why you'd like to join AHS..."
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
                  Submit General Application
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
                <p className="text-sm font-medium">Thank you! We&rsquo;ve received your application and will be in touch.</p>
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
        </motion.div>
      </div>
    </section>
  );
}
