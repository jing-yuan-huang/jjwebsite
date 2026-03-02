"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Logo = { alt: string; src: string };

const logos: Logo[] = [
  { alt: "ganzin", src: "/logos/ganzin.svg" },
  { alt: "GIS", src: "/logos/gis.svg" },
  { alt: "cellid", src: "/logos/cellid.svg" },
  { alt: "PORTECH", src: "/logos/portech.svg" },
  { alt: "Epson", src: "/logos/epson.svg" },
  { alt: "Foxconn", src: "/logos/Foxconn.svg" },
];

export default function TrustByMarquee() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [copies, setCopies] = useState(2);

  // 粗估：一組logo的寬度（logo數 * 每個block寬 + gap）
  // 你目前每個 logo 容器大概 28~32 * (含 gap)；我們寧可估大一點避免露白
  const approxOneSetWidth = logos.length * (128 + 48); // 128=logo block，48=gap 12*4
  // 用 viewport 寬度決定 copies：至少要讓「一組」>= viewport，並且至少 2 組才能無縫
  useEffect(() => {
    if (!viewportRef.current) return;

    const el = viewportRef.current;
    const ro = new ResizeObserver(() => {
      const vw = el.clientWidth;

      // 讓 1 組的寬度至少覆蓋 viewport * 1.2（留安全邊際）
      const needSets = Math.ceil((vw * 1.2) / approxOneSetWidth);
      // 無縫必須至少 2 組，且再多補一組避免邊界瞬間露白
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

  return (
    <section className="w-full">
      <div className="px-6 py-8">
        <div className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent" />

          <div ref={viewportRef} className="trustby-viewport">
      
            <div
              className="trustby-track flex w-max items-center gap-12 py-4"
              style={
                {
                  ["--marquee-shift" as any]: `${100 / copies}%`,
                } as React.CSSProperties
              }
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
