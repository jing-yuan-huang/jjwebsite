"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
              

type Item = {
  id: string;
  title: string;
  subtitle: string;
  video: string;
  theme?: "light" | "dark";
  href:string;
};

const ITEMS: Item[] = [
  {
    id: "hj1",
    title: "HJ1 AI\nSmart Glasses",
    subtitle: "ULTRA-LIGHT AR GLASSES",
    video: "/videos/hj1.mp4",
    theme: "light",
    href:"/products/hj1"
  },
  {
    id: "c9t2",
    title: "C9T2\nSmart Glasses",
    subtitle: "ULTRA-LIGHT AR GLASSES",
    video: "/videos/c9t2.mp4",
    theme: "dark",
    href:"/products/c9t2" 
  },
  {
    id: "j7m",
    title: "J7M\nAR Glasses",
    subtitle: "INDUSTRIAL AR SOLUTION",
    video: "/videos/j7m.mp4",
    theme: "light",
     href:"/products/j7m"
  },
];



export default function Innovations() {
  
  const [activeId, setActiveId] = useState<string | null>(ITEMS[0].id);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // Tailwind md
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const active = useMemo(
    () => ITEMS.find((i) => i.id === activeId) ?? ITEMS[0],
    [activeId]
  );

  const isDark = active.theme === "dark";

  

  return (
    <section className="bg-white">

  {/* ===== Page Container ===== */}
  <div >

    {/* ===== ODM & OUR PROJECT ===== */}
      <div className="relative isolation-isolate
                      mt-40 mb-20
                      mx-[4vw]">

        {/* Video  */}
        <div className="relative mx-[6vw] mt-[3vw] aspect-[16/8] overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/odm2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Overlay content */}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-12 items-center">

          {/* Left title */}
          <div className="col-span-3 md:col-span-5">
            <h2 className="md:text-[clamp(48px,4vw,72px)] leading-[0.95]  text-white mix-blend-difference tracking-tight ">
              ODM<br />
              SOLUTIONS<br />
              & PRODUCT
            </h2>
          </div>

          <div className="col-span-5 md:block  md:col-span-4" />

          {/* Right tagline */}
          <div className="col-span-4 md:col-span-3 text-right mt-2 md:mt-0">
            <p className="text-[20px] md:text-[2.5vw] leading-[0.95] text-white mix-blend-difference tracking-tight">
              Design the Future <br />
              Together.
            </p>
          </div>

        </div>
      </div>

    {/* ===== selector ===== */}
    <div className="space-y-0 mb-[12vw] mx-[4vw]">
      {ITEMS.map((item) => {
        const expanded = activeId === item.id;
        const isHJ1 = item.id === "hj1";

        return (
          
        <div
          key={item.id}
          className={[
            "group w-full border-t border-b border-neutral-900",
            "bg-white transition-colors",
          ].join(" ")}
          onMouseEnter={() => {
            if (isDesktop) setActiveId(item.id);
          }}
          onMouseLeave={() => {
            if (isDesktop) setActiveId(null);
          }}
        >


        <button
          type="button"
          className={["w-full text-left", expanded ? "py-5 md:py-6" : "py-5"].join(" ")}
          onClick={() => {
            if (isDesktop) {
              // Desktop: click anywhere -> go to product page
              router.push(item.href);
              return;
            }

            // Mobile: first tap expands, second tap navigates
            setActiveId((cur) => {
              const nextExpanded = cur === item.id;
              if (nextExpanded) {
                router.push(item.href);
                return cur; // keep state; navigation happens anyway
              }
              return item.id;
            });
          }}
        >
                  {/* =========================
                      COLLAPSED (always stable)
                      ========================= */}
                  {!expanded && (
                    <div className="flex items-start w-full gap-x-[clamp(12px,2vw,32px)]">
                      {/* Title */}
                      <div className="min-w-0 flex-1">
                        <div
                          className={[
                            "whitespace-pre-line text-[24px] md:text-[48px] tracking-tight leading-tight text-neutral-900",
                            isHJ1 ? "min-h-[64px] md:min-h-[96px]" : "",
                          ].join(" ")}
                        >
                          {item.title}
                        </div>
                      </div>

                      {/* Arrow (guaranteed right) */}
                      <span
                        className="ml-auto shrink-0 text-neutral-900 transition-transform duration-300 origin-center rotate-0"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 50 51"
                          className="w-[clamp(28px,3vw,56px)] h-[clamp(28px,3vw,56px)]"
                          aria-hidden="true"
                        >
                          <path
                            d="M49.0196 50.0268L49.0196 -0.000128654L0.547921 -0.000129688L0.547921 2.89375L44.2684 2.89375L1.33931e-08 48.5825L1.94731 50.5923L46.2157 4.90353L46.2157 50.0268L49.0196 50.0268Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  )}

                  {/* =========================
                      EXPANDED (md+ two-column)
                      ========================= */}
                  {expanded && (
                    <div className="hidden md:grid md:grid-cols-12 md:gap-10 md:items-start">
                      {/* Left column */}
                      <div className="md:col-span-5 grid grid-rows-[auto_1fr] gap-6">
                        {/* Title + Arrow top row */}
                        <div className="flex items-start w-full gap-x-[clamp(12px,2vw,32px)]">
                          <div className="min-w-0 flex-1">
                            <div className="whitespace-pre-line text-[48px] tracking-tight leading-tight text-neutral-900">
                              {item.title}
                            </div>
                          </div>

                          <span
                            className="ml-auto shrink-0 text-neutral-900 transition-transform duration-300 origin-center -translate-x-2 rotate-45"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 50 51"
                              className="w-[clamp(28px,3vw,56px)] h-[clamp(28px,3vw,56px)]"
                              aria-hidden="true"
                            >
                              <path
                                d="M49.0196 50.0268L49.0196 -0.000128654L0.547921 -0.000129688L0.547921 2.89375L44.2684 2.89375L1.33931e-08 48.5825L1.94731 50.5923L46.2157 4.90353L46.2157 50.0268L49.0196 50.0268Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </div>

                        {/* Description (expanded only) */}
                        <div className="overflow-hidden">
                          <div className="mt-2 type-caption tracking-widest text-neutral-500">
                            {item.subtitle}
                          </div>

              
                        </div>
                      </div>

                      {/* Right column video */}
                      <div className="md:col-span-7 overflow-hidden">
                        <div className="aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                          <video
                            src={item.video}
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* =========================
                      EXPANDED (mobile stacked)
                      ========================= */}
                  {expanded && (
                    <div className="md:hidden mt-4">
                    
                      <div className="type-caption tracking-widest text-neutral-500">
                        {item.subtitle}
                      </div>

                      
                    </div>
                  )}
        </button>

        </div>

          
        );
      })}
    </div>



    {/* ===== MetaSpace Platform Banner ===== */}
    <div className="border border-neutral-200 bg-neutral-950">
      <div className="relative aspect-[16/9] w-full overflow-hidden">

        <div className="absolute inset-0 bg-black/25" />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/metaspace.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

       

            <div className="absolute left-6 top-6 md:left-15 md:top-15 ">
              <div className="whitespace-pre-line md:text-[clamp(48px,4vw,72px)] tracking-tight  leading-none text-white invert-header">
                MetaSpace{"\n"}Platform
              </div>
            </div>

            <div className="absolute left-6 bottom-6 md:left-15 md:bottom-10  tracking-tight text-white/80">
              <div className="md:text-[clamp(32px,3vw,40px)]  leading-snug invert-header">
                Experience the Future.
                <br />
                Today with MetaSpace.
              </div>
            </div>



        

        

        <img
          src="/images/jorjin-logo.svg"
          alt="JORJIN"
          className="absolute right-15 bottom-6 md:right-10 md:bottom-10 h-6 w-auto opacity-90 "
        />
      </div>
    </div>

  </div>
</section>

  );
}
