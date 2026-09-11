"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "brass";
  size?: "sm" | "md" | "lg";
  icon?: "arrow-up-right" | "arrow-right" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = "none",
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-between gap-3 font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-full";

  const sizeClasses = {
    sm: "text-xs px-4 py-2",
    md: "text-sm pl-5 pr-1.5 py-1.5",
    lg: "text-base pl-7 pr-2.5 py-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#0B3A2C] text-[#FAF8F5] hover:bg-[#14533C] border border-[#0B3A2C]/20 shadow-sm",
    secondary:
      "bg-stone-100/90 text-[#141716] hover:bg-stone-200 border border-stone-300/80 shadow-xs",
    brass:
      "bg-[#C5A880] text-stone-950 hover:bg-[#D4B892] border border-[#C5A880]/30 shadow-sm font-semibold",
    outline:
      "bg-transparent text-[#141716] hover:bg-[#0B3A2C]/5 border border-stone-300 hover:border-[#0B3A2C]/40",
    ghost:
      "bg-transparent text-[#0B3A2C] hover:bg-[#0B3A2C]/10 border-transparent",
  };

  const iconCircleVariants = {
    primary:
      "bg-white/15 text-white group-hover:bg-white/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    secondary:
      "bg-stone-900/10 text-stone-900 group-hover:bg-stone-900/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    brass:
      "bg-black/10 text-black group-hover:bg-black/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    outline:
      "bg-stone-200/60 text-stone-800 group-hover:bg-[#0B3A2C] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    ghost:
      "bg-[#0B3A2C]/10 text-[#0B3A2C] group-hover:translate-x-0.5",
  };

  const iconContent =
    icon !== "none" ? (
      <span
        className={clsx(
          "flex items-center justify-center rounded-full transition-all duration-300",
          size === "sm" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : "w-10 h-10",
          iconCircleVariants[variant]
        )}
      >
        {icon === "arrow-up-right" ? (
          <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
        ) : (
          <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
        )}
      </span>
    ) : null;

  const content = (
    <>
      <span className="tracking-wide">{children}</span>
      {iconContent}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {content}
    </button>
  );
}
