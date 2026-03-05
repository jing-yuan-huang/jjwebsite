"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import type { Product } from "@/app/data/products";
import type { SpecBlock } from "@/types/spec";
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
  const theme = product.theme;
  const heroBgClass = product.heroBgClass;
  const heroImage = product.heroImage;
  const titleTop = product.titleTop ?? product.listTitle ?? "";
  const titleBottom = product.titleBottom ?? "";
  const category = product.category ?? "";
  const specButtonText = product.specButtonText ?? "SPEC";
  const gallery = product.gallery ?? [];
  const specBlocksSafe: SpecBlock[] = product.specBlocks ?? [];
  const designFeatureBlocks: SpecBlock[] = product.designFeatureBlocks ?? [];

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

                {/* Spec button */}
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

            {/* Picture */}
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
