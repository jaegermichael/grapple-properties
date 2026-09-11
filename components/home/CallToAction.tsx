"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import EnquiryModal from "@/components/ui/EnquiryModal";

export default function CallToAction() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[#0B3A2C] text-white py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#B89A6A] font-medium block mb-6">
            Confidential Representation
          </span>

          <h2 className="serif text-[clamp(2.8rem,6vw,5.5rem)] text-white font-normal leading-[0.98] tracking-[-0.02em] mb-8">
            Your next property move begins with an informed conversation.
          </h2>

          <p className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
            Whether securing a prime estate in Borrowdale, divesting a commercial asset, or requiring formal valuation advisory from Karigamombe Center.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-3 bg-[#B89A6A] text-[#18181A] px-8 py-4 text-sm font-semibold hover:bg-[#C8AA7A] transition-colors duration-300"
            >
              Browse Available Portfolios
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Speak with Karigamombe Office
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/15 text-xs text-white/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>Number 53 Samora Machel Avenue, Karigamombe Center, 7th Floor, Harare</p>
            <p className="font-mono text-[#B89A6A]">+263 242 770186</p>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="General Consultation"
      />
    </section>
  );
}
