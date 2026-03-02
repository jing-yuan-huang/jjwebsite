"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  scrollLength?: number;
  start?: string;
};

export default function ScrollScrubVideoSection({
  src,
  scrollLength = 1600,
  start = "top top",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;


    const onLoaded = () => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;

      const setTime = gsap.quickTo(video, "currentTime", {
        duration: 0.2,
        ease: "none",
      });

      const st = ScrollTrigger.create({
        trigger: section,
        start,
        end: `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const t = self.progress * duration;
          setTime(t);
        },
      });

      return () => st.kill();
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [scrollLength, start]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 flex items-end p-10">
        <div className="text-white text-4xl tracking-tight">
          Scroll to scrub video
        </div>
      </div>
    </section>
  );
}
