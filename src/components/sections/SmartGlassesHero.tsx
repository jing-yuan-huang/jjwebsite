"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmartGlassesHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);


  const [active, setActive] = useState(0);

  const slides = useMemo(
    () => [
      { src: "/videos/odm2.mp4", subtitle: "Heavy-Duty AR Headset" },
      { src: "/videos/hj1.mp4", subtitle: "Ultra-Light AR Glasses"},
      { src: "/videos/c9t2.mp4", subtitle:  "Ultra-Light AR Glasses" },
    ],
    []
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const box = videoBoxRef.current;
    if (!section || !box) return;

    const FROM = 1.5;

    gsap.set(box, {
      transformOrigin: "50% 50%",
      scale: FROM,
      willChange: "transform",
    });
  }, []);


  useLayoutEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.load();

    const p = v.play();
    if (p && typeof (p as Promise<void>).catch === "function") {
      (p as Promise<void>).catch(() => {
      });
    }
  }, [active]);

 
  const go = (idx: number) => {
    setActive((prev) => {
      if (idx < 0) return prev;
      if (idx >= slides.length) return prev;
      return idx;
    });
  };


  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section ref={sectionRef} className="relative isolation-isolate mt-50 mb-20">
      <div className="absolute inset-0 z-0 bg-white" />

      <div className="mx-auto max-w-8xl px-6 md:px-15">
        <div className="px-4 md:px-10 lg:px-25">
          <div
            ref={videoBoxRef}
            className="relative mt-[3vw] aspect-[16/8] overflow-hidden"
          >
            <video
              ref={videoRef}
              key={slides[active].src} 
              className="absolute inset-0 h-full w-full object-cover"
              src={slides[active].src}
              autoPlay
              muted
              loop={false}
              playsInline
              preload="auto"
              onEnded={next}
            />

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 pointer-events-auto">
              {slides.map((_, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to video ${i + 1}`}
                    onClick={() => go(i)}
                    className={[
                      "h-2 w-2 rounded-full transition-transform",
                      "bg-white/70 hover:bg-white",
                      isActive ? "scale-110" : "scale-100",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto max-w-8xl px-6 md:px-15 h-full flex items-center">
          <div className="w-full flex flex-col justify-center">
            <h2
              className="md:text-[clamp(48px,5vw,96px)]
                         text-[clamp(36px,8vw,64px)]
                         leading-[0.95]
                         text-white
                         mix-blend-difference
                         tracking-tight"
            >
              AR Smart<br />
              Glasses
            </h2>

            <p
              className="mt-4
                         text-[clamp(16px,3.8vw,20px)]
                         md:text-[2.5vw]
                         leading-[0.95]
                         text-white
                         mix-blend-difference
                         tracking-tight"
            >
              - <br />
              {slides[active].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}