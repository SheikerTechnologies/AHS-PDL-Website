'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import FooterLogo from './FooterLogo';
import { AGENTS } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeLoading(true);
    setTimeout(() => {
      setSubscribeLoading(false);
      setSubscribeSuccess(true);
      setEmail('');
      setTimeout(() => setSubscribeSuccess(false), 3000);
    }, 800);
  };

  const primaryAgent = AGENTS[0];

  return (
    <footer className="w-full bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
       

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <FooterLogo />
            <p className="text-sm text-stone-600 leading-relaxed">
              Premium properties and development in Bangladesh. Transforming real estate dreams into reality.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 bg-[#b84822]/10 hover:bg-[#b84822] text-[#b84822] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#b84822]/10 hover:bg-[#b84822] text-[#b84822] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-stone-600 hover:text-[#b84822] transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-[#b84822]/50 rounded-full group-hover:bg-[#b84822] transition-colors" />
                Property Search
              </a>
              <a
                href="#"
                className="text-sm text-stone-600 hover:text-[#b84822] transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-[#b84822]/50 rounded-full group-hover:bg-[#b84822] transition-colors" />
                Investment Advisory
              </a>
              <a
                href="#"
                className="text-sm text-stone-600 hover:text-[#b84822] transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-[#b84822]/50 rounded-full group-hover:bg-[#b84822] transition-colors" />
                Consultation
              </a>
              <a
                href="#"
                className="text-sm text-stone-600 hover:text-[#b84822] transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-[#b84822]/50 rounded-full group-hover:bg-[#b84822] transition-colors" />
                Resources
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Email</p>
                  <a
                    href={`mailto:${primaryAgent.email}`}
                    className="text-sm text-stone-600 hover:text-[#b84822] transition-colors break-all"
                  >
                    {primaryAgent.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Phone</p>
                  <a
                    href={`tel:${primaryAgent.phone}`}
                    className="text-sm text-stone-600 hover:text-[#b84822] transition-colors"
                  >
                    {primaryAgent.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#b84822] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Location</p>
                  <p className="text-sm text-stone-600">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Highlight */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">
              Expert Contact
            </h3>
            <div className="bg-white border border-stone-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <p className="text-sm font-semibold text-stone-900 mb-1">
                {primaryAgent.name}
              </p>
              <p className="text-xs text-[#b84822] font-medium mb-3">
                {primaryAgent.role}
              </p>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                {primaryAgent.specialty}
              </p>
              <a
                href={`tel:${primaryAgent.phone}`}
                className="inline-block text-xs px-3 py-1.5 bg-[#b84822] text-white rounded hover:bg-[#a03d1b] transition-colors font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-stone-300 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
          <p>
            &copy; {currentYear} AHS Properties & Development Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="#"
              className="hover:text-[#b84822] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#b84822] transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[#b84822] transition-colors duration-200"
            >
              Cookie Settings
            </a>
            <a
              href="#"
              className="hover:text-[#b84822] transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
