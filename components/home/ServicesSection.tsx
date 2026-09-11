"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    title: "Residential Sales",
    sub: "Luxury & mid-range homes",
    description:
      "From starter apartments to multi-hectare estate homes in Borrowdale, Highlands and Chisipite — we curate the right match for every lifestyle and budget.",
  },
  {
    n: "02",
    title: "Commercial Leasing",
    sub: "Prime office & retail space",
    description:
      "Grade-A office parks, ground-floor retail and industrial warehouse leasing across Msasa, Workington and Harare CBD. Transparent terms, zero hidden costs.",
  },
  {
    n: "03",
    title: "Property Valuation",
    sub: "Independent & bank-accepted",
    description:
      "Certified, bank-accepted property valuations for mortgage applications, insurance, estate settlements and strategic acquisition decisions.",
  },
  {
    n: "04",
    title: "Investment Advisory",
    sub: "Diaspora & institutional capital",
    description:
      "Portfolio strategy and deal sourcing for diaspora investors, pension funds and listed entities seeking real capital preservation in Zimbabwe's property market.",
  },
  {
    n: "05",
    title: "Property Management",
    sub: "End-to-end stewardship",
    description:
      "Tenant screening, rent collection, maintenance oversight and monthly reporting — so your asset performs while you focus elsewhere.",
  },
  {
    n: "06",
    title: "Land & Development",
    sub: "Stands, subdivisions & raw land",
    description:
      "Serviced stands, titled subdivisions and agricultural land for owner-occupiers, developers and strategic land-banking portfolios.",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#F8F5F0] py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E2DEDA] pb-8">
          <div>
            <h2 className="serif text-[clamp(2.2rem,5vw,4rem)] text-[#18181A] leading-[1.05] tracking-[-0.02em]">
              What We Do
            </h2>
          </div>
          <p className="text-sm text-[#5C5B57] max-w-xs font-light leading-relaxed">
            Six specialisations across the full property lifecycle — from search to management.
          </p>
        </div>

        {/* Services as numbered list with dividers */}
        <div ref={ref}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_280px_auto] items-start gap-6 md:gap-10 py-7 border-b border-[#E2DEDA] cursor-default transition-all duration-300 ${hovered === s.n ? "bg-[#EDE9E1] -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16" : ""}`}
              onMouseEnter={() => setHovered(s.n)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span className="text-[11px] tracking-[0.2em] text-[#B89A6A] font-mono pt-1 min-w-[40px]">
                {s.n}
              </span>

              {/* Title + sub */}
              <div>
                <h3 className="serif text-[clamp(1.3rem,2.5vw,2rem)] text-[#18181A] leading-[1.1] tracking-[-0.015em] transition-colors group-hover:text-[#0B3A2C]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#9B9892] tracking-wider uppercase font-medium mt-1">{s.sub}</p>
              </div>

              {/* Description — hidden on mobile, fades in on hover */}
              <p className={`hidden md:block text-sm text-[#5C5B57] font-light leading-relaxed transition-opacity duration-300 ${hovered === s.n ? "opacity-100" : "opacity-0"}`}>
                {s.description}
              </p>

              {/* Arrow */}
              <Link
                href="/services"
                className={`flex items-center justify-center w-10 h-10 rounded-full border border-[#E2DEDA] transition-all duration-300 self-center ${hovered === s.n ? "bg-[#0B3A2C] border-[#0B3A2C] text-white" : "text-[#9B9892]"}`}
                aria-label={`Learn about ${s.title}`}
              >
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile descriptions below list */}
        <div className="mt-8 md:hidden space-y-4">
          {SERVICES.map((s) => (
            <div key={s.n} className="bg-[#EDE9E1] p-5">
              <p className="text-xs text-[#B89A6A] font-mono tracking-wider mb-1">{s.n} — {s.sub}</p>
              <p className="text-sm text-[#5C5B57] font-light leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
