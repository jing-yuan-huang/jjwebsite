import type { HomeLocale } from "@/lib/homeLocale";
import { HOME_TEXT } from "@/lib/homeLocale";

type UpdateItem = {
  id: string;
  date: string;
  title: string;
  location: string;
  bg: string; // tailwind bg class
  text?: string;
};

const UPDATE_STYLE = [
  { id: "ces", bg: "bg-[#A6261C]", text: "text-white" },
  { id: "milo", bg: "bg-[#E0472A]", text: "text-white" },
  { id: "mwc", bg: "bg-[#0F171A]", text: "text-white" },
];

export default function Updates({ locale = "en" }: { locale?: HomeLocale }) {
  const t = HOME_TEXT[locale].news;
  const updates: UpdateItem[] = t.updates.map((u) => {
    const style = UPDATE_STYLE.find((s) => s.id === u.id);
    return {
      ...u,
      bg: style?.bg ?? "bg-neutral-900",
      text: style?.text ?? "text-white",
    };
  });

  return (
    <section className="bg- white">
      <div className="mx-auto mt-30 ">
        {/* ===== Header ===== */}
        <div className="mx-auto max-w-8xl px-6 md:px-15">
          <h2 className="type-[42px] md:text-[96px] tracking-tight text-neutral-900">
            {t.title}
          </h2>
        </div>

        {/* ===== Rows ===== */}
        <div>
          {updates.map((item) => (
            <div
              key={item.date + item.title}
              className={[
                "w-full py-10",
                item.bg,
                item.text ?? "text-white",
                "transition-all duration-300 hover:brightness-110",
              ].join(" ")}
            >
              {/* Text container */}
              <div className="mx-auto max-w-8xl px-6 md:px-15">
                <div className="flex items-start justify-between">
                  {/* Date */}
                  <div className="text-[clamp(18px,3vw,48px)] tracking-tight">
                    {item.title}
                  </div>

                  {/* Title + Location */}
                  <div className="text-right">
                    <div className="text-[clamp(18px,3vw,48px)] tracking-tight">
                      {item.date}
                    </div>
                    <div className="mt-2 text-l opacity-80">
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
