"use client";

import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons/ArrowIcon";
import { PRODUCTS } from "@/app/data/products";
import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT, PRODUCT_LIST_OVERRIDES } from "@/lib/homeLocale";

type ProductSelectorItem = {
  id: string;
  title: string;
  subtitle: string[];
  image: string;
  theme?: "light" | "dark";
  href?: string; // 
  group: "ultraLight" | "heavyDuty" | "jReality";
};

function toSelectorItems(locale: HomeLocale): ProductSelectorItem[] {
  return Object.values(PRODUCTS).map((p) => {
    const override = locale === "zh" ? (PRODUCT_LIST_OVERRIDES.zh as any)[p.slug] : null;
    return {
      id: p.slug,
      title: override?.listTitle ?? p.listTitle,
      subtitle: override?.listSubtitle ?? p.listSubtitle,
      image: p.listPic,
      theme: p.theme,
      href:
        (p as any).hasDetailPage === false || p.group === "jReality"
          ? undefined
          : `/products/${p.slug}`,
      group: p.group,
    };
  });
}

export default function ProductSelector({ locale = "en" }: { locale?: HomeLocale }) {
  const t = HOME_TEXT[locale].productSection;
  const items = toSelectorItems(locale);

  const ultra = items.filter((i) => i.group === "ultraLight");
  const heavy = items.filter((i) => i.group === "heavyDuty");
  const jr = items.filter((i) => i.group === "jReality");

  
  const RowInner = ({ item }: { item: ProductSelectorItem }) => {
    const isJR = item.group === "jReality";
  
    return (
      <>
        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-12 md:items-stretch md:gap-x-6">
          {/* Left: Media */}
          <div className="md:col-span-4">
            <div className="aspect-[12/6] w-full bg-neutral-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
  
          {/* Middle: Title + Subtitle */}
          <div className="md:col-span-7 flex h-full">
            <div className="flex flex-col justify-between w-full">
              {/* Title up */}
              <div className="whitespace-pre-line text-[clamp(22px,2.6vw,44px)] leading-[0.9] tracking-tight text-neutral-900">
                {item.title}
              </div>
  
              {/* Subtitle bottom */}
              <div className="text-[clamp(15px,1.4vw,20px)] md:text-[clamp(17px,1.1vw,24px)] leading-[0.9] text-neutral-600 space-y-1">
                {item.subtitle.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Right: Arrow (top-right) */}
          <div className="md:col-span-1 flex justify-end">
            {!isJR && (
              <span className="text-neutral-900">
                <ArrowIcon className="w-[clamp(28px,2.2vw,44px)] h-[clamp(28px,2.2vw,44px)]" />
              </span>
            )}
          </div>
        </div>
  
        {/* MOBILE */}
        <div className="md:hidden">
          <div className="aspect-[12/6] w-full bg-neutral-100 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
  
          <div className="mt-4 flex items-start gap-x-4">
            <div className="min-w-0 flex-1">
              <div className="whitespace-pre-line text-[clamp(22px,6vw,34px)] leading-[0.95] tracking-tight text-neutral-900">
                {item.title}
              </div>
  
              <div className="mt-3 text-[clamp(14px,4vw,18px)] leading-snug text-neutral-600 space-y-1">
                {item.subtitle.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
  
            {!isJR && (
              <span className="shrink-0 text-neutral-900">
                <ArrowIcon className="w-9 h-9" />
              </span>
            )}
          </div>
        </div>
      </>
    );
  };
  const renderRow = (item: ProductSelectorItem) => {
    const clickable = !!item.href;
    const Wrapper: any = clickable ? Link : "div";
  
    return (
      <div
        key={item.id}
        className={[
          "w-full border-b border-neutral-900 bg-white",
          clickable ? "group transition-colors" : "",
        ].join(" ")}
      >
        <Wrapper
          {...(clickable ? { href: item.href, scroll: true } : {})}
          className={[
            "block w-full text-left py-6 md:py-8",
            clickable ? "" : "cursor-default",
          ].join(" ")}
        >
          <RowInner item={item} />
        </Wrapper>
      </div>
    );
  };

  return (
    <section className="mx-auto max-w-8xl px-6 md:px-15 pt-20 md:pt-28 pb-15">
      {/* Ultra Light */}
      <div className="pt-10">
        <div className="mb-8">
          <h2 className="text-[clamp(40px,6vw,92px)] leading-[0.95] tracking-tight text-neutral-900">
            {t.ultraTitle}
          </h2>
          <div className="mt-3 text-[clamp(18px,2vw,28px)] tracking-tight text-neutral-900/80 leading-[0.95]">
            {t.ultraSubtitle}
          </div>
        </div>
        <div className="border-t border-neutral-900">{ultra.map(renderRow)}</div>
      </div>

      {/* Heavy-Duty */}
      <div className="pt-16">
        <div className="mb-8">
          <h2 className="text-[clamp(40px,6vw,92px)] leading-[0.95] tracking-tight text-neutral-900">
            {t.heavyTitle}
          </h2>
          <div className="mt-3 text-[clamp(18px,2vw,28px)] tracking-tight text-neutral-900/80 leading-[0.95]">
            {t.heavySubtitle}
          </div>
        </div>
        <div className="border-t border-neutral-900">{heavy.map(renderRow)}</div>
      </div>

      {/* J-Reality */}
        <div className="pt-16">
          <div className="mb-8">
            <h2 className="text-[clamp(40px,6vw,92px)] leading-[0.95] tracking-tight text-neutral-900">
              {t.jrTitle}
            </h2>
            <div className="mt-3 text-[clamp(18px,2vw,28px)] tracking-tight text-neutral-900/80 leading-[0.95]">
             {t.jrSubtitle}
            </div>
          </div>
          <div className="border-t border-neutral-900">{jr.map(renderRow)}</div>
        </div>
      
    </section>
  );
}
