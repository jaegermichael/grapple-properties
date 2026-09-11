"use client";

import React from "react";
import Link from "next/link";
import { Bed, Bath, Maximize2, Droplets, Sun, ArrowUpRight } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group bg-white border border-[#E2DEDA] flex flex-col justify-between transition-colors duration-300 hover:border-[#0B3A2C]">
      {/* Media Container */}
      <Link
        href={`/properties/${property.slug}`}
        className="relative block w-full aspect-[4/3] overflow-hidden bg-[#EDE9E1]"
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold bg-[#0B3A2C] text-white">
            {property.status}
          </span>
          <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-light bg-black/60 backdrop-blur-xs text-white">
            {property.suburb}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono bg-white text-[#18181A]">
            {property.type}
          </span>
        </div>
      </Link>

      {/* Content Details */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <span className="serif text-2xl text-[#18181A] font-normal tracking-tight">
              {property.priceFormatted}
            </span>
            <span className="text-[11px] text-[#9B9892] font-mono tracking-wider">
              {property.id}
            </span>
          </div>

          <Link href={`/properties/${property.slug}`} className="block group-hover:text-[#0B3A2C] transition-colors">
            <h3 className="serif text-xl font-normal text-[#18181A] line-clamp-1 leading-snug">
              {property.title}
            </h3>
          </Link>

          <p className="text-xs text-[#5C5B57] line-clamp-2 mt-1.5 font-light leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Specs Matrix */}
        <div className="pt-4 mt-4 border-t border-[#F0EDE8] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#5C5B57] font-light">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-[#9B9892]" strokeWidth={1.5} />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5 text-[#9B9892]" strokeWidth={1.5} />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#9B9892]" strokeWidth={1.5} />
              <span>{property.erfSize.split(" ")[0]} m²</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#F0EDE8] flex items-center justify-between">
            <span className="text-[11px] text-[#9B9892] truncate max-w-[170px]">
              {property.address.split(",")[0]}
            </span>

            <Link
              href={`/properties/${property.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3A2C] hover:text-[#16573F] transition-colors"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
