import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT } from "@/lib/homeLocale";

export default function MetaSpaceBanner({ locale = "en" }: { locale?: HomeLocale }) {
    const t = HOME_TEXT[locale].metaspace;
    const bodyLines = t.body.split("\n");
    return (
      <div className="border border-neutral-200 bg-neutral-950">
        <div className="relative w-full overflow-hidden h-[min(100vh,900px)]">
          <div className="absolute inset-0 bg-black/25" />
  
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/metaspace.mp4"
            autoPlay
            muted
            loop
            playsInline
          />


        <div className="mx-auto max-w-8xl px-6 md:px-15">
  
          <div className="absolute top-6 md:top-15">
            
            <div className="whitespace-pre-line  text-[clamp(44px,5vw,96px)] tracking-tight leading-[0.95] text-white invert-header">
              {t.title}
            </div>
          </div>
  
          <div className="absolute  bottom-6 md:bottom-15 tracking-tight text-white/80">
            <div className=" text-[clamp(14px,2vw,28px)] leading-[0.95] tracking-tight invert-header">
              {bodyLines.map((line, i) => (
                <span key={`${line}-${i}`}>
                  {line}
                  {i < bodyLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </div>
          </div>
  
          <img
            src="/images/jorjin-logo.svg"
            alt="JORJIN"
            className="
                absolute
                right-[clamp(16px,4vw,60px)]
                bottom-[clamp(16px,4vw,60px)]
                h-[clamp(18px,3vw,28px)]
                w-auto
                opacity-90
            "
           />

        </div>


        </div>
      </div>
    );
  }
  
