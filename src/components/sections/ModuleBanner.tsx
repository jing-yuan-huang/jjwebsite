 "use client";

import { useEffect, useRef, useState } from "react";
import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT } from "@/lib/homeLocale";
import ModuleMenu from "./ModuleMenu";

export default function ModuleSection({ locale = "en" }: { locale?: HomeLocale }) {
    const t = HOME_TEXT[locale].module;
    const bodyLines = t.body.split("\n");
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoFailed, setVideoFailed] = useState(false);

    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;

      const p = v.play();
      if (p && typeof (p as Promise<void>).catch === "function") {
        (p as Promise<void>).catch(() => {
          // Ignore autoplay promise rejections; only real media load errors
          // should flip to fallback UI via onError.
        });
      }
    }, []);

    return (
      <section id="module" className="bg-white">
        <div className="mx-auto max-w-8xl px-6 py-0 md:px-15 md:py-0 mt-[70px] md:mt-[100px] lg:mt-[130px]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left text */}
            <div className="col-span-12 md:col-span-4 relative flex flex-col justify-end items-start h-full">
                {/*
                <span
                    className="absolute left-0 top-1 text-neutral-900 "
                >
                    <ArrowIcon className="w-[clamp(28px,4vw,56px)] h-[clamp(28px,4vw,56px)]" />
                </span>
                */}

                <h2 className="text-[clamp(44px,5vw,96px)] leading-[0.95] tracking-tight text-neutral-900">
                    {t.title}
                </h2>

                <p className="mt-3 text-[clamp(18px,2vw,28px)] tracking-tight text-neutral-900/80 leading-[0.95]">
                    {bodyLines.map((line, i) => (
                      <span key={`${line}-${i}`}>
                        {line}
                        {i < bodyLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                </p>
            </div>

  
            {/* Right image */}
            <div className="col-span-12 md:col-span-8">
              <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                {videoFailed ? (
                  <div className="flex h-full w-full items-center justify-center text-sm text-neutral-600">
                    Video unavailable
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setVideoFailed(false)}
                    onError={() => setVideoFailed(true)}
                  >
                    <source src="/videos/module.webm" type="video/webm" />
                    <source src="/videos/module.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>

        <ModuleMenu />
      </section>
    );
  }
   
