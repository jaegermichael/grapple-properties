"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Bed, Bath, Maximize2, Sun, Droplets } from "lucide-react";
import { PROPERTIES, Property } from "@/data/properties";

const TABS = ["All", "Residential", "Commercial", "Land", "Rentals"] as const;
type Tab = (typeof TABS)[number];

function PropertyCard({ p, index }: { p: Property; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white border border-[#E2DEDA]"
    >
      {/* Image */}
      <Link href={`/properties/${p.slug}`} className="block relative overflow-hidden aspect-[4/3]">
        <img
          src={p.images[0]}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] bg-[#0B3A2C] text-white px-2.5 py-1">
            {p.status}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Price + location */}
        <div className="flex items-baseline justify-between mb-2">
          <span className="serif text-2xl text-[#18181A] font-normal">{p.priceFormatted}</span>
          <span className="text-xs text-[#9B9892] tracking-wider uppercase">{p.suburb}</span>
        </div>

        <Link href={`/properties/${p.slug}`}>
          <h3 className="text-sm font-semibold text-[#18181A] mb-1 group-hover:text-[#0B3A2C] transition-colors line-clamp-1">
            {p.title}
          </h3>
        </Link>
        <p className="text-xs text-[#5C5B57] mb-4 line-clamp-2 leading-relaxed font-light">{p.tagline}</p>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-xs text-[#5C5B57] border-t border-[#F0EDE8] pt-3">
          {p.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed size={12} className="text-[#9B9892]" strokeWidth={1.5} />
              {p.bedrooms}
            </span>
          )}
          {p.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath size={12} className="text-[#9B9892]" strokeWidth={1.5} />
              {p.bathrooms}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize2 size={12} className="text-[#9B9892]" strokeWidth={1.5} />
            {p.erfSize.split(" ")[0]}
          </span>
          {p.keyHighlights.borehole && (
            <span className="flex items-center gap-1" title="Borehole">
              <Droplets size={11} className="text-[#0B3A2C]" />
            </span>
          )}
          <Link
            href={`/properties/${p.slug}`}
            className="ml-auto flex items-center gap-1 text-[#0B3A2C] font-semibold hover:text-[#16573F] transition-colors"
          >
            View
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProperties() {
  const [active, setActive] = useState<Tab>("All");

  const filtered =
    active === "All"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === active);

  return (
    <section id="featured-properties" className="py-24 md:py-32 bg-[#F8F5F0]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section header — asymmetric split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="serif text-[clamp(2.2rem,5vw,3.8rem)] text-[#18181A] leading-[1.05] tracking-[-0.02em]">
              Featured Properties
            </h2>
            <p className="text-sm text-[#5C5B57] mt-3 max-w-sm font-light leading-relaxed">
              Prime residential, commercial and development opportunities across Harare's most coveted suburbs.
            </p>
          </div>

          {/* Filter tabs — not buttons-as-pills, just text */}
          <div className="flex items-center gap-0 border border-[#E2DEDA] overflow-hidden">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`text-xs font-medium px-4 py-2.5 transition-colors border-r last:border-r-0 border-[#E2DEDA] cursor-pointer ${
                  active === t
                    ? "bg-[#0B3A2C] text-white"
                    : "bg-white text-[#5C5B57] hover:bg-[#F0EDE8]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — editorial: first property gets double col on large screens */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DEDA]">
            {filtered.slice(0, 6).map((p, i) => (
              <PropertyCard key={p.id} p={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <div className="mt-10 flex items-center justify-between border-t border-[#E2DEDA] pt-6">
          <span className="text-xs text-[#9B9892] tracking-wider uppercase">
            {filtered.length} properties listed
          </span>
          <Link
            href="/properties"
            className="flex items-center gap-2 text-sm font-semibold text-[#0B3A2C] hover:text-[#16573F] transition-colors"
          >
            View all properties
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
