"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Calculator, Ruler, Home } from "lucide-react";
import { spaceCalculatorSection } from "@/lib/landowner-content";

/**
 * Simplified FAR estimation based on typical RAJUK rules for Dhaka:
 * - Road width < 10 ft: FAR ~ 1.5
 * - Road width 10-20 ft: FAR ~ 2.0
 * - Road width 20-30 ft: FAR ~ 2.5
 * - Road width 30-40 ft: FAR ~ 3.0
 * - Road width 40-60 ft: FAR ~ 3.5
 * - Road width 60+ ft: FAR ~ 4.0
 *
 * Unit estimation assumes ~800 sq ft per unit (1 Katha ≈ 720 sq ft)
 * Total buildable = Land (Katha) * FAR
 * Approx units = (Total buildable in Katha * 720) / 800
 */
function estimateFAR(roadWidth: number): number {
  if (roadWidth < 10) return 1.5;
  if (roadWidth < 20) return 2.0;
  if (roadWidth < 30) return 2.5;
  if (roadWidth < 40) return 3.0;
  if (roadWidth < 60) return 3.5;
  return 4.0;
}

function estimateUnits(landKatha: number, far: number): number {
  const totalBuildableSqFt = landKatha * 720 * far;
  return Math.max(1, Math.round(totalBuildableSqFt / 800));
}

export default function SpaceCalculator() {
  const [landSize, setLandSize] = useState<number>(10);
  const [roadWidth, setRoadWidth] = useState<number>(20);

  const far = useMemo(() => estimateFAR(roadWidth), [roadWidth]);
  const units = useMemo(
    () => estimateUnits(landSize, far),
    [landSize, far]
  );

  return (
    <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 px-5 py-2 rounded-full border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="uppercase tracking-[3px] font-medium text-sm text-accent">
              Calculator
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
            {spaceCalculatorSection.heading.en}
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {spaceCalculatorSection.subheading.en}
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-surface-alt rounded-3xl p-8 md:p-12 border border-border-light shadow-xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text">
                  Estimate Your Land&apos;s Potential
                </h3>
                <p className="text-sm text-text-secondary">
                  Adjust the sliders to see what your land could yield
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Land Size */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-text mb-3">
                  <Ruler className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  {spaceCalculatorSection.landSizeLabel.en}
                </label>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={landSize}
                  onChange={(e) => setLandSize(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-border accent-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-text-muted">1 Katha</span>
                  <span className="text-lg font-bold text-accent">
                    {landSize} Katha
                  </span>
                  <span className="text-xs text-text-muted">100 Katha</span>
                </div>
              </div>

              {/* Road Width */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-text mb-3">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {spaceCalculatorSection.roadWidthLabel.en}
                </label>
                <input
                  type="range"
                  min={5}
                  max={100}
                  value={roadWidth}
                  onChange={(e) => setRoadWidth(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-border accent-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-text-muted">5 ft</span>
                  <span className="text-lg font-bold text-accent">
                    {roadWidth} ft
                  </span>
                  <span className="text-xs text-text-muted">100 ft</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                key={`far-${far}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-2xl p-6 border border-border-light"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📐</span>
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    {spaceCalculatorSection.estimatedFAR.en}
                  </span>
                </div>
                <p className="text-4xl font-bold text-accent">{far.toFixed(1)}</p>
                <p className="text-xs text-text-muted mt-2">
                  Floor Area Ratio (buildable area / land area)
                </p>
              </motion.div>

              <motion.div
                key={`units-${units}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-2xl p-6 border border-border-light"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Home className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    {spaceCalculatorSection.estimatedUnits.en}
                  </span>
                </div>
                <p className="text-4xl font-bold text-accent">{units}</p>
                <p className="text-xs text-text-muted mt-2">
                  Approximate apartment units (~800 sq ft each)
                </p>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-xs text-text-muted text-center leading-relaxed border-t border-border-light pt-6">
              {spaceCalculatorSection.disclaimer.en}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
