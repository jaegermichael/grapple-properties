import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Share2,
  Heart,
  ArrowLeft,
  ShieldCheck,
  Building,
  CheckCircle2,
} from "lucide-react";
import { PROPERTIES, getPropertyBySlug, Property } from "@/data/properties";
import PropertyGallery from "@/components/properties/PropertyGallery";
import PropertySpecs from "@/components/properties/PropertySpecs";
import AgentCard from "@/components/properties/AgentCard";
import PropertyCard from "@/components/properties/PropertyCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found | Grapple Properties",
    };
  }

  return {
    title: `${property.title} | ${property.suburb}, Harare | Grapple Properties`,
    description: `${property.tagline} Price: ${property.priceFormatted} USD. Located in ${property.suburb}, Harare, Zimbabwe.`,
    openGraph: {
      title: `${property.title} - ${property.priceFormatted}`,
      description: property.tagline,
      images: [{ url: property.images[0] }],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  // Similar properties in same suburb or of same type
  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.type === property.type || p.suburb === property.suburb)
  ).slice(0, 3);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-stone-600 hover:text-[#0B3A2C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Property Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-400">Ref: {property.id}</span>
          </div>
        </div>
      </div>

      {/* Main Title & Address Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Badge variant="green">{property.status}</Badge>
              <Badge variant="outline">{property.type}</Badge>
              <span className="text-xs text-stone-500">•</span>
              <span className="text-xs font-medium text-stone-600 uppercase tracking-wider">
                {property.suburb}, Harare
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight">
              {property.title}
            </h1>

            <p className="flex items-center gap-1.5 text-sm sm:text-base text-stone-600 font-light">
              <MapPin className="w-4 h-4 text-[#0B3A2C]" />
              <span>{property.address}</span>
            </p>
          </div>

          <div className="text-left lg:text-right space-y-1">
            <span className="text-xs text-stone-500 uppercase tracking-widest font-mono">
              Guide Price
            </span>
            <p className="font-serif text-3xl sm:text-5xl font-medium text-[#0B3A2C]">
              {property.priceFormatted}
            </p>
            <p className="text-[11px] text-stone-500 font-light">
              US Dollars • Subject to Contract
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Media & Specifications (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* Narrative Overview */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">
                Architectural Narrative
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed font-light text-base sm:text-lg">
                {property.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Specifications, Off-Grid Infrastructure & Amenities */}
            <PropertySpecs property={property} />

            {/* Suburb & Location Context */}
            <div className="bg-[#F2EFE9] rounded-3xl p-6 sm:p-8 space-y-4 border border-stone-300/80">
              <h3 className="font-serif text-xl sm:text-2xl text-stone-900">
                The {property.suburb} Enclave Context
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Positioned in {property.suburb}, one of Harare’s most coveted residential and investment districts. Benefiting from close proximity to diplomatic amenities, top-tier international academies, high-end private medical facilities, and premier shopping villages like Sam Levy’s Village and Newlands Centre.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3A2C]" />
                  Harare Northern/Eastern Suburbs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3A2C]" />
                  Dedicated Security & Patrol Zones
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3A2C]" />
                  Stable Underground Water Tables
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Agent & Direct Action (4 cols) */}
          <div className="lg:col-span-4">
            <AgentCard property={property} />
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-24 pt-16 border-t border-stone-200 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#0B3A2C] font-semibold">
                  Curated Recommendations
                </span>
                <h3 className="font-serif text-3xl text-stone-900">
                  Similar Properties in Harare
                </h3>
              </div>
              <Button href="/properties" variant="outline" size="sm" icon="arrow-right">
                View All Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
