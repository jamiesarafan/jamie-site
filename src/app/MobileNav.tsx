"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/professional", label: "Professional" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
      >
        <span
          className={`block h-0.5 w-5 bg-zinc-700 transition-all duration-300 origin-center
            ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-zinc-700 transition-all duration-300
            ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-zinc-700 transition-all duration-300 origin-center
            ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur border-b border-zinc-200/70 md:hidden">
          <nav className="mx-auto max-w-5xl px-5 py-4 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-600 hover:text-zinc-900 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
