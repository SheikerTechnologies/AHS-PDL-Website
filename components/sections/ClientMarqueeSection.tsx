/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CLIENT_METADATA } from "@/lib/data";
import AHSLogo from "@/components/AHSLogo";

function ClientLogo({ client }: { client: (typeof CLIENT_METADATA)[0] }) {
  return (
    <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-stone-200/50 shrink-0 overflow-hidden shadow-sm">
      <Image
        src={`/assets/ClientList/${client.filename}`}
        alt={client.name}
        fill
        className="object-contain"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = "/assets/ClientList/placeholder.png";
        }}
      />
    </div>
  );
}

export default function ClientMarqueeSection() {
  return (
    <section className="bg-white border-b border-stone-200/50 py-10 md:py-12 overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 mb-6 md:mb-8 text-center flex flex-col items-center justify-center">
        <div className="mb-4 bg-stone-50 p-2.5 rounded-2xl border border-stone-200/10 shadow-sm">
          <AHSLogo type="icon" iconSize={50} className="text-[#b84822]" />
        </div>

        <span className="text-[10px] font-black text-[#c5a257] uppercase tracking-[0.25em] block mb-2">
          OUR TRUSTED ACCREDITATIONS & PRESTIGIOUS CLIENTS
        </span>
        <h2 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight font-sans uppercase">
          GOVERNMENT PARTNERS
        </h2>
        <p className="text-xs text-stone-500 max-w-2xl mx-auto mt-1 leading-relaxed">
          We coordinate, build, and deliver high-specification properties fully aligned with
          Bangladesh&apos;s premier public authorities, statutory institutions, and specialized
          national commands.
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 whitespace-nowrap py-1"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 45,
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {[...CLIENT_METADATA, ...CLIENT_METADATA].map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 bg-stone-50 border border-stone-200/60 hover:bg-white hover:border-[#c5a257]/30 hover:shadow-md px-5 py-3 rounded-2xl transition-all duration-300 min-w-[280px] md:min-w-[340px]"
            >
              <ClientLogo client={client} />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-sans font-black tracking-wide text-stone-900 leading-snug line-clamp-1">
                  {client.name}
                </span>
                <span className="text-[9px] font-sans font-medium text-[#c5a257] leading-none mt-0.5">
                  {client.bengName}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
