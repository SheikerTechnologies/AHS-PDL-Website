/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Layers, HelpCircle, ArrowUpRight, BedDouble, Bath, Square, Sparkles, X, Check } from 'lucide-react';
import { Property } from '@/lib/types';
import { PROPERTIES } from '@/lib/data';

interface PropertySearchProps {
  onInquire: (property: Property) => void;
  selectedCoast: string;
  setSelectedCoast: (coast: string) => void;
}

export default function PropertySearch({
  onInquire,
  selectedCoast,
  setSelectedCoast,
}: PropertySearchProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailedPropForModal, setDetailedPropForModal] = useState<Property | null>(null);

  // Coasts list
  const coasts = [
    { value: 'All', label: 'All Coasts' },
    { value: 'North', label: 'North Coast' },
    { value: 'East', label: 'East Coast' },
    { value: 'South', label: 'South Coast' },
    { value: 'West', label: 'West Coast' },
  ];

  // Types list
  const types = [
    { value: 'All', label: 'All Types' },
    { value: 'Villa', label: 'Villa' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Duplex', label: 'Duplex' },
  ];

  // Filters logic
  const filteredProperties = PROPERTIES.filter((p) => {
    const matchesCoast = selectedCoast === 'All' || p.coast === selectedCoast;
    const matchesType = selectedType === 'All' || p.type === selectedType;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCoast && matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Filter Panel */}
      <div 
        id="property-search-filter"
        className="w-full bg-stone-50 border border-slate-200/80 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col gap-5 select-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          {/* Search */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-700 tracking-wide uppercase pl-1">
              Search Keyword
            </span>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 transition-all font-medium text-slate-800"
              />
            </div>
          </div>

          {/* Type Selector */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-slate-700 tracking-wide uppercase pl-1">
              Property Categories
            </span>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 transition-all font-medium text-slate-800 appearance-none cursor-pointer"
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

          {/* Location Area */}
          <div className="flex flex-col gap-1.5 lg:col-span-3">
            <span className="text-xs font-bold text-slate-700 tracking-wide uppercase pl-1">
              Location
            </span>
            <div className="flex flex-wrap gap-2">
              {coasts.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedCoast(c.value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    selectedCoast === c.value
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center px-1">
        <span className="text-xs text-slate-500 font-bold tracking-wide uppercase">
          Found {filteredProperties.length} Properties
        </span>
        {(searchQuery || selectedCoast !== 'All' || selectedType !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoast('All');
              setSelectedType('All');
            }}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-950 transition-colors cursor-pointer underline underline-offset-2"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Property Grid */}
      {filteredProperties.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((p, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 15px 35px rgba(0,0,0,0.06)" }}
                key={p.id}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase">
                    {p.coast} Coast
                  </span>

                  {p.isFeatured && (
                    <span className="absolute top-4 right-4 bg-amber-50 text-amber-700 text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Signature
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{p.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-950 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-slate-600">
                    <div className="flex flex-col items-center justify-center p-1 bg-slate-50 rounded-xl">
                      <BedDouble className="w-4 h-4 text-slate-500 mb-1" />
                      <span className="text-[10px] font-bold">{p.bedrooms} Beds</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1 bg-slate-50 rounded-xl">
                      <Bath className="w-4 h-4 text-slate-500 mb-1" />
                      <span className="text-[10px] font-bold">{p.bathrooms} Baths</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1 bg-slate-50 rounded-xl">
                      <Square className="w-4 h-4 text-slate-500 mb-1" />
                      <span className="text-[10px] font-bold">{p.areaSqm} sqm</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {p.features.slice(0, 3).map((f) => (
                      <span key={f} className="bg-stone-100 text-slate-600 text-[9px] font-bold px-2 py-1 rounded-lg">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100/60 grid grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() => setDetailedPropForModal(p)}
                    className="w-full flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-2.5 px-3 rounded-xl transition-all cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onInquire(p)}
                    className="w-full flex items-center justify-center gap-1 bg-slate-900 text-white hover:bg-[#1e2a4a] text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
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
        <div className="bg-stone-50 border border-dashed border-slate-300 rounded-3xl p-12 text-center">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h4 className="font-bold text-slate-800">No Properties Found</h4>
          <p className="text-xs text-slate-500 mt-1">Try adjusting your search or filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoast('All');
              setSelectedType('All');
            }}
            className="mt-4 bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Property Detail Modal */}
      <AnimatePresence>
        {detailedPropForModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailedPropForModal(null)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[85vh]"
            >
              <button
                onClick={() => setDetailedPropForModal(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border hover:bg-stone-100 text-stone-700 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto">
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={detailedPropForModal.image}
                    alt={detailedPropForModal.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest">
                        {detailedPropForModal.coast} Coast
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
                    <span className="text-xs font-bold text-emerald-600">RAJUK APPROVED</span>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-extrabold text-[#b84822] tracking-widest uppercase mb-2">Overview</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {detailedPropForModal.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-stone-50 border border-stone-150 p-3.5 rounded-2xl text-center">
                      <BedDouble className="w-5 h-5 mx-auto mb-1 text-stone-500" />
                      <span className="text-xs font-black">{detailedPropForModal.bedrooms} Bedrooms</span>
                    </div>
                    <div className="bg-stone-50 border border-stone-150 p-3.5 rounded-2xl text-center">
                      <Bath className="w-5 h-5 mx-auto mb-1 text-stone-500" />
                      <span className="text-xs font-black">{detailedPropForModal.bathrooms} Bathrooms</span>
                    </div>
                    <div className="bg-stone-50 border border-stone-150 p-3.5 rounded-2xl text-center">
                      <Square className="w-5 h-5 mx-auto mb-1 text-stone-500" />
                      <span className="text-xs font-black">{detailedPropForModal.areaSqm} sqm</span>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-5">
                    <h4 className="text-[10px] font-extrabold text-[#b84822] tracking-widest uppercase mb-3">Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {detailedPropForModal.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-sm text-stone-600">
                          <div className="w-5 h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
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