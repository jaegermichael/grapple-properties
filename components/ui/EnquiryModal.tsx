"use client";

import React, { useState } from "react";
import { X, Phone, MessageSquare, CheckCircle2, Building, ShieldCheck } from "lucide-react";
import Button from "./Button";
import Badge from "./Badge";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  propertyId?: string;
  defaultService?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  propertyTitle,
  propertyId,
  defaultService = "General Enquiry",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    intent: defaultService,
    message: propertyTitle
      ? `I am interested in scheduling a private viewing or receiving information regarding ${propertyTitle} (Ref: ${propertyId || "N/A"}).`
      : "I would like to consult with a Grapple Properties specialist regarding real estate in Zimbabwe.",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    formData.message ||
      `Hello Grapple Properties, I am enquiring about ${propertyTitle || "property opportunities in Harare"}.`
  );

  const whatsappUrl = `https://wa.me/263242770186?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#06241B]/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-stone-300/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header Ribbon */}
        <div className="bg-[#0B3A2C] text-[#FAF8F5] px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Building className="w-5 h-5 text-[#C5A880]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium">
                Grapple Properties (Pvt) Ltd
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                {propertyTitle ? "Private Property Enquiry" : "Client Consultation Desk"}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center border border-[#0B3A2C]/20">
                <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-stone-900">
                Enquiry Successfully Received
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>. A senior property consultant from our Karigamombe Center office will contact you promptly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0B3A2C] text-white text-sm font-medium hover:bg-[#14533C] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                  Chat Instantly on WhatsApp
                </a>
                <Button variant="secondary" size="md" onClick={onClose}>
                  Return to Website
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {propertyTitle && (
                <div className="p-3.5 bg-white rounded-2xl border border-stone-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500">
                      Target Property
                    </span>
                    <p className="text-sm font-semibold text-stone-900 truncate">
                      {propertyTitle}
                    </p>
                  </div>
                  {propertyId && <Badge variant="green">{propertyId}</Badge>}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tendai Moyo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0B3A2C] focus:ring-1 focus:ring-[#0B3A2C] text-stone-900 text-sm outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+263 77 ..."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0B3A2C] focus:ring-1 focus:ring-[#0B3A2C] text-stone-900 text-sm outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0B3A2C] focus:ring-1 focus:ring-[#0B3A2C] text-stone-900 text-sm outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                    Service Area
                  </label>
                  <select
                    value={formData.intent}
                    onChange={(e) =>
                      setFormData({ ...formData, intent: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0B3A2C] focus:ring-1 focus:ring-[#0B3A2C] text-stone-900 text-sm outline-hidden transition-all"
                  >
                    <option>Property Acquisition</option>
                    <option>Property Letting & Tenancy</option>
                    <option>Certified Valuation</option>
                    <option>Property Management</option>
                    <option>Development Advisory</option>
                    <option>Diaspora Investment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                  Detailed Enquiry or Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-[#0B3A2C] focus:ring-1 focus:ring-[#0B3A2C] text-stone-900 text-sm outline-hidden transition-all resize-none"
                />
              </div>

              {/* Direct Instant Action Options */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="tel:+263242770186"
                    className="inline-flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-[#0B3A2C] py-2 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0B3A2C]" />
                    +263 242 770186
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#0B3A2C] hover:text-[#14533C] py-2 px-3 rounded-lg hover:bg-[#0B3A2C]/5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    Direct WhatsApp
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon="arrow-up-right"
                  className="w-full sm:w-auto"
                >
                  Submit Confidential Request
                </Button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B3A2C]" />
                <span>
                  Karigamombe Center, 7th Floor, Harare • All consultations governed by strict client discretion.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
