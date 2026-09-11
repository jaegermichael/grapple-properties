"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071F17] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#B89A6A] text-[#18181A] flex items-center justify-center font-bold text-sm">
                G
              </span>
              <div>
                <span className="font-sans text-sm font-semibold tracking-[0.14em] uppercase block leading-none">
                  Grapple Properties
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] font-light block mt-1">
                  (Pvt) Ltd • Harare, Zimbabwe
                </span>
              </div>
            </div>

            <p className="serif italic text-2xl text-white/90 leading-snug max-w-md">
              “We Grapple Properties, define success and lead you home.”
            </p>

            <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
              Grapple Properties strives to be a leading, innovative and diversified real estate company driven by the highest standards and values in its quest for excellence and stakeholder satisfaction.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/263242770186?text=Hello%20Grapple%20Properties"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                WhatsApp Office
              </a>
              <a
                href="tel:+263242770186"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/15 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89A6A]" />
                +263 242 770186
              </a>
            </div>
          </div>

          {/* Nav 1: Properties */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89A6A] font-medium block">
              Portfolio
            </span>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li>
                <Link href="/properties?type=Residential" className="hover:text-white transition-colors">
                  Residential Estates
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Commercial" className="hover:text-white transition-colors">
                  Commercial & Industrial
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Land" className="hover:text-white transition-colors">
                  Development Stands
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Rentals" className="hover:text-white transition-colors">
                  Prime Rentals
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">
                  Full Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav 2: Company */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89A6A] font-medium block">
              Company
            </span>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Background
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Valuation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav 3: Office Address */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89A6A] font-medium block">
              Headquarters
            </span>
            <div className="space-y-2 text-sm text-white/70 font-light">
              <p className="font-normal text-white">Karigamombe Center, 7th Floor</p>
              <p>Number 53 Samora Machel Avenue</p>
              <p>Harare, Zimbabwe</p>
            </div>
            <div className="pt-2">
              <p className="text-xs text-white/50">Telephone:</p>
              <a href="tel:+263242770186" className="text-sm text-white font-mono hover:text-[#B89A6A] transition-colors">
                +263 242 770186
              </a>
            </div>
            <div className="pt-3 flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck size={14} className="text-[#B89A6A]" />
              <span>Estate Agents Council Regulated</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© {currentYear} Grapple Properties (Pvt) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Harare • Borrowdale • Highlands • Mount Pleasant</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy & Disclaimers
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
