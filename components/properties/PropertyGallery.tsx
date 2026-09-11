"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Feature Image Container */}
      <div className="double-bezel">
        <div className="double-bezel-inner relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-stone-900 group">
          <img
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Counter Badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-mono border border-white/20">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Selector Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative aspect-16/10 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? "border-[#0B3A2C] ring-2 ring-[#0B3A2C]/20 scale-102"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
