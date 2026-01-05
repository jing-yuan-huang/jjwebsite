"use client";

import { useState } from "react";
import type { Product  } from "@/src/app/data/products";
import SpecOverlay from "./SpecOverlay";

export default function ProductTemplate({ product }: { product: Product }) {
  const [specOpen, setSpecOpen] = useState(false);

  const isDark = product.theme === "dark";
  const textMain = isDark ? "text-white" : "text-neutral-900";
  const textSub = isDark ? "text-white/70" : "text-neutral-500";

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className={`relative min-h-screen overflow-hidden ${product.heroBgClass}`}>
        <img
          src={product.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* title  */}
        <div className="relative mx-auto max-w-6xl min-h-screen px-6">
        
        <div className="absolute left-6 bottom-12">
          <h1 className={`leading-[0.92] font-semibold ${textMain}`}>
            <div className="text-5xl md:text-6xl">
              {product.titleTop}
            </div>
            <div
              className={`mt-2 text-5xl md:text-6xl ${
                isDark ? "text-white/85" : "text-neutral-700"
              }`}
            >
              {product.titleBottom}
            </div>
          </h1>
        </div>


           {/* category */}
           <div
            className={`absolute right-6 bottom-12 text-xs tracking-widest whitespace-pre-line ${textSub}`}
          >
            {product.category}
          </div>

        </div>


      </section>


      {/* BODY（ */}
      <section className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* 左欄 */}
          <aside className="md:col-span-4">
            <div className="text-2xl font-semibold leading-tight text-neutral-900">
              {product.titleTop}
              <br />
              {product.titleBottom}
            </div>

            <div className="mt-3 text-xs tracking-widest whitespace-pre-line text-neutral-500">
              {product.category}
            </div>

            <button
              type="button"
              onClick={() => setSpecOpen(true)}
              className="mt-10 inline-flex items-center justify-center
                         rounded-none border border-neutral-900/30 bg-transparent px-6 py-3
                         text-xs tracking-widest text-neutral-900
                         hover:bg-neutral-900 hover:text-white
                         focus:outline-none focus-visible:outline-none"
            >
              {product.specButtonText}
            </button>
          </aside>

          {/* 右欄：圖片序列 */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              {product.gallery.map((src) => (
                <div key={src} className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SPEC Overlay */}
        <SpecOverlay
        open={specOpen}
        onClose={() => setSpecOpen(false)}
        left={{
          titleTop: product.titleTop,
          titleBottom: product.titleBottom,
          category: product.category,
        }}
        featureBlocks={product.designFeatureBlocks ?? []}
        blocks={product.specBlocks}
      />

      </section>
    </main>
  );
}
