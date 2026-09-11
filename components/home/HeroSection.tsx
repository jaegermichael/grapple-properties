"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] bg-[#071F17] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2200&q=88"
          alt="Premium property, Harare Zimbabwe"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F17]/90 via-[#071F17]/60 to-[#071F17]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F17]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content — left-anchored, not centered */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        
        {/* Main headline — editorial, large */}
        <div className="max-w-3xl">
          <motion.h1
            className="serif text-[clamp(3.2rem,8vw,7rem)] text-white leading-[0.95] tracking-[-0.02em] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Property.<br />
            Possibility.<br />
            <em className="not-italic text-[#B89A6A]">Progress.</em>
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Connecting people with exceptional residential, commercial and investment opportunities across Zimbabwe.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/properties"
              className="inline-flex items-center gap-3 bg-[#B89A6A] text-[#18181A] text-sm font-semibold px-7 py-4 hover:bg-[#C8AA7A] transition-colors duration-300"
            >
              Explore Properties
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => {
                const el = document.getElementById("enquiry-modal-trigger");
                el?.click();
              }}
              className="inline-flex items-center gap-3 border border-white/30 text-white text-sm font-medium px-7 py-4 hover:bg-white/10 transition-colors duration-300"
            >
              Speak to an Agent
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Bottom rule with location */}
        <motion.div
          className="mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p className="text-white/40 text-xs tracking-[0.15em] uppercase font-light">
            Karigamombe Center, 7th Floor — Harare, Zimbabwe
          </p>
          <p className="text-white/40 text-xs tracking-[0.1em] uppercase font-light">
            +263 242 770186
          </p>
        </motion.div>
      </div>
    </section>
  );
}
