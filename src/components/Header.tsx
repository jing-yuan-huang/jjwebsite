"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "INNOVATIONS", href: "#innovations" },
  { label: "UPDATES", href: "#updates" },
  { label: "ABOUT", href: "#about" },
  
];

const THRESHOLD = 532; 

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= THRESHOLD);
    };

    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div
        className={[
          "transition-colors duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-16 flex items-center ">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center invert-header">
              <img
                src="/images/jorjin-logo.svg"
                alt="JORJIN"
                className="h-6 w-auto"
              />
            </Link>

            {/* Center: Nav */}
            <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 tracking-widest invert-header">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "type-ui tracking-tight transition-colors",
                    scrolled ? "text-neutral-900" : " hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right: Contact */}
            <div className="ml-auto">
              <a
                href="mailto:sales@jorjin.com"
                className={[
                  "inline-flex items-center gap-2 border px-4 py-2 text-xs font-semibold tracking-wider transition-colors",
                  "rounded-full",
                  "border-red-500",
                  scrolled
                    ? "text-neutral-900 bg-white hover:bg-red-50"
                    : "bg-white/10 hover:bg-white/20 invert-header",
                ].join(" ")}
              >
                CONTACT US <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
