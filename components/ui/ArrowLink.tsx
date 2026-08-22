import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  dataCursor?: string;
}

export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
  dataCursor = "OPEN",
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-cursor={dataCursor}
      className={`group inline-flex items-center gap-1.5 font-mono text-xs md:text-sm text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
