"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { InnovationItem } from "./data";
import { ArrowIcon } from "./ArrowIcon";

export default function ProductSelector({
  items,
  initialActiveId,
}: {
  items: InnovationItem[];
  initialActiveId?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(
    initialActiveId ?? items[0]?.id ?? null
  );
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // Tailwind md
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="space-y-0 mx-auto max-w-8xl px-6 md:px-15">
      {items.map((item) => {
        const expanded = activeId === item.id;

        return (
          <div
            key={item.id}
            className={["group w-full border-b border-neutral-900", "bg-white transition-colors"].join(" ")}
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
                  router.push(item.href);
                  return;
                }

                // Mobile: first tap expands, second tap navigates
                setActiveId((cur) => {
                  const nextExpanded = cur === item.id;
                  if (nextExpanded) {
                    router.push(item.href);
                    return cur;
                  }
                  return item.id;
                });
              }}
            >
              {/* COLLAPSED */}
              {!expanded && (
                <div className="flex items-start w-full gap-x-[clamp(12px,2vw,32px)]">
                  <div className="min-w-0 flex-1">
                    <div className="whitespace-pre-line text-[24px] md:text-[48px] tracking-tight leading-tight text-neutral-900">
                      {item.title}
                    </div>
                  </div>

                  <span
                    className="ml-auto shrink-0 text-neutral-900 transition-transform duration-300 origin-center rotate-0"
                    aria-hidden="true"
                  >
                    <ArrowIcon className="w-[clamp(28px,3vw,56px)] h-[clamp(28px,3vw,56px)]" />
                  </span>
                </div>
              )}

              {/* EXPANDED (md+) */}
              {expanded && (
                <div className="hidden md:grid md:grid-cols-12 md:gap-10 md:items-start">
                  <div className="md:col-span-5 grid grid-rows-[auto_1fr] gap-6">
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
                        <ArrowIcon className="w-[clamp(28px,3vw,56px)] h-[clamp(28px,3vw,56px)]" />
                      </span>
                    </div>

                    <div className="overflow-hidden">
                      <div className="mt-2 type-caption tracking-widest text-neutral-500">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

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

              {/* EXPANDED (mobile) */}
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
  );
}
