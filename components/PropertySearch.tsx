/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Layers, HelpCircle, ArrowUpRight, Sparkles, X, Check, Eye, Building2, Calendar } from 'lucide-react';
import { DevelopmentProject } from '@/lib/types';
import { DEVELOPMENT_PROJECTS } from '@/lib/data';

interface PropertySearchProps {
  onInquire: (project: DevelopmentProject) => void;
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  maxItems?: number;
  viewAllHref?: string;
}

export default function PropertySearch({
  onInquire,
  selectedArea,
  setSelectedArea,
  maxItems,
  viewAllHref,
}: PropertySearchProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailedPropForModal, setDetailedPropForModal] = useState<DevelopmentProject | null>(null);

  // Areas list — Dhaka-relevant locations
  const areas = [
    { value: 'All', label: 'All Locations' },
    { value: 'Jolshiri Abashon', label: 'Jolshiri Abashon' },
    { value: 'Nayapaltan', label: 'Nayapaltan' },
  ];

  // Derive unique types from DEVELOPMENT_PROJECTS
  const projectTypes = Array.from(new Set(DEVELOPMENT_PROJECTS.map(p => p.type)));
  const types = [
    { value: 'All', label: 'All Types' },
    ...projectTypes.map(t => ({ value: t, label: t })),
  ];

  // Filters logic
  const filteredProjects = DEVELOPMENT_PROJECTS.filter((p) => {
    const matchesArea = selectedArea === 'All' || p.area === selectedArea;
    const matchesType = selectedType === 'All' || p.type === selectedType;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesArea && matchesType && matchesSearch;
  });

  // Limit displayed items when maxItems is set and no filters are active
  const isFiltering = searchQuery !== '' || selectedArea !== 'All' || selectedType !== 'All';
  const displayedProjects = !isFiltering && maxItems ? filteredProjects.slice(0, maxItems) : filteredProjects;

  return (
    <div className="flex flex-col gap-8">
      {/* Filter Panel */}
      <div 
        id="property-search-filter"
        className="w-full bg-surface-muted border border-border-main/80 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col gap-5 select-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          {/* Search */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-text-main tracking-wide uppercase pl-1">
              Search Keyword
            </span>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-main bg-surface-alt text-sm focus:outline-none focus:border-text-muted focus:ring-1 focus:ring-surface-muted transition-all font-medium text-text-main"
              />
            </div>
          </div>

          {/* Type Selector */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-text-main tracking-wide uppercase pl-1">
              Property Categories
            </span>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-main bg-surface-alt text-sm focus:outline-none focus:border-text-muted focus:ring-1 focus:ring-surface-muted transition-all font-medium text-text-main appearance-none cursor-pointer"
              >
                {types.map((tp) => (
                  <option key={tp.value} value={tp.value}>
                    {tp.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
          </div>

          {/* Location Area — Dhaka-relevant areas */}
          <div className="flex flex-col gap-1.5 lg:col-span-3">
            <span className="text-xs font-bold text-text-main tracking-wide uppercase pl-1">
              Location
            </span>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <button
                  key={a.value}
                  onClick={() => setSelectedArea(a.value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    selectedArea === a.value
                  ? 'bg-accent text-text-on-accent shadow-sm'
                  : 'bg-surface-alt border border-border-main text-text-secondary hover:bg-surface-muted hover:text-text-main'
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center px-1">
        <span className="text-xs text-text-secondary font-bold tracking-wide uppercase">
          Found {filteredProjects.length} Projects
        </span>
        {(searchQuery || selectedArea !== 'All' || selectedType !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedArea('All');
              setSelectedType('All');
            }}
            className="text-xs font-bold text-accent hover:text-accent-hover transition-colors cursor-pointer underline underline-offset-2"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Property Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 15px 35px rgba(0,0,0,0.06)" }}
                key={p.id}
                className="group bg-surface-alt rounded-3xl border border-border-main/80 shadow-sm overflow-hidden flex flex-col justify-between cursor-pointer dark:card-hover-glow"
              >                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-muted">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  
                  <span className="absolute top-4 left-4 bg-black/70 dark:bg-black/80 backdrop-blur-md text-text-on-accent text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase">
                    {p.type}
                  </span>

                  <span className={`absolute top-4 right-4 text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-wider flex items-center gap-1 ${
                    p.status === 'ONGOING'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-emerald-50 text-emerald-700'
                  }`}>
                    <Sparkles className="w-3 h-3" />
                    {p.status === 'ONGOING' ? 'Ongoing Project' : 'Completed Project'}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{p.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-text-main tracking-tight leading-snug group-hover:text-accent-hover transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-2 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-border-light text-text-secondary">
                    <div className="flex flex-col items-center justify-center p-1 bg-surface-muted rounded-xl">
                      <Building2 className="w-4 h-4 text-text-muted mb-1" />
                      <span className="text-[10px] font-bold">{p.totalUnits} Units</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1 bg-surface-muted rounded-xl">
                      <Calendar className="w-4 h-4 text-text-muted mb-1" />
                      <span className="text-[10px] font-bold">{p.availableUnits} Avail.</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1 bg-surface-muted rounded-xl">
                      <div className="w-4 h-4 rounded-full border-2 border-emerald-500 mb-1 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[10px] font-bold">{p.percentAvailable}% Avail.</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-surface-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                      style={{ width: `${p.percentAvailable}%` }}
                    />
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-border-light/60 grid grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() => setDetailedPropForModal(p)}
                    className="w-full flex items-center justify-center bg-surface-muted hover:bg-surface-muted text-text-main text-xs font-bold py-2.5 px-3 rounded-xl transition-all cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onInquire(p)}
                    className="w-full flex items-center justify-center gap-1 bg-accent text-text-on-accent hover:bg-accent-hover text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm cursor-pointer dark:btn-glow-accent"
                  >
                    Enquire
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-surface-muted border border-dashed border-border-main rounded-3xl p-12 text-center">
          <HelpCircle className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <h4 className="font-bold text-text-main">No Projects Found</h4>
          <p className="text-xs text-text-secondary mt-1">Try adjusting your search or filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedArea('All');
              setSelectedType('All');
            }}
            className="mt-4 bg-accent text-text-on-accent text-xs font-bold px-5 py-2 rounded-full hover:bg-accent-hover transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* See More / View All Button */}
      {viewAllHref && !isFiltering && filteredProjects.length > (maxItems || 0) && (
        <div className="flex justify-center pt-4">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-text-on-accent text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 group"
          >
            <Eye className="w-4 h-4 text-text-muted group-hover:text-text-on-accent transition-colors" />
            <span>See All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-text-on-accent transition-colors" />
          </Link>
        </div>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {detailedPropForModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailedPropForModal(null)}
              className="absolute inset-0 bg-overlay backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface-alt rounded-[32px] overflow-hidden shadow-2xl border border-border-main flex flex-col max-h-[85vh]"
            >
              <button
                onClick={() => setDetailedPropForModal(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-alt/90 backdrop-blur-sm border hover:bg-surface-muted text-text-secondary flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto">
                <div className="relative aspect-[16/10] bg-surface-muted overflow-hidden">
                  <Image
                    src={detailedPropForModal.image}
                    alt={detailedPropForModal.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 672px) 100vw, 672px"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest">
                        {detailedPropForModal.area} · {detailedPropForModal.type}
                      </span>
                      <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                        {detailedPropForModal.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <MapPin className="w-4 h-4" />
                      <span>{detailedPropForModal.location}</span>
                    </div>
                    <span className={`text-xs font-bold ${detailedPropForModal.status === 'ONGOING' ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {detailedPropForModal.status === 'ONGOING' ? 'ONGOING PROJECT' : 'COMPLETED PROJECT'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-extrabold text-[#b84822] tracking-widest uppercase mb-2">Overview</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {detailedPropForModal.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-surface-muted border border-border-main p-3.5 rounded-2xl text-center">
                      <Building2 className="w-5 h-5 mx-auto mb-1 text-text-muted" />
                      <span className="text-xs font-black">{detailedPropForModal.totalUnits} Total Units</span>
                    </div>
                    <div className="bg-surface-muted border border-border-main p-3.5 rounded-2xl text-center">
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-text-muted" />
                      <span className="text-xs font-black">{detailedPropForModal.availableUnits} Available</span>
                    </div>
                    <div className="bg-surface-muted border border-border-main p-3.5 rounded-2xl text-center">
                      <div className="w-6 h-6 rounded-full border-2 border-emerald-500 mx-auto mb-1 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-xs font-black">{detailedPropForModal.percentAvailable}% Available</span>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-5">
                    <h4 className="text-[10px] font-extrabold text-[#b84822] tracking-widest uppercase mb-3">Availability</h4>
                    <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                        style={{ width: `${detailedPropForModal.percentAvailable}%` }}
                      />
                    </div>
                    <p className="text-xs text-stone-500 mt-2">
                      {detailedPropForModal.percentAvailable}% of units currently available for booking
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onInquire(detailedPropForModal);
                      setDetailedPropForModal(null);
                    }}
                    className="w-full bg-slate-900 hover:bg-[#1e2a4a] text-white py-3.5 rounded-2xl font-bold text-sm mt-4"
                  >
                    Request Live Tour &amp; Presentation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}