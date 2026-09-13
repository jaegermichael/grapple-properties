"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "180+", label: "Properties managed" },
  { value: "1,200+", label: "Clients served" },
  { value: "15+", label: "Years of expertise" },
  { value: "12+", label: "Areas covered" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#EDE9E1] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Oversize decorative label */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9892] font-medium">About Grapple Properties</span>
        </div>

        {/* Asymmetric two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Image composition */}
          <div ref={ref} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=88"
                alt="Grapple Properties luxury estate"
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#071F17]/80 to-transparent">
                <p className="text-white/60 text-xs tracking-wider uppercase mb-1">Headquarters</p>
                <p className="text-white text-sm font-medium">Karigamombe Center, 7th Floor — Harare</p>
              </div>
            </motion.div>

            {/* Floating stat — offset from image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-[#0B3A2C] text-white p-6 md:p-8 w-40 md:w-52"
            >
              <p className="serif text-4xl md:text-5xl font-normal leading-none mb-2">15+</p>
              <p className="text-xs text-white/60 leading-snug">Years of expertise in Zimbabwe real estate</p>
            </motion.div>
          </div>

          {/* Right: Editorial text content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pt-0 lg:pt-16"
          >
            <h2 className="serif text-[clamp(2rem,4.5vw,3.5rem)] text-[#18181A] leading-[1.08] tracking-[-0.02em] mb-8">
              Defining success and leading you home.
            </h2>

            <blockquote className="border-l-2 border-[#0B3A2C] pl-5 mb-8">
              <p className="text-[#5C5B57] leading-relaxed font-light">
                &ldquo;Grapple Properties strives to be a leading, innovative and diversified real estate company driven by the highest standards and values in its quest for excellence and stakeholder satisfaction.&rdquo;
              </p>
            </blockquote>

            <p className="text-[#5C5B57] font-light leading-relaxed mb-8 text-sm md:text-base">
              Founded on transparency, rigorous title verification and client-first advisory, Grapple Properties (Pvt) Ltd has become a respected voice in Harare&apos;s real estate market — representing private families, corporations and diaspora investors seeking reliable capital growth across Zimbabwe.
            </p>

            {/* Stats — horizontal rule layout, not cards */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10 pt-8 border-t border-[#D5CFC5]">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="serif text-3xl text-[#0B3A2C] leading-none mb-1">{s.value}</p>
                  <p className="text-xs text-[#9B9892] tracking-wider uppercase font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3A2C] hover:text-[#16573F] transition-colors"
            >
              Our story & values
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
