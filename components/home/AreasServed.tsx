"use client";

import React from "react";
import Link from "next/link";
import { SUBURBS } from "@/data/suburbs";
import { ArrowUpRight } from "lucide-react";

export default function AreasServed() {
  return (
    <section className="bg-[#EDE9E1] py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#9B9892] font-medium block mb-3">
              Geographic Focus
            </span>
            <h2 className="serif text-[clamp(2.2rem,5vw,3.8rem)] text-[#18181A] leading-[1.05] tracking-[-0.02em]">
              Prime Harare Corridors
            </h2>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0B3A2C] font-semibold hover:text-[#16573F] transition-colors"
          >
            All Suburb Portfolios
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Image-led Suburb Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBURBS.map((s) => (
            <Link
              key={s.id}
              href={`/properties?suburb=${encodeURIComponent(s.name)}`}
              className="group relative block aspect-[16/11] overflow-hidden bg-[#071F17]"
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F17]/90 via-[#071F17]/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                  {s.character}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="serif text-2xl font-normal group-hover:text-[#B89A6A] transition-colors">
                    {s.name}
                  </h3>
                  <span className="text-xs text-[#B89A6A] font-mono">
                    Avg. {s.averagePrice}
                  </span>
                </div>
                <p className="text-xs text-white/65 font-light line-clamp-1">
                  {s.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
