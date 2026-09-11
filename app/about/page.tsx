import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Landmark, CheckCircle2, Building, Compass } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3A2C]/10 text-[#0B3A2C] text-[11px] font-medium tracking-[0.2em] uppercase">
            Corporate Heritage & Mission
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-900 font-normal tracking-tight">
            Leading You Home with Proven Integrity.
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-stone-700 leading-relaxed">
            “We Grapple Properties, define success and lead you home.”
          </p>
        </div>

        {/* Corporate Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-200 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Grapple Properties Architectural Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#0B3A2C] text-white max-w-xs shadow-xl hidden sm:block">
              <p className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-1">
                Headquartered in Harare
              </p>
              <p className="font-serif text-lg leading-snug">
                Karigamombe Center, 7th Floor, Number 53 Samora Machel
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-stone-700 font-light leading-relaxed text-base sm:text-lg">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Our Vision & Guiding Philosophy
            </h2>
            <p>
              “Grapple Properties strives to be a leading, innovative and diversified real estate company driven by the highest standards and values in its quest for excellence and stakeholder satisfaction.”
            </p>
            <p>
              Operating from the central business spine of Harare at Karigamombe Center, Grapple Properties (Pvt) Ltd has championed a standard of practice grounded in absolute transparency, comprehensive title investigations, and bespoke client advisory.
            </p>
            <p>
              Whether counseling local corporations on multi-hectare industrial distribution acquisitions or assisting diaspora families in London, South Africa, and North America to build generational real estate assets, we bring institutional rigor to every engagement.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              Our Institutional Commitments
            </h3>
            <p className="text-sm text-stone-600 font-light">
              Core operating tenets that govern our advisory across Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-stone-900">
                Title & Deed Authenticity
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                We independently verify all deeds at the Deeds Registries Office in Harare prior to introducing any property to our clients, ensuring zero title ambiguity.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-stone-900">
                Statutory Compliance
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Full adherence to the Estate Agents Council of Zimbabwe regulations, the Valuers Act, and Reserve Bank of Zimbabwe foreign exchange guidelines.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-stone-900">
                Generational Yield
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Strategic counsel focused on real net US Dollar yields, capital preservation against macro headwinds, and prime land appreciation.
              </p>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="double-bezel">
          <div className="double-bezel-inner p-10 sm:p-14 bg-[#0B3A2C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-white">
                Consult with our Principal Agents
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light">
                Visit our Karigamombe Center office or request an introductory advisory session.
              </p>
            </div>
            <Button href="/contact" variant="brass" size="lg" icon="arrow-right">
              Contact Harare Office
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
