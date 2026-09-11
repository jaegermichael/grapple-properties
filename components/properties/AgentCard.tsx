"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageSquare, Calendar, Building, ShieldCheck } from "lucide-react";
import { Property } from "@/data/properties";
import Button from "@/components/ui/Button";
import EnquiryModal from "@/components/ui/EnquiryModal";

interface AgentCardProps {
  property: Property;
}

export default function AgentCard({ property }: AgentCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello ${property.agent.name}, I would like to enquire about ${property.title} in ${property.suburb} (Ref: ${property.id}). Please let me know available viewing slots.`
  );

  const whatsappUrl = `https://wa.me/263242770186?text=${whatsappMessage}`;

  return (
    <>
      <div className="double-bezel sticky top-28">
        <div className="double-bezel-inner p-6 sm:p-8 bg-white space-y-6">
          {/* Agent Header Profile */}
          <div className="flex items-center gap-4 pb-6 border-b border-stone-100">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#0B3A2C]/20 shrink-0">
              <img
                src={property.agent.photo}
                alt={property.agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#0B3A2C] font-semibold">
                Listing Specialist
              </span>
              <h4 className="font-serif text-xl text-stone-900 font-medium">
                {property.agent.name}
              </h4>
              <p className="text-xs text-stone-500 font-light">
                {property.agent.role}
              </p>
            </div>
          </div>

          {/* Price & Ref Reminder */}
          <div className="space-y-1">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-stone-500 uppercase tracking-wider">
                Asking Value
              </span>
              <span className="text-xs font-mono text-stone-400">
                Ref: {property.id}
              </span>
            </div>
            <p className="font-serif text-3xl font-medium text-[#0B3A2C]">
              {property.priceFormatted} USD
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-[#0B3A2C] hover:bg-[#14533C] text-white text-sm font-medium transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              Enquire on WhatsApp
            </a>

            <Button
              variant="outline"
              size="md"
              icon="arrow-up-right"
              onClick={() => setModalOpen(true)}
              className="w-full justify-between"
            >
              Schedule Private Viewing
            </Button>

            <a
              href="tel:+263242770186"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B3A2C]" />
              Direct Line: +263 242 770186
            </a>
          </div>

          {/* Office Details */}
          <div className="pt-4 border-t border-stone-100 space-y-2 text-center">
            <p className="text-xs text-stone-600 font-light">
              <span className="font-semibold text-stone-800">Grapple Properties (Pvt) Ltd</span>
              <br />
              Karigamombe Center, 7th Floor
              <br />
              Number 53 Samora Machel, Harare
            </p>
            <div className="flex items-center justify-center gap-1 text-[11px] text-stone-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B3A2C]" />
              <span>Full buyer protection & escrow oversight</span>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        propertyTitle={property.title}
        propertyId={property.id}
      />
    </>
  );
}
