import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "green" | "brass" | "outline" | "dark";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-300";

  const variants = {
    default:
      "bg-stone-100/90 text-stone-800 border border-stone-200/80 shadow-xs",
    green:
      "bg-[#0B3A2C]/10 text-[#0B3A2C] border border-[#0B3A2C]/20 font-semibold",
    brass:
      "bg-[#C5A880]/15 text-[#8F7249] border border-[#C5A880]/30 font-semibold",
    outline:
      "bg-transparent text-stone-600 border border-stone-300/80",
    dark:
      "bg-stone-900 text-stone-100 border border-stone-800",
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
