/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SlidersHorizontal,
  Map as MapIcon,
  Grid3X3,
  Search,
  ChevronDown,
  X,
} from 'lucide-react';
import { PropertyType, ProjectStatus, SortOption } from '@/lib/types';

const STATUS_OPTIONS: { value: ProjectStatus; label: string }[] = [
  { value: 'ONGOING', label: 'Ongoing' },
  { value: 'COMPLETED', label: 'Completed' },
];

const LOCATION_OPTIONS = ['All', 'Jolshiri Abashon', 'Nayapaltan'];

const PROPERTY_TYPES: { value: PropertyType | 'All'; label: string }[] = [
  { value: 'All', label: 'All Types' },
  { value: 'Apartment', label: 'Apartment' },
  { value: 'Townhouse', label: 'Townhouse' },
  { value: 'Villa', label: 'Villa' },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'most-available', label: 'Most Available' },
  { value: 'name-az', label: 'Name A-Z' },
];

const SIZE_RANGES: { label: string; min: number; max: number }[] = [
  { label: 'Any Size', min: 0, max: Infinity },
  { label: 'Under 1,200 sqft', min: 0, max: 1200 },
  { label: '1,200 - 1,800 sqft', min: 1200, max: 1800 },
  { label: '1,800 - 2,500 sqft', min: 1800, max: 2500 },
  { label: 'Over 2,500 sqft', min: 2500, max: Infinity },
];

interface DropdownState {
  status: boolean;
  location: boolean;
  type: boolean;
  sort: boolean;
  size: boolean;
}

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedStatuses: ProjectStatus[];
  onStatusChange: (statuses: ProjectStatus[]) => void;
  selectedArea: string;
  onAreaChange: (area: string) => void;
  selectedTypes: PropertyType[];
  onTypeChange: (types: PropertyType[]) => void;
  sizeRange: { min: number; max: number };
  onSizeRangeChange: (range: { min: number; max: number }) => void;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  showMap: boolean;
  onToggleMap: () => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  resultCount: number;
}

export default function ProjectFilters({
  searchQuery,
  onSearchChange,
  selectedStatuses,
  onStatusChange,
  selectedArea,
  onAreaChange,
  selectedTypes,
  onTypeChange,
  sizeRange,
  onSizeRangeChange,
  sortOption,
  onSortChange,
  showMap,
  onToggleMap,
  onClearFilters,
  hasActiveFilters,
  resultCount,
}: ProjectFiltersProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<keyof DropdownState | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: keyof DropdownState) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleStatus = (status: ProjectStatus) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  };

  const toggleType = (type: PropertyType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  const selectedSizeLabel = SIZE_RANGES.find(
    (r) => r.min === sizeRange.min && r.max === sizeRange.max
  )?.label || 'Size';

  const FilterDropdowns = () => (
    <div className="flex flex-wrap items-center gap-3">
      {/* Status multi-select */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('status')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-main bg-surface-alt text-xs font-medium text-text-main hover:border-text-muted transition-colors cursor-pointer"
        >
          <span>
            {selectedStatuses.length === 0
              ? 'Status'
              : selectedStatuses.length === 1
              ? selectedStatuses[0] === 'ONGOING'
                ? 'Ongoing'
                : 'Completed'
              : `${selectedStatuses.length} selected`}
          </span>
          <ChevronDown className={`w-3 h-3 text-text-muted transition-transform ${openDropdown === 'status' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'status' && (
          <div className="absolute top-full left-0 mt-1 z-30 min-w-[160px] bg-surface-alt border border-border-main rounded-xl shadow-lg p-2">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => toggleStatus(opt.value)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedStatuses.includes(opt.value)
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-surface-muted'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedStatuses.includes(opt.value)
                      ? 'border-accent bg-accent'
                      : 'border-border-main'
                  }`}
                >
                  {selectedStatuses.includes(opt.value) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Location dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('location')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-main bg-surface-alt text-xs font-medium text-text-main hover:border-text-muted transition-colors cursor-pointer"
        >
          <span>{selectedArea}</span>
          <ChevronDown className={`w-3 h-3 text-text-muted transition-transform ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'location' && (
          <div className="absolute top-full left-0 mt-1 z-30 min-w-[180px] bg-surface-alt border border-border-main rounded-xl shadow-lg p-2">
            {LOCATION_OPTIONS.map((loc) => (
              <button
                key={loc}
                onClick={() => { onAreaChange(loc); toggleDropdown('location'); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedArea === loc
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-surface-muted'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedArea === loc ? 'border-accent' : 'border-border-main'
                  }`}
                >
                  {selectedArea === loc && (
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </div>
                {loc}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Property Type multi-select */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('type')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-main bg-surface-alt text-xs font-medium text-text-main hover:border-text-muted transition-colors cursor-pointer"
        >
          <span>
            {selectedTypes.length === 0
              ? 'Type'
              : selectedTypes.length === 1
              ? selectedTypes[0]
              : `${selectedTypes.length} selected`}
          </span>
          <ChevronDown className={`w-3 h-3 text-text-muted transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'type' && (
          <div className="absolute top-full left-0 mt-1 z-30 min-w-[170px] bg-surface-alt border border-border-main rounded-xl shadow-lg p-2">
            {PROPERTY_TYPES.filter((t) => t.value !== 'All').map((opt) => (
              <button
                key={opt.value}
                onClick={() => toggleType(opt.value as PropertyType)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedTypes.includes(opt.value as PropertyType)
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-surface-muted'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedTypes.includes(opt.value as PropertyType)
                      ? 'border-accent bg-accent'
                      : 'border-border-main'
                  }`}
                >
                  {selectedTypes.includes(opt.value as PropertyType) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Size range dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('size')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-main bg-surface-alt text-xs font-medium text-text-main hover:border-text-muted transition-colors cursor-pointer"
        >
          <span>{selectedSizeLabel}</span>
          <ChevronDown className={`w-3 h-3 text-text-muted transition-transform ${openDropdown === 'size' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'size' && (
          <div className="absolute top-full left-0 mt-1 z-30 min-w-[170px] bg-surface-alt border border-border-main rounded-xl shadow-lg p-2">
            {SIZE_RANGES.map((range) => (
              <button
                key={range.label}
                onClick={() => {
                  onSizeRangeChange({ min: range.min, max: range.max });
                  toggleDropdown('size');
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  sizeRange.min === range.min && sizeRange.max === range.max
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-surface-muted'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sort dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown('sort')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-main bg-surface-alt text-xs font-medium text-text-main hover:border-text-muted transition-colors cursor-pointer"
        >
          <span>Sort: {SORT_OPTIONS.find((s) => s.value === sortOption)?.label}</span>
          <ChevronDown className={`w-3 h-3 text-text-muted transition-transform ${openDropdown === 'sort' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'sort' && (
          <div className="absolute top-full left-0 mt-1 z-30 min-w-[150px] bg-surface-alt border border-border-main rounded-xl shadow-lg p-2">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onSortChange(opt.value); toggleDropdown('sort'); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  sortOption === opt.value
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-surface-muted'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4" ref={dropdownRef}>
      {/* Header row: title + count + map toggle */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-main tracking-tight">
            Our Developments
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            <span className="font-semibold text-text-main">{resultCount}</span> projects found
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-main bg-surface-alt text-xs font-medium text-text-main hover:bg-surface-muted transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          {/* Map view toggle */}
          <button
            onClick={onToggleMap}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
              showMap
                ? 'bg-accent text-text-on-accent border-accent'
                : 'bg-surface-alt text-text-main border-border-main hover:bg-surface-muted'
            }`}
          >
            {showMap ? (
              <Grid3X3 className="w-3.5 h-3.5" />
            ) : (
              <MapIcon className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">{showMap ? 'Grid' : 'Map'} View</span>
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by project name or location..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-main bg-surface-alt text-sm focus:outline-none focus:border-accent/50 transition-colors text-text-main placeholder:text-text-muted"
        />
      </div>

      {/* Desktop filter bar */}
      <div className="hidden md:flex flex-wrap items-center justify-between gap-3">
        <FilterDropdowns />

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Mobile filter panel */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-2 pt-2 pb-1">
              <FilterDropdowns />
            </div>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-secondary transition-colors mt-2 cursor-pointer"
              >
                <X className="w-3 h-3" />
                Clear all filters
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
