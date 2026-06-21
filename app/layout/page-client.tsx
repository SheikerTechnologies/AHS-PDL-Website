"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function JolshiriLayoutPageClient() {
  const sectors = [
    { sector: "01", page: 2, title: "Sector 01", desc: "Prime Residential Plots" },
    { sector: "02", page: 3, title: "Sector 02", desc: "Lake View & Green Belt" },
    { sector: "03", page: 4, title: "Sector 03", desc: "Modern Community Area" },
    { sector: "04", page: 5, title: "Sector 04", desc: "Central Development Zone" },
    { sector: "04A", page: 6, title: "Sector 04A", desc: "Sports & Recreation" },
    { sector: "05", page: 7, title: "Sector 05", desc: "High Density Residential" },
    { sector: "06", page: 8, title: "Sector 06", desc: "Waterfront Living" },
    { sector: "07", page: 9, title: "Sector 07", desc: "Family Housing & Parks" },
    { sector: "08", page: 10, title: "Sector 08", desc: "Educational & Institutional Zone" },
    { sector: "09", page: 11, title: "Sector 09", desc: "Mixed-Use Development" },
    { sector: "10", page: 12, title: "Sector 10", desc: "Commercial & Retail Hub" },
    { sector: "11", page: 13, title: "Sector 11", desc: "Premium Residential Plots" },
    { sector: "12", page: 14, title: "Sector 12", desc: "Green Residential Community" },
    { sector: "13", page: 15, title: "Sector 13", desc: "Scenic Waterfront Plots" },
    { sector: "13A", page: 16, title: "Sector 13A", desc: "Specialty Residential" },
    { sector: "14", page: 17, title: "Sector 14", desc: "Tranquil Residential Area" },
    { sector: "15", page: 18, title: "Sector 15", desc: "Modern Urban Living" },
    { sector: "16", page: 19, title: "Sector 16", desc: "Eco-Friendly Housing" },
    { sector: "17", page: 20, title: "Sector 17", desc: "Final Development Phase" },
  ];

  return (
    <div className="min-h-screen bg-surface pt-24 relative overflow-hidden">
      {/* Master Plan Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/assets/maps/Jolshiri_Layout_Plan_by_RAJUK.jpg"
          alt="Jolshiri Master Plan Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-20">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-text-main">
            Jolshiri Abashon
          </h1>
          <p className="text-2xl text-accent font-medium mt-3">Master Layout Plan</p>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            RAJUK Approved Master Plan • Sector-wise Detailed Maps
          </p>
        </div>

        {/* Sector Cards - All sectors from your maps folder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((item, index) => (
            <motion.div
              key={item.sector}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-surface-alt rounded-3xl overflow-hidden shadow-sm border border-border-main hover:shadow-2xl transition-all duration-300 dark:card-hover-glow"
            >
              <div className="h-64 bg-surface-muted relative overflow-hidden">
                <Image
                  src={`/assets/maps/sector-${item.sector}.jpg`}
                  alt={`Sector ${item.sector}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = '/assets/maps/Jolshiri_Layout_Plan_by_RAJUK.jpg';
                  }}
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SECTOR {item.sector}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-main">{item.title}</h3>
                <p className="text-text-secondary mt-1 text-sm">{item.desc}</p>

                <a
                  href={`/assets/maps/JOLSHIRI_ABASHON_MAP.pdf#page=${item.page}`}
                  target="_blank"
                  className="mt-6 block w-full bg-accent hover:bg-accent-hover text-text-on-accent text-center py-3.5 rounded-2xl font-semibold transition-colors dark:btn-glow-accent"
                >
                  View Detailed Sector Map →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Master Plan Button */}
        <div className="mt-16 text-center">
          <a
            href="/assets/maps/Jolshiri_Layout_Plan_by_RAJUK.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 bg-accent text-text-on-accent px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-accent-hover transition-all shadow-lg dark:btn-glow-accent"
          >
            📋 View Complete Master Layout Plan (RAJUK)
          </a>
        </div>
      </div>
    </div>
  );
}
