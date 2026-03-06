"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function isHomeRoute(pathname: string) {
  return pathname === "/" || pathname === "/zh";
}

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    const isLocaleSwitchOnHome =
      prevPathname !== null && isHomeRoute(prevPathname) && isHomeRoute(pathname);

    if (isLocaleSwitchOnHome) {
      prevPathnameRef.current = pathname;
      return;
    }

    // Force top on route changes; smooth scrolling may land mid-page during layout shifts.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    prevPathnameRef.current = pathname;
    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
