"use client";

import { usePathname } from "next/navigation";
import { HOME_TEXT } from "@/lib/homeLocale";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/zh") ? "zh" : "en";
  const t = HOME_TEXT[locale].footer;
  const investorHref = locale === "zh" ? "/zh/investor" : "/investor";
  const investorLabel = HOME_TEXT[locale].about.investorButton;

    return (
      <footer className="bg-neutral-200 text-neutral-900">
        {/* <div className="absolute left-6 top-6 md:left-15 md:top-15"> */}
        <div className="mx-auto max-w-8xl px-6 md:px-15 pt-16 md:pt-20 pb-10">
          {/* Top row: Menu / Social / Company info */}
          <div className="grid grid-cols-12 gap-y-12 gap-x-8">
            {/* Menu */}
            <div className="col-span-12 md:col-span-3">
              <div className="text-[22px] tracking-tight">{t.menuTitle}</div>
              <div className="mt-4 h-px w-full bg-neutral-900/40" />
  
              <nav className="mt-6 flex flex-col items-start gap-4 text-left text-[18px]">
                <a href="#smartglasses" className="block underline underline-offset-4">
                  {locale === "zh" ? "AR 智慧眼鏡" : "AR smart glasses"}
                </a>
                {/* <a href="#updates" className="block underline underline-offset-4">
                  {locale === "zh" ? t.menuUpdate : "News"}
                </a> */}
                <a href="#module" className="block underline underline-offset-4">
                  {locale === "zh" ? "模組" : "module"}
                </a>
                <a href="#metaspace" className="block underline underline-offset-4">
                  {locale === "zh" ? "沈浸式投影空間" : "Metaspace"}
                </a>
                <a href="#about" className="block underline underline-offset-4">
                  {locale === "zh" ? t.menuAbout : "about"}
                </a>
                <a href={investorHref} className="block underline underline-offset-4">
                  {investorLabel}
                </a>
              </nav>
            </div>
  
            {/* Social */}
            <div className="col-span-12 md:col-span-3">
              <div className="text-[22px] tracking-tight">{t.socialTitle}</div>
              <div className="mt-4 h-px w-full bg-neutral-900/40" />
  
              <div className="mt-6 space-y-4 text-[18px]">
                <a
                  href="https://www.facebook.com/Jorjin.XR.Fusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/jorjin-technologies-inc-/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/channel/UC7IkoXGJ6-OxHWH61L7lDjA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4"
                >
                  Youtube
                </a>
              </div>
            </div>
  
            {/* Company info (right) */}
            <div className="col-span-12 md:col-span-6">
              <div className="text-right text-[22px] tracking-tight">
                {t.companyName}
              </div>
              <div className="mt-4 h-px w-full bg-neutral-900/40" />
  
              <div className="mt-6 text-right text-[18px] leading-relaxed text-neutral-900/70 whitespace-pre-line">
                {t.address}
              </div>
  
              <a
                href="tel:+886226490055"
                className="mt-6 block text-right text-[18px] text-neutral-900/70 underline underline-offset-4"
              >
                +886 (2) 2649 - 0055
              </a>
            </div>
          </div>


         {/* ===== Middle: Big CTA + email ===== */}
         <div className="mt-20 md:mt-28">
            <div className="ml-auto max-w-[520px] text-right">
                <a
                href="mailto:sales@jorjin.com"
                className="inline-block text-[clamp(28px,3vw,52px)] leading-[1] tracking-tight underline underline-offset-8"
                >
                sales@jorjin.com
                </a>
                <p className="mt-4 text-[14px] leading-snug text-neutral-900/70">
                {t.ctaBody}
                </p>
            </div>
        </div>


        {/* ===== Bottom row: 3 items bottom-aligned ===== */}
        <div className="mt-24 md:mt-20 grid grid-cols-12 items-end text-[18px] text-neutral-900/80">
        {/* Left */}
        <div className="col-span-12 md:col-span-4">
            {/* Left: Big title */}
       
            <div className="text-[clamp(48px,8vw,72px)] md:text-[clamp(64px,5vw,96px)] leading-[0.9] tracking-tight text-neutral-900">
            {t.connect.split("\n").map((line, i) => (
              <span key={`${line}-${i}`}>
                {line}
                {i === 0 ? <br /> : null}
              </span>
            ))}
            </div>
        
        </div>

        {/* Center */}
        <div className="col-span-12 md:col-span-4 md:text-center">
            <a href="#top" className="inline-block leading-none underline underline-offset-4">
            {t.backToTop}
            </a>
        </div>

        {/* Right */}
        <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="leading-none">Copyright © JORJIN 2026</div>
        </div>
        </div>

         
        </div>
      </footer>
    );
  }
  
