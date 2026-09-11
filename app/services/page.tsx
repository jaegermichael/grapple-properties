"use client";

import React, { useState } from "react";
import {
  Building2,
  Key,
  ShieldCheck,
  Calculator,
  Hammer,
  TrendingUp,
  CheckCircle2,
  Phone,
  MessageSquare,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import Button from "@/components/ui/Button";
import EnquiryModal from "@/components/ui/EnquiryModal";

const ICON_MAP = {
  Building2,
  Key,
  ShieldCheck,
  Calculator,
  Hammer,
  TrendingUp,
};

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState("Property Valuation");

  const triggerModal = (serviceName: string) => {
    setActiveService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3A2C]/10 text-[#0B3A2C] text-[11px] font-medium tracking-[0.2em] uppercase">
            Services & Valuation
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-900 font-normal tracking-tight">
            Institutional Rigor Across Every Real Estate Discipline.
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            From certified market valuations and high-yield commercial letting to diaspora investment structuring, Grapple Properties provides comprehensive advisory for Zimbabwe real estate.
          </p>
        </div>

        {/* 6 Services Detailed Breakdown */}
        <div className="space-y-12 mb-24">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Building2;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="double-bezel scroll-mt-36"
              >
                <div className="double-bezel-inner p-8 sm:p-12 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">
                        Capability 0{index + 1}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <p className="text-xs uppercase tracking-wider font-semibold text-stone-800">
                        Key Deliverables:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((del, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-stone-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3A2C] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <Button
                        onClick={() => triggerModal(service.title)}
                        variant="primary"
                        size="md"
                        icon="arrow-up-right"
                      >
                        Engage for {service.title}
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 p-8 rounded-2xl bg-[#F8F6F2] border border-stone-200 space-y-4 ${
                      isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-widest text-[#0B3A2C] font-semibold">
                      Advisory Focus
                    </span>
                    <h3 className="font-serif text-2xl text-stone-900 font-normal">
                      {service.title} Standards
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      All processes executed under certified Zimbabwean valuation standards, EACZ mandates, and structured US Dollar escrow mechanisms.
                    </p>
                    <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1">
                      <p className="font-semibold text-[#0B3A2C]">
                        Direct Desk Contact
                      </p>
                      <p className="text-stone-600">
                        Telephone: +263 242 770186
                      </p>
                      <p className="text-stone-600">
                        Karigamombe Center, 7th Floor, Harare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Valuation Intake Banner */}
        <div className="double-bezel">
          <div className="double-bezel-inner p-10 sm:p-14 bg-[#0B3A2C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                Valuation Desk
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                Request an Official Property Valuation
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-light">
                Defensible open-market appraisals for sale, balance-sheet reporting, mortgage security, or insurance replacement.
              </p>
            </div>

            <Button
              onClick={() => triggerModal("Certified Property Valuation")}
              variant="brass"
              size="lg"
              icon="arrow-up-right"
              className="shrink-0"
            >
              Request Valuation Report
            </Button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={activeService}
      />
    </div>
  );
}
