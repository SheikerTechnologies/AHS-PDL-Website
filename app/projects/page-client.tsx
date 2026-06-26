'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEVELOPMENT_PROJECTS } from '@/lib/data';
import { PropertyType, ProjectStatus, SortOption } from '@/lib/types';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilters from '@/components/ProjectFilters';
import ProjectMapView from '@/components/ProjectMapView';
import Pagination from '@/components/Pagination';
import TrustBadges from '@/components/TrustBadges';

const PROJECTS_PER_PAGE = 12;

export default function ProjectsRouteClient() {
  // Search & filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<ProjectStatus[]>([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedTypes, setSelectedTypes] = useState<PropertyType[]>([]);
  const [sizeRange, setSizeRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [showMap, setShowMap] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Saved projects (localStorage)
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

  // Derived filter/sort logic
  const filteredProjects = useMemo(() => {
    let result = DEVELOPMENT_PROJECTS.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectedStatuses.length === 0 || selectedStatuses.includes(project.status);

      const matchesArea = selectedArea === 'All' || project.area === selectedArea;

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(project.type);

      // Size range filter
      const matchesSize =
        sizeRange.min === 0 && sizeRange.max === Infinity
          ? true
          : project.sqftRange
          ? project.sqftRange.max >= sizeRange.min && project.sqftRange.min <= sizeRange.max
          : true;

      return matchesSearch && matchesStatus && matchesArea && matchesType && matchesSize;
    });

    // Sort
    switch (sortOption) {
      case 'newest':
        // By id as a proxy for "newest" since we don't have dates
        result = [...result].reverse();
        break;
      case 'most-available':
        result = [...result].sort((a, b) => b.percentAvailable - a.percentAvailable);
        break;
      case 'name-az':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [searchQuery, selectedStatuses, selectedArea, selectedTypes, sortOption]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedStatuses.length > 0 ||
    selectedArea !== 'All' ||
    selectedTypes.length > 0 ||
    sizeRange.min !== 0 ||
    sizeRange.max !== Infinity;

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStatuses([]);
    setSelectedArea('All');
    setSelectedTypes([]);
    setSizeRange({ min: 0, max: Infinity });
    setCurrentPage(1);
  };

  return (
    <div className="w-full min-h-screen bg-surface">
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 flex flex-col gap-8">
        {/* Filters */}
        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          selectedStatuses={selectedStatuses}
          onStatusChange={(s) => { setSelectedStatuses(s); setCurrentPage(1); }}
          selectedArea={selectedArea}
          onAreaChange={(a) => { setSelectedArea(a); setCurrentPage(1); }}
          selectedTypes={selectedTypes}
          onTypeChange={(t) => { setSelectedTypes(t); setCurrentPage(1); }}
          sizeRange={sizeRange}
          onSizeRangeChange={(r) => { setSizeRange(r); setCurrentPage(1); }}
          sortOption={sortOption}
          onSortChange={(s) => { setSortOption(s); setCurrentPage(1); }}
          showMap={showMap}
          onToggleMap={() => setShowMap(!showMap)}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
          resultCount={filteredProjects.length}
        />

        {/* Map view or Card grid */}
        <AnimatePresence mode="wait">
          {showMap ? (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectMapView projects={filteredProjects} />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {paginatedProjects.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginatedProjects.map((project, idx) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        isSaved={savedProjects.includes(project.id)}
                        onToggleSave={toggleSave}
                        index={idx}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-text-main mb-1">No projects match your filters</h3>
                  <p className="text-sm text-text-secondary mb-4 max-w-sm">
                    Try adjusting your search criteria or clearing all filters to see all available projects.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-5 py-2.5 bg-accent text-text-on-accent text-xs font-bold rounded-full hover:bg-accent-hover transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust badges (redesigned with lucide-react icons — no emoji) */}
        <div className="mt-8">
          <TrustBadges />
        </div>
      </section>
    </div>
  );
}
