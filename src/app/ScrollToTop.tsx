"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLenis } from "./providers"; 

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();

  useEffect(() => {
    // no restore
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
    
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, searchParams, lenis]);

  return null;
}