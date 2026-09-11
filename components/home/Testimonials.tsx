"use client";

import React from "react";

const TESTIMONIALS = [
  {
    quote:
      "Navigating property acquisition in Zimbabwe from the United Kingdom can be daunting. Grapple Properties handled title verification, escrow, and borehole commissioning with complete transparency. Their Karigamombe team set an exemplary benchmark.",
    author: "Dr. Nyasha Makoni",
    role: "Diaspora Investor, London & Harare",
    context: "Borrowdale Brooke Acquisition",
  },
  {
    quote:
      "Securing a diplomatic residence in Mount Pleasant required immediate, certified solar and independent water infrastructure. Grapple Properties presented fully verified dossiers and handled conveyance without a single delay.",
    author: "Elena Vasquez",
    role: "Head of Mission Housing",
    context: "Mount Pleasant Estate",
  },
  {
    quote:
      "Their valuation division delivered audit-grade research for our institutional headquarters in Newlands. Precise, objective, and deeply grounded in real transactional numbers rather than asking-price speculation.",
    author: "Kudakwashe Shumba",
    role: "Managing Director, Agribusiness Fund",
    context: "Newlands Commercial Park",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F5F0] py-24 md:py-36 border-t border-[#E2DEDA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#9B9892] font-medium block mb-3">
            Client Perspectives
          </span>
          <h2 className="serif text-[clamp(2.2rem,5vw,3.8rem)] text-[#18181A] leading-[1.05] tracking-[-0.02em]">
            Trusted by private families, institutions, and the diaspora.
          </h2>
        </div>

        {/* Editorial Quote Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="flex flex-col justify-between border-t-2 border-[#0B3A2C] pt-8">
              <blockquote className="serif text-xl md:text-2xl text-[#18181A] font-normal leading-relaxed mb-8">
                “{t.quote}”
              </blockquote>
              
              <div className="pt-4 border-t border-[#E2DEDA]">
                <p className="font-semibold text-sm text-[#18181A]">{t.author}</p>
                <p className="text-xs text-[#5C5B57] font-light mt-0.5">{t.role}</p>
                <p className="text-[11px] text-[#0B3A2C] font-mono mt-1">{t.context}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
