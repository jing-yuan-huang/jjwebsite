"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  TITLE_CUES, 
  DEFAULT_CUE_STYLE,
  alignClassMap,
  type TitleCue
 } from "./cues";

gsap.registerPlugin(ScrollTrigger);

export default function HJ1SpecExperience() {
  // ==== Scroll Video refs/states ====
  const videoSectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const [activeTitleCue, setActiveTitleCue] = useState<TitleCue | null>(null);
  const activeTitleCueIdRef = useRef<string | null>(null);

  // ==== Scroll-driven video scrub + title cues ====
  useEffect(() => {
    const section = videoSectionRef.current;
    const pinEl = pinRef.current;
    const video = videoRef.current;
    
    if (!section || !pinEl || !video) return;

    let st: ScrollTrigger | null = null;

    const setup = () => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;

      st?.kill();
      st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=4500", // bigger then slow
        pin: pinEl,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const t = self.progress * duration;
          video.currentTime = t;

         
          const titleCue = TITLE_CUES.find((c) => t >= c.start && t < c.end) ?? null;
          const nextTitleId = titleCue?.id ?? null;

          if (activeTitleCueIdRef.current !== nextTitleId) {
            activeTitleCueIdRef.current = nextTitleId;
            setActiveTitleCue(titleCue);
          }
        },
      });
    };

    
    const unlock = async () => {
      try {
        await video.play();
        video.pause();
      } catch {
       
      }
    };
    unlock();

    video.addEventListener("loadedmetadata", setup);
    if (video.readyState >= 1) setup();

    return () => {
      st?.kill();
      video.removeEventListener("loadedmetadata", setup);
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/*
      =========================
      HERO
      =========================
      <section className="relative min-h-[100svh] w-full isolation-isolate overflow-hidden">
        ...
      </section>
      */}

      {/*
      =========================
      INTRO
      =========================
      */}
      <section className="mx-auto max-w-6xl px-6 md:px-6 py-24">
        <IntroBlock
          title="The World’s Smallest Eye-Tracking AR Reference Platform"
          body="Precision eye tracking in an ultra-light form factor—designed for all-day wear, rapid integration, and scalable AR innovation."
        />
      </section>
      

      {/* SCROLL VIDEO */}
      <section ref={videoSectionRef} className="relative w-full bg-black">
        <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hj1-scroll.mp4"
            muted
            playsInline
            preload="auto"
          />

          {/* Overlay titles */}
         
          <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-center">
            <div className="mx-auto max-w-[1440px] px-6 md:px-12 pb-16">
              {(() => {
                const cue = activeTitleCue; // TitleCue | null

                const align = cue?.align ?? DEFAULT_CUE_STYLE.align;
                const titleColor = cue?.titleColor ?? DEFAULT_CUE_STYLE.titleColor;
                const subtitleColor = cue?.subtitleColor ?? DEFAULT_CUE_STYLE.subtitleColor;

                return (
                  <div
                    className={[
                      "flex flex-col gap-3",
                      alignClassMap[align],
                      "transition-all duration-300 ease-out",
                      cue ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                    ].join(" ")}
                  >
                    <h2
                      className="text-[clamp(28px,4vw,64px)] leading-[0.95] tracking-tight"
                      style={{ color: titleColor }}
                    >
                      {cue?.title}
                    </h2>

                    {cue?.subtitle && (
                      <p
                        className="max-w-2xl text-[clamp(16px,2vw,24px)] tracking-tight"
                        style={{ color: subtitleColor }}
                      >
                        {cue.subtitle}
                      </p>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


function IntroBlock({ title, body }: { title: string; body: string }) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const titleEl = titleRef.current;
    const bodyEl = bodyRef.current;
    if (!titleEl || !bodyEl) return;

    const chars = titleEl.querySelectorAll<HTMLSpanElement>(".char");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      chars,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.03,
      }
    ).fromTo(
      bodyEl,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.25"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="max-w-3xl">
      <h2
        ref={titleRef}
        className="mb-6 text-[clamp(28px,3vw,48px)] leading-[1.05] tracking-tight text-neutral-900 overflow-hidden"
        aria-label={title}
      >
        {splitChars(title)}
      </h2>

      <p ref={bodyRef} className="text-[clamp(18px,2vw,28px)] tracking-tight text-neutral-700 opacity-0">
        {body}
      </p>
    </div>
  );
}

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span key={i} className="char inline-block will-change-transform">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}