"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const leftNavItems = [
  { label: "Smart Glasses", href: "#smartglasses" },
  { label: "Module", href: "#module" },
  { label: "MetaSpace", href: "#metaspace" },
];

const rightNavItems = [
  { label: "News", href: "#updates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:sales@jorjin.com" },
];

const THRESHOLD = 532;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const showCenterNav = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClass = (isScrolled: boolean) =>
    [
      "type-ui tracking-tight transition-colors",
      isScrolled ? "text-neutral-900 hover:text-neutral-600" : "text-white/90 hover:text-white",
    ].join(" ");

  const mobileLinkClass = (isScrolled: boolean) =>
    [
      "block w-full py-3 type-ui tracking-tight transition-colors",
      isScrolled ? "text-neutral-900 hover:text-neutral-600" : "text-white/90 hover:text-white",
    ].join(" ");

  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={[
          "transition-colors duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-8xl px-6 md:px-15">
          {/* Desktop*/}
          <div className="h-16 grid grid-cols-3 items-center">
            {/* Left (Desktop only) */}
            {showCenterNav ? (
              <nav className="hidden md:flex items-center gap-10 tracking-widest invert-header justify-self-start">
                {leftNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={linkClass(scrolled)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            ) : (
              <div className="hidden md:block" />
            )}

            {/* Center Logo (Desktop) */}
            <Link href="/" className="hidden md:block invert-header justify-self-center">
              <img src="/images/jorjin-logo.svg" alt="JORJIN" className="h-6 w-auto" />
            </Link>

            {/* Right (Desktop only) */}
            {showCenterNav ? (
              <nav className="hidden md:flex items-center gap-10 tracking-widest invert-header justify-self-end">
                {rightNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={linkClass(scrolled)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            ) : (
              <div className="hidden md:block" />
            )}

            {/* Mobile: Logo left + Burger right */}
            <div className="md:hidden col-span-3 flex items-center justify-between">
              <Link href="/" className="invert-header">
                <img src="/images/jorjin-logo.svg" alt="JORJIN" className="h-6 w-auto" />
              </Link>

              {showCenterNav ? (
                <button
                  type="button"
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className={[
                    "invert-header inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors",
                    scrolled ? "hover:bg-neutral-100" : "hover:bg-white/10",
                  ].join(" ")}
                >
                  {/* simple burger / close icon */}
                  <span className="relative block h-5 w-6">
                    <span
                      className={[
                        "absolute left-0 top-0 block h-[2px] w-6 transition-all",
                        scrolled ? "bg-neutral-900" : "bg-white",
                        menuOpen ? "translate-y-[9px] rotate-45" : "",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "absolute left-0 top-[9px] block h-[2px] w-6 transition-all",
                        scrolled ? "bg-neutral-900" : "bg-white",
                        menuOpen ? "opacity-0" : "opacity-100",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "absolute left-0 top-[18px] block h-[2px] w-6 transition-all",
                        scrolled ? "bg-neutral-900" : "bg-white",
                        menuOpen ? "translate-y-[-9px] -rotate-45" : "",
                      ].join(" ")}
                    />
                  </span>
                </button>
              ) : (
                <div className="h-10 w-10" />
              )}
            </div>
          </div>

          {/* Mobile dropdown panel */}
          {showCenterNav && (
            <div
              className={[
                "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
                menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div className={["py-2", scrolled ? "" : "backdrop-blur-sm"].join(" ")}>
                <nav className="invert-header">
                  {allNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={mobileLinkClass(scrolled)}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
