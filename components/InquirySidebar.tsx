/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, Download, Calendar } from 'lucide-react';
import { Agent } from '@/lib/types';
import { AGENTS } from '@/lib/data';

interface InquirySidebarProps {
  projectTitle: string;
  agentName?: string;
}

export default function InquirySidebar({ projectTitle, agentName = 'Yalda Sheri' }: InquirySidebarProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const agent = AGENTS.find((a) => a.name === agentName) || AGENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    setSubmitted(true);
    // In production, send to backend
  };

  return (
    <div className="flex flex-col gap-6 sticky top-28">
      {/* Inquiry form card */}
      <div className="bg-surface-alt border border-border-main rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-text-main mb-1">Request Project Details</h3>
        <p className="text-xs text-text-secondary mb-4">
          Get full pricing, floor plans, and availability for {projectTitle}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-border-main bg-surface text-sm focus:outline-none focus:border-accent/50 transition-colors text-text-main placeholder:text-text-muted"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-border-main bg-surface text-sm focus:outline-none focus:border-accent/50 transition-colors text-text-main placeholder:text-text-muted"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-border-main bg-surface text-sm focus:outline-none focus:border-accent/50 transition-colors text-text-main placeholder:text-text-muted"
            />

            <div className="flex flex-col gap-2 mt-1">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-bold py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Site Visit
              </button>
              <button
                type="button"
                onClick={() => alert('Please fill in your details above and we will email you the brochure.')}
                className="w-full flex items-center justify-center gap-2 bg-surface-muted hover:bg-surface-alt text-text-main text-xs font-bold py-3 rounded-xl border border-border-main transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-main">Thank you, {name}!</p>
            <p className="text-xs text-text-secondary">
              A consultant will contact you shortly at <strong>{phone}</strong> or <strong>{email}</strong>.
            </p>
          </div>
        )}
      </div>

      {/* Consultant card */}
      <div className="bg-surface-alt border border-border-main rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-muted shrink-0">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-text-main truncate">{agent.name}</h4>
            <p className="text-[11px] text-text-secondary truncate">{agent.role}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-muted hover:bg-surface text-text-main text-xs font-medium transition-colors border border-border-main"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>{agent.phone}</span>
          </a>
          <a
            href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium transition-colors border border-emerald-200 dark:border-emerald-800/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-muted hover:bg-surface text-text-main text-xs font-medium transition-colors border border-border-main"
          >
            <Mail className="w-4 h-4 text-text-muted" />
            <span className="truncate">{agent.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
