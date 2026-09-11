"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Property Sales & Acquisition",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/263242770186?text=${encodeURIComponent(
    formData.message || "Hello Grapple Properties, I would like to enquire about your services in Harare."
  )}`;

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3A2C]/10 text-[#0B3A2C] text-[11px] font-medium tracking-[0.2em] uppercase">
            Headquarters & Client Desk
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-900 font-normal tracking-tight">
            Connect with Grapple Properties.
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-stone-700 leading-relaxed">
            “We Grapple Properties, define success and lead you home.”
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#0B3A2C] font-semibold">
                  Principal Office
                </span>
                <h3 className="font-serif text-2xl text-stone-900">
                  Karigamombe Center
                </h3>
                <p className="text-xs text-stone-500 font-light">
                  Grapple Properties (Pvt) Ltd
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-stone-100 text-sm text-stone-700 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0B3A2C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      7th Floor, Karigamombe Center
                    </p>
                    <p>Number 53 Samora Machel Avenue</p>
                    <p>Harare, Zimbabwe</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0B3A2C] shrink-0" />
                  <div>
                    <a
                      href="tel:+263242770186"
                      className="font-medium text-stone-900 hover:text-[#0B3A2C] transition-colors"
                    >
                      +263 242 770186
                    </a>
                    <p className="text-xs text-stone-500">Central Switchboard</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0B3A2C] shrink-0" />
                  <div>
                    <a
                      href="mailto:info@grappleproperties.co.zw"
                      className="font-medium text-stone-900 hover:text-[#0B3A2C] transition-colors"
                    >
                      info@grappleproperties.co.zw
                    </a>
                    <p className="text-xs text-stone-500">Advisory Desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0B3A2C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      Monday to Friday: 08:00 – 17:00 CAT
                    </p>
                    <p className="text-xs text-stone-500">
                      Saturday: By Prior Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-stone-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-[#0B3A2C] hover:bg-[#14533C] text-white text-sm font-medium transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  Chat Directly on WhatsApp
                </a>
              </div>
            </div>

            {/* Regulatory Seal */}
            <div className="p-6 rounded-2xl bg-[#06241B] text-white space-y-2">
              <div className="flex items-center gap-2 text-[#C5A880] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Regulatory Assurance</span>
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Grapple Properties (Pvt) Ltd is fully registered and licensed under the Estate Agents Council of Zimbabwe (EACZ). All client funds in transit are held under secure statutory trust escrow accounts.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-white rounded-3xl border border-stone-200 shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0B3A2C]/10 text-[#0B3A2C] flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-stone-900">
                    Message Successfully Dispatched
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>. A representative from our Karigamombe Center headquarters will reach out to you within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900">
                      Direct Advisory Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 font-light">
                      Please detail your acquisition criteria, disposal instructions, or valuation requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nyasha Chitepo"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C] focus:bg-white transition-all"
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
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C] focus:bg-white transition-all"
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
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                        Service Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C] focus:bg-white transition-all"
                      >
                        <option>Property Sales & Acquisition</option>
                        <option>Property Letting & Tenancy</option>
                        <option>Certified Property Valuation</option>
                        <option>Property Asset Management</option>
                        <option>Property Development Advisory</option>
                        <option>Diaspora Investment Structuring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                      Inquiry Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please indicate property specifics, location preferences (e.g. Borrowdale, Highlands), or transaction timelines..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:border-[#0B3A2C] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon="arrow-up-right"
                      className="w-full sm:w-auto"
                    >
                      Transmit Confidential Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
