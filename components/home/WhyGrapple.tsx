"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    num: "01",
    title: "Granular Suburb Discernment",
    desc: "Unmatched street-level insight into Harare’s zoning bylaws, localized aquifer depths, private security perimeters, and authentic comparative market pricing.",
  },
  {
    num: "02",
    title: "Uncompromising Title Due Diligence",
    desc: "Zero-tolerance verification against Deeds Registry encumbrances, authenticating share transfers, deceased estate clearances, and capital gains tax certificates.",
  },
  {
    num: "03",
    title: "Institutional Stewardship",
    desc: "Strict adherence to the Estate Agents Council of Zimbabwe (EACZ) ethical framework, fiduciary escrow control, and audited international transfers.",
  },
  {
    num: "04",
    title: "Dollarized Wealth Preservation",
    desc: "Evaluating real estate not simply as bricks and mortar, but as defensive capital repositories and high-yield inflation hedges for local and diaspora wealth.",
  },
];

export default function WhyGrapple() {
  return (
    <section className="bg-[#F8F5F0] py-24 md:py-36 border-t border-[#E2DEDA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#9B9892] font-medium block mb-4">
              The Grapple Distinction
            </span>
            <h2 className="serif text-[clamp(2.2rem,5vw,3.8rem)] text-[#18181A] leading-[1.05] tracking-[-0.02em]">
              Precision advisory for high-stakes property decisions.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-end">
            <p className="text-[#5C5B57] text-base leading-relaxed font-light">
              Property acquisition in Zimbabwe demands forensic rigor, verified institutional relationships, and unyielding local discernment. We advise private families, embassies, and diaspora leaders.
            </p>
          </div>
        </div>

        {/* 4 Pillars in clean architectural grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DEDA] border border-[#E2DEDA]">
          {PILLARS.map((p) => (
            <div key={p.num} className="bg-[#F8F5F0] p-8 md:p-10 flex flex-col justify-between group hover:bg-[#EDE9E1] transition-colors duration-300">
              <div>
                <span className="serif text-3xl text-[#B89A6A] font-normal block mb-6">
                  {p.num}
                </span>
                <h3 className="serif text-2xl text-[#18181A] font-normal leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#5C5B57] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Credential Bar */}
        <div className="mt-16 pt-8 border-t border-[#E2DEDA] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#5C5B57]">
          <div>
            <span className="font-semibold text-[#18181A]">Karigamombe Center Headquarters:</span>
            <span className="ml-2 font-light">7th Floor, Number 53 Samora Machel Avenue, Harare</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0B3A2C] hover:text-[#16573F] transition-colors"
          >
            Schedule confidential consultation
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
