/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Layers, HelpCircle, ArrowUpRight, Eye } from 'lucide-react';
import { DevelopmentProject } from '@/lib/types';
import { DEVELOPMENT_PROJECTS } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

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
  const [savedProjects, setSavedProjects] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ahsp-saved-projects');
      if (stored) setSavedProjects(JSON.parse(stored));
    } catch {}
  }, []);

  const persistSaved = (ids: string[]) => {
    setSavedProjects(ids);
    try {
      localStorage.setItem('ahsp-saved-projects', JSON.stringify(ids));
    } catch {}
  };

  const toggleSave = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const next = savedProjects.includes(id)
      ? savedProjects.filter((pid) => pid !== id)
      : [...savedProjects, id];
    persistSaved(next);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSaved={savedProjects.includes(project.id)}
              onToggleSave={toggleSave}
              onInquire={onInquire}
              index={idx}
            />
          ))}
        </div>
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


    </div>
  );
}