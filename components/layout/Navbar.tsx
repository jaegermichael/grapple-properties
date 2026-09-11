"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight, Phone } from "lucide-react";
import { clsx } from "clsx";

const NAV = [
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#F8F5F0]/96 backdrop-blur-md border-b border-[#E2DEDA]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Wordmark */}
            <Link href="/" className="flex items-center gap-3 group">
              <span
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                  scrolled
                    ? "bg-[#0B3A2C] text-[#F8F5F0]"
                    : "bg-white/20 text-white border border-white/30"
                )}
              >
                G
              </span>
              <div className={clsx("transition-colors", scrolled ? "text-[#18181A]" : "text-white")}>
                <div className="font-sans text-sm font-semibold tracking-[0.12em] uppercase leading-none">
                  Grapple
                </div>
                <div className="font-sans text-[9px] tracking-[0.22em] uppercase opacity-60 leading-none mt-0.5">
                  Properties
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={clsx(
                    "text-sm font-medium transition-opacity hover:opacity-60",
                    scrolled ? "text-[#18181A]" : "text-white"
                  )}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={clsx(
                  "hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full transition-all duration-300",
                  scrolled
                    ? "bg-[#0B3A2C] text-white hover:bg-[#16573F]"
                    : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
                )}
              >
                Enquire Now
                <ArrowUpRight size={14} />
              </Link>

              <button
                onClick={() => setOpen(true)}
                className={clsx(
                  "md:hidden flex flex-col gap-1.5 p-2",
                  scrolled ? "text-[#18181A]" : "text-white"
                )}
                aria-label="Open menu"
              >
                <span className="block w-6 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#071F17] flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="text-white font-sans text-sm font-semibold tracking-[0.12em] uppercase">
              Grapple Properties
            </span>
            <button onClick={() => setOpen(false)} className="text-white p-2">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {NAV.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="serif italic text-4xl text-white/90 hover:text-[#B89A6A] transition-colors py-3 border-b border-white/10 flex items-center justify-between"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {n.label}
                <ArrowUpRight size={18} className="text-[#B89A6A]" />
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-12 space-y-3">
            <a href="tel:+263242770186" className="flex items-center gap-3 text-white/60 text-sm">
              <Phone size={14} className="text-[#B89A6A]" />
              +263 242 770186
            </a>
            <p className="text-white/40 text-xs leading-relaxed">
              Karigamombe Center, 7th Floor<br />
              Number 53 Samora Machel, Harare
            </p>
          </div>
        </div>
      )}
    </>
  );
}
