"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLenis } from "../app/providers";
import { HOME_TEXT } from "@/lib/homeLocale";

const THRESHOLD = 532;

export default function Header() {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = pathname?.startsWith("/zh") ? "zh" : "en";
  const t = HOME_TEXT[locale];

  const leftNavItems = t.navLeft;
  const rightNavItems = t.navRight;

  const headerBarRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  const isHome = useMemo(() => pathname === "/" || pathname === "/zh", [pathname]);
  const isLocaleLockedPage = useMemo(() => /^\/(?:zh\/)?(modules|products)\//.test(pathname), [pathname]);
  const allNavItems = [...leftNavItems, ...rightNavItems];
  const homePath = locale === "zh" ? "/zh" : "/";

  const togglePath = useMemo(() => {
    if (locale === "zh") {
      const next = pathname.replace(/^\/zh(?=\/|$)/, "");
      return next === "" ? "/" : next;
    }
    return pathname === "/" ? "/zh" : `/zh${pathname}`;
  }, [locale, pathname]);

  const search = searchParams.toString();
  const toggleHref = `${togglePath}${search ? `?${search}` : ""}${hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
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

  const scrollToHash = (hash: string) => {
    if (!hash?.startsWith("#")) return;
    const id = hash.slice(1);

    const headerH = headerBarRef.current?.offsetHeight ?? 0;
    const GAP = 5;

    const target = document.getElementById(id);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, {
        offset: -(headerH + GAP),
        duration: 1.0,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      target.scrollIntoView();
      window.scrollBy(0, -(headerH + GAP));
    }
  };

  
  useEffect(() => {
    if (!isHome) return;

  
    const hash = window.location.hash;
    if (!hash) return;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        scrollToHash(hash);
      });
      
      return () => cancelAnimationFrame(raf2);
    });

    return () => cancelAnimationFrame(raf1);
  }, [isHome, lenis]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  
    if (!href.startsWith("#")) {
      setMenuOpen(false);
      return;
    }

    e.preventDefault();
    setMenuOpen(false);

    
    if (!isHome) {
      router.push(`${homePath}${href}`); 
      return;
    }

 
    scrollToHash(href);

  
    history.pushState(null, "", href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={[
          "transition-colors duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-9xl px-0 md:px-15">
          <div
            ref={headerBarRef}
            className="h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-x-8"
          >
            {/* Left (Desktop) */}
            <nav className="hidden md:flex items-center justify-start gap-10 leading-[0.95] tracking-widest invert-header">
              {leftNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkClass(scrolled)}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Center Logo (Desktop) */}
            <Link href={homePath} className="hidden md:block invert-header justify-self-center">
              <img src="/images/jorjin-logo.svg" alt="JORJIN" className="h-6 w-auto" />
            </Link>

            {/* Right (Desktop) */}
            <div className="hidden md:flex items-center gap-8 tracking-widest invert-header justify-self-end">
              <nav className="flex items-center gap-10">
                {rightNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={linkClass(scrolled)}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {isLocaleLockedPage ? (
                <span
                  className={[
                    "type-ui tracking-tight border px-3 py-1 text-xs uppercase cursor-not-allowed opacity-60",
                    scrolled ? "text-neutral-900 border-neutral-900/40" : "text-white/90 border-white/40",
                  ].join(" ")}
                  aria-label={locale === "zh" ? "Switch to English (disabled)" : "切換為中文（停用）"}
                >
                  {locale === "zh" ? "EN" : "中文"}
                </span>
              ) : (
                <Link
                  href={toggleHref}
                  scroll={false}
                  className={[
                    "type-ui tracking-tight border px-3 py-1 text-xs uppercase",
                    scrolled
                      ? "text-neutral-900 border-neutral-900/40 hover:border-neutral-900"
                      : "text-white/90 border-white/40 hover:border-white",
                  ].join(" ")}
                  aria-label={locale === "zh" ? "Switch to English" : "切換為中文"}
                >
                  {locale === "zh" ? "EN" : "中文"}
                </Link>
              )}
            </div>

            {/* Mobile */}
            <div className="md:hidden col-span-3 flex items-center justify-between">
              <Link href={homePath} className="invert-header">
                <img src="/images/jorjin-logo.svg" alt="JORJIN" className="h-6 w-auto" />
              </Link>

              <div className="flex items-center gap-3">
                {isLocaleLockedPage ? (
                  <span
                    className={[
                      "inline-flex items-center justify-center px-2.5 py-1 text-xs uppercase border cursor-not-allowed opacity-60",
                      scrolled ? "text-neutral-900 border-neutral-900/40" : "text-white/90 border-white/40",
                    ].join(" ")}
                    aria-label={locale === "zh" ? "Switch to English (disabled)" : "切換為中文（停用）"}
                  >
                    {locale === "zh" ? "EN" : "中文"}
                  </span>
                ) : (
                  <Link
                    href={toggleHref}
                    scroll={false}
                    className={[
                      "inline-flex items-center justify-center px-2.5 py-1 text-xs uppercase border",
                      scrolled
                        ? "text-neutral-900 border-neutral-900/40 hover:border-neutral-900"
                        : "text-white/90 border-white/40 hover:border-white",
                    ].join(" ")}
                    aria-label={locale === "zh" ? "Switch to English" : "切換為中文"}
                  >
                    {locale === "zh" ? "EN" : "中文"}
                  </Link>
                )}

                <button
                  type="button"
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className={[
                    "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors",
                    scrolled ? "hover:bg-neutral-100" : "hover:bg-white/10",
                  ].join(" ")}
                >
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
              </div>
            </div>
          </div>

          {/* Mobile dropdown */}
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
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
