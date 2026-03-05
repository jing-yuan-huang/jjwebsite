"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type Logo = { alt: string; src: string };

const logos: Logo[] = [
  { alt: "ganzin", src: "/logos/ganzin.svg" },
  { alt: "cellid", src: "/logos/cellid.svg" },
  { alt: "Epson", src: "/logos/epson.svg" },
  
];

export default function TrustByMarquee() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [copies, setCopies] = useState(2);

  
  const approxOneSetWidth = logos.length * (128 + 48); // 128=logo block，48=gap 12*4
 
  useEffect(() => {
    if (!viewportRef.current) return;

    const el = viewportRef.current;
    const ro = new ResizeObserver(() => {
      const vw = el.clientWidth;

    
      const needSets = Math.ceil((vw * 1.2) / approxOneSetWidth);
      const nextCopies = Math.max(2, needSets + 2);

      setCopies(nextCopies);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const track = useMemo(
    () => Array.from({ length: copies }, () => logos).flat(),
    [copies]
  );
  const trackStyle: CSSProperties & Record<"--marquee-shift", string> = {
    "--marquee-shift": `${100 / copies}%`,
  };

  return (
    <section className="w-full">
      <div className="px-6 py-8">
        <div className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent" />

          <div ref={viewportRef} className="trustby-viewport">
      
            <div
              className="trustby-track flex w-max items-center gap-12 py-4"
              style={trackStyle}
            >
              {track.map((logo, idx) => (
                <div key={`${logo.alt}-${idx}`} className="flex items-center justify-center">
                  <div className="h-8 w-28 md:h-10 md:w-32 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
