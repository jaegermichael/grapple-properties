"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, MapPin, X } from "lucide-react";
import { PROPERTIES, Property } from "@/data/properties";
import { SUBURBS } from "@/data/suburbs";
import PropertyCard from "@/components/properties/PropertyCard";
import Button from "@/components/ui/Button";

const TYPES = ["All", "Residential", "Commercial", "Land", "Rentals"] as const;

export default function PropertiesCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedSuburb, setSelectedSuburb] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Type match
      if (selectedType !== "All" && property.type !== selectedType) {
        return false;
      }

      // Suburb match
      if (selectedSuburb !== "All" && property.suburb !== selectedSuburb) {
        return false;
      }

      // Search query match
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = property.title.toLowerCase().includes(q);
        const matchSuburb = property.suburb.toLowerCase().includes(q);
        const matchAddress = property.address.toLowerCase().includes(q);
        const matchTagline = property.tagline.toLowerCase().includes(q);
        const matchId = property.id.toLowerCase().includes(q);
        if (!matchTitle && !matchSuburb && !matchAddress && !matchTagline && !matchId) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedType, selectedSuburb, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedSuburb("All");
    setSortBy("featured");
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedType !== "All" || selectedSuburb !== "All" || sortBy !== "featured";

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3A2C]/10 text-[#0B3A2C] text-[11px] font-medium tracking-[0.2em] uppercase">
            Property Portfolio
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-stone-900 font-normal tracking-tight">
            Exceptional Zimbabwe Properties
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Explore verified residential estates, commercial office hubs, agricultural tracts, and development land across Harare’s most prestigious locations.
          </p>
        </div>

        {/* Filter Bar Capsule */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl border border-stone-200 shadow-sm mb-12 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by suburb, title, street or ID..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Suburb Dropdown */}
            <div className="md:col-span-4">
              <select
                value={selectedSuburb}
                onChange={(e) => setSelectedSuburb(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C]"
              >
                <option value="All">All Suburbs (Harare)</option>
                {SUBURBS.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")
                }
                className="w-full px-4 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C]"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Category Tabs & Active State */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {TYPES.map((type) => {
                const isActive = selectedType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#0B3A2C] text-white"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-500 font-mono">
                {filteredProperties.length} Properties Found
              </span>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#0B3A2C] hover:underline font-medium cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
            <p className="font-serif text-2xl text-stone-900">
              No matching properties found
            </p>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              We frequently handle confidential, off-market acquisitions in Borrowdale and Highlands. Contact our Karigamombe advisory desk for private listings.
            </p>
            <Button variant="primary" size="md" onClick={clearFilters}>
              Reset All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
