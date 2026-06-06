/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Eye, Copy, Check, Palette, Sparkles, BookOpen, AlertCircle, Compass } from 'lucide-react';

interface ThemeAnalyzerProps {
  onClose: () => void;
  blurLevel: string;
  setBlurLevel: (val: string) => void;
  roundedLevel: string;
  setRoundedLevel: (val: string) => void;
}

export default function ThemeAnalyzer({
  onClose,
  blurLevel,
  setBlurLevel,
  roundedLevel,
  setRoundedLevel,
}: ThemeAnalyzerProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'palette' | 'glass' | 'philosophy' | 'code'>('palette');

  const copyToClipboard = (text: string, type: 'color' | 'code') => {
    navigator.clipboard.writeText(text);
    if (type === 'color') {
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(null), 1500);
    } else {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1500);
    }
  };

  const colors = [
    { name: 'Deep Indigo', hex: '#1e2a4a', text: 'white', tailwind: 'bg-[#1e2a4a]', desc: 'Core brand primary. Represents modern architectural structure and premium real estate trust.' },
    { name: 'Sand Drift White', hex: '#fafaf9', text: 'slate-900', tailwind: 'bg-stone-50', desc: 'Slightly off-white background ensuring high eye-comfort under tropical sun lighting.' },
    { name: 'Frosted Cloud', hex: 'rgba(255,255,255,0.25)', text: 'slate-800', tailwind: 'bg-white/25', desc: 'Micro-translucent navbar base carrying the backdrop-blur filter.' },
    { name: 'Lagoon Slate Accent', hex: '#475569', text: 'white', tailwind: 'bg-slate-600', desc: 'Secondary neutral for typography, subtle borders, and interactive indicators.' },
    { name: 'Gold Leaf Highlight', hex: '#d97706', text: 'white', tailwind: 'bg-amber-600', desc: 'Rare warning/focus highlight reflecting volcanic sunburst rays (used sparingly).' },
  ];

  const glassmorphismClass = `backdrop-blur-${blurLevel} bg-white/25 border border-white/35 rounded-${roundedLevel} shadow-lg`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 mb-1">
            <Palette className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Design Audit</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
            AHS Brand Style & Theme Guide
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            An in-depth UI/UX analysis of their premium luxury real estate portal design conventions.
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 cursor-pointer transition-colors"
        >
          Close Panel
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 gap-2 overflow-x-auto pb-1 scrollbar-none">
        {(['palette', 'glass', 'philosophy', 'code'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-bold rounded-lg border-b-2 transition-all capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab === 'glass' ? 'Glass Sandbox' : tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === 'palette' && (
        <div className="flex flex-col gap-4 animate-in fade-in-50 duration-150">
          <p className="text-xs font-medium text-slate-500">
            AHS utilizes a restrained, organic color palette drawing from the modern design layout: deep indigo, warm off-white sands, and modern architectural concrete.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 mt-2">
            {colors.map((c) => (
              <div
                key={c.hex}
                onClick={() => copyToClipboard(c.hex, 'color')}
                className="group relative flex flex-col justify-between p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer bg-slate-50/50"
              >
                <div className={`${c.tailwind} w-full h-12 rounded-xl mb-3 border border-slate-200/50 relative flex items-center justify-center`}>
                  <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 text-slate-600 mix-blend-difference transition-all" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-800">{c.name}</span>
                    <span className="text-[10px] uppercase font-mono text-slate-400">{c.hex}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal">{c.desc}</p>
                </div>
                {copiedColor === c.hex && (
                  <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-white animation-in zoom-in-95 duration-100">
                    <Check className="w-5 h-5 text-emerald-400 mb-1" />
                    <span className="text-[10px] font-bold">Hex Copied!</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'glass' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in-50 duration-150">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5 text-indigo-600">
              <Compass className="w-4.5 h-4.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Interactive Controls</span>
            </div>
            <p className="text-xs text-slate-500">
              Manipulate variables to alter the translucent glassmorphism properties of the navbar and visual modules in real-time.
            </p>

            {/* Controller Inputs */}
            <div className="flex flex-col gap-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex justify-between">
                  <span>Backdrop Blur Filter Level</span>
                  <span className="text-indigo-600">blur-{blurLevel}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['none', 'sm', 'md', 'xl'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setBlurLevel(lvl)}
                      className={`py-1 text-xs font-bold rounded-lg ${
                        blurLevel === lvl
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex justify-between">
                  <span>Border Corner Roundness</span>
                  <span className="text-indigo-600">rounded-{roundedLevel}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['none', 'lg', '2xl', 'full'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setRoundedLevel(r)}
                      className={`py-1 text-xs font-bold rounded-lg ${
                        roundedLevel === r
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-slate-950 p-6 rounded-2xl relative overflow-hidden h-48 border border-slate-800">
            {/* Background elements to highlight blur */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-amber-500 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute bottom-6 right-6 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-55"></div>
            <div className="absolute top-10 right-10 w-16 h-16 bg-pink-500 rounded-full blur-2xl opacity-40"></div>

            {/* Generated Floating Card */}
            <div id="sandbox-preview-container" className="relative z-10">
              <div className={glassmorphismClass + " bg-white/20 border-white/25 text-white p-5 backdrop-blur-" + blurLevel}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-85">Live Sandbox Panel</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <h4 className="font-bold text-sm tracking-tight">Luxury Property Preview</h4>
                <p className="text-[10px] text-white/70 leading-normal mt-1 max-w-[220px]">
                  Simulated card reacting live to the blur and corner styles of the Allys design language.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'philosophy' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in-50 duration-150">
          <div className="p-4 rounded-2xl bg-stone-50 border border-slate-100">
            <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-2.5">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              1. Floating Architectural Layering
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Components like the core navigation bar float on elevated indexes. By using `fixed` anchors paired with generous negative spacing, layouts mimic modern structural cantilevers seen in luxury modern villas.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-slate-100">
            <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-2.5">
              <Eye className="w-4 h-4 text-indigo-500" />
              2. Atmospheric Transparency
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Real estate portals depend on gorgeous photography. By letting high-resolution seascapes bleed through a semi-transparent `backdrop-blur`, the UI remains beautiful, readable, and firmly integrated with the location.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-slate-100">
            <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5 mb-2.5">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              3. Curved Infinity Concept
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Extreme roundness (`rounded-full` / `rounded-3xl`) simulates natural land curves, infinity horizons, and waves. Sharp geometric edges are reserved exclusively for structural elements, emphasizing elegance.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'code' && (
        <div className="flex flex-col gap-3 animate-in fade-in-50 duration-150">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-700">Frosted Glass Navbar CSS Recipe</span>
            <button
              onClick={() => copyToClipboard(`/* AHS Luxury Frosted-Glass Pill CSS Recipe */\n.ahs-glass-nav {\n  backdrop-filter: blur(16px);\n  background-color: rgba(255, 255, 255, 0.25);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 9999px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n}`, 'code')}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-950 font-bold transition-colors cursor-pointer"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied Recipe' : 'Copy Code Box'}</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-800">
{`/* Tailwind CSS Utility Recipe */
<div className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 z-50">
  <div className="backdrop-blur-${blurLevel} bg-white/25 border border-white/35 rounded-${roundedLevel} shadow-lg py-3 px-6 flex items-center justify-between">
    <!-- Brand -->
    <div className="font-bold tracking-widest text-[#1e2a4a]">AHS</div>
    ...
  </div>
</div>`}
          </pre>
          <div className="flex items-start gap-2 bg-amber-50/50 border border-amber-200/50 p-3.5 rounded-xl mt-1">
            <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-[10px] text-amber-800 leading-normal">
              <strong>Vite Dev Reminder:</strong> Make sure `backdrop-filter` is supported. Tailwind CSS handles standard blur styles using `@tailwindcss/vite` automatically via class declarations such as `backdrop-blur-[val]`.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
