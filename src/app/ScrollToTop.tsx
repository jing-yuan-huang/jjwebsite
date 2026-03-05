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

    // 可依需求調整：instant / smooth
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}
