import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT } from "@/lib/homeLocale";
import { buttonClass } from "@/components/ui/Button";

const CAPABILITIES = {
  en: {
    title: "Core Capabilities",
    items: [
      {
        heading: "Optical & AR System Integration",
        body: "Advanced AR optical design and system integration for next-generation smart glasses.",
      },
      {
        heading: "Miniaturized Module Design",
        body: "Highly integrated and compact modules designed for wireless communication and connectivity applications.",
      },
      {
        heading: "Product & Hardware–Software Design",
        body: "Comprehensive product design combining hardware architecture and software development.",
      },
      {
        heading: "Immersive Interaction Solutions",
        body: "Creating immersive AI + AR experiences for smart glasses and physical interactive spaces.",
      },
    ],
  },
  zh: {
    title: "核心能力",
    items: [
      {
        heading: "AR 光學與系統整合",
        body: "提供智慧眼鏡所需的 AR 光學設計與整體系統整合能力。",
      },
      {
        heading: "微型化模組設計",
        body: "打造高度整合的小型化模組，應用於無線傳輸與通訊領域。",
      },
      {
        heading: "產品與軟硬體設計",
        body: "整合產品設計、硬體架構與軟體開發能力。",
      },
      {
        heading: "沉浸式互動解決方案",
        body: "打造 AI + AR 結合的沉浸式互動應用與實體空間體驗。",
      },
    ],
  },
} as const;

export default function AboutPage({ locale = "en" }: { locale?: HomeLocale }) {
    const t = HOME_TEXT[locale].about;
    const capabilities = CAPABILITIES[locale];
    const subtitleLines = t.subtitle.split("\n");
    const bodyLines = t.body.split("\n");
    const investorHref = locale === "zh" ? "/zh/investor" : "/investor";
    return (
      <main className="bg-white">
        <section className="mx-auto px-6 md:px-15 py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
            {/* Left title */}
            <div className="md:col-span-4">
              <h1 className="whitespace-pre-line px-2 md:px-0 text-left md:text-left text-5xl md:text-6xl leading-[0.95] tracking-tight text-neutral-900">
                {t.title}
              </h1>
              <h2 className="mt-16 md:mt-24 px-2 md:px-0 text-left text-[clamp(26px,2.6vw,38px)] leading-[0.95] tracking-tight text-neutral-900">
                {capabilities.title}
              </h2>
            </div>
  
            {/* Right copy */}
            <div className="md:col-span-8 md:pt-2">
              <p className="max-w-2xl px-2 md:px-0 text-left md:text-right md:ml-auto text-base md:text-lg font-medium leading-snug text-neutral-900">
                {subtitleLines.map((line, i) => (
                  <span key={`${line}-${i}`}>
                    {line}
                    {i === 0 ? <br /> : null}
                  </span>
                ))}
              </p>
  
              <p className="mt-4 max-w-2xl px-2 md:px-0 text-left md:text-right md:ml-auto text-sm leading-relaxed text-neutral-500">
                {bodyLines.map((line, i) => (
                  <span key={`${line}-${i}`}>
                    {line}
                    {i < bodyLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>

              <div className="mt-10 max-w-2xl px-2 md:px-0 md:ml-auto">
                <div className="grid grid-cols-1 gap-6">
                  {capabilities.items.map((item) => (
                    <div key={item.heading}>
                      <h3 className="text-left md:text-right text-[clamp(18px,1.5vw,24px)] leading-[1.05] tracking-tight text-neutral-900">
                        {item.heading}
                      </h3>
                      <p className="mt-2 text-left md:text-right text-sm md:text-[15px] leading-relaxed text-neutral-600">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 max-w-2xl px-2 md:px-0 text-left md:text-right md:ml-auto">
                <a
                  href={investorHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  {t.investorButton}
                </a>
              </div>
            </div>
          </div>

        </section>
      </main>
    );
  }
  
