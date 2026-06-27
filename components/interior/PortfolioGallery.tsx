'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import portfolio from '@/content/interior-design/portfolio.json';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  before?: string;
  after?: string;
  hasBeforeAfter: boolean;
}

export default function PortfolioGallery() {
  const [items] = useState<PortfolioItem[]>(portfolio as PortfolioItem[]);
  const [selected, setSelected] = useState<{ item: PortfolioItem; view: 'before' | 'after' } | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selected) return;
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const currentIdx = items.findIndex((i) => i.id === selected.item.id);
        if (currentIdx === -1) return;
        const nextIdx =
          e.key === 'ArrowLeft'
            ? (currentIdx - 1 + items.length) % items.length
            : (currentIdx + 1) % items.length;
        setSelected({ item: items[nextIdx], view: 'after' });
      }
    },
    [selected, items]
  );

  useEffect(() => {
    if (selected) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected, handleKeyDown]);

  return (
    <section className="w-full py-20 bg-surface select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent block mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            Our Design Work
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mt-2">
            A curated selection of residential and commercial interiors — click any image to explore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelected({ item, view: 'after' })}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-muted border border-border-light cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={item.after || '/assets/placeholder.jpg'}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-xs font-bold truncate block">{item.title}</span>
                {item.hasBeforeAfter && (
                  <span className="text-white/70 text-[10px]">Before / After available</span>
                )}
              </div>
              {item.hasBeforeAfter && (
                <div className="absolute top-2 right-2 bg-accent/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  B/A
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
              {selected.item.title}
            </div>

            {/* Before/After toggle */}
            {selected.item.hasBeforeAfter && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1">
                <button
                  onClick={(e) => { e.stopPropagation(); setShowBefore(true); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    showBefore ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowBefore(false); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    !showBefore ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  After
                </button>
              </div>
            )}

            {/* Nav buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = items.findIndex((i) => i.id === selected.item.id);
                const prevIdx = (currentIdx - 1 + items.length) % items.length;
                setSelected({ item: items[prevIdx], view: 'after' });
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = items.findIndex((i) => i.id === selected.item.id);
                const nextIdx = (currentIdx + 1) % items.length;
                setSelected({ item: items[nextIdx], view: 'after' });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={`${selected.item.id}-${selected.view === 'before' && selected.item.hasBeforeAfter ? 'before' : 'after'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  showBefore && selected.item.hasBeforeAfter && selected.item.before
                    ? selected.item.before
                    : selected.item.after || ''
                }
                alt={selected.item.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
