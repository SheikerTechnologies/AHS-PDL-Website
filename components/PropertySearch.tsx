/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Grid, Layers, Compass, HelpCircle, ArrowUpRight, BedDouble, Bath, Square, Sparkles, X, Check, Shield } from 'lucide-react';
import { Property, Currency, Language } from '@/lib/types';
import { PROPERTIES, EXCHANGE_RATES, CURRENCY_SYMBOLS, TRANSLATIONS } from '@/lib/data';

interface PropertySearchProps {
  currency: Currency;
  language: Language;
  onInquire: (property: Property) => void;
  selectedCoast: string;
  setSelectedCoast: (coast: string) => void;
}

export default function PropertySearch({
  currency,
  language,
  onInquire,
  selectedCoast,
  setSelectedCoast,
}: PropertySearchProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<number>(200000000); // Max filter value in BDT
  const [detailedPropForModal, setDetailedPropForModal] = useState<Property | null>(null);

  const t = TRANSLATIONS[language];

  // Coasts list
  const coasts = [
    { value: 'All', label: t.allCoasts },
    { value: 'North', label: t.northCoast },
    { value: 'East', label: t.eastCoast },
    { value: 'South', label: t.southCoast },
    { value: 'West', label: t.westCoast },
  ];

  // Types list
  const types = [
    { value: 'All', label: t.allTypes },
    { value: 'Villa', label: t.villa },
    { value: 'Apartment', label: t.apartment },
    { value: 'Penthouse', label: t.penthouse },
    { value: 'Duplex', label: t.duplex },
  ];

  // Format dynamic currency based on currency state
  const formatPrice = (priceInBDT: number) => {
    const rate = EXCHANGE_RATES[currency];
    const converted = priceInBDT * rate;
    const symbol = CURRENCY_SYMBOLS[currency];

    if (currency === 'BDT') {
      return `${symbol} ${(converted / 1000000).toFixed(1)}M`;
    }
    // For USD or EUR, format differently
    return `${symbol} ${(converted).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  // Convert current selected price range filter (in BDT) into currency representation
  const formatFilterPrice = (priceInBDT: number) => {
    const rate = EXCHANGE_RATES[currency];
    const converted = priceInBDT * rate;
    const symbol = CURRENCY_SYMBOLS[currency];
    return `${symbol} ${(converted).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  // Filters logic
  const filteredProperties = PROPERTIES.filter((p) => {
    const matchesCoast = selectedCoast === 'All' || p.coast === selectedCoast;
    const matchesType = selectedType === 'All' || p.type === selectedType;
    const matchesPrice = p.priceBDT <= priceRange;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCoast && matchesType && matchesPrice && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Dynamic Interactive Filter Panel bar */}
      <div 
        id="property-search-filter"
        className="w-full bg-stone-50 border border-slate-200/80 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col gap-5 select-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          {/* Search text query */}
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
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 transition-all font-medium text-slate-800"
              />
            </div>
          </div>

          {/* Type Selector dropdown */}
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

          {/* Max Price budget slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                Maximum Budget Limit
              </span>
              <span className="text-xs font-bold text-indigo-600 font-mono">
                {formatFilterPrice(priceRange)}
              </span>
            </div>
            <div className="py-2 flex items-center">
              <input
                type="range"
                min={20000000}
                max={200000000}
                step={5000000}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Coast selection capsules */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-200/50 pt-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 mr-2">
            Filter Location:
          </span>
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

      {/* Grid count stats and clean reset if needed */}
      <div className="flex justify-between items-center px-1">
        <span className="text-xs text-slate-500 font-bold tracking-wide uppercase">
          Found {filteredProperties.length} Luxury Residences matching filters
        </span>
        {(searchQuery || selectedCoast !== 'All' || selectedType !== 'All' || priceRange < 200000000) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoast('All');
              setSelectedType('All');
              setPriceRange(200000000);
            }}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-950 transition-colors cursor-pointer underline underline-offset-2"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Primary Property Deck */}
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
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between cursor-pointer pointer-events-auto"
              >
                {/* Photo Area with overlay elements */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 select-none">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Location geography badge */}
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase">
                    {p.coast === 'North' ? t.northCoast : p.coast === 'East' ? t.eastCoast : p.coast === 'South' ? t.southCoast : t.westCoast}
                  </span>

                  {/* Exclusive signature star badge */}
                  {p.isFeatured && (
                    <span className="absolute top-4 right-4 bg-amber-50 text-amber-700 text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-wider flex items-center gap-1 shadow-sm border border-amber-200/30">
                      <Sparkles className="w-3 h-3 fill-amber-500 text-amber-500" />
                      Signature
                    </span>
                  )}

                  {/* Gradient bottom overlay for price contrast */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent h-20 flex items-end p-4">
                    <span className="font-sans font-bold text-xl text-white tracking-tight">
                      {formatPrice(p.priceBDT)}
                    </span>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{p.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-950 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Spec Indicators */}
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

                  {/* Features Badges list */}
                  <div className="flex flex-wrap gap-1">
                    {p.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="bg-stone-100 text-slate-600 text-[9px] font-bold px-2 py-1 rounded-lg"
                      >
                        {f}
                      </span>
                    ))}
                    {p.features.length > 3 && (
                      <span className="bg-[#1e2a4a]/5 text-[#1e2a4a] text-[9px] font-bold px-2 py-1 rounded-lg">
                        +{p.features.length - 3} More
                      </span>
                    )}
                  </div>
                </div>

                {/* Action button */}
                <div className="p-5 pt-0 border-t border-slate-100/60 grid grid-cols-2 gap-2 mt-4">
                  <button
                    onClick={() => setDetailedPropForModal(p)}
                    className="w-full flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-2.5 px-3 rounded-xl transition-all cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onInquire(p)}
                    className="w-full flex items-center justify-center gap-1 bg-slate-900 text-white hover:bg-[#1e2a4a] text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-200 group/btn shadow-sm cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-stone-50 border border-dashed border-slate-300 rounded-3xl p-12 text-center flex flex-col items-center justify-center select-none">
          <HelpCircle className="w-10 h-10 text-slate-400 mb-3" />
          <h4 className="font-bold text-slate-800 text-sm">No Properties Found</h4>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            We currently don't have active property matchings for this specific filter setup in the available regions. Try loosening your price or category parameters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCoast('All');
              setSelectedType('All');
              setPriceRange(200000000);
            }}
            className="mt-4 bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm hover:bg-slate-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 
        PREMIUM PROPERTY DETAIL SPEC & DESCRIPTION MODAL
        Provides the complete, rich details matching the "b) Description" directive.
      */}
      <AnimatePresence>
        {detailedPropForModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailedPropForModal(null)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-md pointer-events-auto cursor-pointer"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[85vh] z-10 pointer-events-auto"
            >
              
              {/* Close pin */}
              <button
                onClick={() => setDetailedPropForModal(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 hover:bg-stone-100 text-stone-700 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable contents */}
              <div className="overflow-y-auto w-full">
                
                {/* Hero imagery banner */}
                <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                  <img
                    src={detailedPropForModal.image}
                    alt={detailedPropForModal.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                    <div className="flex flex-col gap-1 text-left">
                      <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest leading-none">
                        {detailedPropForModal.coast === 'North' ? t.northCoast : detailedPropForModal.coast === 'East' ? t.eastCoast : detailedPropForModal.coast === 'South' ? t.southCoast : t.westCoast} Spec
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none mt-1">
                        {detailedPropForModal.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Core descriptions layout spacing */}
                <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
                  
                  {/* First row: MapPin location and detailed specs */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="flex flex-col gap-1 text-left">
                      <div className="flex items-center gap-1.5 text-stone-500 font-bold text-xs md:text-sm">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{detailedPropForModal.location}</span>
                      </div>
                      <span className="text-stone-400 text-[10px] font-bold uppercase tracking-wider block mt-1.5 leading-none">
                        Status: <span className="text-emerald-600 font-extrabold">RAJUK APPROVED DEVELOPER</span>
                      </span>
                    </div>

                    <div className="flex flex-col text-left md:text-right items-start md:items-end gap-1.5 self-start md:self-auto">
                      <span className="text-2xl font-black text-stone-900 tracking-tight font-sans leading-none">
                        {formatPrice(detailedPropForModal.priceBDT)}
                      </span>
                      {currency !== 'BDT' && (
                        <span className="text-[10px] font-bold text-[#b84822] font-mono leading-none">
                          Local BDT: {detailedPropForModal.priceBDT.toLocaleString()} ৳
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Second row: Rich Detailed Description paragraph block */}
                  <div className="flex flex-col gap-2 text-left">
                    <h4 className="text-[10px] font-extrabold text-[#b84822] tracking-widest uppercase mb-1">
                      Overview & Design Concept
                    </h4>
                    <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
                      {detailedPropForModal.description} AHS Properties strictly implements top-tier engineering standards across our strategic developments. Features include robust structural piling, dual-glazed safety panes, Italian micro-marble flooring, and pre-integrated smart CCTV. Excellent high-yield potential and absolute family safety.
                    </p>
                  </div>

                  {/* Third row: Dimensional spec boxes */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-stone-50 border border-stone-150 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
                      <BedDouble className="w-5 h-5 text-stone-500 mb-1.5" />
                      <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Bedrooms</span>
                      <span className="text-xs font-black mt-1.5 text-stone-800 leading-none">{detailedPropForModal.bedrooms} Rooms</span>
                    </div>
                    <div className="bg-stone-50 border border-stone-150 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
                      <Bath className="w-5 h-5 text-stone-500 mb-1.5" />
                      <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Bathrooms</span>
                      <span className="text-xs font-black mt-1.5 text-stone-800 leading-none">{detailedPropForModal.bathrooms} Baths</span>
                    </div>
                    <div className="bg-stone-50 border border-stone-150 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
                      <Square className="w-5 h-5 text-stone-500 mb-1.5" />
                      <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest leading-none">Footprint</span>
                      <span className="text-xs font-black mt-1.5 text-stone-800 leading-none">{detailedPropForModal.areaSqm} sqm</span>
                    </div>
                  </div>

                  {/* Fourth row: Features Bullet checks list */}
                  <div className="flex flex-col gap-3 border-t border-stone-100 pt-5 text-left">
                    <h4 className="text-[10px] font-extrabold text-[#b84822] tracking-widest uppercase">
                      Premium Amenities Checked
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {detailedPropForModal.features.map((feat) => (
                        <div key={feat} className="flex gap-2.5 items-center text-xs text-stone-600 font-medium leading-none">
                          <div className="w-4.5 h-4.5 rounded bg-stone-50 text-emerald-600 flex items-center justify-center border border-stone-200 shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                      <div className="flex gap-2.5 items-center text-xs text-stone-600 font-medium leading-none">
                        <div className="w-4.5 h-4.5 rounded bg-stone-50 text-emerald-600 flex items-center justify-center border border-stone-200 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>Fully Cleared Land Mutation Title</span>
                      </div>
                    </div>
                  </div>

                  {/* Fifth row: Action and contact redirection footer */}
                  <div className="bg-stone-50 border border-stone-150 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2 text-left">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest">PROMPT CONSULTATION</span>
                      <span className="text-xs font-bold text-stone-800 leading-none mt-1">Yalda Sheri | Junaid Nuzeebun</span>
                    </div>
                    <button
                      onClick={() => {
                        onInquire(detailedPropForModal);
                        setDetailedPropForModal(null);
                      }}
                      className="bg-slate-900 hover:bg-[#1e2a4a] text-white hover:scale-[1.01] transition-all text-xs font-extrabold py-2.5 px-5 rounded-xl cursor-pointer shadow-sm text-center"
                    >
                      Request Live Tour & Presentation
                    </button>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
