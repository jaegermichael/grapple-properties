"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Droplets, Sun, ShieldCheck } from "lucide-react";
import { PROPERTIES } from "@/data/properties";

export default function ShowcaseSection() {
  const p = PROPERTIES[0]; // Highlands Contemporary Estate

  return (
    <section className="bg-[#071F17] text-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#B89A6A] font-medium">
              Signature Estate • Harare North
            </span>

            <div>
              <h2 className="serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[1.05] tracking-[-0.02em] text-white mb-4">
                {p.title}
              </h2>
              <p className="serif text-3xl md:text-4xl text-[#B89A6A] font-normal">
                {p.priceFormatted}
              </p>
            </div>

            <p className="text-white/70 font-light text-base leading-relaxed">
              {p.tagline} Positioned in Enterprise Corridor, Highlands with manicured indigenous landscaping, full off-grid security, and effortless entertaining flow.
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/15">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-white/40 block mb-1">Accommodation</span>
                <p className="serif text-2xl text-white font-normal">{p.bedrooms} Suites</p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-white/40 block mb-1">Erf Grounds</span>
                <p className="serif text-2xl text-white font-normal">{p.erfSize.split(" ")[0]} m²</p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-white/40 block mb-1">Built Area</span>
                <p className="serif text-2xl text-white font-normal">{p.buildingSize}</p>
              </div>
            </div>

            {/* Infrastructure verification badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10">
                <Droplets className="w-3.5 h-3.5 text-[#B89A6A]" />
                Prolific Borehole
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10">
                <Sun className="w-3.5 h-3.5 text-[#B89A6A]" />
                16kVA Solar & Lithium
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89A6A]" />
                Full Title Deeds
              </span>
            </div>

            <div>
              <Link
                href={`/properties/${p.slug}`}
                className="inline-flex items-center gap-3 bg-[#B89A6A] text-[#18181A] px-7 py-4 text-sm font-semibold hover:bg-[#C8AA7A] transition-colors duration-300"
              >
                Request Private Viewing
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-7">
            <Link
              href={`/properties/${p.slug}`}
              className="block relative overflow-hidden aspect-[16/11] group border border-white/10"
            >
              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F17]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                <span>Enterprise Corridor, Highlands, Harare</span>
                <span className="font-mono text-[#B89A6A] tracking-wider">Ref: {p.id}</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
