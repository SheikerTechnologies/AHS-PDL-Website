/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image from 'next/image';
import { Building2, CheckCircle2, Shield, Check } from 'lucide-react';

interface ProjectAccreditationsSectionProps {
  projectTitle: string;
  projectDescription: string;
  images: string[];
  activeImageIndex: number;
}

export default function ProjectAccreditationsSection({
  projectTitle,
  projectDescription,
  images,
  activeImageIndex,
}: ProjectAccreditationsSectionProps) {
  return (
    <>
      {/* SECTION: BUILD ON EXCELLENCE */}
      <section className="bg-surface border border-border-main/80 rounded-[32px] p-6 md:p-10 text-left flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="text-xs font-black text-[#c5a257] uppercase tracking-widest">SECTION 01</span>
          <h2 className="text-2xl md:text-3xl font-black text-text-main font-sans tracking-tight uppercase">
            Build On Excellence & Foundations
          </h2>
          <p className="text-sm text-text-secondary font-medium font-sans">
            Every cornerstone at <strong className="text-stone-800">{projectTitle}</strong> is built on structural brilliance, strict geological compliance safeguards, and approved environmental frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-alt border border-border-main/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:border-border-main transition-colors">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-text-main text-sm uppercase tracking-wide">Built on Premium Masonry</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Clad in natural stone materials, providing incredible thermal barrier systems and enduring tropical resilience.
            </p>
          </div>

          <div className="bg-surface-alt border border-border-main/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:border-border-main transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-text-main text-sm uppercase tracking-wide">Built on Approved Standards</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Strictly validated under RAJUK and Cantonment Board planning guidelines. Legally secured via comprehensive civil-code completion guarantees guaranteeing absolute buyer protection.
            </p>
          </div>

          <div className="bg-surface-alt border border-border-main/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:border-border-main transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#1e2a4a]/10 flex items-center justify-center text-[#1e2a4a] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-text-main text-sm uppercase tracking-wide">Built on Integrity & Escrow</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Leverages the civil-code VEFA framework. Fully audited, notarized construction stage payments protect your global investments from day one.
            </p>
          </div>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed border-t border-border-main/60 pt-4 font-normal max-w-5xl">
          {projectDescription} Designed with natural volcanic stone cladding, durable hardwood details, and soaring double-glazed floor-to-ceiling sliding panels, this landmark structure blends organically into local shorelines while establishing modern security structures for discerning global owners.
        </p>
      </section>

      {/* SECTION: DESIGN FOR LIFE */}
      <section className="bg-surface-alt border border-border-main/80 rounded-[32px] p-6 md:p-10 text-left flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-black text-[#c5a257] uppercase tracking-widest pl-0.5">SECTION 02</span>
            <h2 className="text-3xl md:text-4xl font-black text-text-main tracking-tight font-sans uppercase">
              Design for Life
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-normal">
              True luxury is not merely observed — it is felt. The core architectural plans at <strong>{projectTitle}</strong> are crafted around passive design frameworks. Floor plans are mathematically modeled to utilize trade winds, allowing natural cross-ventilation to keep rooms refreshing while minimizing environmental footprints.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {[
                { title: 'Seamless Lifestyles', desc: 'Soaring 3m sliding portals open onto wide private lap pools and sunny endemic botanical garden buffers.' },
                { title: 'Eco-Smart PV Power', desc: 'Integrated state-of-the-art rooftop solar arrays power common facilities and optional home automation desks.' },
                { title: 'Double Acoustic Glazing', desc: 'Dual-pane structural glass assemblies buffer outside ambient noise, ensuring perfect interior silence.' },
                { title: 'High-Velocity Cooling', desc: 'Configured with concealed, quiet Variable Refrigerant Flow (VRF) units for pristine zone-based climate control.' }
              ].map((item, id) => (
                <div key={id} className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#c5a257]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#c5a257]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-text-main uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[11px] text-text-secondary mt-0.5 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 h-[260px] md:h-[350px] rounded-2xl overflow-hidden shadow-inner border border-stone-200 relative animate-in fade-in duration-500">
            <Image
              src={images[activeImageIndex]}
              alt="Architecture design theme"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-stone-950/25" />
            <div className="absolute bottom-4 left-4 right-4 bg-surface-alt/95 backdrop-blur-md p-4 rounded-xl border border-border-main/80 text-left">
              <span className="text-[9px] font-black uppercase text-[#c5a257] tracking-widest block">ENVIRONMENT COEXISTENCE</span>
              <p className="text-[11px] text-text-main font-semibold leading-snug mt-1">
                100% compliant with environmental buffer limits, safeguarding native marine habitats and coastal forest canopy layers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
