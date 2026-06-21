/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  Search,
  MapPin,
  Layers,
  Compass,
  HelpCircle,
  Heart,
  ArrowRight,
  Sparkles,
  Building2,
} from 'lucide-react';
import { DevelopmentProject } from '@/lib/types';

interface ProjectGridProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCoast: string;
  setSelectedCoast: (val: string) => void;
  selectedStatus: string;
  setSelectedStatus: (val: string) => void;
  filteredProjects: DevelopmentProject[];
  savedProjects: string[];
  toggleSave: (id: string, e?: React.MouseEvent) => void;
  onProjectClick: (project: DevelopmentProject) => void;
}

export default function ProjectGrid({
  searchQuery,
  setSearchQuery,
  selectedCoast,
  setSelectedCoast,
  selectedStatus,
  setSelectedStatus,
  filteredProjects,
  savedProjects,
  toggleSave,
  onProjectClick,
}: ProjectGridProps) {
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-4 select-none">
      {/* TITLE HEADER */}
      <div className="text-left mb-2 animate-in fade-in duration-300">
        <span className="text-xs font-extrabold text-gold-dark tracking-widest uppercase block mb-1">
          DEVELOPMENT SCHEMES
        </span>
        <h2 className="text-3xl font-extrabold text-text-main tracking-tight font-sans">
          Investment Projects & Townships
        </h2>
        <p className="text-sm text-text-secondary max-w-2xl mt-1">
          AHS Properties & Development Ltd. represents premium developments in Bangladesh. Explore pre-construction apartments and high-yield residential portfolios in Jolshiri Abashon and Dhaka.
        </p>
      </div>

      {/* STATISTICS BAR */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-alt p-6 rounded-2xl border border-border-main/80 shadow-sm animate-in fade-in duration-300">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-text-main">71</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Total Listings</span>
          </div>
          <div className="hidden md:block w-[1px] h-8 bg-border-main" />
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xl font-bold text-text-main">70</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">For Sale</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xl font-bold text-text-main">1</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">For Rent</span>
          </div>
        </div>
        <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest flex items-center gap-1.5 bg-surface-muted px-3.5 py-1.5 rounded-lg border border-border-light">
          <Building2 className="w-3.5 h-3.5 text-text-muted" />
          <span>EDB Scheme Approved Real Estate</span>
        </div>
      </div>

      {/* SEARCH AND FILTER CONTROLS */}
      <div className="bg-surface-alt border border-border-main/80 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-6 flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-1 font-sans">
              Search Developments & Schemes
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by development title or region..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-main bg-surface-muted/20 text-sm focus:outline-none focus:border-text-muted transition-all font-medium text-text-main"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-1 font-sans">
              Investment Status
            </label>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-main bg-surface-alt text-sm focus:outline-none focus:border-text-muted transition-all font-medium text-text-main appearance-none cursor-pointer"
              >
                <option value="All">All Investment Types</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Pre-Launch">Pre-Launch Marketing</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 flex flex-col gap-1.5 font-sans">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-1">
              Select Location
            </label>
            <div className="relative">
              <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <select
                value={selectedCoast}
                onChange={(e) => setSelectedCoast(e.target.value)}
                aria-label="Filter locations by region"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border-main bg-surface-alt text-sm focus:outline-none focus:border-text-muted transition-all font-medium text-text-main appearance-none cursor-pointer"
              >
                <option value="All">All Locations</option>
                <option value="North">North</option>
                <option value="West">West</option>
                <option value="East">East</option>
                <option value="South">South</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-stone-400">▼</div>
            </div>
          </div>
        </div>

        {(searchQuery || selectedCoast !== 'All' || selectedStatus !== 'All') && (
          <div className="flex justify-end">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCoast('All');
                setSelectedStatus('All');
              }}
              className="text-xs font-bold text-gold-dark hover:text-gold underline underline-offset-2 transition-colors"
            >
              Clear Search Filters
            </button>
          </div>
        )}
      </div>

      {/* PROJECT CARDS GRID */}
      {filteredProjects.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 animate-in fade-in-50 duration-300">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const isSaved = savedProjects.includes(proj.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
                  whileHover={{ y: -8, scale: 1.015, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
                  key={proj.id}
                  onClick={() => onProjectClick(proj)}
                  className="group relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden bg-stone-950 dark:bg-surface-raised border border-stone-800 dark:border-border-main flex flex-col justify-end p-6 md:p-8 shadow-xl cursor-pointer dark:shadow-card-premium transition-all duration-300"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 to-transparent" />
                  </div>

                  <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-center select-none">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#dfad42] bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-[#dfad42]/20 w-fit">
                      {proj.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-[#4ade80] bg-black/40 backdrop-blur-md border border-[#4ade80]/30 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                      {proj.availableUnits} Available Units
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col gap-4 text-left">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-extrabold text-[#c5a257] uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#c5a257] fill-[#c5a257]/20" />
                        {proj.status}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight leading-none group-hover:text-[#dfad42] transition-colors">
                        {proj.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-stone-300 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{proj.location}</span>
                      </div>
                      <p className="text-xs text-stone-200/80 leading-relaxed font-normal line-clamp-2 mt-1">
                        {proj.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/12 pt-4 mt-2 text-white/90">
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Total Units</span>
                        <span className="text-sm font-extrabold mt-0.5 font-mono">{proj.totalUnits} Units</span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Available</span>
                        <span className="text-sm font-extrabold text-emerald-400 mt-0.5 font-mono">{proj.percentAvailable}%</span>
                      </div>
                    </div>

                    <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden mt-1 select-none">
                      <div
                        className="bg-gradient-to-r from-[#dfad42] to-emerald-400 h-full rounded-full"
                        style={{ width: `${proj.percentAvailable}%` }}
                      />
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button className="bg-[#c5a257] group-hover:bg-[#dfad42] text-stone-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => toggleSave(proj.id, e)}
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-rose-500/10 text-rose-400 border-rose-500/35'
                            : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-stone-300'}`} />
                        <span>{isSaved ? 'Saved' : 'Save'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-surface-alt border border-dashed border-border-main rounded-3xl p-12 text-center flex flex-col items-center justify-center select-none font-sans">
          <HelpCircle className="w-10 h-10 text-text-muted mb-3" />
          <h4 className="font-extrabold text-text-main text-sm">No Development Projects Found</h4>
          <p className="text-xs text-text-secondary mt-1 max-w-sm">
            We currently don&rsquo;t have ongoing construction or pre-launch real estate matching your current coastal filter tags.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoast('All');
              setSelectedStatus('All');
            }}
            className="mt-4 bg-accent hover:bg-accent-hover text-text-on-accent text-xs font-bold px-5 py-2.5 rounded-full shadow-sm transition-colors text-center"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* BENEFITS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-surface border rounded-2xl p-5 flex gap-4 items-start text-left">
          <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-xl shrink-0 text-green">🌴</div>
          <div>
            <h4 className="text-xs font-black uppercase text-text-main tracking-wider">Permanent Residency Support</h4>
            <p className="text-[11px] text-text-secondary leading-relaxed mt-1">
              EDB projects starting above $375,000 guarantee fast-track status for families.
            </p>
          </div>
        </div>
        <div className="bg-surface border rounded-2xl p-5 flex gap-4 items-start text-left">
          <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-xl shrink-0 text-navy">📈</div>
          <div>
            <h4 className="text-xs font-black uppercase text-text-main tracking-wider">Strong Rental Yields</h4>
            <p className="text-[11px] text-text-secondary leading-relaxed mt-1">
              Fully-managed short let programs delivering 6.5% - 9% annual net dividend payouts.
            </p>
          </div>
        </div>
        <div className="bg-surface border rounded-2xl p-5 flex gap-4 items-start text-left">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-xl shrink-0 text-amber-600">🔒</div>
          <div>
            <h4 className="text-xs font-black uppercase text-text-main tracking-wider">Safe Escrow Accounts</h4>
            <p className="text-[11px] text-text-secondary leading-relaxed mt-1">
              Protected stage payments verified by certified banking escrow and registered property deeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
