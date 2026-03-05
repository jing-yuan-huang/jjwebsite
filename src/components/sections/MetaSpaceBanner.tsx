"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT } from "@/lib/homeLocale";


export default function MetaSpaceBanner({ locale = "en" }: { locale?: HomeLocale }) {
    const t = HOME_TEXT[locale].metaspace;
    const bodyLines = t.body.split("\n");
    const showcaseItems = [
      {
        id: "showcase-1",
        titleZh: "理膚寶水50週年修復SKIN LAB特展",
        titleEn: "La Roche-Posay 50th Anniversary SKIN LAB Exhibition",
        year: "2025.04",
        image: "/images/products/metaspace/laroche.jpg",
      },
      {
        id: "showcase-2",
        titleZh: "Loreal美力共創交流日",
        titleEn: "L'Oréal Beauty Co-Creation Exchange Day",
        year: "2025.06",
        image: "/images/products/metaspace/loreal.jpg ",
      },
      {
        id: "showcase-3",
        titleZh: "刑事警察發展館",
        titleEn: "Criminal Investigation Police Development Hall",
        year: "2025.12",
        image: "/images/products/metaspace/police.png",
      },
    ];
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [visible, setVisible] = useState<boolean[]>(showcaseItems.map(() => false));

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (Number.isNaN(idx)) return;
            if (entry.isIntersecting) {
              setVisible((prev) => {
                if (prev[idx]) return prev;
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      cardRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, []);
    return (
      <div className="border border-neutral-200 bg-neutral-950">
        <div className="relative w-full overflow-hidden h-[min(100vh,900px)]">
          <div className="absolute inset-0 bg-black/25" />
  
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/metaspace.mp4"
            autoPlay
            muted
            loop
            playsInline
          />


        <div className="mx-auto max-w-8xl px-6 md:px-15">
  
          <div className="absolute top-6 md:top-15">
            
            <div className="whitespace-pre-line text-[clamp(52px,8vw,96px)] md:text-[clamp(44px,5vw,96px)] tracking-tight leading-[0.95] text-white invert-header">
              {t.title}
            </div>
          </div>
  
          <div className="absolute  bottom-6 md:bottom-15 tracking-tight text-white/80">
            <div className="text-[clamp(20px,4.6vw,36px)] md:text-[clamp(14px,2vw,28px)] leading-[0.95] tracking-tight invert-header">
              {bodyLines.map((line, i) => (
                <span key={`${line}-${i}`}>
                  {line}
                  {i < bodyLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </div>
          </div>
  
          <img
            src="/images/jorjin-logo.svg"
            alt="JORJIN"
            className="
                absolute
                right-[clamp(16px,4vw,60px)]
                bottom-[clamp(16px,4vw,60px)]
                h-[clamp(18px,3vw,28px)]
                w-auto
                opacity-90
            "
           />

        </div>


        </div>
        <section className="bg-white border-b border-black">
          <div className="mx-auto max-w-8xl px-6 md:px-15 py-12 md:py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {showcaseItems.map((item, idx) => {
                const itemTitle = locale === "zh" ? item.titleZh : item.titleEn;
                return (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  data-idx={idx}
                  className={[
                    "bg-black border-b border-black",
                    "transition-all duration-[3000ms] ease-out will-change-transform",
                    visible[idx] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
                  ].join(" ")}
                  style={{ transitionDelay: `${idx * 280}ms` }}
                >
                  <div className="aspect-[3/1] w-full bg-neutral-100">
                    <img
                      src={item.image.trim()}
                      alt={itemTitle}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <div className="text-[clamp(18px,1.6vw,24px)] tracking-tight text-white">
                      {itemTitle}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{item.year}</div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
