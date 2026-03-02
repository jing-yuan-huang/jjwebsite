"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/app/data/products";
import SpecOverlay from "./SpecOverlay";

type ProductTemplateProps = {
  product: Product;
  showHero?: boolean;
  showIntro?: boolean;
  showSpecs?: boolean;
  showGallery?: boolean;
};

export default function ProductTemplate({
  product,
  showHero = true,
  showIntro = true,
  showSpecs = true,
  showGallery = true,
}: ProductTemplateProps) {
  const [specOpen, setSpecOpen] = useState(false);

  
  const theme = (product as any).theme as "light" | "dark" | undefined;
  const heroBgClass = (product as any).heroBgClass as string | undefined;
  const heroImage = (product as any).heroImage as string | undefined;

  const titleTop = (product as any).titleTop ?? (product as any).listTitle ?? "";
  const titleBottom = (product as any).titleBottom ?? "";
  const category = (product as any).category ?? "";
  const specButtonText = (product as any).specButtonText ?? "SPEC";

  const gallery = ((product as any).gallery ?? []) as string[];

  const specBlocksSafe = ((product as any).specBlocks ?? []) as any[];
  const designFeatureBlocks = (((product as any).designFeatureBlocks ?? []) as any[]) ?? [];

  const isDark = theme === "dark";
  const textMain = isDark ? "text-white" : "text-neutral-900";
  const textSub = isDark ? "text-white/70" : "text-neutral-500";

  
  const hasSpecs = specBlocksSafe.length > 0;
  const canShowSpecs = showSpecs && hasSpecs;

  const openSpecs = () => {
    if (!canShowSpecs) return;
    setSpecOpen(true);
  };


  const hasGallery = gallery.length > 0;
  const canShowGallery = showGallery && hasGallery;
  const canShowHero = showHero && !!heroImage;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      {canShowHero && (
        <section className={`relative min-h-screen overflow-hidden ${heroBgClass ?? "bg-neutral-100"}`}>
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />

          {/* title */}
          <div className="relative mx-auto max-w-6xl min-h-screen px-6">
            <div className="absolute left-6 bottom-12">
              <h1 className={`leading-[0.92] tracking-tight ${textMain}`}>
                {!!titleTop && <div className="text-5xl md:text-6xl">{titleTop}</div>}
                {!!titleBottom && (
                  <div className={`mt-2 text-5xl md:text-6xl ${isDark ? "text-white/85" : "text-neutral-700"}`}>
                    {titleBottom}
                  </div>
                )}
              </h1>
            </div>

            {/* category */}
            {!!category && (
              <div className={`absolute right-6 bottom-12 mt-1 tracking-widest whitespace-pre-line ${textSub}`}>
                {category}
              </div>
            )}
          </div>
        </section>
      )}

      {/* BODY */}
      {(showIntro || canShowGallery || canShowSpecs) && (
        <section className="relative mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* 左欄（Intro / Summary） */}
            {showIntro && (
              <aside className="md:col-span-4">
                <div className="text-2xl font-semibold leading-tight text-neutral-900">
                  {titleTop}
                  {titleBottom ? (
                    <>
                      <br />
                      {titleBottom}
                    </>
                  ) : null}
                </div>

                {!!category && (
                  <div className="mt-3 text-xs tracking-widest whitespace-pre-line text-neutral-500">{category}</div>
                )}

                {/* Spec button（只有真的有 specs 才顯示） */}
                {canShowSpecs && (
                  <button
                    type="button"
                    onClick={openSpecs}
                    className="mt-10 inline-flex items-center justify-center
                             rounded-none border border-neutral-900/30 bg-transparent px-6 py-3
                             text-xs tracking-widest text-neutral-900
                             hover:bg-neutral-900 hover:text-white
                             focus:outline-none focus-visible:outline-none"
                  >
                    {specButtonText}
                  </button>
                )}
              </aside>
            )}

            {/* 右欄：圖片序列 */}
            {canShowGallery && (
              <div className={showIntro ? "md:col-span-8" : "md:col-span-12"}>
                <div className="space-y-6">
                  {gallery.map((src) => (
                    <div key={src} className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {canShowSpecs && (
            <SpecOverlay
              open={specOpen}
              onClose={() => setSpecOpen(false)}
              left={{
                titleTop,
                titleBottom,
                category,
              }}
              featureBlocks={designFeatureBlocks}
              blocks={specBlocksSafe}
            />
          )}
        </section>
      )}
    </main>
  );
}