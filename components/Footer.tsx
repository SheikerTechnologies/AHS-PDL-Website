'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import FooterLogo from './FooterLogo';
import { AGENTS } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryAgent = AGENTS[0];

  return (
    <footer className="w-full bg-surface-muted border-t border-border-main">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
       

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <FooterLogo />
            <p className="text-sm text-text-secondary leading-relaxed">
              Premium properties and development in Bangladesh. Transforming real estate dreams into reality.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com/ahsp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 hover:bg-accent text-accent hover:text-text-on-accent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:hover:shadow-[0_0_16px_rgba(208,74,34,0.4)]"
                title="Facebook"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/ahsp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 hover:bg-accent text-accent hover:text-text-on-accent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 dark:hover:shadow-[0_0_16px_rgba(208,74,34,0.4)]"
                title="Instagram"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>              <h3 className="font-semibold text-text mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="/#discover-properties-section"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                Property Search
              </a>
              <a
                href="/services"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                Investment Advisory
              </a>
              <a
                href="/services"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                Consultation
              </a>
              <a
                href="/services"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                Resources
              </a>
            </nav>
          </div>

          {/* Contact Information — consolidated, clearly labeled */}
          <div>              <h3 className="font-semibold text-text mb-4 text-sm uppercase tracking-wide">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Sales</p>
                  <a href="tel:01625555700" className="text-sm text-text-secondary hover:text-accent transition-colors">01625-555700</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">WhatsApp</p>
                  <a href="tel:01725555700" className="text-sm text-text-secondary hover:text-accent transition-colors">01725-555700</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Email</p>
                  <a
                    href={`mailto:${primaryAgent.email}`}
                    className="text-sm text-text-secondary hover:text-accent transition-colors break-all"
                  >
                    {primaryAgent.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Office</p>
                  <p className="text-sm text-text-secondary">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Highlight */}
          <div>              <h3 className="font-semibold text-text mb-4 text-sm uppercase tracking-wide">
              Expert Contact
            </h3>
            <div className="bg-surface-alt border border-border-main rounded-lg p-4 hover:shadow-md transition-shadow">
              <p className="text-sm font-semibold text-text mb-1">
                {primaryAgent.name}
              </p>
              <p className="text-xs text-accent font-medium mb-3">
                {primaryAgent.role}
              </p>
              <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                {primaryAgent.specialty}
              </p>
              <a
                href={`tel:${primaryAgent.phone}`}
                className="inline-block text-xs px-3 py-1.5 bg-accent text-text-on-accent rounded hover:bg-accent-hover transition-colors font-medium dark:btn-glow-accent"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border-main my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>
            &copy; {currentYear} AHS Properties & Development Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="/legal#privacy-policy"
              className="hover:text-accent transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/legal#terms-of-service"
              className="hover:text-accent transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/legal#cookie-settings"
              className="hover:text-accent transition-colors duration-200"
            >
              Cookie Settings
            </a>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
