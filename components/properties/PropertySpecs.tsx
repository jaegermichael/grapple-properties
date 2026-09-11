"use client";

import React from "react";
import {
  Bed,
  Bath,
  Maximize2,
  Car,
  Droplets,
  Sun,
  Shield,
  FileCheck,
  CheckCircle2,
  Home,
} from "lucide-react";
import { Property } from "@/data/properties";

interface PropertySpecsProps {
  property: Property;
}

export default function PropertySpecs({ property }: PropertySpecsProps) {
  return (
    <div className="space-y-8">
      {/* Primary Dimensional Matrix */}
      <div className="double-bezel">
        <div className="double-bezel-inner p-6 sm:p-8 bg-white grid grid-cols-2 sm:grid-cols-4 gap-6">
          {property.bedrooms > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider">
                <Bed className="w-4 h-4 text-[#0B3A2C]" />
                <span>Bedrooms</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium">
                {property.bedrooms} Suites
              </p>
            </div>
          )}

          {property.bathrooms > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider">
                <Bath className="w-4 h-4 text-[#0B3A2C]" />
                <span>Bathrooms</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium">
                {property.bathrooms} Baths
              </p>
            </div>
          )}

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider">
              <Maximize2 className="w-4 h-4 text-[#0B3A2C]" />
              <span>Stand / Erf</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium">
              {property.erfSize}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-medium uppercase tracking-wider">
              <Home className="w-4 h-4 text-[#0B3A2C]" />
              <span>Under Roof</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium">
              {property.buildingSize}
            </p>
          </div>
        </div>
      </div>

      {/* Critical Zimbabwe Infrastructure & Off-Grid Matrix */}
      <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="font-serif text-xl sm:text-2xl text-stone-900">
          Critical Utilities & Off-Grid Verification
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 font-light">
          In the Zimbabwean property context, independent water, solar power, and verified title deeds are paramount. Each parameter has been independently audited by Grapple Properties.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Borehole Status */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                Water Security
              </p>
              <p className="text-xs text-stone-600 mt-0.5">
                {property.keyHighlights.borehole
                  ? "Prolific high-yield certified borehole with backup reservoir tanks."
                  : "Municipal water connection with tested storage capacity."}
              </p>
            </div>
          </div>

          {/* Solar Power Status */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 text-[#8F7249] flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                Solar Generation
              </p>
              <p className="text-xs text-stone-600 mt-0.5">
                {property.keyHighlights.solarPower}
              </p>
            </div>
          </div>

          {/* Security Perimeter */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                Perimeter & Defense
              </p>
              <p className="text-xs text-stone-600 mt-0.5">
                {property.keyHighlights.security}
              </p>
            </div>
          </div>

          {/* Title Deed Status */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                Title & Conveyancing
              </p>
              <p className="text-xs text-stone-600 mt-0.5">
                {property.keyHighlights.titleDeed
                  ? "Registered Freehold Title Deed held in clean entity structure."
                  : "Cession or subdivision permit in advanced conveyancing stage."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Features List */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl sm:text-2xl text-stone-900">
          Property Specifications & Amenities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {property.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0B3A2C] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
