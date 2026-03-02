import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT } from "@/lib/homeLocale";

export default function AboutPage({ locale = "en" }: { locale?: HomeLocale }) {
    const t = HOME_TEXT[locale].about;
    const subtitleLines = t.subtitle.split("\n");
    const bodyLines = t.body.split("\n");
    return (
      <main className="bg-white">
        <section className="mx-auto px-15 py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-start">
            {/* Left title */}
            <div className="md:col-span-4">
              <h1 className="whitespace-pre-line text-5xl md:text-6xl leading-[0.95] tracking-tight text-neutral-900">
                {t.title}
              </h1>
            </div>
  
            {/* Right copy */}
            <div className="md:col-span-8 md:pt-2">
              <p className="max-w-2xl text-center md:text-right ml-auto text-base md:text-lg font-medium leading-snug text-neutral-900">
                {subtitleLines.map((line, i) => (
                  <span key={`${line}-${i}`}>
                    {line}
                    {i === 0 ? <br /> : null}
                  </span>
                ))}
              </p>
  
              <p className="mt-4 max-w-2xl text-center md:text-right ml-auto text-sm leading-relaxed text-neutral-500">
                {bodyLines.map((line, i) => (
                  <span key={`${line}-${i}`}>
                    {line}
                    {i < bodyLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
