/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image from 'next/image';
import { ArrowLeft, Heart, MapPin, Calendar, Sparkles, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { DevelopmentProject } from '@/lib/types';

interface ProjectDetailHeroProps {
  project: DevelopmentProject;
  images: string[];
  activeImageIndex: number;
  setActiveImageIndex: (idx: number) => void;
  scheme: string;
  completion: string;
  isSaved: boolean;
  onToggleSave: () => void;
  onBack: () => void;
}

export default function ProjectDetailHero({
  project,
  images,
  activeImageIndex,
  setActiveImageIndex,
  scheme,
  completion,
  isSaved,
  onToggleSave,
  onBack,
}: ProjectDetailHeroProps) {
  return (
    <>
      {/* Back and Bookmark Actions Header bar */}
      <div className="flex justify-between items-center bg-surface-alt p-4 rounded-2xl border border-border-main/80 shadow-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-text-main transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#c5a257]" />
          <span>Back to Developments Catalog</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-text-muted font-bold uppercase tracking-widest mr-2">
            Share or Save Scheme
          </span>
          <button
            onClick={onToggleSave}
            className={`flex items-center justify-center p-2.5 rounded-full border transition-all cursor-pointer ${
              isSaved
                ? 'bg-rose-500/10 text-rose-400 border-rose-500/35'
                : 'bg-surface-muted text-text-secondary border-border-main hover:bg-surface-muted'
            }`}
            title="Save project"
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Hero Banner with Image Gallery */}
      <div className="relative h-[320px] md:h-[420px] rounded-[32px] overflow-hidden bg-stone-950 border border-stone-800 flex items-end p-6 md:p-12 shadow-lg group">
        <div className="absolute inset-0 z-0">
          <Image
            src={images[activeImageIndex]}
            alt={project.title}
            fill
            className="object-cover opacity-60 transition-opacity duration-500"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 to-transparent" />
        </div>

        {/* Image Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(activeImageIndex > 0 ? activeImageIndex - 1 : images.length - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(activeImageIndex < images.length - 1 ? activeImageIndex + 1 : 0);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image counter badge */}
        {images.length > 1 && (
          <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
            <Images className="w-3 h-3" />
            <span>{activeImageIndex + 1} / {images.length}</span>
          </div>
        )}

        {/* Thumbnail dots */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeImageIndex
                    ? 'bg-[#dfad42] w-4'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Top-left badges */}
        <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2 select-none">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#dfad42] bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#dfad42]/35">
            {scheme}
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#4ade80]/35 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Title overlay */}
        <div className="relative z-10 flex flex-col gap-2 text-left text-white max-w-4xl">
          <div className="flex items-center gap-1.5 text-[#c5a257] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 fill-[#c5a257]/20" />
            <span>OFF-PLAN PREMIUM MANDATE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-md font-sans mb-1 md:mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-base font-medium text-stone-200">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-[#c5a257]" />
              <span>{project.location}</span>
            </div>
            <span className="hidden sm:inline text-stone-500">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-5 h-5 text-stone-400" />
              <span>Delivery Completion: <strong className="text-[#dfad42] font-semibold">{completion}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
