"use client";

import { useMemo, useState } from "react";

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
  const [activeId, setActiveId] = useState(ITEMS[0].id);

  const active = useMemo(
    () => ITEMS.find((i) => i.id === activeId) ?? ITEMS[0],
    [activeId]
  );

  const isDark = active.theme === "dark";

  

  return (
    <section className="bg-white">

  {/* ===== Page Container ===== */}
  <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-32">

    {/* ===== ODM & OUR PROJECT ===== */}
      <div className="relative isolation-isolate pt-20 pb-4 md:pt-24 md:pb-6">

        {/* Video  */}
        <div className="relative mx-auto max-w-5xl aspect-[16/8] overflow-hidden">
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
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-[42px] md:text-[54px] leading-[0.95] font-semibold text-white mix-blend-difference">
              ODM<br />
              SOLUTIONS<br />
              & PRODUCT
            </h2>
          </div>

          <div className="hidden md:block md:col-span-6" />

          {/* Right tagline */}
          <div className="col-span-12 md:col-span-2 text-right mt-2 md:mt-0">
            <p className="text-base md:text-xl text-white mix-blend-difference">
              Design the Future<br />
              Together.
            </p>
          </div>

        </div>
      </div>

    {/* ===== selector ===== */}
    
      <div className="space-y-6">
        {ITEMS.map((item) => {
          return (
            <a
              key={item.id}
              href={item.href} 
              type="button"
              onClick={() => setActiveId(item.id)}
              className={[
                "group w-full p-6 text-left transition-colors",
                "bg-white hover:bg-neutral-50",
                "focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
                "active:bg-white",
              ].join(" ")}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                <div className="md:col-span-5">
                  <div className="whitespace-pre-line  text-[42px] border-b  border-neutral-900 pb-2 inline-block md:text-[32px] font-semibold leading-tight text-neutral-900">
                    {item.title}
                  </div>
                  <div className="mt-3 type-caption tracking-widest text-neutral-500">
                    {item.subtitle}
                  </div>
                  <div className="mt-6 text-sm text-neutral-600">
                    Learn more ↗
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="aspect-[16/9] w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
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
            </a>
          );
        })}
      </div>


    {/* ===== MetaSpace Platform Banner ===== */}
    <div className="border border-neutral-200 bg-neutral-950">
      <div className="relative aspect-[16/6] w-full overflow-hidden">

        <div className="absolute inset-0 bg-black/25" />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/metaspace.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute left-6 top-6 md:left-10 md:top-10">
          <div className="whitespace-pre-line text-3xl md:text-5xl font-semibold leading-none text-white invert-header">
            MetaSpace{"\n"}Platform
          </div>
        </div>

        <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 text-white/80">
          <div className="text-sm md:text-base leading-snug invert-header">
            Experience the Future.
            <br />
            Today with MetaSpace.
          </div>
        </div>

        <img
          src="/images/jorjin-logo.svg"
          alt="JORJIN"
          className="absolute right-6 bottom-6 md:right-10 md:bottom-10 h-6 w-auto opacity-90 "
        />
      </div>
    </div>

  </div>
</section>

  );
}
