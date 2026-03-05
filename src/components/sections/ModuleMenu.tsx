"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowIcon } from "@/components/ui/icons/ArrowIcon";
import { MODULES } from "@/app/data/modules";

type ModuleItem = {
  id: string;
  name: string;
  suffixSmall?: string;
  short?: string;
  image: string;
  detail: string;
  href: string;
};

const MODULE_ITEMS: ModuleItem[] = [
  /*{
    id: "eyetracking",
    name: "Eyetracking",
    image: "/images/products/module/eyetracking.png",
    detail: "Eyetracking module",
    href: "/modules/eyetracking",
  },
  */
  {
    id: "wifi01",
    name: "WiFi + BT",
    suffixSmall: "5.4",
    image: "/images/products/module/wifi01.png",
    detail: "WG7A51-01 2.4/5GHz WiFi 6/BLE 5.4 SiP Module",
    href: "/modules/wifi01",
  },
  {
    id: "wifiv0",
    name: "WiFi + BT",
    suffixSmall: "5.0",
    image: "/images/products/module/wifiv0.png",
    detail: "WG7837-V0 2.4/5 GHz WiFi & Bluetooth SiP Module",
    href: "/modules/wifiv0",
  },
  {
    id: "sigfox",
    name: "Sigfox ",
    image: "/images/products/module/sigfox.png",
    detail: "SIGFOX BLE MODULE RC 1 to 6",
    href: "/modules/sigfox",
  },
  {
    id: "ble",
    name: "BLE",
    image: "/images/products/module/ble.png",
    detail: "ZB7412-00 CORTEX-M3 + BLE 5",
    href: "/modules/ble",
  },
  {
    id: "mmwave03",
    name: "mmWave",
    suffixSmall: "03",
    image: "/images/products/module/mmwave03.png",
    detail: "MT5C01-03 JORJIN IWRL6432AOP AoM Module",
    href: "/modules/mmwave03",
  },
  {
    id: "mmwave02r1",
    name: "mmWave",
    suffixSmall: "02R1",
    image: "/images/products/module/mmwave02R1.png",
    detail: "WT5C01-02R1 JORJIN IWRL6432WCSP AoM Module",
    href: "/modules/mmwave02r1",
  },
];

export default function ModuleMenu() {
  const [virtualIndex, setVirtualIndex] = useState(MODULE_ITEMS.length);
  const [isJumping, setIsJumping] = useState(false);
  const [imageTick, setImageTick] = useState(0);
  const [textTick, setTextTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = MODULE_ITEMS.length;
  const activeIndex = ((virtualIndex % len) + len) % len;
  const active = MODULE_ITEMS[activeIndex];
  const activeModule = MODULES[active.id as keyof typeof MODULES];

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
      setTextTick((t) => t + 1);
      setImageTick((t) => t + 1);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (virtualIndex >= len && virtualIndex < len * 2) return;
    const id = requestAnimationFrame(() => {
      setIsJumping(true);
      setVirtualIndex((prev) => (prev < len ? prev + len : prev - len));
      requestAnimationFrame(() => setIsJumping(false));
    });
    return () => cancelAnimationFrame(id);
  }, [virtualIndex, len]);

  const handleSelect = (id: string) => {
    const idx = MODULE_ITEMS.findIndex((item) => item.id === id);
    const next = idx === -1 ? len : len + idx;
    setVirtualIndex(next);
    setImageTick((t) => t + 1);
    setTextTick((t) => t + 1);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setVirtualIndex((prev) => prev + 1);
        setTextTick((t) => t + 1);
        setImageTick((t) => t + 1);
      }, 3500);
    }
  };

  const leftItems = [...MODULE_ITEMS, ...MODULE_ITEMS, ...MODULE_ITEMS];
  const rowH = "clamp(52px, 5.2vw, 72px)";
  const rowGap = "clamp(10px, 1.6vw, 20px)";
  const visibleCount = 7;
  const centerIndex = Math.floor(visibleCount / 2);
  const menuStyle: CSSProperties & Record<"--row-h" | "--row-gap", string> = {
    "--row-h": rowH,
    "--row-gap": rowGap,
    height: "calc(7 * var(--row-h) + 6 * var(--row-gap))",
  };

  return (
    <div className="mt-[36px] md:mt-[54px] lg:mt-[72px] mb-[70px] md:mb-[100px] lg:mb-[130px]">
      <div className="relative mx-auto max-w-8xl px-6 md:px-15 py-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-white via-white/90 to-transparent" />

        <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Left: menu */}
        <div className="col-span-8 md:col-span-4">
          <div
            className="overflow-hidden"
            style={menuStyle}
          >
            {(() => {
              return (
                <div
                  className={[
                    "flex flex-col gap-[var(--row-gap)] will-change-transform",
                    isJumping ? "" : "transition-transform duration-500 ease-out",
                  ].join(" ")}
                  style={{
                    transform: `translateY(calc(${centerIndex - virtualIndex} * (var(--row-h) + var(--row-gap))))`,
                  }}
                >
                  {leftItems.map((item, idx) => {
                    const isActive = item.id === active.id;
                    return (
                      <button
                        key={`${item.id}-${idx}`}
                        type="button"
                        onClick={() => handleSelect(item.id)}
                        className={[
                          "text-left tracking-tight transition-colors",
                          "text-[clamp(28px,6vw,44px)] md:text-[clamp(44px,5vw,96px)] leading-[0.8] tracking-tight",
                          "h-[var(--row-h)]",
                          isActive ? "text-neutral-900" : "text-neutral-300 hover:text-neutral-500",
                        ].join(" ")}
                      >
                        <span className="inline-flex items-baseline gap-2">
                          <span>{item.name}</span>
                          {item.suffixSmall ? (
                            <span className="text-[0.45em] tracking-tight text-current/70">
                              {item.suffixSmall}
                            </span>
                          ) : null}
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>

        {/* Center: image */}
        <div className="hidden md:col-span-4 md:flex">
          <div className="aspect-square w-full max-w-[420px] mx-auto flex items-center justify-center">
            <img
              key={`${active.id}-${imageTick}`}
              src={active.image}
              alt={active.name}
              className="max-h-[80%] max-w-[80%] object-contain animate-module-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: detail */}
        <div className="col-span-4 md:col-span-4 md:col-start-9">
          <div
            className="text-right"
            style={{
              height: `calc(${visibleCount} * var(--row-h) + ${visibleCount - 1} * var(--row-gap))`,
              paddingTop: `calc(${centerIndex} * (var(--row-h) + var(--row-gap)))`,
            }}
          >
            <div className="text-right">
              {activeModule?.subtitle ? (
                <div className="text-[clamp(20px,2.4vw,32px)] tracking-tight text-neutral-900 animate-module-text">
                  {activeModule.subtitle}
                </div>
              ) : null}
              <div
                key={`${active.id}-${textTick}-detail`}
                className="mt-3 text-[clamp(14px,1.4vw,18px)] leading-snug text-neutral-700 animate-module-text break-words underline"
              >
                {activeModule?.topDetail ?? active.detail}
              </div>
              
              <a
                href={active.href}
                className="mt-6 inline-flex items-center justify-center border border-neutral-900/40 px-5 py-2 text-[11px] tracking-[0.25em] text-neutral-900 hover:border-neutral-900"
              >
                Learn More
              </a>
              
            </div>
          </div>
        </div>
        </div>
      
        <div className="absolute right-6 bottom-2 md:right-10 md:bottom-4 text-neutral-900/70 z-20">
          <ArrowIcon className="w-10 h-10 md:w-12 md:h-12 rotate-90" />
        </div>
        
      </div>
    </div>
  );
}
