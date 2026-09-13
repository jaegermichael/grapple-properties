"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Droplets, FileCheck2, ScanEye, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const facts = [
  { icon: Droplets, label: "Water", value: "Borehole" },
  { icon: Sun, label: "Power", value: "16kVA solar" },
  { icon: FileCheck2, label: "Tenure", value: "Title deeds" },
  { icon: ScanEye, label: "Security", value: "Perimeter" },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-dossier relative min-h-[100dvh] overflow-hidden bg-[#10271f] text-[#f4f0e8]">
      <div className="absolute inset-0 dossier-grid opacity-35" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1600px] grid-cols-1 lg:grid-cols-[43%_57%]">
        <div className="relative z-10 flex flex-col justify-between px-6 pb-7 pt-24 md:px-12 md:pb-10 md:pt-36 lg:px-16 lg:pb-12">
          <div className="py-10 md:py-16 lg:py-12">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[9ch] font-serif text-[clamp(3.4rem,7.2vw,6rem)] leading-[0.85] tracking-[-0.035em] text-balance"
            >
              Harare, read properly.
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[34rem] text-[14px] leading-6 text-[#f4f0e8]/68 md:mt-8 md:text-base md:leading-7"
            >
              We inspect the facts behind the address—title, water, power, security and neighbourhood value—then lead you to the right property decision.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap items-center gap-5 md:mt-9"
            >
              <Link href="/properties" className="action-primary">
                Browse the portfolio <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="action-link text-[#f4f0e8]">
                Discuss your search <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 border-y border-[#f4f0e8]/16">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="border-r border-[#f4f0e8]/16 px-2 py-4 first:pl-0 last:border-r-0 md:px-5">
                <Icon size={15} strokeWidth={1.6} className="mb-3 text-[#d6c4a1]" />
                <span className="block text-[9px] uppercase tracking-[0.18em] text-[#f4f0e8]/42">{label}</span>
                <span className="mt-1 block text-[11px] font-medium text-[#f4f0e8]/88 md:text-xs">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.15, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[56vh] lg:min-h-[100dvh]"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88"
            alt="Contemporary residence framed by mature greenery"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b15]/72 via-transparent to-[#071b15]/10" />
          <div className="absolute left-0 top-[18%] hidden h-px w-[34%] bg-[#f4f0e8]/75 lg:block" aria-hidden="true" />
          <div className="absolute left-[34%] top-[18%] hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#d6c4a1] lg:block" aria-hidden="true" />

          <div className="absolute inset-x-5 bottom-5 border border-white/30 bg-[#10271f]/88 p-5 shadow-[0_24px_60px_rgba(4,18,14,0.3)] backdrop-blur-md md:inset-x-8 md:bottom-8 md:p-7 lg:left-8 lg:right-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="font-serif text-3xl leading-none md:text-4xl">Highlands Contemporary Estate</h2>
              </div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/55">GP—401</span>
            </div>
            <div className="mt-6 flex items-end justify-between border-t border-white/16 pt-5">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.18em] text-white/42">Asking</span>
                <span className="mt-1 block font-serif text-2xl tabular-nums">US$980,000</span>
              </div>
              <Link href="/properties/highlands-contemporary-estate" className="square-action" aria-label="View Highlands Contemporary Estate">
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
